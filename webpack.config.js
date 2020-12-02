//Webpack: hace que nuestros proyectos sean compatibles con cualquier navegador

//Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const path = require('path');
//Archivo necesario para trabajar con HTML que lo requerimos del paquete que instalamos
const HtmlWebPackPlugin = require('html-webpack-plugin');
//copiar los estilos al compilado que estamos generando, copia los estilos a la carpeta dist
const CopyWebpackPlugin = require('copy-webpack-plugin');

//Aquí se encuentra toda la configuración de lo que va a suceder y sera el modulo para exportar.
module.exports = {
    //Punto de entrada con su dirección y es aquí donde vive el código inicial y de aquí parte al desarrollo.
    entry: './src/index.js',
    //Donde se envía el proyecto estructurado y compilado listo para producción, este sera un objeto
    output:{
        //Ponemos la ruta del lugar donde se exportara el proyecto, usando el path que importamos
        //con el dirname le decimos que donde se encuentre esta carpeta ahi creara la carpeta dist = distribution
        path: path.resolve(__dirname, 'dist'),
        /*le diremos como se llamaremos el archivo que vamos a crear donde estara el compilado final cuando
        envienmos a produccion*/
        filename: 'main.js'
    },
    /*trabajaremos sobre las extenciones que va a utilizar nuestro proyecto donde usaremos resolve
    generando otro objeto*/
    resolve: {
        /*Pasamos un arreglo de las extenciones que vamos a utilizar*/
        extensions: ['.js'],
    },
    /*creamos un modulo con las reglas necesarias de babel*/
    module:{
        /*estas seran las reglas que pasaremos por medio de un arreglo*/
        rules: [
            //Elementos que necesitamos
            {
                /*Estructura de babel generando un test de como vamos a identificar estos archivos*/
                /*test que va a tener regex para establecer valores que queremos filtral de una ruta,
                de unos elementos o de los archivos que vamos a estar utilizando 
                / punto de entrada - extenciones js */
                test: /\.js?$/,
                //Exluimos la carpeta node_modules y todos los archivos js
                exclude: /node_modules/,
                /*utilizamos un loader o una configuracion establecida para trabajar todo nuestro codigo
                y es que el loader que instalamos de babel*/
                use: {
                    loader: 'babel-loader',
                }
            }

        ]
    },
    //necestiamos establecer los plugin que vamos a utilizar
    /*webpack plugin de html que nos va a permitir trabajar con estos archivos pasando un arreglo*/
    plugins: [
        /*instanciamos el plugin de html que instanciamos a inicio de este documento, pasandoles un 
        arreglo y despues un objeto que vamos a llenar con la configuracion*/
        new HtmlWebPackPlugin(
            {
                //inject como vamos a un archivo html a injectar un valor 
                inject: true,
                //necesimos un template principal y le damos una ruta de este template base de html
                template: './public/index.html',
                /*ahora le decimos donde tiene que guardarlo y seria nuestra carpeta dist donde le damos
                un nombre*/
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{ from: "./src/styles/styles.css", 
            to: "" }],
        }),
    ]
}

