

window.onload = ()=>{
const OPENPOPUP = document.getElementById('buttonAdd');
const CLosePopUp  = document.getElementById("pop_up_close");
const popup =document.getElementById("pop_up");



OPENPOPUP.addEventListener("click",function(e){
    e.preventDefault();
    popup.classList.add('active');
})


CLosePopUp.addEventListener('click',()=>{
    popup.classList.remove('active');
})}