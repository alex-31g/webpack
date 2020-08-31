// При импортах, расширения .js и .json можно не указывать, так как по умолчанию webpack работает с js и json.
// Чтобы не указывать другие расширения, в файле webpack.config.js необходимо добавить настройку resolve и в свойстве extensions указать с какими расширениями мы работаем

// импорт с помощью @ - это элиас, который прописан в файле webpack.config.js, в свойстве alias
import one from '@models/file_1';
import './babel_test';
import './ts_test.ts';

import './styles/styles.css';
import './styles/sass.sass';

import json from '@assets/json';

import logo from '@assets/webpack-logo.png';

import xml from '@assets/data.xml';

import csv from '@assets/data.csv';

// ===========================

console.log(one + 1);

// ===========================

// после импорта json мы можем сразу, без преобразования в объект, работать с ним как с js
console.log('JSON:', json.title);

// ===========================

let img = document.querySelector('.img');
img.src = logo;
img.style.width = '200px';

// ===========================

// после импорта xml мы можем сразу, без преобразования в объект, работать с ним как с js
console.log('XML:', xml);
console.log('xml.email.to:', xml.email.to[0]);

// ===========================

// после импорта csv мы можем сразу, без преобразования в объект, работать с ним как с js
console.log('CSV:', csv);
console.log('CSV[0]:', csv[0]);

// ===========================
