import {useState} from 'react';
import {submitRSVP,friendlyError} from '../firebase/rsvpService';
export default function RSVPModal({open,onClose}){
 const [name,setName]=useState(''); const [attendance,setAttendance]=useState('accepted');
 const [guests,setGuests]=useState(1); const [message,setMessage]=useState('');
 const [saving,setSaving]=useState(false);const [notice,setNotice]=useState('');
 if(!open)return null;
 async function handleSubmit(e){
  e.preventDefault();if(saving)return;
  const clean=name.trim();if(!clean||clean.length>90||message.length>1000)return setNotice('Please enter a valid name and a shorter message.');
  setSaving(true);setNotice('');
  try{
   await submitRSVP({name:clean,attendance,guests:attendance==='declined'?0:guests,message});
   setNotice('Thank you! Your RSVP has been received. ❤️');
   setName('');setAttendance('accepted');setGuests(1);setMessage('');
  }catch(error){console.error('Firebase RSVP error:',error);setNotice(friendlyError(error));}
  finally{setSaving(false);}
 }
 return <div className="modal-layer" onMouseDown={e=>{if(e.target===e.currentTarget&&!saving)onClose();}}>
  <div className="rsvp-dialog react-dialog" role="dialog" aria-modal="true" aria-label="Kindly Reply">
   <form className="rsvp-form" onSubmit={handleSubmit}>
    <button type="button" className="close-modal" onClick={onClose} aria-label="Close RSVP">×</button>
    <div className="modal-om">❈</div><p className="eyebrow">THE SANDILYA PARIVAR</p>
    <h2>Kindly Reply</h2><p>We would be honoured to celebrate with you.</p>
    <label htmlFor="guestName">Your name</label><input id="guestName" required maxLength={90} value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name"/>
    <label htmlFor="attendance">Will you be attending?</label>
    <select id="attendance" value={attendance} onChange={e=>setAttendance(e.target.value)}><option value="accepted">Accept with pleasure</option><option value="declined">Decline with regret</option></select>
    <label htmlFor="guestCount">Number of guests attending</label>
    <div className="guest-stepper"><button type="button" disabled={attendance==='declined'} onClick={()=>setGuests(x=>Math.max(1,x-1))}>−</button>
     <input id="guestCount" type="number" min="1" max="30" required disabled={attendance==='declined'} value={attendance==='declined'?0:guests} onChange={e=>setGuests(Math.max(1,Math.min(30,Number(e.target.value)||1)))}/>
     <button type="button" disabled={attendance==='declined'} onClick={()=>setGuests(x=>Math.min(30,x+1))}>+</button></div>
    <label htmlFor="wishes">A message for the couple (optional)</label>
    <textarea id="wishes" rows="3" value={message} maxLength={1000} onChange={e=>setMessage(e.target.value)} placeholder="Your blessings & wishes..."/>
    <button className="gold-button modal-submit" type="submit" disabled={saving}>{saving?'Saving your RSVP...':'Send RSVP ↗'}</button>
    {notice&&<div className="rsvp-notice" role="status">{notice}</div>}
    <small>Your reply will be saved securely in our wedding guest list.</small>
   </form>
  </div>
 </div>;
}
