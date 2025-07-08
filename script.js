document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Mencegah reload halaman saat submit form

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Tampilkan pesan loading atau kosongkan pesan sebelumnya
        showMessage('Memproses login...', '');

        // --- SIMULASI PANGGILAN API ---
        // Di dunia nyata, Anda akan menggunakan fetch() atau XMLHttpRequest di sini
        // untuk mengirim data ke URL API Anda.
        try {
            const response = await simulateLoginApiCall(username, password); // Panggil fungsi simulasi API

            if (response.success) {
                showMessage('Login Berhasil! Selamat datang!', 'success');
                // Di sini Anda bisa mengarahkan pengguna ke halaman dashboard
                // window.location.href = '/dashboard';
            } else {
                showMessage(`Login Gagal: ${response.message}`, 'error');
            }
        } catch (error) {
            showMessage(`Terjadi kesalahan: ${error.message}`, 'error');
            console.error('Error saat memanggil API:', error);
        }
    });

    // Fungsi untuk mensimulasikan panggilan API
    async function simulateLoginApiCall(username, password) {
        // Ini adalah simulasi respons dari server API.
        // Di aplikasi nyata, Anda akan melakukan panggilan network (misalnya pakai fetch).
        // Misalnya, Anda bisa menunggu beberapa saat untuk mensimulasikan latensi jaringan.
        return new Promise(resolve => {
            setTimeout(() => {
                if (username === 'user123' && password === 'password123') {
                    resolve({ success: true, message: 'Autentikasi berhasil!' });
                } else {
                    resolve({ success: false, message: 'Username atau password salah.' });
                }
            }, 1500); // Menunda respons selama 1.5 detik untuk simulasi loading
        });
    }

    // Fungsi untuk menampilkan pesan ke pengguna
    function showMessage(msg, type) {
        messageElement.textContent = msg;
        messageElement.className = 'message'; // Reset kelas
        if (type) {
            messageElement.classList.add(type); // Tambahkan kelas success/error
        }
        messageElement.style.display = 'block'; // Tampilkan elemen pesan
    }
});