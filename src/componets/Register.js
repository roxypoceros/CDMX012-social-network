export const Registrar = () => {
    const RegisterDiv = document.createElement('div');
    const nodoh2 = document.createElement('h2');
    const buttonRegister = document.createElement('button');
    buttonRegister.textContent = 'Registrate';
    nodoh2.textContent = 'Ingresa tu correo';
    RegisterDiv.append(nodoh2, buttonRegister);
    return RegisterDiv;
  };