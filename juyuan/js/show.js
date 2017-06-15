$(function(){
	$(".nav_ticket").click(function(){
		$(".con_ticket").show().siblings().hide();	
	})
	$(".nav_film").click(function(){
		$(".con_film").show().siblings().hide();
	})
	$(".nav_studio").click(function(){
		$(".con_studio").show().siblings().hide();
		showStudio();
	})
	$(".nav_sale").click(function(){
		$(".con_sale").show().siblings().hide();
	})
	$(".nav_user").click(function(){
		$(".con_user").show().siblings().hide();
	})
	
	//剧目
	
	$(".f_film_oper").click(function(){
		$(this).css("background","#269ABC").siblings().css("background","#008000");
		$(".f_show_oper").show().siblings().hide();
		$(".show_oper_table").show();
		$(".show_play_table").hide();
	})
	$(".f_film_play").click(function(){
		$(this).css("background","#269ABC").siblings().css("background","#008000");
		$(".f_show_play").show().siblings().hide();
		$(".show_play_table").show();
		$(".show_oper_table").hide();
		
	})
	
})
function showStudio(){
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementsByClassName("studio_table")[0].innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/showStudio.php",true);
	xml.send();
	
}
