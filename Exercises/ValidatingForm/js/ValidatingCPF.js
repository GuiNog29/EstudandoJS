// '705.484.450-52' '070.987.720-03'

class ValidatingCPF {
  constructor(cpf) {
    this.cpf = cpf;
  }

  get getCPF() {
    return this.cpf.replace(/\D+/g, '');
  }

  cpfValidate() {
    if (typeof this.getCPF === 'undefined') return false;
    if (this.getCPF.length !== 11) return false;
    if (this.isSequence()) return false;

    const parcialCPF = this.getCPF.slice(0, -2);

    const digit1 = ValidatingCPF.createDigit(parcialCPF);
    const digit2 = ValidatingCPF.createDigit(parcialCPF + digit1);

    const newCPF = parcialCPF + digit1 + digit2;

    return newCPF === this.getCPF;
  }

  static createDigit(parcialCPF) {
    const cpfArray = Array.from(parcialCPF);
    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressive * val;
      regressive--;
      return ac;
    }, 0);

    let digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
  }

  isSequence() {
    const sequence = this.getCPF.charAt(0).repeat(this.getCPF.length);
    return sequence === this.getCPF;
  }
}
