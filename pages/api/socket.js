import io, { socket } from 'socket.io-client';

const socket = io("http://localhost:4000");


const SocketHandler = (req, res) => {
    if (res) {
      console.log(res);
      console.log('Socket is already running')
    } else {
      console.log('Socket is initializing')
      const io = new Server(res.socket.server)
      res.socket.server.io = io
    }
    res.end()
  }
  
  export default SocketHandler