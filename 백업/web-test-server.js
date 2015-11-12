// load UPPERCASE.JS.
require('./UPPERCASE.JS-COMMON.js');
require('./UPPERCASE.JS-NODE.js');

RUN(function() {
	'use strict';

	var
	// port
	port = 8900;

	INIT_OBJECTS();

	// don't resource caching.
	CONFIG.isDevMode = true;

	RESOURCE_SERVER({
		port : port,
		rootPath : __dirname
	}, function(requestInfo) {

		var
		// uri
		uri = requestInfo.uri;

		if (uri === '' || CHECK_IS_EXISTS_FILE({
			path : __dirname + uri,
			isSync : true
		}) !== true) {
			requestInfo.uri = 'index.html';
		}
	});


	console.log('web test server running. - http://localhost:' + port);
});
