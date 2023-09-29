export default class View {
  _errorMessage = "Please fill in all the fields before proceeding"

  _renderError(message = this._errorMessage) {
    alert(message);
  }
}
