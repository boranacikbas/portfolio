export const translations = {
  tr: {
    nav: {
      about: "Hakkında",
      education: "Eğitim",
      experience: "Deneyim",
      projects: "Projeler",
      awards: "Ödüller",
      certifications: "Sertifikalar",
      contact: "İletişim"
    },
    hero: {
      greeting: "Merhaba, Ben",
      location: "İstanbul, Türkiye",
      description: "Geleceğin en büyük gücü olan veriyi anlamlı içgörülere dönüştürmeyi hedefleyen, Yıldız Teknik Üniversitesi İstatistik Bölümü öğrencisi ve veriyle beslenen bir analist adayıyım.",
      btnProjects: "Projelerimi Gör",
      btnContact: "İletişime Geç",
      btnCV: "CV'mi Görüntüle",
      cvLink: "/Boran_Acikbas_CV_TR.pdf"
    },
    about: {
      title: "Hakkımda",
      description: "Yıldız Teknik Üniversitesi İstatistik Bölümü 3. sınıf öğrencisiyim. Verinin değerinin her geçen gün daha net anlaşıldığı bu dönemde; veriyi doğru okuma, analiz etme ve sunma alanlarında kendimi geliştiriyorum. Veri bilimi, Makine Öğrenmesi modelleri ve yapay zeka araçlarının etkin kullanımı üzerine çeşitli projeler geliştiriyor ve yarışmalara katılıyorum. Finans ve yatırım ekosistemine özel bir ilgim var ve projelerimi daha çok bu sektörlere yönlendirdim. Kariyerime Veri Bilimi, İş Analizi ve Proje - Ürün Yönetimi alanlarında yön vermek istiyorum. Bu alanlarda sektörel tecrübeler edineceğim staj ve iş fırsatları arıyorum.",
      skillsTitle: "Yeteneklerim",
      skills: [
        "Python (Pandas, NumPy, Scikit-learn)",
        "SQL",
        "R",
        "MS Excel",
        "Makine Öğrenmesi & Modelleme",
        "İstatistiksel Modelleme",
        "Vibe Coding",
        "Vaka Analizi & Problem Çözme",
        "İş Analizi",
        "Proje Yönetimi"
      ]
    },
    education: {
      title: "Eğitimim",
      items: [
        {
          id: 1,
          year: "2024 - 2028",
          degree: "Lisans Derecesi - İstatistik",
          institution: "Yıldız Teknik Üniversitesi",
          gpa: "3.37",
          description: "Veri bilimi, makine öğrenmesi ve istatistiksel analiz yöntemleri üzerine kapsamlı bir eğitim alıyorum."
        }
      ]
    },
    experience: {
      title: "Deneyimlerim",
      items: [
        {
          id: 5,
          year: "Ağustos 2026 - Devam ediyor",
          role: "Financial Controlling Proje Öğrencisi",
          type: "Yarı Zamanlı",
          company: "BSH Ev Aletleri",
          description: "Üretim fabrikalarının yatırım süreçlerinde finansal planlama ve raporlama konularına destek olmak."
        },
        {
          id: 4,
          year: "Ağustos 2025 - Şubat 2026",
          role: "Veritabanı Editörü",
          type: "Tam Zamanlı",
          company: "Mackolik A.Ş. | Kadıköy, İstanbul",
          description: "Türkiye'nin en büyük spor platformu Mackolik'in veri biriminde, lisans eğitimimle eş zamanlı olarak görev aldım. Bu süreçte, çeşitli kaynaklardan elde edilen spor verilerini analiz ederek anlamlı çıktılara dönüştürdüm ve kullanıcı deneyimini (UX) optimize edecek projelerde aktif rol oynadım."
        },
        {
          id: 1,
          year: "Ocak 2025 - Ağustos 2025",
          role: "Veri Operatörü",
          type: "Freelance",
          company: "SporData Bilgi Teknolojileri A.Ş. | Kadıköy, İstanbul",
          description: "Canlı spor müsabakalarını analiz ederek çeşitli spor branşlarında veri toplama ve bu verilerin aracı kurumlara iletilmesi sürecinde analiz ve raporlama faaliyetlerinde bulundum."
        },
        {
          id: 2,
          year: "Ekim 2024 - Ağustos 2025",
          role: "AI Eğitmeni",
          type: "Freelance",
          company: "Outlier AI",
          description: "Türkçe ve İngilizce dillerinde dilsel doğruluğu artırmak için gelişmiş doğal dil işleme (NLP) görevleri gerçekleştirerek Büyük Dil Modellerinin (LLM) geliştirilmesine katkıda bulundum."
        },
        {
          id: 3,
          year: "Mayıs 2024 - Eylül 2024",
          role: "Satış Danışmanı",
          type: "Tam Zamanlı",
          company: "CVS Health (Delaware, ABD)",
          description: "Work and Travel programı kapsamında Amerika Birleşik Devletleri'nde 4 ay geçirdim. Bu sürede Amerika'nın en büyük market zincirlerinden birinde satış danışmanı olarak görev yaptım. Burada mağaza stok kontrolü, raporlama ve müşteri ilişkileriyle ilgilendim. Bu tecrübe bana yabancı dilimi geliştirme ve kültürlerarası etkileşim kurma fırsatı tanıdı."
        }
      ]
    },
    projects: {
      title: "Projelerim",
      items: [
        {
          id: 1,
          title: "FinTwin - AI Finansal İkiz",
          description: "Kullanıcıların geçmiş harcama alışkanlıklarını ve finansal verilerini analiz ederek onlara kişiselleştirilmiş bütçe yönetimi, tasarruf senaryoları ve harcama tahminleri sunan yapay zeka tabanlı bir \"Dijital Finansal İkiz\" modeli geliştirdik. Teknik mimaride, Kümeleme (K-Means) yöntemi ve LSTM zaman serilerini kullanarak hibrit bir model oluşturduk ve Üretken Yapay Zeka (Generative AI) yardımıyla kullanıcıya şeffaf açıklamalar sunduk. Projenin bankaya katkısını, TGA (NPL) oranlarında %18'lik bir azalma olarak öngördük.",
          tech: ["Python", "SQL", "Generative AI", "Excel", "Deep Learning", "Machine Learning"],
          link: "/fintwin.pdf",
          linkText: "Projeyi Gör"
        },
        {
          id: 2,
          title: "Müşteri Deneyimi ve Servis Tasarımı",
          description: "Bir günlük Case Maratonu kapsamında ekip arkadaşlarımızla Akbank kampanyalarının müşteri deneyimini Proaktif AI desteği ve Robotik Süreç Otomasyonu (RPA) kullanarak arttırmayı hedefledik.",
          tech: ["Vibe Coding", "Ekip Çalışması", "Ürün Yönetimi", "Proje Geliştirme"],
          link: "https://prezi.com/view/WAkNajkNsHbDYfFz8UYv/?referral_token=-kzCcWlnB3FN",
          linkText: "Projeyi Gör"
        }
      ]
    },
    awards: {
      title: "Ödüller & Başarılar",
      items: [
        {
          id: 1,
          title: "Garanti BBVA Ideathon 3.lüğü",
          organization: "Garanti BBVA - Fikrinle Parla",
          date: "2026",
          description: "Garanti BBVA'nın düzenlemiş olduğu 'Fikrinle Parla' yarışmasında Yapay Zeka ile Geleceğin Bankacılığı kategorisinde geliştirdiğimiz 'FinTwin' adlı AI Finansal İkiz projemizle 167 farklı üniversiteden 1281 takım arasından Türkiye 3.sü olmayı başardık.",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7463547282370674689/",
          linkText: "Detayları Gör"
        },
        {
          id: 2,
          title: "Akbank Case Maratonu 1.liği",
          organization: "Akbank - Müşteri Deneyimi",
          date: "2026",
          description: "Akbank tarafından düzenlenen Müşteri Deneyimi ve Servis Tasarımı Case Maratonu’nda ekip arkadaşlarımla birlikte 5 saat gibi kısa bir sürede sıfırdan bankacılık kampanya süreçleriyle ilgili müşteri deneyimini arttırmaya yönelik bir proje ve sunum geliştirerek birinci olmayı başardık.",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7467900623150166017/",
          linkText: "Detayları Gör"
        }
      ]
    },
    certifications: {
      title: "Sertifikalar",
      btnView: "Sertifikayı Gör",
      items: [
        {
          id: 1,
          title: "Enerjisa - Retail Xperience Programı",
          issuer: "Enerjisa",
          date: "Aralık 2025",
          link: "https://credsverse.com/credentials/3e34e524-7e9d-4dc0-9c1b-dcd934e03a5d"
        },
        {
          id: 2,
          title: "QNB 101 Staj Programı",
          issuer: "QNB",
          date: "Şubat 2026",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQHKqCq4-PUk2g/profile-treasury-image-shrink_1920_1920/B4DZy4dFPbG0Ac-/0/1772621157984?e=1782680400&v=beta&t=AtKZmZ12gj70NSsEmLpDV-DqgfmlXU1tg-dFyScKSFo"
        },
        {
          id: 3,
          title: "Finans ve Yatırım Okulu",
          issuer: "anbean",
          date: "Mart 2026",
          link: "https://anbeankampus.co/sertifika/4590bd3a-026f-48ef"
        },
        {
          id: 4,
          title: "Satış Okulu",
          issuer: "anbean",
          date: "Mayıs 2026",
          link: "https://anbeankampus.co/sertifika/20284b86-3d93-4741"
        },
        {
          id: 5,
          title: "Akbank Case Maratonu",
          issuer: "Akbank",
          date: "Haziran 2026",
          link: "https://akbank-genclik-akademisi.verified.cv/tr/verify/22678975901217"
        }
      ]
    },
    contact: {
      title: "İletişim & Bağlantılar",
      description: "Yeni bir proje fikriniz mi var veya sadece merhaba mı demek istiyorsunuz? Benimle aşağıdaki kanallardan iletişime geçebilirsiniz.",
      emailLink: "Bana E-Posta Gönder",
      form: {
        title: "Bana Mesaj Gönderin",
        nameLabel: "Ad Soyad",
        namePlaceholder: "Adınız ve Soyadınız",
        emailLabel: "E-Posta",
        emailPlaceholder: "ornek@mail.com",
        messageLabel: "Mesajınız",
        messagePlaceholder: "Bana nelerden bahsetmek istersiniz?",
        submitBtn: "Mesajı Gönder"
      },
      footer: "Tüm hakları saklıdır."
    }
  },
  en: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      awards: "Awards",
      certifications: "Certifications",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      location: "Istanbul, Turkey",
      description: "An analyst candidate and Yıldız Technical University Statistics student who aims to transform data, the greatest power of the future, into meaningful insights.",
      btnProjects: "View My Projects",
      btnContact: "Get in Touch",
      btnCV: "View My CV",
      cvLink: "/Boran_Acikbas_CV_EN.pdf"
    },
    about: {
      title: "About Me",
      description: "I am a junior student in the Statistics Department at Yıldız Technical University. In an era where the value of data is becoming clearer every day, I am continually developing my skills in interpreting, analyzing, and presenting data effectively. I develop various projects and participate in competitions focused on Data Science, Machine Learning models, and the active use of Artificial Intelligence tools. I have a special interest in the finance and investment ecosystem, and I direct most of my projects toward these sectors. I want to steer my career towards Data Science, Business Analysis, and Project & Product Management. I am actively seeking internship and job opportunities to gain industry experience in these fields.",
      skillsTitle: "My Skills",
      skills: [
        "Python (Pandas, NumPy, Scikit-learn)",
        "SQL",
        "R",
        "MS Excel",
        "Machine Learning & Modeling",
        "Statistical Modeling",
        "Vibe Coding",
        "Case Analysis & Problem Solving",
        "Business Analysis",
        "Project Management"
      ]
    },
    education: {
      title: "My Education",
      items: [
        {
          id: 1,
          year: "2024 - 2028",
          degree: "Bachelor's Degree - Statistics",
          institution: "Yıldız Technical University",
          gpa: "3.37",
          description: "Receiving comprehensive education focused on data science, machine learning, and statistical analysis methods."
        }
      ]
    },
    experience: {
      title: "My Experience",
      items: [
        {
          id: 5,
          year: "August 2026 - Present",
          role: "Financial Controlling Project Student",
          type: "Part Time",
          company: "BSH Home Appliances",
          description: "Supported financial planning and reporting processes in the investment operations of production factories."
        },
        {
          id: 4,
          year: "August 2025 - February 2026",
          role: "Database Editor",
          type: "Full Time",
          company: "Mackolik A.Ş. | Kadıköy, Istanbul",
          description: "Worked simultaneously with my undergraduate studies in the data unit of Mackolik, Turkey's largest sports platform. During this process, I analyzed sports data obtained from various sources, transformed it into meaningful insights, and played an active role in projects aimed at optimizing the user experience (UX)."
        },
        {
          id: 1,
          year: "January 2025 - August 2025",
          role: "Data Operator",
          type: "Freelance",
          company: "SporData Bilgi Teknolojileri A.Ş. | Kadıköy, Istanbul",
          description: "Analyzed live sports matches, collected data across various sports, and performed analysis and reporting activities during the transmission of these data to intermediary institutions."
        },
        {
          id: 2,
          year: "October 2024 - August 2025",
          role: "AI Trainer",
          type: "Freelance",
          company: "Outlier AI",
          description: "Contributed to the development of Large Language Models (LLMs) by performing advanced Natural Language Processing (NLP) tasks to improve linguistic accuracy in both Turkish and English."
        },
        {
          id: 3,
          year: "May 2024 - September 2024",
          role: "Sales Associate",
          type: "Full Time",
          company: "CVS Health (Delaware, USA)",
          description: "Spent 4 months in the United States as part of the Work and Travel program. During this time, I worked as a sales associate in one of America's largest pharmacy store chains. I handled store inventory control, reporting, and customer relations. This experience provided me with the opportunity to improve my foreign language skills and build cross-cultural interactions."
        }
      ]
    },
    projects: {
      title: "My Projects",
      items: [
        {
          id: 1,
          title: "FinTwin - AI Financial Twin",
          description: "We developed an AI-based \"Digital Financial Twin\" model that analyzes users' past spending habits and financial data to offer personalized budget management, savings scenarios, and spending forecasts. In the technical architecture, we built a hybrid model using Clustering (K-Means) and LSTM time series, and provided transparent explanations to the user with the help of Generative AI. We projected the project's contribution to the bank as an 18% reduction in NPL (Non-Performing Loans) rates.",
          tech: ["Python", "SQL", "Generative AI", "Excel", "Deep Learning", "Machine Learning"],
          link: "/fintwin.pdf",
          linkText: "View Project"
        },
        {
          id: 2,
          title: "Customer Experience and Service Design",
          description: "During a one-day Case Marathon, my teammates and I aimed to enhance the customer experience of Akbank campaigns using Proactive AI support and Robotic Process Automation (RPA).",
          tech: ["Vibe Coding", "Teamwork", "Product Management", "Project Development"],
          link: "https://prezi.com/view/WAkNajkNsHbDYfFz8UYv/?referral_token=-kzCcWlnB3FN",
          linkText: "View Project"
        }
      ]
    },
    awards: {
      title: "Awards & Achievements",
      items: [
        {
          id: 1,
          title: "Garanti BBVA Ideathon 3rd Place",
          organization: "Garanti BBVA - Fikrinle Parla",
          date: "2026",
          description: "In the 'Fikrinle Parla' competition organized by Garanti BBVA, we achieved 3rd place in Turkey among 1281 teams from 167 different universities with our AI Financial Twin project named 'FinTwin' in the 'Future of Banking with AI' category.",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7463547282370674689/",
          linkText: "View Details"
        },
        {
          id: 2,
          title: "Akbank Case Marathon 1st Place",
          organization: "Akbank - Customer Experience",
          date: "2026",
          description: "In the Customer Experience and Service Design Case Marathon organized by Akbank, my teammates and I successfully developed a project and presentation from scratch in just 5 hours to enhance the customer experience related to banking campaign processes, winning first place.",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7467900623150166017/",
          linkText: "View Details"
        }
      ]
    },
    certifications: {
      title: "Certifications",
      btnView: "View Certificate",
      items: [
        {
          id: 1,
          title: "Enerjisa - Retail Xperience Program",
          issuer: "Enerjisa",
          date: "December 2025",
          link: "https://credsverse.com/credentials/3e34e524-7e9d-4dc0-9c1b-dcd934e03a5d"
        },
        {
          id: 2,
          title: "QNB 101 Internship Program",
          issuer: "QNB",
          date: "February 2026",
          link: "https://media.licdn.com/dms/image/v2/D4D2DAQHKqCq4-PUk2g/profile-treasury-image-shrink_1920_1920/B4DZy4dFPbG0Ac-/0/1772621157984?e=1782680400&v=beta&t=AtKZmZ12gj70NSsEmLpDV-DqgfmlXU1tg-dFyScKSFo"
        },
        {
          id: 3,
          title: "Finance and Investment School",
          issuer: "anbean",
          date: "March 2026",
          link: "https://anbeankampus.co/sertifika/4590bd3a-026f-48ef"
        },
        {
          id: 4,
          title: "Sales School",
          issuer: "anbean",
          date: "May 2026",
          link: "https://anbeankampus.co/sertifika/20284b86-3d93-4741"
        },
        {
          id: 5,
          title: "Akbank Case Marathon",
          issuer: "Akbank",
          date: "June 2026",
          link: "https://akbank-genclik-akademisi.verified.cv/tr/verify/22678975901217"
        }
      ]
    },
    contact: {
      title: "Contact & Links",
      description: "Do you have a new project idea or just want to say hi? You can reach out to me through the channels below.",
      emailLink: "Send Me an Email",
      form: {
        title: "Send Me a Message",
        nameLabel: "Full Name",
        namePlaceholder: "Your First and Last Name",
        emailLabel: "Email Address",
        emailPlaceholder: "example@mail.com",
        messageLabel: "Your Message",
        messagePlaceholder: "What would you like to talk about?",
        submitBtn: "Send Message"
      },
      footer: "All rights reserved."
    }
  }
};
