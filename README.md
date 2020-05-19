<h2 align="center">Backend-book-library-expressjs</h2>



![abcd](https://img.shields.io/badge/Code%20Style-Standard-green) [![Release Version](https://img.shields.io/badge/release-v.1.0-blue)](https://github.com/shoelfikar/Backend-book-library-expressjs/releases/tag/1.0) [![Node JS](https://img.shields.io/badge/Dependencies-Express%20JS-green)](https://nodejs.org/en/)


<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

## Table of Contents

* [Prerequiste](#Prerequiste)
* [Installation](#Installation)
* [Installation](#Installation)
* [Create Environment Variable](#create-environment-variable)
* [Start Development Server](#Start-Development-Server)
* [Link Collection Postman](#Link-Collection-Postman)
* [Structur Folder](#Structur-Folder)
* [About Project](#About-Project)
* [Contributing](#Contributing)
* [Related Project](#Related-Project)
* [Contact](#Contact)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/).
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Redis - Download and Install [Redis](https://redis.io/)

## Installation
### Clone
```
$ git clone https://github.com/shoelfikar/Backend-book-library-expressjs.git
$ cd Backend-book-library-expressjs
$ npm install
```

## Create Environment Variable
```
$ touch .env
$ nano .env
```

```
DB_HOST=YOUR_DB_HOST
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
DB_NAME=YOUR_TABLE_NAME

SERVER_PORT=YOUR_PORT

EMAIL=YOUR_EMAIL_ACTIVATION
PASSWORD=YOUR_EMAIL_PASSWORD

SECRET_KEY=YOUR_SECRET_KEY

SERVER_HOST=YOUR_HOST
SERVER_PORT=YOUR_PORT
SERVER_PORT_FRONT=YOUR_PORT_FRONT_END
PORT_REDIS=YOUR_PORT_REDIS / default => 6379

```

## Start Development Server
```
$ npm start
```
## Link Collection Postman
[Postman](https://www.getpostman.com/collections/5a776822917b6c04128a)

## Structur Folder
```
\---src
|    \---Configs
|    |   +---db.js            
|    \---controllers
|    |   +---books.js
|    |   +---category.js
|    |   +---loanbooks.js
|    |   +---user.js
|    \---helpers
|    |   +---helpers.js
|    \---models
|    |   +---books.js
|    |   +---category.js
|    |   +---loanbooks.js
|    |   +---user.js
|    \---routers
|    |   +---books.js
|    |   +---category.js
|    |   +---index.js
|    |   +---loanbooks.js
|    |   +---user.js
+---app.js
+---package-lock.json
+---package.json
```

### About Project 

  Membuat REST API untuk perpustakaan online menggunakan express js


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request

## Related Project

* [`Frontend-mylibrary-online-vuejs`](https://github.com/shoelfikar/Frontend-mylibrary-online-vuejs)
* [`Backend-book-library-expressjs`](https://github.com/shoelfikar/Backend-book-library-expressjs)

## Contact

My Email : sulfikardi25@gmail.com

Project Link: [Backend-book-library-expressjs](https://github.com/shoelfikar/Backend-book-library-expressjs)


---
Copyright © 2020 [Sulfikardi](https://github.com/shoelfikar/)
