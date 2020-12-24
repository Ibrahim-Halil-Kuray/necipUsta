//hayvan listesini tanimladik.

let hayvanlar = ["inek", "domuz", "tavuk", "inek", "koyun", "tavuk", "inek", "koyun", "horoz", "domuz"];

//helal kesim olan ve olmayan hayvanlarla ilgili bilginin tutulacagi yeri tanimladik

let bacakSayisi = 0;
let tumHayvanlar = 0;

//hayvanlari istenen duruma gore ayirdik

for (index = 0; index < hayvanlar.length; index++) {
    if (hayvanlar[index] == "inek") {
        bacakSayisi += 4;
        tumHayvanlar += 4;
    } else if (hayvanlar[index] == "tavuk") {
        bacakSayisi += 2;
        tumHayvanlar += 2;
    } else if (hayvanlar[index] == "koyun") {
        bacakSayisi += 4;
        tumHayvanlar += 4;
    } else if (hayvanlar[index] == "horoz") {
        bacakSayisi += 2
        tumHayvanlar += 2;
    } else if (hayvanlar[index] == "domuz") {
        tumHayvanlar += 4;
    }

}
//her iki durum icin de sonucu konsola yazdirdik.

console.log("Helal Kesim Bacak Sayisi ", bacakSayisi);
console.log("Butun Urunler ", tumHayvanlar);