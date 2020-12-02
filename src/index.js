import router from './routes';

//Escuchamos lo que esta pasando en router para que cuando este lista la muestre por pantalla
//Window representa todo el documente
window.addEventListener('load', router);
//Escuchar las rutas, el hash al cual yo me estoy moviendo
window.addEventListener('hashchange', router);