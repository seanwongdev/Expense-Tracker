export const state = {
  expenses: [],
}

const persistExpenses = function () {
  localStorage.setItem('expenses',JSON.stringify(state.expenses))
}

export const addExpenses = function ({type, name, date, amount}) {
  state.expenses.push({
    type,
    name,
    date,
    amount
  })

  persistExpenses();
}





const init = function() {
  const storage = localStorage.getItem('expenses')
  if (storage) state.expenses = JSON.parse(storage);
}

init();


export const monthlySummation = function () {
  const sum = state.expenses.reduce((acc, cur) => {
    return acc + (+cur.amount);
  } ,0);

  return sum;
}



export const clearExpenses = function () {
  localStorage.clear('expenses');
}
