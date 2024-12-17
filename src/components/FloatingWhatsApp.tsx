import React, {useState} from 'react';

// Tipe untuk agen WhatsApp
interface Agent {
    name: string;
    phone: string;
}

interface FloatingWhatsAppProps {
    agents: Agent[];
    message: string;
    panelWidth: string;
    fabColor: string;
    fabPosition: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
                                                               agents,
                                                               message,
                                                               panelWidth,
                                                               fabColor,
                                                               fabPosition,
                                                           }) => {
    const [isPanelOpen, setPanelOpen] = useState(false);

    const handleTogglePanel = () => {
        setPanelOpen(!isPanelOpen);
    };

    return (
        <div
            className={`floating-whatsapp-widget ${fabPosition}`}
            style={{ position: 'fixed', [fabPosition]: '20px', bottom: '20px' }}
        >
            <div
                className={`fab ${fabColor}`}
                onClick={handleTogglePanel}
                style={{
                    position: 'absolute',
                    zIndex: 10,
                    backgroundColor: fabColor === 'primary' ? '#25D366' : '#128C7E',
                    borderRadius: '50%',
                    padding: '10px',
                    cursor: 'pointer',
                }}
            >
                <img src={'https://img.icons8.com/3d-fluency/94/online-support--v3.png'} width={40}
                     alt="WhatsApp Icon"/>
            </div>

            {isPanelOpen && (
                <div
                    className="whatsapp-panel"
                    style={{
                        position: 'absolute',
                        bottom: '80px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: panelWidth,
                        background: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '10px',
                        zIndex: 9,
                    }}
                >
                    <h4>Contact Our Agents</h4>
                    {agents.map((agent, index) => (
                        <div key={index}>
                            <p>{agent.name}</p>
                            <a
                                href={`https://wa.me/${agent.phone}?text=${encodeURIComponent(message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#25D366' }}
                            >
                                Chat Now
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FloatingWhatsApp;
