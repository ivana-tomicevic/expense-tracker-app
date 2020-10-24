import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import Moment from "react-moment";

export const ExpenseItem = ({
  expense: { id, charge, amount, date },
  handleEdit,
  handleDelete,
}) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <span className="post-date">
        <Moment format="DD/MM/YYYY">{date}</Moment>
      </span>
      <div>
        <button className="clear-btn" onClick={() => handleDelete(id)}>
          <MdDelete />
        </button>
        <button className="edit-btn" onClick={() => handleEdit(id)}>
          <MdEdit />
        </button>
      </div>
    </li>
  );
};
