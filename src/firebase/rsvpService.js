import {auth,db} from './config';
import {onAuthStateChanged,signInAnonymously} from 'firebase/auth';
import {addDoc,collection,serverTimestamp} from 'firebase/firestore';

function currentUser() {
 return new Promise(resolve=>{
   const unsubscribe=onAuthStateChanged(auth,user=>{unsubscribe();resolve(user);});
 });
}
export async function submitRSVP({name,attendance,guests,message}){
 const who=await currentUser();
 // A logged-in admin may also submit an RSVP, and an ordinary guest is signed in anonymously.
 const user=who || (await signInAnonymously(auth)).user;
 return addDoc(collection(db,'weddingRSVP'),{
   name:name.trim(),attendance,guests:attendance==='accepted'?Number(guests):0,
   message:message.trim(),ownerUid:user.uid,createdAt:serverTimestamp()
 });
}
export function friendlyError(error){
 const code=error?.code||'';
 if(code==='auth/operation-not-allowed')return 'Anonymous Authentication Firebase console mein enable karo.';
 if(code==='permission-denied')return 'Firestore Rules ne save block kiya. Rules Publish karo aur Admin UID check karo.';
 if(code==='auth/unauthorized-domain')return 'Firebase Authentication > Settings > Authorized domains mein apna domain add karo.';
 if(code==='auth/invalid-api-key')return 'Firebase configuration ka API key check karo.';
 if(code==='unavailable')return 'Network/Firestore unavailable hai. Internet aur Firestore database check karo.';
 return `Could not save: ${code||error?.message||'unknown error'}`;
}
