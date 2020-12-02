//Traer los datos de la API
const API = 'https://rickandmortyapi.com/api/character/';

//Llamar API y traer los datos para hacer render
const getData = async (id) => {

    //Si existe ID traeme ese num, Si no lo q venga x defecto en API
    const apiURL = id ? `${API}${id}` : API;

    try {
        //Traemos los datos de la api
        const response = await fetch(apiURL);
        //Convertir respues a un objeto json q pueda ser iterable
        const data = await response.json();
        return data;
    }catch (error){
        console.log('Fetch Error', error);
    }
}

export default getData;