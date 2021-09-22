import React from 'react';
import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  useEffect(() => {
    document. title = "Register - JoshuaDavidOren"
    }, [])

  return (
    <main>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </main>
  );
}

export default RegisterPage;
