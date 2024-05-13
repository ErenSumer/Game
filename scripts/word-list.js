const wordList = [
    {
        word: "gitar",
        hint: "Telleri olan bir müzik aleti."
    },
    {
        word: "oksijen",
        hint: "Yaşam için gerekli, renksiz, kokusuz bir gaz."
    },
    {
        word: "dağ",
        hint: "Dünya yüzeyinin büyük bir doğal yüksekliği."
    },
    {
        word: "resim",
        hint: "Görüntüler veya ifadeler yaratmak için yüzeydeki renkleri kullanan bir sanat formu."
    },
    {
        word: "astronomi",
        hint: "Gök cisimleri ve olgularının bilimsel olarak incelenmesi."
    },
    {
        word: "futbol",
        hint: "Küresel bir topla oynanan popüler bir spor."
    },
    {
        word: "çikolata",
        hint: "Kakao çekirdeklerinden yapılan tatlı bir ikram."
    },
    {
        word: "kelebek",
        hint: "Renkli kanatları ve ince gövdesi olan bir böcek."
    },
    {
        word: "tarih",
        hint: "Geçmiş olayların ve insan uygarlığının incelenmesi."
    },
    {
        word: "pizza",
        hint: "Yuvarlak, düzleştirilmiş bir taban ve üzerine eklenen malzemelerden oluşan lezzetli bir yemek."
    },
    {
        word: "caz",
        hint: "Doğaçlama ve senkopla karakterize edilen bir müzik türü."
    },
    {
        word: "kamera",
        hint: "Resim veya video yakalamak ve kaydetmek için kullanılan bir cihaz."
    },
    {
        word: "elmas",
        hint: "Parlaklığı ve sertliğiyle bilinen değerli bir taş."
    },
    {
        word: "macera",
        hint: "Heyecan verici veya cesur bir deneyim."
    },
    {
        word: "bilim",
        hint: "Fiziksel ve doğal dünyanın yapısı ve davranışının sistematik incelenmesi."
    },
    {
        word: "bisiklet",
        hint: "İki tekerlekli, insan gücüyle çalışan bir araç."
    },
    {
        word: "gün batımı",
        hint: "Güneşin ufkun altında her gün kaybolması."
    },
    {
        word: "kahve",
        hint: "Kavrulmuş kahve çekirdeklerinden yapılan popüler bir kafeinli içecek."
    },
    {
        word: "dans",
        hint: "Genellikle müzik eşliğinde gerçekleştirilen, vücudun ritmik bir hareketi."
    },
    {
        word: "galaksi",
        hint: "Yerçekimi tarafından bir arada tutulan geniş bir yıldız, gaz ve toz sistemi."
    },
    {
        word: "orkestra",
        hint: "Çeşitli enstrümanlar çalan büyük bir müzisyen topluluğu."
    },
    {
        word: "volkan",
        hint: "Lavın, kaya parçalarının, sıcak buharın ve gazın dışarı fırladığı bir havalandırma deliğine sahip bir dağ veya tepe."
    },
    {
        word: "roman",
        hint: "Genellikle karmaşık bir olay örgüsü ve karakterlere sahip, uzun bir kurgu çalışması."
    },
    {
        word: "heykel",
        hint: "Malzemelerin şekillendirilmesi veya birleştirilmesiyle oluşturulan üç boyutlu bir sanat formu."
    },
    {
        word: "senfoni",
        hint: "Tam bir orkestra için, genellikle birden fazla bölümden oluşan uzun bir müzik kompozisyonu."
    },
    {
        word: "mimari",
        hint: "Binaları tasarlama ve inşa etme sanatı ve bilimi."
    },
    {
        word: "bale",
        hint: "Hassas ve zarif hareketlerle karakterize edilen klasik bir dans formu."
    },
    {
        word: "astronot",
        hint: "Uzayda seyahat etmek ve çalışmak üzere eğitilmiş bir kişi."
    },
    {
        word: "şelale",
        hint: "Yüksekten düşen su çağlayanı."
    },
    {
        word: "teknoloji",
        hint: "Bilimsel bilginin pratik amaçlar için uygulanması."
    },
    {
        word: "gökkuşağı",
        hint: "Işığın yansıması, kırılması ve dağılmasından kaynaklanan meteorolojik bir olay."
    },
    {
        word: "evren",
        hint: "Bir bütün olarak mevcut tüm madde, uzay ve zaman."
    },
    {
        word: "piyano",
        hint: "Çekiçlerin tellere çarpmasını sağlayan tuşlara basılarak çalınan bir müzik aleti."
    },
    {
        word: "tatil",
        hint: "Zevke, dinlenmeye veya rahatlamaya ayrılan zaman dilimi."
    },
    {
        word: "yağmur ormanı",
        hint: "Yüksek yağış ve biyolojik çeşitlilik ile karakterize edilen yoğun bir orman."
    },
    {
        word: "tiyatro",
        hint: "Oyunların, filmlerin veya diğer gösterilerin sahnelendiği bir bina veya açık alan."
    },
    {
        word: "telefon",
        hint: "Sesi uzun mesafelere iletmek için kullanılan bir cihaz."
    },
    {
        word: "dil",
        hint: "wordlerden, jestlerden ve sözdiziminden oluşan bir iletişim sistemi."
    },
    {
        word: "çöl",
        hint: "Çok az yağış alan veya hiç yağış almayan çorak veya kurak bir arazi."
    },
    {
        word: "ayçiçeği",
        hint: "Büyük sarı çiçek başlı uzun bir bitki."
    },
    {
        word: "fantezi",
        hint: "Büyü ve doğaüstü unsurları içeren, yaratıcı bir kurgu türü."
    },
    {
        word: "teleskop",
        hint: "Uzaydaki uzak nesneleri görüntülemek için kullanılan optik bir alet."
    },
    {
        word: "esinti",
        hint: "Hafif bir rüzgar."
    },
    {
        word: "vaha",
        hint: "Çölde suyun bulunduğu verimli bir yer."
    },
    {
        word: "fotoğrafçılık",
        hint: "Işığı veya diğer elektromanyetik radyasyonu kaydederek görüntü oluşturma sanatı, süreci veya uygulaması."
    },
    {
        word: "safari",
        hint: "Genellikle yaban hayatını doğal ortamlarında gözlemlemek için yapılan bir keşif gezisi veya yolculuk."
    },
    {
        word: "gezegen",
        hint: "Bir yıldızın yörüngesinde dönen ve kendi ışığını üretmeyen gök cismi."
    },
    {
        word: "nehir",
        hint: "Bir kanaldan denize, göle veya buna benzer başka bir dereye doğru akan büyük bir doğal su akıntısı."
    },
    {
        word: "tropikal",
        hint: "Yengeç Dönencesi ile Oğlak Dönencesi arasındaki bölgeyle ilgili veya bu bölgede yer alan."
    },
    {
        word: "gizemli",
        hint: "Anlamak, açıklamak veya tanımlamak zor veya imkansız."
    },
    {
        word: "gizem",
        hint: "Gizemli, kafa karıştırıcı veya anlaşılması zor bir şey."
    },
    {
        word: "paradoks",
        hint: "Kendisiyle çelişen veya sezgiye meydan okuyan bir ifade veya durum."
    },
    {
        word :"bulmaca",
        hint: "Yaratıcılığı veya bilgiyi test etmek için tasarlanmış bir oyun, oyuncak veya problem."
    },
    {
        word: "fısıltı",
        hint: "Çok alçak sesle veya alçak sesle, çoğunlukla gizli bir şekilde konuşmak."
    },
    {
        word: "gölge",
        hint: "Işığı engelleyen bir nesnenin oluşturduğu karanlık alan veya şekil."
    },
    {
        word: "gizli",
        hint: "Başkaları tarafından gizli tutulan veya bilinmeyen bir şey."
    },
    {
        word: "merak",
        hint: "Bir şeyi bilmek veya öğrenmek için güçlü bir istek."
    },
    {
        word: "öngörülemez",
        hint: "Önceden öngörülemez veya bilinemez; belirsiz."
    },
    {
        word: "karıştırmak",
        hint: "Birinin kafasını karıştırmak veya şaşkına çevirmek; bir şeyi belirsiz veya anlaşılması zor hale getirmek."
    },
    {
        word: "açıklamak",
        hint: "Daha önce gizli veya bilinmeyen bir şeyi bilinir kılmak veya ortaya çıkarmak."
    },
    {
        word: "illüzyon",
        hint: "Yanlış bir algı veya inanç; aldatıcı bir görünüm veya izlenim."
    },
    {
        word: "ay ışığı",
        hint: "Aydan gelen ışık."
    },
    {
        word: "canlı",
        hint: "Enerji, parlaklık ve yaşam dolu."
    },
    {
        word: "nostalji",
        hint: "Geçmişe duyulan duygusal bir özlem veya hüzünlü bir sevgi."
    },
    {
        word: "harika",
        hint: "Son derece zeki, yetenekli veya etkileyici."
    },
];