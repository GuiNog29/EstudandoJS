import GenerateCPF from './modules/GenerateCPF';
import './assets/css/style.css';

(function () {
  const generate = new GenerateCPF();
  const generatedCPF = document.querySelector('.generated-cpf');

  generatedCPF.innerHTML = generate.generateNewCPF();
})();
