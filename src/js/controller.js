import "bootstrap/dist/css/bootstrap.css";
import "core-js/stable";
import "regenerator-runtime";

import * as model from "./model.js"
import formView from "./views/formView.js";
import expenseView from "./views/expenseView.js";
import monthlyView  from "./views/monthlyView.js";

const controlExpenses = function () {
  // retrieve values from form
  const expense = formView.getFormValues();
  console.log(expense);

  // add expenses into database
  model.addExpenses(expense);
  console.log(model.state.expenses)
  // render expenses in table
  expenseView.render(model.state.expenses);
  showMonthly();
}

const controlInitial = function() {
  expenseView.render(model.state.expenses);
  showMonthly();
}

const showMonthly = function () {
  const sum = model.monthlySummation();
  console.log(sum);
  monthlyView.display(sum)

}

const controlRefresh = function () {
  console.log('clicked')
  model.clearExpenses();
}

const init = function () {

  controlInitial();
  formView.addHandlerForm(controlExpenses)
  monthlyView.addHandlerRefresh(controlRefresh)
}

init();
