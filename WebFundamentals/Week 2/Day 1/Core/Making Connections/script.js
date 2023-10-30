function changeName(){
    document.querySelector("#name").innerText="Achref Nejah"
}

function refuseOne(){
    document.querySelector("#contactOne").remove();
    document.querySelector("#cnxRequests").innerText--
}
function refuseTwo(){
    document.querySelector("#contactTwo").remove();
    document.querySelector("#cnxRequests").innerText--
    
    
}
function acceptOne(){
    document.querySelector("#contactOne").remove();
    document.querySelector("#cnxRequests").innerText--
    document.querySelector("#cnxs").innerText++
}
function acceptTwo(){
    document.querySelector("#contactTwo").remove();
    document.querySelector("#cnxRequests").innerText--
    document.querySelector("#cnxs").innerText++

}