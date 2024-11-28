const Pool = require('pg').Pool; // import postgres connector module
// create pool object
const pool = new Pool(
    {
        connectionString: "postgresql://students_0rfe_user:DlMpN9ZouBHJbQucHvQkU0mo9a4smMmS@dpg-ct453kqj1k6c73edv1n0-a.oregon-postgres.render.com/students_0rfe",
        ssl: { rejectUnauthorized: false },
    }
);

// export the object
module.exports = pool;