document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Anda bisa menambahkan logika untuk mengirim data ke server di sini
    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
    
    // Reset formulir setelah pengiriman
    this.reset();
});