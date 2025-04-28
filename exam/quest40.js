
const buttons = document.querySelectorAll(".alert-btn")

function handleAlert(){
    console.log("Alert triggered");
}

for(const button of buttons){
    button.addEventListener("click", handleAlert)
}
