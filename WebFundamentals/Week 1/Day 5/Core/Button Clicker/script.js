function removeButton(element){
    element.remove();
}

function login(element){
    if(element.innerText =="Login"){
        element.innerText ="Logout"
    }
    else{
        element.innerText="Login"
    }
}
var likesOne=0;
var likesTwo=0;
function addLikeOne(element) {
    likesOne++
    element.innerText= likesOne+" likes";
    return likesOne;
}

function addLikeTwo(element) {
    likesTwo++
    element.innerText= likesTwo+" likes";
    return likesTwo;
}