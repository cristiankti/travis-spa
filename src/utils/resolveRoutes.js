//Encargado de tener las rutas donde va el usuario
//Entonces quiero saber a que template voy a enviarlo

const resolveRoutes = (route) => {
    if(route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`; //retorna /about
}

export default resolveRoutes;