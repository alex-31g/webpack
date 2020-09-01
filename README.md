# WEBPACK

------------

Доступные webpack плагины:
https://webpack.js.org/plugins/

Доступные webpack загрузчики:
https://webpack.js.org/loaders/

------------

Создаем *package.json*:  
`npm init -y` 

------------

Устанавливаем плагины с флагом -D, которые необходимы только на этапе разработки (плагин будет отображается в "devDependencies" файла package.json):   

`npm i -D webpack webpack-cli webpack-dev-server path html-webpack-plugin clean-webpack-plugin css-loader style-loader file-loader csv-loader papaparse copy-webpack-plugin node-sass sass-loader`

Используемые плагины для разработки:
- **webpack** - непосредственно webpack
- **webpack-cli** - консольные команды для работы с webpack
- **webpack-dev-server** - локальный сервер с livereload - живая перезагрузка браузера, собирает проект в памяти, не создавая билд-файлов, за счёт чего имеет высокую скорость сборки в режиме разработки 
- **path** - node.js-плагин для работы с путями (подключить в webpack.config.js)
- **html-webpack-plugin** - позволяет взаимодействовать с index.html – во время сборки автоматически подключает все скрипты в index.html и добавляет index.html в папку сборки (подключить в webpack.config.js)
- **clean-webpack-plugin** – очищает папку сборки перед новой сборкой (подключить в webpack.config.js)
- **papaparse** - для работы *csv-loader* необходимо дополнительно установить *papaparse*, который парсит *csv* в *js*
- **copy-webpack-plugin** - позволяет переносить статические файлы из одного места в другое (подключить в webpack.config.js)
- **node-sass** - содержит функционал препроцессора sass и scss (для его работы необходимо дополнительно установить *sass-loader*)

Используемые загрузчики (loaders) для разработки:
- **css-loader** - позволяет webpack понимать импорты css внутри css и js файлов
- **style-loader** - добавляет стили в секцию <head> в html в режиме разработки
- **file-loader** - позволяет работать с файлами
- **xml-loader** - позволяет работать с xml
- **csv-loader** - позволяет работать с csv (зависим от papaparse плагина)
- **sass-loader** - позволяет преобразовывать sass или scss в css (зависим от node-sass плагина)

------------

### Babel 

Babel - это транспайлер, который переписывает код современного стандарта на код стандарта ES5, делая код понятным для всех браузеров

Установка:

`npm i -D @babel/core babel-loader @babel/preset-env @babel/polyfill @babel/plugin-proposal-class-properties @babel/preset-typescript`

- **@babel/core** - непосредственно babel
- **babel-loader** - загрузчик, который позволяет работать с babel
- **@babel/preset-env** - пресет, который позволяет использовать последнюю версию JavaScript, делая код понятным для всех браузеров
- **@babel/polyfill** - необходимый полифилл, который необходимо подключить в webpack.config.js в поле entry.main
- **@babel/plugin-proposal-class-properties** - плагин, который позволяет работать с классами в современном синтаксисе
- **@babel/preset-typescript** - преобразование ts в js

------------

### ESLint

ESLint - это линтер для  JavaScript, который помогает находить и исправлять ошибки

Установка:

`npm i -D eslint eslint-loader babel-eslint`

**eslint** - непосредственно eslint
**eslint-loader** - загрузчик, который позволяет работать с eslint
**babel-eslint** - позволяет использовать Babel с ESLint

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
	}
```

------------

Работа некоторых фич необходима только в режиме development.
Так, например, создание карт кода, которые мы задаем в настройке devtool в *webpack.config.js*, необходимо только в режиме development.
Для этих целей необходимо указывать режим - dev или prod. Делаем это с помощью плагина *cross-env*:

`npm i -D cross-env`

Далее в *package.json*, в разделе "scripts", модернизируем описанные выше команды, указывая значения для системной переменной NODE_ENV:

```json
	"scripts": {
		"dev": "cross-env NODE_ENV=development webpack --mode development",
		"watch": "cross-env NODE_ENV=development webpack --mode development --watch",
		"start": "cross-env NODE_ENV=development webpack-dev-server --mode development --open",
		"build": "cross-env NODE_ENV=production webpack --mode production"
	}
```

Считывание заданной переменной смотреть в файле *webpack.config.js*, где она учавствует в конфигурации webpack.

------------

В корне проекта создаем конфигурационный файл *webpack.config.js*
