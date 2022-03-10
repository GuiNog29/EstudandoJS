class ValidationForm {
  constructor() {
    this.form = document.querySelector('.form');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.validFields();
    const validPassword = this.validPassword();

    if(validFields && validPassword){
      alert('Form sent.')
      this.form.submit();
    }
  }

  validPassword() {
    let valid = true;

    const password = this.form.querySelector('.password');
    const repeatPassword = this.form.querySelector('.repeat-password');

    if (password.value !== repeatPassword.value) {
      this.createError(password, 'Password and Repeat Passwor need to be same');
      this.createError(
        repeatPassword,
        'Password and Repeat Passwor need to be same'
      );
      return false;
    }

    if (
      password.value.length < 6 ||
      password.value.length > 12 ||
      repeatPassword.value.length < 6 ||
      repeatPassword.value.length > 12
    ) {
      this.createError(password, 'Password must be between 6 and characters');
      this.createError(
        repeatPassword,
        'Repeat password must be between 6 and characters'
      );
      return false;
    }
    return valid;
  }

  validFields() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll('.validate')) {
      let label = field.previousElementSibling.innerHTML;

      if (!field.value) {
        this.createError(field, `"${label}" field  cannot be empty`);
        valid = false;
      }

      if (field.classList.contains('cpf')) {
        if (!this.validCPF(field)) valid = false;
      }

      if (field.classList.contains('user')) {
        if (!this.validUser(field)) valid = false;
      }
    }

    return valid;
  }

  validUser(field) {
    const user = field.value;
    let valid = true;

    if (user.length < 3 || !user.length > 12) {
      this.createError(field, 'User must be between 3 and 12 characters');
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, 'User can only contain letter and/or numbers');
      valid = false;
    }

    return valid;
  }

  validCPF(field) {
    const cpf = new ValidatingCPF(field.value);

    if (!cpf.cpfValidate()) {
      this.createError(field, 'Invalid CPF');
      return false;
    }

    return true;
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.innerText = msg;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
  }
}

const validate = new ValidationForm();
