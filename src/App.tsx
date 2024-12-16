import React from 'react';
import './App.css';
import FloatingMedia from './components/FloatingWhatsApp';

const agents = [
    { name: 'Call', phone: '6281234567890', icon: 'https://img.icons8.com/3d-fluency/94/telephone-handset.png' },
    { name: 'Email', phone: '6289876543210', icon: 'https://img.icons8.com/3d-fluency/94/gmail.png' },
    { name: 'Email Broadcast', phone: '6281234567890', icon: 'https://img.icons8.com/ios/50/online-support--v1.png' },
    { name: 'Facebook', phone: '6289876543210', icon: 'https://img.icons8.com/3d-fluency/94/facebook-messenger.png' },
    { name: 'Instagram', phone: '6281234567890', icon: 'https://img.icons8.com/3d-fluency/94/instagram-new.png' },
    { name: 'Live Chat', phone: '6289876543210', icon: 'https://img.icons8.com/3d-fluency/94/chat.png' },
    { name: 'Voice Chat', phone: '6289876543210', icon: 'https://img.icons8.com/3d-fluency/94/chatbot.png' },
    { name: 'Whatsapp', phone: '6289876543210', icon: 'https://img.icons8.com/3d-fluency/94/whatsapp.png' },
];

function App() {
  return (
      <div className="App">
        <FloatingMedia
            agents={agents}
            message="Hello, I need assistance!"
            panelWidth="350px"
            fabColor="primary"
            fabPosition="bottom-left"
        />
      </div>
  );
}

export default App;
