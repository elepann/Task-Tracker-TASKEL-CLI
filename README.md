📝 TASKEL - Task Tracker CLI
============================
TASKEL (Task-CLI) adalah aplikasi manajemen tugas berbasis terminal yang efisien dan ringan. Dibangun menggunakan Node.js, aplikasi ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada tugas mereka langsung dari command line.

🚀 Fitur Utama
==============
Global Command: Akses aplikasi dari folder mana saja menggunakan perintah taskel.

Manajemen Status: Lacak tugas dengan status todo, on-progress, dan done.

Smart Filtering: Tampilkan daftar tugas secara spesifik berdasarkan status menggunakan flags.

Data Persisten: Menggunakan sistem penyimpanan lokal berbasis file JSON yang aman dan cepat.

Timestamp Otomatis: Mencatat waktu pembuatan (createdAt) dan perubahan terakhir (updatedAt) untuk setiap tugas.

🛠️ Prasyarat & Instalasi
========================
Prasyarat

Node.js (Versi 14 atau yang lebih baru)
npm (Node Package Manager)

Installation Guide
==================
1. git clone https://github.com/elepann/Task-Tracker-TASKEL-CLI.git
2. cd TASKEL
3. npm install
4. sudo npm link //only on mac user

Guide
=====
1. Add a New Task
   taskel add "Mempelajari Integrasi Express.js"
2. View / Read Task
   taskel list
   taskel list -s done
   taskel list -s on-progress
   taskkel list -s todo
3. Update task
   taskel update 1 -s done
   taskel update 1 -d "Learning Vanilla JS"
4. Delete Task
   taskel delete 1


