import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://sonianish441:TK6bwckjlUS4@ep-twilight-waterfall-38593792.us-east-2.aws.neon.tech/test?sslmode=require",
});

client.connect();

async function createUsersTable() {
  await client.connect();
  const result = await client.query(` 
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(50) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
  console.log(result);
}

createUsersTable();

//to confirm whether the table was created or not use the psql.

///create a function to insert data into the table and make it async
async function insertData() {
  const result_1 = await client.query(`
    INSERT INTO users (name, email, password) VALUES ('anish', 'sonianish441@gmail.com', 'anish12334')`);
}
console.log(result_1);
insertData();
