var message="Your external javascript is connected";
console.log(message);

// $(".question").height($(".answer").height());

var q=document.getElementsByClassName("question");
var a=document.getElementsByClassName("answer");
if (q.height>=a.height){
	a.style.height==q.style.height;
}
else{
	q.style.height==a.style.height;
}