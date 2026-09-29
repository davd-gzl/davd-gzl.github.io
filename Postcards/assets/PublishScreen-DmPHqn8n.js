import{a as e,v as t}from"./referenceData-B_OzJ6aQ.js";import{i as n}from"./uuid-CRrl6vOr.js";import{i as r}from"./helpers-AWQ7MC1Q.js";import{r as i,t as a}from"./useTrips-Dxta9tW9.js";import{c as o,i as s,l as c,n as l,s as u,t as d,u as f}from"./useToast-DkIHgFh8.js";import{n as p,o as m,t as h}from"./distance-BcCqa7yU.js";import{a as g,d as _,f as ee,m as te,u as ne}from"./index-t2r5GH5f.js";import{GitHubTarget as re}from"./gitTarget-BoNfxhbR.js";var v=t(n(),1);function y(e,t){return typeof e.lat==`number`&&typeof e.lon==`number`?{lat:e.lat,lon:e.lon}:t(e)}function b(e,t,n){return e?!(t&&e<t||n&&e>n):!t&&!n}function ie(e,t){let{visits:n,trips:i,stories:a,resolveCoords:o}=e,s=new Map;for(let e of a){if(!b(e.date,t.dateFrom,t.dateTo)||!e.place)continue;let n=r(e.place),i=s.get(n);(!i||e.date<i.date)&&s.set(n,e)}let c=new Map,l=(e,t)=>{if(!t?.length)return;let n=r(e),i=c.get(n)??[];for(let e of t)i.some(t=>t.src===e.src)||i.push(e);c.set(n,i)};for(let e of n)l(e.place,e.photos??[]);for(let e of a)e.place&&l(e.place,e.photos??[]);let u=t.tripIds?new Set(t.tripIds):null,d=i.filter(e=>!u||u.has(e.tripId)).filter(e=>b(e.date,t.dateFrom,t.dateTo)).sort((e,t)=>(e.date??``).localeCompare(t.date??``)),f=[],m=(e,t,n)=>{let i=y(e,o);if(!i)return;let a=s.get(r(e));f.push({place:e,lat:i.lat,lon:i.lon,date:a?.date??t,arriveBy:n,story:a?{title:a.title,text:a.text,date:a.date}:void 0,photos:c.get(r(e))??[]})};if(d.length>0)for(let e of d){let t=f[f.length-1];(!t||r(t.place)!==r(e.from))&&m(e.from,e.date,null),m(e.to,e.date,e.mode)}else{let e=a.filter(e=>b(e.date,t.dateFrom,t.dateTo)).sort((e,t)=>e.date.localeCompare(t.date));if(e.length>0)for(let t of e)t.place&&m(t.place,t.date,null);else{let e=n.filter(e=>e.status===`visited`).filter(e=>b(e.date??null,t.dateFrom,t.dateTo)).sort((e,t)=>(e.date??``).localeCompare(t.date??``));for(let t of e)m(t.place,t.date??null,null)}}let h=new Set;for(let e of f)e.place.countryId&&e.place.countryId!==`ZZ`&&h.add(e.place.countryId);let g=0;for(let e=1;e<f.length;e++)g+=p({lat:f[e-1].lat,lon:f[e-1].lon},{lat:f[e].lat,lon:f[e].lon});let _=f.map(e=>e.date).filter(e=>!!e).sort();return{title:t.title,subtitle:t.subtitle,dateRange:{start:_[0]??null,end:_[_.length-1]??null},steps:f,totals:{countries:h.size,places:f.length,distanceKm:Math.round(g)}}}var x=`Coordinates from GeoNames (CC BY 4.0). Outline data © Natural Earth / OpenStreetMap contributors.`;function S(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function C(e){return JSON.stringify(e).replace(/</g,`\\u003c`).replace(/>/g,`\\u003e`).replace(/&/g,`\\u0026`).replace(/[\u2028\u2029]/g,e=>`\\u`+e.charCodeAt(0).toString(16).padStart(4,`0`))}var w=`
:root{
  --pc-serif:Georgia,"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua","Times New Roman",serif;
  --pc-sans:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --pc-bg:#f6f1e7; --pc-surface:#fffdf8; --pc-elev:#efe7d6;
  --pc-text:#241f18; --pc-muted:#6c6354; --pc-border:#e5dcc8;
  --pc-accent:#a4381c; --pc-accent-ink:#fff7ef; --pc-gold:#8a6a2c;
  --pc-ocean:#d9e6f1; --pc-map-paper:#eef1e5; --pc-map-ink:#3b392f; --pc-map-grat:#bcc7d3;
  --pc-map-coast:#b9c2ab;
  color-scheme:light;
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --pc-bg:#15130f; --pc-surface:#1d1a15; --pc-elev:#26211a;
    --pc-text:#efe8da; --pc-muted:#a89e8b; --pc-border:#332d22;
    --pc-accent:#e3855d; --pc-accent-ink:#1b130d; --pc-gold:#cba85f;
    --pc-ocean:#0f1d2a; --pc-map-paper:#20271d; --pc-map-ink:#d6d1c2; --pc-map-grat:#243243;
    --pc-map-coast:#3a462f;
    color-scheme:dark;
  }
}
:root[data-theme="dark"]{
  --pc-bg:#15130f; --pc-surface:#1d1a15; --pc-elev:#26211a;
  --pc-text:#efe8da; --pc-muted:#a89e8b; --pc-border:#332d22;
  --pc-accent:#e3855d; --pc-accent-ink:#1b130d; --pc-gold:#cba85f;
  --pc-ocean:#0f1d2a; --pc-map-paper:#20271d; --pc-map-ink:#d6d1c2; --pc-map-grat:#243243;
  --pc-map-coast:#3a462f;
  color-scheme:dark;
}
*{box-sizing:border-box}
html,body{margin:0;height:100%}
body{
  background:var(--pc-bg); color:var(--pc-text);
  font-family:var(--pc-sans); line-height:1.62; -webkit-text-size-adjust:100%;
}
.pc-shell{min-height:100%; display:flex; flex-direction:column}
.pc-app{flex:1; width:100%; max-width:720px; margin:0 auto; padding:0 20px 104px; position:relative}
.pc-loading{color:var(--pc-muted); text-align:center; padding:56px 0; font-style:italic}
.pc-noscript{max-width:520px; margin:56px auto; padding:18px 20px; border:1px solid var(--pc-border);
  background:var(--pc-surface); border-radius:14px; text-align:center}
:focus-visible{outline:3px solid var(--pc-accent); outline-offset:3px; border-radius:6px}

/* Small caps eyebrow / kicker used across cover, map, steps */
.pc-kicker{margin:0 0 10px; font-size:12px; font-weight:700; letter-spacing:.22em;
  text-transform:uppercase; color:var(--pc-accent)}
.pc-folio{margin:34px 0 0; text-align:center; font-size:12px; letter-spacing:.32em;
  color:var(--pc-muted); font-variant-numeric:tabular-nums}

/* Header: progress + counter + theme toggle */
.pc-head{position:sticky; top:0; z-index:5; display:flex; align-items:center; gap:12px;
  padding:12px 16px; background:color-mix(in srgb, var(--pc-bg) 86%, transparent);
  backdrop-filter:saturate(1.2) blur(7px); border-bottom:1px solid var(--pc-border)}
.pc-progress{flex:1; height:5px; background:var(--pc-border); border-radius:99px; overflow:hidden}
.pc-progress-bar{height:100%; width:0; background:var(--pc-accent); transition:width .3s ease}
.pc-counter{font-size:13px; color:var(--pc-muted); font-variant-numeric:tabular-nums; white-space:nowrap}
.pc-theme{border:1px solid var(--pc-border); background:var(--pc-surface); color:var(--pc-text);
  border-radius:99px; width:34px; height:34px; font-size:16px; cursor:pointer; line-height:1}
.pc-theme:hover{background:var(--pc-elev)}

/* Spreads */
.pc-spread{padding:30px 2px 8px; animation:pc-in .32s ease both}
.pc-spread[hidden]{display:none}
@keyframes pc-in{from{opacity:0; transform:translateX(16px)} to{opacity:1; transform:none}}

/* Cover */
.pc-cover{text-align:center; padding-top:22px}
.pc-cover-hero{position:relative; width:100%; aspect-ratio:16/10; margin:0 0 26px;
  border-radius:18px; overflow:hidden; background:var(--pc-elev); border:1px solid var(--pc-border);
  box-shadow:0 18px 40px -24px rgba(0,0,0,.5)}
.pc-cover-hero img{width:100%; height:100%; object-fit:cover; display:block}
.pc-cover-hero.is-empty{display:flex; align-items:center; justify-content:center;
  background:radial-gradient(120% 120% at 30% 20%, var(--pc-elev), var(--pc-surface))}
.pc-cover-hero-glyph{font-size:64px; opacity:.6}
.pc-cover-title{font-family:var(--pc-serif); font-weight:700; font-size:clamp(30px,7.6vw,50px);
  line-height:1.08; letter-spacing:-.01em; margin:0 0 12px}
.pc-cover-sub{font-family:var(--pc-serif); font-style:italic; font-size:19px; color:var(--pc-muted); margin:0 0 8px}
.pc-cover-dates{font-size:13px; letter-spacing:.14em; text-transform:uppercase; color:var(--pc-muted); margin:0 0 26px}
.pc-totals{display:flex; justify-content:center; flex-wrap:wrap; gap:12px}
.pc-total{background:var(--pc-surface); border:1px solid var(--pc-border); border-radius:14px;
  padding:14px 20px; min-width:104px; box-shadow:0 1px 2px rgba(0,0,0,.05)}
.pc-total-n{font-family:var(--pc-serif); font-size:27px; font-weight:700; font-variant-numeric:tabular-nums}
.pc-total-l{font-size:11px; color:var(--pc-muted); text-transform:uppercase; letter-spacing:.1em}
.pc-cover-hint{margin-top:30px; color:var(--pc-muted); font-size:14px; font-style:italic}
.pc-colophon{margin:16px auto 0; max-width:420px; color:var(--pc-muted); font-size:12px;
  padding-top:16px; border-top:1px solid var(--pc-border)}

/* Map */
.pc-mapwrap h2, .pc-step h2{font-family:var(--pc-serif); font-weight:700; font-size:25px; margin:0 0 14px; letter-spacing:-.01em}
.pc-map{position:relative; background:var(--pc-map-paper); border:1px solid var(--pc-border);
  border-radius:16px; overflow:hidden; box-shadow:inset 0 0 60px -30px rgba(0,0,0,.4)}
.pc-map::after{content:""; position:absolute; inset:0; pointer-events:none; border-radius:16px;
  background:radial-gradient(130% 120% at 50% 45%, transparent 58%, rgba(60,45,20,.14))}
.pc-map-svg{display:block; width:100%; height:auto}
.pc-map-bg{fill:var(--pc-ocean)}
.pc-land{fill:var(--pc-map-paper); stroke:var(--pc-map-coast); stroke-width:.8; stroke-linejoin:round}
.pc-grat line{stroke:var(--pc-map-grat); stroke-width:.6; opacity:.7}
.pc-leg{fill:none; stroke-width:2.4; stroke-linecap:round}
.pc-leg-halo{fill:none; stroke:var(--pc-map-paper); stroke-width:5.2; stroke-linecap:round; opacity:.85}
.pc-pt{fill:var(--pc-accent); stroke:var(--pc-map-paper); stroke-width:1.4}
.pc-pt-ring{fill:none; stroke:var(--pc-map-ink); stroke-width:1.4; opacity:.45}
.pc-map-label{font-family:var(--pc-sans); font-size:11.5px; font-weight:600; fill:var(--pc-map-ink);
  paint-order:stroke; stroke:var(--pc-map-paper); stroke-width:3px; stroke-linejoin:round; stroke-linecap:round}
.pc-compass-face{fill:var(--pc-map-paper); stroke:var(--pc-map-ink); stroke-width:1; opacity:.85}
.pc-compass-n{fill:var(--pc-accent)}
.pc-compass-s{fill:var(--pc-map-ink); opacity:.55}
.pc-compass-label{font-family:var(--pc-sans); font-size:10px; font-weight:700; fill:var(--pc-map-ink)}
.pc-legend{display:flex; flex-wrap:wrap; gap:9px 16px; margin:14px 2px 0; font-size:13px; color:var(--pc-muted)}
.pc-legend span{display:inline-flex; align-items:center; gap:7px}
.pc-swatch{width:18px; height:3px; border-radius:2px; display:inline-block}
.pc-dot{width:11px; height:11px; border-radius:99px; display:inline-block; border:1.5px solid var(--pc-map-paper)}
.pc-attrib{margin:14px 2px 0; font-size:12px; color:var(--pc-muted)}

/* Step page */
.pc-hero{position:relative; width:100%; aspect-ratio:3/2; border-radius:16px; overflow:hidden;
  background:var(--pc-elev); border:1px solid var(--pc-border); box-shadow:0 14px 34px -24px rgba(0,0,0,.5)}
.pc-hero img{width:100%; height:100%; object-fit:cover; display:block}
.pc-hero-empty{display:flex; align-items:center; justify-content:center; height:100%;
  background:radial-gradient(120% 120% at 30% 20%, var(--pc-elev), var(--pc-surface)); flex-direction:column; gap:8px}
.pc-hero-empty .pc-flag{font-size:56px}
.pc-hero-empty .pc-place{color:var(--pc-muted); font-size:15px; font-style:italic}
.pc-badge{position:absolute; top:12px; left:12px; background:var(--pc-accent); color:var(--pc-accent-ink);
  border-radius:99px; padding:6px 13px; font-size:13px; font-weight:600; display:inline-flex; align-items:center; gap:6px;
  box-shadow:0 2px 8px rgba(0,0,0,.25)}
.pc-step-meta{display:flex; align-items:baseline; flex-wrap:wrap; gap:6px 12px; margin:18px 0 4px}
.pc-step h2{margin:0}
.pc-step-date{color:var(--pc-muted); font-size:14px; letter-spacing:.06em; text-transform:uppercase}
.pc-story-title{font-family:var(--pc-serif); font-size:19px; font-weight:700; margin:18px 0 6px}
.pc-story-text{white-space:pre-wrap; margin:0; font-size:16.5px; line-height:1.72}
.pc-gallery{display:grid; grid-template-columns:repeat(auto-fill,minmax(96px,1fr)); gap:8px; margin-top:20px}
.pc-thumb{padding:0; border:1px solid var(--pc-border); border-radius:10px; overflow:hidden; cursor:pointer;
  background:var(--pc-elev); aspect-ratio:1; display:block}
.pc-thumb img{width:100%; height:100%; object-fit:cover; display:block}

/* Nav */
.pc-nav{position:fixed; left:0; right:0; bottom:0; display:flex; justify-content:center; gap:12px;
  padding:12px 16px calc(12px + env(safe-area-inset-bottom)); background:color-mix(in srgb, var(--pc-bg) 86%, transparent);
  backdrop-filter:blur(7px); border-top:1px solid var(--pc-border)}
.pc-btn{border:1px solid var(--pc-border); background:var(--pc-surface); color:var(--pc-text);
  border-radius:99px; padding:10px 22px; font-size:15px; font-weight:600; cursor:pointer; min-width:122px}
.pc-btn:hover:not(:disabled){background:var(--pc-elev)}
.pc-btn:disabled{opacity:.4; cursor:default}
.pc-btn-primary{background:var(--pc-accent); color:var(--pc-accent-ink); border-color:transparent}

/* Passphrase gate */
.pc-gate{max-width:420px; margin:64px auto 0; text-align:center}
.pc-gate-title{font-family:var(--pc-serif); font-size:26px; margin:0 0 8px}
.pc-gate-note{color:var(--pc-muted); margin:0 0 22px}
.pc-gate-label{display:block; text-align:left; font-size:13px; color:var(--pc-muted); margin-bottom:16px}
.pc-gate-input{width:100%; margin-top:6px; padding:12px 14px; font-size:16px; border-radius:12px;
  border:1px solid var(--pc-border); background:var(--pc-surface); color:var(--pc-text)}
.pc-gate-msg{color:var(--pc-accent); min-height:22px; margin:16px 0 0; font-weight:600}

/* ---- Blog layout (the living travelogue, DEFAULT) ------------------------ */
.pc-head-blog{justify-content:space-between}
.pc-blog-brand{flex:1; min-width:0; font-family:var(--pc-serif); font-weight:700; font-size:15px;
  letter-spacing:.01em; color:var(--pc-text); white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
.pc-blog{padding:6px 0 0}
.pc-masthead{padding:30px 0 4px; border-bottom:1px solid var(--pc-border); margin:0 0 8px}
.pc-blog-title{font-family:var(--pc-serif); font-weight:700; font-size:clamp(32px,7.6vw,52px);
  line-height:1.05; letter-spacing:-.015em; margin:6px 0 12px}
.pc-blog-sub{font-family:var(--pc-serif); font-style:italic; font-size:19px; color:var(--pc-muted); margin:0 0 12px}
.pc-blog-dates{font-size:13px; letter-spacing:.14em; text-transform:uppercase; color:var(--pc-muted); margin:0 0 16px}
.pc-updated{display:inline-flex; align-items:center; gap:8px; margin:0 6px 18px 0; font-size:13px; font-weight:600;
  color:var(--pc-gold); background:color-mix(in srgb, var(--pc-gold) 12%, transparent);
  border:1px solid color-mix(in srgb, var(--pc-gold) 32%, transparent); padding:6px 13px; border-radius:99px}
.pc-updated-dot{width:8px; height:8px; border-radius:99px; background:var(--pc-gold);
  box-shadow:0 0 0 3px color-mix(in srgb, var(--pc-gold) 22%, transparent)}
.pc-latest{display:flex; align-items:center; gap:11px; text-decoration:none; color:var(--pc-text);
  background:var(--pc-surface); border:1px solid var(--pc-border); border-radius:14px; padding:12px 15px;
  font-weight:600; margin:0 0 8px; box-shadow:0 1px 2px rgba(0,0,0,.04)}
.pc-latest:hover{background:var(--pc-elev)}
.pc-latest-tag{flex:none; font-size:11px; font-weight:700; letter-spacing:.16em; text-transform:uppercase;
  color:var(--pc-accent); background:color-mix(in srgb, var(--pc-accent) 12%, transparent);
  padding:4px 9px; border-radius:99px}
.pc-latest-title{font-family:var(--pc-serif); font-size:17px; min-width:0; overflow:hidden;
  text-overflow:ellipsis; white-space:nowrap}
.pc-latest-arrow{flex:none; margin-left:auto; color:var(--pc-accent)}

/* Map card (blog reuses the labeled route map, without the paged animation) */
.pc-mapcard{margin:22px 0 4px}
.pc-mapcard h2{font-family:var(--pc-serif); font-weight:700; font-size:25px; margin:0 0 14px; letter-spacing:-.01em}

/* The feed of dated posts */
.pc-feed{margin-top:26px}
.pc-post{scroll-margin-top:78px; padding:6px 0 2px; animation:pc-fade .4s ease both}
@keyframes pc-fade{from{opacity:0; transform:translateY(10px)} to{opacity:1; transform:none}}
.pc-post-meta{display:flex; align-items:center; flex-wrap:wrap; gap:9px 12px; margin:0 0 10px}
.pc-post-date{font-size:13px; letter-spacing:.05em; text-transform:uppercase; color:var(--pc-muted);
  font-variant-numeric:tabular-nums}
.pc-post-mode{display:inline-flex; align-items:center; gap:6px; background:var(--pc-accent); color:var(--pc-accent-ink);
  border-radius:99px; padding:4px 11px; font-size:12px; font-weight:600}
.pc-permalink{margin-left:auto; display:inline-flex; align-items:center; gap:7px; text-decoration:none;
  color:var(--pc-muted); border:1px solid var(--pc-border); background:var(--pc-surface); border-radius:99px;
  padding:4px 11px; font-size:12px; line-height:1.4}
.pc-permalink:hover{background:var(--pc-elev); color:var(--pc-text)}
.pc-permalink-note{opacity:0; transition:opacity .2s ease; font-weight:700; color:var(--pc-accent)}
.pc-permalink.is-copied .pc-permalink-note{opacity:1}
.pc-post-place{font-family:var(--pc-serif); font-weight:700; font-size:26px; letter-spacing:-.01em; margin:0 0 4px}
.pc-post-title{font-family:var(--pc-serif); font-style:italic; font-weight:600; font-size:19px;
  color:var(--pc-muted); margin:0 0 14px}
.pc-post-hero{padding:0; width:100%; cursor:pointer; margin:6px 0 0; display:block}
.pc-post .pc-story-text{margin-top:16px}
.pc-post .pc-gallery{margin-top:12px}
.pc-divider{border:0; height:1px; background:var(--pc-border); margin:32px 0; position:relative}
.pc-divider::after{content:"❖"; position:absolute; top:-11px; left:50%; transform:translateX(-50%);
  background:var(--pc-bg); color:var(--pc-gold); padding:0 12px; font-size:13px}

/* Footer */
.pc-foot{max-width:720px; margin:0 auto; padding:22px 20px 96px; color:var(--pc-muted);
  font-size:13px; text-align:center; border-top:1px solid var(--pc-border)}

/* Lightbox */
.pc-lightbox{position:fixed; inset:0; z-index:50; background:rgba(0,0,0,.88); display:flex;
  flex-direction:column; align-items:center; justify-content:center; padding:20px}
.pc-lb-img{max-width:100%; max-height:78vh; object-fit:contain; border-radius:8px}
.pc-lb-cap{color:#f0f0f0; margin-top:12px; font-size:14px; text-align:center; max-width:640px; font-style:italic}
.pc-lb-nav{position:absolute; top:50%; transform:translateY(-50%); background:rgba(255,255,255,.14);
  color:#fff; border:0; font-size:30px; width:52px; height:52px; border-radius:99px; cursor:pointer}
.pc-lb-prev{left:16px} .pc-lb-next{right:16px}
.pc-lb-close{position:absolute; top:16px; right:16px; background:rgba(255,255,255,.14); color:#fff;
  border:0; font-size:16px; padding:8px 14px; border-radius:99px; cursor:pointer}
.pc-lb-count{position:absolute; top:20px; left:16px; color:#ddd; font-size:13px; font-variant-numeric:tabular-nums}
.pc-sr{position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0 0 0 0); border:0}

@media (prefers-reduced-motion:reduce){
  *{animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important}
  .pc-spread{animation:none}
}
`,T=`
(function(){
  "use strict";
  var MODE_GLYPH={flight:"✈️",train:"🚆",bus:"🚌",ferry:"⛴️",car:"🚗",other:"•"};
  var MODE_LABEL={flight:"Flight",train:"Train",bus:"Bus",ferry:"Ferry",car:"Car",other:"Travel"};
  var MODE_COLOR={flight:"#4f46e5",train:"#15803d",bus:"#b45309",ferry:"#0369a1",car:"#be185d",other:"#78716c"};
  var START_COLOR="#0e7490", END_COLOR="#b3401f";

  function el(tag,props,kids){
    var e=document.createElement(tag);
    if(props){for(var k in props){var v=props[k];
      if(v==null) continue;
      if(k==="className") e.className=v;
      else if(k==="textContent") e.textContent=v;
      else if(k==="html") e.innerHTML=v;
      else if(k in e){try{e[k]=v;}catch(_e){e.setAttribute(k,String(v));}}
      else e.setAttribute(k,String(v));
    }}
    if(kids){for(var i=0;i<kids.length;i++){var c=kids[i]; if(c==null) continue;
      e.appendChild(typeof c==="string"?document.createTextNode(c):c);}}
    return e;
  }
  function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
  function pad2(n){n=String(n); return n.length<2?"0"+n:n;}
  function fmtInt(n){try{return new Intl.NumberFormat().format(Math.round(n));}catch(_e){return String(Math.round(n));}}
  function fmtDate(iso){
    if(!iso) return "";
    var d=new Date(iso+"T00:00:00");
    if(isNaN(d.getTime())) return iso;
    try{return new Intl.DateTimeFormat(undefined,{dateStyle:"medium"}).format(d);}catch(_e){return iso;}
  }
  function flag(cc){
    if(!cc||cc==="ZZ") return "📍";
    var up=cc.toUpperCase(), out="";
    for(var i=0;i<up.length;i++){var ch=up.charCodeAt(i); if(ch<65||ch>90) return "📍"; out+=String.fromCodePoint(127397+ch);}
    return out;
  }

  // --- decrypt (mirrors encrypt.ts: PBKDF2-SHA256 -> AES-GCM) ---
  function b64(s){var bin=atob(s); var out=new Uint8Array(bin.length); for(var i=0;i<bin.length;i++) out[i]=bin.charCodeAt(i); return out;}
  function deriveKey(pass,salt,iter){
    var enc=new TextEncoder().encode(pass);
    return crypto.subtle.importKey("raw",enc,"PBKDF2",false,["deriveKey"]).then(function(base){
      return crypto.subtle.deriveKey({name:"PBKDF2",salt:salt,iterations:iter,hash:"SHA-256"},base,{name:"AES-GCM",length:256},false,["decrypt"]);
    });
  }
  function decrypt(env,pass){
    var iv=b64(env.iv), ct=b64(env.ct), salt=b64(env.salt);
    // Clamp a tampered iteration count so a hostile file can't hang the visitor's
    // tab (iter: 9e9) or gut the KDF (iter: 1). Mirrors encrypt.ts clampIterations.
    var iter=Math.min(10000000,Math.max(100000,(+env.iter)||250000));
    return deriveKey(pass,salt,iter).then(function(key){
      return crypto.subtle.decrypt({name:"AES-GCM",iv:iv},key,ct);
    }).then(function(buf){ return JSON.parse(new TextDecoder().decode(buf)); });
  }

  // --- route map (inline SVG string; user place names are escaped) ---
  // Fits a Web-Mercator projection to the journey's own bounds so every city
  // spreads out and its label is readable — a travel map, not a world diagram.
  function niceStep(span,target){
    var raw=(span||1)/Math.max(1,target);
    var pw=Math.pow(10,Math.floor(Math.log(raw)/Math.LN10));
    var steps=[1,2,5,10];
    for(var i=0;i<steps.length;i++){ if(steps[i]*pw>=raw) return steps[i]*pw; }
    return 10*pw;
  }
  function mercY(lat){var la=Math.max(-85,Math.min(85,lat)); return Math.log(Math.tan(Math.PI/4+la*Math.PI/360));}
  function invMercY(y){return (2*Math.atan(Math.exp(y))-Math.PI/2)*180/Math.PI;}

  // The embedded world land outline (public-domain Natural Earth, simplified).
  // Parsed once from its inert JSON island; [] if absent, so the map degrades to
  // the plain graticule it drew before.
  var LAND_CACHE=null;
  function readLand(){
    if(LAND_CACHE) return LAND_CACHE;
    try{var e=document.getElementById("pc-land"); LAND_CACHE=e?JSON.parse(e.textContent):[];}
    catch(_e){LAND_CACHE=[];}
    return LAND_CACHE;
  }

  function placeLabel(cx,cy,name,placed,W,H){
    var fs=11.5, w=Math.min(150,(name?name.length:0)*fs*0.56)+6, h=fs+5;
    var cands=[
      {tx:cx+9,ty:cy+4,anchor:"start",bx:cx+7,by:cy-h/2,ex:cx+7+w,ey:cy+h/2},
      {tx:cx-9,ty:cy+4,anchor:"end",bx:cx-7-w,by:cy-h/2,ex:cx-7,ey:cy+h/2},
      {tx:cx,ty:cy-9,anchor:"middle",bx:cx-w/2,by:cy-9-h,ex:cx+w/2,ey:cy-5},
      {tx:cx,ty:cy+16,anchor:"middle",bx:cx-w/2,by:cy+7,ex:cx+w/2,ey:cy+7+h}
    ];
    for(var c=0;c<cands.length;c++){
      var k=cands[c];
      if(k.bx<3||k.ex>W-3||k.by<3||k.ey>H-3) continue;
      var hit=false;
      for(var q=0;q<placed.length;q++){var r=placed[q];
        if(k.bx<r.ex&&k.ex>r.bx&&k.by<r.ey&&k.ey>r.by){hit=true;break;}}
      if(!hit){placed.push(k); return k;}
    }
    placed.push(cands[0]); return cands[0];
  }

  function mapSvg(steps){
    var W=760,H=440,PAD=56;
    var X=[],Y=[];
    for(var i=0;i<steps.length;i++){X.push(steps[i].lon*Math.PI/180); Y.push(mercY(steps[i].lat));}
    var minX=1e9,maxX=-1e9,minY=1e9,maxY=-1e9;
    for(i=0;i<X.length;i++){minX=Math.min(minX,X[i]);maxX=Math.max(maxX,X[i]);minY=Math.min(minY,Y[i]);maxY=Math.max(maxY,Y[i]);}
    if(!isFinite(minX)){minX=-Math.PI;maxX=Math.PI;minY=-1.4;maxY=1.4;}
    // Guarantee a minimum extent so ONE stop (or a tight cluster) shows regional
    // context — its country and coastline — instead of zooming into an empty void.
    // ~0.3 rad ≈ 17° of longitude; the same in Mercator-y units of latitude.
    var MIN_SPAN=0.3;
    if(maxX-minX<MIN_SPAN){var mcx=(minX+maxX)/2; minX=mcx-MIN_SPAN/2; maxX=mcx+MIN_SPAN/2;}
    if(maxY-minY<MIN_SPAN){var mcy=(minY+maxY)/2; minY=mcy-MIN_SPAN/2; maxY=mcy+MIN_SPAN/2;}
    var spanX=(maxX-minX)||0.5, spanY=(maxY-minY)||0.5;
    minX-=spanX*0.18; maxX+=spanX*0.18; minY-=spanY*0.24; maxY+=spanY*0.24;
    spanX=maxX-minX; spanY=maxY-minY;
    var scale=Math.min((W-2*PAD)/spanX,(H-2*PAD)/spanY);
    var midX=(minX+maxX)/2, midY=(minY+maxY)/2;
    function sx(x){return W/2+(x-midX)*scale;}
    function sy(y){return H/2-(y-midY)*scale;}
    function pt(idx){return {x:sx(X[idx]),y:sy(Y[idx])};}

    var s="";
    s+='<svg class="pc-map-svg" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Route map of the journey, showing each city">';
    s+='<rect class="pc-map-bg" x="0" y="0" width="'+W+'" height="'+H+'"/>';

    // Land silhouette behind everything: the embedded, heavily-simplified world
    // outline (offline, no network). Only rings touching the padded viewport are
    // emitted, so a regional view stays a small path. A >180° longitude jump
    // starts a fresh sub-path so a ring near the antimeridian can't streak across.
    var land=readLand(), lp="";
    for(var li=0;li<land.length;li++){
      var ring=land[li], seg="", any=false, prevLon=null;
      for(var pi=0;pi<ring.length;pi++){
        var llon=ring[pi][0], llat=ring[pi][1];
        var Lx=sx(llon*Math.PI/180), Ly=sy(mercY(llat));
        var cmd=(pi===0||(prevLon!==null&&Math.abs(llon-prevLon)>180))?"M":"L";
        seg+=cmd+Lx.toFixed(1)+" "+Ly.toFixed(1);
        if(Lx>-40&&Lx<W+40&&Ly>-40&&Ly<H+40) any=true;
        prevLon=llon;
      }
      if(any) lp+=seg+"Z";
    }
    if(lp) s+='<path class="pc-land" d="'+lp+'"/>';

    // Graticule fitted to the visible region (a refined faint grid = "a map").
    var lonMin=minX*180/Math.PI, lonMax=maxX*180/Math.PI;
    var latMin=invMercY(minY), latMax=invMercY(maxY);
    var g="";
    var lonStep=niceStep(lonMax-lonMin,6), la0=Math.ceil(lonMin/lonStep)*lonStep;
    for(var lo=la0; lo<=lonMax+1e-6; lo+=lonStep){var gx=sx(lo*Math.PI/180); g+='<line x1="'+gx.toFixed(1)+'" y1="0" x2="'+gx.toFixed(1)+'" y2="'+H+'"/>';}
    var latStep=niceStep(latMax-latMin,4), lt0=Math.ceil(latMin/latStep)*latStep;
    for(var lt=lt0; lt<=latMax+1e-6; lt+=latStep){var gy=sy(mercY(lt)); g+='<line x1="0" y1="'+gy.toFixed(1)+'" x2="'+W+'" y2="'+gy.toFixed(1)+'"/>';}
    s+='<g class="pc-grat">'+g+'</g>';

    // Route legs — a smooth curved arc per hop, mode-coloured (flight/ferry dashed).
    var legs="";
    for(i=1;i<steps.length;i++){
      if(Math.abs(steps[i].lon-steps[i-1].lon)>180) continue;
      var a=pt(i-1), b=pt(i);
      var mx=(a.x+b.x)/2, my=(a.y+b.y)/2, dx=b.x-a.x, dy=b.y-a.y;
      var len=Math.sqrt(dx*dx+dy*dy)||1, off=Math.min(48,len*0.16);
      var qx=(mx+(-dy/len)*off).toFixed(1), qy=(my+(dx/len)*off).toFixed(1);
      var d='M'+a.x.toFixed(1)+' '+a.y.toFixed(1)+' Q'+qx+' '+qy+' '+b.x.toFixed(1)+' '+b.y.toFixed(1);
      var mode=steps[i].arriveBy, col=MODE_COLOR[mode]||MODE_COLOR.other;
      var dash=mode==="flight"?"7 6":(mode==="ferry"?"1.5 7":"");
      legs+='<path class="pc-leg-halo" d="'+d+'"/>';
      legs+='<path class="pc-leg" d="'+d+'" stroke="'+col+'"'+(dash?' stroke-dasharray="'+dash+'"':'')+'/>';
    }
    s+='<g>'+legs+'</g>';

    // Compass rose (top-right). Seed its box so labels never collide with it.
    var ccx=W-42, ccy=50, rr=17;
    s+='<g transform="translate('+ccx+' '+ccy+')">';
    s+='<circle class="pc-compass-face" r="'+rr+'"/>';
    s+='<polygon class="pc-compass-n" points="0,-'+rr+' 4,1 0,4 -4,1"/>';
    s+='<polygon class="pc-compass-s" points="0,'+rr+' 4,-1 0,-4 -4,-1"/>';
    s+='<text class="pc-compass-label" x="0" y="-'+(rr+4)+'" text-anchor="middle">N</text>';
    s+='</g>';

    // City pins: a dot per stop, endpoints emphasised, plus a placed label.
    var dots="", labels="", placed=[{bx:ccx-rr-4,by:ccy-rr-12,ex:ccx+rr+4,ey:ccy+rr+4}];
    for(i=0;i<steps.length;i++){
      var p=pt(i), isStart=i===0, isEnd=i===steps.length-1;
      if(isStart||isEnd){
        dots+='<circle class="pc-pt-ring" cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="7.5"/>';
        dots+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="4.6" fill="'+(isEnd?END_COLOR:START_COLOR)+'" stroke="var(--pc-map-paper)" stroke-width="1.6"/>';
      }else{
        dots+='<circle class="pc-pt" cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="3.6"/>';
      }
      var box=placeLabel(p.x,p.y,steps[i].place.name,placed,W,H);
      labels+='<text class="pc-map-label" x="'+box.tx.toFixed(1)+'" y="'+box.ty.toFixed(1)+'" text-anchor="'+box.anchor+'">'+esc(steps[i].place.name)+'</text>';
    }
    s+='<g>'+dots+'</g><g>'+labels+'</g></svg>';
    return s;
  }

  var state={spreads:[],idx:0,journey:null};

  function coverPhoto(j){
    for(var i=0;i<(j.steps||[]).length;i++){var ph=j.steps[i].photos; if(ph&&ph.length) return ph[0];}
    return null;
  }

  function buildCover(j){
    var sec=el("section",{className:"pc-spread pc-cover","aria-label":"Cover",tabIndex:-1});
    var hero=coverPhoto(j);
    var fig=el("div",{className:"pc-cover-hero"+(hero?"":" is-empty")});
    if(hero){ fig.appendChild(el("img",{src:hero.src,alt:hero.caption||("Cover photo — "+(j.title||"a journey")),decoding:"async"})); }
    else { fig.appendChild(el("span",{className:"pc-cover-hero-glyph","aria-hidden":"true",textContent:"🧭"})); }
    sec.appendChild(fig);
    sec.appendChild(el("p",{className:"pc-kicker",textContent:"A Postcards journey"}));
    sec.appendChild(el("h1",{className:"pc-cover-title",textContent:j.title||"A journey"}));
    if(j.subtitle) sec.appendChild(el("p",{className:"pc-cover-sub",textContent:j.subtitle}));
    var dr=j.dateRange||{};
    if(dr.start){
      var range=dr.end&&dr.end!==dr.start?fmtDate(dr.start)+" — "+fmtDate(dr.end):fmtDate(dr.start);
      sec.appendChild(el("p",{className:"pc-cover-dates",textContent:range}));
    }
    var t=j.totals||{countries:0,places:0,distanceKm:0};
    var totals=el("div",{className:"pc-totals",role:"list"});
    function total(n,l){return el("div",{className:"pc-total",role:"listitem"},[
      el("div",{className:"pc-total-n",textContent:n}), el("div",{className:"pc-total-l",textContent:l})]);}
    totals.appendChild(total(fmtInt(t.places), t.places===1?"stop":"stops"));
    totals.appendChild(total(fmtInt(t.countries), t.countries===1?"country":"countries"));
    totals.appendChild(total(fmtInt(t.distanceKm)+" km","travelled"));
    sec.appendChild(totals);
    sec.appendChild(el("p",{className:"pc-cover-hint",textContent:"Turn the page — arrow keys, swipe, or the buttons below →"}));
    sec.appendChild(el("p",{className:"pc-colophon",textContent:"A private travel journal, published with Postcards."}));
    return sec;
  }

  // Shared map content (kicker, heading, the fitted labeled route map, legend,
  // attribution) — used by both the book spread and the blog map card.
  function fillMap(sec,j){
    sec.appendChild(el("p",{className:"pc-kicker",textContent:"The route"}));
    sec.appendChild(el("h2",{textContent:"Where the journey went"}));
    sec.appendChild(el("div",{className:"pc-map",html:mapSvg(j.steps)}));
    var used={};
    for(var i=0;i<j.steps.length;i++){var m=j.steps[i].arriveBy; if(m) used[m]=true;}
    var legend=el("div",{className:"pc-legend","aria-label":"Map legend"});
    function dotItem(color,label){var sp=el("span",{},[el("i",{className:"pc-dot"}),label]); sp.firstChild.style.background=color; return sp;}
    function lineItem(color,label){var sp=el("span",{},[el("i",{className:"pc-swatch"}),label]); sp.firstChild.style.background=color; return sp;}
    if(j.steps.length>1){
      legend.appendChild(dotItem(START_COLOR,"Start"));
      legend.appendChild(dotItem(END_COLOR,"End"));
    }
    var order=["flight","train","bus","ferry","car","other"];
    for(var k=0;k<order.length;k++){ if(!used[order[k]]) continue;
      legend.appendChild(lineItem(MODE_COLOR[order[k]],MODE_LABEL[order[k]]));
    }
    if(legend.childNodes.length) sec.appendChild(legend);
    sec.appendChild(el("p",{className:"pc-attrib",textContent:document.body.getAttribute("data-attrib")||""}));
    return sec;
  }
  function buildMap(j){ // book: a paged spread
    return fillMap(el("section",{className:"pc-spread pc-mapwrap","aria-label":"Journey map",tabIndex:-1}),j);
  }
  function buildMapCard(j){ // blog: a static card near the top
    return fillMap(el("section",{className:"pc-mapwrap pc-mapcard","aria-label":"Journey map"}),j);
  }

  // The feed reads OLDEST→NEWEST so the trip unfolds top to bottom. Flip this one
  // constant to show the newest post first (per-post anchors stay stable either way).
  var FEED_NEWEST_FIRST=false;

  // Index of the most recent (newest-dated) step — the "latest" entry a returning
  // reader wants. Falls back to the last step when nothing is dated.
  function newestIndex(steps){
    var bi=-1, bd=null;
    for(var i=0;i<steps.length;i++){
      var d=steps[i].date;
      if(d!=null&&(bd==null||d>=bd)){ bd=d; bi=i; }
    }
    return bi<0?steps.length-1:bi;
  }
  function entryTitle(step){
    if(step.story&&step.story.title) return step.story.title;
    return step.place.name;
  }
  function themeToggle(){
    var theme=el("button",{className:"pc-theme",type:"button","aria-label":"Toggle light or dark theme",title:"Toggle theme",textContent:"◐"});
    theme.addEventListener("click",function(){
      var r=document.documentElement;
      var dark=r.getAttribute("data-theme")==="dark"||(r.getAttribute("data-theme")!=="light"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches);
      r.setAttribute("data-theme",dark?"light":"dark");
    });
    return theme;
  }

  function buildStep(step,n,total){
    var sec=el("section",{className:"pc-spread pc-step","aria-label":"Stop "+n+" of "+total+": "+step.place.name,tabIndex:-1});
    sec.appendChild(el("p",{className:"pc-kicker",textContent:"Stop "+n+" of "+total}));
    var hero=el("div",{className:"pc-hero"});
    if(step.arriveBy){
      hero.appendChild(el("span",{className:"pc-badge"},[MODE_GLYPH[step.arriveBy]||"•"," ",MODE_LABEL[step.arriveBy]||"Travel"]));
    }
    if(step.photos&&step.photos.length){
      hero.appendChild(el("img",{src:step.photos[0].src,alt:step.photos[0].caption||("Photo of "+step.place.name),loading:"lazy",decoding:"async"}));
    }else{
      hero.appendChild(el("div",{className:"pc-hero-empty"},[
        el("span",{className:"pc-flag","aria-hidden":"true",textContent:flag(step.place.countryId)}),
        el("span",{className:"pc-place",textContent:step.place.name})]));
    }
    sec.appendChild(hero);
    var meta=el("div",{className:"pc-step-meta"});
    meta.appendChild(el("h2",{},[flag(step.place.countryId)+" "+step.place.name]));
    if(step.date) meta.appendChild(el("span",{className:"pc-step-date",textContent:fmtDate(step.date)}));
    sec.appendChild(meta);
    if(step.story){
      if(step.story.title) sec.appendChild(el("h3",{className:"pc-story-title",textContent:step.story.title}));
      if(step.story.text) sec.appendChild(el("p",{className:"pc-story-text",textContent:step.story.text}));
    }
    if(step.photos&&step.photos.length){
      var gal=el("div",{className:"pc-gallery"});
      for(var i=0;i<step.photos.length;i++){ (function(idx){
        var btn=el("button",{type:"button",className:"pc-thumb","aria-label":"View photo "+(idx+1)+" of "+step.photos.length});
        btn.appendChild(el("img",{src:step.photos[idx].src,alt:step.photos[idx].caption||"",loading:"lazy",decoding:"async"}));
        btn.addEventListener("click",function(){openLightbox(step.photos,idx,btn);});
        gal.appendChild(btn);
      })(i); }
      sec.appendChild(gal);
    }
    return sec;
  }

  // --- lightbox (accessible: arrows page, Escape closes, focus returns) ---
  var lb=null;
  function openLightbox(photos,start,trigger){
    closeLightbox();
    var idx=start;
    var box=el("div",{className:"pc-lightbox",role:"dialog","aria-modal":"true","aria-label":"Photo viewer"});
    var count=el("span",{className:"pc-lb-count","aria-hidden":"true"});
    var img=el("img",{className:"pc-lb-img"});
    var cap=el("p",{className:"pc-lb-cap",role:"status"});
    var close=el("button",{className:"pc-lb-close",type:"button",textContent:"Close",title:"Close (Esc)"});
    var prev=el("button",{className:"pc-lb-nav pc-lb-prev",type:"button","aria-label":"Previous photo",textContent:"‹"});
    var next=el("button",{className:"pc-lb-nav pc-lb-next",type:"button","aria-label":"Next photo",textContent:"›"});
    function show(){
      var p=photos[idx];
      img.src=p.src; img.alt=p.caption||"Photo "+(idx+1);
      cap.textContent=p.caption||"";
      count.textContent=(idx+1)+" / "+photos.length;
      prev.style.display=next.style.display=photos.length>1?"":"none";
    }
    function step(d){idx=(idx+d+photos.length)%photos.length; show();}
    prev.addEventListener("click",function(){step(-1);});
    next.addEventListener("click",function(){step(1);});
    close.addEventListener("click",closeLightbox);
    box.addEventListener("click",function(e){if(e.target===box) closeLightbox();});
    box.appendChild(count); box.appendChild(prev); box.appendChild(img); box.appendChild(next); box.appendChild(close); box.appendChild(cap);
    document.body.appendChild(box);
    lb={box:box,trigger:trigger,step:step};
    show(); close.focus();
  }
  function closeLightbox(){
    if(!lb) return;
    var t=lb.trigger; lb.box.remove(); lb=null;
    if(t&&t.focus) t.focus();
  }

  // --- paging ---
  var bar,counter,prevBtn,nextBtn;
  function go(n){
    n=Math.max(0,Math.min(state.spreads.length-1,n));
    for(var i=0;i<state.spreads.length;i++) state.spreads[i].hidden=(i!==n);
    state.idx=n;
    var pct=state.spreads.length>1?(n/(state.spreads.length-1))*100:100;
    bar.style.width=pct+"%";
    bar.parentNode.setAttribute("aria-valuenow",String(n+1));
    counter.textContent=(n+1)+" / "+state.spreads.length;
    prevBtn.disabled=n===0; nextBtn.disabled=n===state.spreads.length-1;
    var cur=state.spreads[n]; if(cur&&cur.focus) cur.focus();
    window.scrollTo(0,0);
  }

  // Dispatch to the reader the author chose (blog by default). The layout rides
  // on <body data-layout> so it is known even before an encrypted payload unlocks.
  function start(journey){
    state.journey=journey;
    var doc=journey&&journey.title?journey.title:"A journey";
    try{document.title=doc;}catch(_e){}
    var layout=(document.body&&document.body.getAttribute("data-layout"))||"blog";
    if(layout==="book") startBook(journey); else startBlog(journey);
  }

  // --- blog: one long, scrollable page of dated posts (a living travelogue) ---
  function buildPost(step,i,total){
    var art=el("article",{className:"pc-post",id:"entry-"+(i+1),"aria-label":"Entry "+(i+1)+" of "+total+": "+step.place.name});
    var meta=el("div",{className:"pc-post-meta"});
    if(step.date) meta.appendChild(el("time",{className:"pc-post-date",datetime:step.date,textContent:fmtDate(step.date)}));
    if(step.arriveBy) meta.appendChild(el("span",{className:"pc-post-mode"},[MODE_GLYPH[step.arriveBy]||"•"," ",MODE_LABEL[step.arriveBy]||"Travel"]));
    // A stable permalink: a real hash link (works with no JS) that also copies the
    // full URL to the clipboard when available.
    var hash="entry-"+(i+1);
    var link=el("a",{className:"pc-permalink",href:"#"+hash,"aria-label":"Permalink to this entry",title:"Copy link to this entry"});
    link.appendChild(el("span",{className:"pc-permalink-ico","aria-hidden":"true",textContent:"🔗"}));
    link.appendChild(el("span",{className:"pc-permalink-note","aria-hidden":"true",textContent:"Copied"}));
    link.addEventListener("click",function(){
      try{
        var url=(location.href||"").split("#")[0]+"#"+hash;
        if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(url);
        link.className="pc-permalink is-copied";
        setTimeout(function(){link.className="pc-permalink";},1400);
      }catch(_e){}
    });
    meta.appendChild(link);
    art.appendChild(meta);

    art.appendChild(el("h2",{className:"pc-post-place"},[flag(step.place.countryId)+" "+step.place.name]));
    if(step.story&&step.story.title) art.appendChild(el("h3",{className:"pc-post-title",textContent:step.story.title}));

    if(step.photos&&step.photos.length){
      var hero=el("button",{type:"button",className:"pc-hero pc-post-hero","aria-label":"View photo 1 of "+step.photos.length});
      hero.appendChild(el("img",{src:step.photos[0].src,alt:step.photos[0].caption||("Photo of "+step.place.name),loading:"lazy",decoding:"async"}));
      hero.addEventListener("click",function(){openLightbox(step.photos,0,hero);});
      art.appendChild(hero);
      if(step.photos.length>1){
        var gal=el("div",{className:"pc-gallery"});
        for(var p=1;p<step.photos.length;p++){ (function(idx){
          var btn=el("button",{type:"button",className:"pc-thumb","aria-label":"View photo "+(idx+1)+" of "+step.photos.length});
          btn.appendChild(el("img",{src:step.photos[idx].src,alt:step.photos[idx].caption||"",loading:"lazy",decoding:"async"}));
          btn.addEventListener("click",function(){openLightbox(step.photos,idx,btn);});
          gal.appendChild(btn);
        })(p); }
        art.appendChild(gal);
      }
    }
    if(step.story&&step.story.text) art.appendChild(el("p",{className:"pc-story-text",textContent:step.story.text}));
    return art;
  }

  function startBlog(journey){
    var app=document.getElementById("pc-app"); app.innerHTML="";
    var steps=journey.steps||[];

    var head=el("div",{className:"pc-head pc-head-blog"});
    head.appendChild(el("span",{className:"pc-blog-brand",textContent:journey.title||"A journey"}));
    head.appendChild(themeToggle());
    app.appendChild(head);

    var blog=el("div",{className:"pc-blog"});
    var mast=el("header",{className:"pc-masthead"});
    mast.appendChild(el("p",{className:"pc-kicker",textContent:"A Postcards travelogue"}));
    mast.appendChild(el("h1",{className:"pc-blog-title",textContent:journey.title||"A journey"}));
    if(journey.subtitle) mast.appendChild(el("p",{className:"pc-blog-sub",textContent:journey.subtitle}));
    var dr=journey.dateRange||{};
    if(dr.start){
      var range=dr.end&&dr.end!==dr.start?fmtDate(dr.start)+" — "+fmtDate(dr.end):fmtDate(dr.start);
      mast.appendChild(el("p",{className:"pc-blog-dates",textContent:range}));
    }
    var nIdx=steps.length?newestIndex(steps):-1;
    var lastDate=nIdx>=0?steps[nIdx].date:(dr.end||null);
    if(lastDate){
      mast.appendChild(el("p",{className:"pc-updated"},[
        el("span",{className:"pc-updated-dot","aria-hidden":"true"}),
        "Last updated "+fmtDate(lastDate)]));
    }
    if(nIdx>=0){
      var latest=el("a",{className:"pc-latest",href:"#entry-"+(nIdx+1)});
      latest.appendChild(el("span",{className:"pc-latest-tag",textContent:"Latest"}));
      latest.appendChild(el("span",{className:"pc-latest-title",textContent:entryTitle(steps[nIdx])}));
      latest.appendChild(el("span",{className:"pc-latest-arrow","aria-hidden":"true",textContent:"→"}));
      mast.appendChild(latest);
    }
    blog.appendChild(mast);

    if(steps.length) blog.appendChild(buildMapCard(journey));

    var feed=el("section",{className:"pc-feed","aria-label":"Journal entries"});
    var order=[];
    for(var i=0;i<steps.length;i++) order.push(i);
    if(FEED_NEWEST_FIRST) order.reverse();
    for(var o=0;o<order.length;o++){
      feed.appendChild(buildPost(steps[order[o]],order[o],steps.length));
      if(o<order.length-1) feed.appendChild(el("hr",{className:"pc-divider","aria-hidden":"true"}));
    }
    blog.appendChild(feed);
    app.appendChild(blog);
  }

  function startBook(journey){
    var app=document.getElementById("pc-app"); app.innerHTML="";

    var head=el("div",{className:"pc-head"});
    var prog=el("div",{className:"pc-progress",role:"progressbar","aria-label":"Reading progress","aria-valuemin":"1"});
    bar=el("div",{className:"pc-progress-bar"}); prog.appendChild(bar);
    counter=el("span",{className:"pc-counter"});
    var theme=themeToggle();
    head.appendChild(prog); head.appendChild(counter); head.appendChild(theme);
    app.appendChild(head);

    var stage=el("div",{className:"pc-stage"}); app.appendChild(stage);
    var spreads=[buildCover(journey)];
    if(journey.steps&&journey.steps.length) spreads.push(buildMap(journey));
    for(var i=0;i<(journey.steps||[]).length;i++) spreads.push(buildStep(journey.steps[i],i+1,journey.steps.length));
    // Page folios — a small editorial "03 / 12" at the foot of every spread.
    for(var f=0;f<spreads.length;f++) spreads[f].appendChild(el("p",{className:"pc-folio","aria-hidden":"true",textContent:pad2(f+1)+" / "+pad2(spreads.length)}));
    state.spreads=spreads;
    for(var kk=0;kk<spreads.length;kk++) stage.appendChild(spreads[kk]);
    prog.setAttribute("aria-valuemax",String(spreads.length));

    var nav=el("nav",{className:"pc-nav","aria-label":"Pages"});
    prevBtn=el("button",{className:"pc-btn",type:"button"},["← Back"]);
    nextBtn=el("button",{className:"pc-btn pc-btn-primary",type:"button"},["Next →"]);
    prevBtn.addEventListener("click",function(){go(state.idx-1);});
    nextBtn.addEventListener("click",function(){go(state.idx+1);});
    nav.appendChild(prevBtn); nav.appendChild(nextBtn);
    app.appendChild(nav);

    // Touch swipe
    var sx=0,sy=0;
    stage.addEventListener("touchstart",function(e){var t=e.changedTouches[0]; sx=t.clientX; sy=t.clientY;},{passive:true});
    stage.addEventListener("touchend",function(e){
      var t=e.changedTouches[0], dx=t.clientX-sx, dy=t.clientY-sy;
      if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)){ go(state.idx+(dx<0?1:-1)); }
    },{passive:true});

    go(0);
  }

  document.addEventListener("keydown",function(e){
    if(lb){
      if(e.key==="Escape"){closeLightbox(); e.preventDefault();}
      else if(e.key==="ArrowLeft"){lb.step(-1); e.preventDefault();}
      else if(e.key==="ArrowRight"){lb.step(1); e.preventDefault();}
      return;
    }
    var tag=e.target&&e.target.tagName;
    if(tag==="INPUT"||tag==="TEXTAREA") return;
    if(!state.spreads.length) return;
    if(e.key==="ArrowRight"||e.key==="PageDown"){go(state.idx+1); e.preventDefault();}
    else if(e.key==="ArrowLeft"||e.key==="PageUp"){go(state.idx-1); e.preventDefault();}
    else if(e.key==="Home"){go(0); e.preventDefault();}
    else if(e.key==="End"){go(state.spreads.length-1); e.preventDefault();}
  });

  function showGate(env){
    var app=document.getElementById("pc-app"); app.innerHTML="";
    var form=el("form",{className:"pc-gate"});
    form.appendChild(el("h1",{className:"pc-gate-title",textContent:"This journal is locked 🔒"}));
    form.appendChild(el("p",{className:"pc-gate-note",textContent:"Enter the passphrase the author shared with you. It is checked here in your browser — nothing is ever sent to a server."}));
    var input=el("input",{type:"password",className:"pc-gate-input",autocomplete:"off","aria-label":"Passphrase"});
    var label=el("label",{className:"pc-gate-label",textContent:"Passphrase"},[input]);
    var btn=el("button",{className:"pc-btn pc-btn-primary",type:"submit",textContent:"Unlock"});
    var msg=el("p",{className:"pc-gate-msg",role:"alert"});
    form.appendChild(label); form.appendChild(btn); form.appendChild(msg);
    form.addEventListener("submit",function(e){
      e.preventDefault(); msg.textContent=""; btn.disabled=true; btn.textContent="Unlocking…";
      // Normalise identically to the author side (encrypt.ts / PublishScreen):
      // NFC + trim, so a copy-pasted passphrase with stray spaces still unlocks.
      decrypt(env,input.value.normalize("NFC").trim()).then(function(journey){start(journey);}).catch(function(){
        btn.disabled=false; btn.textContent="Unlock"; msg.textContent="Wrong passphrase, or the file is damaged.";
        input.focus(); input.select();
      });
    });
    app.appendChild(form); input.focus();
  }

  function boot(){
    var dataEl=document.getElementById("pc-data");
    var envEl=document.getElementById("pc-env");
    try{
      if(dataEl){ start(JSON.parse(dataEl.textContent)); }
      else if(envEl){ showGate(JSON.parse(envEl.textContent)); }
    }catch(err){
      var app=document.getElementById("pc-app");
      if(app) app.innerHTML="<p class='pc-loading'>This journal could not be opened.</p>";
    }
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",boot); else boot();
})();
`;function E(e,t={}){let n=t.encrypted,r=t.attribution??x,i=t.layout===`book`?`book`:`blog`,a=n?`A locked journey`:e?.title||`A journey`,o=n?`<script type="application/json" id="pc-env">${C(n)}<\/script>`:`<script type="application/json" id="pc-data">${C(e??{title:a,dateRange:{},steps:[],totals:{countries:0,places:0,distanceKm:0}})}<\/script>`,s=`<script type="application/json" id="pc-land">${C(_)}<\/script>`;return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<meta name="referrer" content="no-referrer">
<title>${S(a)}</title>
<style>${w}</style>
</head>
<body data-attrib="${S(r)}" data-layout="${i}">
<div class="pc-shell">
<noscript><div class="pc-noscript">This published travel journal needs JavaScript to display. Please enable JavaScript in your browser to read it. Your data stays private — nothing is sent anywhere.</div></noscript>
<main id="pc-app" class="pc-app" aria-live="polite"><p class="pc-loading">Loading the journey…</p></main>
<footer class="pc-foot">Published with Postcards · a private, offline travel journal. ${S(r)}</footer>
</div>
${o}
${s}
<script>${T}<\/script>
</body>
</html>`}var D=6e5,O=16,k=12;function A(e){let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t)}function j(){let e=globalThis.crypto;if(!e?.subtle)throw Error(`Web Crypto is unavailable — cannot encrypt/decrypt here.`);return e.subtle}async function M(e,t,n){let r=j(),i=await r.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return r.deriveKey({name:`PBKDF2`,salt:t,iterations:n,hash:`SHA-256`},i,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function ae(e,t){if(!t)throw Error(`A passphrase is required to encrypt.`);if(t.length<8)throw Error(`Use a passphrase of at least 8 characters.`);let n=globalThis.crypto.getRandomValues(new Uint8Array(O)),r=globalThis.crypto.getRandomValues(new Uint8Array(k)),i=await M(t,n,D),a=new TextEncoder().encode(JSON.stringify(e)),o=await j().encrypt({name:`AES-GCM`,iv:r},i,a);return{v:1,alg:`AES-GCM`,kdf:`PBKDF2-SHA256`,iter:D,salt:A(n),iv:A(r),ct:A(new Uint8Array(o))}}var oe=`# Your published Postcards journey

This folder is a **self-contained, read-only travel-blog website**. Everything —
the reader code, styles, your journey data, and every photo — lives inside the
single \`index.html\` file. It runs **fully offline** and makes **no network
requests of any kind**: no fonts, no map tiles, no analytics, no trackers.

## How to view it

Just open \`index.html\`. Double-click it, or drag it into a browser tab. That's
it — there is no server and no build step.

## How to host it (pick one)

- **A plain folder or USB stick** — copy \`index.html\` anywhere and open it.
- **GitHub Pages** — put \`index.html\` in a repository, then in *Settings →
  Pages* choose the branch and \`/ (root)\` folder. Your site appears at
  \`https://<user>.github.io/<repo>/\`.
- **Netlify / Cloudflare Pages / Vercel** — drag the folder onto their "deploy"
  drop zone. No configuration needed.
- **Nextcloud / ownCloud** — upload \`index.html\`, then use *Share → Share link*.
  (Some Nextcloud setups download HTML instead of rendering it; if so, wrap it in
  a folder and share that, or enable "open in viewer".)
- **Any static web host** — upload \`index.html\` to the web root.

## The optional passphrase (client-side encryption)

If the author set a passphrase, the journey is stored **encrypted** (AES-GCM,
with a key stretched from the passphrase via PBKDF2-SHA256). When a visitor opens
the site they are asked for the passphrase; it is checked **entirely in their own
browser** and the content is decrypted there.

- The passphrase is **never written into any file** — you cannot recover it from
  the site, and neither can anyone else.
- There is **no recovery**. If the passphrase is lost, the author simply
  re-publishes with a new one.
- This works on any **static host with no server** (including GitHub Pages).

Share the passphrase with your readers **separately** from the link.

## No analytics — and how to add your own

The published site collects **nothing**. If you self-host and *want* analytics,
add your own script tag to a copy of \`index.html\`, or (better) put the file
behind a host that logs requests. Postcards never adds tracking for you.

## Optional: server-side password (a different thing)

The passphrase above is for **static hosts**. If instead you run a **server**
(nginx, Caddy, Apache), you can add HTTP **Basic-Auth** in front of the file as a
separate access control. For example, with nginx:

\`\`\`
location /my-journey/ {
  auth_basic "Private";
  auth_basic_user_file /etc/nginx/.htpasswd;
}
\`\`\`

This is independent of the client-side passphrase — use either, both, or neither.

## Attribution

Place coordinates come from **GeoNames** (CC BY 4.0). The route map's outline and
reference geometry derive from **Natural Earth** and **OpenStreetMap**
contributors. This credit is shown in the site's footer and must be preserved.

---

Published with **Postcards** — a private, local-first travel journal.
`,N=l(),P=`postcards-publish-repo`;function se(){try{let e=JSON.parse(localStorage.getItem(P)||`{}`);return{owner:e.owner||``,repo:e.repo||``,branch:e.branch||`main`}}catch{return{owner:``,repo:``,branch:`main`}}}function ce(e){try{localStorage.setItem(P,JSON.stringify({owner:e.owner,repo:e.repo,branch:e.branch}))}catch{}}function le(e){return e.normalize(`NFKD`).replace(/[̀-ͯ]/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``).slice(0,60)||`journey`}function ue(e,t){let n=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),r=t.map(e=>`<li><a href="./${n(e)}/">${n(e.replace(/-/g,` `))}</a></li>`).join(`
      `);return`<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${n(e)}</title>
<style>body{font:16px/1.6 system-ui,sans-serif;max-width:42rem;margin:3rem auto;padding:0 1rem}
h1{font-size:1.4rem}ul{list-style:none;padding:0}li{margin:.4rem 0}
a{display:inline-block;padding:.5rem .8rem;border:1px solid #ccc;border-radius:.5rem;text-decoration:none;color:inherit}
@media(prefers-color-scheme:dark){body{background:#111;color:#eee}a{border-color:#444}}</style>
</head><body>
<h1>${n(e)}</h1>
<ul>
      ${r}
</ul>
<p style="opacity:.6;font-size:.85rem">Published with Postcards — a private, local-first travel journal.</p>
</body></html>
`}function de(e){let t=m[e.mode]??`•`,n=e.date?` · ${o(e.date)}`:``;return`${t} ${e.from.name} → ${e.to.name}${n}`}function F({onClose:t}){let n=s(),r=(0,v.useMemo)(()=>e(),[]),l=te(e=>e.stories),p=a(e=>e.trips),m=i(e=>e.visits),_=d(e=>e.show),y=(0,v.useRef)(null),b=(0,v.useRef)(null);ee(y,t),(0,v.useEffect)(()=>{b.current?.focus()},[]);let[x,S]=(0,v.useState)(`all`),[C,w]=(0,v.useState)(``),[T,D]=(0,v.useState)(``),[O,k]=(0,v.useState)(``),[A,j]=(0,v.useState)(``),[M,P]=(0,v.useState)(`My travels`),[F,fe]=(0,v.useState)(``),[I,pe]=(0,v.useState)(``),[L,R]=(0,v.useState)(null),me=L!==null,[z,B]=(0,v.useState)(!1),[V,he]=(0,v.useState)(`blog`),[H,ge]=(0,v.useState)(!1),[U,_e]=(0,v.useState)(()=>({...se(),token:``})),[W,ve]=(0,v.useState)(null),G=(0,v.useMemo)(()=>[...p].sort((e,t)=>(t.date??``).localeCompare(e.date??``)),[p]),K=(0,v.useMemo)(()=>{let e=new Set;for(let t of p){let n=t.name?.trim();n&&e.add(n)}return[...e].sort((e,t)=>e.localeCompare(t))},[p]),q=(0,v.useMemo)(()=>p.filter(e=>(e.name?.trim()??``)===T).map(e=>e.tripId),[p,T]),J=(0,v.useMemo)(()=>e=>h(e,r),[r]),Y=(0,v.useMemo)(()=>{let e={title:M.trim()||`My travels`,subtitle:F.trim()||void 0,...x===`trip`&&C?{tripIds:[C]}:{},...x===`folder`&&T?{tripIds:q}:{},...x===`range`&&O?{dateFrom:O}:{},...x===`range`&&A?{dateTo:A}:{}};return ie({visits:m,trips:p,stories:l,resolveCoords:J},e)},[m,p,l,J,x,C,T,q,O,A,M,F]),ye=x===`trip`&&!C||x===`folder`&&!T||x===`range`&&!O&&!A,X=Y.steps.length===0||ye,Z=!X&&!!M.trim()&&!me,Q=I.normalize(`NFC`).trim(),be=Q.length>0&&Q.length<8;async function $(){let e=Q;if(e){if(e.length<8)throw Error(`Use a passphrase of at least 8 characters.`);return E(null,{encrypted:await ae(Y,e),layout:V})}if(I.length>0)throw Error(`That passphrase is only spaces — clear it to publish openly, or enter a real one.`);return E(Y,{layout:V})}async function xe(){if(Z){R(`download`);try{ne(`index.html`,await $(),`text/html`),_(n(`publish.toast.saved`))}catch(e){_(e instanceof Error?e.message:n(`publish.toast.buildErr`))}finally{R(null)}}}async function Se(){if(Z){if(!U.owner.trim()||!U.repo.trim()||!U.branch.trim()||!U.token.trim()){_(n(`publish.toast.missingFields`));return}R(`push`);try{let e=await $(),t=U.owner.trim(),r=U.repo.trim(),i=U.branch.trim();ce({owner:t,repo:r,branch:i});let a=new re({owner:t,repo:r,branch:i,token:U.token.trim()}),o=x===`folder`&&T.trim()||x===`trip`&&G.find(e=>e.tripId===C)?.name?.trim()||M.trim()||`journey`,s=le(o);await a.putFiles([{path:`${s}/index.html`,content:e},{path:`${s}/README.md`,content:oe}],`Publish "${o}" via Postcards`);try{let e=(await a.listDir(``)).filter(e=>e.type===`dir`&&!e.name.startsWith(`.`)).map(e=>e.name);e.includes(s)||e.push(s),e.sort((e,t)=>e.localeCompare(t)),await a.putFiles([{path:`index.html`,content:ue(r,e)}],`Update travels index via Postcards`)}catch{}let c=null;try{c=await a.enablePages()}catch{c=null}ve(a.pagesSiteUrl()+s+`/`),_(c?n(`publish.toast.pushedLive`):n(`publish.toast.pushed`,{owner:t,repo:r}))}catch(e){_(e instanceof Error?e.message:n(`publish.toast.pushErr`))}finally{R(null)}}}let Ce=(0,v.useMemo)(()=>z?E(Y,{layout:V}):``,[z,Y,V]);return(0,N.jsx)(`div`,{className:`modal-backdrop`,onClick:t,children:(0,N.jsxs)(`div`,{className:`modal publish-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`publish-title`,ref:y,onClick:e=>e.stopPropagation(),children:[(0,N.jsxs)(`div`,{className:`publish-head`,children:[(0,N.jsx)(`h2`,{id:`publish-title`,children:n(`settings.publish.title`)}),(0,N.jsx)(`button`,{className:`btn-ghost`,type:`button`,onClick:t,"aria-label":n(`publish.closeAria`),children:n(`common.close`)})]}),(0,N.jsx)(`p`,{className:`muted small`,children:n(`publish.intro`)}),(0,N.jsxs)(`fieldset`,{className:`publish-fieldset`,children:[(0,N.jsx)(`legend`,{children:n(`publish.whatToPublish`)}),(0,N.jsx)(`div`,{className:`btn-row`,role:`radiogroup`,"aria-label":n(`publish.scopeAria`),children:[[`all`,n(`publish.scope.all`)],[`trip`,n(`publish.scope.trip`)],[`folder`,n(`publish.scope.byTrip`)],[`range`,n(`publish.scope.range`)]].map(([e,t])=>(0,N.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":x===e,className:`mini-btn`+(x===e?` on`:``),onClick:()=>S(e),children:t},e))}),x===`trip`&&(0,N.jsxs)(`label`,{className:`picker-label`,htmlFor:`publish-trip`,children:[n(`publish.tripField`),(0,N.jsxs)(`select`,{id:`publish-trip`,className:`select`,value:C,onChange:e=>w(e.target.value),children:[(0,N.jsx)(`option`,{value:``,disabled:!0,children:G.length?n(`publish.pickTrip`):n(`publish.noTrips`)}),G.map(e=>(0,N.jsx)(`option`,{value:e.tripId,children:de(e)},e.tripId))]})]}),x===`folder`&&(0,N.jsxs)(`label`,{className:`picker-label`,htmlFor:`publish-folder`,children:[n(`publish.byTripLabel`),(0,N.jsxs)(`select`,{id:`publish-folder`,className:`select`,value:T,onChange:e=>{let t=e.target.value;D(t),P(e=>!e.trim()||e.trim()===`My travels`?t:e)},children:[(0,N.jsx)(`option`,{value:``,disabled:!0,children:K.length?n(`publish.pickFolder`):n(`publish.noNamedTrips`)}),K.map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]})]}),x===`range`&&(0,N.jsxs)(`div`,{className:`trip-form-row`,children:[(0,N.jsxs)(`label`,{className:`picker-label`,htmlFor:`publish-from`,children:[n(`travel.from`),(0,N.jsx)(`input`,{id:`publish-from`,className:`select`,type:`date`,value:O,onChange:e=>k(e.target.value)})]}),(0,N.jsxs)(`label`,{className:`picker-label`,htmlFor:`publish-to`,children:[n(`travel.to`),(0,N.jsx)(`input`,{id:`publish-to`,className:`select`,type:`date`,value:A,onChange:e=>j(e.target.value)})]})]})]}),(0,N.jsxs)(`fieldset`,{className:`publish-fieldset`,children:[(0,N.jsx)(`legend`,{children:n(`publish.cover`)}),(0,N.jsxs)(`label`,{className:`picker-label`,htmlFor:`publish-name`,children:[n(`journal.titleField`),(0,N.jsx)(`input`,{id:`publish-name`,ref:b,className:`select`,type:`text`,maxLength:120,value:M,onChange:e=>P(e.target.value),placeholder:n(`publish.titlePlaceholder`)})]}),(0,N.jsxs)(`label`,{className:`picker-label`,htmlFor:`publish-sub`,children:[n(`publish.subtitle`),(0,N.jsx)(`input`,{id:`publish-sub`,className:`select`,type:`text`,maxLength:160,value:F,onChange:e=>fe(e.target.value),placeholder:n(`publish.subtitlePlaceholder`)})]})]}),(0,N.jsxs)(`fieldset`,{className:`publish-fieldset`,children:[(0,N.jsx)(`legend`,{children:n(`publish.layout.legend`)}),(0,N.jsx)(`div`,{className:`btn-row`,role:`radiogroup`,"aria-label":n(`publish.layout.aria`),children:[[`blog`,n(`publish.layout.blog`)],[`book`,n(`publish.layout.book`)]].map(([e,t])=>(0,N.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":V===e,className:`mini-btn`+(V===e?` on`:``),onClick:()=>he(e),children:t},e))}),(0,N.jsx)(`p`,{className:`muted small`,children:n(V===`blog`?`publish.layout.blogHint`:`publish.layout.bookHint`)})]}),(0,N.jsxs)(`fieldset`,{className:`publish-fieldset`,children:[(0,N.jsx)(`legend`,{children:n(`publish.protection`)}),(0,N.jsxs)(`label`,{className:`picker-label`,htmlFor:`publish-pass`,children:[n(`publish.passphrase`),(0,N.jsx)(`input`,{id:`publish-pass`,className:`select`,type:`password`,autoComplete:`new-password`,value:I,onChange:e=>pe(e.target.value),placeholder:n(`publish.passphrasePlaceholder`)})]}),(0,N.jsx)(`p`,{className:`muted small`,children:I.trim()?n(`publish.encryptedNote`):n(`publish.publicNote`)}),be&&(0,N.jsx)(`p`,{className:`small`,role:`alert`,style:{color:`var(--danger, #c0392b)`},children:n(`publish.passphraseTooShort`,{n:8})})]}),(0,N.jsxs)(`div`,{className:`publish-summary`,role:`status`,"aria-live":`polite`,children:[X?(0,N.jsx)(`p`,{className:`muted small`,children:n(`publish.emptySelection`)}):(0,N.jsxs)(`div`,{className:`publish-totals`,children:[(0,N.jsxs)(`span`,{className:`publish-total`,children:[(0,N.jsx)(`strong`,{children:c(Y.totals.places)}),` `,n.plural(`publish.stops`,Y.totals.places)]}),(0,N.jsxs)(`span`,{className:`publish-total`,children:[(0,N.jsx)(`strong`,{children:c(Y.totals.countries)}),` `,n.plural(`publish.countries`,Y.totals.countries)]}),(0,N.jsxs)(`span`,{className:`publish-total`,children:[(0,N.jsx)(`strong`,{children:f(Y.totals.distanceKm)}),` `,n(`stats.travel.travelled`)]}),Y.dateRange.start&&(0,N.jsxs)(`span`,{className:`publish-total publish-total-dates`,children:[o(Y.dateRange.start),Y.dateRange.end&&Y.dateRange.end!==Y.dateRange.start?` – ${o(Y.dateRange.end)}`:``]})]}),!X&&(0,N.jsxs)(`p`,{className:`publish-chips`,"aria-hidden":!0,children:[Y.steps.slice(0,8).map((e,t)=>(0,N.jsxs)(`span`,{className:`publish-chip`,children:[u(e.place.countryId),` `,e.place.name]},t)),Y.steps.length>8&&(0,N.jsxs)(`span`,{className:`publish-chip publish-chip-more`,children:[`+`,Y.steps.length-8]})]})]}),(0,N.jsx)(`p`,{className:`muted small`,children:n(`publish.photosNote`)}),(0,N.jsxs)(`div`,{className:`publish-actions`,children:[(0,N.jsx)(`button`,{className:`btn`,type:`button`,disabled:!Z,onClick:xe,children:n(L===`download`?`publish.building`:`publish.download`)}),(0,N.jsx)(`button`,{className:`btn-ghost`,type:`button`,disabled:X,"aria-pressed":z,onClick:()=>B(e=>!e),children:n(z?`publish.hidePreview`:`publish.preview`)})]}),z&&!X&&(0,N.jsx)(`div`,{className:`publish-preview`,children:(0,N.jsx)(`iframe`,{title:n(`publish.previewTitle`),className:`publish-preview-frame`,sandbox:`allow-scripts`,srcDoc:Ce})}),(0,N.jsxs)(`div`,{className:`publish-github`,children:[(0,N.jsxs)(`button`,{className:`link`,type:`button`,"aria-expanded":H,onClick:()=>ge(e=>!e),children:[H?`▾`:`▸`,` `,n(`publish.ghToggle`)]}),H&&(0,N.jsxs)(`div`,{className:`publish-github-body`,children:[(0,N.jsx)(`p`,{className:`muted small`,children:n(`publish.ghNote`)}),(0,N.jsx)(g,{idPrefix:`gh`,value:U,onChange:_e,repoPlaceholder:`my-journey`}),(0,N.jsx)(`div`,{className:`publish-actions`,children:(0,N.jsx)(`button`,{className:`btn`,type:`button`,disabled:!Z,onClick:Se,children:n(L===`push`?`publish.pushing`:`publish.push`)})}),W&&(0,N.jsxs)(`p`,{className:`muted small publish-live`,children:[n(`publish.liveSitePrefix`),` `,(0,N.jsx)(`a`,{href:W,target:`_blank`,rel:`noreferrer noopener`,children:W}),(0,N.jsx)(`br`,{}),n(`publish.liveSiteNote`)]})]})]})]})})}export{F as PublishScreen};