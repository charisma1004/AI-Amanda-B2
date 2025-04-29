// src/components/Chatbot.js
import React from 'react';

const Chat = () => {
    return (
        <div style={{ position: 'absolute', bottom: '0px', right: '20px', width: '400px', height: '500px', zIndex: '1000' }}>
            <iframe
                src="https://www.chatbase.co/chatbot-iframe/cgwZY9BIvUQWivQsPUECX"
                title="Chatbot"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
        </div>
    );
};

export default Chat;