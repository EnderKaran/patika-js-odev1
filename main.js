let fullName = prompt("Lutfen Adinizi Giriniz: ")

let greeting = document.querySelector("#fullnamee")

greeting.innerHTML = `${greeting.innerHTML} <b style="color:orange">${fullName}</b>`




var bugun = new Date();
//gun
var formatliTarih=bugun.getDate();
//getmonth fonksiyonu ayları 0 ile 11 aralığında doner
//bu yuzden +1 biz ekliyoruz , 0 birinci ay yani
formatliTarih=formatliTarih+"."+Number(bugun.getMonth()+1);
//yıl
formatliTarih=formatliTarih+"."+bugun.getFullYear();
document.getElementById("formatliTarih").innerHTML = formatliTarih;


