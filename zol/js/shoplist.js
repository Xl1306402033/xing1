
var index = {
	dom :{},
	init:function(){
		this.initDom();
//		this.bindEvent();
		this.jz();
		this.scrll();
	},

	scrll:function(){
		var head = $("#head-wrap");
		$(window).scroll(function(){
			var scrollTop = $(this).scrollTop();
			if(scrollTop>=108){
			head.css({"position":"fixed","left":0,"top":0});
			}else{
				head.css("position","relative");
			}
		});
	},
	initDom:function(){
		
	},
	jz:function(){
		
		
		$.getJSON("json/shoplist.json",function(data){
			for(var i=0; i<data.length;i++){
				if((i+1)%2==0){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-1").append(s);
			}
		});
		
		
		
		$.getJSON("json/shoplist-1.json",function(data){
			for(var i=0; i<data.length;i++){
				if(i==2||i==5||i==8){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else if(i==6||i==7){
					var s=$('<li class="bott"><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-2").append(s);
			}
		});
		
		
		
		$.getJSON("json/shoplist-2.json",function(data){
			for(var i=0; i<data.length;i++){
				if(i==2||i==5||i==8){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else if(i==6||i==7){
					var s=$('<li class="bott"><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-3").append(s);
			}
		});
		
		
		
		$.getJSON("json/shoplist-3.json",function(data){
			for(var i=0; i<data.length;i++){
				if((i+1)%2==0){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-4").append(s);
			}
		});
		
		
		
		$.getJSON("json/shoplist-4.json",function(data){
			for(var i=0; i<data.length;i++){
				if(i==2||i==5){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-5").append(s);
			}
		});
		
		
		$.getJSON("json/shoplist-5.json",function(data){
			for(var i=0; i<data.length;i++){
				if((i+1)%2==0){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-6").append(s);
			}
		});
		
		$.getJSON("json/shoplist-6.json",function(data){
			for(var i=0; i<data.length;i++){
				if(i==2){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-7").append(s);
			}
		});
		
		
		$.getJSON("json/shoplist-7.json",function(data){
			for(var i=0; i<data.length;i++){
				if((i+1)%2==0){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-8").append(s);
			}
		});
		
		
		
		
		$.getJSON("json/shoplist-8.json",function(data){
			for(var i=0; i<data.length;i++){
				if(i==2){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"><p>'+data[i].listname+'<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-9").append(s);
			}
		});
		
		
		$.getJSON("json/shoplist-9.json",function(data){
			for(var i=0; i<data.length;i++){
				if((i+1)%2==0){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-10").append(s);
			}
		});
		
		$.getJSON("json/shoplist-10.json",function(data){
			for(var i=0; i<data.length;i++){
				if((i+1)%2==0){
					var s=$('<li class="ul-li"><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}else{
					var s=$('<li><img src="'+data[i].imgSrc+'"/><p>"'+data[i].listname+'"<span>元起</span><span class="col">'+data[i].price+'</span></p></li>');
				}
				
				$("#today-updata-11").append(s);
			}
		});
		
		$(".sames").on("click","li",function(){
			var pic = $(this).find('img').attr("src");
			var zhekou = $(this).find("p").find(".col").html();
			$.cookie("photo",pic,{ expires:7,path: '/'});
			$.cookie("zk",zhekou,{ expires:7,path: '/'});
			
			if($.cookie("name")&&$.cookie("name")!=null){
				var username=$.cookie("name");
						
				var arr = JSON.parse($.cookie(username));
				if (!arr) {
	                arr = [];
	            }
				var obj = {
	                "pic": $(this).find('img').attr("src"),
	                "zhekou": $(this).find("p").find(".col").html(),
	                "nubrr":1
	            }
				arr.push(obj);
				 $.cookie(username, JSON.stringify(arr), {
	                exprice: 7,
	                path: '/'
	            });
			}
			location.href = "myshop.html";
		});
		
		
		$(".right-nav a").click(function(){
			if($.cookie("name")&&$.cookie("name")!=null){
				location.href = "buycar.html";
			}
		});
	
		
		
		
		
		
	}
}
$(function(){
	index.init();
	$(".first").click(function(){
		console.log(123)
		location.href = "index.html";
	});
	
	if($.cookie("name")&&$.cookie("name")!=null){
		$("#reg-1").html($.cookie("name"));
		$('#login-1').html("退出");
		$("#reg-1").click(function(){
			location.href = "Myuser.html";
		});
		$('#login-1').click(function(){
			var username = $.cookie('name');
			$("#reg-1").html("注册有礼");
			$('#login-1').html("登录");
			$.cookie("name",null, {path: '/'});
			$.cookie(username,null,{path:"/"});
			$.cookie("pwd",null,{path:"/"});
			$.cookie("zk",null,{path:"/"});
			$.cookie("num",null,{path:"/"});
			$.cookie("photo",null,{path:"/"});
			$.cookie(("username"+username),null,{path:"/"});
			
		});
	}else{
		$("#reg-1").html("注册有礼");
		$('#login-1').html("登录");
		$("#reg-1").click(function(){
			location.href = "reg.html";
		});
		$('#login-1').click(function(){
			location.href = "login.html";
		});
	}
})
