var a2 = 15;
var a3 = 64;
var a4 = 178;

var myCase = 11;

var count = 1;

var text2 = "Trúng 2 số:";
var text3 = "Trúng 3 số:";
var text4 = "Trúng 4 số:";

// var sum2 = a2*count;
// var sum3 = a2*count*3 + a3*count;
// var sum4 = a2*6*count + a3*3*count + a4;

var sumMoney = 0;

var inputSumMoney = document.querySelector("#sum-money");
var inputNumber = document.querySelector("#numberinput");
var result = document.querySelector("#form-message-success");
inputNumber.addEventListener('input', ()=>{
	count = inputNumber.value;
	sumMoney = count*11;
	inputSumMoney.value = 'Tổng tiền: ' + sumMoney +"k";

	var sum2 = a2*count;
	var sum3 = a2*count*3 + a3*count;
	var sum4 = a2*6*count + a3*4*count + a4;
	if(count > 0){
		result.style.setProperty('display', 'block');
		var myResultText = "Kết quả<br>" + text2 +" "+ sum2 + "k"
		 +"<br>"+ text3 +" " + sum3 + "k"
		 +"<br>"+ text4 +" " + sum4 + "k";

		var rule = "<br> Giải thích <br> - Trúng 1 giải 2 là "+a2+"k nhân với hệ số đã nhập (Hiện tại là: "+count+") = "+a2+"x"+count+" = "+sum2+"k"
		+"<br> - Trúng 1 giải 3 là đồng nghĩa cũng trúng 3 giải 2, 1 giải 3: "+a2+"x"+count+"x3"+ " + " + a3+"x"+count+"x1" + " = "+(sum3)+"k"
		+"<br> - Trúng 1 giải 4 là đồng nghĩa cũng trúng 6 giải 2, 4 giải 3, 1 giải 4: "+a2+"x"+count+"x6"+ " + " + a3+"x"+count+"x4" + " + " + a4+"x"+count+"x1" + " = "+(sum4)+"k"
		result.innerHTML = myResultText + rule;
	}else{
		result.style.setProperty('display', 'none')
		result.value = "";
	}
});