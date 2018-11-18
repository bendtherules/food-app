import './index.css';
import App from './App';

window.addEventListener("load", function () {
    const app = new App();

    let elem = document.getElementById('root');
    if (elem !== undefined) {
        app.renderPromise.then((appHtml) => {
            elem.innerHTML = appHtml;
        })
    }
});