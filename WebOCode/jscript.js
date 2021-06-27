
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
	
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

"use strict";

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

"use strict";
productScrolln();

function productScrolln() {
  let slidern = document.getElementById("slidern");
  let nextn = document.getElementsByClassName("pro-nextn");
  let prevn = document.getElementsByClassName("pro-prevn");
  let sliden = document.getElementById("sliden");
  let itemn = document.getElementById("sliden");

  for (let i = 0; i < nextn.length; i++) {
    //refer elements by class name

    let positionn = 0; //slider postion

    prevn[i].addEventListener("click", function() {
      //click previos button
      if (positionn > 0) {
        //avoid slide left beyond the first item
        positionn -= 1;
        translateXn(positionn); //translate items
      }
    });

    nextn[i].addEventListener("click", function() {
      if (positionn >= 0 && positionn < hiddenItemsn()) {
        //avoid slide right beyond the last item
        positionn += 1;
        translateXn(positionn); //translate items
      }
    });
  }

  function hiddenItemsn() {
    //get hidden items
    let itemsn = getCountn(itemn, false);
    let visibleItemsn = slidern.offsetWidth / 210;
    return itemsn - Math.ceil(visibleItemsn);
  }
}

function translateXn(positionn) {
  //translate items
  sliden.style.left = positionn * -210 + "px";
}

function getCountn(parent, getChildrensChildrenn) {
  //count no of items
  let relevantChildrenn = 0;
  let childrenn = parent.childNodes.length;
  for (let i = 0; i < childrenn; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildrenn)
        relevantChildrenn += getCountn(parent.childNodes[i], true);
      relevantChildrenn++;
    }
  }
  return relevantChildrenn;
}
