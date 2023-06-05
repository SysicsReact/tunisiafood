
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  const promise = admin.firestore().doc('regions/France').get()
  const p2 = promise.then(snapshot=>{
     const data = snapshot.data()
     response.send(data)
  })
  p2.catch(error=>{
     //handle error 
     console.log(error)
     response.status(500).send(error)
  })
    
});

