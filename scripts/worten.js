var i = 1;
var wort = $("img").attr("id");

var limit;
if (wort == "auto") {
	limit = 42;
}
else if (wort == "hund") {
	limit = 2;
}

$(".image").on("click","img", function() {
	i++;
	if (i % limit > 0) {
		i = i % limit;
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


