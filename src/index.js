import App from './App';
import './index.css';

window.addEventListener("load", function () {
    const app = new App();

    let elem = document.getElementById('root');
    if (elem !== undefined) {
        app.renderPromise.then((appHtml) => {
            elem.innerHTML = appHtml;
        })
    }
});