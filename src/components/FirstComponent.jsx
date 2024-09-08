import { useContext } from 'react';
import { CtContext } from '../context/Ct';

const FirstComponent = () => {
  const [CtState, dispatch] = useContext(CtContext);
  const nome = 'Thiago';
  const sobrenome = 'Silva Azevedo';
  const matrícula = 2324290054;
  const professor = 'Felipe Batista';
  const disciplina = 'Constução de Frontend';

  return (
    <div>
      <h1>Bem-vindo</h1>
      <h2>
        Nome: {nome} {sobrenome}, Ra: {matrícula} <br /> Professor: {professor},
        Disciplina: {disciplina}
      </h2>

      <button onClick={() => dispatch({ type: 'CHANGE_STAGE' })}>Lista!</button>
    </div>
  );
};

export default FirstComponent;
