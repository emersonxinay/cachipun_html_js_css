const choices = ['piedra', 'papel', 'tijera'];

const buttons = document.querySelectorAll('.choice');
const result = document.getElementById('result');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const gameResult = getResult(userChoice, computerChoice);
    result.textContent = `Tu elección: ${userChoice} | Elección de la computadora: ${computerChoice} | Resultado: ${gameResult}`;
  });
});

function getResult(user, computer) {
  if (user === computer) {
    return 'Empate';
  } else if ((user === 'piedra' && computer === 'tijera') || (user === 'papel' && computer === 'piedra') || (user === 'tijera' && computer === 'papel')) {
    return '¡Ganaste!';
  } else {
    return 'Perdiste';
  }
}
