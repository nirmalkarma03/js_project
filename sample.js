function nirfunction() {
	// body...
	document.getElementById('test1').innerHTML="Ram Ram Bhai ";
}

function mychange(){

	let name=document.getElementById("test2").value;
	
		//let name=$("#test2")[0].innerHTML;
		//let name=names[0].innerHTML;
	if(name=="gajendra"){
		document.getElementById("details").innerHTML="name - gajendra  & joining date is :05/01/2023";
	}
	else if(name=="dhanraj"){
		document.getElementById("details").innerHTML="name - dhanraj & joining date is :05/01/2023";
	}
	else if(name=="hemlata"){
		document.getElementById("details").innerHTML="name - hemlata & joining date is :15/06/2023";
	}
	else if (name=="nirmal") {
		document.getElementById("details").innerHTML="name - nirmal & joining date is :15/06/2023";
	}
	else {
		document.getElementById("details").innerHTML="name - ajay & joining date is :15/06/2023";
	}
}


$(document).ready(function(){
  //debugger
var names=$("h3");
let text="";
for(let x=0;x<names.length;x++){
//	debugger
	text+= names[x].innerHTML+" <br>";
}

//debugger
//document.getElementById("test3").innerHTML=text;
//$("test3")[0].innerHTML=text;
//$("test3").text("------"+text);
$("#test3").text(text);
$("#test3").innerHTML=text;
$("#test3").css("font-size","30px");
//debugger
}
);

$(document).ready(function(){
//debugger
var melemet=$("#test4");
var x=$("#test4").text();
melemet.text("Shayam Shyam");
//melemet.textContent="Shyam Shyam ";
$("#test5").text(x);
//debugger

});

$(document).ready(function(){
	car =new Object();
	car.name="Thar";
	car.colot="Black";

	$("button").click(function(){
		$("#test6").text($.param(car));
	});
});

/*
$(document).ready(function(){

 $(document).ajaxStart(function(){
 	$("#wait").css("display","block");
 });

 $(document).ajaxComplete(function(){
 	$("#wait").css("display","none");
 });

 $("button").click(function(){
 	$("#txt").load("file1.txt");
 });


});
*/

$(document).ready(function(){
  $(document).ajaxStart(function(){
    $("img#img-ajx").show()
  });

  $(document).ajaxComplete(function(){
    $("img#img-ajx").hide()
  });
});

$(document).ready(function(){
	$("button").click(function(){
		$("div#test7").load("/home/fittonia/Nirmal/karma/js_project/file1.txt");
	});
});

