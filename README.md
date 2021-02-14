# fizz-buzz
The code implements common fizz-buzz problem which can be accessed via a REST API.

# API
## Request
```
GET /fizz-buzz?start=0&stop=45 HTTP/1.1
Host: localhost:8080
```
`/fizz-buzz` accepts two query param `start` and `stop`.

## Response
```
[{ “in”: 4, result: “4”}]
```

# Installation
## Prerequisites
* Linux
* Docker

## Deployment
* Clone this repo
* Change directory to `./fizz-buzz`
* Run `sudo docker build -t fizz-buzz .`
* Run `sudo docker run --name fizz-buzz-server -p 8080:8080 fizz-buzz`

## Test
```
curl --location --request GET 'http://localhost:8080/fizz-buzz?start=0&stop=45'
```

