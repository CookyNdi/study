const nama = "Suichan";
let usia = 20;

let biodata = document.getElementById(`biodata`);

function generalBiodata() {
    let generasi;
    if (usia >= 2 && usia <= 10) {
        generasi = "generasi anak-anak";
    } else if (usia > 10 && usia < 20) {
        generasi = "generasi remaja";
    } else if (usia >= 20 && usia < 30) {
        generasi = "generasi dewasa";
    } else if (usia >= 30) {
        generasi = "generasi tua";
    } else {
        generasi = "balita";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama)
generalBiodata()



// pemanggilan
// console.log(nama)
// opsi satu
// console.log(`nama saya adalah ${nama} dan umur saya adalah ${usia} tahun`)
// opsi dua 
// console.log(`nama saya adalah`, nama)