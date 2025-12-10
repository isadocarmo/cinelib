import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />

      <main>
        <div className="container">

          <h2 className="title">Filmes Populares:</h2>

          <div className="movies-container">
            aqui vai os cards dos filmes...
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;

