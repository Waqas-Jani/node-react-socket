import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');
function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log(socket.id);
    });
    return () => socket.close();
  }, []);
  return (
    <div className="App">
      <h2>Hello Socket.io</h2>
    </div>
  );
}

export default App;
