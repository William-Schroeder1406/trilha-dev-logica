
// npm install readline
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(pergunta) {
  return new Promise((resolve, reject) => {
    rl.question(pergunta, resolve);
  });

}
function alert(mensagem) {
  console.log(mensagem);
}


async function executar() {
  let idade = await prompt("Qual é a sua idade?  ");
  alert(`Você tem ${idade} anos!`);

}
await executar();
rl.close();