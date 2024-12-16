import React, { useState } from 'react';
import { Fab } from '@mui/material';

interface Agent {
    name: string;
    phone: string;
    icon: string;
}

interface FloatingMediaProps {
    agents: Agent[]; // Daftar agen WhatsApp yang dapat dikustomisasi
    message?: string; // Pesan default yang ingin dikirim
    panelWidth?: string; // Lebar panel yang dapat dikustomisasi
    fabColor?: 'default' | 'primary' | 'secondary'; // Warna FAB
    fabPosition?: 'bottom-right' | 'bottom-left'; // Posisi FAB
}

const FloatingMedia: React.FC<FloatingMediaProps> = ({
    agents,
    message = 'Halo, saya ingin bertanya!',
    panelWidth = '300px',
    fabColor = 'primary',
    fabPosition = 'bottom-right',
}) => {
    const [isPanelVisible, setIsPanelVisible] = useState<boolean>(false);

    const togglePanel = () => {
        setIsPanelVisible((prev) => !prev);
    };

    const openWhatsApp = (phone: string) => {
        const message = 'Halo, saya ingin bertanya!';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="floating-whatsapp-container">
            <div className={`agents-panel ${isPanelVisible ? 'panel-visible' : ''}`}>
                <div className="panel-header">
                    <h4>Media Agents</h4>
                </div>
                <div className="panel-body">
                    {agents.map((agent) => (
                        <div key={agent.phone} className="agent-item" onClick={() => openWhatsApp(agent.phone)}>
                            <div className="agent">
                                <img src={agent.icon} alt={agent.name} />
                                <div>
                                    <span>{agent.name}</span>
                                    <span className="phone">Online</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={`fab-container ${isPanelVisible ? 'shift-left' : ''}`}
                onClick={togglePanel}
            >
                <Fab color="default" sx={{ borderRadius: 1 }} aria-label="WhatsApp">
                    <img src={'https://img.icons8.com/3d-fluency/94/online-support--v3.png'} width={40} alt="WhatsApp Icon" />
                </Fab>
            </div>
        </div>
    );
};

export default FloatingMedia;
