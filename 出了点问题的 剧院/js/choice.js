$(function(){
	for (var i=1;i<10;i++) {
		$(".seat_map").append('<p></p>').append(i).append('<button>1</button>').append('<button>2</button>').append('<button>3</button>').append('<button>4</button>').append('<button>5</button>').append('<button>6</button>').append('<button>7</button>').append('<button>8</button>').append('<button>9</button>').append('<button>10</button>');
		}
		$(".seat_map button").addClass("map_bt");
		var i=1;
		$(".map_bt").click(function(){
			$(this).css("background-color","#e6cac4");
			$(this).attr("disabled","disabled");
			$("#counter").html(i++);
			$("#total").html((i-1)*30);
		})
		$(".checkout-button").click(function(){
			alert("您所购买"+"《"+$(".mm_id").html()+"》"+"共"+$("#counter").html()+"张"+"合计"+$("#total").html()+"元");
			$(".choice_seat").css("display","none");
			$(".ticket_suss").css("display","block");
		})
		//  电影点击链接购票
		$(".con_movie").click(function(){
			$(".con_nav").css({"width":"300px","opacity":"0.5","font-weight":"normal","border":"none"});
			$("#con_nav2").css({"width":"400px","opacity":"0.8","font-weight":"bolder","border-left":"10px solid whitesmoke"})
			$(".r_content").css("display","none");
			
			$(".buy_content").css("display","block");
			$(".choice_date").css("display","block");
			$(".buy_movie").css("display","none");
			
			
		});
			$(".buy_bt").click(function(){
				
				$(".choice_date").css("display","none");
				$(".choice_seat").css("display","block");
				$(".buy_pag").css("display","none");
				
			})
		
		$(".con_nav").click(function(){
			$(".con_nav").css({"width":"300px","opacity":"0.5","font-weight":"normal","border":"none"});
			$(this).css({"width":"400px","opacity":"0.8","font-weight":"bolder","border-left":"10px solid whitesmoke"})
		})
		//  选择  页面
		$("#con_nav1").click(function(){
			$(".buy_content").css("display","none");
			$(".movie_manage").css("display","none");
			$(".hall_manage").css("display","none");
			$(".r_content").css("display","block");
			
		})
		$("#con_nav2").click(function(){
			$(".r_content").css("display","none");
			$(".movie_manage").css("display","none");
			$(".hall_manage").css("display","none");
			$(".buy_content").css("display","block");
			$(".ticket_suss").css("display","none");
			$(".choice_date").css("display","none");
			$(".choice_seat").css("display","none");
			$(".buy_movie").css("display","block");
			
			
		})
		$("#con_nav3").click(function(){
			$(".r_content").css("display","none");
			$(".buy_content").css("display","none");
			$(".hall_manage").css("display","none");
			$(".movie_manage").css("display","block");
		})
		$("#con_nav4").click(function(){
			$(".r_content").css("display","none");
			$(".buy_content").css("display","none");
			$(".movie_manage").css("display","none");
			$(".hall_manage").css("display","block");
		})
		$(".con_nav").click(function(){
			$(".map_bt").css("background-color","#b9dea0");
			$(".map_bt").attr("disabled");
			$("#counter").html(i=0);
			$("#total").html(i=0);
			i= 1;
		})
		
		//演出厅管理
		
		
})