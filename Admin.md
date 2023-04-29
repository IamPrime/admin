# Genie Admin App

Created with NextJs and bootstrapped with Tailwindcss. The Database is a MongoDB Atlas

## NOTE - Please create a `.env.local` file for your environment variable

use this format - `MONGODB_URI='<Your Mongodb instance here>'`

## Then run - `npm install`

## Then run - `npm run dev` to run the app on localhost:3000

### To test our api

run GET on `localhost:3000/api/admin` on Postman or Nightingale to retrieve the response

### React-Query - `npm i react-query`

Used for caching the data and returning it from the cache memory.
This is done instead of sending a request everytime we need data

### NOTE - In the `helper.js` file found in lib folder

* Change the base url to match your url, else your database will not connect

### FIXME - If you encounter a server error on this app after making changes

* If you have made changes to either the `package.json` file or the `next.config.js` file
* and the app is not starting up, delete the **`.next`** folder and run - `npm run dev`.
* If the issue is not fixed, contact the **`admin`** or **`team blueblood`**

### STUB - This is an ongoing project by Team Blueblood 👻

### LINK - [Genie](https://admin-henna-five.vercel.app/) or <https://admin-henna-five.vercel.app/>
