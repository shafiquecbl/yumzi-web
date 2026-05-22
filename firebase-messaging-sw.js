importScripts('https://www.gstatic.com/firebasejs/12.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCm17FwkzuasroSIKy4LioG9hnhf9oA6Pk',
  authDomain: 'yumzi-app.firebaseapp.com',
  projectId: 'yumzi-app',
  storageBucket: 'yumzi-app.firebasestorage.app',
  messagingSenderId: '155549227618',
  appId: '1:155549227618:web:25aa3e593e463b97a44f3b',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  const title = notification.title || 'Yumzi';
  const options = {
    body: notification.body || '',
    data: payload.data || {},
  };

  self.registration.showNotification(title, options);
});
