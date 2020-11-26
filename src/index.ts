import router from './router/router';
import Server from './server/server';

import routers from './router/router';

// import MySQL from './mysql/mysql';

const server = Server.init( 3000 );

server.app.use( routers );

// MySQL.instance;

server.start( () => {
    console.log( 'Servidor corriendo en puerto 3000' );
} );

//console.log('Codigo TypeScript');