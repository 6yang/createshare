window.onload =function(){
	var li1 = document.getElementsByClassName("li_login");
	var li2 = document.getElementsByClassName("li_registered");
	var login = document.getElementsByClassName("login");
	var registered = document.getElementsByClassName("registered");
	
	li1[0].onclick = function(){
		li2[0].style.borderBottom = "10px solid white";
		li1[0].style.borderBottom = "10px solid forestgreen";
		registered[0].style.display = "none";
		login[0].style.display = "block";
	}
	li2[0].onclick = function(){
		li1[0].style.borderBottom = "10px solid white";
		li2[0].style.borderBottom = "10px solid forestgreen";
		login[0].style.display = "none";
		registered[0].style.display = "block";
		
	}
};
$(function(){
	
		$(".submit1").click(function(){
			var ln = $("input[name='l_name']").val();
			var lp = $("input[name='l_password']").val();
			var ls = $("input[name='l_admin']:checked").val();
			if(ln!=""&&lp!=""&&ls!=null){
				str =  "lnn="+ln+"&lpp="+lp+"&lss="+ls;
				if(window.XMLHttpRequest){
					var xml = new XMLHttpRequest();
				}
				xml.open("POST","pps/login.php",true); 
		    	xml.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
		    	xml.send(str);
				xml.onreadystatechange = function(){
					if(xml.readyState==4 && xml.status ==200){
						var data = xml.responseText;
//						
						if(data == 0){
							alert("用户名或者密码错误");
						}else if(data==1){
							$.cookie("uper",ls);
							window.location.href = 'index1.html';
						}
						else if(data ==2){
							alert("身份信息不正确");
						}
						

					}
				}
			
				
			}else{
				alert("用户名密码不能为空");
			}
			
		});
		
		$(".submit2").click(function(){
			var rn = $("input[name='r_name']").val();
			var rp = $("input[name='r_password']").val();
			var rs = $("input[name='r_admin']:checked").val();
			if(rn!=""&&rp!=""&&rs!=null){
				str =  "rnn="+rn+"&rpp="+rp+"&rss="+rs;
				if(window.XMLHttpRequest){
					var xml = new XMLHttpRequest();
				}
				xml.open("POST","pps/regg.php",true); 
		    	xml.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
		    	xml.send(str);
				xml.onreadystatechange = function(){
					if(xml.readyState==4 && xml.status ==200){
						var str = xml.responseText;
						alert(str);
					}
				}
			}else{
				alert("用户名密码和身份信息不能为空");
			}
			
		})	
	})
