const MATERIALS = [
  {
    id: "dasar",
    title: "Pengertian Jaringan Komputer",
    short: "Kenali cara perangkat terhubung dan bertukar informasi.",
    description:
      "Jaringan komputer adalah sekumpulan dua atau lebih perangkat yang saling terhubung untuk berkomunikasi dan berbagi data maupun sumber daya. Koneksi dapat menggunakan kabel atau media nirkabel.",
    example: "Laptop dan printer yang terhubung ke Wi-Fi rumah dapat berbagi koneksi internet dan dokumen.",
    keyPoints: ["Perangkat saling terhubung melalui media komunikasi.", "Data dikirim menggunakan aturan komunikasi yang disebut protokol.", "Jaringan dapat mencakup area kecil hingga sangat luas."],
    diagram: "star",
  },
  {
    id: "jenis-jaringan",
    title: "Jenis-Jenis Jaringan Komputer",
    short: "Bedakan jaringan menurut cakupan wilayah dan media transmisinya.",
    description:
      "Jaringan komputer dapat dikelompokkan berdasarkan cakupan wilayah (LAN, MAN, dan WAN) atau media transmisi (kabel dan nirkabel). Kedua cara ini menjelaskan hal yang berbeda: sebuah LAN, misalnya, dapat menggunakan koneksi kabel maupun Wi-Fi.",
    example:
      "Komputer di laboratorium sekolah biasanya membentuk LAN. Jika beberapa lokasi dalam satu kota dihubungkan, cakupannya dapat menjadi MAN. Koneksi antarkota atau antarnegara termasuk WAN; perangkat di dalamnya tetap dapat terhubung melalui kabel atau nirkabel.",
    keyPoints: [
      "LAN (Local Area Network) mencakup area terbatas, seperti rumah, sekolah, kantor, atau satu gedung.",
      "MAN (Metropolitan Area Network) menghubungkan beberapa jaringan di satu kota atau kawasan metropolitan.",
      "WAN (Wide Area Network) mencakup wilayah sangat luas, termasuk antarnegara; internet adalah contoh WAN.",
      "Jaringan kabel (wired) menggunakan media fisik seperti Ethernet atau serat optik; koneksinya cenderung stabil, tetapi perangkat perlu terhubung dengan kabel.",
      "Jaringan nirkabel (wireless) menggunakan gelombang radio, misalnya Wi-Fi atau jaringan seluler; perangkat lebih leluasa berpindah, tetapi kualitas sinyal dapat dipengaruhi lingkungan.",
      "Keamanan dan kecepatan dipengaruhi teknologi serta konfigurasi jaringan, bukan hanya apakah koneksinya menggunakan kabel atau nirkabel.",
    ],
  },
  {
    id: "manfaat",
    title: "Manfaat Jaringan",
    short: "Berbagi sumber daya, berkomunikasi, dan mengakses informasi.",
    description:
      "Jaringan komputer membuat perangkat dapat menggunakan sumber daya bersama dan bertukar informasi dengan lebih cepat. Jaringan juga membantu kolaborasi serta pengelolaan data.",
    example: "Di laboratorium kampus, banyak komputer dapat memakai satu printer jaringan dan mengakses materi dari server yang sama.",
    keyPoints: ["Berbagi file, printer, dan koneksi internet.", "Memudahkan komunikasi dan kerja sama.", "Mendukung penyimpanan serta akses data terpusat."],
    diagram: "mesh",
  },
  {
    id: "pengertian-topologi",
    title: "Pengertian Topologi Jaringan",
    short: "Pahami pola hubungan perangkat sebelum mempelajari jenis-jenis topologi.",
    description:
      "Topologi jaringan adalah pola atau tata letak hubungan antarperangkat dalam jaringan. Topologi menggambarkan bagaimana perangkat (node) terhubung melalui media komunikasi (link) dan bagaimana data mengalir di antara perangkat. Topologi dapat dilihat secara fisik, yaitu susunan perangkat dan kabel, maupun secara logis, yaitu jalur komunikasi data; keduanya tidak selalu sama.",
    example:
      "Di ruang kelas, komputer dapat terhubung ke sebuah switch pusat dengan kabel masing-masing. Susunan fisiknya berbentuk star, sementara switch mengatur penerusan data di dalam jaringan.",
    keyPoints: [
      "Node adalah perangkat yang terhubung ke jaringan, sedangkan link adalah jalur atau media penghubungnya.",
      "Topologi membantu menjelaskan susunan koneksi dan aliran data dalam jaringan.",
      "Pemilihan topologi memengaruhi kebutuhan kabel dan perangkat, biaya, kemudahan pengelolaan, serta ketahanan jaringan terhadap gangguan.",
      "Bus, star, ring, mesh, tree, dan hybrid adalah beberapa jenis topologi dengan susunan dan karakteristik yang berbeda.",
    ],
    diagram: "star",
  },
  {
    id: "bus",
    title: "Topologi Bus",
    short: "Semua perangkat berbagi satu jalur komunikasi utama.",
    description:
      "Pada topologi bus, setiap perangkat terhubung ke satu kabel utama (backbone). Data berjalan di sepanjang jalur tersebut dan terminator dipasang di kedua ujung kabel.",
    example: "Topologi ini pernah digunakan pada jaringan lokal sederhana yang memakai kabel koaksial.",
    keyPoints: ["Pemasangan sederhana dan hemat kabel.", "Jika backbone putus, seluruh jaringan dapat terganggu.", "Semakin banyak perangkat, potensi tabrakan data meningkat."],
    diagram: "bus",
  },
  {
    id: "star",
    title: "Topologi Star",
    short: "Setiap perangkat terhubung ke satu perangkat pusat.",
    description:
      "Pada topologi star, seluruh komputer tersambung secara terpisah ke perangkat pusat seperti switch. Perangkat pusat meneruskan data ke tujuan yang sesuai.",
    example: "Jaringan Wi-Fi atau LAN di rumah dan ruang kelas umumnya memiliki router atau switch sebagai pusat koneksi.",
    keyPoints: ["Mudah menambah perangkat dan mencari gangguan.", "Kerusakan satu kabel biasanya hanya memengaruhi satu perangkat.", "Jika perangkat pusat rusak, koneksi seluruh jaringan terdampak."],
    diagram: "star",
  },
  {
    id: "ring",
    title: "Topologi Ring",
    short: "Perangkat membentuk lingkaran dengan jalur berantai.",
    description:
      "Pada topologi ring, setiap perangkat terhubung dengan dua perangkat tetangganya sehingga membentuk lingkaran. Data diteruskan dari satu perangkat ke perangkat berikutnya sampai mencapai tujuan.",
    example: "Topologi ring pernah digunakan pada jaringan token ring dan beberapa jaringan metropolitan.",
    keyPoints: ["Alur komunikasi antarnode teratur.", "Gangguan pada satu sambungan dapat mengganggu ring konvensional.", "Penambahan perangkat dapat memerlukan perubahan jalur."],
    diagram: "ring",
  },
  {
    id: "mesh",
    title: "Topologi Mesh",
    short: "Perangkat memiliki beberapa jalur koneksi ke perangkat lain.",
    description:
      "Pada topologi mesh, perangkat memiliki koneksi langsung ke sebagian atau seluruh perangkat lainnya. Tersedianya jalur alternatif membantu jaringan tetap berkomunikasi ketika satu jalur bermasalah.",
    example: "Jaringan backbone dan sistem mesh Wi-Fi menggunakan beberapa jalur agar koneksi dapat menjangkau area yang lebih luas.",
    keyPoints: ["Memiliki redundansi dan toleransi gangguan yang baik.", "Jalur alternatif membantu menjaga konektivitas.", "Membutuhkan lebih banyak kabel, port, dan biaya."],
    diagram: "mesh",
  },
  {
    id: "tree",
    title: "Topologi Tree",
    short: "Hubungkan beberapa jaringan star dalam struktur bertingkat.",
    description:
      "Topologi tree (pohon) menyusun perangkat secara hierarkis: satu perangkat utama menghubungkan beberapa switch cabang, lalu setiap switch cabang melayani komputer atau perangkat di bawahnya. Bentuknya menyerupai cabang-cabang pohon dan umumnya menggabungkan backbone dengan beberapa segmen star.",
    example:
      "Di kampus, sebuah switch inti dapat menghubungkan switch pada tiap lantai, kemudian switch lantai menghubungkan komputer di ruang kelas dan laboratorium.",
    keyPoints: [
      "Struktur bertingkat memudahkan pembagian perangkat berdasarkan lantai, gedung, atau departemen.",
      "Jaringan mudah diperluas dengan menambahkan cabang atau segmen baru.",
      "Gangguan pada backbone atau perangkat inti dapat memengaruhi banyak cabang; semakin banyak tingkat, semakin rumit pengelolaannya.",
    ],
    diagram: "tree",
  },
  {
    id: "hybrid",
    title: "Topologi Hybrid",
    short: "Gabungkan dua atau lebih topologi untuk memenuhi kebutuhan jaringan.",
    description:
      "Topologi hybrid (hibrida) adalah jaringan yang menggabungkan dua atau lebih jenis topologi, seperti star, bus, ring, atau mesh. Susunan setiap segmen dapat disesuaikan dengan kebutuhan, lalu antarsemen dihubungkan menjadi satu jaringan.",
    example:
      "Sebuah gedung kampus dapat menggunakan topologi star di setiap lantai, lalu menghubungkan switch tiap lantai ke backbone utama. Tiap lantai membentuk segmen star dan keseluruhannya menjadi jaringan hybrid.",
    keyPoints: [
      "Desain fleksibel dan dapat disesuaikan dengan ukuran serta kebutuhan tiap segmen.",
      "Gangguan di satu segmen tertentu bisa dibatasi agar tidak memutus segmen lain, bergantung pada rancangan dan perangkat yang digunakan.",
      "Biaya perangkat dan kabel serta kerumitan perencanaan dan pemeliharaan dapat lebih tinggi.",
    ],
    diagram: "hybrid",
  },
  {
    id: "perbandingan",
    title: "Perbandingan Topologi",
    short: "Bandingkan karakteristik, kelebihan, dan kekurangannya.",
    description:
      "Setiap topologi memiliki bentuk hubungan perangkat dan konsekuensi yang berbeda. Pemilihan topologi sebaiknya menyesuaikan kebutuhan, ukuran jaringan, biaya, dan kemudahan pemeliharaan.",
    example: "Star sering dipilih untuk LAN modern karena mudah dikelola, sementara mesh berguna saat ketersediaan jalur cadangan menjadi prioritas.",
    keyPoints: [
      "Bus: sederhana dan hemat kabel, tetapi backbone menjadi titik kritis.",
      "Star: mudah dikelola, tetapi bergantung pada perangkat pusat; ring: perangkat tersambung membentuk lingkaran.",
      "Mesh: memiliki beberapa jalur alternatif; tree: cabang bertingkat; hybrid: menggabungkan beberapa jenis topologi.",
    ],
    diagram: "star",
  },
];

const QUESTIONS = [
  {
    question: "Apa yang dimaksud dengan jaringan komputer?",
    answers: ["Kumpulan perangkat yang saling terhubung untuk bertukar data", "Satu komputer tanpa koneksi apa pun", "Program untuk mengedit gambar", "Perangkat untuk mencetak dokumen"],
    correct: 0,
    explanation: "Jaringan komputer menghubungkan perangkat agar dapat berkomunikasi dan berbagi data maupun sumber daya.",
  },
  {
    question: "Topologi mana yang menghubungkan setiap perangkat ke satu perangkat pusat?",
    answers: ["Bus", "Ring", "Star", "Mesh"],
    correct: 2,
    explanation: "Pada topologi star, perangkat pusat seperti switch menghubungkan seluruh perangkat.",
  },
  {
    question: "Apa kelemahan utama topologi bus?",
    answers: ["Harus menggunakan perangkat pusat", "Kerusakan kabel backbone dapat mengganggu seluruh jaringan", "Memerlukan koneksi langsung antarseluruh perangkat", "Tidak dapat menghubungkan komputer"],
    correct: 1,
    explanation: "Semua perangkat berbagi backbone yang sama, sehingga gangguan pada jalur utama berdampak pada jaringan.",
  },
  {
    question: "Pada topologi ring, bagaimana perangkat umumnya saling terhubung?",
    answers: ["Ke satu switch pusat", "Dalam bentuk lingkaran dengan perangkat tetangga", "Melalui satu kabel backbone lurus", "Setiap perangkat terhubung ke semua perangkat lain"],
    correct: 1,
    explanation: "Setiap perangkat pada ring terhubung dengan dua tetangganya untuk membentuk sebuah lingkaran.",
  },
  {
    question: "Topologi mana yang dikenal menyediakan beberapa jalur alternatif?",
    answers: ["Bus", "Ring", "Star", "Mesh"],
    correct: 3,
    explanation: "Koneksi berlapis pada mesh memungkinkan data melewati jalur lain saat sebuah sambungan mengalami gangguan.",
  },
  {
    question: "Apa salah satu manfaat jaringan komputer?",
    answers: ["Mencegah semua kerusakan perangkat", "Berbagi file dan sumber daya", "Menghilangkan kebutuhan keamanan data", "Membuat semua komputer bekerja tanpa listrik"],
    correct: 1,
    explanation: "Pengguna jaringan dapat berbagi file, printer, koneksi internet, dan sumber daya lainnya.",
  },
  {
    question: "Apa pertimbangan yang tepat saat memilih topologi?",
    answers: ["Warna casing komputer saja", "Kebutuhan, biaya, ukuran, dan kemudahan pemeliharaan", "Jumlah aplikasi di desktop", "Jenis keyboard yang digunakan"],
    correct: 1,
    explanation: "Topologi dipilih berdasarkan kebutuhan konektivitas, biaya, skala, dan bagaimana jaringan akan dikelola.",
  },
  {
    question: "Ciri utama topologi tree adalah...",
    answers: ["Semua perangkat tersambung ke satu jalur tanpa cabang", "Perangkat disusun bertingkat dari perangkat inti ke switch cabang dan perangkat ujung", "Setiap perangkat terhubung langsung ke seluruh perangkat lain", "Perangkat membentuk satu lingkaran tertutup"],
    correct: 1,
    explanation: "Topologi tree menggunakan susunan hierarkis yang terdiri dari perangkat inti, cabang, dan perangkat di tingkat bawah.",
  },
  {
    question: "Apa yang membedakan topologi hybrid dari satu jenis topologi tunggal?",
    answers: ["Hybrid menggabungkan dua atau lebih jenis topologi dalam satu jaringan", "Hybrid tidak menggunakan switch atau perangkat penghubung", "Hybrid selalu berupa satu kabel lurus", "Hybrid hanya dapat memiliki dua komputer"],
    correct: 0,
    explanation: "Topologi hybrid memadukan dua atau lebih jenis topologi, misalnya segmen star yang terhubung melalui backbone.",
  },
  {
    question: "Apa yang dimaksud dengan topologi jaringan?",
    answers: ["Pola hubungan antarperangkat dan jalur komunikasi dalam jaringan", "Kecepatan prosesor pada setiap komputer", "Daftar aplikasi yang terpasang di perangkat", "Ukuran file yang dikirim melalui internet"],
    correct: 0,
    explanation: "Topologi jaringan menggambarkan pola hubungan antarperangkat dan bagaimana data dapat mengalir di dalam jaringan.",
  },
  {
    question: "Apa perbedaan topologi fisik dan topologi logis?",
    answers: ["Fisik menggambarkan susunan perangkat dan media, sedangkan logis menggambarkan alur komunikasi data", "Fisik hanya berlaku untuk Wi-Fi, sedangkan logis hanya berlaku untuk kabel", "Fisik menjelaskan kecepatan internet, sedangkan logis menjelaskan ukuran perangkat", "Keduanya selalu menggambarkan hal yang sama"],
    correct: 0,
    explanation: "Topologi fisik menunjukkan susunan perangkat dan media penghubungnya, sementara topologi logis menunjukkan bagaimana data mengalir.",
  },
  {
    question: "Dalam jaringan komputer, apa yang disebut node?",
    answers: ["Perangkat yang terhubung ke jaringan", "Kabel utama untuk menghubungkan seluruh perangkat", "Aturan untuk memberi nama file", "Program untuk mengamankan layar komputer"],
    correct: 0,
    explanation: "Node adalah perangkat yang menjadi bagian dari jaringan, seperti komputer, printer, router, atau switch.",
  },
  {
    question: "Apa arti link dalam topologi jaringan?",
    answers: ["Jalur atau media yang menghubungkan perangkat dalam jaringan", "Nama lain untuk pengguna jaringan", "Aplikasi untuk membuat dokumen", "Alamat rumah tempat perangkat dipasang"],
    correct: 0,
    explanation: "Link adalah jalur atau media komunikasi yang menghubungkan node, misalnya kabel Ethernet atau koneksi nirkabel.",
  },
  {
    question: "Apa dampak jika switch pusat pada topologi star mengalami kerusakan?",
    answers: ["Koneksi banyak atau seluruh perangkat pada jaringan dapat terganggu", "Hanya nama jaringan yang berubah", "Perangkat otomatis berubah menjadi topologi mesh", "Tidak ada perangkat yang terdampak"],
    correct: 0,
    explanation: "Perangkat pada topologi star bergantung pada perangkat pusat, sehingga kerusakannya dapat mengganggu koneksi jaringan.",
  },
  {
    question: "Apa salah satu kekurangan topologi mesh dengan banyak koneksi langsung?",
    answers: ["Membutuhkan lebih banyak kabel atau koneksi sehingga biaya dan pengelolaannya meningkat", "Tidak menyediakan jalur komunikasi alternatif", "Semua perangkat harus memakai satu kabel backbone", "Perangkat harus disusun melingkar"],
    correct: 0,
    explanation: "Banyaknya koneksi pada mesh menyediakan jalur alternatif, tetapi juga menambah kebutuhan kabel, port, biaya, dan pengelolaan.",
  },
];

const VIDEOS = [
  {
    title: "Video Pembelajaran 1",
    topic: "Video pembelajaran",
    description: "Tonton video pembelajaran di YouTube.",
    url: "https://www.youtube.com/watch?v=2tWCf7AEe8c",
  },
  {
    title: "Video Pembelajaran 2",
    topic: "Video pembelajaran",
    description: "Tonton video pembelajaran di YouTube.",
    url: "https://www.youtube.com/watch?v=P2LaZvjU0b0",
  },
  {
    title: "Video Pembelajaran 3",
    topic: "Video pembelajaran",
    description: "Tonton video pembelajaran di YouTube.",
    url: "https://www.youtube.com/watch?v=eA4GoIqmCsQ",
  },
  {
    title: "Video Pembelajaran 4",
    topic: "Video pembelajaran",
    description: "Tonton video pembelajaran di YouTube.",
    url: "https://www.youtube.com/watch?v=DjW6sFYYEQE",
  },
  {
    title: "Video Pembelajaran 5",
    topic: "Video pembelajaran",
    description: "Tonton video pembelajaran di YouTube.",
    url: "https://www.youtube.com/watch?v=RvnbAEbmHV0",
  },
  {
    title: "Video Pembelajaran 6",
    topic: "Video pembelajaran",
    description: "Tonton video pembelajaran di YouTube.",
    url: "https://www.youtube.com/watch?v=9Wjy-S3cvQs",
  },
  {
    title: "Video Pembelajaran 7",
    topic: "Video pembelajaran",
    description: "Tonton video pembelajaran di YouTube.",
    url: "https://www.youtube.com/watch?v=g2Ss0tPiHsk",
  },
  {
    title: "Video Pembelajaran 8",
    topic: "Video pembelajaran",
    description: "Tonton video pembelajaran di YouTube.",
    url: "https://www.youtube.com/watch?v=0wEhgz3pl1g",
  },
];

const STORAGE_KEY = "netlearn-app-v1";
const TOPOLOGY_IMAGES = {
  bus: {
    title: "Bus",
    src: "assets/images/topologies/topologi-bus.png",
    alt: "Diagram topologi bus: server, workstation, dan printer terhubung ke satu kabel backbone dengan terminator di kedua ujung.",
  },
  star: {
    title: "Star",
    src: "assets/images/topologies/topologi-star.png",
    alt: "Diagram topologi star: beberapa komputer terhubung secara terpisah ke satu switch pusat.",
  },
  ring: {
    title: "Ring",
    src: "assets/images/topologies/topologi-ring.jpg",
    alt: "Diagram topologi ring: perangkat tersambung satu sama lain membentuk lingkaran.",
  },
  mesh: {
    title: "Mesh",
    src: "assets/images/topologies/topologi-mesh.png",
    alt: "Diagram topologi mesh: perangkat terhubung melalui beberapa jalur koneksi.",
  },
  tree: {
    title: "Tree",
    src: "assets/images/topologies/topologi-tree.png",
    alt: "Diagram topologi tree: internet dan switch utama bercabang ke sejumlah switch serta perangkat.",
  },
  hybrid: {
    title: "Hybrid",
    src: "assets/images/topologies/topologi-hybrid.png",
    alt: "Diagram topologi hybrid: server pusat menghubungkan beberapa departemen dengan susunan topologi berbeda.",
  },
};
const CONCEPT_IMAGES = {
  dasar: {
    src: "assets/images/concepts/pengertian-jaringan.png",
    alt: "Ilustrasi jaringan komputer: sejumlah komputer saling terhubung melalui jaringan internet.",
    caption: "Komputer-komputer saling terhubung untuk berkomunikasi dan bertukar data.",
  },
  manfaat: {
    src: "assets/images/concepts/manfaat-jaringan.png",
    alt: "Ilustrasi manfaat jaringan: server, router, komputer, dan perangkat lain berbagi koneksi.",
    caption: "Jaringan menghubungkan server, komputer, dan perangkat agar dapat berbagi sumber daya.",
  },
};
const NAV_ITEMS = [
  ["dashboard", "Beranda", "home"],
  ["petunjuk", "Petunjuk", "help"],
  ["tujuan", "Tujuan", "target"],
  ["materi", "Materi", "book"],
  ["video", "Video", "video"],
  ["kuis", "Kuis", "quiz"],
  ["riwayat", "Riwayat", "history"],
  ["profil", "Profil", "user"],
];
const ICON_PATHS = {
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.5 2.5 0 1 1 4.5 1.5c-.9 1.2-2.1 1.4-2.1 3M12 17h.01"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z"/><path d="M4 5.5v13A2.5 2.5 0 0 1 6.5 16H20"/>',
  video: '<rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 10 4-3v10l-4-3z"/>',
  quiz: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3.5h6M8.5 10h7M8.5 14h7M8.5 18h4"/>',
  history: '<path d="M3 12a9 9 0 1 0 2.7-6.4L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5m6 6-6-6 6-6"/>',
  bookOpen: '<path d="M12 7v14M3 18V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M8 7h1m6 0h1"/>',
  chart: '<path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 5-6"/>',
  play: '<path d="m8 5 11 7-11 7z"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a16 16 0 0 1-3.1 3.8M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7c1.4 0 2.7-.4 3.8-1"/>',
};

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
let toastTimer;
let state = {
  page: "splash",
  authMode: "login",
  user: null,
  activeMaterial: null,
  quizIndex: 0,
  quizAnswers: [],
  quizFeedback: null,
  latestAttempt: null,
  showLogout: false,
};
let store = loadStore();

function loadStore() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { users: [], progress: {}, attempts: {} };
  const saved = JSON.parse(raw);
  return {
    users: Array.isArray(saved.users) ? saved.users : [],
    progress: saved.progress && typeof saved.progress === "object" ? saved.progress : {},
    attempts: saved.attempts && typeof saved.attempts === "object" ? saved.attempts : {},
  };
}

function persistStore() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function icon(name, size = 18) {
  const path = ICON_PATHS[name] || ICON_PATHS.globe;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function currentProgress() {
  return store.progress[state.user.email] || [];
}

function currentAttempts() {
  return store.attempts[state.user.email] || [];
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2900);
}

function networkDiagram(type = "star") {
  const nodes = {
    bus: [[90, 83, "01"], [195, 83, "02"], [300, 83, "03"]],
    star: [[190, 38, "SW"], [74, 128, "01"], [190, 128, "02"], [306, 128, "03"]],
    ring: [[190, 28, "01"], [305, 81, "02"], [262, 154, "03"], [118, 154, "04"], [75, 81, "05"]],
    mesh: [[190, 27, "01"], [307, 83, "02"], [263, 158, "03"], [117, 158, "04"], [73, 83, "05"]],
    tree: [[190, 28, "CORE"], [105, 82, "SW1"], [275, 82, "SW2"], [48, 145, "PC1"], [105, 145, "PC2"], [162, 145, "PC3"], [218, 145, "PC4"], [275, 145, "PC5"], [332, 145, "PC6"]],
    hybrid: [[190, 85, "CORE"], [92, 45, "SW1"], [288, 45, "SW2"], [42, 144, "PC1"], [92, 144, "PC2"], [142, 144, "PC3"], [238, 144, "PC4"], [288, 144, "PC5"], [338, 144, "PC6"]],
  }[type] || [];
  let lines = "";
  if (type === "bus") {
    lines = '<path d="M42 83h296" stroke="#7592c6" stroke-width="4" stroke-linecap="round"/><path d="M42 73v20M338 73v20" stroke="#aebfe0" stroke-width="3"/>' +
      nodes.map(([x, y]) => `<path d="M${x} ${y}V52" stroke="#7592c6" stroke-width="2"/>`).join("");
  } else if (type === "tree") {
    lines = '<path d="M190 39L105 69M190 39L275 69M105 94L48 130M105 94L105 130M105 94L162 130M275 94L218 130M275 94L275 130M275 94L332 130" stroke="#718dbf" stroke-width="2"/>';
  } else if (type === "hybrid") {
    lines = '<path d="M42 85h296M190 85L92 56M190 85L288 56M92 57V128M288 57V128M92 128L42 129M92 128H142M288 128H238M288 128H338" stroke="#718dbf" stroke-width="2"/>';
  } else if (type === "star") {
    const [cx, cy] = nodes[0];
    lines = nodes.slice(1).map(([x, y]) => `<path d="M${cx} ${cy + 11}L${x} ${y - 11}" stroke="#718dbf" stroke-width="2"/>`).join("");
  } else if (type === "ring") {
    lines = nodes.map(([x, y], index) => {
      const next = nodes[(index + 1) % nodes.length];
      return `<path d="M${x} ${y}L${next[0]} ${next[1]}" stroke="#718dbf" stroke-width="2"/>`;
    }).join("");
  } else {
    lines = nodes.flatMap(([x, y], index) => nodes.slice(index + 1).map(([nextX, nextY]) =>
      `<path d="M${x} ${y}L${nextX} ${nextY}" stroke="#718dbf" stroke-width="1.4" opacity=".75"/>`,
    )).join("");
  }
  const nodeMarkup = nodes.map(([x, y, label], index) => {
    const isCenter = (type === "star" && index === 0) || (type === "hybrid" && index === 0);
    const isBranch = type === "tree" && index >= 1 && index <= 2;
    const width = isCenter ? 43 : (type === "tree" || type === "hybrid") ? (isBranch ? 39 : 35) : 35;
    const height = isCenter ? 34 : 30;
    const isCore = isCenter || isBranch;
    return `<g><rect x="${x - width / 2}" y="${y - height / 2}" width="${width}" height="${height}" rx="9" fill="${isCore ? "#356df0" : "#172d51"}" stroke="${isCore ? "#84a7ff" : "#526b94"}" stroke-width="1.5"/><text x="${x}" y="${y + 4}" text-anchor="middle" fill="#dce8ff" font-size="${isCenter ? 8 : isBranch ? 8 : type === "tree" || type === "hybrid" ? 6.2 : 8}" font-family="DM Sans, sans-serif" font-weight="700">${label}</text></g>`;
  }).join("");
  const title = type === "tree" ? "pohon hierarkis" : type === "hybrid" ? "gabungan backbone dan segmen star" : type;
  return `<svg class="network-svg" viewBox="0 0 380 190" role="img" aria-label="Diagram topologi ${escapeHTML(title)}"><defs><filter id="soft-glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>${lines}${nodeMarkup}</svg>`;
}

function topologyImage(type) {
  const image = TOPOLOGY_IMAGES[type];
  if (!image) return "";
  return `<img class="topology-image" src="${image.src}" alt="${escapeHTML(image.alt)}" decoding="async">`;
}

function conceptImage(type) {
  const image = CONCEPT_IMAGES[type];
  if (!image) return "";
  return `<figure class="concept-image"><img src="${image.src}" alt="${escapeHTML(image.alt)}" decoding="async"><figcaption>${escapeHTML(image.caption)}</figcaption></figure>`;
}

function topologyImageGallery() {
  return `<div class="topology-gallery">${Object.values(TOPOLOGY_IMAGES).map((image) => `
    <figure class="topology-gallery-item">
      <img src="${image.src}" alt="${escapeHTML(image.alt)}" loading="lazy" decoding="async">
      <figcaption>Topologi ${image.title}</figcaption>
    </figure>`).join("")}</div>`;
}

function getInitial(name) {
  return (name || "H").trim().charAt(0).toUpperCase();
}

function renderSplash() {
  app.innerHTML = `
    <main class="splash-screen">
      <section class="splash-card">
        <div class="splash-copy">
          <div class="brand" style="padding:0;color:#17233e">
            <span class="brand-mark">${icon("globe", 21)}</span>
            <span><strong>Net Learn</strong><small style="color:#8794a8">Media Pembelajaran</small></span>
          </div>
          <h1>Jaringan komputer,<br>lebih mudah dipahami.</h1>
          <p>Belajar konsep dasar, jenis, manfaat, dan topologi jaringan lewat materi visual, video, serta kuis interaktif.</p>
          <button class="button" data-action="start">${icon("arrow", 15)} Mulai Belajar</button>
          <div class="splash-footnote">Multimedia Pembelajaran Interaktif · Versi 1.0</div>
        </div>
        <div class="splash-visual">
          <div class="network-card">
            <div class="network-head"><span>Skema koneksi jaringan</span><span class="pulse"></span></div>
            <img class="splash-network-image" src="assets/images/cover/sampul-jaringan.png" alt="Ilustrasi komputer, server, cloud, dan perangkat lain yang saling terhubung dalam jaringan." decoding="async">
          </div>
        </div>
      </section>
    </main>`;
}

function renderAuth() {
  const registering = state.authMode === "register";
  const nameField = registering
    ? `<div class="field"><label for="auth-name">Nama lengkap</label><input id="auth-name" name="name" autocomplete="name" required maxlength="60" placeholder="Nama kamu"></div>`
    : "";
  app.innerHTML = `
    <main class="auth-screen">
      <section class="auth-card">
        <aside class="auth-aside">
          <div class="brand">
            <span class="brand-mark">${icon("globe", 21)}</span>
            <span><strong>Net Learn</strong><small>Media Pembelajaran</small></span>
          </div>
          <h2>Belajar jaringan, selangkah demi selangkah.</h2>
          <p>Progres dan hasil kuis tersimpan di perangkat ini selama kamu belajar.</p>
          ${networkDiagram("mesh")}
        </aside>
        <div class="auth-form-wrap">
          <h1>${registering ? "Buat akun baru" : "Selamat datang kembali"}</h1>
          <p>${registering ? "Daftar untuk mulai menyimpan progres belajar." : "Masuk untuk melanjutkan pembelajaranmu."}</p>
          <form id="auth-form" novalidate>
            ${nameField}
            <div class="field"><label for="auth-email">Email</label><input id="auth-email" name="email" type="email" autocomplete="email" required maxlength="120" placeholder="nama@email.com"></div>
            <div class="field"><label for="auth-password">Password</label><div class="password-input-wrap"><input id="auth-password" name="password" type="password" autocomplete="${registering ? "new-password" : "current-password"}" required minlength="6" placeholder="Minimal 6 karakter"><button class="password-toggle" type="button" data-action="toggle-password" aria-label="Tampilkan password" aria-pressed="false">${icon("eye", 18)}</button></div></div>
            <p id="auth-error" class="form-error" role="alert"></p>
            <button class="button" type="submit" style="width:100%">${registering ? "Daftar akun" : "Masuk"} ${icon("arrow", 14)}</button>
          </form>
          <div class="auth-switch">
            ${registering ? "Sudah punya akun?" : "Belum punya akun?"}
            <button data-action="toggle-auth">${registering ? "Masuk" : "Daftar sekarang"}</button>
          </div>
          <div class="security-note">Mode demo: akun, progres, dan nilai disimpan secara lokal di browser ini, bukan di server.</div>
        </div>
      </section>
    </main>`;
}

function renderNav() {
  return NAV_ITEMS.map(([id, label, iconName]) => `
    <button class="nav-link ${state.page === id ? "active" : ""}" data-action="navigate" data-page="${id}" ${state.page === id ? 'aria-current="page"' : ""}>
      ${icon(iconName, 15)}<span>${label}</span>
    </button>`).join("");
}

function renderShell(content) {
  app.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <span class="brand-mark">${icon("globe", 21)}</span>
          <span><strong>Net Learn</strong><small>Media Pembelajaran</small></span>
        </div>
        <div class="nav-label">Menu pembelajaran</div>
        <nav class="nav-list" aria-label="Navigasi utama">${renderNav()}<button class="nav-link" data-action="logout">${icon("logout", 15)}<span>Keluar</span></button></nav>
        <div class="sidebar-foot"><strong>Belajar itu terhubung.</strong><br>Temukan konsep di setiap koneksi.</div>
      </aside>
      <main class="main-area">
        <header class="topbar">
          <div class="breadcrumb"><strong>Topologi Jaringan Komputer</strong><span>• Versi Interaktif 1.0</span></div>
          <div class="user-chip"><div><strong>Halo, ${escapeHTML(state.user.name)}!</strong><small>Mahasiswa / Peserta Belajar</small></div><span class="avatar">${escapeHTML(getInitial(state.user.name))}</span></div>
        </header>
        <div class="content">${content}<footer class="page-footer">Net Learn · Media pembelajaran interaktif jaringan komputer</footer></div>
      </main>
      ${state.showLogout ? renderLogoutModal() : ""}
    </div>`;
}

function renderStat(iconName, color, label, main, supporting, percent) {
  return `<article class="stat-card">
    <span class="stat-icon ${color}">${icon(iconName, 17)}</span>
    <div class="stat-copy"><span class="stat-label">${label}</span><div class="stat-main">${main}</div>
    ${percent !== undefined ? `<div class="progress-track"><span style="width:${percent}%"></span></div>` : `<span class="stat-hint">${supporting}</span>`}</div>
  </article>`;
}

function materialCard(material) {
  const done = currentProgress().includes(material.id);
  return `<button class="material-card" data-action="open-material" data-material="${material.id}">
    <span class="material-icon">${icon(material.diagram === "star" ? "target" : material.diagram === "mesh" ? "globe" : "bookOpen", 17)}</span>
    <h3>${escapeHTML(material.title)}</h3><p>${escapeHTML(material.short)}</p>
    <span class="material-meta">${done ? '<span class="badge">' + icon("check", 11) + " Selesai</span>" : '<span class="badge pending">Belum dipelajari</span>'}<span>5–8 menit</span></span>
  </button>`;
}

function renderDashboard() {
  const completed = currentProgress().length;
  const attempts = currentAttempts();
  const latest = attempts[0];
  const score = latest ? latest.score : "—";
  const videoCount = VIDEOS.length;
  const content = `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow"><span class="pulse"></span> Siap melanjutkan pembelajaran</span>
        <h1>Selamat Datang, ${escapeHTML(state.user.name.split(" ")[0])}!</h1>
        <p>Mari belajar konsep, jenis, dan topologi Jaringan Komputer dengan cara yang lebih mudah, visual, dan interaktif.</p>
        <div class="quote">“Pahami jaringan, bangun masa depan digital.”</div>
        <div class="hero-actions"><button class="button" data-action="navigate" data-page="materi">Mulai Belajar ${icon("arrow", 14)}</button><button class="button button-light" data-action="navigate" data-page="petunjuk">Lihat Petunjuk</button></div>
      </div>
      <div class="network-card">
        <div class="network-head"><span>Skema koneksi jaringan</span><span class="pulse"></span></div>
        ${networkDiagram("star")}
        <div class="network-caption">Topologi star terintegrasi</div>
      </div>
    </section>
    <section class="stats-grid" aria-label="Ringkasan progres">
      ${renderStat("bookOpen", "blue", "Progres materi", `<strong>${completed} / ${MATERIALS.length}</strong><span>Submateri dipelajari</span>`, "", (completed / MATERIALS.length) * 100)}
      ${renderStat("chart", "amber", "Skor kuis terakhir", `<strong>${score}</strong><span>${latest ? "/ 100 poin" : "Belum ada"}</span>`, latest ? `${latest.correct} jawaban benar pada percobaan terakhir` : "Selesaikan kuis untuk melihat nilai")}
      ${renderStat("video", "green", "Video tersedia", `<strong>${videoCount} video</strong>`, "Tonton materi berdasarkan topik")}
    </section>
    <div class="section-head"><div><h2>Materi Pembelajaran</h2><p>Pilih topik untuk mulai memahami jaringan komputer.</p></div><button class="text-link" data-action="navigate" data-page="materi">Lihat semua materi →</button></div>
    <section class="material-grid">${MATERIALS.map(materialCard).join("")}</section>`;
  renderShell(content);
}

function renderPageHeading(title, description) {
  return `<header class="page-heading"><h1>${title}</h1><p>${description}</p></header>`;
}

function renderHelp() {
  const content = `${renderPageHeading("Petunjuk Penggunaan", "Ikuti langkah sederhana berikut untuk menggunakan Net Learn.")}
    <section class="feature-grid">
      <article class="feature-card"><span class="stat-icon blue">${icon("book", 17)}</span><div><h3>Pelajari materi</h3><p>Pilih menu Materi, buka topik yang ingin dipahami, lalu gunakan tombol Sebelumnya dan Berikutnya untuk berpindah. Tekan “Tandai Selesai” setelah mempelajari topik.</p></div></article>
      <article class="feature-card"><span class="stat-icon green">${icon("video", 17)}</span><div><h3>Tonton video</h3><p>Pilih menu Video Pembelajaran untuk menemukan video berdasarkan topik. Video dibuka di YouTube agar pemutaran dan kontrol video tersedia.</p></div></article>
      <article class="feature-card"><span class="stat-icon amber">${icon("quiz", 17)}</span><div><h3>Kerjakan kuis</h3><p>Pilih satu jawaban di setiap soal, lalu tekan “Periksa jawaban” untuk melihat feedback dan pembahasannya. Selesaikan semua soal untuk melihat nilai.</p></div></article>
      <article class="feature-card"><span class="stat-icon blue">${icon("history", 17)}</span><div><h3>Pantau progres</h3><p>Riwayat menampilkan nilai kuis serta materi yang sudah diselesaikan. Data tersimpan di browser ini dan terhubung ke akun lokal yang kamu gunakan.</p></div></article>
    </section>
    <section class="panel" style="margin-top:15px"><h2>Navigasi</h2><p>Gunakan menu di sisi kiri untuk berpindah antara Beranda, Petunjuk, Tujuan, Materi, Video, Kuis, Riwayat, dan Profil. Tombol kembali di halaman materi akan membawamu ke daftar materi.</p></section>`;
  renderShell(content);
}

function renderObjectives() {
  const objectives = [
    ["Memahami konsep dasar jaringan", "Menjelaskan pengertian, cara perangkat terhubung, dan pertukaran data di dalam jaringan.", "globe"],
    ["Membedakan jenis jaringan", "Mengelompokkan jaringan berdasarkan cakupan wilayah serta media transmisi kabel atau nirkabel.", "target"],
    ["Menjelaskan manfaat jaringan", "Mengidentifikasi manfaat berbagi sumber daya, berkomunikasi, dan mengakses informasi.", "target"],
    ["Mengenali berbagai topologi", "Mengidentifikasi karakteristik topologi bus, star, ring, mesh, tree, dan hybrid.", "book"],
    ["Membandingkan topologi", "Menjelaskan perbedaan, kelebihan, dan kekurangan dari setiap topologi.", "chart"],
    ["Mengevaluasi pemahaman", "Mengerjakan kuis dan menggunakan pembahasan untuk memperkuat pemahaman.", "quiz"],
  ];
  const content = `${renderPageHeading("Tujuan Pembelajaran", "Setelah mengikuti pembelajaran ini, kamu diharapkan mampu:")}
    <section class="objective-grid">${objectives.map(([title, description, iconName], index) => `
      <article class="objective-card"><span class="stat-icon blue" style="margin-bottom:13px">${icon(iconName, 17)}</span><h3>${String(index + 1).padStart(2, "0")} · ${title}</h3><p>${description}</p></article>`).join("")}</section>
    <div class="button-row" style="margin-top:17px"><button class="button" data-action="navigate" data-page="materi">Mulai belajar ${icon("arrow", 14)}</button></div>`;
  renderShell(content);
}

function renderMaterials() {
  if (state.activeMaterial) {
    renderMaterialDetail();
    return;
  }
  const content = `${renderPageHeading("Materi Pembelajaran", `${MATERIALS.length} topik ringkas untuk membangun pemahaman dasar jaringan komputer.`)}
    <section class="material-grid">${MATERIALS.map(materialCard).join("")}</section>`;
  renderShell(content);
}

function renderMaterialDetail() {
  const index = MATERIALS.findIndex((material) => material.id === state.activeMaterial);
  if (index < 0) {
    state.activeMaterial = null;
    renderMaterials();
    return;
  }
  const material = MATERIALS[index];
  const completed = currentProgress().includes(material.id);
  const comparison = material.id === "perbandingan";
  const networkTypes = material.id === "jenis-jaringan";
  const comparisonTable = comparison ? `<div class="panel comparison-wrap" style="margin-top:15px">
    <table class="comparison-table"><thead><tr><th>Topologi</th><th>Bentuk koneksi</th><th>Kelebihan</th><th>Kekurangan</th></tr></thead><tbody>
      <tr><td><strong>Bus</strong></td><td>Berbagi backbone utama</td><td>Sederhana, hemat kabel</td><td>Backbone menjadi titik kritis</td></tr>
      <tr><td><strong>Star</strong></td><td>Terhubung ke perangkat pusat</td><td>Mudah dikelola dan diperluas</td><td>Bergantung pada perangkat pusat</td></tr>
      <tr><td><strong>Ring</strong></td><td>Perangkat membentuk lingkaran</td><td>Aliran komunikasi teratur</td><td>Gangguan jalur dapat memengaruhi ring</td></tr>
      <tr><td><strong>Mesh</strong></td><td>Memiliki beberapa jalur antarnode</td><td>Redundan dan toleran gangguan</td><td>Biaya dan kebutuhan kabel lebih tinggi</td></tr>
      <tr><td><strong>Tree</strong></td><td>Cabang perangkat tersusun bertingkat dari perangkat inti</td><td>Hierarkis, mudah dibagi dan diperluas per cabang</td><td>Backbone atau perangkat inti menjadi titik kritis</td></tr>
      <tr><td><strong>Hybrid</strong></td><td>Menggabungkan dua atau lebih jenis topologi</td><td>Fleksibel mengikuti kebutuhan tiap segmen</td><td>Perencanaan, perangkat, dan pengelolaan dapat lebih kompleks</td></tr>
    </tbody></table></div>` : "";
  const networkTypeTables = networkTypes ? `<section class="panel comparison-wrap" style="margin-top:15px">
    <h2>Berdasarkan jangkauan wilayah</h2>
    <table class="comparison-table"><thead><tr><th>Jenis</th><th>Cakupan</th><th>Contoh</th></tr></thead><tbody>
      <tr><td><strong>LAN</strong></td><td>Area terbatas, seperti rumah, sekolah, kantor, atau satu gedung.</td><td>Komputer di laboratorium sekolah yang saling terhubung.</td></tr>
      <tr><td><strong>MAN</strong></td><td>Beberapa jaringan dalam satu kota atau kawasan metropolitan.</td><td>Menghubungkan kampus atau kantor cabang di satu kota.</td></tr>
      <tr><td><strong>WAN</strong></td><td>Wilayah luas, termasuk antarnegara atau benua.</td><td>Internet atau jaringan perusahaan multinasional.</td></tr>
    </tbody></table>
    <p class="source-citation">Sumber bagian jangkauan wilayah (LAN, MAN, WAN): <a href="https://dte.telkomuniversity.ac.id/dasar-dasar-jaringan-komputer/" target="_blank" rel="noopener noreferrer">“Jenis-Jenis Jaringan Komputer,” Dasar-Dasar Jaringan Komputer — D3 Teknologi Telekomunikasi, Telkom University</a>.</p>
    <h2 style="margin-top:20px">Berdasarkan media transmisi</h2>
    <table class="comparison-table"><thead><tr><th>Jenis</th><th>Media dan karakteristik</th><th>Contoh</th></tr></thead><tbody>
      <tr><td><strong>Kabel (wired)</strong></td><td>Menggunakan kabel Ethernet atau serat optik; umumnya stabil, tetapi membatasi mobilitas dan memerlukan pemasangan kabel.</td><td>Komputer kantor atau perangkat di pusat data.</td></tr>
      <tr><td><strong>Nirkabel (wireless)</strong></td><td>Menggunakan gelombang radio; lebih fleksibel, tetapi kualitas koneksi dapat dipengaruhi jarak, penghalang, dan gangguan sinyal.</td><td>Wi-Fi rumah, hotspot, atau jaringan seluler.</td></tr>
    </tbody></table>
    <p class="source-citation">Sumber bagian media transmisi (kabel dan nirkabel): <a href="https://dte.telkomuniversity.ac.id/dasar-dasar-jaringan-komputer/" target="_blank" rel="noopener noreferrer">“Wired Network” dan “Wireless Network,” Dasar-Dasar Jaringan Komputer — D3 Teknologi Telekomunikasi, Telkom University</a>.</p>
  </section>` : "";
  const content = `${renderPageHeading("Materi Pembelajaran", `Topik ${index + 1} dari ${MATERIALS.length} · ${escapeHTML(material.title)}`)}
    <div class="button-row" style="margin-bottom:13px"><button class="button button-secondary" data-action="back-materials">${icon("arrowLeft", 14)} Kembali ke daftar materi</button></div>
    <section class="detail-layout${networkTypes ? " detail-layout-wide" : ""}">
      <article class="panel">
        <span class="badge ${completed ? "" : "pending"}">${completed ? icon("check", 11) + " Sudah dipelajari" : "Materi baru"}</span>
        <h2 style="margin-top:13px;font-size:19px">${escapeHTML(material.title)}</h2>
        <p class="detail-intro">${escapeHTML(material.description)}</p>
        <h3>Karakteristik utama</h3>
        <ul class="detail-list">${material.keyPoints.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul>
        <h3>Contoh penggunaan</h3><p>${escapeHTML(material.example)}</p>
        ${networkTypes ? `<p class="source-citation">Sumber penjelasan dan contoh: <a href="https://dte.telkomuniversity.ac.id/dasar-dasar-jaringan-komputer/" target="_blank" rel="noopener noreferrer">“Jenis-Jenis Jaringan Komputer,” Dasar-Dasar Jaringan Komputer — D3 Teknologi Telekomunikasi, Telkom University</a>.</p>` : ""}
        ${comparison ? `<h3>Ringkasan perbandingan</h3><p>Gunakan tabel berikut untuk membandingkan karakteristik utama masing-masing topologi.</p>` : ""}
      </article>
      ${networkTypes ? "" : `<div class="detail-visual">
        ${comparison ? topologyImageGallery() : conceptImage(material.id) || topologyImage(material.diagram) || networkDiagram(material.diagram)}
        ${comparison || CONCEPT_IMAGES[material.id] ? "" : `<p class="detail-caption">${TOPOLOGY_IMAGES[material.diagram] ? `Gambar ilustrasi Topologi ${TOPOLOGY_IMAGES[material.diagram].title}` : `Diagram konseptual ${escapeHTML(material.diagram)}`}</p>`}
      </div>`}
    </section>
    ${networkTypeTables}
    ${comparisonTable}
    <div class="button-row" style="justify-content:space-between;margin-top:17px">
      <button class="button button-secondary" data-action="previous-material" ${index === 0 ? "disabled" : ""}>${icon("arrowLeft", 14)} Sebelumnya</button>
      <div class="button-row">
        ${completed ? '<span class="badge">' + icon("check", 11) + " Progres tersimpan</span>" : `<button class="button button-soft" data-action="complete-material">Tandai selesai</button>`}
        <button class="button" data-action="next-material">${index === MATERIALS.length - 1 ? "Kembali ke daftar" : "Berikutnya"} ${icon("arrow", 14)}</button>
      </div>
    </div>`;
  renderShell(content);
}

function renderVideos() {
  const content = `${renderPageHeading("Video Pembelajaran", "Pilih topik untuk mencari video pendukung pembelajaran.")}
    <section class="video-grid">${VIDEOS.map((video, index) => `
      <article class="video-card">
        <div class="video-cover${video.src ? " video-player-cover" : ""}">
          <span style="position:absolute;top:14px;left:16px;font-size:9px;letter-spacing:.7px;text-transform:uppercase;opacity:.78">${escapeHTML(video.topic)}</span>
          ${video.src
            ? `<video class="lesson-video" src="${video.src}" controls playsinline preload="none" aria-label="${escapeHTML(video.title)}">Browser ini tidak mendukung pemutaran video.</video>`
            : `<button class="play-button" data-action="open-video" data-video="${index}" aria-label="Tonton video ${escapeHTML(video.title)}">${icon("play", 20)}</button>`}
        </div>
        <h3>${escapeHTML(video.title)}</h3><p>${escapeHTML(video.description)}</p>
        ${video.src
          ? `<p class="video-error" role="status" hidden>Video tidak dapat diputar di browser ini. Coba buka atau unduh berkas videonya.</p><div class="button-row" style="margin-top:13px"><a class="button button-soft" href="${video.src}" target="_blank" rel="noopener noreferrer">${icon("play", 13)} Buka video</a><a class="button button-secondary" href="${video.src}" download>${icon("arrow", 13)} Unduh</a></div>`
          : `<div class="button-row" style="margin-top:13px"><a class="button button-soft" href="${video.url}" target="_blank" rel="noopener noreferrer">${icon("play", 13)} Tonton di YouTube</a></div>`}
      </article>`).join("")}</section>
    <div class="security-note" style="margin-top:16px">Pilih video untuk menontonnya di YouTube.</div>`;
  renderShell(content);
}

function renderQuiz() {
  if (state.latestAttempt && state.quizIndex >= QUESTIONS.length) {
    renderQuizResult();
    return;
  }
  const question = QUESTIONS[state.quizIndex];
  const selected = state.quizAnswers[state.quizIndex];
  const checked = state.quizFeedback !== null;
  const content = `${renderPageHeading("Kuis & Evaluasi", "Uji pemahamanmu tentang konsep dasar dan topologi jaringan.")}
    <section class="panel quiz-card">
      <div class="quiz-topline"><span>PERTANYAAN ${state.quizIndex + 1} DARI ${QUESTIONS.length}</span><span>${Math.round((state.quizIndex / QUESTIONS.length) * 100)}% selesai</span></div>
      <div class="quiz-progress"><span style="width:${((state.quizIndex + (checked ? 1 : 0)) / QUESTIONS.length) * 100}%"></span></div>
      <h2 class="quiz-question">${escapeHTML(question.question)}</h2>
      <div class="answer-list">${question.answers.map((answer, index) => {
        let className = selected === index ? "selected" : "";
        if (checked && index === question.correct) className = "correct";
        else if (checked && index === selected) className = "incorrect";
        return `<button class="answer-option ${className}" data-action="select-answer" data-answer="${index}" ${checked ? "disabled" : ""}><span class="answer-marker">${String.fromCharCode(65 + index)}</span>${escapeHTML(answer)}</button>`;
      }).join("")}</div>
      ${checked ? `<div class="quiz-feedback ${selected === question.correct ? "" : "wrong"}"><strong>${selected === question.correct ? "Jawaban benar!" : "Belum tepat."}</strong> ${escapeHTML(question.explanation)}</div>` : ""}
      <div class="button-row" style="justify-content:space-between;margin-top:19px">
        <span style="align-self:center;color:#929db0;font-size:10px">${QUESTIONS.length - state.quizIndex - 1} soal setelah ini</span>
        ${checked
          ? `<button class="button" data-action="next-question">${state.quizIndex === QUESTIONS.length - 1 ? "Lihat hasil" : "Soal berikutnya"} ${icon("arrow", 14)}</button>`
          : `<button class="button" data-action="check-answer" ${selected === undefined ? "disabled" : ""}>Periksa jawaban ${icon("arrow", 14)}</button>`}
      </div>
    </section>`;
  renderShell(content);
}

function renderQuizResult() {
  const attempt = state.latestAttempt;
  const details = QUESTIONS.map((question, index) => {
    const chosen = attempt.answers[index];
    return `<article class="feature-card"><span class="stat-icon ${chosen === question.correct ? "green" : "amber"}">${icon(chosen === question.correct ? "check" : "help", 16)}</span><div><h3>${index + 1}. ${escapeHTML(question.question)}</h3><p>Jawaban kamu: <strong>${escapeHTML(question.answers[chosen])}</strong> · ${escapeHTML(question.explanation)}</p></div></article>`;
  }).join("");
  const content = `${renderPageHeading("Hasil Kuis", "Kuis selesai! Berikut ringkasan hasil dan pembahasan jawabanmu.")}
    <section class="panel quiz-card" style="text-align:center">
      <span class="badge">${icon("star", 12)} Hasil tersimpan di riwayat</span>
      <div class="result-score">${attempt.score}<span style="font-size:15px;letter-spacing:0"> / 100</span></div>
      <p style="margin:5px 0;color:#7e8ba0;font-size:11px">${attempt.dateLabel}</p>
      <div class="result-summary" style="justify-content:center"><span class="result-pill">${attempt.correct} jawaban benar</span><span class="result-pill wrong">${attempt.wrong} jawaban salah</span></div>
      <div class="button-row" style="justify-content:center"><button class="button" data-action="navigate" data-page="riwayat">Lihat riwayat</button><button class="button button-secondary" data-action="restart-quiz">Ulangi kuis</button><button class="button button-secondary" data-action="navigate" data-page="dashboard">Kembali ke beranda</button></div>
    </section>
    <div class="section-head"><div><h2>Pembahasan</h2><p>Pelajari kembali penjelasan untuk setiap soal.</p></div></div>
    <section class="feature-grid">${details}</section>`;
  renderShell(content);
}

function renderHistory() {
  const attempts = currentAttempts();
  const progress = currentProgress();
  const history = attempts.length ? `<section class="panel comparison-wrap"><table class="history-table"><thead><tr><th>Tanggal & waktu</th><th>Nilai</th><th>Benar</th><th>Salah</th></tr></thead><tbody>${attempts.map((attempt) => `
    <tr><td>${escapeHTML(attempt.dateLabel)}</td><td><strong>${attempt.score}</strong> / 100</td><td>${attempt.correct}</td><td>${attempt.wrong}</td></tr>`).join("")}</tbody></table></section>` : `<section class="panel empty-state"><strong>Belum ada riwayat kuis</strong><p>Kerjakan kuis untuk melihat hasil dan perkembangannya di sini.</p><button class="button" data-action="navigate" data-page="kuis">Mulai kuis</button></section>`;
  const content = `${renderPageHeading("Riwayat & Progres", "Pantau hasil kuis serta materi yang telah kamu selesaikan.")}
    <div class="section-head"><div><h2>Hasil kuis</h2><p>${attempts.length} percobaan tersimpan di browser ini.</p></div></div>
    ${history}
    <div class="section-head"><div><h2>Progres materi</h2><p>${progress.length} dari ${MATERIALS.length} topik selesai.</p></div></div>
    <section class="panel">${MATERIALS.map((material) => {
      const done = progress.includes(material.id);
      return `<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 0;border-bottom:1px solid #edf0f5"><div><strong style="font-size:11px">${escapeHTML(material.title)}</strong><div style="margin-top:4px;color:#8490a4;font-size:9px">${done ? "Sudah dipelajari" : "Belum dipelajari"}</div></div><button class="text-link" data-action="open-material" data-material="${material.id}">${done ? "Ulangi materi" : "Mulai belajar"} →</button></div>`;
    }).join("")}</section>`;
  renderShell(content);
}

function renderProfile() {
  const content = `${renderPageHeading("Profil Pengembang", "Informasi tentang produk pembelajaran interaktif ini.")}
    <section class="panel" style="max-width:720px">
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:19px"><span class="avatar" style="width:53px;height:53px;font-size:20px">NH</span><div><h2 style="margin:0">Nur Halisda</h2><p style="margin:4px 0 0"><a href="mailto:nurhalisda5@gmail.com">nurhalisda5@gmail.com</a></p><p style="margin:4px 0 0">Instagram: <a href="https://www.instagram.com/nurhalisda12_08/" target="_blank" rel="noopener noreferrer">@nurhalisda12_08</a></p></div></div>
      <div class="feature-grid">
        <div class="objective-card"><span class="stat-label">Produk</span><h3>Net Learn</h3><p>Multimedia Pembelajaran Interaktif Jaringan Komputer</p></div>
        <div class="objective-card"><span class="stat-label">Sasaran pengguna</span><h3>Mahasiswa pemula</h3><p>Mahasiswa yang sedang mempelajari dasar-dasar jaringan komputer.</p></div>
      </div>
      <div class="button-row" style="margin-top:17px"><button class="button button-secondary" data-action="logout">${icon("logout", 14)} Keluar</button></div>
    </section>`;
  renderShell(content);
}

function renderLogoutModal() {
  return `<div class="modal-backdrop" role="presentation"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="logout-title"><h2 id="logout-title">Keluar dari akun?</h2><p>Progres dan hasil kuismu tetap tersimpan di browser ini. Kamu dapat masuk kembali nanti.</p><div class="button-row"><button class="button button-secondary" data-action="cancel-logout">Tidak, kembali</button><button class="button button-danger" data-action="confirm-logout">Ya, keluar</button></div></section></div>`;
}

function render() {
  if (!state.user) {
    if (state.page === "auth") renderAuth();
    else renderSplash();
    return;
  }
  const pages = {
    dashboard: renderDashboard,
    petunjuk: renderHelp,
    tujuan: renderObjectives,
    materi: renderMaterials,
    video: renderVideos,
    kuis: renderQuiz,
    riwayat: renderHistory,
    profil: renderProfile,
    selesai: renderSplash,
  };
  (pages[state.page] || renderDashboard)();
}

async function hashPassword(password) {
  if (!globalThis.crypto || !crypto.subtle) {
    throw new Error("Browser ini tidak mendukung penyimpanan demo yang diperlukan. Buka melalui browser modern.");
  }
  const bytes = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function handleAuthSubmit(form) {
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const error = document.querySelector("#auth-error");
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (state.authMode === "register" && !name) {
    error.textContent = "Nama lengkap wajib diisi.";
    return;
  }
  if (!emailValid) {
    error.textContent = "Masukkan alamat email yang valid.";
    return;
  }
  if (password.length < 6) {
    error.textContent = "Password harus terdiri dari minimal 6 karakter.";
    return;
  }
  const passwordHash = await hashPassword(password);
  if (state.authMode === "register") {
    if (store.users.some((user) => user.email === email)) {
      error.textContent = "Email ini sudah terdaftar. Silakan masuk.";
      return;
    }
    store.users.push({ name, email, passwordHash });
    store.progress[email] = [];
    store.attempts[email] = [];
    persistStore();
    state.authMode = "login";
    renderAuth();
    const newEmail = document.querySelector("#auth-email");
    if (newEmail) newEmail.value = email;
    showToast("Pendaftaran berhasil. Silakan masuk dengan akunmu.");
    return;
  }
  const user = store.users.find((item) => item.email === email);
  if (!user || user.passwordHash !== passwordHash) {
    error.textContent = "Email atau password tidak sesuai.";
    return;
  }
  state.user = { name: user.name, email: user.email };
  state.page = "dashboard";
  state.activeMaterial = null;
  render();
}

function completeQuiz() {
  const correct = state.quizAnswers.reduce((count, answer, index) => count + (answer === QUESTIONS[index].correct ? 1 : 0), 0);
  const now = new Date();
  const attempt = {
    score: Math.round((correct / QUESTIONS.length) * 100),
    correct,
    wrong: QUESTIONS.length - correct,
    answers: [...state.quizAnswers],
    date: now.toISOString(),
    dateLabel: new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(now),
  };
  const attempts = currentAttempts();
  attempts.unshift(attempt);
  store.attempts[state.user.email] = attempts;
  persistStore();
  state.latestAttempt = attempt;
  state.quizIndex = QUESTIONS.length;
  state.quizFeedback = null;
  state.page = "kuis";
  render();
}

document.addEventListener("submit", async (event) => {
  if (event.target.id !== "auth-form") return;
  event.preventDefault();
  try {
    await handleAuthSubmit(event.target);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan saat memproses akun.";
    const errorTarget = document.querySelector("#auth-error");
    if (errorTarget) errorTarget.textContent = message;
    console.error("Net Learn authentication error:", error);
  }
});

document.addEventListener("error", (event) => {
  if (!(event.target instanceof HTMLVideoElement) || !event.target.matches(".lesson-video")) return;
  const message = event.target.closest(".video-card")?.querySelector(".video-error");
  if (message) message.hidden = false;
  console.error("Net Learn video playback error:", event.target.error);
}, true);

document.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const action = button.dataset.action;

  if (action === "toggle-password") {
    const passwordInput = document.querySelector("#auth-password");
    if (!passwordInput) return;
    const visible = passwordInput.type === "password";
    passwordInput.type = visible ? "text" : "password";
    button.setAttribute("aria-label", visible ? "Sembunyikan password" : "Tampilkan password");
    button.setAttribute("aria-pressed", String(visible));
    button.innerHTML = icon(visible ? "eyeOff" : "eye", 18);
  } else if (action === "start") {
    state.page = "auth";
    state.authMode = "login";
    render();
  } else if (action === "toggle-auth") {
    state.authMode = state.authMode === "login" ? "register" : "login";
    render();
  } else if (action === "navigate") {
    state.page = button.dataset.page;
    state.activeMaterial = null;
    state.latestAttempt = null;
    if (state.page === "kuis") {
      state.quizIndex = 0;
      state.quizAnswers = [];
      state.quizFeedback = null;
    }
    render();
  } else if (action === "open-material") {
    state.page = "materi";
    state.activeMaterial = button.dataset.material;
    render();
  } else if (action === "back-materials") {
    state.activeMaterial = null;
    renderMaterials();
  } else if (action === "complete-material") {
    const progress = currentProgress();
    if (!progress.includes(state.activeMaterial)) progress.push(state.activeMaterial);
    store.progress[state.user.email] = progress;
    persistStore();
    showToast("Progres materi berhasil disimpan.");
    renderMaterialDetail();
  } else if (action === "previous-material" || action === "next-material") {
    const index = MATERIALS.findIndex((material) => material.id === state.activeMaterial);
    const nextIndex = action === "previous-material" ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= MATERIALS.length) {
      state.activeMaterial = null;
      renderMaterials();
    } else {
      state.activeMaterial = MATERIALS[nextIndex].id;
      renderMaterialDetail();
    }
  } else if (action === "select-answer") {
    if (state.quizFeedback !== null || button.disabled) return;
    state.quizAnswers[state.quizIndex] = Number(button.dataset.answer);
    renderQuiz();
  } else if (action === "check-answer") {
    if (state.quizAnswers[state.quizIndex] === undefined) {
      showToast("Pilih salah satu jawaban terlebih dahulu.");
      return;
    }
    state.quizFeedback = state.quizAnswers[state.quizIndex] === QUESTIONS[state.quizIndex].correct;
    renderQuiz();
  } else if (action === "next-question") {
    if (state.quizIndex === QUESTIONS.length - 1) completeQuiz();
    else {
      state.quizIndex += 1;
      state.quizFeedback = null;
      renderQuiz();
    }
  } else if (action === "restart-quiz") {
    state.latestAttempt = null;
    state.quizIndex = 0;
    state.quizAnswers = [];
    state.quizFeedback = null;
    renderQuiz();
  } else if (action === "open-video") {
    const video = VIDEOS[Number(button.dataset.video)];
    if (video) window.open(video.url, "_blank", "noopener,noreferrer");
  } else if (action === "logout") {
    state.showLogout = true;
    render();
  } else if (action === "cancel-logout") {
    state.showLogout = false;
    render();
  } else if (action === "confirm-logout") {
    state.user = null;
    state.page = "splash";
    state.showLogout = false;
    state.activeMaterial = null;
    state.latestAttempt = null;
    render();
    showToast("Kamu telah keluar. Progresmu tetap tersimpan.");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.showLogout) {
    state.showLogout = false;
    render();
  }
});

render();
