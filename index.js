const jsonServer = require('json-server')
const RBServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

RBServer.use(middleware)
RBServer.use(router)

RBServer.listen(PORT,()=>{
    console.log(`Recipe Book Server statred at port ${PORT}`);
})