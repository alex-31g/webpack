import one from './file_1';
import './styles/styles.css';

// расширение .json можно не указывать, так как по умолчанию webpack работает с js и json
import json from './assets/json';

import logo from './assets/webpack-logo.png';

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
