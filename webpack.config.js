// модуль path - для работы с путями
const path = require('path');

// html-webpack-plugin подключаем в поле plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // context - указывает где лежат все исходники приложения
  context: path.resolve(__dirname, 'src'),

  // mode: 'development', // в каком режиме делать сборку проекта

  // входной файл приложения
  entry: {
    main: './index.js',
  },

  // https://webpack.js.org/configuration/output/
  // output - сообщает webpack, где и как хранить собранные файлы
  output: {
    // filename - в какой файл собираем проект.
    // Здесь происходит считывание всех полей из entry и их сборка.
    // Паттерн [name] учавствует в создании имени файла -
    // он динамически указывает на поле внутри entry, то-есть:
    // поле main + .bundle.js --> получаем файл main.bundle.js

    // filename: '[name].bundle.js',

    // Паттерн [contenthash] - динамически добавляет хэш файла к названию,
    // таким образом мы всегда делаем пересборку в случаи изменения данных в файле
    filename: '[name].[contenthash].js',

    // path - путь к директории, где будет храниться собранный проект
    // path.resolve() - принимает составные части путей и возвращает абсолютный путь
    // __dirname - это абсолютный путь к директории данного файла
    path: path.resolve(__dirname, './dist'),

    // publicPath - используется для обновления URL внутри CSS и HTML файлов во время генерации production-сборки
    publicPath: 'dist',
  },

  // plugins - содержит список всех плагинов
  plugins: [
    new HTMLWebpackPlugin({
      // Значение для тега <title> index.html страницы - он работает только в случаи отсутствия поля template
      // Так как у нас есть поле template, то поле title не будет работать
      title: 'webpack 7',
      // Указываем путь к index.html
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],

  // настройка devServer
  devServer: {
    // вывод ошибок не в консоли, а на экране
    overlay: true,
  },
};
