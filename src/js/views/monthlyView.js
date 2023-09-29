class MonthlyView {
  _parentElement = document.querySelector('.monthly');
  _refreshElement = document.querySelector('.refresh');

  display(data) {
    this._parentElement.innerText = `$${data}`
  }

  addHandlerRefresh(handler) {
    this._refreshElement.addEventListener('click',function () {
      location.reload();
      handler();
    })
  }


}
export default new MonthlyView();
