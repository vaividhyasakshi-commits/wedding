import {useEffect,useMemo,useState} from 'react';
import {signOut} from 'firebase/auth';
import {collection,onSnapshot,orderBy,query,updateDoc,deleteDoc,doc} from 'firebase/firestore';
import {auth,db} from '../firebase/config';
function formatDate(ts){return ts?.toDate?.().toLocaleString('en-IN',{timeZone:'Asia/Kolkata',dateStyle:'medium',timeStyle:'short'})||'—';}
function safeCSV(v){let s=String(v??'').replace(/[\r\n]/g,' ');if(/^\s*[=+\-@\t]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';}
export default function AdminDashboard(){
 const [guests,setGuests]=useState([]);const[status,setStatus]=useState('Connecting to database...');
 const[search,setSearch]=useState('');const[filter,setFilter]=useState('all');const[busy,setBusy]=useState('');
 useEffect(()=>{
  const q=query(collection(db,'weddingRSVP'),orderBy('createdAt','desc'));
  return onSnapshot(q,snapshot=>{setGuests(snapshot.docs.map(d=>({id:d.id,...d.data()})));setStatus('● Live · Connected');},e=>{console.error(e);setStatus('Database error: '+e.code+' — check admin UID and Firestore Rules');});
 },[]);
 const attending=guests.filter(g=>g.attendance==='accepted');const declined=guests.filter(g=>g.attendance==='declined');
 const totalExpected=attending.reduce((n,g)=>n+(Number(g.guests)||0),0);
 const filtered=useMemo(()=>guests.filter(g=>(filter==='all'||g.attendance===filter)&&String(g.name||'').toLowerCase().includes(search.toLowerCase().trim())),[guests,filter,search]);
 async function changeStatus(g){setBusy(g.id);try{await updateDoc(doc(db,'weddingRSVP',g.id),{attendance:g.attendance==='accepted'?'declined':'accepted',guests:g.attendance==='accepted'?0:1});}catch(e){alert('Update failed: '+e.code);}finally{setBusy('');}}
 async function removeGuest(g){if(!window.confirm('Delete RSVP from '+g.name+'?'))return;setBusy(g.id);try{await deleteDoc(doc(db,'weddingRSVP',g.id));}catch(e){alert('Delete failed: '+e.code);}finally{setBusy('');}}
 function exportCSV(){const rows=[['Name','Attendance','Guests','Message','Submitted'],...filtered.map(g=>[g.name,g.attendance,g.guests,g.message,formatDate(g.createdAt)])];const csv='\uFEFF'+rows.map(r=>r.map(safeCSV).join(',')).join('\r\n');const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='sweta-vikas-rsvp.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 return <div className="dashboard">
  <header className="dashboard-header"><div><p className="eyebrow">ROYAL WEDDING · 11 DEC 2026</p><h1>Sweta <em>&amp;</em> Vikas</h1><p>Live Guest RSVP Dashboard</p></div><button className="outline-btn" onClick={()=>signOut(auth)}>Logout</button></header>
  <main className="dashboard-main"><div className="section-heading"><div><h2>Guest Overview</h2><p id="connectionStatus">{status}</p></div><button className="gold-btn" onClick={exportCSV}>↓ Export CSV</button></div>
   <section className="stats"><div className="stat-card"><span>Total Responses</span><strong>{guests.length}</strong></div><div className="stat-card green"><span>Attending</span><strong>{attending.length}</strong></div><div className="stat-card red"><span>Declined</span><strong>{declined.length}</strong></div><div className="stat-card"><span>Total Expected Guests</span><strong>{totalExpected}</strong></div></section>
   <section className="table-panel"><div className="table-toolbar"><div><h2>Guest List</h2><p>Responses update automatically in real time.</p></div><div className="filters"><input type="search" placeholder="Search guest name..." value={search} onChange={e=>setSearch(e.target.value)}/><select value={filter} onChange={e=>setFilter(e.target.value)}><option value="all">All Responses</option><option value="accepted">Attending</option><option value="declined">Declined</option></select></div></div>
    <div className="table-scroll"><table><thead><tr><th>#</th><th>Guest Name</th><th>Status</th><th>Guests</th><th>Message</th><th>Submitted</th><th>Action</th></tr></thead><tbody>{filtered.length?filtered.map((g,i)=><tr key={g.id} className={g.attendance==='accepted'?'attending':'declined'}><td>{i+1}</td><td>{g.name}</td><td><span className={'status '+g.attendance}>{g.attendance==='accepted'?'● Attending':'● Declined'}</span></td><td>{g.guests}</td><td className="message-cell">{g.message||'—'}</td><td>{formatDate(g.createdAt)}</td><td className="row-actions"><button disabled={busy===g.id} onClick={()=>changeStatus(g)}>Toggle status</button><button disabled={busy===g.id} onClick={()=>removeGuest(g)}>Delete</button></td></tr>):<tr><td colSpan={7} className="empty">No matching RSVP responses found.</td></tr>}</tbody></table></div>
   </section>
  </main><footer>Made with love for Sweta &amp; Vikas · Sandilya Parivar</footer>
 </div>;
}
