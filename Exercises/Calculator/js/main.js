function createCalculator() {
  return {
    display: document.querySelector('.display'),

    initiate() {
      this.clickButtons();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.result();
        }
      });
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOneNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },

    result() {
      let account = this.display.value;

      try {
        account = eval(account);

        if (!account && account !== 0) {
          alert('Invalid Account!');
          return;
        }

        this.display.value = account;
      } catch (e) {
        alert('Invalid Account!');
        return;
      }
    },

    clickButtons() {
      document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.deleteOneNumber();
        }

        if (el.classList.contains('btn-num')) {
          this.btnForDisplay(el.innerText);
        }

        if (el.classList.contains('btn-eq')) {
          this.result();
        }
      });
    },

    btnForDisplay(value) {
      this.display.value += value;
      this.display.focus();
    },
  };
}

const calculator = createCalculator();
calculator.initiate();
