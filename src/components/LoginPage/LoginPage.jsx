import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage() {
  const history = useHistory();

  useEffect(() => {
    document. title = "Login - JoshuaDavidOren"
    }, [])

  return (
    <main>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </main>
  );
}

export default LoginPage;
