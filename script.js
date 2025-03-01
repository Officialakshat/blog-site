let currentLocationHome = prompt("When i am in my home , then call me with my nick name (Manu) otherwise call me Akshat");
const name1 = "Akshat"
let name2 = "manu"

if (currentLocationHome === "true" || currentLocationHome === "True" ){
    document.getElementById("name").innerHTML = name2;
}else if(currentLocationHome === "false" || currentLocationHome === "False" ){
    document.getElementById("name").innerHTML = name1;
}else{
    alert("Only write true or false or True or False")
}