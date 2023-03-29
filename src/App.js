import './App.css';
import ChessPieces from './components/ChessPieces';
import data from "./helpers/data"

function App() {
  return (
    <>
    <div className="header">
      <h1>Chess Pieces</h1>
    </div>
    <div className="app">
      <div className="main">
        <ChessPieces data={data}/>
      </div>
    </div>
    </>
  );
}

export default App;
