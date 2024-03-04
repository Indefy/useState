import { useState } from "react";

export default function Books() {
    const [booksCount, setBooksCount] = useState(2);
  
    return (
      <>
        <h3 className="paragraph">Book counter: {booksCount}</h3>
        <button className="button" onClick={() => setBooksCount(booksCount + 1)}>
          add Book
        </button>
      </>
    );
  }