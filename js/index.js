//页面定位
function gundong(ids) {
	document.querySelector("#" + ids).scrollIntoView(true);
}


function ber(a) {

	var idnavbar = document.getElementById('ulnavbar');
	var idnavbarmulti = "";
	for (var i = 0; i < navigatin[0].name.length; i++) {
		console.log(navigatin[0].name[i]);
		if (a == '1') {
			idnavbar.innerHTML += "<li class='linavbar' id='linavbarid'>" + navigatin[0].name[i] + "</li>";
		} //if1 导航条

		if (a == '2') {

			idnavbarmulti += "<ul class='ulnavbar-multi'>";
			for (var j = 0; j < navigatin[0].names[i].length; j++) {
				console.log(navigatin[0].names[i][j]);
				idnavbarmulti += "<li class='linavbarmulti linavbarmulti" + i + "'>" + navigatin[0].names[i][j] +
					"</li>";
			}
			idnavbarmulti += "<br /></ul>";

		} //if2 导航条二级窗口
	} //i for 
	if (a == 2) {
		document.getElementById('navbar-multi').innerHTML = idnavbarmulti;
	}
} //函数ber

function shuj(data) {
	var idfenl = document.getElementById('fenl');
	var data1 = '人类';
	console.log(version);
	idfenl.innerHTML += "<h3>2.0</h3>";
	for (i = 0; i < version["2.0"].length; i++) {
			idfenl.innerHTML += '<button onclick="xq(\''+version["2.0"][i].name+'\',\'2.0\')"><li>' + version["2.0"][i].name + '</li></button>';
	}
	idfenl.innerHTML += "<h3>1.8</h3>";
	for (i = 0; i < version["1.8"].length; i++) {
			idfenl.innerHTML += '<button onclick="xq(\''+version["1.8"][i].name+'\',\'1.8\')"><li>' + version["1.8"][i].name + '</li></button>';
	}
}

function kg(uss, px) {
	document.getElementById(uss).style.width = px;
}

function xq(nam, banben) {
	let img = "";
	let name;
	if (nam == "this") {
		name = document.getElementById('xqname').innerHTML;
	} else {
		name = nam;
	}


	if (banben == "2.0") {
		for (i = 0; i < version["2.0"].length; i++) {
			if (version["2.0"][i].name == name) {
				console.log(version["2.0"][i].name);
				document.getElementById('xqname').innerHTML = version["2.0"][i].name;
				document.getElementById('xqcontent').innerHTML = version["2.0"][i].content;
				document.getElementById('xqattribute').innerHTML = version["2.0"][i].attribute.replace("", "<br />");
				
				if(version["2.0"][i].image){
				for (var j = 0; j < version["2.0"][i].image.length; j++) {
					img += "<img src='images/" + version["2.0"][i].image[j] + "'>";
				}
				
				document.getElementById('xqimages').innerHTML = img;
				}else{
					document.getElementById('xqimages').innerHTML ="";
				}//检测是否有图片
			} //检测
		} //2.0的循环
	}//检测是否为2.0
	if (banben == "1.8") {
		for (i = 0; i < version["1.8"].length; i++) {
			if (version["1.8"][i].name == name) {
				console.log(version["1.8"][i].name);
				document.getElementById('xqname').innerHTML = version["1.8"][i].name;
				document.getElementById('xqcontent').innerHTML = version["1.8"][i].content;
				document.getElementById('xqattribute').innerHTML = version["1.8"][i].attribute.replace("", "<br />");
				
				if(version["1.8"][i].image){
				for (var j = 0; j < version["1.8"][i].image.length; j++) {
					img += "<img src='images/" + version["1.8"][i].image[j] + "'>";
				}
				document.getElementById('xqimages').innerHTML = img;
				}else{
					document.getElementById('xqimages').innerHTML ="";
				}//检测是否有图片
			} //检测
		} //1.8的循环
	}//检测是否为1.8
	if(document.documentElement.clientWidth < 1000){
		kg('xiangq','90%');
	}else{
		kg('xiangq','60%');
	}


}

document.addEventListener('mousedown',(e)=>{
			kg('xiangq','0px');
});
