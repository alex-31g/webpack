# WEBPACK

------------

Создаем *package.json*:  
`npm init -y` 

------------

Устанавливаем плагины с флагом -D, которые необходимы только на этапе разработки (плагин будет отображается в "devDependencies" файла package.json):   

`npm i -D webpack webpack-cli webpack-dev-server path html-webpack-plugin clean-webpack-plugin css-loader style-loader file-loader csv-loader papaparse`

Используемые плагины для разработки:
- **webpack** - непосредственно webpack
- **webpack-cli** - консольные команды для работы с webpack
- **webpack-dev-server** - локальный сервер с livereload - живая перезагрузка браузера, собирает проект в памяти, не создавая билд-файлов, за счёт чего имеет высокую скорость сборки в режиме разработки 
- **path** - для работы с путями (подключить в webpack.config.js)
- **html-webpack-plugin** - позволяет взаимодействовать с index.html – во время сборки автоматически подключает все скрипты в index.html и добавляет index.html в папку сборки (подключить в webpack.config.js)
- **clean-webpack-plugin** – очищает папку сборки перед новой сборкой (подключить в webpack.config.js)
- **papaparse** - для работы *csv-loader* необходимо дополнительно установить *papaparse*, который парсит *csv* в *js*

Используемые загрузчики (loaders) для разработки:
- **css-loader** - позволяет webpack понимать импорты css внутри css и js файлов
- **style-loader** - добавляет стили в секцию <head> в html
- **file-loader** - позволяет работать с файлами
- **xml-loader** - позволяет работать с xml
- **csv-loader** - позволяет работать с csv
------------

Устанавливаем плагины, которые необходимы для работы продукта (плагин будет отображается в "dependencies" файла package.json):

`npm i normalize.css`

Используемые плагины:
- **normalize.css** - современная альтернатива css-reset

------------

В *package.json*, в разделе "scripts" прописываем команды:
- *npm run dev* – для сборки проекта в режиме development (все js-файлы сбилжены в несжатом виде, после внесения изменений - нужно заново выполнять npm run dev) 
- *npm run watch* – для сборки проекта в режиме development (все js-файлы сбилжены в несжатом виде, после внесения изменений - происходит слежение за обновлениями, поэтому не нужно заново выполнять npm run watch, а достаточно обновить страницу) 
- *npm run start* – для запуска webpack-dev-server в режиме разработки (сбилженные файлы не существуют - они хранятся в оперативной памяти + работает livereload)
- *npm run build* – для сборки проекта в режиме production (все js-файлы сбилжены в единый файл)

```json
	"scripts": {
    "dev": "webpack --mode development",
    "watch": "webpack --mode development --watch",
		"start": "webpack-dev-server --mode development --open",
		"build": "webpack --mode production"
  },
```

------------

В корне проекта создаем конфигурационный файл *webpack.config.js*
