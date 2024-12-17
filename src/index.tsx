import React from 'react';
import ReactDOM from 'react-dom/client';
import FloatingWhatsApp from './components/FloatingWhatsApp';

interface Agent {
    name: string;
    phone: string;
}

const initFloatingMediaWidget = (
    containerId: string,
    options: {
        agents: Agent[];
        message: string;
        panelWidth: string;
        fabColor: string;
        fabPosition: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    }
) => {
    console.log('Initializing FloatingMediaWidget...');
    console.log('Container ID:', containerId);
    console.log('Options:', options);

    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found');
        return;
    }

    const root = ReactDOM.createRoot(
        document.getElementById(containerId) as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <FloatingWhatsApp {...options} />, container
        </React.StrictMode>
    );
};

export default initFloatingMediaWidget;
