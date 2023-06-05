const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.helloWorld = functions.https.onRequest(async (req, res) => {
  try {
    const snapshot = await admin.firestore().doc("regions/France").get();
    const data = snapshot.data();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
