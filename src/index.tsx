// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import FloatingWhatsApp from './components/FloatingWhatsApp';
//
// interface Agent {
//     name: string;
//     phone: string;
// }
//
// const initFloatingMediaWidget = (
//     containerId: string,
//     options: {
//         agents: Agent[];
//         message: string;
//         panelWidth: string;
//         fabColor: string;
//         fabPosition: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
//     }
// ) => {
//     console.log('Initializing FloatingMediaWidget...');
//     console.log('Container ID:', containerId);
//     console.log('Options:', options);
//
//     const container = document.getElementById(containerId);
//     if (!container) {
//         console.error('Container not found');
//         return;
//     }
//
//     const root = ReactDOM.createRoot(
//         document.getElementById(containerId) as HTMLElement
//     );
//     root.render(
//         <React.StrictMode>
//             <FloatingWhatsApp {...options} />, container
//         </React.StrictMode>
//     );
// };
//
// export default initFloatingMediaWidget;

interface Agent {
    name: string;
    phone: string;
}

class FloatingMediaWidget {
    static initFloatingMediaWidget(containerId: string, options: { agents: Agent[], message: string }) {
        console.log('Initializing FloatingMediaWidget...');
        console.log('Container ID:', containerId);
        console.log('Options:', options);

        // Menambahkan widget ke dalam DOM
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
        <div>
          <h2>Contact Agents</h2>
          ${options.agents.map(agent => `<p>${agent.name}: ${agent.phone}</p>`).join('')}
        </div>
      `;
        }
    }
}

// Mengekspor objek untuk digunakan secara global
export default FloatingMediaWidget;
