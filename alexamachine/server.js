'use strict';

const AlexaAppServer = require( 'alexa-app-server' );

const server = new AlexaAppServer( {
	httpsEnabled: false,
	port: process.env.PORT || 80
} );

server.start();
