// --- Flower Stage Initialization ---
(()=>{
  const stage = document.getElementById('smile-stage');
  const frame = document.getElementById('kado-flower-frame');
  if (!stage || !frame) return;
  const flowerDoc = "<!DOCTYPE html><html lang=\"vi\"><head><meta charset=\"utf-8\"><style>\n*{margin:0;padding:0;box-sizing:border-box}\nhtml,body{width:100%;height:100%;overflow:hidden;background:transparent}\nbody{display:flex;align-items:flex-end;justify-content:center;perspective:650px}\n.flowers{position:relative;width:100%;height:100%;transform:scale(.90);transform-origin:bottom center;filter:hue-rotate(132deg) saturate(.91)}\n.flower{position:absolute;bottom:12%;left:46%;transform-origin:bottom center;z-index:5;--fl-speed:.75s}\n.flower--1{left:23%;animation:moving-flower-1 4s ease-in-out infinite alternate}\n.flower--2{left:50%;transform:rotate(18deg);animation:moving-flower-2 4.7s ease-in-out infinite alternate}\n.flower--3{left:72%;transform:rotate(-16deg);animation:moving-flower-3 4.2s ease-in-out infinite alternate}\n.flower__leafs{position:relative;animation:blooming-flower 1.8s backwards}\n.flower__leafs--1{animation-delay:.6s}.flower__leafs--2{animation-delay:.95s}.flower__leafs--3{animation-delay:1.25s}\n.flower__leafs::after{content:\"\";position:absolute;left:0;top:0;transform:translate(-50%,-100%);width:7vmin;height:7vmin;border-radius:50%;background:#6bf0ff;filter:blur(7vmin)}\n.flower__leaf{position:absolute;bottom:0;left:50%;width:8vmin;height:11vmin;border-radius:51% 49% 47% 53% / 44% 45% 55% 69%;background-image:linear-gradient(to top,#54b8aa,#a7ffee);transform-origin:bottom center;opacity:.9;box-shadow:inset 0 0 2vmin rgba(255,255,255,.5)}\n.flower__leaf--1{transform:translate(-10%,1%) rotateY(40deg) rotateX(-50deg)}\n.flower__leaf--2{transform:translate(-50%,-4%) rotateX(40deg)}\n.flower__leaf--3{transform:translate(-90%,0%) rotateY(45deg) rotateX(50deg)}\n.flower__leaf--4{height:8vmin;border-radius:4vmin 10vmin 4vmin 4vmin;transform-origin:bottom left;transform:translate(0,18%) rotateX(70deg) rotate(-43deg);background:linear-gradient(to top,#39c6d6,#a7ffee);z-index:1;opacity:.8}\n.flower__white-circle{position:absolute;left:-3.5vmin;top:-3vmin;width:9vmin;height:4vmin;border-radius:50%;background:#fff}\n.flower__white-circle::after{content:\"\";position:absolute;left:50%;top:45%;width:60%;height:60%;transform:translate(-50%,-50%);border-radius:50%;background:linear-gradient(90deg,#ffeb12,#ffce00)}\n.flower__line{height:54vmin;width:1.5vmin;background:linear-gradient(to left,rgba(0,0,0,.2),transparent,rgba(255,255,255,.2)),linear-gradient(to top,transparent 8%,#14757a,#39c6d6);box-shadow:inset 0 0 2px rgba(0,0,0,.5);animation:grow-flower-tree 2.8s backwards}\n.flower--1 .flower__line{height:65vmin;animation-delay:.35s}\n.flower--2 .flower__line{height:53vmin;animation-delay:.55s}\n.flower--3 .flower__line{height:58vmin;animation-delay:.75s}\n.flower__line__leaf{--w:7vmin;--h:calc(var(--w) + 2vmin);position:absolute;top:20%;left:90%;width:var(--w);height:var(--h);border-top-right-radius:var(--h);border-bottom-left-radius:var(--h);background:linear-gradient(to top,rgba(20,117,122,.4),#39c6d6)}\n.flower__line__leaf--1{transform:rotate(70deg) rotateY(30deg);animation:blooming-leaf-right var(--fl-speed) 1.6s backwards}\n.flower__line__leaf--2{top:45%;transform:rotate(70deg) rotateY(30deg);animation:blooming-leaf-right var(--fl-speed) 1.9s backwards}\n.flower__line__leaf--3,.flower__line__leaf--4,.flower__line__leaf--6{border-top-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--h);border-bottom-right-radius:var(--h);left:-460%;top:12%;transform:rotate(-70deg) rotateY(30deg);animation:blooming-leaf-left var(--fl-speed) 1.45s backwards}\n.flower__line__leaf--4{top:40%;animation-delay:1.85s}\n.flower__line__leaf--5{top:0;transform-origin:left;transform:rotate(70deg) rotateY(30deg) scale(.6);animation:blooming-leaf-right var(--fl-speed) 2.05s backwards}\n.flower__line__leaf--6{top:-2%;left:-450%;transform-origin:right;transform:rotate(-70deg) rotateY(30deg) scale(.6);animation-delay:2.2s}\n.flower__light{position:absolute;bottom:0;width:1vmin;height:1vmin;border-radius:50%;background:#fffb00;filter:blur(.2vmin);animation:light-ans 3.8s linear infinite backwards}\n.flower__light:nth-child(odd){background:#23f0ff}\n.flower__light--1{left:-2vmin;animation-delay:1s}.flower__light--2{left:3vmin;animation-delay:.5s}.flower__light--3{left:-6vmin;animation-delay:.3s}.flower__light--4{left:6vmin;animation-delay:.9s}.flower__light--5{left:-1vmin;animation-delay:1.5s}.flower__light--6{left:-4vmin;animation-delay:3s}.flower__light--7{left:3vmin;animation-delay:2s}.flower__light--8{left:-6vmin;animation-delay:3.5s}\n.kado-grass{position:absolute;bottom:8%;width:100%;height:18%;pointer-events:none;opacity:.52;background:repeating-linear-gradient(105deg,transparent 0 18px,rgba(82,219,198,.12) 19px 21px,transparent 22px 36px);mask-image:linear-gradient(0deg,black,transparent 90%)}\n@keyframes blooming-flower{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}\n@keyframes grow-flower-tree{from{height:0;opacity:.2}}\n@keyframes blooming-leaf-left{from{transform:rotate(-70deg) rotateY(30deg) scale(0)}}\n@keyframes blooming-leaf-right{from{transform:rotate(70deg) rotateY(30deg) scale(0)}}\n@keyframes moving-flower-1{from{transform:rotate(-3deg)}to{transform:rotate(3deg)}}\n@keyframes moving-flower-2{from{transform:rotate(13deg)}to{transform:rotate(22deg)}}\n@keyframes moving-flower-3{from{transform:rotate(-20deg)}to{transform:rotate(-11deg)}}\n@keyframes light-ans{0%,100%{opacity:0;transform:translateY(0) scale(.7)}35%{opacity:.9}75%{opacity:.35;transform:translateY(-13vmin) translateX(7vmin) scale(1.2)}}\n</style></head><body><div class=\"flowers\"><div class=\"flower flower--1\"><div class=\"flower__leafs flower__leafs--1\"><div class=\"flower__leaf flower__leaf--1\"></div><div class=\"flower__leaf flower__leaf--2\"></div><div class=\"flower__leaf flower__leaf--3\"></div><div class=\"flower__leaf flower__leaf--4\"></div><div class=\"flower__white-circle\"></div><div class=\"flower__light flower__light--1\"></div><div class=\"flower__light flower__light--2\"></div><div class=\"flower__light flower__light--3\"></div><div class=\"flower__light flower__light--4\"></div><div class=\"flower__light flower__light--5\"></div><div class=\"flower__light flower__light--6\"></div><div class=\"flower__light flower__light--7\"></div><div class=\"flower__light flower__light--8\"></div></div><div class=\"flower__line\"><div class=\"flower__line__leaf flower__line__leaf--1\"></div><div class=\"flower__line__leaf flower__line__leaf--2\"></div><div class=\"flower__line__leaf flower__line__leaf--3\"></div><div class=\"flower__line__leaf flower__line__leaf--4\"></div><div class=\"flower__line__leaf flower__line__leaf--5\"></div><div class=\"flower__line__leaf flower__line__leaf--6\"></div></div></div><div class=\"flower flower--2\"><div class=\"flower__leafs flower__leafs--2\"><div class=\"flower__leaf flower__leaf--1\"></div><div class=\"flower__leaf flower__leaf--2\"></div><div class=\"flower__leaf flower__leaf--3\"></div><div class=\"flower__leaf flower__leaf--4\"></div><div class=\"flower__white-circle\"></div><div class=\"flower__light flower__light--1\"></div><div class=\"flower__light flower__light--2\"></div><div class=\"flower__light flower__light--3\"></div><div class=\"flower__light flower__light--4\"></div><div class=\"flower__light flower__light--5\"></div><div class=\"flower__light flower__light--6\"></div><div class=\"flower__light flower__light--7\"></div><div class=\"flower__light flower__light--8\"></div></div><div class=\"flower__line\"><div class=\"flower__line__leaf flower__line__leaf--1\"></div><div class=\"flower__line__leaf flower__line__leaf--2\"></div><div class=\"flower__line__leaf flower__line__leaf--3\"></div><div class=\"flower__line__leaf flower__line__leaf--4\"></div></div></div><div class=\"flower flower--3\"><div class=\"flower__leafs flower__leafs--3\"><div class=\"flower__leaf flower__leaf--1\"></div><div class=\"flower__leaf flower__leaf--2\"></div><div class=\"flower__leaf flower__leaf--3\"></div><div class=\"flower__leaf flower__leaf--4\"></div><div class=\"flower__white-circle\"></div><div class=\"flower__light flower__light--1\"></div><div class=\"flower__light flower__light--2\"></div><div class=\"flower__light flower__light--3\"></div><div class=\"flower__light flower__light--4\"></div><div class=\"flower__light flower__light--5\"></div><div class=\"flower__light flower__light--6\"></div><div class=\"flower__light flower__light--7\"></div><div class=\"flower__light flower__light--8\"></div></div><div class=\"flower__line\"><div class=\"flower__line__leaf flower__line__leaf--1\"></div><div class=\"flower__line__leaf flower__line__leaf--2\"></div><div class=\"flower__line__leaf flower__line__leaf--3\"></div><div class=\"flower__line__leaf flower__line__leaf--4\"></div></div></div><div class=\"kado-grass\"></div></div></body></html>";
  let ready=false;
  const start=()=>{
    if(ready || !stage.classList.contains('hien-thi') || !matchMedia("(min-width:701px) and (pointer:fine)").matches) return;
    ready=true;
    frame.srcdoc=flowerDoc;
  };
  new MutationObserver(start).observe(stage,{attributes:true,attributeFilter:['class']});
  start();
})();

// --- Particle Effects Upgrade ---
(()=>{
  const root=document.getElementById('tiny-wish-decor');
  if(!root)return;
  const motif=(id,html)=>{const host=document.getElementById(id);if(host){const el=document.createElement('div');el.className='tiny-upgrade-motif '+({ 'decor-want':'tiny-want-upgrade','decor-health':'tiny-health-upgrade','decor-beauty':'tiny-beauty-upgrade'}[id]);el.innerHTML=html;host.appendChild(el);}};
  const wishSvg='<svg class="motif-left" viewBox="0 0 270 360" aria-hidden="true"><path class="wish-guide" d="M-15 280 Q80 246 83 171 T235 60"/><path class="wish-trace" d="M5 313 Q73 247 101 186 T250 32"/><path class="wish-trace" d="M26 332 Q108 270 130 209 T267 70" opacity=".38"/></svg><svg class="motif-right" viewBox="0 0 270 360" aria-hidden="true"><path class="wish-guide" d="M-15 280 Q80 246 83 171 T235 60"/><path class="wish-trace" d="M5 313 Q73 247 101 186 T250 32"/><path class="wish-trace" d="M26 332 Q108 270 130 209 T267 70" opacity=".38"/></svg><i class="tiny-wish-jewel one"></i><i class="tiny-wish-jewel two"></i>';
  motif('decor-want',wishSvg);
  const plusSvg='<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M36 12 H64 V36 H88 V64 H64 V88 H36 V64 H12 V36 H36 Z"/></svg>';
  motif('decor-health','<div class="tiny-heal-sigil one">'+plusSvg+'</div><div class="tiny-heal-sigil two">'+plusSvg+'</div>');
  const flower='<svg viewBox="0 0 260 300" aria-hidden="true"><g>'+Array.from({length:6},(_,i)=>'<path d="M130 151 C86 120 88 74 130 38 C172 74 174 120 130 151" transform="rotate('+(i*60)+' 130 151)" />').join('')+'<circle class="orchid-nucleus" cx="130" cy="151" r="8"/><path d="M130 160 Q110 222 148 285" opacity=".6"/></g></svg>';
  if(!window.TINY_PERF?.mobile) motif('decor-beauty',flower.replace('<svg ','<svg class="tiny-orchid-svg motif-left" ') + flower.replace('<svg ','<svg class="tiny-orchid-svg motif-right" '));
  const canvas=document.createElement('canvas');canvas.id='tiny-upgrade-canvas';canvas.setAttribute('aria-hidden','true');root.appendChild(canvas);
  const ctx=canvas.getContext('2d',{alpha:true});if(!ctx)return;
  const scenes=['decor-want','decor-health','decor-beauty'].map(id=>document.getElementById(id));
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w=1,h=1,dpr=1,particles=[],mode=-1,frame=0,last=0;
  const rnd=(lo,hi)=>lo+Math.random()*(hi-lo);
  function resize(){w=innerWidth;h=innerHeight;dpr=TINY_PERF.canvasDpr(w,h,1.5);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}
  resize();window.addEventListener('resize',resize,{passive:true});
  function particlesFor(idx){const count=TINY_PERF.mobile?7:w<700?10:19;particles=Array.from({length:count},(_,i)=>{
    const edge=i%2===0;return {x:rnd(edge?.02:.76,edge?.23:.98)*w,y:rnd(.09,.89)*h,r:rnd(.8,2.7),speed:rnd(.11,.35),alpha:rnd(.25,.7),phase:rnd(0,6.28),kind:idx===1&&i%4===0?'plus':idx===2&&i%3===0?'diamond':'orb'};
  });}
  function dot(p,t,idx){const x=p.x+Math.sin(t*.00056+p.phase)*14,y=p.y-t*p.speed*.012 % (h+40);const yy=((y% (h+40))+(h+40))%(h+40)-20;
    const a=p.alpha*(.60+.4*Math.sin(t*.0016+p.phase));
    if(!Number.isFinite(x)||!Number.isFinite(yy))return;
    ctx.globalAlpha=Math.max(.03,a);ctx.shadowBlur=TINY_PERF.mobile?0:TINY_PERF.lite?5:10;ctx.shadowColor=idx===0?'#8beaff':idx===1?'#ffacc9':'#ffe2ff';
    ctx.strokeStyle=idx===0?'#b7efff':idx===1?'#ffd4e1':'#ffe1fa';ctx.fillStyle=ctx.strokeStyle;ctx.lineWidth=1.3;
    if(p.kind==='plus'){const s=p.r*2.4;ctx.beginPath();ctx.moveTo(x-s,yy);ctx.lineTo(x+s,yy);ctx.moveTo(x,yy-s);ctx.lineTo(x,yy+s);ctx.stroke();}
    else if(p.kind==='diamond'){const s=p.r*2.2;ctx.beginPath();ctx.moveTo(x,yy-s);ctx.lineTo(x+s*.45,yy);ctx.lineTo(x,yy+s);ctx.lineTo(x-s*.45,yy);ctx.closePath();ctx.stroke();}
    else{ctx.beginPath();ctx.arc(x,yy,p.r,0,Math.PI*2);ctx.fill();}
  }
  function select(){return scenes.findIndex(node=>node&&node.classList.contains('is-visible'));}
  function animate(now){frame=0;
    const current=select();if(current!==mode){mode=current;particlesFor(mode);last=0;}
    if(mode<0||document.hidden){ctx.clearRect(0,0,w,h);return;}
    // On desktop a crossfade should not compete with a full-screen glow canvas.
    // Stop painting particles briefly; the loop resumes naturally after transition.
    if(!TINY_PERF.mobile && document.documentElement.classList.contains('tiny-scene-transition')){
      if(!window.__tinyTransitionCanvasCleared){ctx.clearRect(0,0,w,h);window.__tinyTransitionCanvasCleared=true;}
      frame=requestAnimationFrame(animate);return;
    }
    window.__tinyTransitionCanvasCleared=false;
    // Mobile-only Beauty: no full-screen particle canvas during this scene.
    // Triggered again on next scene via existing MutationObserver.
    // Beauty already has glow, fireflies and flowers: do not repaint a
    // 2-million-pixel alpha canvas over them on desktop on every frame.
    if(mode===2){ctx.clearRect(0,0,w,h);return;}
    if(now-last>1000/TINY_PERF.ambientFps||reduced){last=now;ctx.clearRect(0,0,w,h);particles.forEach(p=>dot(p,reduced?0:now,mode));ctx.globalAlpha=1;ctx.shadowBlur=0;}
    if(!reduced)frame=requestAnimationFrame(animate);
  }
  const trigger=()=>{if(frame)cancelAnimationFrame(frame);frame=requestAnimationFrame(animate);};
  scenes.forEach(node=>node&&new MutationObserver(trigger).observe(node,{attributes:true,attributeFilter:['class']}));
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)trigger();});trigger();

  // A brief, light custom canvas star burst when the user accepts; no endless animation.
  const share=document.getElementById('share-flight-scene');
  if(share){let fired=false;
    const obs=new MutationObserver(()=>{if(!share.classList.contains('share-thank-you')){fired=false;return;}if(fired)return;fired=true;
      if(reduced)return;
      const face=document.querySelector('#share-tiny #khung-mat')||document.getElementById('share-tiny');
      if(!face)return;
      const r=face.getBoundingClientRect(), x=r.left+r.width/2, y=r.top+r.height*.5;
      const c=document.createElement('canvas');c.id='tiny-joy-burst';c.setAttribute('aria-hidden','true');document.body.appendChild(c);
      const cc=c.getContext('2d');if(!cc){c.remove();return;}
      const W=innerWidth,H=innerHeight,ratio=TINY_PERF.canvasDpr(W,H,1.5);
      c.width=Math.round(W*ratio);c.height=Math.round(H*ratio);cc.setTransform(ratio,0,0,ratio,0,0);
      const count=W<700?12:22;
      const arr=Array.from({length:count},(_,i)=>{const a=(i/count)*Math.PI*2+rnd(-.18,.18),v=rnd(28,82);return {a,x,y,v,spin:rnd(-3,3),r:rnd(2.4,5),color:['#c7f8ff','#ffbadb','#fff0ba'][i%3]};});
      const start=performance.now();function move(t){const e=Math.min(1,(t-start)/1600);cc.clearRect(0,0,W,H);cc.globalAlpha=(1-e)*.9;
        arr.forEach(p=>{const px=p.x+Math.cos(p.a)*p.v*e*2,py=p.y+Math.sin(p.a)*p.v*e*2+e*e*70;
        cc.save();cc.translate(px,py);cc.rotate(e*p.spin);cc.fillStyle=p.color;cc.shadowColor=p.color;cc.shadowBlur=8;
        cc.beginPath();cc.moveTo(0,-p.r*1.6);cc.lineTo(p.r*.55,0);cc.lineTo(0,p.r*1.6);cc.lineTo(-p.r*.55,0);cc.closePath();cc.fill();cc.restore();});
        if(e<1)requestAnimationFrame(move);else c.remove();}
      requestAnimationFrame(move);
    });obs.observe(share,{attributes:true,attributeFilter:['class']});
  }
})();

// --- Final Garden & Health Motions ---
(()=>{
  'use strict';
  const beauty=document.getElementById('decor-beauty');
  const health=document.getElementById('decor-health');
  if(!beauty || !health || document.getElementById('tiny-meadow-scene'))return;
  beauty.insertAdjacentHTML('afterbegin', '<svg class="tiny-meadow-scene" id="tiny-meadow-scene" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">\n<defs><linearGradient id="tinyHillGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#352238" stop-opacity=".86"/><stop offset=".55" stop-color="#1b152a" stop-opacity=".96"/><stop offset="1" stop-color="#0b0919" stop-opacity="1"/></linearGradient>\n<mask id="tinyStarAboveHorizon" maskUnits="userSpaceOnUse"><rect width="1600" height="900" fill="#fff"/><path d="M0 890 C130 862 226 824 390 791 S580 761 730 740 C930 712 1007 722 1080 751 C1240 795 1380 815 1600 898 L1600 950 L0 950 Z" fill="#000"/></mask>\n<radialGradient id="tinyStarGlow"><stop offset="0" stop-color="#f4faff" stop-opacity=".55"/><stop offset=".38" stop-color="#d4e9f8" stop-opacity=".19"/><stop offset="1" stop-color="#c8dbef" stop-opacity="0"/></radialGradient><radialGradient id="tinyMoonFace" cx="34%" cy="28%" r="75%"><stop offset="0" stop-color="#fffef7"/><stop offset=".37" stop-color="#eef5f6"/><stop offset=".75" stop-color="#cedfea"/><stop offset="1" stop-color="#9db8cf"/></radialGradient>\n<filter id="tinyStarBloom" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="5"/></filter></defs>\n<path id="tinyOrbitFlightPath" d="M930 954 C1070 823 1024 780 1115 680 C1230 528 1320 354 1410 165 C1450 81 1453 18 1468 -68" fill="none" stroke="none"/>\n<g mask="url(#tinyStarAboveHorizon)"><g id="tiny-orbit-trails" class="tiny-orbit-trail"></g><g id="tiny-orbit-star" class="tiny-orbit-star tiny-glow-planet tiny-moon" style="opacity:0">\n <!-- A soft, larger Moon; no planetary ring. Entire group travels down the existing orbit. -->\n <circle r="104" fill="url(#tinyStarGlow)" opacity=".53"/>\n <circle r="50" fill="none" stroke="#e1f0ff" stroke-width="3" opacity=".09"/>\n <circle class="tiny-planet-sphere" r="34" fill="url(#tinyMoonFace)" stroke="#f1f9fb" stroke-width="1.15"/>\n <ellipse cx="-11" cy="-9" rx="9" ry="6.8" fill="#a9bdcb" opacity=".19" transform="rotate(-22 -11 -9)"/>\n <ellipse cx="13" cy="12" rx="7" ry="5" fill="#a3b9ca" opacity=".15" transform="rotate(-17 13 12)"/>\n <circle cx="14" cy="-16" r="4.2" fill="#b0c4d0" opacity=".14"/>\n <circle cx="-15" cy="17" r="3.8" fill="#a5b5c7" opacity=".16"/>\n <path d="M-20 -19 Q -10 -25 2 -25" stroke="#fff" stroke-width="2" opacity=".19" fill="none" stroke-linecap="round"/>\n </g></g>\n<path class="tiny-terrain" d="M0 890 C130 862 226 824 390 791 S580 761 730 740 C930 712 1007 722 1080 751 C1240 795 1380 815 1600 898 L1600 950 L0 950 Z"/>\n<path class="tiny-horizon-rim" d="M0 890 C130 862 226 824 390 791 S580 761 730 740 C930 712 1007 722 1080 751 C1240 795 1380 815 1600 898"/>\n<g class="tiny-meadow-flowers"><g class="tiny-meadow-blossom" style="--wave:4.2s;--delay:-0.00s" transform="translate(82 861) scale(0.7)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g><g class="tiny-meadow-blossom" style="--wave:4.9s;--delay:-0.27s" transform="translate(175 835) scale(0.85)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g><g class="tiny-meadow-blossom" style="--wave:5.5s;--delay:-0.54s" transform="translate(257 813) scale(0.8)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g><g class="tiny-meadow-blossom" style="--wave:6.2s;--delay:-0.81s" transform="translate(345 795) scale(1)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g><g class="tiny-meadow-blossom" style="--wave:6.8s;--delay:-1.08s" transform="translate(460 775) scale(0.65)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g><g class="tiny-meadow-blossom" style="--wave:4.2s;--delay:-1.35s" transform="translate(555 764) scale(0.7)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g><g class="tiny-meadow-blossom" style="--wave:4.9s;--delay:-1.62s" transform="translate(652 746) scale(0.8)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g><g class="tiny-meadow-blossom" style="--wave:5.5s;--delay:-1.89s" transform="translate(1190 773) scale(0.8)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g><g class="tiny-meadow-blossom" style="--wave:6.2s;--delay:-2.16s" transform="translate(1320 808) scale(0.75)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g><g class="tiny-meadow-blossom" style="--wave:6.8s;--delay:-2.43s" transform="translate(1454 851) scale(0.9)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g><g class="tiny-meadow-blossom" style="--wave:4.2s;--delay:-2.70s" transform="translate(1538 887) scale(0.62)"><path class="stem" d="M0 0 Q -7 -15 0 -32 M-2 -13 Q-14 -24 -16 -20 M0 -21 Q11 -29 14 -22"/><g transform="translate(0 -33)" class="flowerhead"><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(0 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(72 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(144 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(216 0 0)"/><ellipse cx="0" cy="-10" rx="3.8" ry="7" transform="rotate(288 0 0)"/></g><circle class="center" cx="0" cy="-33" r="3.9"/></g></g></svg>');
  // Beautiful light bugs fill the sky, without covering Tiny or the title.
  const mobile=matchMedia('(max-width:700px)').matches;
  for(let i=0,n=mobile?4:14;i<n;i++){
    const b=document.createElement('i');b.className='tiny-beauty-firefly';
    const x=((i*61.17)%95)+2.5, y=17+((i*34.93)%73);
    const z=2.1+(i%5)*.56;
    b.style.cssText=`--x:${x.toFixed(1)}%;--y:${y.toFixed(1)}%;--sz:${z}px;--d:${4.2+(i%6)*.85}s;--p:${1.8+(i%7)*.49}s;--delay:-${(i*.71)%8}s;`;
    beauty.appendChild(b);
  }
  // The orbit becomes invisible behind the ground silhouette; the user's
  // dotted guideline is NOT drawn as an actual dotted line on the page.
  const orbit=document.getElementById('tinyOrbitFlightPath');
  const star=document.getElementById('tiny-orbit-star');
  const group=document.getElementById('tiny-orbit-trails');
  // Mobile: the Beauty moon is intentionally disabled, including its per-frame SVG orbit.
  const mobileBeautyMoonless = true; // V13: Beauty's small moon removed on all devices; no orbit RAF.
  if (mobileBeautyMoonless) { star.style.display='none'; group.style.display='none'; }
  const svgNS='http://www.w3.org/2000/svg';
  const tail=[];
  for(let i=0;i<(mobileBeautyMoonless?0:3);i++){
    const c=document.createElementNS(svgNS,'circle');
    c.setAttribute('r',String(3.3-i*.3));c.setAttribute('opacity',String(.52-i*.058));
    group.appendChild(c);tail.push(c);
  }
  const motionReduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let raf=0,active=false,begin=0,lastOrbit=0;
  let arcLength=0; if(!mobileBeautyMoonless)try{arcLength=orbit.getTotalLength();}catch(e){}
  // Desktop: sample the SVG orbit ONCE, then interpolate positions. No repeated
  // getPointAtLength() during animation or transition, and no layout reads in RAF.
  let orbitSamples=null;
  const orbitSampleCount=192;
  function prepareOrbitSamples(){
    if(mobileBeautyMoonless||!arcLength||orbitSamples)return;
    try {
      const samples=[];
      for(let j=0;j<=orbitSampleCount;j++) {
        const p=orbit.getPointAtLength(arcLength*j/orbitSampleCount);
        samples.push([p.x,p.y]);
      }
      orbitSamples=samples;
    } catch(e){orbitSamples=null;}
  }
  if(!mobileBeautyMoonless && arcLength) {
    if('requestIdleCallback' in window)requestIdleCallback(prepareOrbitSamples,{timeout:1400});
    else setTimeout(prepareOrbitSamples,350);
  }
  function cachedOrbitPoint(f){
    if(!orbitSamples) return orbit.getPointAtLength(Math.max(0,Math.min(1,f))*arcLength);
    const t=Math.max(0,Math.min(1,f))*orbitSampleCount;
    const i=Math.min(orbitSampleCount-1,Math.floor(t)),r=t-i;
    const a=orbitSamples[i],b=orbitSamples[i+1];
    return {x:a[0]+(b[0]-a[0])*r,y:a[1]+(b[1]-a[1])*r};
  }
  function frame(t){
    raf=0;
    if(!active||document.hidden||!arcLength)return;
    if (lastOrbit && t-lastOrbit < 1000/TINY_PERF.orbitFps) {raf=requestAnimationFrame(frame);return;}
    lastOrbit=t;
    const duration=9600, progress=((t-begin)%duration)/duration;
    // Planet descends from upper right toward the horizon, then disappears
    // behind the terrain mask; the hidden part of its orbit is never drawn.
    const e=progress<.90 ? progress/.90 : 1;
    const pt=cachedOrbitPoint(1-e);
    star.setAttribute('transform',`translate(${pt.x.toFixed(2)} ${pt.y.toFixed(2)})`);
    star.style.opacity=(progress>.90)?'0':String(Math.min(1,Math.max(0,(progress-.02)/.08))*Math.min(1,Math.max(0,(.90-progress)/.07)));
    tail.forEach((node,i)=>{
      const v=Math.min(1,Math.max(0,1-e+(i+1)*.018));
      const p=cachedOrbitPoint(v);
      node.setAttribute('cx',p.x.toFixed(2));node.setAttribute('cy',p.y.toFixed(2));
      node.setAttribute('opacity',String(Math.max(0,(.52-i*.058)*Math.min(1,(progress-.02)/.06))));
    });
    raf=requestAnimationFrame(frame);
  }
  function sync(){
    if(mobileBeautyMoonless)return;
    const visible=beauty.classList.contains('is-visible')&&!document.hidden;
    if(visible===active)return;
    active=visible;if(raf)cancelAnimationFrame(raf);raf=0;
    if(visible){begin=performance.now();frame(begin+(motionReduced?4300:0));}
    else {star.style.opacity='0';tail.forEach(n=>n.setAttribute('opacity','0'));}
  }
  new MutationObserver(sync).observe(beauty,{attributes:true,attributeFilter:['class']});
  document.addEventListener('visibilitychange',sync);sync();
  if(motionReduced){active=false;star.style.opacity='0';}
  // Health-scene fauna — independent animated SVGs rather than external GIFs.
  const fauna=document.createElement('div');fauna.className='tiny-health-fauna';
  const birds=[['12%','31%',68,'-1.2s'],['27%','43%',52,'-3.8s'],['57%','26%',42,'-2.1s'],['7%','61%',38,'-4.2s']];
  birds.slice(0,mobile?3:4).forEach(([x,y,w,delay],i)=>{
    const el=document.createElementNS(svgNS,'svg');el.setAttribute('viewBox','0 0 90 45');el.classList.add('tiny-bird');
    el.setAttribute('aria-hidden','true');el.style.cssText=`left:${x};top:${y};--width:${w}px;--fly:${5.5+i*1.1}s;--delay:${delay};`;
    el.innerHTML='<path class="left-wing" d="M45 28 Q27 6 4 18"/><path class="right-wing" d="M45 28 Q63 4 85 18"/><path d="M41 26 Q45 30 49 26" opacity=".6"/>';
    fauna.appendChild(el);
  });
  const butterflies=[['6%','47%',62,'-1.8s'],['35%','56%',46,'-4s'],['73%','19%',50,'-3.1s'],['18%','72%',39,'-2.4s']];
  butterflies.slice(0,mobile?2:4).forEach(([x,y,w,delay],i)=>{
    const el=document.createElementNS(svgNS,'svg');el.setAttribute('viewBox','0 0 88 78');el.classList.add('tiny-health-butterfly');
    el.setAttribute('aria-hidden','true');el.style.cssText=`left:${x};top:${y};--width:${w}px;--fly:${6.5+i*.7}s;--delay:${delay};`;
    el.innerHTML='<g class="left-wing"><path d="M44 39 C17 6 1 17 20 43 C1 59 22 73 44 42 Z"/></g><g class="right-wing"><path d="M44 39 C71 6 87 17 68 43 C87 59 66 73 44 42 Z"/></g><path class="wing-body" d="M44 30 Q47 42 44 55 M44 30 L36 23 M44 30 L52 23"/>';
    fauna.appendChild(el);
  });
  health.appendChild(fauna);
  // Chỉ ở cảnh cảm ơn: đóng độ cao và bẻ cong thành ^ TRONG CÙNG MỘT KHUNG HÌNH.
  // Hai mắt gốc được vẽ vào đúng vùng mắt, không thêm mắt chồng rồi bật hiện đột ngột.
  const share=document.getElementById('share-flight-scene');
  const tiny=document.getElementById('share-tiny');
  if(share&&tiny){
    const ns='http://www.w3.org/2000/svg';
    const smooth=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)};
    let raf=0, currentRun=0, active=false;
    let shapes=[];
    function geometry(progress){
      // Hai chuyển động chồng nhau: dẹt dần và gập nhọn ở giữa thành ^.
      const shrink=smooth(progress);
      const fold=smooth((progress-.31)/.69);
      const steps=32, upper=[], lower=[];
      for(let i=0;i<=steps;i++){
        const x=9+82*i/steps;
        const edge=Math.pow(Math.abs((x-50)/41),10);
        const openHalf=43-17*edge; // viền mắt vuông bo mềm khi còn mở
        const half=openHalf*(1-shrink)+5.4*shrink;
        const cusp=1-Math.abs((x-50)/41);
        const y=50+15*shrink-34*fold*cusp;
        upper.push([x,y-half]);lower.push([x,y+half]);
      }
      const fmt=([x,y])=>x.toFixed(2)+' '+y.toFixed(2);
      const right=lower[lower.length-1],left=lower[0];
      // Đầu mí bo tròn tự nhiên; đoạn giữa có đỉnh gấp rõ nhưng không sắc nhọn.
      let d='M '+fmt(upper[0]);
      for(let i=1;i<upper.length;i++)d+=' L '+fmt(upper[i]);
      d+=' Q 98 '+((upper[steps][1]+right[1])/2).toFixed(2)+' '+fmt(right);
      for(let i=steps-1;i>=0;i--)d+=' L '+fmt(lower[i]);
      d+=' Q 2 '+((left[1]+upper[0][1])/2).toFixed(2)+' '+fmt(upper[0])+' Z';
      return d;
    }
    function cleanup(){
      currentRun++;
      if(raf)cancelAnimationFrame(raf);raf=0;
      active=false;
      tiny.classList.remove('tiny-folding-smile','tiny-caret-restored');
      tiny.querySelectorAll('.tiny-folding-smile-svg, .tiny-restored-caret').forEach(el=>el.remove());
      shapes=[];
    }
    function start(){
      if(active || share.classList.contains('reality-leaving'))return;
      cleanup();active=true;
      const eyes=tiny.querySelectorAll('#khung-mat .con-mat');
      if(eyes.length!==2){active=false;return;}
      eyes.forEach((eye,i)=>{
        // Bỏ những nét cũ từ phiên bản trước để không còn hai lớp mắt.
        eye.querySelectorAll('.tiny-morph-svg,.tiny-restored-caret,.tiny-folding-smile-svg').forEach(el=>el.remove());
        eye.classList.remove('tiny-actual-morph');
        const svg=document.createElementNS(ns,'svg');
        svg.classList.add('tiny-folding-smile-svg');
        svg.setAttribute('viewBox','0 0 100 100');
        svg.setAttribute('aria-hidden','true');
        const defs=document.createElementNS(ns,'defs');
        const grad=document.createElementNS(ns,'linearGradient');
        const gid='tiny-smile-cyan-'+i;grad.id=gid;
        grad.setAttribute('x1','0%');grad.setAttribute('y1','0%');grad.setAttribute('x2','100%');grad.setAttribute('y2','100%');
        [['0%','#afffff'],['38%','#10f6ed'],['80%','#00e7e9'],['100%','#b2ffff']].forEach(([at,color])=>{
          const stop=document.createElementNS(ns,'stop');stop.setAttribute('offset',at);stop.setAttribute('stop-color',color);grad.appendChild(stop);
        });defs.appendChild(grad);svg.appendChild(defs);
        const path=document.createElementNS(ns,'path');path.classList.add('smile-morph-fill');
        path.setAttribute('fill','url(#'+gid+')');path.setAttribute('d',geometry(0));svg.appendChild(path);
        eye.appendChild(svg);shapes.push(path);
      });
      // Đưa mắt nguyên bản vào SVG ở cùng hình dáng đầu trước khung hình tiếp theo.
      tiny.classList.add('tiny-folding-smile');
      const run=++currentRun,t0=performance.now(),duration=660;
      function draw(now){
        if(run!==currentRun)return;
        const t=Math.min(1,(now-t0)/duration);
        const d=geometry(t);
        shapes.forEach(p=>p.setAttribute('d',d));
        if(t<1)raf=requestAnimationFrame(draw);else raf=0;
      }
      raf=requestAnimationFrame(draw);
    }
    const watch=new MutationObserver(()=>{
      if(share.classList.contains('share-thank-you')&&!share.classList.contains('reality-leaving'))start();
      else if(active)cleanup();
    });
    watch.observe(share,{attributes:true,attributeFilter:['class']});
  }

})();