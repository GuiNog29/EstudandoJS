import ValidateCPF from './ValidatingCPF';

export default class GenerateCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatCPF(cpf) {
    return (
      cpf.slice(0, 3) +
      '.' +
      cpf.slice(3, 6) +
      '.' +
      cpf.slice(6, 9) +
      '-' +
      cpf.slice(9, 11)
    );
  }

  generateNewCPF() {
    const cpfWithoutDigit = this.rand();
    const digit1 = ValidateCPF.generateDigit(cpfWithoutDigit);
    const digit2 = ValidateCPF.generateDigit(cpfWithoutDigit + digit1);
    const newCPF = cpfWithoutDigit + digit1 + digit2;
    return this.formatCPF(newCPF);
  }
}
