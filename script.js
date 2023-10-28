var nilai = prompt (" Masukkan nilai siswa range 0 - 100");

if (nilai >= 85 && nilai <= 100) {
    nilaiHuruf = ("A");
}

else if (nilai >= 75 && nilai <= 84) {
    nilaiHuruf = ("B");
}

else if (nilai >= 60 && nilai <= 74) {
    nilaiHuruf = ("C");
}

else if (nilai >= 0 && nilai <= 60) {
    nilaiHuruf = ("D");
}

if (nilai %2==0) {
    bilangan = ("Bilangan Genap");
}

else {bilangan = ("Bilangan Ganjil");}

alert ("Nilai Angka : " + nilai + "\n Nilai Huruf: " + nilaiHuruf + "\n Maka, nilai tersebut adalah: " + bilangan);
