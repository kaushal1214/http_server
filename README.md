# This is a simple implementation of HTTP Server
Test your HTTP Clients. This is built using Nodejs Express 4.0 Web Framework. Please install Nodejs LTS before use

Step to install
1. Open the *command prompt* in the root of the repo
2. Execute `npm install`. This will install all the required libraries under `node_modules` folder
3. Then, run `npm start`.
4. ![Screenshot from 2024-06-21 15-56-26](https://github.com/kaushal1214/http_server/assets/23266310/28b9f0f9-7648-435d-b5b2-625015bc36d0)
5. Open your browser and open http://localhost:3001


# REST APIs
1. `/login`
   `POST`
   - Description: To authenticate the user. API returns JSON payload with a JWT
   - Request Body - JSON Payload
     - Example
       - { user: "cdac", password:"diot"}
  
3. `/sensor/value` `POST`
   - Description: To add a sensor record in the Database
   - Request Payload - JSON Payload
     - Example
       - { sensor: "DHT11", type: "temperature", value: 24.5}
