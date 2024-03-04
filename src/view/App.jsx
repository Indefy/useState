import TopBar from "./TopBar";
import NameInput from "./NameInput";
import Books from "./Books";
import {Counter, Counter2} from "./Counter2";



export default function App() {

  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">{'<<<< Stateful Bookstore >>>>'}</h1>
      <div className="hbox space-between mt20">
      <Books />
      </div>
      <hr />
      <Counter />
      <Counter2 />
      <br />
      <hr />
      <NameInput />
    </div>
  );
}
