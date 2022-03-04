// '705.484.450-52' '070.987.720-03'

function ValidateCPF(cpf) {
  Object.defineProperty(this, 'cleanCPF', {
    get: function () {
      return cpf.replace(/\D+/g, '');
    },
  });
}

ValidateCPF.prototype.validate = function () {
  if (typeof this.cleanCPF === 'undefined') return false;
  if (this.cleanCPF.length !== 11) return false;
  if (this.isSequence()) return false;

  const parcialCPF = this.cleanCPF.slice(0, -2);

  const digit1 = this.createDigit(parcialCPF);
  const digit2 = this.createDigit(parcialCPF + digit1);

  const newCPF = parcialCPF + digit1 + digit2;

  return newCPF === this.cleanCPF;
};

ValidateCPF.prototype.createDigit = function (parcialCPF) {
  const cpfArray = Array.from(parcialCPF);
  let regressive = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += regressive * val;
    regressive--;
    return ac;
  }, 0);

  let digit = 11 - (total % 11);
  return digit > 9 ? '0' : String(digit);
};

ValidateCPF.prototype.isSequence = function () {
  const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
  return sequence === this.cleanCPF;
};

const cpf = new ValidateCPF('705.484.450-52');

if (cpf.validate()) console.log('CPF Válido');
else console.log('CPF Inválido');
