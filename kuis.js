const QUIZ_API = "https://erikson-atelier-admin.egaietalier.chatgpt.site/api/quiz-results";

const bank = [
  {category:"Kejadian",question:"Siapakah manusia pertama yang diciptakan Allah?",options:["Nuh","Adam","Abraham","Musa"],answer:1,reference:"Kejadian 2:7",explanation:"Allah membentuk Adam dari debu tanah dan menghembuskan napas kehidupan kepadanya."},
  {category:"Kejadian",question:"Siapakah perempuan pertama dalam Alkitab?",options:["Sara","Hawa","Ribka","Rahel"],answer:1,reference:"Kejadian 2:21–23",explanation:"Allah membentuk Hawa dan membawanya kepada Adam."},
  {category:"Kejadian",question:"Siapakah yang membuat bahtera atas perintah Allah?",options:["Nuh","Lot","Henokh","Yakub"],answer:0,reference:"Kejadian 6:13–22",explanation:"Nuh menaati Allah dengan membuat bahtera sesuai petunjuk-Nya."},
  {category:"Kejadian",question:"Apakah tanda perjanjian Allah dengan Nuh?",options:["Bintang","Pelangi","Api","Tiang awan"],answer:1,reference:"Kejadian 9:12–17",explanation:"Allah memberikan pelangi sebagai tanda perjanjian-Nya."},
  {category:"Kejadian",question:"Siapakah anak perjanjian Abraham dan Sara?",options:["Ismael","Ishak","Esau","Yakub"],answer:1,reference:"Kejadian 21:1–3",explanation:"Allah menepati janji-Nya melalui kelahiran Ishak."},
  {category:"Kejadian",question:"Siapakah yang dijual saudara-saudaranya ke Mesir?",options:["Yusuf","Benyamin","Ruben","Yehuda"],answer:0,reference:"Kejadian 37:28",explanation:"Yusuf dijual, tetapi Allah memakai hidupnya untuk memelihara banyak orang."},
  {category:"Keluaran",question:"Siapakah yang memimpin Israel keluar dari Mesir?",options:["Harun","Musa","Yosua","Samuel"],answer:1,reference:"Keluaran 3:10",explanation:"Allah mengutus Musa membawa Israel keluar dari perbudakan."},
  {category:"Keluaran",question:"Laut apakah yang diseberangi bangsa Israel?",options:["Laut Mati","Laut Teberau","Danau Galilea","Sungai Yordan"],answer:1,reference:"Keluaran 14:21–22",explanation:"Allah membelah Laut Teberau sehingga Israel berjalan di tanah kering."},
  {category:"Sejarah Israel",question:"Siapakah yang menggantikan Musa memimpin Israel?",options:["Kaleb","Yosua","Harun","Gideon"],answer:1,reference:"Yosua 1:1–2",explanation:"Allah menetapkan Yosua untuk memimpin Israel memasuki negeri perjanjian."},
  {category:"Sejarah Israel",question:"Dengan apakah Daud mengalahkan Goliat?",options:["Pedang","Tombak","Umban dan batu","Busur"],answer:2,reference:"1 Samuel 17:49–50",explanation:"Daud mengalahkan Goliat dengan umban dan batu sambil mengandalkan Tuhan."},
  {category:"Raja-raja",question:"Apa yang diminta Salomo kepada Allah?",options:["Kekayaan","Umur panjang","Hikmat","Kemenangan"],answer:2,reference:"1 Raja-raja 3:9–12",explanation:"Salomo meminta hati yang paham untuk memimpin umat."},
  {category:"Para Nabi",question:"Nabi siapakah yang terangkat ke surga dalam angin badai?",options:["Elia","Elisa","Yesaya","Yeremia"],answer:0,reference:"2 Raja-raja 2:11",explanation:"Elia naik ke surga dalam angin badai dengan kereta berapi."},
  {category:"Para Nabi",question:"Ke kota manakah Yunus diutus?",options:["Yerusalem","Niniwe","Betlehem","Damsyik"],answer:1,reference:"Yunus 3:1–3",explanation:"Allah mengutus Yunus ke Niniwe untuk menyerukan pertobatan."},
  {category:"Para Nabi",question:"Mengapa Daniel dilemparkan ke gua singa?",options:["Mencuri","Melarikan diri","Tetap berdoa kepada Allah","Menolak bekerja"],answer:2,reference:"Daniel 6:11–17",explanation:"Daniel tetap setia berdoa meskipun ada larangan."},
  {category:"Mazmur",question:"Menurut Mazmur 23, siapakah gembala pemazmur?",options:["Daud","Tuhan","Musa","Samuel"],answer:1,reference:"Mazmur 23:1",explanation:"Daud mengakui Tuhan sebagai Gembalanya."},
  {category:"Kelahiran Yesus",question:"Di kota manakah Yesus dilahirkan?",options:["Nazaret","Yerusalem","Betlehem","Kapernaum"],answer:2,reference:"Matius 2:1",explanation:"Yesus dilahirkan di Betlehem pada zaman Raja Herodes."},
  {category:"Kehidupan Yesus",question:"Siapakah yang membaptis Yesus?",options:["Petrus","Yohanes Pembaptis","Yakobus","Andreas"],answer:1,reference:"Matius 3:13–17",explanation:"Yohanes membaptis Yesus di Sungai Yordan."},
  {category:"Murid Yesus",question:"Berapa jumlah rasul yang dipilih Yesus?",options:["Tujuh","Sepuluh","Dua belas","Empat belas"],answer:2,reference:"Lukas 6:13",explanation:"Yesus memilih dua belas orang dan menamai mereka rasul."},
  {category:"Mukjizat Yesus",question:"Berapa roti yang dipakai Yesus untuk memberi makan lima ribu orang?",options:["Dua","Lima","Tujuh","Dua belas"],answer:1,reference:"Yohanes 6:9–13",explanation:"Seorang anak membawa lima roti dan dua ikan, lalu Yesus melipatgandakannya."},
  {category:"Perumpamaan",question:"Siapakah yang menolong orang yang dirampok dalam perumpamaan Yesus?",options:["Imam","Orang Lewi","Orang Samaria","Prajurit"],answer:2,reference:"Lukas 10:30–37",explanation:"Orang Samaria menunjukkan belas kasihan yang nyata."},
  {category:"Kehidupan Yesus",question:"Siapakah murid yang berjalan di atas air menuju Yesus?",options:["Yohanes","Petrus","Tomas","Matius"],answer:1,reference:"Matius 14:28–29",explanation:"Petrus turun dari perahu dan berjalan di atas air menuju Yesus."},
  {category:"Salib dan Kebangkitan",question:"Pada hari ke berapakah Yesus bangkit?",options:["Pertama","Kedua","Ketiga","Ketujuh"],answer:2,reference:"1 Korintus 15:3–4",explanation:"Kristus dibangkitkan pada hari ketiga sesuai Kitab Suci."},
  {category:"Gereja Mula-mula",question:"Siapakah yang berkhotbah pada hari Pentakosta?",options:["Paulus","Petrus","Barnabas","Stefanus"],answer:1,reference:"Kisah Para Rasul 2:14–41",explanation:"Petrus memberitakan Yesus dan sekitar tiga ribu orang menerima firman."},
  {category:"Rasul Paulus",question:"Apa nama Paulus sebelum dikenal sebagai Paulus?",options:["Saulus","Silas","Simon","Stefanus"],answer:0,reference:"Kisah Para Rasul 9:1–19; 13:9",explanation:"Ia dikenal sebagai Saulus dan kemudian disebut juga Paulus."},
  {category:"Buah Roh",question:"Manakah yang termasuk buah Roh?",options:["Kesombongan","Kasih","Iri hati","Kebencian"],answer:1,reference:"Galatia 5:22–23",explanation:"Kasih adalah bagian pertama dalam daftar buah Roh."},
  {category:"Iman",question:"Menurut Ibrani 11:1, iman adalah dasar dari apa?",options:["Segala kekayaan","Sesuatu yang diharapkan","Segala pengetahuan","Segala kekuatan"],answer:1,reference:"Ibrani 11:1",explanation:"Iman adalah dasar dari segala sesuatu yang diharapkan."},
  {category:"Kasih",question:"Menurut 1 Korintus 13:13, yang paling besar adalah?",options:["Iman","Pengharapan","Kasih","Pengetahuan"],answer:2,reference:"1 Korintus 13:13",explanation:"Yang paling besar di antara iman, pengharapan, dan kasih ialah kasih."},
  {category:"Kisah Para Rasul",question:"Siapakah yang dipilih menggantikan Yudas Iskariot?",options:["Silas","Matias","Barnabas","Markus"],answer:1,reference:"Kisah Para Rasul 1:23–26",explanation:"Matias terpilih dan ditambahkan kepada bilangan sebelas rasul."},
  {category:"Surat Paulus",question:"Di pasal manakah perlengkapan senjata Allah dijelaskan?",options:["Efesus 4","Efesus 5","Efesus 6","Filipi 4"],answer:2,reference:"Efesus 6:10–18",explanation:"Paulus menjelaskan perlengkapan senjata Allah dalam Efesus 6."},
  {category:"Wahyu",question:"Siapakah Alfa dan Omega menurut Wahyu?",options:["Musa","Yohanes","Tuhan Allah","Malaikat"],answer:2,reference:"Wahyu 1:8",explanation:"Tuhan Allah menyatakan diri sebagai Alfa dan Omega."}
];

const extraQuestions = [
  {type:"truefalse",level:1,category:"Penciptaan",question:"Benar atau salah: Allah menciptakan langit dan bumi.",options:["Benar","Salah"],answer:0,reference:"Kejadian 1:1",explanation:"Kejadian dibuka dengan karya Allah menciptakan langit dan bumi."},
  {type:"truefalse",level:1,category:"Nuh",question:"Benar atau salah: Musa yang membangun bahtera.",options:["Benar","Salah"],answer:1,reference:"Kejadian 6:13–22",explanation:"Nuh, bukan Musa, membangun bahtera atas perintah Allah."},
  {type:"truefalse",level:1,category:"Kelahiran Yesus",question:"Benar atau salah: Yesus dilahirkan di Betlehem.",options:["Benar","Salah"],answer:0,reference:"Matius 2:1",explanation:"Yesus dilahirkan di Betlehem di tanah Yudea."},
  {type:"truefalse",level:1,category:"Daniel",question:"Benar atau salah: Daniel berhenti berdoa karena takut kepada raja.",options:["Benar","Salah"],answer:1,reference:"Daniel 6:10–11",explanation:"Daniel tetap berdoa kepada Allah meskipun ada larangan."},
  {type:"truefalse",level:1,category:"Murid Yesus",question:"Benar atau salah: Yesus memilih dua belas rasul.",options:["Benar","Salah"],answer:0,reference:"Lukas 6:13",explanation:"Yesus memilih dua belas orang dan menamai mereka rasul."},
  {type:"truefalse",level:2,category:"Ester",question:"Benar atau salah: Ester menjadi ratu dan dipakai untuk menolong bangsanya.",options:["Benar","Salah"],answer:0,reference:"Ester 4:14–16",explanation:"Ester mengambil risiko untuk membela bangsanya."},
  {type:"truefalse",level:2,category:"Mazmur",question:"Benar atau salah: Mazmur 119 merupakan pasal terpanjang dalam Alkitab.",options:["Benar","Salah"],answer:0,reference:"Mazmur 119",explanation:"Mazmur 119 memiliki 176 ayat dan berpusat pada firman Tuhan."},
  {type:"truefalse",level:2,category:"Pentakosta",question:"Benar atau salah: Petrus berkhotbah pada hari Pentakosta.",options:["Benar","Salah"],answer:0,reference:"Kisah Para Rasul 2:14–41",explanation:"Petrus memberitakan Kristus dan banyak orang bertobat."},
  {type:"truefalse",level:3,category:"Paulus",question:"Benar atau salah: Paulus bertobat dalam perjalanan menuju Damsyik.",options:["Benar","Salah"],answer:0,reference:"Kisah Para Rasul 9:1–19",explanation:"Kristus menjumpai Saulus ketika ia sedang menuju Damsyik."},
  {type:"truefalse",level:3,category:"Surat Yakobus",question:"Benar atau salah: Yakobus mengajarkan bahwa iman tanpa perbuatan adalah mati.",options:["Benar","Salah"],answer:0,reference:"Yakobus 2:17",explanation:"Iman yang hidup terlihat melalui tindakan nyata."},
  {type:"truefalse",level:3,category:"Kasih",question:"Benar atau salah: Menurut 1 Korintus 13, kasih memegahkan diri.",options:["Benar","Salah"],answer:1,reference:"1 Korintus 13:4",explanation:"Kasih tidak memegahkan diri dan tidak sombong."},
  {type:"truefalse",level:4,category:"Berean",question:"Benar atau salah: Jemaat Berea memeriksa Kitab Suci setiap hari.",options:["Benar","Salah"],answer:0,reference:"Kisah Para Rasul 17:11",explanation:"Mereka menerima firman dengan kerelaan dan memeriksa Kitab Suci."},
  {type:"truefalse",level:4,category:"Ibrani",question:"Benar atau salah: Surat Ibrani menyebut Yesus sebagai Imam Besar Agung.",options:["Benar","Salah"],answer:0,reference:"Ibrani 4:14",explanation:"Yesus disebut Imam Besar Agung yang melintasi semua langit."},
  {type:"truefalse",level:5,category:"Wahyu",question:"Benar atau salah: Jemaat Laodikia dipuji karena tidak panas dan tidak dingin.",options:["Benar","Salah"],answer:1,reference:"Wahyu 3:15–16",explanation:"Sikap suam-suam kuku justru ditegur oleh Tuhan."},

  {type:"guess",level:1,category:"Tebak Tokoh",question:"Aku membuat bahtera, membawa keluargaku masuk, dan melihat pelangi. Siapakah aku?",options:["Abraham","Nuh","Musa","Daud"],answer:1,reference:"Kejadian 6–9",explanation:"Nuh menaati perintah Allah untuk membuat bahtera."},
  {type:"guess",level:1,category:"Tebak Tokoh",question:"Aku berada dalam perut ikan besar selama tiga hari. Siapakah aku?",options:["Yunus","Elia","Daniel","Amos"],answer:0,reference:"Yunus 1:17",explanation:"Yunus berada dalam perut ikan besar tiga hari tiga malam."},
  {type:"guess",level:1,category:"Tebak Tokoh",question:"Aku mengalahkan Goliat dengan umban dan batu. Siapakah aku?",options:["Saul","Daud","Salomo","Samuel"],answer:1,reference:"1 Samuel 17:49–50",explanation:"Daud maju dengan iman kepada Tuhan."},
  {type:"guess",level:1,category:"Tebak Tokoh",question:"Aku memanjat pohon untuk melihat Yesus. Siapakah aku?",options:["Bartimeus","Zakheus","Nikodemus","Yairus"],answer:1,reference:"Lukas 19:1–10",explanation:"Zakheus memanjat pohon ara karena ingin melihat Yesus."},
  {type:"guess",level:2,category:"Tebak Tokoh",question:"Kekuatan tubuhku dikaitkan dengan rambut yang tidak dicukur. Siapakah aku?",options:["Gideon","Simson","Yefta","Saul"],answer:1,reference:"Hakim-hakim 16:17",explanation:"Simson menceritakan nazarnya dan rambutnya kepada Delila."},
  {type:"guess",level:2,category:"Tebak Tokoh",question:"Aku menjadi ratu dan berkata, 'Kalau terpaksa aku mati, biarlah aku mati.' Siapakah aku?",options:["Rut","Ester","Debora","Miryam"],answer:1,reference:"Ester 4:16",explanation:"Ester berani menghadap raja demi keselamatan bangsanya."},
  {type:"guess",level:2,category:"Tebak Tokoh",question:"Aku ragu sebelum melihat bekas luka Yesus yang bangkit. Siapakah aku?",options:["Tomas","Filipus","Andreas","Yakobus"],answer:0,reference:"Yohanes 20:24–29",explanation:"Tomas kemudian mengaku, 'Ya Tuhanku dan Allahku!'"},
  {type:"guess",level:3,category:"Tebak Tokoh",question:"Aku seorang pemungut cukai yang kemudian menjadi salah satu dari dua belas murid. Siapakah aku?",options:["Matius","Markus","Lukas","Barnabas"],answer:0,reference:"Matius 9:9",explanation:"Yesus memanggil Matius ketika ia duduk di rumah cukai."},
  {type:"guess",level:3,category:"Tebak Tokoh",question:"Aku dikenal sebagai martir pertama dalam gereja mula-mula. Siapakah aku?",options:["Stefanus","Filipus","Silas","Timotius"],answer:0,reference:"Kisah Para Rasul 6–7",explanation:"Stefanus setia bersaksi sampai mati."},
  {type:"guess",level:3,category:"Tebak Tokoh",question:"Aku menjelaskan kitab Yesaya kepada seorang pejabat Etiopia. Siapakah aku?",options:["Petrus","Filipus","Paulus","Barnabas"],answer:1,reference:"Kisah Para Rasul 8:26–40",explanation:"Filipus memberitakan Yesus berdasarkan bagian kitab Yesaya."},
  {type:"guess",level:4,category:"Tebak Tokoh",question:"Aku seorang ahli Taurat yang memimpin umat kembali dan mengajarkan firman. Siapakah aku?",options:["Ezra","Nehemia","Zerubabel","Mordekhai"],answer:0,reference:"Ezra 7:6,10",explanation:"Ezra bertekad meneliti, melakukan, dan mengajarkan Taurat Tuhan."},
  {type:"guess",level:5,category:"Tebak Tokoh",question:"Aku seorang penjual kain ungu dari Tiatira yang membuka rumah bagi para pelayan Tuhan. Siapakah aku?",options:["Dorkas","Lidia","Priskila","Febe"],answer:1,reference:"Kisah Para Rasul 16:14–15",explanation:"Tuhan membuka hati Lidia untuk menerima pemberitaan Paulus."},

  {type:"essay",level:1,category:"Esai Singkat",question:"Tuliskan satu pelajaran yang dapat kita teladani dari ketaatan Nuh.",keywords:["taat","ketaatan","percaya","iman"],minKeywords:1,reference:"Kejadian 6:22",explanation:"Contoh jawaban: Nuh percaya kepada Allah dan menaati perintah-Nya walaupun belum melihat apa yang akan terjadi."},
  {type:"essay",level:1,category:"Esai Singkat",question:"Mengapa kita perlu menolong sesama seperti orang Samaria yang baik?",keywords:["kasih","menolong","belas kasih","sesama"],minKeywords:1,reference:"Lukas 10:30–37",explanation:"Contoh jawaban: Kita mengasihi sesama dengan belas kasih dan pertolongan nyata tanpa membeda-bedakan."},
  {type:"essay",level:2,category:"Esai Singkat",question:"Apa yang dapat dipelajari dari keberanian Daud menghadapi Goliat?",keywords:["percaya","Tuhan","iman","berani"],minKeywords:2,reference:"1 Samuel 17:45–47",explanation:"Contoh jawaban: Keberanian sejati lahir dari iman dan kepercayaan bahwa pertolongan berasal dari Tuhan."},
  {type:"essay",level:2,category:"Esai Singkat",question:"Sebutkan sedikitnya dua buah Roh dan jelaskan mengapa penting.",keywords:["kasih","sukacita","damai","kesabaran","kemurahan","kebaikan","kesetiaan","kelemahlembutan","penguasaan diri"],minKeywords:2,reference:"Galatia 5:22–23",explanation:"Jawaban dapat menyebut dua atau lebih buah Roh serta penerapannya dalam kehidupan."},
  {type:"essay",level:2,category:"Esai Singkat",question:"Apa arti mengampuni orang lain bagi seorang pengikut Kristus?",keywords:["mengampuni","ampun","kasih","memaafkan"],minKeywords:1,reference:"Kolose 3:13",explanation:"Contoh jawaban: Kita memaafkan karena Tuhan telah mengampuni kita dan memanggil kita hidup dalam kasih."},
  {type:"essay",level:3,category:"Esai",question:"Jelaskan dengan singkat makna Amanat Agung bagi gereja.",keywords:["murid","bangsa","mengajar","baptis","memberitakan"],minKeywords:2,reference:"Matius 28:18–20",explanation:"Amanat Agung memanggil gereja menjadikan semua bangsa murid Kristus, membaptis, dan mengajar mereka."},
  {type:"essay",level:3,category:"Esai",question:"Mengapa kebangkitan Kristus penting bagi iman Kristen?",keywords:["bangkit","harapan","hidup","maut","keselamatan"],minKeywords:2,reference:"1 Korintus 15:14,20–22",explanation:"Kebangkitan meneguhkan kemenangan Kristus atas maut dan memberi pengharapan hidup kepada orang percaya."},
  {type:"essay",level:3,category:"Esai",question:"Jelaskan hubungan iman dan perbuatan menurut Yakobus 2.",keywords:["iman","perbuatan","tindakan","mati"],minKeywords:2,reference:"Yakobus 2:17–18",explanation:"Iman yang hidup menghasilkan perbuatan; tindakan menjadi bukti nyata dari iman."},
  {type:"essay",level:4,category:"Esai",question:"Apa maksud 'berubahlah oleh pembaharuan budimu' dalam Roma 12:2?",keywords:["pikiran","budi","berubah","kehendak","Allah"],minKeywords:2,reference:"Roma 12:2",explanation:"Orang percaya tidak mengikuti pola dunia, tetapi membiarkan Allah memperbarui cara berpikir agar mengenal kehendak-Nya."},
  {type:"essay",level:4,category:"Esai",question:"Jelaskan fungsi perlengkapan senjata Allah dalam kehidupan rohani.",keywords:["melawan","iblis","iman","firman","doa","kebenaran"],minKeywords:2,reference:"Efesus 6:10–18",explanation:"Perlengkapan senjata Allah menggambarkan kesiapan rohani untuk berdiri teguh melalui kebenaran, iman, firman, dan doa."},
  {type:"essay",level:5,category:"Esai Mendalam",question:"Jelaskan bagaimana kasih dalam 1 Korintus 13 harus terlihat dalam pelayanan.",keywords:["sabar","murah hati","sombong","kepentingan","kasih"],minKeywords:2,reference:"1 Korintus 13:4–7",explanation:"Pelayanan dalam kasih bersifat sabar, murah hati, tidak mencari kepentingan sendiri, dan bertahan dalam kebenaran."},
  {type:"essay",level:5,category:"Esai Mendalam",question:"Apa pengharapan utama dari langit dan bumi yang baru dalam Wahyu 21?",keywords:["Allah","bersama","umat","air mata","maut","baru"],minKeywords:2,reference:"Wahyu 21:1–5",explanation:"Pengharapan itu adalah Allah tinggal bersama umat-Nya, menghapus air mata, dan meniadakan maut serta penderitaan."},

  {type:"multiple",level:2,category:"Hakim-hakim",question:"Siapakah hakim perempuan yang juga seorang nabiah?",options:["Rut","Debora","Hana","Abigail"],answer:1,reference:"Hakim-hakim 4:4",explanation:"Debora adalah nabiah dan hakim atas Israel."},
  {type:"multiple",level:2,category:"Raja-raja",question:"Raja muda siapakah yang memimpin pembaruan setelah kitab Taurat ditemukan?",options:["Yosia","Ahab","Rehabeam","Omri"],answer:0,reference:"2 Raja-raja 22–23",explanation:"Yosia merendahkan diri dan memimpin pembaruan perjanjian."},
  {type:"multiple",level:3,category:"Pemulihan",question:"Siapakah yang memimpin pembangunan kembali tembok Yerusalem?",options:["Ezra","Nehemia","Daniel","Zerubabel"],answer:1,reference:"Nehemia 2:17–18",explanation:"Nehemia mengajak umat membangun kembali tembok Yerusalem."},
  {type:"multiple",level:3,category:"Nabi",question:"Penglihatan lembah tulang-tulang kering diterima oleh siapa?",options:["Yesaya","Yeremia","Yehezkiel","Daniel"],answer:2,reference:"Yehezkiel 37:1–14",explanation:"Yehezkiel melihat tulang-tulang kering dihidupkan kembali oleh Allah."},
  {type:"multiple",level:3,category:"Injil",question:"Kepada siapakah Injil Lukas dan Kisah Para Rasul ditujukan?",options:["Timotius","Teofilus","Titus","Filemon"],answer:1,reference:"Lukas 1:3; Kisah Para Rasul 1:1",explanation:"Kedua kitab itu menyapa seseorang bernama Teofilus."},
  {type:"multiple",level:4,category:"Kejadian",question:"Melkisedek disebut sebagai raja dari kota apa?",options:["Salem","Hebron","Yerikho","Betel"],answer:0,reference:"Kejadian 14:18",explanation:"Melkisedek adalah raja Salem dan imam Allah Yang Mahatinggi."},
  {type:"multiple",level:4,category:"Kisah Para Rasul",question:"Di kota manakah Paulus berbicara di Areopagus?",options:["Korintus","Efesus","Atena","Roma"],answer:2,reference:"Kisah Para Rasul 17:19–34",explanation:"Paulus berbicara kepada para pemikir di Areopagus, Atena."},
  {type:"multiple",level:4,category:"Surat Paulus",question:"Siapakah hamba yang dibicarakan Paulus dalam surat kepada Filemon?",options:["Onesimus","Epafras","Tikhikus","Aristarkhus"],answer:0,reference:"Filemon 1:10–16",explanation:"Paulus meminta Filemon menerima Onesimus sebagai saudara terkasih."},
  {type:"multiple",level:4,category:"Nabi Kecil",question:"Nabi manakah yang berasal dari Tekoa dan bekerja sebagai peternak?",options:["Amos","Mikha","Nahum","Habakuk"],answer:0,reference:"Amos 1:1; 7:14–15",explanation:"Amos berasal dari Tekoa dan dipanggil Tuhan untuk bernubuat."},
  {type:"multiple",level:5,category:"Surat Ibrani",question:"Menurut Ibrani, keimaman Kristus dibandingkan dengan aturan siapa?",options:["Harun","Lewi","Melkisedek","Samuel"],answer:2,reference:"Ibrani 7:15–17",explanation:"Kristus disebut imam untuk selama-lamanya menurut peraturan Melkisedek."},
  {type:"multiple",level:5,category:"Wahyu",question:"Berapa jemaat di Asia Kecil yang menerima pesan dalam Wahyu 2–3?",options:["Lima","Tujuh","Sepuluh","Dua belas"],answer:1,reference:"Wahyu 1:11; 2–3",explanation:"Wahyu memuat pesan kepada tujuh jemaat."},
  {type:"multiple",level:5,category:"Nabi",question:"Nabi manakah yang pernikahannya dipakai sebagai gambaran hubungan Tuhan dan Israel?",options:["Hosea","Yoel","Obaja","Zefanya"],answer:0,reference:"Hosea 1–3",explanation:"Kehidupan keluarga Hosea menjadi tanda profetis tentang kesetiaan Allah."}
];

const sundayQuestions = [
  {type:"multiple",level:1,category:"Sekolah Minggu",question:"Siapa yang sangat mengasihi anak-anak?",options:["Yesus","Herodes","Firaun","Goliat"],answer:0,reference:"Markus 10:13–16",explanation:"Yesus menerima dan memberkati anak-anak."},
  {type:"multiple",level:1,category:"Sekolah Minggu",question:"Siapa yang masuk ke gua singa tetapi dilindungi Tuhan?",options:["Daniel","Daud","Petrus","Yusuf"],answer:0,reference:"Daniel 6:22",explanation:"Allah mengutus malaikat-Nya untuk menutup mulut singa."},
  {type:"multiple",level:1,category:"Sekolah Minggu",question:"Berapa ikan yang dibawa seorang anak bersama lima roti?",options:["Satu","Dua","Lima","Tujuh"],answer:1,reference:"Yohanes 6:9",explanation:"Anak itu membawa lima roti jelai dan dua ikan."},
  {type:"truefalse",level:1,category:"Sekolah Minggu",question:"Benar atau salah: Yesus berkata kita adalah terang dunia.",options:["Benar","Salah"],answer:0,reference:"Matius 5:14",explanation:"Yesus memanggil murid-murid-Nya menjadi terang dunia."},
  {type:"guess",level:1,category:"Tebak Tokoh Anak",question:"Aku kecil, memanjat pohon, lalu Yesus datang ke rumahku. Siapakah aku?",options:["Zakheus","Petrus","Samuel","Timotius"],answer:0,reference:"Lukas 19:1–10",explanation:"Zakheus memanjat pohon untuk melihat Yesus."},
  {type:"guess",level:1,category:"Tebak Tokoh Anak",question:"Sejak kecil aku mendengar Tuhan memanggil namaku. Siapakah aku?",options:["Samuel","Saul","Simson","Salomo"],answer:0,reference:"1 Samuel 3:1–10",explanation:"Samuel menjawab, 'Berbicaralah, sebab hamba-Mu ini mendengar.'"},
  {type:"essay",level:1,category:"Cerita Iman",question:"Tuliskan satu cara sederhana untuk menunjukkan kasih kepada teman.",keywords:["tolong","menolong","berbagi","maaf","memaafkan","baik","kasih","doa"],minKeywords:1,reference:"Yohanes 13:34",explanation:"Contoh: menolong, berbagi, memaafkan, berkata baik, atau mendoakan teman."},
  {type:"essay",level:1,category:"Cerita Iman",question:"Tuliskan satu hal yang dapat kamu syukuri kepada Tuhan hari ini.",keywords:["syukur","terima kasih","keluarga","sehat","makanan","sekolah","teman","Tuhan"],minKeywords:1,reference:"1 Tesalonika 5:18",explanation:"Kita dapat bersyukur kepada Tuhan dalam segala keadaan."},
  {type:"multiple",level:2,category:"Sekolah Minggu",question:"Dalam perumpamaan Yesus, siapa yang mencari seekor domba yang hilang?",options:["Gembala","Nelayan","Petani","Prajurit"],answer:0,reference:"Lukas 15:3–7",explanation:"Gembala mencari domba yang hilang sampai menemukannya."},
  {type:"truefalse",level:2,category:"Sekolah Minggu",question:"Benar atau salah: Yusuf membalas kejahatan saudara-saudaranya.",options:["Benar","Salah"],answer:1,reference:"Kejadian 50:19–21",explanation:"Yusuf mengampuni dan memelihara saudara-saudaranya."},
  {type:"multiple",level:2,category:"Sekolah Minggu",question:"Apa yang dilakukan Yesus ketika badai mengamuk?",options:["Bersembunyi","Menenangkan badai","Meninggalkan perahu","Memanggil tentara"],answer:1,reference:"Markus 4:39",explanation:"Yesus menghardik angin dan danau menjadi teduh."},
  {type:"guess",level:2,category:"Tebak Tokoh Anak",question:"Aku berdoa kepada Tuhan dan memperoleh anak bernama Samuel. Siapakah aku?",options:["Hana","Sara","Rut","Marta"],answer:0,reference:"1 Samuel 1:10–20",explanation:"Hana berdoa dengan sungguh-sungguh dan Tuhan menjawabnya."},
  {type:"essay",level:2,category:"Cerita Iman",question:"Apa yang sebaiknya kamu lakukan ketika takut?",keywords:["doa","berdoa","Tuhan","percaya","minta tolong"],minKeywords:1,reference:"Mazmur 56:4",explanation:"Kita dapat berdoa, percaya kepada Tuhan, dan meminta pertolongan orang dewasa yang baik."}
];

const questionBank = bank.map(function(q,index){
  return Object.assign({type:"multiple",level:Math.min(5,1+Math.floor(index/6)),audience:"general"},q);
}).concat(extraQuestions.map(function(q){return Object.assign({audience:"general"},q)}));

const LEVELS = [
  {from:1,to:20,name:"Dasar",icon:"🌱",note:"Mengenal tokoh dan cerita Alkitab yang paling dikenal."},
  {from:21,to:40,name:"Bertumbuh",icon:"🌿",note:"Mulai menghubungkan tokoh, peristiwa, dan pesan firman."},
  {from:41,to:60,name:"Menengah",icon:"📖",note:"Menguji pemahaman Perjanjian Lama dan Perjanjian Baru."},
  {from:61,to:80,name:"Menantang",icon:"🔥",note:"Memerlukan ketelitian membaca konteks dan surat-surat."},
  {from:81,to:100,name:"Mahir",icon:"🏆",note:"Pertanyaan lebih mendalam, termasuk penerapan dan esai."}
];
const TOPICS = ["Penciptaan","Tokoh Iman","Keluaran","Hakim-hakim","Raja-raja","Mazmur","Para Nabi","Kelahiran Yesus","Mukjizat Yesus","Perumpamaan","Murid Yesus","Salib & Kebangkitan","Gereja Mula-mula","Perjalanan Paulus","Surat-surat","Iman & Kasih","Hidup Baru","Pelayanan","Pengharapan","Wahyu"];
const ICONS = ["🌍","⛺","🌊","⚔️","👑","🎵","📜","⭐","🕊️","💡","👣","✝️","🔥","🗺️","✉️","❤️","🌱","🤲","🌅","✨"];

const els = {
  intro:document.querySelector("#quiz-intro"),game:document.querySelector("#quiz-game"),result:document.querySelector("#quiz-result"),
  name:document.querySelector("#player-name"),nameError:document.querySelector("#name-error"),
  modeButtons:Array.from(document.querySelectorAll(".quiz-mode")),modeDescription:document.querySelector("#mode-description"),
  rangeTabs:document.querySelector("#stage-range-tabs"),levelNote:document.querySelector("#stage-level-note"),stageGrid:document.querySelector("#stage-card-grid"),
  player:document.querySelector("#active-player"),activeStage:document.querySelector("#active-stage"),changeStage:document.querySelector("#change-stage"),
  count:document.querySelector("#question-count"),score:document.querySelector("#score-display"),progress:document.querySelector("#progress-bar"),
  progressBox:document.querySelector(".quiz-progress"),number:document.querySelector("#question-number"),type:document.querySelector("#question-type"),category:document.querySelector("#question-category"),
  question:document.querySelector("#question-text"),options:document.querySelector("#answer-options"),explanation:document.querySelector("#answer-explanation"),
  status:document.querySelector("#answer-status"),detail:document.querySelector("#answer-detail"),reference:document.querySelector("#answer-reference"),
  stagePoints:document.querySelector("#stage-points"),sync:document.querySelector("#score-sync"),next:document.querySelector("#next-question"),
  resultStage:document.querySelector("#result-stage"),finalScore:document.querySelector("#final-score"),resultTitle:document.querySelector("#result-title"),
  resultMessage:document.querySelector("#result-message"),resultPlayer:document.querySelector("#result-player"),
  correctTotal:document.querySelector("#correct-total"),saveStatus:document.querySelector("#save-status"),
  chooseAnother:document.querySelector("#choose-another"),retry:document.querySelector("#retry-stage")
};

let selectedStage=1,currentRange=0,quizMode="general",questions=[],current=0,correct=0,answered=0,playerName="",sessionId="",locked=false;
let responseLog=[];

function questionCount(){return selectedStage<=5?5:10}
function score(){return Math.round((correct/questionCount())*100)}
function makeSession(){return crypto.randomUUID?crypto.randomUUID():"quiz-"+Date.now()+"-"+Math.random().toString(36).slice(2)}
function levelFor(stage){return LEVELS.find(function(level){return stage>=level.from&&stage<=level.to})||LEVELS[0]}
function typeLabel(type){return {multiple:"Pilihan Ganda",truefalse:"Benar atau Salah",guess:"Tebak Tokoh",essay:"Esai"}[type]||"Kuis"}

function seededShuffle(items,seed){
  const result=items.slice();
  let value=seed*9301+49297;
  for(let i=result.length-1;i>0;i--){
    value=(value*9301+49297)%233280;
    const k=Math.floor((value/233280)*(i+1));
    const temp=result[i];result[i]=result[k];result[k]=temp;
  }
  return result;
}

function buildQuestions(stage){
  const level=levelFor(stage);
  const tier=LEVELS.indexOf(level)+1;
  let pool;
  if(quizMode==="sunday"){
    pool=sundayQuestions.concat(questionBank.filter(function(q){return q.level<=Math.min(3,tier)&&q.type!=="essay"}));
  }else{
    const minLevel=Math.max(1,tier-1);
    pool=questionBank.filter(function(q){return q.level>=minLevel&&q.level<=tier});
  }
  let shuffled=seededShuffle(pool,stage+(quizMode==="sunday"?777:0));
  const count=questionCount();
  const desired=stage<=5?["multiple","multiple","truefalse","guess","multiple"]:["multiple","truefalse","guess","multiple","essay","multiple","truefalse","guess","multiple",stage>=61?"essay":"multiple"];
  const chosen=[];
  desired.slice(0,count).forEach(function(type,index){
    let found=shuffled.find(function(q){return q.type===type&&!chosen.includes(q)});
    if(!found)found=shuffled.find(function(q){return !chosen.includes(q)});
    if(found)chosen.push(found);
  });
  while(chosen.length<count&&shuffled.length){
    const found=shuffled.find(function(q){return !chosen.includes(q)});
    if(!found)break;
    chosen.push(found);
  }
  return chosen;
}

function renderRanges(){
  els.rangeTabs.innerHTML="";
  LEVELS.forEach(function(level,index){
    const button=document.createElement("button");
    button.type="button";
    button.className="stage-range-tab"+(index===currentRange?" active":"");
    button.innerHTML="<span>"+level.icon+"</span><strong>"+level.from+"–"+level.to+"</strong><small>"+level.name+"</small>";
    button.addEventListener("click",function(){currentRange=index;renderRanges();renderStages()});
    els.rangeTabs.appendChild(button);
  });
}

function renderStages(){
  const level=LEVELS[currentRange];
  els.levelNote.innerHTML="<span>"+level.icon+"</span><div><strong>"+level.name+"</strong><small>"+level.note+"</small></div>";
  els.stageGrid.innerHTML="";
  for(let stage=level.from;stage<=level.to;stage++){
    const button=document.createElement("button");
    const topic=quizMode==="sunday"?"Petualangan Anak · "+TOPICS[(stage-1)%TOPICS.length]:TOPICS[(stage-1)%TOPICS.length];
    button.type="button";button.className="stage-card generated-stage"+(stage>80?" final-level":"");
    button.dataset.stage=String(stage);button.dataset.color=String((stage-1)%10);
    button.innerHTML='<span class="stage-card-icon" aria-hidden="true">'+(quizMode==="sunday"?"🌈":ICONS[(stage-1)%ICONS.length])+'</span><span class="stage-number">'+String(stage).padStart(2,"0")+'</span><div><strong>'+topic+'</strong><small>Tahap '+stage+' · '+(stage<=5?5:10)+' soal · '+level.name+'</small><b>'+typeLabel(stage<=5?"multiple":stage%4===0?"essay":stage%3===0?"guess":"truefalse")+' & lainnya</b></div><i>Mulai →</i>';
    button.addEventListener("click",function(){beginStage(stage)});
    els.stageGrid.appendChild(button);
  }
}

function setMode(mode){
  quizMode=mode;
  document.body.classList.toggle("sunday-active",mode==="sunday");
  els.modeButtons.forEach(function(button){button.classList.toggle("active",button.dataset.mode===mode)});
  els.modeDescription.textContent=mode==="sunday"?"Kuis ceria dengan bahasa sederhana, kisah tokoh, tindakan kasih, dan pertanyaan refleksi anak.":"Perjalanan lengkap dari dasar hingga pertanyaan mendalam, eksegese sederhana, dan penerapan.";
  renderStages();
}

async function saveProgress(lastResponse){
  els.sync.textContent="Menyimpan nilai…";
  const payload={
    sessionId:sessionId,playerName:playerName,selectedStage:selectedStage,answeredQuestions:answered,correctAnswers:correct,
    quizMode:quizMode,level:levelFor(selectedStage).name,score:score(),lastQuestionType:questions[current]?questions[current].type:"",
    lastResponse:lastResponse||"",responses:responseLog.slice(-10)
  };
  try{
    const response=await fetch(QUIZ_API,{method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:JSON.stringify(payload),mode:"cors",keepalive:true});
    if(!response.ok)throw new Error();
    els.sync.textContent=answered>=questionCount()?"Nilai akhir dan jawaban tersimpan untuk admin.":"Nilai sementara tersimpan untuk admin.";
    return true;
  }catch(error){
    els.sync.textContent="Nilai belum tersimpan. Pastikan internet aktif.";
    return false;
  }
}

function beginStage(stage){
  playerName=els.name.value.trim().replace(/\s+/g," ").slice(0,30);
  if(playerName.length<2){els.nameError.textContent="Masukkan nama panggilan minimal 2 huruf sebelum memilih tahap.";els.name.focus();return}
  els.nameError.textContent="";selectedStage=stage;questions=buildQuestions(stage);
  current=0;correct=0;answered=0;locked=false;sessionId=makeSession();responseLog=[];
  els.intro.hidden=true;els.result.hidden=true;els.game.hidden=false;
  els.player.textContent=playerName;els.activeStage.textContent=(quizMode==="sunday"?"Sekolah Minggu · ":"")+"Tahap "+selectedStage+" · "+questionCount()+" soal";
  renderQuestion();saveProgress();
  window.eriksonTrackActivity&&window.eriksonTrackActivity("quiz_start",playerName+" memilih "+(quizMode==="sunday"?"Sekolah Minggu ":"")+"Tahap "+selectedStage,"quiz:"+sessionId);
  window.scrollTo({top:els.game.offsetTop-20,behavior:"smooth"});
}

function renderQuestion(){
  locked=false;
  const q=questions[current];
  els.count.textContent="Soal "+(current+1)+" dari "+questionCount();
  els.score.textContent="Nilai: "+score()+"/100";
  els.progress.style.width=((current+1)/questionCount()*100)+"%";
  els.progressBox.setAttribute("aria-valuemax",String(questionCount()));els.progressBox.setAttribute("aria-valuenow",String(current+1));
  els.number.textContent=String(current+1).padStart(2,"0");els.type.textContent=typeLabel(q.type);els.category.textContent=q.category;els.question.textContent=q.question;
  els.options.innerHTML="";els.options.className="answer-grid"+(q.type==="essay"?" essay-grid":"");
  els.explanation.hidden=true;els.next.hidden=true;els.sync.textContent="";
  if(q.type==="essay"){renderEssay(q);return}
  q.options.forEach(function(option,index){
    const button=document.createElement("button");
    button.type="button";button.className="answer-option";
    button.innerHTML="<span>"+(q.type==="truefalse"?(index===0?"✓":"×"):String.fromCharCode(65+index))+"</span><strong>"+option+"</strong>";
    button.addEventListener("click",function(){answerChoice(index,button)});
    els.options.appendChild(button);
  });
}

function renderEssay(q){
  const wrap=document.createElement("div");wrap.className="essay-area";
  wrap.innerHTML='<label for="essay-answer">Tuliskan jawabanmu dengan kata-katamu sendiri</label><textarea id="essay-answer" rows="5" maxlength="500" placeholder="Ketik jawaban di sini…"></textarea><small>Jawaban dinilai dari gagasan atau kata inti, bukan panjangnya.</small><button type="button" class="button button-primary" id="submit-essay">Periksa Jawaban</button>';
  els.options.appendChild(wrap);
  wrap.querySelector("#submit-essay").addEventListener("click",function(){answerEssay(q,wrap.querySelector("textarea"))});
}

function showFeedback(isCorrect,q,responseText){
  answered+=1;if(isCorrect)correct+=1;
  responseLog.push({number:current+1,type:q.type,answer:String(responseText).slice(0,500),correct:isCorrect});
  els.stagePoints.textContent=score()+"/100";els.stagePoints.className=isCorrect?"earned":"missed";
  els.status.textContent=isCorrect?(q.type==="essay"?"Gagasan utamamu sesuai!":"Benar!"):(q.type==="essay"?"Jawabanmu belum memuat gagasan utama.":"Belum tepat.");
  els.status.className=isCorrect?"status-correct":"status-wrong";els.detail.textContent=q.explanation;els.reference.textContent=q.reference;
  els.explanation.hidden=false;els.score.textContent="Nilai: "+score()+"/100";
  els.next.textContent=answered>=questionCount()?"Lihat Nilai Tahap →":"Soal berikutnya →";els.next.hidden=false;
  saveProgress(String(responseText).slice(0,500));
}

function answerChoice(index,selected){
  if(locked)return;locked=true;
  const q=questions[current];const buttons=Array.from(els.options.querySelectorAll("button"));
  buttons.forEach(function(button,i){button.disabled=true;if(i===q.answer)button.classList.add("correct")});
  const isCorrect=index===q.answer;if(!isCorrect)selected.classList.add("wrong");
  showFeedback(isCorrect,q,q.options[index]);
}

function normalize(text){return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ")}
function answerEssay(q,textarea){
  if(locked)return;
  const value=textarea.value.trim();
  if(value.length<8){els.sync.textContent="Tuliskan jawaban sedikit lebih lengkap sebelum diperiksa.";textarea.focus();return}
  locked=true;textarea.disabled=true;els.options.querySelector("button").disabled=true;
  const normalized=normalize(value);const hits=q.keywords.filter(function(keyword){return normalized.includes(normalize(keyword))});
  showFeedback(hits.length>=(q.minKeywords||1),q,value);
}

function nextQuestion(){if(answered>=questionCount()){finish();return}current+=1;renderQuestion();window.scrollTo({top:els.game.offsetTop-20,behavior:"smooth"})}
async function finish(){
  els.game.hidden=true;els.result.hidden=false;els.resultStage.textContent=(quizMode==="sunday"?"SEKOLAH MINGGU · ":"")+"TAHAP "+selectedStage+" SELESAI";
  els.finalScore.textContent=String(score());els.resultPlayer.textContent=playerName;els.correctTotal.textContent=correct+"/"+questionCount();
  localStorage.setItem("erikson-last-certificate",JSON.stringify({
    playerName:playerName,stage:selectedStage,score:score(),correct:correct,total:questionCount(),
    mode:quizMode==="sunday"?"Sekolah Minggu":"Kuis Alkitab Umum",completedAt:new Date().toISOString()
  }));
  if(score()>=90){els.resultTitle.textContent="Luar biasa!";els.resultMessage.textContent="Pemahamanmu sangat baik. Teruslah membaca dan melakukan Firman Tuhan."}
  else if(score()>=70){els.resultTitle.textContent="Bagus! Terus bertumbuh.";els.resultMessage.textContent="Pelajari kembali ayat pada jawaban yang belum tepat."}
  else{els.resultTitle.textContent="Tetap semangat belajar.";els.resultMessage.textContent="Nilai ini menjadi awal untuk mengenal Firman Tuhan lebih dalam."}
  els.saveStatus.textContent="Menyimpan…";els.saveStatus.textContent=await saveProgress()?"Tersimpan":"Belum tersimpan";
  window.scrollTo({top:els.result.offsetTop-20,behavior:"smooth"});
}
function backToStages(){els.game.hidden=true;els.result.hidden=true;els.intro.hidden=false;currentRange=Math.floor((selectedStage-1)/20);renderRanges();renderStages();window.scrollTo({top:els.intro.offsetTop-20,behavior:"smooth"})}

els.modeButtons.forEach(function(button){button.addEventListener("click",function(){setMode(button.dataset.mode)})});
els.next.addEventListener("click",nextQuestion);els.changeStage.addEventListener("click",backToStages);els.chooseAnother.addEventListener("click",backToStages);els.retry.addEventListener("click",function(){beginStage(selectedStage)});
renderRanges();renderStages();
