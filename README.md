# Firebase FCM Notification Sender (Node.js)

This is a standalone Node.js project to send push notifications via Firebase Cloud Messaging (FCM) using the Firebase Admin SDK.

## 🚀 Features

- Send notifications to individual devices using FCM tokens
- Securely handles Firebase Admin SDK credentials
- Extendable as an API (e.g., via Express)

## 📦 Requirements

- Node.js >= 14.x
- Firebase project with Cloud Messaging enabled
- Firebase Admin SDK service account key

## 🔧 Setup
### 1.Clone or Create the Project**

```bash
mkdir fcm-sender
cd fcm-sender
git clone https://github.com/SukumarRaja/fcm-sender.git

### 2. Open code editor (vs code)
```bash
npm init -y
npm install firebase-admin

### 3. Test the notification

```bash
node sendNotification.js

### 4. Success response
✅ Notification sent successfully: projects/your-project-id/messages/...
