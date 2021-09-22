import React from 'react';
import { useEffect } from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  useEffect(() => {
    document. title = "This is info page title - JoshuaDavidOren"
    }, [])

  return (
    <main className='container'>
      <p>Info Page</p>
    </main>
  );
}

export default InfoPage;
