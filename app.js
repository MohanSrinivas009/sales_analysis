import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'

const pool = mysql.createPool({
  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.query((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

const app = express()
app.get('/customers', (req, res) => {
    const query = 'SELECT * FROM customers';

    pool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.log("data arrived");
        res.json(results
        );
    });
});
app.get('/orders', (req, res) => {
    const query = 'SELECT * FROM orders';

    pool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.log("data arrived");
        res.json(results
        );
    });

});
app.get('/products', (req, res) => {
    const query = 'SELECT * FROM Products';

    pool.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.log("data arrived");
        res.json(results
        );
    });

});
app.get('/customers/:customerID', async (req, res) => {
    try {
        const { customerID } = req.params;

        const [rows] = await pool.promise().query(
            'SELECT * FROM customers WHERE customerID = ?',
            [customerID]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Customer not found'
            });
        }

        res.json(rows[0]
        );

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(process.env.DB_HOST)
})
