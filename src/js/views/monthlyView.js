class MonthlyView {
  _parentElement = document.querySelector('.monthly')

  display(data) {
    this._parentElement.innerText = `$${data}`
  }

}
export default new MonthlyView();
