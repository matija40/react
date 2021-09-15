import logo from './log.svg';
import './App.css';
import * as dayjs from "dayjs";
import { nanoid } from 'nanoid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pozdrav</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <p>Ovo je React aplikacija koja prikazuje trenutni datum i ID korisnika.</p>
        <p>Today is {dayjs().format('MMMM DD, YYYY HH:mm:ss')}</p>
        <p>Your unique ID is {nanoid(8)}</p>

        <a
          className="App-link"
          href="https://moj-posao.hr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
