import React from 'react';
import App from './App';
import Peer from 'peerjs';

class Root extends React.Component {
  render() {
  	let client = 'client-test';
    if(process.env.DEV_CLIENT === '') {
      client = process.env.DEV_CLIENT;
    }
  	const peer = new Peer(
  		client, {host: 'localhost', port: 8000, path: '/peer', debug: 3}
  	);
    return (
    	<div className="App">
  			<App peer={peer} />
 		</div>
    )
  }
}

export default Root;
