const express = require('express')
const routes = express.Router()
const {Client} = require("pg");

const client = new Client({
    connectionString:process.env.DATABASE_URL

  });

routes.get('/', async (req, res)=>{
    await client.connect();

    await client.query('SELECT * FROM accesorios', (err, rows)=>{
        if(err) return res.send(err)

        res.json(rows)
    })
    
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM accesorios', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
        
    })
})

routes.post('/', async (req, res)=>{
    await await client.connect();
    connect.query('INSERT INTO accesorios set ?', [req.body], (err, rows)=>{
        if(err) return res.send(err)

        res.send('accesorio added!')
    })
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO accesorios set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('accesorio added!')
        })
        
    })
})

routes.delete('/:id', async (req, res)=>{
    await client.connect();
    await client.query('DELETE FROM accesorios WHERE id = ?', [req.params.id], (err, rows)=>{
        if(err) return res.send(err)

        res.send('accesorio excluded!')
    })
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM accesorios WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('accesorio excluded!')
        })
        
    })
})

routes.put('/:id', async (req, res)=>{
    await client.connect();
    await client.query('UPDATE accesorios set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
        if(err) return res.send(err)

        res.send('accesorio updated!')
    })
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE accesorios set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('accesorio updated!')
        })
        
    })
})

module.exports = routes