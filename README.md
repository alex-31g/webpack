# WEBPACK

Создаем *package.json*:  
`npm init -y` 

Устанавливаем плагины для разработки:   
`npm i -D webpack webpack-cli webpack-dev-server path html-webpack-plugin clean-webpack-plugin`

Используемые плагины для разработки:
- **webpack** - непосредственно webpack
- **webpack-cli** - консольные команды для работы с webpack
- **webpack-dev-server** - локальный сервер с livereload - живая перезагрузка браузера, собирает проект в памяти, не создавая билд-файлов, за счёт чего имеет высокую сборки в режиме разработки 
- **path** - для работы с путями (подключить в webpack.config.js)
- **html-webpack-plugin** - позволяет взаимодействовать с index.html – во время сборки автоматически подключает все скрипты в index.html и добавляет index.html в папку сборки (подключить в webpack.config.js)
- **clean-webpack-plugin** – очищает папку сборки перед новой сборкой (подключить в webpack.config.js)

В *package.json*, разделе "scripts" прописываем команды:
- npm run dev – для запуска dev сервера в режиме разработки
- npm run build – для сборки проекта

```json
      "scripts": {
        "dev": "webpack-dev-server --open --mode development",
        "build": "webpack --mode production"
      },
```

В корне проекта создаем конфигурационный файл *webpack.config.js*
