class ExpenseView {
  _data
  _parentElement = document.querySelector('.expense-table')
  _errorMessage = "Please fill in all the fields before proceeding"

  render(data) {
    console.log(data);
    if (!data ) {
      return this._renderError();
    }

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    console.log(markup);
    this._parentElement.insertAdjacentHTML('beforeend', markup)
  }

  _clear() {
    this._parentElement.innerHTML='';
    const template = this._generateTemplate();
    this._parentElement.insertAdjacentHTML('beforeend', template)
  }

  _renderError(message = this._errorMessage) {
    alert(message);
  }


  _generateTemplate() {
    return `
    <thead>
      <tr>
        <th>#</th>
        <th>Type</th>
        <th>Name</th>
        <th>Date</th>
        <th>Amount</th>
      </tr>
    </thead>
    `
  }

  _generateMarkup () {
    console.log(this._data);
    return this._data.map ((expense, i) => {
       return `
        <tr>
          <td>${i + 1}</td>
          <td>${expense.type}</td>
          <td>${expense.name}</td>
          <td>${new Intl.DateTimeFormat('en-GB',{day: 'numeric', month: 'short', year: '2-digit'}).format(new Date(expense.date))}</td>
          <td>$${expense.amount}</td>
        </tr>
      `
    }).join('');
  }
}

export default new ExpenseView();
