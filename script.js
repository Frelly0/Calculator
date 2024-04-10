
let result = document.getElementById('input');

function getResult(value){
    if(value === "="){
        result.value = eval(result.value);
    } else {
        result.value += value
    }
}

function clearResult(){
    result.value = ""
}
