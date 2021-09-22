import React from 'react';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  useEffect(() => {
    document. title = "This is a title - JoshuaDavidOren"
    }, [])

  return (
    <main className='container'>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
    </main>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
