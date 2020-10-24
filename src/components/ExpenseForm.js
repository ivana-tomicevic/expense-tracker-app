import React from "react";

export const ExpenseForm = ({
  edit,
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label>Expense</label>
          <input
            type="text"
            className="form-control"
            placeholder="Expense"
            value={charge}
            onChange={handleCharge}
          ></input>
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="USD"
            value={amount}
            onChange={handleAmount}
          ></input>
        </div>
      </div>
      <button className="btn" type="submit" onClick={handleSubmit}>
        {edit ? "Edit" : "Add expense"}
      </button>
    </form>
  );
};
