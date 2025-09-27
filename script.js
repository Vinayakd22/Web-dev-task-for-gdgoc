const playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click',()=>{alert("🎶 Playing demo song!")});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");
menuToggle.addEventListener("click",()=>{nav.classList.toggle("show")});
