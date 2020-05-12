import a from './a';
import img1 from './assets/11.jpeg';
import './x.scss';
import './y.less';
import './z.styl';
console.log(a);
const app = document.querySelector('#app');
console.log('app', app);
app.innerHTML = `<img src=${img1}></img>`;

const button = document.createElement('button');
button.innerText = '懒加载';
button.onclick = () => {
  const promise = import('./lazy');
  promise.then((callback) => {
    const fn = callback.default;
    fn();
  });
};
app.appendChild(button);
