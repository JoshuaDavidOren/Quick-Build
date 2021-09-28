import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  let user = useSelector((store) => store.user);
  let page = useSelector((store) => store.pageReducer);

  useEffect(() => {
   
  }, []);

  const currentPage = useParams();
  console.log(currentPage);
  return (
    <nav>
      <Link to="/home">
        <h2 className="nav-title">Joshua David Oren</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            
{page === 2 ?
            <Link className="navLinkHere" to="/info">
              Info Page
            </Link>
            :
            <Link className="navLink" to="/info">
            Info Page
          </Link>
}
{page === 1 ?
            <Link className="navLinkHere" to="/user">
              Home
            </Link>
            :
            <Link className="navLink" to="/user">
              Home
            </Link>
}

           

            <LogOutButton className="navLink" />
          </>
        )}

      </div>
    </nav>
  );
}

export default Nav;
