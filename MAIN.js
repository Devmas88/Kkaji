KkajiServer.MAIN = METHOD({

	run : function() {
		'use strict';

		KkajiServer.MATCH_VIEW({
			uri : '',
			target : KkajiServer.List
		});
		
		KkajiServer.MATCH_VIEW({
			uri : 'form',
			target : KkajiServer.Form
		});
	}
});