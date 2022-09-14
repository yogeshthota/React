import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  //setting the state
  const [filteredYear, setFilteredYear] = useState("2020");
  //const [expenseItems, setExpenseItems] = useState(props.items);
  const filterChangeHandler = (selectedYear) => {
    console.log("in setYearInState 0");
    setFilteredYear(selectedYear);
    console.log("year in setYearInState1:" + selectedYear);
    console.log("year in setYearInState2:" + filteredYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;
  if(filteredExpenses.length > 0 ){
    expensesContent = filteredExpenses.map((expense) => {
      console.log("expenseItems year:" + expense.date.getFullYear());
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
        {console.log(
          "Data From Expenses:" + JSON.stringify(props.items, null, 4)
        )}
      </Card>
    </div>
  );
}

export default Expenses;
