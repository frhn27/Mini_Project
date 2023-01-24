# Mini Project
aplikasi ini merupakan implentasi selama pembelajaran backend web devlopment di bootcamp **Di Bimbing**

# Features

- Create ialah fitur untuk membuat/menyimpan data baru
- Read, membaca/menampilkan data yang telah tersimpan di database
- Update, mengubah/melakukan perubahan pada data
- Delete, menghapus data

 ## Tech
aplikasi ini dibangun menggunakan :

- node.js  : 16.x.x
- Express  : 4.18.2
- express-validator : 6.14.2
- bycrpt : 5.1.0
- jsonwebtoken: 9.0.0
- mysql2 : 2.3.3
- sequileze : 6.28.0



## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd miniproject
npm i
node index.js
```

## Collection API
|request method | request url | description |
|---------------| ----------- | ------------|
|POST | /login | autentikasi users  |
|POST | /users |membuat users baru |
|GET | /users | mendapatkan data semua users|
|GET | /users/{id} |detail users secara spesifk |
|PUT | /users/{id}| mengubah / memperbarui data user |
|DELETE | /users/{id} | menghapus users|
|POST | /product | menambahkan product baru |
|GET | /product | mendapatkan hasil semua product |
|GET | /product/{id} | detail product secara spesifik |
|PUT | /product/{id} | mengubah / memperbarui product berdasarkan |
|DELETE |/product/{id}|menghapus product|

## License
MIT License

Copyright (c) [2023] [FARHAN]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
