const scroller=document.querySelector('.horizontal-scroll');
window.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)&&!e.target.closest('.vertical-list')){e.preventDefault();scroller.scrollLeft+=e.deltaY;}},{passive:false});
const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});
document.querySelector('form').addEventListener('submit',e=>{e.preventDefault();alert('Thank you. Please connect this form to your email service before publishing.');});
