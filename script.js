const root = document.getElementById('scrollRoot');
const cursor = document.querySelector('.cursor-glass');
const menu = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');

window.addEventListener('mousemove', (e)=>{
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

toggle.addEventListener('click', ()=> menu.classList.toggle('open'));

// Desktop: convert mouse wheel into horizontal section travel, but allow vertical panels to scroll internally.
window.addEventListener('wheel', (e)=>{
  if (window.innerWidth <= 850) return;
  const panel = e.target.closest('.vertical-panel');
  if(panel){
    const atTop = panel.scrollTop <= 0;
    const atBottom = Math.ceil(panel.scrollTop + panel.clientHeight) >= panel.scrollHeight;
    if((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) return;
  }
  e.preventDefault();
  root.scrollBy({left:e.deltaY, behavior:'smooth'});
},{passive:false});

// Section links work with horizontal scroll.
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(!target) return;
    e.preventDefault();
    menu.classList.remove('open');
    if(window.innerWidth > 850){ root.scrollTo({left:target.offsetLeft, behavior:'smooth'}); }
    else target.scrollIntoView({behavior:'smooth'});
  });
});

const progressBar = document.querySelector('.scroll-progress span');
const blobs = document.querySelectorAll('.fluid-blob, .glass-ribbon');
function updateFluidProgress(){
  if(!root || !progressBar) return;
  const max = root.scrollWidth - root.clientWidth;
  const ratio = max > 0 ? root.scrollLeft / max : window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
  progressBar.style.width = `${Math.max(0, Math.min(1, ratio))*100}%`;
  blobs.forEach((b,i)=>{
    b.style.translate = `${ratio * (i%2 ? -90 : 90)}px ${Math.sin(ratio*6+i)*24}px`;
  });
}
root.addEventListener('scroll', updateFluidProgress);
window.addEventListener('scroll', updateFluidProgress);
window.addEventListener('resize', updateFluidProgress);
updateFluidProgress();

// Soft tilt on glass/project cards.
document.querySelectorAll('.service-card,.project-tile,.glass-card').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    if(window.innerWidth <= 850) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(900px) rotateX(${-y*4}deg) rotateY(${x*5}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
});
