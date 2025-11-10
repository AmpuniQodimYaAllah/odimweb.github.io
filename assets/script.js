const toggle=document.getElementById('theme-toggle');
const root=document.documentElement;

function setTheme(mode){
  if(mode==='light'){
    root.classList.add('light');
    toggle.textContent='🌙';
  } else {
    root.classList.remove('light');
    toggle.textContent='☀️';
  }
}

const saved=localStorage.getItem('theme')||'dark';
setTheme(saved);

toggle.addEventListener('click',()=>{
  const mode=root.classList.contains('light')?'dark':'light';
  setTheme(mode);
  localStorage.setItem('theme',mode);
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.1});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
