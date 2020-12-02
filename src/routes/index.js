/*
    Imporatamos los templates y las pag que creamos
    es aqui donde vamos a controlar el manejo de rutas
    para hacer render de nuestra app
*/ 
import Header from '../template/header';
import Home from '../pages/home';
import Character from '../pages/character';
import Error404 from '../pages/error404';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

//Rutas de nuestra app
const routes = {
    '/': Home,
    '/:id': Character,
    '/Contact': 'Contact'
}

//Manejador, mostramos los elementos segun la logica que establescamos
//Mostramos resultados del navegador y como vamos a mostrarle al usuario en que ruta esta
const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

    //Implementar el home
    let hash = getHash(); //Obtenego en donde se encuentra el hash /
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
}

export default router;