// данный код необходим для демонстрации работы babel.
// здесь мы используем современный синтаксис, который с помощью babel будет преобразован в es5

async function start() {
  return await Promise.resolve('babel is working');
}

start().then(console.log);
