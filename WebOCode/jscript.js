//Javascript file

	var btn = document.getElementsByClassName("btn");
	var gallery = document.getElementById("gallery");

	var images = new Array(
		"images/s1.jpg",
		"images/img.jpg",
		"images/s2.jpg",
		"images/s3.jpg",
		);

	for(let i=0; i<btn.length; i++)
	{
		btn[i].onclick = function()
		{
			gallery.src = images[i];
			let current = document.getElementsByClassName("active");
			current[0].className= current[0].className.replace("active","");
			this.className += " active";
		};
	}


	
var btnn = document.getElementsByClassName("btnn");
	var gallery1 = document.getElementById("gallery1");

	var images1 = new Array(
		"images/appl1.jpg",
		"images/appl2.jpg",
		"images/appl3.jpeg",
		"images/appl4.jpg",
		);

	for(let i=0; i<btnn.length; i++)
	{
		btnn[i].onclick = function()
		{
			gallery1.src = images1[i];
			let current1 = document.getElementsByClassName("active1");
			current1[0].className= current1[0].className.replace("active1","");
			this.className += " active1";
		};
	}
	
