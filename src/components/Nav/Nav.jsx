import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  let user = useSelector((store) => store.user);
  let page = useSelector((store) => store.page);

  useEffect(() => {
   
  }, []);

  const currentPage = useParams();
  console.log(currentPage);
  return (
    <nav>
      <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
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
            <Link className="navLinkHere" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

      </div>
    </nav>
  );
}

export default Nav;
