const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
for (const wave of document.querySelectorAll('.wave')) { for(let i=0;i<45;i++){ const bar=document.createElement('i');bar.style.setProperty('--h',`${4+Math.sin(i/44*Math.PI)*20*(.5+.5*Math.sin(i*4)**2)}px`);bar.style.setProperty('--d',`${i*.04}s`);wave.append(bar); } }
if ('IntersectionObserver' in window && !reduced) { const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}},{threshold:.08});for(const el of document.querySelectorAll('.section-heading,.demo-copy,.feature-grid article,.usecase-list article,.design>div,.contact>h2')){el.classList.add('reveal');observer.observe(el)} }

const contactOpen=document.querySelector('#contact-open');
contactOpen.addEventListener('click',()=>{const panel=document.querySelector('#contact-options');panel.hidden=!panel.hidden;contactOpen.setAttribute('aria-expanded',String(!panel.hidden));});
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#contact-status');try{await navigator.clipboard.writeText('jjpapa36912@gmail.com');status.textContent='이메일 주소를 복사했습니다.';}catch{status.textContent='아래 주소를 직접 복사해 주세요: jjpapa36912@gmail.com';}});
