function handleAlert() {
    console.log("Alert Triggered");
}
const buttons = document.querySelectorAll('.alert-btn');
buttons.forEach((button)=>{
    button.addEventListener('click',handleAlert);
});