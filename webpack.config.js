// модуль path - для работы с путями
const path = require('path');

module.exports = {
  // mode: 'development', // в каком режиме делать сборку проекта

  // входной файл приложения
  entry: './src/index.js',

  // output - сообщает webpack, где и как хранить собранные файлы
  output: {
    // filename - в какой файл собираем проект
    filename: 'bundle.js',

    // path - путь к директории, где будет храниться собранный проект
    // path.resolve() - принимает составные части путей и возвращает абсолютный путь
    // __dirname - это абсолютный путь к директории данного файла
    path: path.resolve(__dirname, './dist'),

    // publicPath - используется для обновления URL внутри CSS и HTML файлов во время генерации production-сборки
    publicPath: 'dist',
  },

  // module - настройка узловых модулей - помогают работать с файлами разных типов в совместимых с браузерами форматах – JS, CSS и т. д.
  module: {
    rules: [
      {
        test: /\.js$/,
        // указываем, что используем babel-loader для конвертации JS-файла с ES6 в ES5
        loader: 'babel-loader',
        exlude: 'node_modules/',
      },
    ],
  },

  // настройка devServer
  devServer: {
    // вывод ошибок не в консоли, а на экране
    overlay: true,
  },
};
