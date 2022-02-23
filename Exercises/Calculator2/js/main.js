function Calculator() {
  this.display = document.querySelector('.display');

  this.initiate = () => {
    this.clickButtons();
    this.pressEnter();
  };

  this.pressEnter = () => {
    this.display.addEventListener('keypress', event => {
      if (event.keyCode === 13) this.result();
    });
  };

  this.clearDisplay = () => {
    this.display.value = '';
  };

  this.deleteOneNumber = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.btnForDisplay = value => {
    this.display.value += value;
    this.display.focus();
  };

  this.result = () => {
    let account = this.display.value;

    try {
      account = eval(account);

      if (!account && account !== 0) {
        alert('Invalid Account');
        return;
      }

      this.display.value = account;
    } catch (e) {
      alert('Invalid Account!');
      return;
    }
  };

  this.clickButtons = () => {
    document.addEventListener('click', event => {
      let el = event.target;

      if (el.classList.contains('btn-clear')) this.clearDisplay();

      if (el.classList.contains('btn-del')) this.deleteOneNumber();

      if (el.classList.contains('btn-eq')) this.result();

      if (el.classList.contains('btn-num')) this.btnForDisplay(el.innerText);
    });
  };
}

const calculator = new Calculator();
calculator.initiate();
