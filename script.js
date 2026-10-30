const body=document.body;
const themeToggle=document.getElementById("theme-toggle");
const menuToggle=document.getElementById("menu-toggle");
const nav=document.getElementById("nav");
const backToTop=document.getElementById("back-to-top");
document.getElementById("year").textContent=new Date().getFullYear();
const savedTheme=localStorage.getItem("sanjay-portfolio-theme");
if(savedTheme==="light")body.classList.add("light");
updateThemeIcon();
themeToggle.addEventListener("click",()=>{body.classList.toggle("light");localStorage.setItem("sanjay-portfolio-theme",body.classList.contains("light")?"light":"dark");updateThemeIcon();});
function updateThemeIcon(){const light=body.classList.contains("light");themeToggle.textContent=light?"☾":"☀";themeToggle.setAttribute("aria-label",light?"Switch to dark mode":"Switch to light mode");}
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.textContent=open?"✕":"☰";});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰";}));
const observer=new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in-view");obs.unobserve(entry.target);}});},{threshold:.12});
document.querySelectorAll(".reveal").forEach(item=>observer.observe(item));
window.addEventListener("scroll",()=>backToTop.classList.toggle("visible",window.scrollY>420));
backToTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
