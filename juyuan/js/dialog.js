$(function(){
	var uper = $.cookie('uper');
	if(uper =="售票员"){
		$(".nav_ticket").show();
		$(".con_ticket").show();
		t_show_film_table();
	}else if(uper == "经理"){
		$(".nav_film").show();
		$(".nav_sale").show();
		$(".nav_studio").show();
		$(".con_film").show();
		f_show_list();
		
	}else if(uper == "管理员"){
		$(".nav_user").show();
		$(".con_user").show();
		$(".nav_user_oper").show();
		$(".show_user").show();
		get_userr();

			
	}
	$(".td").click(function(){
		$.cookie('uper',"");
		window.location.href = "index.html";
		
	})
	
	
	
	$(".add_studio").click(function(){
		show_add();
	});
	$(".drop_studio").click(function(){
		show_drop();
	})
	$(".oper_studio").click(function(){
		show_oper();
	})
	
	// 影片管理
	$(".nav_film").click(function(){
		f_show_list();
	})
	$(".f_film_oper_add").click(function(){
		f_show_add();
	})
	$(".f_film_oper_drop").click(function(){
		f_show_drop();
	})
	$(".f_film_oper_change").click(function(){
		f_show_change();
	})
	
	//演出计划管理
	$(".f_film_play_add").click(function(){
		f_add_plan();
	})
	$(".f_film_play_drop").click(function(){
		f_drop_plan();
	})
	$(".f_film_play_change").click(function(){
		f_change_plan();
	})
	
	
	//点击演出计划的时候 show 演出计划的表格
	$(".f_film_play").click(function(){
		f_show_plan_table();
	})
	
	//show出电影剧目
	
	
	$(".nav_ticket").click(function(){
		$(".ticket_showfilm").show().siblings().hide();
	})
	$(".t_back_bt").click(function(){
		$(".ticket_showfilm").show().siblings().hide();
	})
	
	// 从选座位的界面返回到选择演出时间的界面
	$(".char_back_bt").click(function(){
		if(window.location.reload()){
		$(".ticket_success").hide();
		$(".ticket_selectseats").show();
		}
	})
	$(".nav_user").click(function(){
		get_userr();
	})
	
})


function show_add(){
		$("#add_studio_dialog").dialog({ 
                    height:420,  
                    width: 400,  
                    // 模态开启  
                    modal: true,  
                    // 是否可拖拽  
                    draggable: false,  
                    // 最小宽度  
                    minWidth: 300,  
                    buttons: {  
                        "确认添加": function() {
							add_aj_stu();
							alert("添加成功");  
                            $(this).dialog("close");  
                        }  
                    }  
                });  
	}

//添加演出厅
function add_aj_stu(){
	var stu_id = document.getElementsByClassName("stu_id")[0].value;
	var stu_name = document.getElementsByClassName("stu_name")[0].value;
	var stu_row = document.getElementsByClassName("stu_row")[0].value;
	var stu_col = document.getElementsByClassName("stu_col")[0].value;
	var stu_beizhu = document.getElementsByClassName("stu_beizhu")[0].value;
	var stu_message = "stu_id="+stu_id+"&stu_name="+stu_name+"&stu_row="+stu_row+"&stu_col="+stu_col+"&stu_beizhu="+stu_beizhu; 
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
	xml.open("GET","pps/add_studio.php?"+stu_message,true);
	xml.send();
}

//删除演出厅
function show_drop(){
		$("#drop_studio_dialog").dialog({ 
                    height:200,  
                    width: 400,  
                    // 模态开启  
                    modal: true,  
                    // 是否可拖拽  
                    draggable: false,  
                    // 最小宽度  
                    minWidth: 300,  
                    buttons: {  
                        "确认删除": function() {
                        	drop_oper_stu();
							alert("删除成功");
                            $(this).dialog("close");  
                        }  
                    }  
                });  
                drop_aj_stu();
	}
function drop_aj_stu(){
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementById("drop_studio_dialog").innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/drop_stu_list.php",true);
	xml.send();
}

function drop_oper_stu(){
	var drop = document.getElementById("drop_studio_dialog");
	var drop_stu_number = drop.getElementsByTagName("select")[0].value;
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
	xml.open("GET","pps/drop_stu_show.php?num="+drop_stu_number,true);
	xml.send();
}
//修改演出厅
function show_oper(){
		$("#oper_studio_dialog").dialog({ 
                    height:420,  
                    width: 400,  
                    // 模态开启  
                    modal: true,  
                    // 是否可拖拽  
                    draggable: false,  
                    // 最小宽度  
                    minWidth: 300,  
                    buttons: {  
                        "确认修改": function() {
                        	oper_show_studio();
							alert("修改成功");  
                            $(this).dialog("close");  
                        }  
                    }
        });  
        oper_aj_stu();
	}
function oper_aj_stu(){
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementById("oper_id").innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/drop_stu_list.php",true);
	xml.send();
}
function oper_show_studio(){
	var oper = document.getElementById("oper_id");
	var oper_id = oper.getElementsByTagName("select")[0].value;
	var stu_name = document.getElementsByClassName("oper_stu_name")[0].value;
	var stu_row = document.getElementsByClassName("oper_stu_row")[0].value;
	var stu_col = document.getElementsByClassName("oper_stu_col")[0].value;
	var stu_beizhu = document.getElementsByClassName("oper_stu_beizhu")[0].value;
	var stu_message = "stu_id="+oper_id+"&stu_name="+stu_name+"&stu_row="+stu_row+"&stu_col="+stu_col+"&stu_beizhu="+stu_beizhu; 
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
	xml.open("GET","pps/oper_list.php?"+stu_message,true);
	xml.send();
	
}


//影片管理
function f_show_add(){
		$("#f_add_film").dialog({ 
                    height:560,  
                    width: 400,  
                    // 模态开启  
                    modal: true,  
                    // 是否可拖拽  
                    draggable: false,  
                    // 最小宽度  
                    minWidth: 300,
                    buttons: {  
                        "确认添加": function() {
                        	f_add_aj();
							alert("添加成功");  
                            $(this).dialog("close");  
                        }  
                    }  
                });  
	}
function f_add_aj(){
	var f_a_id = document.getElementsByClassName("f_a_id")[0].value;
	var f_a_type = document.getElementsByClassName("f_a_type")[0].value;
	var f_a_lang = document.getElementsByClassName("f_a_lang")[0].value;
	var f_a_name = document.getElementsByClassName("f_a_name")[0].value;
	var f_a_intr = document.getElementsByClassName("f_a_intr")[0].value;
	var f_a_length = document.getElementsByClassName("f_a_length")[0].value;
	var f_a_price = document.getElementsByClassName("f_a_price")[0].value;
	var f_a_status = document.getElementsByClassName("f_a_status")[0].value;
	var arr = document.getElementsByClassName("f_a_img")[0].value.split("\\");
	var f_a_img = arr[arr.length-1];
	
	var mes = "id="+f_a_id+"&type="+f_a_type+"&lang="+f_a_lang+"&name="+f_a_name+"&intr="+f_a_intr+"&length="+f_a_length+"&price="+f_a_price+"&status="+f_a_status+"&img="+f_a_img;
	
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementsByClassName("show_oper_table")[0].innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/f_add.php?"+mes,true);
	xml.send();
}

function f_show_list(){
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementsByClassName("show_oper_table")[0].innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/f_show_list.php",true);
	xml.send();
}

function f_show_drop(){
		$("#f_drop_film").dialog({ 
                    height:220,  
                    width: 400,  
                    // 模态开启  
                    modal: true,  
                    // 是否可拖拽  
                    draggable: false,  
                    // 最小宽度  
                    minWidth: 300,
                    buttons: {  
                        "确认删除": function() {
                        	f_aj_drop_oper();
							alert("删除成功");
                            $(this).dialog("close");  
                        }  
                    }  
                }); 
            f_aj_drop();
	}
function f_aj_drop(){
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementById("f_drop_film").innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/f_drop.php",true);
	xml.send();
}
function f_aj_drop_oper(){
	var drop = document.getElementById("f_drop_film");
	var drop_name = drop.getElementsByTagName("select")[0].value;
	
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementsByClassName("show_oper_table")[0].innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/f_drop_show.php?name="+drop_name,true);
	xml.send();
}

function f_show_change(){
		$("#f_change_film").dialog({ 
                    height:490,  
                    width: 400,  
                    // 模态开启  
                    modal: true,  
                    // 是否可拖拽  
                    draggable: false,  
                    // 最小宽度  
                    minWidth: 300,
                    buttons: {  
                        "确认修改": function() {
                        	f_change_o();
							alert("修改成功");
                            $(this).dialog("close");  
                        }  
                    }  
                }); 
            f_aj_change();
	}
function f_aj_change(){
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementById("f_change_film_select").innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/f_drop.php",true);
	xml.send();
}
function f_change_o(){
	var change = document.getElementById("f_change_film_select");
	var f_a_name = change.getElementsByTagName("select")[0].value;
	var f_a_type = document.getElementsByClassName("f_a_type_o")[0].value;
	var f_a_lang = document.getElementsByClassName("f_a_lang_o")[0].value;
	var f_a_intr = document.getElementsByClassName("f_a_intr_o")[0].value;
	var f_a_length = document.getElementsByClassName("f_a_length_o")[0].value;
	var f_a_price = document.getElementsByClassName("f_a_price_o")[0].value;
	var f_a_status = document.getElementsByClassName("f_a_status_o")[0].value;
	var arr = document.getElementsByClassName("f_a_img_o")[0].value.split("\\");
	var f_a_img = arr[arr.length-1];
	
	var mes ="type="+f_a_type+"&lang="+f_a_lang+"&name="+f_a_name+"&intr="+f_a_intr+"&length="+f_a_length+"&price="+f_a_price+"&status="+f_a_status+"&img="+f_a_img;
	
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementsByClassName("show_oper_table")[0].innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/f_change.php?"+mes,true);
	xml.send();
}


//演出计划管理

function f_add_plan(){   //添加演出计划
		$("#f_add_plan").dialog({
                    height:420,  
                    width: 400,  
                    // 模态开启  
                    modal: true,  
                    // 是否可拖拽  
                    draggable: false,  
                    // 最小宽度  
                    minWidth: 300,  
                    buttons: {  
                        "确认添加": function() {
                        	f_add_plan_oper();
							alert("添加成功");  
                            $(this).dialog("close");  
                        }  
                    }  
             }); 
    f_add_select_studio();         
     
	}

function f_drop_plan(){           			//删除演出计划
		$("#f_drop_plan").dialog({ 
                    height:200,  
                    width: 400,  
                    // 模态开启  
                    modal: true,  
                    // 是否可拖拽  
                    draggable: false,  
                    // 最小宽度  
                    minWidth: 300,  
                    buttons: {  
                        "确认删除": function() {
                        	f_drop_plan_oper();
							alert("删除成功");  
                            $(this).dialog("close");  
                        }  
                    }  
                });
         f_drop_plan_select();
	}

function f_change_plan(){           			//修改演出计划
		$("#f_change_plan").dialog({ 
                    height:400,  
                    width: 400,  
                    // 模态开启  
                    modal: true,  
                    // 是否可拖拽  
                    draggable: false,  
                    // 最小宽度  
                    minWidth: 300,  
                    buttons: {  
                        "确认修改": function() {
                        	f_change_plan_oper();
							alert("修改成功");  
                            $(this).dialog("close");  
                        }  
                    }  
                }); 
        f_change_plan_select();        
}
function f_add_select_studio(){   //获取演出厅id  和  电影名称
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementById("f_add_select_studio").innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/f_play_select.php",true);
	xml.send();
}
function f_show_plan_table(){   // 点击演出计划的时候show 出演出计划的table
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementsByClassName("show_play_table")[0].innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/f_show_plan_table.php",true);
	xml.send();
}

function f_add_plan_oper(){   // 演出计划的操作
	var studio = document.getElementById("f_add_select_studio");
	var studio_id = studio.getElementsByTagName("select")[0].value;
	var sched_id = document.getElementsByClassName("f_a_p_id")[0].value;
	var play_name= studio.getElementsByTagName("select")[1].value;
	var sched_time = document.getElementsByClassName("f_a_p_time")[0].value;
	var sched_price = document.getElementsByClassName("f_a_p_price")[0].value;
	var mes = "stu_id="+studio_id+"&sch_id="+sched_id+"&play_name="+play_name+"&sch_time="+
	sched_time+"&sch_price="+sched_price;
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			f_show_plan_table();
		}
	}
	xml.open("GET","pps/f_add_plan_oper.php?"+mes,true);
	xml.send();
	
}

function f_drop_plan_select(){    //选择删除演出计划的ID
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementById("f_drop_plan").innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/f_drop_paln_select.php",true);
	xml.send();
}
function f_drop_plan_oper(){       //删除演出计划的操作
	var drop = document.getElementById("f_drop_plan");
	var id = drop.getElementsByTagName("select")[0].value;
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			f_show_plan_table();
		}
	}
	xml.open("GET","pps/f_drop_plan_oper.php?id="+id,true);
	xml.send();
}


function f_change_plan_select(){     //选择修改演出计划的ID
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementById("f_change_select").innerHTML = xml.responseText;
		}
	}
	xml.open("GET","pps/f_change_plan_select.php",true);
	xml.send();
}

function f_change_plan_oper(){    //修改演出计划的 操作
	var box = document.getElementById("f_change_select");
	var sched_id = box.getElementsByTagName("select")[0].value;
	var studio_id = box.getElementsByTagName("select")[1].value;
	var play_id = box.getElementsByTagName("select")[2].value;
	var sched_time = document.getElementsByClassName("f_c_p_time")[0].value;
	var sched_price = document.getElementsByClassName("f_c_p_price")[0].value;
	var mes = "stu_id="+studio_id+"&sch_id="+sched_id+"&play_id="+play_id+"&sch_time="+
	sched_time+"&sch_price="+sched_price;
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			f_show_plan_table();
		}
	}
	xml.open("GET","pps/f_change_plan_oper.php?"+mes,true);
	xml.send();
}


function t_show_film_table(){  //获得显示电影的
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState==4 && xml.status ==200){
			document.getElementsByClassName("t_show_film_table")[0].innerHTML = xml.responseText;
			find_bt();	
		}
	}
	xml.open("GET","pps/ticket/f_show_film_table.php",true);
	xml.send();
}
function find_bt(){     // 点击购票以后弹出 购票选择选择演出时间
	var box = document.getElementsByClassName("t_show_film_table")[0];
	var box_length = box.getElementsByTagName("div").length;
	var film_box = box.getElementsByTagName("div");
	for(var i  = 0 ;i<box_length;i++){
		film_box[i].getElementsByTagName("a")[0].onclick = function(){
			$(".ticket_showfilm").hide();
			$(".ticket_selectseats").show();
			var name = $(this).siblings("span").html();
			var film_name_p = document.getElementsByClassName("t_plan_name")[0];
			film_name_p.getElementsByTagName("a")[0].innerHTML = name;
			// 向后台发送电影名称以获取此电影的演出计划
			if(window.XMLHttpRequest){
				xml = new XMLHttpRequest();
			}else{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xml.onreadystatechange = function(){
				if(xml.readyState==4 && xml.status ==200){
					document.getElementsByClassName("t_show_plan_table")[0].innerHTML = xml.responseText;
					buy_ticket_bt();
				}
			}
			xml.open("GET","pps/ticket/t_show_plan_list.php?name="+name,true);
			xml.send();
			
		}
	}
}
function buy_ticket_bt(){  //选完场次以后购票
	var box = document.getElementsByClassName("t_show_plan_table")[0];
	var table = box.getElementsByTagName("table")[0];
	var data = [];
	for(var i =0;i<table.rows.length;i++){
		for(var j = 0 ; j <table.rows[i].cells.length;j++){
			var bt = table.rows[i].cells[5];
			bt.onclick = function(){
				var price = $(this).prev();
				var stu_id = price.prev();
				var sched_time=  stu_id.prev();
				var name =  sched_time.prev();
				var sched_id = name.prev();
				var stu_id_number =parseInt(stu_id.html()); 
				var name_value = name.html();
				var time_value = sched_time.html();
				var price_value = price.html();
				var sched_id_value = sched_id.html();
				$(".ticket_selectseats").hide();
				$(".ticket_success").show();
				var  char_film_name = document.getElementsByClassName("char_film_name")[0];
				char_film_name.getElementsByTagName("a")[0].innerHTML = name_value;
				
				// 向购票列表添加影片信息
				document.getElementsByClassName("c_film_name")[0].innerHTML = "电影："+ name_value;
				document.getElementsByClassName("c_film_time")[0].innerHTML = "时间："+time_value;
				
				//向后台发送票务数据
				if(window.XMLHttpRequest){
					xml = new XMLHttpRequest();
				}else{
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				xml.onreadystatechange = function(){
					if(xml.readyState==4 && xml.status ==200){
						var string1 = xml.responseText;
						var arr = string1.split("-");
						document.getElementsByClassName("c_film_studio")[0].innerHTML = "演出厅："+stu_id_number+"号演出厅 ";
						document.getElementsByClassName("c_film_price")[0].innerHTML = "票价："+ price_value +"￥/张";
						document.getElementsByClassName("c_film_price_sum")[0].innerHTML = "合计："+ 0 +"￥"; 
						set_seat(arr[0],arr[1],price_value,sched_id_value);
						
					}
				}
				xml.open("GET","pps/ticket/t_get_col_row.php?studio_id="+stu_id_number,true);
				xml.send();
			}
		}
	}
}
function set_seat(row,col,price,sched_id){
	var map = [];
	var str = sched_id;
	var unarr = [];
	var arrr;
	var row_col_response;
	var row_col;
	var $cart = $(".c_film_row_col");
	for(var i = 0;i < row;i++){
		map[i] = "";
		for(var j = 0;j < col;j++){
			map[i]+="b";
		}
	}
	if(window.XMLHttpRequest){
				xml = new XMLHttpRequest();
			}else{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
			xml.onreadystatechange = function(){
				if(xml.readyState==4 && xml.status ==200){
					row_col_response = xml.responseText;
					row_col = row_col_response.split("+");
//					console.log(row_col);
					ccc(row_col);
				}
			}
			xml.open("GET","pps/ticket/s_get_chushi.php?sch="+sched_id,true);
			xml.send();
			
			function ccc(row_col){
				sc.get(row_col).status('unavailable');
			}
	var sc = $(".set_seat").seatCharts({
							map,
							legend : { //定义图例 
					        node : $('#char_tip'), 
					        items : [ 
					                [ 'a', 'available',   '可选座' ], 
					                [ 'a', 'unavailable', '已售出'] 
					            ]                     
					        }, 
							click: function () {
							if (this.status() == 'available') {
				
								$('<li>'+(this.settings.row+1)+'排'+this.settings.label+'座</li>') 
                   				.attr('id', 'cart-item-'+this.settings.id) 
                    			.data('seatId', this.settings.id) 
                   				.appendTo($cart);
                   				str += " "+this.settings.id ;
                   				
//                 				seatt_id += "\'"+ 
								var length = $(".c_film_row_col li").length;
								document.getElementsByClassName("c_film_price_sum")[0].innerHTML = "合计："+ length*price +"￥";                    
								return 'selected';
							} else if (this.status() == 'selected') {
								$('#cart-item-'+this.settings.id).remove().hide();
								var length1 = $(".c_film_row_col li").length;
								document.getElementsByClassName("c_film_price_sum")[0].innerHTML = "合计："+ length1*price +"￥";
								str = str.replace(" "+this.settings.id,"");
								return 'available';
							} else if (this.status() == 'unavailable') {
								//seat has been already booked
								return 'unavailable';
							} else {
								return this.style();
							}
						}
			});
			
			
//			sc.get(an).status('unavailable');

	$(".c_film_buy").click(function(){
		if(window.XMLHttpRequest){
			xml = new XMLHttpRequest();
		}else{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
		xml.onreadystatechange = function(){
			if(xml.readyState==4 && xml.status ==200){
				unarr = xml.responseText;
				arrr = unarr.split(",");
				unavai(arrr);
			}
		}
		xml.open("GET","pps/ticket/t_get_seat.php?str="+str,true);
		xml.send();

	})
	function unavai(unarr){
	
		sc.get(unarr).status('unavailable');
		alert("购票成功");
	}
 	
}
 	function get_userr(){
 		if(window.XMLHttpRequest){
			xml = new XMLHttpRequest();
		}else{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
		xml.onreadystatechange = function(){
			if(xml.readyState==4 && xml.status ==200){
				document.getElementsByClassName("show_user")[0].innerHTML = xml.responseText;
			}
		}
		xml.open("GET","pps/get_user.php",true);
		xml.send();
 	}
