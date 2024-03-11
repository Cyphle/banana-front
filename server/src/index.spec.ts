// 'use strict';
//
// import fastify from 'fastify';
//
// function build(opts={}) {
//   const app = fastify(opts)
//   app.get('/', async function (request, reply) {
//     return { hello: 'world' }
//   })
//
//   return app
// }
//
// const test = async () => {
//   const app = build()
//
//   const response = await app.inject({
//     method: 'GET',
//     url: '/'
//   })
//
//   console.log('status code: ', response.statusCode)
//   console.log('body: ', response.body)
// }
// test()