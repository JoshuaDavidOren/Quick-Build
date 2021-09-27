import React from 'react';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    document. title = "This is a title - JoshuaDavidOren";
    dispatch({type: 'INFO_PAGE'});
    }, [])

  return (
    <main className='container'>
      <h1>Profile</h1>
      <section id='user-info'>
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
      </section>
    </main>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
