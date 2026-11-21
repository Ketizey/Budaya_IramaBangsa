/* ==========================================================================
   SKRIP INTERAKTIF E-PORTFOLIO IRAMA BANGSA (script.js)
   Kursus: COM3083 Komunikasi Antarabudaya
   ========================================================================== */

/* ==========================================================================
   1. DATA UTAMA (PROFIL AHLI, REFLEKSI & MINIT MESYUARAT)
   ========================================================================== */

// Data Profil Terperinci bagi 4 Orang Ahli Kumpulan
const membersData = [
    {
        name: 'Muhammad Ihsan Hafizi bin Mohd Zahari',
        role: 'Ahli 1',
        origin: 'Kuala Terengganu, Terengganu',
        bio: 'Berasal dari Pantai Timur dengan yang terkenal dengan budaya dan dialek unik masyarakat Pantai Timur. Bertanggungjawab memberikan idea/pandangan semasa perbincangan, membantu memantau perkembangan tugasan serta menggalakkan kerjasama dan komunikasi yang baik antara ahli kumpulan.'
    },
    {
        name: 'Fatma Khaliesah Huda Binti Mohd Hatta',
        role: 'Ahli 2',
        origin: 'Kuala Terengganu, Terengganu',
        bio: 'Berasal dari Kuala Terengganu iaitu sebuah kawasan yang kaya dengan keunikan bahasa, adat resam dan warisan budaya masyarakat tempatan. Bertanggungjawab memberikan kerjasama yang baik, berkongsi pendapat serta melaksanakan tanggungjawab yang diberikan. Saya juga sentiasa terbuka untuk menerima pandangan ahli kumpulan bagi memastikan setiap tugasan dapat diselesaikan dengan baik.'
    },
    {
        name: 'Nik Muhammad Syahmi Bin Zakaria',
        role: 'Ahli 3',
        origin: 'Besut, Terengganu',
        bio: 'Berasal dari Besut, iaitu sebuah daerah yang terletak di utara negeri Terengganu dan bersempadan dengan negeri Kelantan. Besut terkenal dengan keunikan budaya, adat resam serta dialek pertuturan yang mempunyai pengaruh daripada kedua-dua negeri, Terengganu dan Kelantan. Selain itu, Besut juga mempunyai keistimewaan dari segi makanan tradisional, keindahan alam semula jadi dan kehidupan masyarakatnya yang masih mengekalkan nilai-nilai tradisi. Keunikan ini menjadikan Besut sebuah daerah yang mempunyai identiti tersendiri dan berbeza daripada daerah lain di Terengganu.'
    },
    {
        name: 'Ahmad Isa Iskandar bin Choi Sung Bok',
        role: 'Ahli 4',
        origin: 'Dungun, Terengganu',
        bio: 'Berasal dari Dungun, iaitu sebuah daerah yang terletak di bahagian selatan negeri Terengganu dan menghadap ke arah Laut China Selatan. Dungun terkenal dengan keindahan pesisir pantai yang memukau serta kekayaan sejarahnya yang pernah menjadi pusat perlombongan bijih besi yang terkenal di Bukit Besi pada suatu masa dahulu. Selain itu, Dungun juga mempunyai keistimewaan dari segi makanan tradisional berasaskan hasil laut, keindahan alam semula jadi seperti air terjun dan kawasan penyu bertelur di Rantau Abang, serta kehidupan masyarakatnya yang ramah dan masih mengekalkan nilai-nilai murni. Keunikan gabungan warisan sejarah dan keindahan pantai ini menjadikan Dungun sebuah daerah yang mempunyai identiti tersendiri dan istimewa di negeri Terengganu.'
    }
];


// Data Refleksi Individu selepas Aktiviti Get Together
const reflections = [
    {
        name: 'Muhammad Ihsan Hafizi bin Mohd Zahari',
        role: 'Ketua Kumpulan • Kuala Terengganu',
        quote: 'Tiada',
        text: 'Tiada'
    },
    {
        name: 'Fatma Khaliesah Huda Binti Mohd Hatta',
        role: 'Penolong Ketua Kumpulan • Kuala Terengganu',
        quote: 'Tiada',
        text: 'Tiada'
    },
    {
        name: 'Nik Muhammad Syahmi Bin Zakaria',
        role: 'Kreatif & Media • Besut',
        quote: 'Tiada',
        text: 'Tiada'
    },
    {
        name: 'Ahmad Isa Iskandar bin Choi Sung Bok',
        role: 'Penyelidik & Penghasilan Web • Dungun',
        quote: 'Tiada',
        text: 'Tiada'
    }
];


// Data Minit Mesyuarat Kumpulan
// Masukkan laluan PDF dalam pdfSrc.
// Masukkan laluan gambar dalam imgSrc.
const meetingDetails = [
    {
        bil: 'Minit Mesyuarat #01',
        title: 'Pembentukan Kumpulan & Pemilihan Identiti',
        meta: 'Minggu 4 • Perpustakaan Utama',
        duration: '2.0 Jam',
        imgSrc: '',
        pdfSrc: 'minit-mesyuarat-01.pdf',
        pdfName: 'Minit Mesyuarat #01.pdf',
        imgLabel: 'Letak Gambar Bukti Perjumpaan Minggu 4',
        desc: 'Perjumpaan pertama bagi membentuk kumpulan seramai 4 orang ahli dan memilih nama "Irama Bangsa" sebagai simbol keharmonian kepelbagaian budaya. Ahli bersetuju melantik Ahmad Danish sebagai ketua, Lim Mei Ling sebagai setiausaha, Clarence sebagai ketua kreatif, dan Kavitha sebagai penyelidik kandungan.'
    },
    {
        bil: 'Minit Mesyuarat #02',
        title: 'Perancangan Konsep Video Dokumentari KAB',
        meta: 'Minggu 6 • Google Meet (Dalam Talian)',
        duration: '2.5 Jam',
        imgSrc: '',
        pdfSrc: 'pdf/minit-mesyuarat-02.pdf',
        pdfName: 'Minit Mesyuarat #02.pdf',
        imgLabel: 'Letak Gambar Bukti Perjumpaan Minggu 6',
        desc: 'Perbincangan dalam talian bagi merangka papan cerita (storyboard) dan skrip video dokumentari bertajuk "Satu Meja, Seribu Rasa". Setiap ahli membentangkan cadangan etika pemakanan dan pantang larang tradisional kaum masing-masing untuk dirakam.'
    },
    {
        bil: 'Minit Mesyuarat #03',
        title: 'Rakaman Video & Penyelarasan Slaid Pembentangan',
        meta: 'Minggu 8 • Bilik Tutorial Fakulti',
        duration: '3.0 Jam',
        imgSrc: '',
        pdfSrc: 'pdf/minit-mesyuarat-03.pdf',
        pdfName: 'Minit Mesyuarat #03.pdf',
        imgLabel: 'Letak Gambar Bukti Perjumpaan Minggu 8',
        desc: 'Sesi rakaman babak temu bual serta penyusunan bahan kajian literatur berkaitan Teori Pengurusan Kebimbangan/Ketidakpastian (AUM) untuk slaid pembentangan akademik kumpulan.'
    },
    {
        bil: 'Minit Mesyuarat #04',
        title: 'Persiapan Logistik Get Together Activity',
        meta: 'Minggu 10 • Kafe Budaya Kampus',
        duration: '2.5 Jam',
        imgSrc: '',
        pdfSrc: 'pdf/minit-mesyuarat-04.pdf',
        pdfName: 'Minit Mesyuarat #04.pdf',
        imgLabel: 'Letak Gambar Bukti Perjumpaan Minggu 10',
        desc: 'Menyelaras menu juadah potluck tradisional (Nasi Dagang, Kuih Bakul, Laksa Sarawak, dan Murukku), pertukaran busana tradisional antara ahli, serta penyediaan permainan rakyat seperti congkak dan batu seremban.'
    },
    {
        bil: 'Minit Mesyuarat #05',
        title: 'Pengumpulan Refleksi & Susun Atur Galeri Budaya',
        meta: 'Minggu 12 • Google Meet (Dalam Talian)',
        duration: '2.0 Jam',
        imgSrc: '',
        pdfSrc: 'pdf/minit-mesyuarat-05.pdf',
        pdfName: 'Minit Mesyuarat #05.pdf',
        imgLabel: 'Letak Gambar Bukti Perjumpaan Minggu 12',
        desc: 'Setiap ahli membentangkan draf refleksi individu selepas menjayakan Get Together Activity. Turut dilakukan pemilihan foto terbaik bagi pameran maya di kolum Galeri Warisan & Budaya.'
    },
    {
        bil: 'Minit Mesyuarat #06',
        title: 'Semakan Akhir E-Portfolio & Pengisytiharan AI',
        meta: 'Minggu 13 • Makmal Komputer',
        duration: '2.0 Jam',
        imgSrc: '',
        pdfSrc: 'pdf/minit-mesyuarat-06.pdf',
        pdfName: 'Minit Mesyuarat #06.pdf',
        imgLabel: 'Letak Gambar Bukti Perjumpaan Minggu 13',
        desc: 'Semakan menyeluruh kesemua 11 kolum wajib mengikut rubrik penilaian CLO3, pengesahan jumlah keseluruhan 14 jam mesyuarat, semakan tatabahasa, serta pelengkapan kolum pengisytiharan penggunaan AI sebelum penghantaran akhir.'
    }
];


/* ==========================================================================
   2. KAWALAN MENU NAVIGASI MUDAH ALIH
   ========================================================================== */

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
});


/* ==========================================================================
   3. KAWALAN MODAL PROFIL AHLI (KOLUM 03)
   ========================================================================== */

function openProfileModal(index) {
    const member = membersData[index];
    if (!member) return;

    document.getElementById('modal-name').textContent = member.name;
    document.getElementById('modal-role').textContent = member.role;

    document.getElementById('modal-origin').innerHTML =
        '<i class="fa-solid fa-location-dot text-manggis mr-1"></i> ' +
        member.origin;

    document.getElementById('modal-bio').textContent = member.bio;
    document.getElementById('profile-modal').classList.remove('hidden');
}

function closeProfileModal() {
    document.getElementById('profile-modal').classList.add('hidden');
}

const profileModalEl = document.getElementById('profile-modal');

if (profileModalEl) {
    profileModalEl.addEventListener('click', function(e) {
        if (e.target === this) {
            closeProfileModal();
        }
    });
}


/* ==========================================================================
   4. PENUKAR TAB REFLEKSI INDIVIDU (KOLUM 05)
   ========================================================================== */

function switchReflection(index) {
    const container = document.getElementById('refleksi-content');
    const tabs = document.querySelectorAll('.ref-tab');
    const data = reflections[index];

    if (!container || !data) return;

    tabs.forEach((tab, idx) => {
        if (idx === index) {
            tab.classList.remove('bg-krim-soft', 'text-stone-700');
            tab.classList.add('bg-manggis', 'text-white');
        } else {
            tab.classList.remove('bg-manggis', 'text-white');
            tab.classList.add('bg-krim-soft', 'text-stone-700');
        }
    });

    container.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-stone-200/80">
            <div class="flex items-center space-x-3.5">
                <div class="w-14 h-14 rounded-2xl empty-img-frame shrink-0 text-center p-1">
                    <i class="fa-solid fa-user text-manggis/50 text-sm"></i>
                    <span class="text-[8px] font-bold text-stone-500 leading-none mt-0.5">
                        Ahli ${index + 1}
                    </span>
                    <img src="" alt="Foto ${data.name}">
                </div>
                <div>
                    <h3 class="font-serif text-xl font-bold text-manggis">${data.name}</h3>
                    <p class="text-xs font-semibold text-zamrud">${data.role}</p>
                </div>
            </div>

            <span class="text-xs bg-white px-3 py-1 rounded-full border border-emas/50 text-stone-600 font-medium self-start sm:self-center">
                <i class="fa-solid fa-quote-left text-emas-dark mr-1"></i>
                Refleksi Get Together Activity
            </span>
        </div>

        <blockquote class="font-serif italic text-base sm:text-lg text-stone-800 bg-white p-4 rounded-xl border-l-4 border-emas mb-4 shadow-sm">
            "${data.quote}"
        </blockquote>

        <p class="text-sm sm:text-base text-stone-700 leading-relaxed">
            ${data.text}
        </p>
    `;
}

switchReflection(0);


/* ==========================================================================
   5. KAWALAN MODAL, PDF & GAMBAR MINIT MESYUARAT (KOLUM 07)
   ========================================================================== */

let activeMeetingIndex = null;


// Buka PDF yang disimpan dalam folder projek.
function openMeetingPdf(index) {
    const item = meetingDetails[index];

    if (!item) return;

    if (!item.pdfSrc) {
        showNotification(
            'Pautan PDF bagi ' + item.bil +
            ' belum ditetapkan dalam script.js.'
        );
        return;
    }

    // Buka fail PDF dalam tab baharu.
    const pdfLink = document.createElement('a');

    pdfLink.href = item.pdfSrc;
    pdfLink.target = '_blank';
    pdfLink.rel = 'noopener noreferrer';

    document.body.appendChild(pdfLink);
    pdfLink.click();
    pdfLink.remove();
}


// Paparkan gambar mesyuarat.
function updateMeetingImagePreview(item) {
    const image = document.getElementById('meeting-img');
    const placeholder = document.getElementById('meeting-img-placeholder');
    const frame = document.getElementById('meeting-img-frame');
    const fileName = document.getElementById('meeting-image-filename');

    if (!image || !placeholder || !frame || !fileName || !item) {
        return;
    }

    if (item.imgSrc) {
        image.src = item.imgSrc;
        image.alt = 'Bukti Perjumpaan - ' + item.bil;

        image.classList.remove('hidden');
        placeholder.classList.add('hidden');
        frame.classList.add('has-image');

        fileName.textContent =
            item.imgName || 'Gambar bukti perjumpaan telah dimasukkan';

    } else {
        image.removeAttribute('src');

        image.classList.add('hidden');
        placeholder.classList.remove('hidden');
        frame.classList.remove('has-image');

        fileName.textContent =
            'Format disokong: JPG, PNG, WEBP dan imej lain';
    }
}


// Buka modal mesyuarat yang dipilih.
function openMeetingModal(index) {
    const item = meetingDetails[index];

    if (!item) return;

    activeMeetingIndex = index;

    document.getElementById('meeting-badge').textContent = item.bil;
    document.getElementById('meeting-duration').textContent = item.duration;
    document.getElementById('meeting-title').textContent = item.title;

    document.getElementById('meeting-meta').innerHTML =
        '<i class="fa-solid fa-calendar-days mr-1"></i> ' + item.meta;

    document.getElementById('meeting-img-label').textContent = item.imgLabel;
    document.getElementById('meeting-desc').textContent = item.desc;

    const imageInput = document.getElementById('meeting-image-upload');

    if (imageInput) {
        imageInput.value = '';
    }

    updateMeetingImagePreview(item);

    document.getElementById('meeting-modal').classList.remove('hidden');
}


// Muat naik atau tukar gambar bukti mesyuarat.
function handleMeetingImageUpload(input) {
    const file = input.files && input.files[0];
    const item = meetingDetails[activeMeetingIndex];

    if (!file || !item) return;

    const hasImageMime =
        Boolean(file.type && file.type.startsWith('image/'));

    const hasImageExtension =
        /\.(jpe?g|png|gif|webp|bmp|avif|svg)$/i.test(file.name);

    if (!hasImageMime && !hasImageExtension) {
        showNotification(
            'Sila pilih fail imej seperti JPG, PNG atau WEBP.'
        );

        input.value = '';
        return;
    }

    const objectUrl = URL.createObjectURL(file);

    // Padam URL gambar lama jika gambar digantikan.
    if (item.imgObjectUrl) {
        URL.revokeObjectURL(item.imgObjectUrl);
    }

    item.imgSrc = objectUrl;
    item.imgObjectUrl = objectUrl;
    item.imgName = file.name;

    updateMeetingImagePreview(item);

    showNotification(
        'Gambar bagi ' + item.bil + ' berjaya dimuat naik.'
    );

    input.value = '';
}


// Tutup modal mesyuarat.
function closeMeetingModal() {
    const modal = document.getElementById('meeting-modal');

    if (modal) {
        modal.classList.add('hidden');
    }

    activeMeetingIndex = null;
}


// Tutup modal apabila kawasan luar diklik.
const meetingModalEl = document.getElementById('meeting-modal');

if (meetingModalEl) {
    meetingModalEl.addEventListener('click', function(e) {
        if (e.target === this) {
            closeMeetingModal();
        }
    });
}


/* ==========================================================================
   6. PENAPIS KATEGORI GALERI BUDAYA (KOLUM 11)
   ========================================================================== */

function filterGallery(category, activeBtn) {
    const items = document.querySelectorAll('.gal-item');
    const buttons = document.querySelectorAll('.gal-btn');

    // Tetapkan semula warna semua butang.
    buttons.forEach(btn => {
        btn.classList.remove('bg-manggis', 'text-white');
        btn.classList.add('bg-krim-soft', 'text-stone-700');
    });

    // Serlahkan butang kategori yang sedang aktif.
    if (activeBtn) {
        activeBtn.classList.remove('bg-krim-soft', 'text-stone-700');
        activeBtn.classList.add('bg-manggis', 'text-white');
    }

    // Tapis paparan galeri.
    items.forEach(item => {
        if (
            category === 'semua' ||
            item.getAttribute('data-category') === category
        ) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}


/* ==========================================================================
   7. SISTEM NOTIFIKASI (TOAST) & SEMAKAN PAUTAN KOSONG
   ========================================================================== */

let toastTimeout;

function showNotification(message) {
    const toastBox = document.getElementById('toast-box');
    const toastMessage = document.getElementById('toast-message');

    if (!toastBox || !toastMessage) return;

    toastMessage.textContent = message;
    toastBox.classList.remove('hidden');

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
        toastBox.classList.add('hidden');
    }, 4500);
}


// Menghalang pautan kosong daripada memuat semula halaman.
function checkCustomLink(event, element, label) {
    const hrefValue = element.getAttribute('href');

    if (!hrefValue || hrefValue.trim() === '') {
        event.preventDefault();

        showNotification(
            'Pautan ' + label +
            ' belum dimasukkan. Sila tampal URL anda di dalam atribut href="" pada fail index.html.'
        );

        return false;
    }

    return true;
}


/* ==========================================================================
   8. BUTANG KEMBALI KE ATAS (BACK TO TOP)
   ========================================================================== */

const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {

    // Paparkan butang apabila halaman diskrol melebihi 400px.
    window.addEventListener('scroll', () => {

        if (window.scrollY > 400) {

            backToTopBtn.classList.remove(
                'opacity-0',
                'pointer-events-none'
            );

            backToTopBtn.classList.add('opacity-100');

        } else {

            backToTopBtn.classList.add(
                'opacity-0',
                'pointer-events-none'
            );

            backToTopBtn.classList.remove('opacity-100');
        }
    });


    // Skrol lancar ke bahagian paling atas.
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}