# basic-express-server

A basic server, routes used:
1. / -> Home page
2. /infp -> for trail
3. /person/:name -> :name can be changed in the route and it will show an object 
ex: /person/fred --> name": "fred"
4. /person -> no name inserted : error 500, 

### tests :
    ✓ Testing Home Page / (59 ms)
    ✓ handle 404 error as bad route (9 ms)
    ✓ handle 404 error as bad method (5 ms)
    ✓ handle server error (4 ms)
    ✓ testing /info (9 ms)
    ✓ testing /person/fred (4 ms)
    ** for logger test: 
    ✓ it's logging things (5 ms)
    ✓ it calls next method (2 ms)

  [tests-image](/testsclass2.png)

.env -> PORT 3000

### structure 
├── .github
│   ├── workflows
│   │   └── node.yml
├── _ _tests_ _
│   ├── server.test.js (integration test)
├── src
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── middleware
│   │   ├── logger.js
│   │   ├── logger.test.js (unit test)
│   │   ├── validator.js
│   │   └── validator.test.js
│   └── server.js
├── .eslintrc.json
├── .gitignore
├── index.js
├── package.json
└── README.md

#### main file for start is injex.js

## packages installed :

    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "jest": "^29.5.0",
    "supertest": "^6.3.3"

## UML 
[UML-Photo](./UMLclass2a.jpg)

**To remember: Used isNan(name) in validation.js to show only the string and the other to reflect error 500

### [Action-tests:](https://github.com/mohamadshawabkeh/basic-express-server/actions)

### [Repo-access](https://github.com/mohamadshawabkeh/basic-express-server)
