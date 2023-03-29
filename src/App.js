import './App.css';
import ChessPieces from './components/ChessPieces';

function App() {
  return (
    <>
    <div className="header">
      <h1>Chess Pieces</h1>
    </div>
    <div className="app">
      <div className="main">
        <ChessPieces/>
      </div>
    </div>
    </>
  );
}

export default App;
