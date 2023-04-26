# Genie Admin App

Created with NextJs and bootstrapped with Tailwindcss. The Database is a MongoDB Atlas

## NOTE - Please create a `.env.local` file for your environment variable

use this format - `MONGODB_URI='<Your Mongodb instance here>'`

## The run - `npm install`

## The run - `npm run dev` to run the app on localhost:3000

### To test our api

run GET on `localhost:3000/api/admin` on Postman or Nightingale to retrieve the response

### React-Query - `npm i react-query`

Used for caching the data and returning it from the cache memory.
This is done instead of sending a request everytime we need data
