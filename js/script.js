//document.addEventListener('DOMContentLoaded', function(){
//  const topBtn = document.getElementById('topBtn');
//  window.addEventListener('scroll', function(){
//    if(window.scrollY > 300) topBtn.style.display = 'block';
//    else topBtn.style.display = 'none';
//    document.querySelectorAll('.card').forEach(c=>{
//      const r = c.getBoundingClientRect();
//      if(r.top < window.innerHeight - 60) c.classList.add('visible');
//    });
//  });
//  topBtn.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
//  const y = new Date().getFullYear();
//  document.getElementById('year').textContent = y;
// });