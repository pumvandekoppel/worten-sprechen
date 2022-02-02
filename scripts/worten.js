var i = 1;
var wort = $("img").attr("id");
var j = 42;

$(".image").on("click","img", function() {
	i++;
	if (i % j > 0) {
		i = i % j;
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


