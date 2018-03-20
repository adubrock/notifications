var userData = require('../user_data.js');
// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1521521391.3
importScripts('https://web-sdk.urbanairship.com/notify/v1/ua-sdk.min.js')
uaSetup.worker(self, {
  defaultIcon: userData.defaultIcon,
  defaultTitle: 'Excellent Notification',
  defaultActionURL: 'https://www.google.com',
  appKey: userData.appKey,
  token: userData.token,
  vapidPublicKey: userData.vapidPublicKey
})
