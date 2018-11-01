import request from 'request';
import React from 'react';

export const serverURL = 'https://evapeng-server.herokuapp.com/';

export var fetchData = function(url, token){
	return new Promise((resolve, reject) => {
		request(`https://evapeng-server.herokuapp.com/${url}?id=${token}`, (error, response, body) => {
			resolve(body);
		})
	})
}

export const TokenContext = React.createContext('');