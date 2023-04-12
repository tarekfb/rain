import logo from './logo.svg';
import './App.css';
import { BsCloudRainHeavy } from 'react-icons/bs'

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen">
        <h1 className='text-x'>Rain?</h1>
        <BsCloudRainHeavy size={140} className='' alt="rain"  />
        <p className="text-3xl font-bold underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
