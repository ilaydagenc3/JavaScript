// 03.01.2025

//DİYALOG KUTULARI
// alert
// prompt
// confirm

// console.log(window);

// alert("işleminize devam etmeden önce kaydetmelisiniz");

// promt(); kullanıcıdan değer alabiliyoruz...

// let isim = prompt("Adınızı giriniz");
// let yas = prompt("Yaşınızı giriniz");  

// console.log("isminiz:" + isim);
// console.log("yaşınız:" + yas);

// console.log(typeof isim);
// console.log(typeof yas);

// let sonuc = confirm("silmek istediğinize emin misiniz?");
// console.log(sonuc);

// KOŞUL YAPILARI   

// let not = 35;

// if (not >= 50) {
//     console.log("Geçtiniz , notunuz:" + not); 
// }else {
//     console.log("Kaldınız , notunuz:" + not);
// }

// let yas = Number(prompt("Yaşınız:"));
// console.log(typeof yas);
// let para = Number( prompt("Bütçeniz:"));

// if(yas >= 18 && para >= 3000){
//     alert ("ehilyet sınavına girebilirsiniz");
// }else {
//     alert("sınav için yeterli şartlarınız bulunmamaktadır");
// }

//  DERS ORTALMASI BULMA

//  vize1 %30 + vize2 %30 + final %40

// let vize1 = Number(prompt("Vize 1:"));
// let vize2 = Number(prompt("Vize 2:"));
// let final = Number(prompt("Final:"));


// let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

// if (ortalama >= 50) {
//     console.log("dersi geçtiniz , ortalamanız:" + ortalama);
// }else {
//     console.log("dersi geçemediniz , ortalamanız:" + ortalama);
// }

// else if yapısı

// let secilenYol = prompt("Hangi yolu seçmek istersiniz? (kısa , uzun)");

// if (secilenYol == "kısa") {
//     console.log("kısa yol seçildi");
// }
// else if (secilenYol == "uzun") {
//     console.log("uzun yol seçildi");
// }
// else {
//     console.log("geçersiz yol seçimi");
// }

//ÇOKLU IF KULLANMAK
 // kullanıcı adı boş olamaz
 // tc 11 hane olmalıdır

 // let isim = prompt("Adınızı giriniz:");
 // console.log(isim);

//  let ad = prompt("Adınızı giriniz:");
//  let tckn = prompt("TCKN giriniz:");

 //kontrolEt(ad,tckn);
//  kontrolEt2(ad,tckn);   

//  function kontrolEt(ad, tckn) {
//     if (ad != "") {
//         if (tckn.length == 11) {
//             console.log.log("Giriş başarılı");
//         }else {
//             console.log("TCKN 11 haneli olmalıdır");
//         }    
//     }else {
//         console.log("Ad boş olamaz");
//     }  
// }

// function kontrolEt2(ad, tckn) {
//     if (ad == ""){
//         console.log("lütfen isim alanını boş bırakmayın");
//         return;
//     }
//     if (tckn.length != 11) {
//         console.log("TCKN 11 haneli olmalıdır");
//         return;
//     }

//     console.log("Giriş başarılı");
// }

// Beden kitle endeksi hesaplama

// let kilo = Number(prompt("Kilonuz:"));

// let boy = Number(prompt("Boyunuz:"));

// let sonuc = kilo / (boy*boy);

// if (sonuc < 18.5) {
//     console.log("Zayıf" + sonuc);
// }
// else if (sonuc >= 18.5 && sonuc < 25) {
//     console.log("Normal" + sonuc);
// }
// else if (sonuc >= 25 && sonuc < 30) {
//     console.log("Fazla kilolu");
// }
// else if (sonuc >= 30 && sonuc < 40) {
//     console.log("Obez");
// }
// else if (sonuc >= 40) {
//     console.log("Morbid obez");
// }

// Benzin istasyonu 
 // dizel: 24.53
 // benzin: 22.25
 // LPG: 11.1
 // yakıt tipi - yüklenecek yakıt litresi

//  let dizel = 25.53 , benzin = 22.25 , lpg = 11.1;
//  const yeniSatir = "\r\n";

//  const yakitMetni = "1-Dizel"+yeniSatir
//  +"2-Benzin"+yeniSatir
//  +"3-LPG"+yeniSatir
//  +"Yakıt tipini seçiniz";

//  let yakitTipi = (prompt(yakitMetni));
//  if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
//     let yakitLitresi = Number(prompt("Kaç litre yakıt alacaksınız?"));
//     let bakiye = Number(prompt("Bakiyeniz:"));
//     if (yakitTipi == "1") {
//         let odenecekTutar = yakitLitresi * dizel;
//         if (odenecekTutar < bakiye) {
//            bakiye = bakiye - odenecekTutar;
//             alert("yakıt alm aişleminiz başarılı "+ yeniSatir
//                +"Kalan bakiyeniz:" + bakiye);
//            }else {
//                alert("bakiyeniz yetersiz"+ yeniSatir
//                +"Ödenecek tutar:" + odenecekTutar + yeniSatir
//                +"Bakiyeniz:" + bakiye + yeniSatir
//                +"Eksik tutar:" + (odenecekTutar - bakiye) );
//            }
//    }else if (yakitTipi == "2") {
//        let odenecekTutar = yakitLitresi * benzin;
//        if (odenecekTutar < bakiye) {
//            bakiye = bakiye - odenecekTutar;
//             alert("yakıt alm aişleminiz başarılı "+ yeniSatir
//                +"Kalan bakiyeniz:" + bakiye);
//            }else {
//                alert("bakiyeniz yetersiz"+ yeniSatir
//                +"Ödenecek tutar:" + odenecekTutar + yeniSatir
//                +"Bakiyeniz:" + bakiye + yeniSatir
//                +"Eksik tutar:" + (odenecekTutar - bakiye) );
//            }
//    }else if (yakitTipi == "3") {
//        let odenecekTutar = yakitLitresi * lpg;
//        if (odenecekTutar < bakiye) {
//            bakiye = bakiye - odenecekTutar;
//             alert("yakıt alm aişleminiz başarılı "+ yeniSatir
//                +"Kalan bakiyeniz:" + bakiye);
//            }else {
//                alert("bakiyeniz yetersiz"+ yeniSatir
//                +"Ödenecek tutar:" + odenecekTutar + yeniSatir
//                +"Bakiyeniz:" + bakiye + yeniSatir
//                +"Eksik tutar:" + (odenecekTutar - bakiye) );
//            }
//    }
//  }else {
//     alert("Geçersiz yakıt tipi");
// }
 
// SWITCH CASE YAPISI

// let sayi = prompt("Bir sayı giriniz:");

// switch (sayi) {
//     case "1":
//         console.log("sayı 1");
//         break;
//     case "2":
//         console.log("sayı 2");
//         break;
//     case "3":
//         console.log("sayı 3");
//         break;
//     default:
//         console.log("geçersiz sayı");
//         break;  
// }  
 
// let yeniSatir = "\r\n";
// let metin = "1-Pazartesi"+yeniSatir
// +"2-Salı"+yeniSatir
// +"3-Çarşamba"+yeniSatir
// +"4-Perşembe"+yeniSatir
// +"5-Cuma"+yeniSatir
// +"6-Cumartesi"+yeniSatir
// +"7-Pazar"+yeniSatir
// +"Haftanın gününü seçiniz";

// let deger = prompt(metin);

// switch (deger) {
//     case "1":
//         console.log("Pazartesi");
//         break;
//     case "2":
//         console.log("Salı");
//         break;
//     case "3":
//         console.log("Çarşamba");
//         break;
//     case "4":
//         console.log("Perşembe");
//         break;
//     case "5":
//         console.log("Cuma");
//         break;
//     case "6":
//         console.log("Cumartesi");
//         break;
//     case "7":
//         console.log("Pazar");
//         break;
//     default:
//         console.log("Geçersiz değer");
//         break;
// }


// ATM UYGLAMASI
 // bakiye görünytüleme
 //para çekme
 //para yatırma
 //çıkış

//  let yeniSatir = "\r\n";

//  let bakiye = 1000;

//  let metin = "1-Bakiye görüntüle"+yeniSatir
//     +"2-Para çek"+yeniSatir
//     +"3-Para yatır"+yeniSatir
//     +"4-Çıkış"+yeniSatir
//     +"İşlem seçiniz";

// //alert(metin);

// let secim = prompt(metin);

// switch (secim) {
//     case "1":
//         alert("Bakiyeniz:" + bakiye);
//         break;
//     case "2":
//         let cekilecekMiktar = Number(prompt("Çekmek istediğiniz miktarı giriniz:"));
//         if (cekilecekMiktar <= bakiye) {
//             bakiye = bakiye - cekilecekMiktar;
//             alert("Yeni bakiyeniz:" + bakiye);
//         }else {
//             alert("Yetersiz bakiye");
//         }
//         break;
//     case "3":
//         let yatirilacakMiktar = Number(prompt("Yatırmak istediğiniz miktarı giriniz:"));
//         bakiye = bakiye + yatirilacakMiktar;
//         alert("Yeni bakiyeniz:" + bakiye);
//         break;
//     case "4":
//         alert("Çıkış yapılıyor");
//         break;
//     default:
//         alert("Geçersiz işlem");
//         break;
// }

//TYT PUAN HESAPLAMA
 // Türkçe 40
 // matematik 40
 // sosyal bilimler 20
 // fen bilimleri 20
 // 100 puanı ösym veriyor 
 // okul puanı max 60 veriyor

//  let turkceDogru , turkceYanlis = 0;
//  let matematikDogru , matematikYanlis = 0;
//  let sosyalDogru , sosyalYanlis = 0;
//  let fenDogru , fenYanlis = 0;
//  let puan = 0;
//  let okulPuan = 0;

//  let yeniSatir = "\r\n";

//  let mesaj = "TYT puan hesaplama uygulamasına hoşgeldiniz"+ yeniSatir
//  +"1-Puan hesapla"+ yeniSatir
//  +"2-Çıkış";

//  alert(mesaj);

// let secim = prompt(mesaj);

// switch (secim) {
//     case "1":
//         okulPuan = Number(prompt("Okul puanınız:"));

//         turkceDogru = Number(prompt("Türkçe doğru sayısı:"));
//         turkceYanlis = Number(prompt("Türkçe yanlış sayısı:"));

//         matematikDogru = Number(prompt("Matematik doğru sayısı:"));
//         matematikYanlis = Number(prompt("Matematik yanlış sayısı:"));

//         sosyalDogru = Number(prompt("Sosyal bilimler doğru sayısı:"));
//         sosyalYanlis = Number(prompt("Sosyal bilimler yanlış sayısı:"));

//         fenDogru = Number(prompt("Fen bilimleri doğru sayısı:"));
//         fenYanlis = Number(prompt("Fen bilimleri yanlış sayısı:"));

//         // puan = (turkceDogru * 1.25) - (turkceYanlis * 0.25) + (matematikDogru * 1.25) - (matematikYanlis * 0.25) + (sosyalDogru * 1.25) - (sosyalYanlis * 0.25) + (fenDogru * 1.25) - (fenYanlis * 0.25) + 100 + okulPuan;

//         let doğruSayı = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
//         let yanlışSayı = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
//         let kalanDogruSayisi = doğruSayı - yanlışSayı;
//         puan = (kalanDogruSayisi*4) + 100 + okulPuan;

//         console.log("TYT puanınız:" + puan);
//         break;
//     case "2":
//         alert("Çıkış yapılıyor");
//         break;
//     default:
//         alert("Geçersiz işlem");
//         break;
// }

// TÜR DÖNÜŞÜMLERİ
  //string , numbers, booleans, undifined, null, object, function

// string veri tipinden number veri tipine dönüşüm

// let a = 5;
// let b = "10";
// console.log(a + b); 

// let c = Number(b);
// console.log(typeof c);
// console.log(a + c);

//parseInt()

let a = 8;
let b = parseInt("12");
console.log(a + b);