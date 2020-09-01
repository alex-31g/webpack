export default 1;

// Динамические импорты + Lazy loading

const x = true;

if (x) {
  import('lodash').then((_) => {
    console.log('Lodash', _.random(0, 10, true));
  });
}
