import http from 'node:http'

const server = http.createServer(() => {
    return res.end('Hello World')
})

server.listen(3333)