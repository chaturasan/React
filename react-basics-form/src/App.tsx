import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Biryani",
      amount: 10,
      category: "Food",
    },
    {
      id: 2,
      description: "Aloo paratha",
      amount: 7,
      category: "Food",
    },
    {
      id: 3,
      description: "Shirt",
      amount: 12,
      category: "Clothes",
    },
    {
      id: 4,
      description: "Jeans",
      amount: 15,
      category: "Clothes",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          filterByCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        deleteExpense={(id) =>
          setExpenses(visibleExpenses.filter((expense) => expense.id !== id))
        }
      ></ExpenseList>
    </div>
  );
}

export default App;
