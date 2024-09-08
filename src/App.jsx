import { useContext, useEffect } from 'react';
import { CtContext } from './context/Ct';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import './App.css';

const App = () => {
  const [CtState, dispatch] = useContext(CtContext);
  return (
    <div>
      {CtState.Stage === 'First' && <FirstComponent />}
      {CtState.Stage === 'Second' && <SecondComponent />}
      {CtState.Stage === 'Third' && <ThirdComponent />}
    </div>
  );
};

export default App;
