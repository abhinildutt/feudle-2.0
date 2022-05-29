import React, { useEffect, useState } from 'react'
import {io} from 'socket.io-client'


function App() {
	const [id, setId] = useState(null);

	useEffect(() => {
		const socket = io('http://localhost:5000');
    	socket.on('connect', () => {
			setId(socket.id);
		});
 	}, [])

 	return (
   		<div className="App">
     		{id}
   		</div>
 	)
}

export default App;