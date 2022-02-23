function clock() {
  const clock = document.querySelector('.clock');
  let seconds = 0;
  let timer;

  document.addEventListener('click', function (event) {
    const el = event.target;

    if (el.classList.contains('initiate')) {
      clock.classList.remove('paused');
      clearInterval(timer);
      initiateClock();
    }

    if (el.classList.contains('pause')) {
      clock.classList.add('paused');
      clearInterval(timer);
    }

    if (el.classList.contains('reset')) {
      clock.classList.remove('paused');
      clearInterval(timer);
      clock.innerHTML = '00:00:00';
      seconds = 0;
    }
  });

  function getTimeFromSeconds(seconds) {
    let date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  }

  function initiateClock() {
    timer = setInterval(function () {
      seconds++;
      clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }
}
clock();
