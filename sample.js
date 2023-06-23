function nirfunction() {
	// body...
	document.getElementById('test1').innerHTML="Ram Ram Bhai ";
}

function mychange(){

	let name=document.getElementById("test2").value;
	

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