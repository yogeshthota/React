import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  console.log("ExpenseItem evaluated by React");
  const [title, setTitle] = useState(props.title);
  const expenseAmount = props.amount;
  const expenseTitle = props.title;
  const expenseDate = props.date;
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title + "clicked!!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
