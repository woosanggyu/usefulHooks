import React, { useEffect, useState, useRef } from 'react';

const useNotification = (title, options) => {
  if(!("Notification" in window)) {
    return;
  }

  const fireNoti = () => {
    if(Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if(permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  }

  return fireNoti;
}

const App = () => {

  const triggerNoti = useNotification("Good job! my friend", {
    body : "Thank you for visit my Page"
  });

  return (
    <div className="App">
      <button onClick={triggerNoti}>Click Me</button>
    </div>
  );
}

export default App;