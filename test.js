
function clean(text) {
    const regex = /([^a-zA-Z0-9\s])/gm;
    const str = `${text}`;
    const subst = ``
    const english =  str.replace(regex, "").replace(/ +/, "");
    return english
}

const str = "جلوبال تليكوم حاليا، دمجت مع فيمبلكوم الروسية (بالإنجليزية: vimpelcom)";

const arr = str.split(" ");
const sentence = [];
const regex = /([^a-zA-Z0-9\s])/gm;

const Arabic = arr.map(word => {
    word.replace(regex, '');
    return word
})