var i = 1;
var wort = $("img").attr("id");
const limit = {
	auto: 45,
	laufen: 842,
	baum: 2,
	hund: 2,
	trettroller: 7,
	quadrat: 2,
	foto: 12,
	kugel: 3,
	strauch: 8,
	verbot: 13,
	penny: 2,
	mobel: 9,
	blumen: 1,
	fleck: 4,
	zahlen: 50,
	schachspiel: 3,
	graffiti: 11,
	staude: 5
};

$(".image").on("hover", "img", function() {
}
);

$(".image").on("click","img", function() {
	i++;
	if (i % limit[wort] > 0) {
		i = i % limit[wort];
		var imageAddress = "../images/" + wort + "/" + wort + "-" + i + ".jpg";
		$("#"+ wort).attr("src", imageAddress);
		console.log($("#" + wort).attr("src"));
	}
	else {
		var imageAddress = "../images/" + wort + "/" + wort + "-" + limit[wort] + ".jpg";
		$("#"+ wort).attr("src",imageAddress);
		console.log($("#" + wort).attr("src"));
	}
}
);


