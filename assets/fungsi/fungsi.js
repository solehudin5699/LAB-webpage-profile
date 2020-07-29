const cacheKey="NUMBER";
if (typeof(Storage)!=="undefined"){
	if(localStorage.getItem(cacheKey)==="undefined"){
		localStorage.setItem(cacheKey, 0);
	}
	darkmodefunct();
	const tombolDarkMode=document.querySelector("#darkmode");
	tombolDarkMode.addEventListener('click',ubahmode);	
	}
else{
	alert("Browser tidak mendukung WebStorage")
}

function darkmodefunct(){
	let angka=localStorage.getItem(cacheKey);
	let x=document.getElementById("darkmode");
	let y=x.getElementsByTagName("img");
	let gambarhead=document.querySelector("header").querySelector("img");
	gambarhead.setAttribute("src","assets/gambar/header.png");
	gambarhead.setAttribute("height","100%");
	if(angka%2==0){
		document.querySelector("body").style.backgroundColor="#B0E0E6";
		document.querySelector("header").style.backgroundColor="#1E90FF";
		document.querySelector("nav").style.backgroundColor="#0000CD";
		document.querySelector("main").style.backgroundColor="#B0E0E6";
		let article=document.querySelectorAll("article");
		for(let i=0;i<article.length;i++){
			article[i].style.backgroundColor="#1E90FF";
		}
		let kotakinfo=document.querySelectorAll("#kotak");
		for(let j=0;j<kotakinfo.length;j++){
			kotakinfo[j].style.backgroundColor="#1E90FF";
		}
		document.querySelector("footer").style.backgroundColor="#0000CD";
		y[0].setAttribute("src","assets/gambar/iconbulan.png");
		y[0].setAttribute("title","Beralih ke mode Gelap");
		
	}
	else if(angka%2==1){
		document.querySelector("body").style.backgroundColor="#C0C0C0";
		document.querySelector("header").style.backgroundColor="#808080";
		document.querySelector("nav").style.backgroundColor="#2F4F4F";
		document.querySelector("main").style.backgroundColor="#C0C0C0";
		let article=document.querySelectorAll("article");
		for(let i=0;i<article.length;i++){
			article[i].style.backgroundColor="#808080";
		}
		let kotakinfo=document.querySelectorAll("#kotak");
		for(let j=0;j<kotakinfo.length;j++){
			kotakinfo[j].style.backgroundColor="#808080";
		}
		document.querySelector("footer").style.backgroundColor="#2F4F4F";
		y[0].setAttribute("src","assets/gambar/iconlampu.png");
		y[0].setAttribute("title","Beralih ke mode Normal");
		
	}
}
function ubahmode(){
	let n=localStorage.getItem(cacheKey);
	n++;
	localStorage.setItem(cacheKey, n);
	darkmodefunct();
}

let namahari=new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
let namabulan=new Array ("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
function waktu() {
    let kalender=new Date();
    let tahun=kalender.getYear();
    if (tahun < 1000){
	tahun+=1900}
    let hari=kalender.getDay();
    let bulan=kalender.getMonth();
    let tgl=kalender.getDate();
    if (tgl<10){
	tgl="0"+tgl;}
    let jam=kalender.getHours();
    let menit=kalender.getMinutes();
    let detik=kalender.getSeconds();
    let zona="WIB";
    if(jam<=9){
	jam="0"+jam;}
    if (menit<=9){
	menit="0"+menit;}
    if (detik<=9){
	detik="0"+detik;}
    
    let kotakwaktu=namahari[hari]+", "+tgl+" "+namabulan[bulan]+" "+tahun+"<br> "+jam+":"+menit+":"+detik+" "+zona;
    document.getElementById("kotakwaktu").innerHTML=kotakwaktu;
}

window.onload=function loading(){
  if(document.getElementById("kotakwaktu"))
  {
  setInterval("waktu()",1);
  }
}