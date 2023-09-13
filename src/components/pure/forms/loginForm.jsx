/**
 *  Componente que a contener un formulario para
 * autenticación de usuarios.
 */

import React from "react";

const LoginForm = () => {
  const initialCredentials = [
    {
      user: "",
      password: "",
    },
  ];

  const [credentials, setCredentials] = useState(initialCredentials);
  return <div></div>;
};

export default LoginForm;
