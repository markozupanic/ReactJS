import logo from './logo.svg';
import './App.scss';

import MainLayout from './layouts/MainLayout';
import MojePrijave from './pages/MojePrijave';
import NovaPrijava from './components/NovaPrijava/indeks';
import Postavke from './components/Postavke/indeks';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Postavke/>
      </MainLayout>
    </div>
  );
}

export default App;
