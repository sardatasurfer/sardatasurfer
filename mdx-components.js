
'use client'; // <-- ESSENZIALE per risolvere il TypeError: createContext

import { useMDXComponents } from '@mdx-js/react';
import React from 'react';

// Se stai usando una libreria come Recharts, la importerai qui.
// import ChartWrapper from './ChartWrapper'; 

// Questo componente si occupa di fornire il contesto client-side necessario 
// per la compilazione MDX.
function ClientMDXProvider({ components, children }) {
  // Se devi definire componenti custom per i tag standard, li passi qui:
  const allComponents = {
    // Esempio: personalizzare l'H1
    h1: (props) => <h1 className="text-4xl font-extrabold text-cyan-500 my-6" {...props} />,
    // Esempio: usare il wrapper grafico (se necessario)
    // Chart: ChartWrapper,
    ...components,
  };

  const Component = React.Fragment;

  return (
    <Component>
        {children}
    </Component>
  );
}


// Usa la funzione useMDXComponents fornita da next/mdx
export function useMDXClientComponents(components) {
  const allComponents = useMDXComponents(components);
  return allComponents;
}


// Questo wrapper assicura che il provider MDX sia gestito sul client.
export default function MDXComponents(props) {
    return <ClientMDXProvider {...props} />;
}
