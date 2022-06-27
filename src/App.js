import "./App.css";
//import Contato from "./Components/Contato";
import React from "react";
const Contato = React.lazy(() => import("./Components/Contato"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Suspense fallback={<div>Loading ...</div>}>
          <Contato />
        </React.Suspense>
      </header>
      <footer>
        2022 Fábrica de Felicidade - O sonho de levar felicidade para as
        empresas. Verdadeira felicidade no trabalho.
      </footer>
    </div>
  );
}

export default App;
