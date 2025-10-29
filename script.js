
const navLinqks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => link.classList.add('hovered'));
  link.addEventListener('mouseleave', () => link.classList.remove('hovered'));
});


document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
});


const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:0.15});

document.querySelectorAll('.reveal').forEach(el=> observer.observe(el));

const galleryItems = document.querySelectorAll('.gallery figure');
galleryItems.forEach((fig, i)=>{
  
  fig.classList.add('reveal');
  observer.observe(fig);
});
