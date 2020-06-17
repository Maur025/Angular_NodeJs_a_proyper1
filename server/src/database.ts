import {createPool }from 'promise-mysql';
/*import mysql from 'promise-mysql';*/

import keys from './keys';

/*const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('Base de datos conectada');
    });

export default pool;   */ 

export async function connect(){
    const connection = createPool(keys.database);

    return connection;
}
