import View from './View.js'

class FormView extends View {
  _parentElement = document.querySelector('.form-input')


  addHandlerForm(handler) {
    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      handler();
    })
  }

  _clearInput(){
    this._parentElement.reset();
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
