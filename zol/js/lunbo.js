function Lunbo(){
	this.index = 0;
	this.dom = {};
	this.len = 0;
	this.timer = null;
	this.init();
}
Lunbo.prototype.init = function(){
	var self = this;
	this.initdom();
	this.initSlide();
	this.timer = setInterval(function(){
		self.inmychange();
	},3000);
	
}
Lunbo.prototype.initdom =function(){
	var dom = this.dom;
	var self = this;
	dom.li = $(".lunbo li");

}
Lunbo.prototype.initSlide = function(){
	var dom = this.dom;
	this.len = dom.li.size();
}

Lunbo.prototype.inmychange = function(){
	var dom = this.dom;
	this.index++;
	if(this.index == this.len){
		this.index=0;
	}
	dom.li.eq(this.index).show();
	dom.li.eq(this.index).siblings().hide();
	dom.li.eq(this.index).siblings().css("left","-1000px");

}


$(function() {
   var b = new Lunbo();
   b.init();
})