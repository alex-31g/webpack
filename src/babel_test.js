// данный код необходим для демонстрации работы babel.
// здесь мы используем современный синтаксис, который с помощью babel будет преобразован в es5

async function start() {
  return await Promise.resolve('babel is working');
}

start().then(console.log);

// для работы с классами необходимо чтоб был подключен plugin-proposal-class-properties плагин
class Util {
  static id = Date.now();
}
console.log('Util.id:', Util.id);
