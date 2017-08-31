const request = require('supertest')
const app = require('./app.js')

describe("Test the root path", ()=>{
  it("should respond to GET", ()=>{
    return request(app)
    .get('/')
    .then((response)=>{
      expect(response.statusCode).toBe(200)
    })
  })

  it("should respond with a greeting of 'Hello World'", ()=>{
    return request(app)
    .get('/')
    .then((response)=>{
      expect(response.body.greeting).toBe("Hello World")
    })
  })
})
