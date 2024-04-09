window.addEventListener("load", function() {
	alert(document.querySelectorAll('figcaption')[1].innerHTML);
});

document.querySelectorAll('figure')[0].addEventListener("mouseover", function() {
    console.log("working");
});