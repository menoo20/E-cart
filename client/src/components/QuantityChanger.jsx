import React, { useState } from 'react'

const QuantityChanger = () => {
  const [quant, setQuant] = useState(1);

  const Increase = _=>setQuant(quant+1);
  const Decrease = _=>{
    if(quant == 1){return;}
    setQuant(quant-1)
    }


  return (
    <div className="quant d-flex flex-row justify-content-between align-items-center px-3 py-3 ">
        <i className='bi bi-plus' onClick={Increase}></i>
            <p className="fw-bold">{quant}</p>
        <i className='bi bi-dash' onClick={Decrease}></i>
    </div>
  )
}

export default QuantityChanger