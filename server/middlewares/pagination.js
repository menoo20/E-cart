 const resultPaginated =  (model) =>{
    //turn string id into objectId
    String.prototype.toObjectId = function() {
        var ObjectId = (require('mongoose').Types.ObjectId);
        return new ObjectId(this.toString());
      };
    // Every String can be casted in ObjectId now
    return async (req,res, next)=>{
    // const newest = req.query.newest? req.query.newest: null
    // const category = req.query.category? req.query.category: null
    // const featured = req.query.isFeatured? req.query.isFeatured: null
    // const highestPrice = req.query.highestPrice? req.query.highestPrice: null
    const page = req.query.page? parseInt(req.query.page) : 1
    const limit = req.query.limit? parseInt(req.query.limit): 4
    const  sort={};
    const  filter = {};
  
    if(req.query.highestPrice){
        sort.price = -1
    }
    if(req.query.category){
        filter.category = {"categories": { $in: {_id: req.query.category.toObjectId()}}}
    }
    if(req.query.newest){
        sort.createdAt = -1 
    }
    if(req.query.oldest){
        sort.createdAt = 1
    }
    if(req.query.isFeatured){
        filter.isFeatured = {"isFeatured": true}
    }
      const results = {};
    try{

      let startIndex = (page-1) * limit;
      
      let endIndex = page * limit;
    
      if(startIndex > 0){
          results.previousPage = page - 1;
      }

       if(req.query.category){
        const paginatedData = await model.find(filter.category? filter.category: {}, async(err, data)=>{
            if(data.length){
                results.totalDocuments = await data.length;
                results.totalPages = Math.ceil( (results.totalDocuments) / limit)
                if(endIndex <  data.length){
                    results.nextPage = page +1;
                    }
            }
          
        }).clone().sort(sort? sort: "").limit(limit).skip(startIndex).exec();
        results.results = paginatedData;
        
        res.results =  results;
        next()
       }else if(req.query.isFeatured){
           const data = await model.find({isFeatured: true}).limit(8)
           res.results =  results;
           next()
       }else{
        const paginatedData = await model.find({}, async(err, data)=>{
            if(data.length){
                results.totalDocuments = await data.length;
                results.totalPages = Math.ceil( (results.totalDocuments) / limit)
                if(endIndex <  data.length){
                    results.nextPage = page +1;
                    }
            }
          
        }).clone().sort(sort? sort: "").limit(limit).skip(startIndex).exec();
        results.results = paginatedData;
        
        res.results =  results;
        next()
       }
           
      }catch(e){
          res.status(500).json(e.message)
      }

    }
}

module.exports  = resultPaginated;