import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase/config';
export default function AdminLogin(){
 const[email,setEmail]=useState('');const[password,setPassword]=useState('');const[error,setError]=useState('');const[busy,setBusy]=useState(false);
 async function login(e){e.preventDefault();setBusy(true);setError('');try{await signInWithEmailAndPassword(auth,email.trim(),password);}catch(err){console.error(err);setError('Login failed. Check email/password and Authentication settings. '+(err.code||''));}finally{setBusy(false);}}
 return <section className="login-screen"><form className="login-card" onSubmit={login}>
 <div className="ornament">✦ ❈ ✦</div><p className="eyebrow">SANDILYA PARIVAR</p>
 <h1>Wedding Admin</h1><p>Sweta &amp; Vikas · RSVP Management</p>
 <label htmlFor="adminEmail">Email Address</label><input id="adminEmail" type="email" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="username" required placeholder="Admin email"/>
 <label htmlFor="adminPassword">Password</label><input id="adminPassword" type="password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete="current-password" required placeholder="Password"/>
 <button className="gold-btn" type="submit" disabled={busy}>{busy?'Signing in...':'Login to Dashboard'}</button><p className="error" role="alert">{error}</p>
 </form></section>;
}
