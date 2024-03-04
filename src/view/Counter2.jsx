import { useState } from "react";

export function Counter() {
  const [customerCount, setCustomerCount] = useState(2);
  return (
    <>
          <h3 className="paragraph">Customers counter: {customerCount}</h3>
          <button className="button" onClick={() => setCustomerCount(customerCount + 1)}>
            add Customer
          </button>
    </>
  );
}

export function Counter2 () {
  const [employeeCount, setEmployeeCount] = useState(2);
  return (
    <>
        <h3 className="paragraph2">Employees counter: {employeeCount}</h3>
        <button className="button" onClick={() => setEmployeeCount(employeeCount + 1)}>
          add Employees
        </button>
    </>
  );
}