# WEBPACK

Создаем *package.json*:  
`npm init -y` 

------------

Устанавливаем плагины для разработки с флагом -D:   
`npm i -D webpack webpack-cli webpack-dev-server path html-webpack-plugin clean-webpack-plugin css-loader style-loader file-loader`

Используемые плагины для разработки:
- **webpack** - непосредственно webpack
- **webpack-cli** - консольные команды для работы с webpack
- **webpack-dev-server** - локальный сервер с livereload - живая перезагрузка браузера, собирает проект в памяти, не создавая билд-файлов, за счёт чего имеет высокую скорость сборки в режиме разработки 
- **path** - для работы с путями (подключить в webpack.config.js)
- **html-webpack-plugin** - позволяет взаимодействовать с index.html – во время сборки автоматически подключает все скрипты в index.html и добавляет index.html в папку сборки (подключить в webpack.config.js)
- **clean-webpack-plugin** – очищает папку сборки перед новой сборкой (подключить в webpack.config.js)

Используемые загрузчики (loaders) для разработки:
- **css-loader** - позволяет webpack понимать импорты css внутри css и js файлов
- **style-loader** - добавляет стили в секцию <head> в html
- **file-loader** - позволяет работать с файлами

------------

Устанавливаем библиотеки:

`npm i normalize.css`

Используемые библиотеки:
- **normalize.css** - современная альтернатива css-reset

------------

В *package.json*, разделе "scripts" прописываем команды:
- npm run dev – для запуска dev сервера в режиме разработки
- npm run build – для сборки проекта

```json
      "scripts": {
        "dev": "webpack-dev-server --open --mode development",
        "build": "webpack --mode production"
      },
```

------------

В корне проекта создаем конфигурационный файл *webpack.config.js*
