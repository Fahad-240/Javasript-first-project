function submit(){
    let userInput1 = document.querySelector("#user-Iput1").value;
    let userInput2 = document.querySelector("#user-Iput2").value;
    document.querySelector("#result").innerText = Number(userInput1) + Number(userInput2)
}
