document.getElementById("bmiForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Mengambil nilai dari input
    var gender = document.querySelector('input[name="gender"]:checked').value;
    const usia = parseInt(document.getElementById("usia").value);
    const tinggi = parseInt(document.getElementById("tinggi").value);
    const berat = parseFloat(document.getElementById("berat").value);

    // Menghitung BMI
    const bmi = calculateBMI(tinggi, berat);

    // Menampilkan hasil
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>${getBMICategory(bmi)}</p>
        <p>${bmi.toFixed(2)}</p>
        <p>Anda Memiliki ${getBMICategory(bmi)}</p>
       
    `;

    const result1Div = document.getElementById("result1");
    result1Div.innerHTML = `
        <p>Anda berada dalam Kategori ${getBMICategory(bmi)}</p>
    `;

    const ketDiv = document.getElementById("ket");
    ketDiv.innerHTML = `
        <p>${keterangan(bmi)}</p>
        <p>${bmi.toFixed(2)}</p>
        <p>Anda Memiliki ${keterangan(bmi)}</p>
       
    `;
});

// Fungsi untuk menghitung BMI
function calculateBMI(tinggi, berat) {
    // Konversi tinggi dari cm ke meter
    const heightInMeter = tinggi / 100;

    // Menghitung BMI dengan rumus: berat badan (kg) / (tinggi (m) * tinggi (m))
    const bmi = berat / (heightInMeter * heightInMeter);
    return bmi;
}

// Fungsi untuk mendapatkan kategori BMI
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal (Ideal)";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Kelebihan Berat Badan";
    } else {
        return "Kegemukan (Obesitas)";
    }
}

function keterangan(bmi) {
    if (bmi < 18.5) {
        return "Cara terbaik menaikkan berat bada adalah dengan rutin minum susu atau mengonsumsi produk olahan susu. Dengan cara ini berat badan Anda bisa bertambah. Untuk menggemukkan badan, Anda dapat minum susu, baik susu sapi murni atau susu penggemuk badan, sebanyak 1 atau 2 gelas per hari.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Berat badan yang ideal kamu sudah bagus. Jika ingin mempertahankannya bisa menjaga pola hidup sehat ya.";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Cara menurunkan berat badan terbaik adalah dengan diet.";
    } else {
        return "Obesitas berbahaya bagi tubuh dianjurkan untuk diet sehat secara perlahan dan bertahap";
    }
}