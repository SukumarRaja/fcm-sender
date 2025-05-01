const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Notification sender function
async function sendNotification(token, title, body, data = {}) {
  const message = {
    token,
    notification: {
      title,
      body,
    },
    data,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("✅ Notification sent successfully:", response);
  } catch (error) {
    console.error("❌ Error sending notification:", error);
  }
}

// Example usage
const deviceToken = "YOUR-DEVICE-TOKEN";
sendNotification(
  deviceToken,
  "Test Message",
  "You have received new test message",
  {
    name: "Test user",
    mobile: "9876543210",
  }
);
