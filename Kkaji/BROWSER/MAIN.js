Kkaji.MAIN = METHOD({

	run : function() {
		'use strict';

		Kkaji.MATCH_VIEW({
			uri : '',
			target : Kkaji.List
		});

		Kkaji.MATCH_VIEW({
			uri : 'form',
			target : Kkaji.Form
		});
	}
});