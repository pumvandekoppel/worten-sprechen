var i = 1;
var wort = $("img").attr("id");
var autoLimit = 42;
var hundLimit = 2;

$(".image").on("click","img", function() {
	i++;
	if (i % j > 0) {
		i = i % autoLimit;
		var imageAddress = "../images/" + wort + "/" + wort + "-" + i + ".png";
		$("#"+ wort).attr("src", imageAddress);
		console.log($("#" + wort).attr("src"));
	}
	else {
		var imageAddress = "../images/" + wort + "/" + wort + "-" + j + ".png";
		$("#"+ wort).attr("src",imageAddress);
		console.log($("#" + wort).attr("src"));
	}
}
);


