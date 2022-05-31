import React from 'react';
import Link from 'next/link'

const Login = props => {
  return (
    <div>
      <div>
        <label>Usuário: </label>
        <input type="text" title="apelido ou email do usuário" />
      </div>
      <div>
        <label>Senha: </label>
        <input type="password" title="senha do usuário" />
      </div>
      <div>
      <Link href='/logout'><button>ENTRAR</button></Link>
      </div>
    </div>
  );
};

export default Login;