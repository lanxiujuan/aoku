function lunbo(){
	$(".tuul li:first").clone().appendTo(".tuul");

	var nowimg = 0;
	$(".next_banner").click(
		function(){
			if(nowimg < $(".tuul li").length - 2){
				nowimg ++;
				$(".tuul").animate({"left":-819*nowimg},600);
				
			}else{
				$(".tuul").animate(
					{"left":-819* ($(".tuul li").length - 1)}
					,600,
					function(){
						$(".tuul").css("left",0);
					}
				);
				nowimg = 0;
			}
		}
	);

	$(".prev_banner").click(
		function(){
			if(nowimg > 0){
				nowimg --;
				$(".tuul").animate({"left":-819*nowimg},600);
			}else{
				$(".tuul").css("left",-819 * ($(".tuul li").length - 1));
				nowimg = $(".tuul li").length - 2;
				$(".tuul").animate({"left":-819*nowimg},600);
			}
		}
	);
	$(".dianul li").click(
		function(){
			nowimg=$(this).index();

		}
	);

}