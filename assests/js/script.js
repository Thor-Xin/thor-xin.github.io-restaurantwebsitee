let menu = document.querySelector('#menu_bar');
let nav_bar = document.querySelector('.nav_bar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav_bar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nav_bar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }
    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader, 3000);
}
window.onload = fadeOut();