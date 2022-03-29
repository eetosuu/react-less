import logo from './logo.svg';
import './App.scss';
import Message from "./Message";

const currentName = 'Nikita';

function App(props) {
  return (

    <div className="App">
      <header className="App-header">
          <Message name={currentName}/>
      </header>
    </div>
  );
}

export default App;
