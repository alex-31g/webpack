// модуль path - для работы с путями
const path = require('path');

// webpack плагины необходимо также подключить в поле plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// считываем системную переменную NODE_ENV, которая говорит в каком режиме мы находимся - разработка или продакшин
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  // context - настройка, которая указывает в какой директории лежат все исходники приложения
  // path.resolve() - принимает составные части путей и возвращает абсолютный путь
  // __dirname - это абсолютный путь к директории данного файла
  context: path.resolve(__dirname, 'src'),

  // entry - настройка, которая указывает файл для входа в приложение
  // index.js - файл входа в приложение
  // @babel/polyfill - полифил для преобразования кода, который говорит, что при сборке index.js нужно использовать данный полифилл
  entry: {
    main: ['@babel/polyfill', './index.js'],
  },

  // https://webpack.js.org/configuration/output/
  // output - настройка, которая указывает где и как хранить собранные файлы
  output: {
    // filename - в какой файл собираем проект.
    // Здесь происходит считывание всех полей из поля entry и их сборка.

    // Паттерн [name] учавствует в создании имени файла - он динамически указывает на поля внутри entry, то-есть:
    // поле main + .bundle.js --> получаем файл main.bundle.js
    // filename: '[name].bundle.js',

    // Паттерн [contenthash] - динамически добавляет хэш файла к названию,
    // таким образом мы всегда имеем уникальное имя файла, в случаи изменения данных в файле
    filename: '[name].[contenthash].js',

    // path - путь к директории, где будет храниться собранный проект
    path: path.resolve(__dirname, './dist'),
  },

  // resolve - настройка, которая облегчает работу с импортом файлов
  resolve: {
    // extensions - указывает, какие расширения необходимо понимать по умолчанию при импорте файлов
    extensions: ['.js', '.json', '.png'],
    // alias - позволяет создавать алиасы для длинных путей, чтобы при импорте было удобнее
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },

  // optimization - настройка, которая позволяет оптимизировать финальный бандл.
  // Например, если мы подключаем одну и ту же библиотеку в трёх разных файлах, то по умолчанию в бандле мы получим код данной библиотеки, продублированный трижды, что замедлит работу приложения.
  // optimization позволяет избавиться от подобного дублирования и в бандле будет только библиотека в одном экземпляре.
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  // plugins - содержит список подключаемых плагинов
  plugins: [
    new HTMLWebpackPlugin({
      // Значение для тега <title> в index.html - свойство работает только в случаи отсутствия поля template
      // Так как у нас есть поле template, то поле title не сработает
      title: 'webpack 7',
      // Указываем путь к index.html
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          // // from - откуда копируем
          from: path.resolve(__dirname, 'src/assets/favicon.ico'),
          // // to - куда копируем
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],

  // module - настройка, которая позволяет описывать то, как webpack должен работать с подключаемыми модулями.
  // По умолчанию webpack способен работать только js-файлами.
  // Но с помощью лоадеров webpack способен работать и с другими типами файлов.
  module: {
    rules: [
      // каждый объект описывает определенный тип лоадера
      {
        // ключ test - регулярное выражение, которое говорит, что если расширения файлов, которые webpack встречает в качестве импортов,
        // соответствуют данной регулярке, то webpack должен использовать проганять найденные файлы через лоадеры, описанные в свойстве use
        test: /\.css$/,
        // webpack считывает лоадеры справа-налево, первым считывает css-loader
        // css-loader - позволяет webpack понимать импорты css внутри css и js файлов
        // style-loader - добавляет стили в секцию head в html
        use: ['style-loader', 'css-loader'],
      },
      {
        // в регулярке указано - sass или scss
        test: /\.s[ac]ss$/,
        // sass-loader - позволяет преобразовывать sass или scss в css
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        // file-loader - позволяет работать с файлами
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.xml/,
        use: ['xml-loader'],
      },
      {
        test: /\.csv/,
        use: ['csv-loader'],
      },

      // настройка BABEL + ESLint
      {
        test: /\.js$/,
        // exclude - говорит, что не нужно входить в папку node_modules, так как библиотеки не нужно транспайлить с помощью babel
        exclude: /node_modules/,
        // файлы, которые соответствуют регулярке test, проганяем через лоадеры
        use: [
          {
            loader: 'babel-loader',
            // добавляем дополнительные опции при работе с лоадером
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },

      // настройка TYPESCRIPT
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },

  // devServer - настройка webpack-dev-server
  devServer: {
    // по умолчанию webpack-dev-server запускает приложение на порту 8080.
    // с помощью свойства port можно изменить это значение
    port: 4200,
    // overlay - вывод ошибок не в консоль, а на экран
    overlay: true,
  },

  // https://webpack.js.org/configuration/devtool/
  // devtool - настройка, которая позволяет добавлять карты кода - это специальные файлы, внутри которых сохранена структура кода до его минификации. Таким образом, если открыть в браузере вкладку Source, то в поле webpack:// мы найдем реальную структуру проекта, которую можно использовать для отладки
  devtool: isDev ? 'source-map' : '',
};
