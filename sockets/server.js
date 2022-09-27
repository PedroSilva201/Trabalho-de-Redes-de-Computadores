const net = require('net')

const handConnection = socket =>{
    console.log('conexao inicializada')
    socket.on('end', () =>{
        console.log('conexao encerrada')
    })
    socket.on('data', data => {
        const str = data.toString()
        if(str === 'end'){
            socket.end()
        }
        console.log(str)
    })
}

const server = net.createServer(handConnection)
server.listen(4000, '127.0.0.1')
