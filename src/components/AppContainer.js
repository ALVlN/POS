import React from 'react';

const AppContainer = props => <div>{props.children}</div>;

const Login = props => {
  return (
    <AppContainer>
      <div>
        <label>Usuário: </label>
        <input type="text" title="apelido ou email do usuário" />
      </div>
      <div>
        <label>Senha: </label>
        <input type="password" title="senha do usuário" />
      </div>
      <div>
        <input type="submit" title="Entrar" />
      </div>
    </AppContainer>
  );
};

export default Login;