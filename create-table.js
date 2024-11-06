import { sql } from "./db.js";

sql`
    CREATE TABLE "video" (
    id UUID PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER
);

` .then(() => {
    console.log('tabela criada')
    
})