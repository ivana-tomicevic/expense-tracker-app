import React, { useState, useEffect } from "react";
import "./App.css";
import uuid from "uuid/v4";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { Alert } from "./components/Alert";
import { InputBudget } from "./components/InputBudget";


const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  //expenses
  const [expenses, setExpenses] = useState(initialExpenses);
  // add charge
  const [charge, setCharge] = useState("");
  //add amount
  const [amount, setAmount] = useState("");
  //edit
  const [edit, setEdit] = useState(false);
  //id
  const [id, setId] = useState(0);
  // alert
  const [alert, setAlert] = useState({ show: false });
  // add income
  const [income, setIncome] = useState("");
  //budget
  const [addBudget, setBudget] = useState(0);



  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  



  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    let amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };

  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
  };

  const clearExpenses = () => {
    setExpenses([]);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, text, type });
    setTimeout(() => {
      setAlert({ show: false });
    }, 1000);
  };

  const handleIncome = (e) => {
    let income = e.target.value;
    income === "" ? setIncome(income) : setIncome(parseInt(income));
  };

  const submitBudget = (e) => {
    e.preventDefault();

    const addedBudget = () => {
      return parseInt(income);
    };
    income !== "" && income > 0 ? setBudget(addedBudget) : 
     handleAlert({ type: 'danger', text: 'amount value has to be bigger than zero' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({ type: "danger", text: `charge can't be empty value and amount value has to be bigger than zero` });
    }
  };

  let totalExpenses = expenses.reduce((acc, curr) => (acc += curr.amount), 0);

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budget calculator</h1>
      <div className="content">
        <div className="Income">
          <InputBudget handleIncome={handleIncome} submitBudget={submitBudget} />
        </div></div>
      <div className="content">
        <div className="balance">
          <h1 className="icon">
            Budget
          <span className="total">$ {addBudget}</span>{" "}
          </h1>
          <h1 className="icon">
            Expenses
          <span className="spending">$ {-totalExpenses}</span>
          </h1>
          <h1 className="icon">
            Balance
          <span className="balance-icon">$ {addBudget - totalExpenses}</span>
          </h1>
        </div>
      </div>
      <div className="content">
        <div className="Income">
          <ExpenseForm
            edit={edit}
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className="content">
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearExpenses={clearExpenses}
        />
      </div>
    </>
  );

}

export default App;
