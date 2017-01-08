document.addEventListener('DOMContentLoaded', function(){

	function compile(){

		var html = document.getElementById("html"); 
		var css = document.getElementById("css"); 
		var js = document.getElementById("js"); 
		var code = document.getElementById("code").contentWindow.document; 

		var run  = function(){
			var test = document.getElementsByTagName('body')[0];
			var num1 = Math.floor(Math.random()*255); 
			var num2 = Math.floor(Math.random()*255); 
			var num3 = Math.floor(Math.random()*255); 
			var color = "rgb(" + num1 + "," + num2 +"," + num3 + ")";

			test.style.backgroundColor = color;
				code.open(); 
				code.writeln(html.value + "<style>"+css.value+"</style>" + "<script>" + js.value + "</script>"); 
				code.close(); 
			}
			document.body.onkeyup = run; 
			//window.setInterval(run, 100);  
	}
	compile();

	
}); 