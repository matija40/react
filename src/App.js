import logo from './log.svg';
import './App.css';
import { getCurrentDate, getId } from "./helpers";
import { getRandomColor, getRandomName } from "./random";


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
        <p>Today is {getCurrentDate()}</p>
        <p>Your unique ID is {getId()}</p>
        <p>Boja koju ste dobili je {getRandomColor()}.
          Ime koje ste dobili je {getRandomName()}.
        </p>

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
