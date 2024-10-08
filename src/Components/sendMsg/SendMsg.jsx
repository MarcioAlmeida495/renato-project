import React, { useState } from 'react';
import './styles.css'

function WhatsAppButton({ phoneNumber = +5532998147695, defaultMessage = "oi, vi seu número no site xxx, para quando está disponível?" }) {
    const [message, setMessage] = useState(defaultMessage);

    const sendMessage = () => {
        const formattedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div>
            <h2>Enviar mensagem no WhatsApp</h2>
            <textarea 
                className='WATextArea'
                placeholder="Digite sua mensagem..." 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                rows="4" 
                cols="50"
            />
            <br />
            <button onClick={sendMessage}>
                Enviar para WhatsApp
            </button>
        </div>
    );
}

export default WhatsAppButton;
