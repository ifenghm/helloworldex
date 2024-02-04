## How to spin up a new JS Server 

### 1. Create a new directory for your server

```bash
mkdir helloworldexpress
cd helloworldexpress
npm init es6
```

### 2. Install the dependencies. That is, `express` to create routes

```bash
npm install --save express
```

### 3. Use express! 
```js
import express from 'express'
const app = express()
// app.use(express.json())
// need the above line to parse json passed in the request body 

app.get('routeName', (request, response) => response.send("Hello World!"))
// you can use any HTTP verb in place of get! 
// you can access properties in the `request` object to get some info passed in the request.   

app.listen(3000, () => {
    console.log('app listening on port 3000')
}) // feel free to change the port
```

Profit! Use Postman to test your endpoints, especially if you have non-GET endpoints.