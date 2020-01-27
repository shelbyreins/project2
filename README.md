# Buzz Buddy 

<img src="app/public/assets/images/logo1.png" width="200px">


https://polar-eyrie-33440.herokuapp.com/

## Description

 Buzz Buddy is an application that tracks users daily alcohol intake. Each user has a personal account. The users profile consists of a calendar in which they will select a date to add in alcohol.  The alcohol, along with quantity and price is selected from a modal and then pushed into a card for that date. 

## Installation

1. Clone GitHub Repository
2. Using your terminal, navigate to the project2 folder and do an `npm install`
3. Update `password` in config.json file
4. Create database in MySQL

        cd project2/db
        mysql -u root -p
        source schema.sql

5. Populate table in MySQL

        cd project2/db
        mysql -u root -p
        source seeds.sql

## Live Demo

<img src="app/public/assets/images/demo.gif" width="600px">


## Features

### Local Storage

Allows for the key-value pair to be saved in the web browser. These can then be accessed at any time unless intentionally deleted. 

First, storing the user data object  and alcohol object and accessing the userId, alcoholId and alcoholType to insert data into the alcoholUsers table (join table).

        localStorage.setItem("currentUser", JSON.stringify(data));
        localStorage.setItem("alcoholid",alcoholId;


The, accessing the username to display the username
on successful sign in.

        var alcoholid = localStorage.getItem("alcoholid")

Finally,a user logs out the local Storage is cleared.

        localStorage.clear();


### CryptoJS

CryptoJS provides other progressive hashing and ciphers to improve the security. The hashing is irreverible and uses the algorithm SHA256.

<img src="app/public/assets/images/cryptoJs.png" width="400px">

<img src="app/public/assets/images/cryptoJS2.png" width="400px">


















## Technolgies Used

 * Node Package Managers (NPM)
    * express
    * sequelize
    * body-parser
    * cryto-js
    * path
    * mysql
    * mysql12
    * dotenv
* Bootstrap
* CalendarJS Library
* HTML
* CSS
* Git


### Contributors
 - Links to our Githubs
    - [Chris Hayashi](https://github.com/Chris-Hayashi)
    - [Dimple Shanbhag](https://github.com/dimz13)
    - [Shelby Reinsimar](https://github.com/shelbyreins)