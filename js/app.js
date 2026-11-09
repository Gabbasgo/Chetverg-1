(function(){
var st=document.getElementById('stage');
function fit(){var k=Math.min(document.documentElement.clientWidth/1280,1.6);
 if('zoom' in document.body.style){st.style.zoom=k}else{st.style.transform='scale('+k+')';st.style.width='1280px';document.body.style.height=(st.offsetHeight*k)+'px'}}
fit();addEventListener('resize',fit);
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
function go(){document.querySelectorAll('.rv,.rs,.ri,.rb').forEach(function(el){io.observe(el)})}
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(go);setTimeout(go,1500);
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var id=a.getAttribute('href');if(id.length<2)return;var t=document.querySelector(id);if(!t)return;e.preventDefault();
 var y=t.getBoundingClientRect().top+window.pageYOffset-(id==='#top'?0:0);window.scrollTo({top:y,behavior:'smooth'})})});
/* slider */
var sl=[].slice.call(document.querySelectorAll('#slider img')),i=0,busy=false;
function show(n){n=(n+sl.length)%sl.length;if(n===i||busy)return;var dir=n>i||(i===sl.length-1&&n===0)?1:-1;busy=true;var o=sl[i],m=sl[n];
 m.loading='eager';m.style.transition='none';m.style.translate=(36*dir)+'px 0';void m.offsetWidth;m.style.transition='';m.style.translate='';
 o.classList.remove('on');o.style.translate=(-36*dir)+'px 0';m.classList.add('on');i=n;setTimeout(function(){o.style.translate='';busy=false},650)}
document.getElementById('prev').onclick=function(){show(i-1)};document.getElementById('next').onclick=function(){show(i+1)};
document.addEventListener('keydown',function(e){var r=document.getElementById('slider').getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
var sx=null,s=document.getElementById('slider');s.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
s.addEventListener('touchend',function(e){if(sx===null)return;var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)show(d<0?i+1:i-1);sx=null});
/* form -> mail */
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();
 var a=document.getElementById('f1').value.trim(),b=document.getElementById('f2').value.trim();
 location.href='mailto:murat.bogdanof@yandex.ru?subject='+encodeURIComponent('Запрос расчёта с сайта')+'&body='+encodeURIComponent('Описание идеи / кадастровый номер: '+a+'\nКонтакт для связи: '+b)});
var dn=document.getElementById('down'),ct=document.getElementById('contact');
function chk(){var k=st.getBoundingClientRect().width/1280,pastHero=window.pageYOffset>560*k,atForm=ct.getBoundingClientRect().top<innerHeight*.55;dn.classList.toggle('show',pastHero&&!atForm)}
addEventListener('scroll',chk,{passive:true});addEventListener('resize',chk);chk();
})();
