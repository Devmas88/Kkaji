require(process.env.UPPERCASE_IO_PATH + '/BOOT.js');

BOOT({
	CONFIG : {
        isDevMode : true,
		defaultBoxName : 'Kkaji',
        title : 'Kkaji',
		webServerPort : 8900
	}
});