import {useEffect,useRef,useState} from 'react';
import InvitationCover from '../components/InvitationCover';
import Hero from '../components/Hero';
import Blessings from '../components/Blessings';
import Couple from '../components/Couple';
import WeddingEvents from '../components/WeddingEvents';
import Family from '../components/Family';
import Venue from '../components/Venue';
import RSVP from '../components/RSVP';
import Finale from '../components/Finale';
import RSVPModal from '../components/RSVPModal';
import Petals from '../components/Petals';
import '../styles/wedding.css';

const swagatTime=new Date('2026-12-11T17:00:00+05:30').getTime();
function updateCountdown(){
 const sec=Math.floor(Math.max(0,swagatTime-Date.now())/1000);
 const vals={days:Math.floor(sec/86400),hours:Math.floor((sec%86400)/3600),minutes:Math.floor((sec%3600)/60),seconds:sec%60};
 Object.entries(vals).forEach(([id,v])=>{const el=document.getElementById(id);if(el)el.textContent=String(v).padStart(2,'0');});
}
export default function Wedding(){
 const [coverOpen,setCoverOpen]=useState(true);
 const [coverClosing,setCoverClosing]=useState(false);
 const [modalOpen,setModalOpen]=useState(false);
 const audioRef=useRef(null);
 useEffect(()=>{
  document.body.classList.toggle('locked',coverOpen||modalOpen);
  return()=>document.body.classList.remove('locked');
 },[coverOpen,modalOpen]);
 useEffect(()=>{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(!entry.isIntersecting)return;
   const siblings=Array.from(entry.target.parentElement.querySelectorAll(':scope > .reveal'));
   const n=siblings.indexOf(entry.target);
   entry.target.style.transitionDelay=`${Math.min(Math.max(n,0)*115,700)}ms`;
   entry.target.classList.add('visible');observer.unobserve(entry.target);
  }),{rootMargin:'0px 0px -12% 0px',threshold:.06});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  return()=>observer.disconnect();
 },[]);
 useEffect(()=>{
  updateCountdown();const id=setInterval(updateCountdown,1000);return()=>clearInterval(id);
 },[]);
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let request=false;
  const handler=()=>{
   if(request)return;request=true;
   requestAnimationFrame(()=>{
    document.querySelectorAll('[data-parallax]').forEach(scene=>{
     const r=scene.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
     const el=scene.querySelector('.scene-photo');if(!el)return;
     const factor=((innerHeight/2)-(r.top+r.height/2))/innerHeight;
     el.style.transform=`scale(1.12) translateY(${factor*23}px)`;
    });request=false;
   });
  };
  addEventListener('scroll',handler,{passive:true});return()=>removeEventListener('scroll',handler);
 },[]);
 function openInvitation(){
  if(audioRef.current){audioRef.current.volume=.65;audioRef.current.play().catch(error=>console.info('Music is optional:',error.message));}
  setCoverClosing(true);
  setTimeout(()=>setCoverOpen(false),1100);
  requestAnimationFrame(()=>document.querySelectorAll('.reveal').forEach(el=>{
   if(el.getBoundingClientRect().top<innerHeight*.88)el.classList.add('visible');
  }));
 }
 function handleClick(e){
  if(e.target.closest('#topRsvp,#mainRsvp'))setModalOpen(true);
 }
 return <div className="wedding-site" onClick={handleClick}>
  <div className="grain" aria-hidden="true"/><Petals started={!coverOpen}/>
  <InvitationCover open={coverOpen} closing={coverClosing} onOpen={openInvitation}/>
  <audio ref={audioRef} loop preload="none" src="/music/wedding.mp3"/>
  <header className="topbar"><a className="brand" href="#home">S <span>♥</span> V</a><span>शुभ विवाह</span><button className="mini-rsvp" id="topRsvp" type="button">RSVP ↗</button></header>
  <main><Hero/><Blessings/><Couple/><WeddingEvents/><Family/><Venue/><RSVP/><Finale/></main>
  <footer className="footer">With love from the Sandilya Parivar</footer>
  <RSVPModal open={modalOpen} onClose={()=>setModalOpen(false)}/>
 </div>;
}
