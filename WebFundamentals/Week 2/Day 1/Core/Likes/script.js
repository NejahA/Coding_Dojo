var likes =[0,0,0];

function addOne() {
    likes[0]++
    console.log(likes[0]);
    document.querySelector("#likesOne").innerText =likes[0]+" likes(s)"
}

function addTwo(){
    likes[1]++
    document.querySelector("#likesTwo").innerText =likes[1]+" likes(s)"

}

function addThree(){
    likes[2]++
    document.querySelector("#likesThree").innerText =likes[2]+" likes(s)"
}