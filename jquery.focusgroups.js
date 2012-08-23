$.focusGroup = function(parent_id, on_focus, on_blur){

	var $parent = $(parent_id);
	$parent.addClass('focusGroup');
	
	if($parent.length){
		$parent.on('focus','input,select',function(){
			var $parent_node = $(this).parents('.focusGroup');
			if($parent_node.hasClass('focusGroupFocused') === false){
				$('.focusGroupFocused').removeClass('focusGroupFocused');
				$parent_node.addClass('focusGroupFocused');
				
				if($.focusGroup.blur !== undefined && $.focusGroup.blur !== null){
					$.focusGroup.blur($.focusGroup.blurGroup);
					$.focusGroup.blur = null;
					$.focusGroup.blurGroup = null;
				}
				
				on_focus($parent_node);
			}
			
		});
	
		$parent.on('blur','input,select',function(){
			$.focusGroup.blur = on_blur;
			$.focusGroup.blurGroup = $(this).parents('.focusGroup');
		});
	}
};