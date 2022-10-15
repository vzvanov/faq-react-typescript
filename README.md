# Frequently Asked Questions (FAQ) list (MERN solution) TypeScript

 This is a CRUD frequently asked questions (FAQ) application implemented on the MERN stack.

![Home](/img/img01.jpg "Home")
![Admin](/img/img02.jpg "Admin")
![Edit](/img/img03.jpg "Edit")

## To start

- Clone the repository.
- Install "npm install" dependencies for frontend and back-end.

Preparatory actions:
- Register on MongoDB https://www.mongodb.com/.
- Create a cluster most suitable for your country.
- Create a database.
- Create a "faqs" document.
- Get a connection string.
- Add the connection string to the .env file at the root of the "server" directory, as shown below
  DB_URL=mongodb+srv//your connection data//

## Server

Implemented on [NodeJS](https://nodejs.org/).

The database structure is a table: faqs.

Example:

{
  "faq": [
    {
      "_id": 6744556273,
      "summary": "What is the maximum file upload size?",
      "info": "No more than 2GB. All files in your account must fit your allotted storage space.",
      "__v": 0
    }
  ]

}

To run in the project directory:

### `cd server`

### `npm run server`

Open [http://localhost:5000](http://localhost:5000) to view in a browser.

## Client

To run in the project directory:

### `cd client-react-typescript`

### `npm start`

The application starts [http://localhost:3000](http://localhost:3000) in the browser.
