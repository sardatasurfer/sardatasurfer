'use client';

import React from 'react';

// Questo componente funge da barriera Client-Side.
// Riceve il componente MDX importato (Post) e la mappa dei componenti (MDXComponents)
// e li renderizza solo quando il JavaScript è attivo nel browser.

export default function PostClientWrapper({ Post, MDXComponents }) {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Qui avviene la magia: renderizzando il componente Post dentro un componente 'use client',
        proteggiamo il processo di build da errori causati da librerie che non supportano SSR.
      */}
      <Post components={MDXComponents} />
    </div>
  );
}
