import {useEffect,useState} from "react";
const symbols=["❀","✿","❁","✾"];
export default function Petals({started}) {
 const [petals,setPetals]=useState([]);
 useEffect(()=>{
  if(!started || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let serial=0;
  const tick=setInterval(()=>{
   if(document.hidden)return;
   setPetals(old=>[...old.slice(-(window.innerWidth<600?29:54)),{
     id:++serial, symbol:symbols[Math.floor(Math.random()*symbols.length)],
     left:`${Math.random()*100}%`, drift:`${(Math.random()-.5)*190}px`,
     duration:`${8+Math.random()*7}s`,font:`${13+Math.random()*13}px`
   }]);
  },450);
  return()=>clearInterval(tick);
 },[started]);
 return <div className="petals" aria-hidden="true">{petals.map(p=><span key={p.id} className="petal" style={{left:p.left,'--drift':p.drift,animationDuration:p.duration,fontSize:p.font}} onAnimationEnd={()=>setPetals(a=>a.filter(x=>x.id!==p.id))}>{p.symbol}</span>)}</div>;
}
