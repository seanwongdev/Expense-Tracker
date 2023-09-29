class FormView {
  _parentElement = document.querySelector('.form-input')
  _errorMessage = "Please fill in all the fields before proceeding"

  addHandlerForm(handler) {
    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      handler();
    })
  }

  _clearInput(){
    this._parentElement.reset();
  }

  _renderError(message = this._errorMessage) {
    alert(message);
  }

  getFormValues() {
    const type = this._parentElement.querySelector('.p-type').value
    const name = this._parentElement.querySelector('.p-name').value
    const date = this._parentElement.querySelector('.p-date').value
    const amount = this._parentElement.querySelector('.p-amount').value

    if (!type || !name || !date || !amount) {
      this._renderError();
      return;
    }

    this._clearInput();

    return {
      type,
      name,
      date,
      amount
    }


  }

}
export default new FormView();
