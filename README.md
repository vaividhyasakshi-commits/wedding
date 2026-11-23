# Sweta & Vikas · Royal Wedding (React + Vite + Firebase)

## Quick start
Open a terminal INSIDE the `wedding` folder:

```powershell
npm install
npm run dev
```

Guest invitation: http://localhost:5173/
Admin: http://localhost:5173/admin

## Firebase
Project config from your uploaded Firebase web app is already in `src/firebase/config.js` (`wedding-a3f5b`).
1. Firebase Console > Authentication > Sign-in method: enable **Anonymous** and **Email/Password**.
2. Authentication > Users: create an admin user; copy that user's **UID**.
3. In `firestore.rules`, replace `REPLACE_WITH_YOUR_ADMIN_UID` with that UID.
4. Firebase Console > Firestore Database: create the database in production mode, open **Rules**, paste full `firestore.rules` content, and **Publish**.
5. Authentication > Settings > Authorized domains: include your deployed domain (and localhost, if needed).
6. Test two submissions, one Accepted and one Declined. Dashboard reads real-time and exports CSV.

Firestore database rules are deployed in Firebase Console; simply storing `firestore.rules` locally does not deploy them.

## Music
Put your own licensed track at `public/music/wedding.mp3`. Music begins only when guest clicks **Open the Invitation**. No floating music control.

## Images
The original scenic backgrounds are preserved exactly as external remote URLs; they may fail if those sources stop hosting them. You can swap for local images in `src/components/*.jsx` or `public/images`.

## Build

Build and deploy to the existing Firebase Hosting site:

```powershell
npm run build
firebase deploy --only hosting --project wedding-a3f5b
```

`firebase.json` serves the Vite build and routes direct visits to `/admin` to the React app.

- Guest invitation: https://wedding-a3f5b.web.app/
- Admin sign-in: https://wedding-a3f5b.web.app/admin

## Notes
- Original HTML sections are preserved and parsed into React elements with `html-react-parser` in separate React components, to keep the design matching the supplied version.
- Auth + Firestore Rules required. A client-side route is not itself an access control.
- Anonymous auth is basic; consider App Check and anti-spam controls before wide public sharing.
- Guests count means expected attendees (not unique individuals). Multiple submissions are allowed.
