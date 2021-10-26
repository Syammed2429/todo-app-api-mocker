import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo/Todo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todo />

      </header>
    </div>
  );
}

export default App;
