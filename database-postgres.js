import { randomUUID } from "node:crypto";
import { sql } from './db.js';

export class DatabasePostgres{


    async list(search) {
        let videos;

        if (search) {

            videos = await sql`select * from video where title ilike ${'%' + search + '%'}`;
        } else {
            videos = await sql`select * from video`;
        }

        return videos; 
    }


    async create(video) {
        const videoId = randomUUID(); 

        const { title, description, duration } = video; 

 
        await sql`insert into video (id, title, description, duration) values (${videoId}, ${title}, ${description}, ${duration})`;
    }

    async update(id, video) {
        const { title, description, duration } = video;
        
        await sql`
            update video
            set title = ${title}, description = ${description}, duration = ${duration}
            where id = ${id}
        `;
    }
    
    async delete(id) {
        await sql`
            delete from video
            where id = ${id}
        `;
    }
    
}
