const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import bcrypt

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_kerjapraktek_api',
  port: 8111
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('MySQL Connected');
});

// Endpoint untuk menyimpan data siswa
app.post('/api/saveDataSiswa', (req, res) => {
  const { nama, alamat, ttl, no_hp, jenis_kelamin } = req.body;
  const querycheck = 'SELECT * FROM siswa WHERE no_hp = ?';

  db.query(querycheck, [no_hp], (error, results) => {
    if (error) {
      return res.status(500).send('Database query error');
    }

    // Jika data sudah ada
    if (results.length > 0) {
      return res.status(200).send('DATA SUDAH ADA');
    }

    // Jika data belum ada, masukkan data baru
    const queryInsert = 'INSERT INTO siswa (nama, alamat, ttl, no_hp, jenis_kelamin) VALUES (?, ?, ?, ?, ?)';
    db.query(queryInsert, [nama, alamat, ttl, no_hp, jenis_kelamin], (insertError) => {
      if (insertError) {
        return res.status(500).send('Error inserting data');
      }
      res.status(200).send('Data saved successfully');
    });
  });
});

// Endpoint untuk update data siswa
app.post('/api/Update', (req, res) => {
  const { nama, alamat, ttl, no_hp, jenis_kelamin } = req.body;
  const query = 'INSERT INTO siswa (nama, alamat, ttl, no_hp, jenis_kelamin) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [nama, alamat, ttl, no_hp, jenis_kelamin], (error) => {
    if (error) {
      console.log('Error inserting data:', error);
      return res.status(500).send('Error saving data');
    }
    res.status(200).send('Data saved successfully');
  });
});

// Endpoint untuk login
app.post('/api/login', (req, res) => {
  const { Admin, Password } = req.body;

  // Pastikan username dan password tidak kosong
  if (!Admin || !Password) {
    return res.status(400).send('Username dan password diperlukan');
  }

  const query = 'SELECT * FROM tbl_admin WHERE Admin = ?';

  db.query(query, [Admin], (error, results) => {
    if (error) {
      return res.status(500).send('Database query error');
    }

    // Jika hasilnya kosong, berarti username tidak ada
    if (results.length === 0) {
      return res.status(401).send('Username atau password salah');
    }

    const hashedPassword = results[0].Password; // Ambil password hashed dari database

    // Bandingkan password yang dimasukkan dengan password yang di-hash
    bcrypt.compare(Password, hashedPassword, (err, isMatch) => {
      if (err) {
        return res.status(500).send('Error checking password');
      }
      if (!isMatch) {
        return res.status(401).send('Username atau password salah');
      }

      // Jika login berhasil
      res.status(200).send('Login berhasil');
    });
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
