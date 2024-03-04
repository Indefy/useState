import TopBar from "./TopBar";
import NameInput from "./NameInput";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Counter name={"Book"}/>
      <hr />
      <Counter name={"Customer"}/>
      <Counter name={"Employee"}/>
      <br />
      <hr />
      <NameInput />
    </div>
  );
} 
