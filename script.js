const nav=document.querySelector('.nav');document.querySelector('.menu-toggle').onclick=()=>nav.classList.toggle('open');
document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

let allProjects=[];
const grid=document.getElementById('projectGrid');
const modal=document.getElementById('projectModal');

function renderProjects(filter='all'){
  grid.innerHTML='';
  allProjects.filter(p=>filter==='all'||p.category===filter).forEach(p=>{
    const card=document.createElement('article');
    card.className='project-card reveal visible';
    card.innerHTML=`<img src="${p.cover}" alt="${p.title}"><div class="project-info"><span class="eyebrow">${p.category}</span><h3>${p.title}</h3><p>${p.location} • ${p.year}</p></div>`;
    card.onclick=()=>openModal(p);
    grid.appendChild(card);
  });
}
function openModal(p){
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');
  document.getElementById('modalImg').src=p.cover;
  document.getElementById('modalImg').alt=p.title;
  document.getElementById('modalCat').textContent=p.category+' • '+p.location;
  document.getElementById('modalTitle').textContent=p.title;
  document.getElementById('modalDesc').textContent=p.description;
}
document.querySelector('.modal-close').onclick=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};
modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
document.querySelectorAll('.filter').forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(btn.dataset.filter);
});
fetch('projects.json').then(r=>r.json()).then(data=>{allProjects=data;renderProjects();}).catch(()=>{
  grid.innerHTML='<p>Projects could not be loaded. Check projects.json file.</p>';
});
