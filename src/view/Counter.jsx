import { useState } from "react";

export default function Counter({name}) {
  const [count, setCount] = useState(2);

  return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">{name} counter: {count}</h3>
        <button className="button" onClick={() => setCount(count + 1)}>
          add {name}
        </button>
      </div>
  );
}
