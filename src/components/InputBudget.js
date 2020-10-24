import React from "react";

export const InputBudget = ({ income, submitBudget, handleIncome }) => {

return (
    <form onSubmit={submitBudget}>
      <div className="form-center">
        <div className="form-group">
          <label>Income</label>
          <input
            type="number"
            value={income}
            onChange={handleIncome}
            placeholder="USD"
            className="budget-input"
          ></input>
        </div>
        <button onClick={submitBudget} type="submit" className="btn">
          Submit
      </button>
      </div>
    </form>
  );
};
