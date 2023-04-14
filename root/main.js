const userName = window.prompt("What is your name?");
console.log(userName);
if(!userName){ //null or false
    console.log("cancelado");
}
if (userName!=="Admin") {
    console.log("I dont remember you")
}
else {
    const userPassWord = window.prompt("What is your passWord?");
    if (!userPassWord) {
        console.log("cancelado");

    }
    else if (userPassWord !== "TheMaster") {
        console.log ("Incorret password");
    }
    else {
        console.log ("Corret password");
    }
}





