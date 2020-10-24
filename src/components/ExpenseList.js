import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList = ({
  expenses,
  handleEdit,
  handleDelete,
  clearExpenses,
}) => {
  return (
    <div >
      <ul className="list">
        {expenses.map((expense) => (
          <li>
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </li>
        ))}
        {expenses.length > 0 && (
          <button className="btn-item" onClick={() => clearExpenses()} >
            Clear expenses
          </button>
        )}
      </ul>
    </div>


  );
};
