
# Section 31 - RESTful API

**About:** In this section, I learned all about RESTful APIs and how to build one of my own. I built a Wikipedia style API in this section.
## Lesson Learned
- REST - REpresentational State Transfer
- REST is an architectural style for designing APIs.
    - Other architectural styles for API design include SOAP, GraphQL, Falcor, and more.
    - The standard for Web APIs is REST as of now.
- Rules for making an API RESTful:
    - Two most important ones are:
        - Using the HTTP request verbs
        - Using a specific pattern of Routes/Endpoint URLS.
- HTTP Verbs: GET, POST, PUT, PATCH, DELETE
    - GET is similar to READ in CRUD
        - ```app.get(function(req, res) {});```
        - Every single time we want our server to serve some resource we use the above function and then we pass a callback that responds to the request and sends the result back. If the request involved something that related to the database then that's equivalent of searching through our database and returning the data as the result. 
    - POST is similar to CREATE in CRUD
        - ```app.post(function(req, res){});```
        - Whenever we create a form on our website, we use app.post and then we have a callback with a request and a response. When the data is posted to the server, we create an entry in our database and we save that data for later. So, in this case, the request will contain the data and the response will simply be success or error code.
    - PUT/PATCH is similar to UPDATE in CRUD
        - ```app.put(function(req, res){});```
        - ```app.patch(function(req, res){});```
        - Both put and patch go into our database and update some pieces of data.
        - PUT vs PATCH
            - PUT - You're updating your database by sending an entire entry to replace the previous one.
            - PATCH - When you're sending a patch request to the server, you're only sending a piece of data that needs to be updated instead of the entire entry.
    - DELETE is similar to DELETE in CRUD
        - ```app.delete(function(req, res){});```
        - This just deletes or destroys a particular piece of data in our database.
- In order for our API to be RESTful, we have to have a specific pattern of endpoints and routes.
- Using Robo 3T
- Creating Database with Robo 3T
- Setting up Server
- GET All Documents
- POST a new document
- DELETE all Documents
- Chained Route Handlers Using Express
- GET a specific document
- PUT a specific document
- PATCH a specific document
- DELETE a specific document

## Authors

- [@bhoamikhona](https://github.com/bhoamikhona)

