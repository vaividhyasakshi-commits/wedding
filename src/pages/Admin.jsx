import {useEffect,useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase/config';
import AdminLogin from './AdminLogin';import AdminDashboard from './AdminDashboard';
import '../styles/admin.css';
export default function Admin(){const[user,setUser]=useState(undefined);
 useEffect(()=>onAuthStateChanged(auth,setUser),[]);
 if(user===undefined)return <div className="login-screen" style={{color:'#f6dba7'}}>Connecting to Firebase...</div>;
 return user&&!user.isAnonymous?<AdminDashboard/>:<AdminLogin/>;
}
