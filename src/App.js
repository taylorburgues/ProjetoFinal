import './App.css';

import Menu from './components/template/Menu.js';
import Main from './components/template/Main.js';
import Footer from './components/template/Footer.js';
import Logo from './components/template/Logo.js';

function App() {
  return (
    <div className="App">
      <Logo />
      <Menu />

      <Main title="Bem vindo!">

      <div> Cadastro de receitas </div>
      </Main>
      <Footer />
    </div>
  );
}

export default App;


