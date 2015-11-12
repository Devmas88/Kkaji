Kkaji.Form = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// list
		list,
		
		// wrapper
		wrapper = DIV({
			c : [
			
			// 글 작성 버튼
			A({
				c : '글 작성',
				on : {
					tap : function() {
						REFRESH();
					}
				}
			}),
			
			// 글 목록
			list = UL()]
			
		}).appendTo(BODY);
		
		// 뷰에서 나가면
		inner.on('close', function() {
			// wrapper 제거
			wrapper.remove();
		});
	}
});