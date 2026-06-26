/* ============================================================
   1. TRANSLATIONS (i18n)
   ============================================================ */

const translations = {
  en: {
    nav: {
      logo: "Karim",
      projects: "Projects",
      process: "Process",
      about: "About",
      education: "Education",
      contact: "Contact",
      langBtn: "ع",
      viewCv: "Download CV",
    },
    hero: {
      greeting: "Hey there 👋 I'm",
      name: "Karim Ahmed",
      jobTitle: "UI/UX Designer & Front-End Developer",
      description: "I turn ideas into experiences — clean interfaces, thoughtful interactions, and designs that actually make sense. Fresh grad, full energy, zero excuses.",
      btnProjects: "See My Work",
      btnCv: "Download CV",
      stat: {
        num1: "6+", label1: "Projects Built",
        num2: "3", label2: "Certifications",
        num3: "2025", label3: "Graduated",
      },
      skillPill: {
        sp1: "UI Design",
        sp2: "Figma",
        sp3: "UX Research",
      }
    },
    projects: {
      title: "Projects",
      intro: "A mix of things I built, designed, and obsessed over — each one taught me something new.",
      p1: {
        title: "E-Commerce Redesign",
        desc: "A full UI overhaul for an online store — cleaner layout, smoother flow, happier users.",
        btn: "View Project <i class='fa-solid fa-arrow-right-to-bracket'></i>",
      },
      p2: {
        title: "Task Manager App",
        desc: "A productivity app UI designed to keep things simple without losing power.",
        btn: "View Project <i class='fa-solid fa-arrow-right-to-bracket'></i>",
      },
      p3: {
        title: "Restaurant Landing Page",
        desc: "Elegant, mouth-watering landing page for a local restaurant. Yes, I was hungry the whole time.",
        btn: "Live Preview <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      p4: {
        title: "Portfolio Template",
        desc: "A reusable portfolio template — minimal, responsive, and easy to customize.",
        btn: "Live Preview <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      p5: {
        title: "Dashboard UI",
        desc: "Data-heavy dashboard with clean visual hierarchy and intuitive navigation.",
        btn: "Live Preview <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      p6: {
        title: "Mobile Banking App",
        desc: "A concept UI for a mobile banking app — focused on trust, clarity, and speed.",
        btn: "Live Preview <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      p7: {
        title: "Travel Booking UI",
        desc: "Booking flow redesign that reduced friction and made the process actually enjoyable.",
        btn: "Live Preview <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      p8: {
        title: "Blog Platform",
        desc: "Clean reading experience with a well-structured content layout and dark mode support.",
        btn: "Live Preview <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      loadMoreBtn: "Load More Projects",
      showLessBtn: "Show Less",
    },
    process: {
      title: "My Process",
      intro: "My process isn't rigid — I adapt to the project, the team, and the problem. But there's always a logic behind the moves.",
      card1: { num: "01", title: "Discover", sub: "Understanding the problem before jumping to solutions" },
      card2: { num: "02", title: "Define", sub: "Turning research into a clear design direction" },
      card3: { num: "03", title: "Design", sub: "Building interfaces that feel right, not just look right" },
      card4: { num: "04", title: "Deliver", sub: "Handoff-ready files, clean code, no chaos" },
    },
    about: {
      title: "About Me",
      contantTitle: "Who's behind the screen?",
      text1: "I'm Karim Ahmed — a UI/UX designer and front-end developer who graduated in 2025 with a passion for making digital things feel <strong>human</strong>. I care a lot about the details: spacing, contrast, the way a button feels when you hover it.",
      text2: "When I'm not designing, I'm probably tweaking CSS at 2am, watching design talks, or convincing myself that one more font comparison is worth it. I like building things that work beautifully — not just things that work.",
    },
    skills: {
      title: "My Skills:",
      text1: "UI/UX Design",
      text2: "Figma",
      text3: "HTML & CSS",
      text4: "JavaScript",
      text5: "Responsive Design",
      text6: "Prototyping",
      text7: "Design Systems",
    },
    education: {
      title: "Education",
      intro: "The foundation that keeps everything grounded.",
      image_alt: "Karim Ahmed graduation photo",
      degree: "Bachelor's in Computer Science",
      year: "2025",
      institution: "<i class='fas fa-university' aria-hidden='true'></i> Cairo University",
      desc: "Graduated with a focus on software engineering and human-computer interaction — the perfect combo for someone who loves both code and design.",
      text: "GPA: 3.4 / 4.0 — Not bad for someone who spent half the time arguing about design decisions 😄",
      text2: "Outside the classroom, I worked on real-world projects, collaborated with peers, and picked up skills that no syllabus could have planned. That's where the good stuff happened.",
    },
    certs: {
      cert1: { name: "Google Professional Data Analytics", issuer: "Coursera / Google", date: "September 2024" },
      cert2: { name: "Meta Digital Marketing Fundamentals", issuer: "Meta Ads Academy", date: "January 2025" },
      cert3: { name: "Microsoft Excel Expert (MOS)", issuer: "Microsoft", date: "March 2024" },
      certsLoadMoreBtn: "Load More",
    },
    contact: {
      title: "Let's Talk",
      intro: "Got a project in mind? A collab idea? Or just want to say hi? My inbox is always open — and I actually reply.",
      form: {
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        msgPlaceholder: "What's on your mind?",
        submitBtn: "Send It",
      },
      social: {
        1: "<i class='fa-brands fa-whatsapp' aria-hidden='true'></i> Chat on WhatsApp",
        2: "<i class='fa-brands fa-linkedin' aria-hidden='true'></i> LinkedIn Profile",
        3: "<i class='fa-brands fa-facebook' aria-hidden='true'></i> Facebook Page",
        4: "<i class='fa-brands fa-github' aria-hidden='true'></i> GitHub Profile",
      },
    },
    modals: {
      previewBtn: "Live Preview <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      labels: {
        task: "<i class='fa-solid fa-list-check'></i> The Task",
        Initiation: "<i class='fa-solid fa-play'></i> How It Started",
        process: "<i class='fa-solid fa-gears'></i> The Process",
        challenges: "<i class='fa-solid fa-triangle-exclamation'></i> Challenges",
        solution: "<i class='fa-solid fa-lightbulb'></i> Solution",
        result: "<i class='fa-solid fa-square-poll-vertical'></i> Result",
        tools: "<i class='fa-solid fa-wrench'></i> Tools Used",
      },
      p1: {
        projectName: "E-Commerce Redesign",
        imageTag: "UI / Redesign",
        task: "Redesign the product listing and checkout pages for a better conversion rate.",
        Initiation: "The client noticed a high cart abandonment rate and wanted a fresher, faster experience.",
        process: "Started with competitor analysis, mapped the current user journey, identified friction points, then rebuilt the flow from scratch in Figma.",
        challenges: {
          1: "Keeping the brand identity while modernizing the look",
          2: "Balancing visual richness with performance",
          3: "Getting stakeholder buy-in on a bold new direction",
        },
        solution: "Created a design system with a clear hierarchy, reduced unnecessary steps in the checkout flow, and used micro-interactions to guide the user.",
        result: "The redesign significantly improved the visual clarity and reduced cognitive load — setting up a smoother path to conversion.",
        tool1: "Figma",
        tool2: "FigJam",
        tool3: "Maze (User Testing)",
      },
      p2: {
        projectName: "Task Manager App",
        imageTag: "UI / App Design",
        task: "Design a task management app that's simple enough for individuals but powerful enough for small teams.",
        Initiation: "A personal side project turned into a portfolio piece after positive feedback from peers.",
        process: "Sketched low-fidelity wireframes, tested with 5 users, iterated, then polished into high-fidelity screens.",
        challenges: {
          1: "Avoiding feature bloat while keeping flexibility",
          2: "Making drag-and-drop feel intuitive on mobile",
          3: "Designing for both light and dark mode consistently",
        },
        solution: "Focused on a clean card-based layout with a progressive disclosure approach — hide complexity until the user needs it.",
        result: "Clean, functional UI that users found easy to pick up. Great feedback on the visual consistency and overall feel.",
        tool1: "Figma",
        tool2: "Principle (Animations)",
        tool3: "Notion (Planning)",
      },
    },
    footer: {
      copyright: "© {year} Karim Ahmed. All rights reserved.",
      credit: "Designed & Built by",
      myName: "Mariam",
    },
  },

  /* ==================== ARABIC ==================== */
  ar: {
    nav: {
      logo: "كريم",
      projects: "المشاريع",
      about: "عني",
      education: "التعليم",
      contact: "تواصل",
      langBtn: "En",
      viewCv: "تحميل السيرة الذاتية",
    },
    hero: {
      greeting: "أهلاً 👋 أنا",
      name: "كريم أحمد",
      jobTitle: "مصمم UI/UX ومطور Front-End",
      description: "بحوّل الأفكار لتجارب — واجهات نضيفة، تفاعلات مدروسة، وتصاميم بتتكلم لوحدها. خريج جديد، طاقة عالية، وما عنديش وقت للعذرية.",
      btnProjects: "شوف شغلي",
      btnCv: "تحميل السيرة",
      stat: {
        num1: "6+", label1: "Projects Built",
        num2: "3", label2: "Certifications",
        num3: "2025", label3: "Graduated",
      },
      skillPill: {
        sp1: "UI Design",
        sp2: "Figma",
        sp3: "UX Research",
      }
    },
    projects: {
      title: "المشاريع",
      intro: "مزيج من حاجات بنيتها، صممتها، وسهرت عليها — كل واحدة علّمتني حاجة جديدة.",
      p1: {
        title: "إعادة تصميم متجر إلكتروني",
        desc: "تجديد كامل لواجهة متجر أونلاين — تخطيط أوضح، تدفق أسلس، مستخدمين أسعد.",
        btn: "عرض المشروع <i class='fa-solid fa-arrow-right-to-bracket'></i>",
      },
      p2: {
        title: "تطبيق إدارة المهام",
        desc: "واجهة تطبيق إنتاجية مصممة تبقى بسيطة من غير ما تفقد قوتها.",
        btn: "عرض المشروع <i class='fa-solid fa-arrow-right-to-bracket'></i>",
      },
      p3: {
        title: "صفحة هبوط مطعم",
        desc: "صفحة أنيقة ومبهجة لمطعم محلي — آه، كنت جعان طول الوقت.",
        btn: "معاينة مباشرة <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      p4: {
        title: "قالب بورتفوليو",
        desc: "قالب بورتفوليو قابل لإعادة الاستخدام — مينيمال، متجاوب، وسهل التخصيص.",
        btn: "معاينة مباشرة <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      p5: {
        title: "واجهة داشبورد",
        desc: "داشبورد مليء بالبيانات مع تسلسل بصري واضح وتنقل سهل.",
        btn: "معاينة مباشرة <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      p6: {
        title: "تطبيق بنكي موبايل",
        desc: "تصميم مقترح لتطبيق بنكي — مركّز على الثقة والوضوح والسرعة.",
        btn: "معاينة مباشرة <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      p7: {
        title: "واجهة حجز سفر",
        desc: "إعادة تصميم تجربة الحجز لتقليل الخطوات وتحسين الرحلة.",
        btn: "معاينة مباشرة <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      p8: {
        title: "منصة مدونة",
        desc: "تجربة قراءة نظيفة مع تخطيط محتوى منظّم ودعم الوضع الداكن.",
        btn: "معاينة مباشرة <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      },
      loadMoreBtn: "تحميل المزيد",
      showLessBtn: "عرض أقل",
    },
    process: {
      title: "عمليتي",
      intro: "مش عندي عملية جامدة — بتكيّف مع المشروع والفريق والمشكلة. بس دايماً في منطق وراء القرارات.",
      card1: { num: "01", title: "اكتشاف", sub: "فهم المشكلة قبل القفز للحلول" },
      card2: { num: "02", title: "تحديد", sub: "تحويل البحث لاتجاه تصميمي واضح" },
      card3: { num: "03", title: "تصميم", sub: "بناء واجهات بتحسّسك صح مش بس تبان حلوة" },
      card4: { num: "04", title: "تسليم", sub: "ملفات جاهزة للتطوير، كود نضيف، بدون فوضى" },
    },
    about: {
      title: "عني",
      contantTitle: "مين اللي وراء الشاشة؟",
      text1: "أنا كريم أحمد — مصمم UI/UX ومطور Front-End، خريج 2025، وعندي شغف بتحويل الأشياء الرقمية لتجارب <strong>إنسانية</strong>. بهتم بالتفاصيل الصغيرة: المسافات، التباين، وإحساس الزرار لما تمرر عليه.",
      text2: "لما مبكونش بصمم، غالباً بعدّل CSS الساعة 2 الصبح، أو بتفرج على محاضرات تصميم، أو بقنع نفسي إن مقارنة فونت تانية تستاهل. بحب أبني حاجات بتشتغل بشكل جميل — مش بس حاجات بتشتغل.",
    },
    skills: {
      title: "مهاراتي:",
      text1: "تصميم UI/UX",
      text2: "Figma",
      text3: "HTML & CSS",
      text4: "JavaScript",
      text5: "تصميم متجاوب",
      text6: "النمذجة الأولية",
      text7: "أنظمة التصميم",
    },
    education: {
      title: "التعليم",
      intro: "الأساس اللي بيخلي كل حاجة في مكانها.",
      image_alt: "صورة تخرج كريم أحمد",
      degree: "بكالوريوس علوم الحاسب",
      year: "2025",
      institution: "<i class='fas fa-university' aria-hidden='true'></i> جامعة القاهرة",
      desc: "تخرجت بتركيز على هندسة البرمجيات وتفاعل الإنسان مع الحاسب — التوليفة المثالية لحد بيحب الكود والتصميم بنفس القدر.",
      text: "المعدل: 3.4 / 4.0 — مش وحشة لحد قضى نص وقته في نقاشات التصميم 😄",
      text2: "خارج القاعات، اشتغلت على مشاريع حقيقية وتعاونت مع زملاء واكتسبت مهارات ما كانش ممكن أتعلمها من كتاب. ده اللي بيفرق فعلاً.",
    },
    certs: {
      cert1: { name: "Google Professional Data Analytics", issuer: "Coursera / Google", date: "سبتمبر 2024" },
      cert2: { name: "Meta Digital Marketing Fundamentals", issuer: "Meta Ads Academy", date: "يناير 2025" },
      cert3: { name: "Microsoft Excel Expert (MOS)", issuer: "Microsoft", date: "مارس 2024" },
      certsLoadMoreBtn: "عرض المزيد",
    },
    contact: {
      title: "خلينا نتكلم",
      intro: "عندك مشروع في بالك؟ فكرة تعاون؟ أو عايز تقول هاي بس؟ صندوق الوارد مفتوح دايماً — وبرد فعلاً.",
      form: {
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك الإلكتروني",
        msgPlaceholder: "إيه اللي في بالك؟",
        submitBtn: "إرسال",
      },
      social: {
        1: "<i class='fa-brands fa-whatsapp' aria-hidden='true'></i> تواصل عبر واتساب",
        2: "<i class='fa-brands fa-linkedin' aria-hidden='true'></i> صفحة لينكد ان",
        3: "<i class='fa-brands fa-facebook' aria-hidden='true'></i> صفحة فيسبوك",
        4: "<i class='fa-brands fa-github' aria-hidden='true'></i> حساب GitHub",
      },
    },
    modals: {
      previewBtn: "معاينة مباشرة <i class='fa-solid fa-arrow-up-right-from-square'></i>",
      labels: {
        task: "<i class='fa-solid fa-list-check'></i> المهمة",
        Initiation: "<i class='fa-solid fa-play'></i> كيف بدأت",
        process: "<i class='fa-solid fa-gears'></i> آلية العمل",
        challenges: "<i class='fa-solid fa-triangle-exclamation'></i> التحديات",
        solution: "<i class='fa-solid fa-lightbulb'></i> الحل",
        result: "<i class='fa-solid fa-square-poll-vertical'></i> النتيجة",
        tools: "<i class='fa-solid fa-wrench'></i> الأدوات المستخدمة",
      },
      p1: {
        projectName: "إعادة تصميم متجر إلكتروني",
        imageTag: "UI / إعادة تصميم",
        task: "إعادة تصميم صفحات عرض المنتجات والدفع لتحسين معدل التحويل.",
        Initiation: "لاحظ العميل معدل تخلٍّ مرتفع عن عربة الشراء وأراد تجربة أحدث وأسرع.",
        process: "بدأت بتحليل المنافسين، رسمت رحلة المستخدم الحالية، حددت نقاط الاحتكاك، ثم أعدت بناء التدفق من الصفر في Figma.",
        challenges: {
          1: "الحفاظ على هوية العلامة التجارية مع تحديث المظهر",
          2: "الموازنة بين الثراء البصري والأداء",
          3: "إقناع أصحاب المصلحة باتجاه جديد وجريء",
        },
        solution: "أنشأت نظام تصميم بتسلسل هرمي واضح، قللت الخطوات غير الضرورية في تدفق الدفع، واستخدمت تفاعلات صغيرة لإرشاد المستخدم.",
        result: "التصميم الجديد حسّن الوضوح البصري بشكل كبير وقلل الحمل المعرفي — ممهداً الطريق لتحويل أسلس.",
        tool1: "Figma",
        tool2: "FigJam",
        tool3: "Maze (اختبار المستخدمين)",
      },
      p2: {
        projectName: "تطبيق إدارة المهام",
        imageTag: "UI / تصميم تطبيق",
        task: "تصميم تطبيق لإدارة المهام بسيط للأفراد وقوي بما يكفي للفرق الصغيرة.",
        Initiation: "مشروع جانبي شخصي تحول لقطعة في البورتفوليو بعد ردود فعل إيجابية من الزملاء.",
        process: "رسمت تخطيطات منخفضة الدقة، اختبرت مع 5 مستخدمين، كررت التصميم، ثم صقلته لشاشات عالية الدقة.",
        challenges: {
          1: "تجنب تضخم الميزات مع الحفاظ على المرونة",
          2: "جعل السحب والإفلات يبدو بديهياً على الموبايل",
          3: "التصميم المتسق للوضع الفاتح والداكن",
        },
        solution: "ركزت على تخطيط بطاقات نظيف مع نهج الإفصاح التدريجي — إخفاء التعقيد حتى يحتاجه المستخدم.",
        result: "واجهة نضيفة وعملية وجدها المستخدمون سهلة التعلم. ردود فعل ممتازة على الاتساق البصري والإحساس العام.",
        tool1: "Figma",
        tool2: "Principle (الأنيميشن)",
        tool3: "Notion (التخطيط)",
      },
    },
    footer: {
      copyright: "© {year} كريم أحمد. جميع الحقوق محفوظة.",
      credit: "تصميم وبرمجة",
      myName: "Mariam",
    },
  },
};

/* ============================================================
   2. i18n ENGINE
   ============================================================ */

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : null;
  }, obj);
}

function setCurrentYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function updateUiLabels(lang) {
  const dict = translations[lang];

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    const value = getNestedValue(dict, key);

    if (value === null || value === undefined) return;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = value;
      return;
    }

    if (el.tagName === "IMG") {
      el.alt = value;
      return;
    }

    if (key === "footer.copyright") {
      el.innerHTML = value.replace("{year}", `<span id="year"></span>`);
      setCurrentYear();
      return;
    }

    if (value.includes("<") && value.includes(">")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
}

/* ============================================================
   3. LANGUAGE TOGGLE
   ============================================================ */

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);

  const isRtl = lang === "ar";
  document.querySelectorAll('[data-aos="fade-right"], [data-aos="fade-left"]').forEach((el) => {
    el.setAttribute("data-aos", isRtl ? "fade-left" : "fade-right");
  });

  updateUiLabels(lang);

  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}

function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  setLanguage(currentLang === "en" ? "ar" : "en");
}

/* ============================================================
   4. CURSOR ANIMATION
   ============================================================ */

(function initCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");

  if (!cursor || !follower) return;

  let mx = 0, my = 0;
  let fx = 0, fy = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx - 9 + "px";
    cursor.style.top = my - 9 + "px";
  });

  function animFollower() {
    fx += (mx - fx - 20) * 0.12;
    fy += (my - fy - 20) * 0.12;
    follower.style.left = fx + "px";
    follower.style.top = fy + "px";
    requestAnimationFrame(animFollower);
  }

  animFollower();
})();

document.addEventListener("mousedown", (e) => {
  const pulse = document.createElement("div");
  pulse.className = "cursor-pulse";
  pulse.style.left = e.clientX - 10 + "px";
  pulse.style.top = e.clientY - 10 + "px";
  document.body.appendChild(pulse);
  pulse.addEventListener("animationend", () => pulse.remove());
});

/* ============================================================
   5. PROJECTS — LOAD MORE / SHOW LESS (DESKTOP ONLY)
   ============================================================ */

function initProjects() {
  const projectCards = document.querySelectorAll(".project-card-wrapper");
  const loadMoreBtn = document.getElementById("load-more-btn");
  const showLessBtn = document.getElementById("show-less-btn");
  const projectsSection = document.getElementById("projects");
  if (!projectCards.length) return;

  const isMobile = window.matchMedia("(max-width: 1024px)").matches;
  if (isMobile) {
    projectCards.forEach((card) => card.classList.remove("hidden-project"));
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
    if (showLessBtn) showLessBtn.style.display = "none";
    return;
  }

  const INITIAL_COUNT = 6;
  const STEP = 6;
  let currentlyShown = INITIAL_COUNT;
  const totalProjects = projectCards.length;

  projectCards.forEach((card, index) => {
    if (index >= currentlyShown) {
      card.classList.add("hidden-project");
    } else {
      card.classList.remove("hidden-project");
    }
  });

  function updateProjectButtons() {
    if (loadMoreBtn) loadMoreBtn.style.display = currentlyShown >= totalProjects ? "none" : "inline-block";
    if (showLessBtn) showLessBtn.style.display = currentlyShown > INITIAL_COUNT ? "inline-block" : "none";
  }
  updateProjectButtons();

  if (loadMoreBtn && !loadMoreBtn.dataset.listenerAdded) {
    loadMoreBtn.addEventListener("click", () => {
      const nextLimit = currentlyShown + STEP;
      projectCards.forEach((card, index) => {
        if (index >= currentlyShown && index < nextLimit) card.classList.remove("hidden-project");
      });
      currentlyShown = nextLimit;
      updateProjectButtons();
      if (typeof AOS !== "undefined") AOS.refresh();
    });
    loadMoreBtn.dataset.listenerAdded = "true";
  }

  if (showLessBtn && !showLessBtn.dataset.listenerAdded) {
    showLessBtn.addEventListener("click", () => {
      currentlyShown = INITIAL_COUNT;
      projectCards.forEach((card, index) => {
        if (index >= currentlyShown) card.classList.add("hidden-project");
      });
      updateProjectButtons();
      projectsSection?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        if (typeof AOS !== "undefined") AOS.refresh();
      }, 500);
    });
    showLessBtn.dataset.listenerAdded = "true";
  }
}

/* ============================================================
   6. PROJECT MODALS
   ============================================================ */

function initModals() {
  if (!window.modalPopstateAdded) {
    window.addEventListener("popstate", function () {
      const activeModal = document.querySelector(".project-modal.active");
      if (activeModal) {
        activeModal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
    window.modalPopstateAdded = true;
  }

  document.querySelectorAll(".project-card-btn").forEach((btn) => {
    if (btn.dataset.listenerAdded) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");
      if (!targetId) return;
      const modal = document.querySelector(targetId);
      if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";

        history.pushState({ modalOpen: true }, "");
      }
    });
    btn.dataset.listenerAdded = "true";
  });

  document.querySelectorAll(".close-modal, .modal-overlay").forEach((el) => {
    if (el.dataset.listenerAdded) return;
    el.addEventListener("click", function () {
      const modal = this.closest(".project-modal");
      if (modal && modal.classList.contains("active")) {
        if (history.state && history.state.modalOpen) {
          history.back();
        } else {
          modal.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      }
    });
    el.dataset.listenerAdded = "true";
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".project-modal.active");
      if (activeModal) {
        if (history.state && history.state.modalOpen) {
          history.back();
        } else {
          activeModal.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      }
    }
  });
}
/* ============================================================
   7. CONTACT FORM
   ============================================================ */

function initContactForm() {
  const form = document.getElementById("my-form");
  const status = document.getElementById("my-form-status");

  if (!form) return;

  const isArabic = () => document.documentElement.lang === "ar";

  form.addEventListener("focusin", () => {
    form.querySelectorAll(".custom-error-message").forEach((e) => e.remove());
    form.querySelectorAll("[required]").forEach((i) => i.classList.remove("shake"));
  });

  form.querySelectorAll("[required]").forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("shake");
      const error = input.parentElement.querySelector(".custom-error-message");
      if (error) error.remove();
    });
  });

  function validateForm() {
    let isValid = true;
    form.querySelectorAll("[required]").forEach((input) => {
      const existingError = input.parentElement.querySelector(".custom-error-message");
      if (existingError) existingError.remove();
      input.classList.remove("shake");

      if (!input.value.trim()) {
        isValid = false;
        input.classList.add("shake");
        const error = document.createElement("div");
        error.className = "custom-error-message";
        error.innerHTML = isArabic() ? "⚠️ هذا الحقل مطلوب." : "⚠️ Please fill out this field.";
        input.parentElement.appendChild(error);
      }
    });
    return isValid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!validateForm()) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = isArabic() ? "جاري الإرسال..." : "Sending...";

    const formcarryUrl = "https://formcarry.com/s/XXXXXXXXX";

    fetch(formcarryUrl, {
      method: "POST",
      body: new FormData(event.target),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        if (response.ok) {
          status.innerHTML = isArabic() ? "تم الإرسال بنجاح! 🎉" : "Message sent! 🎉";
          status.style.color = "#25d366";
          form.reset();
        } else {
          throw new Error("Server error");
        }
        setTimeout(() => { status.innerHTML = ""; }, 5000);
      })
      .catch(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        status.innerHTML = isArabic() ? "عذراً! حدث خطأ." : "Oops! Something went wrong.";
        status.style.color = "#ff4d4d";
        setTimeout(() => { status.innerHTML = ""; }, 5000);
      });
  });
}

/* ============================================================
   8. AOS — SCROLL ANIMATIONS
   ============================================================ */

function initAOS() {
  if (typeof AOS !== "undefined") {

    if (window.innerWidth < 1200) {
      document.querySelectorAll('[data-aos-mobile]').forEach((el) => {
        const mobileValue = el.getAttribute('data-aos-mobile');

        if (mobileValue === "false") {
          el.removeAttribute("data-aos");
        } else if (mobileValue) {
          el.setAttribute("data-aos", mobileValue);
        }
      });
    }

    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-out-quad",
      once: true,
    });
  }
}

/* ============================================================
   9. MOBILE CAROUSEL
   ============================================================ */

function initCarousel() {
  const mobileQuery = window.matchMedia('(max-width: 1024px)');
  const dotsWrapper = document.querySelector('.carousel-dots');

  if (!mobileQuery.matches) {
    if (dotsWrapper) {
      dotsWrapper.innerHTML = '';
      delete dotsWrapper.dataset.initialized;
    }
    return;
  }

  const container = document.querySelector('.projects-container');
  const cards = document.querySelectorAll('.project-card-wrapper');

  if (!container || !dotsWrapper || cards.length === 0) return;

  if (dotsWrapper.dataset.initialized) return;
  dotsWrapper.dataset.initialized = 'true';

  let currentIndex = 0;
  let autoScrollTimer;
  let isScrolling = false;

  dotsWrapper.innerHTML = '';

  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Project ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsWrapper.appendChild(dot);
  });

  function updateDots(index) {
    dotsWrapper.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  }

  function getCardScrollPosition(index) {
    const card = cards[index];
    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    return container.scrollLeft + (cardRect.left - containerRect.left);
  }

  function goTo(index) {
    currentIndex = index;
    isScrolling = true;

    const scrollPos = getCardScrollPosition(index);
    container.scrollTo({ left: scrollPos, behavior: 'smooth' });
    updateDots(index);
    resetAutoScroll();

    clearTimeout(window._scrollEndTimer);
    window._scrollEndTimer = setTimeout(() => {
      isScrolling = false;
    }, 600);
  }

  container.addEventListener('scroll', () => {
    if (isScrolling) return;

    let minDistance = Infinity;
    let activeIndex = 0;

    cards.forEach((card, index) => {
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const distance = Math.abs(cardRect.left - containerRect.left);

      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });

    if (activeIndex !== currentIndex) {
      currentIndex = activeIndex;
      updateDots(activeIndex);
    }
  });

  function next() {
    goTo(currentIndex < cards.length - 1 ? currentIndex + 1 : 0);
  }

  function startAutoScroll() {
    autoScrollTimer = setInterval(next, 3000);
  }

  function resetAutoScroll() {
    clearInterval(autoScrollTimer);
    startAutoScroll();
  }

  startAutoScroll();
}

/* ============================================================
   10. Certificates Responsive Modal
   ============================================================ */

function initCerts() {
  const certCards = document.querySelectorAll(".cert-card");
  const loadMoreBtn = document.getElementById("certs-load-more-btn");
  const isMobile = window.matchMedia("(max-width: 1024px)").matches;

  if (!window.certsPopstateAdded) {
    window.addEventListener("popstate", function () {
      const modal = document.getElementById("certs-modal");
      if (modal && modal.classList.contains("active")) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
    window.certsPopstateAdded = true;
  }

  if (!isMobile) {
    certCards.forEach((card) => card.classList.remove("hidden-cert"));
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
    return;
  }

  const INITIAL_COUNT = 2;

  certCards.forEach((card, index) => {
    if (index >= INITIAL_COUNT) {
      card.classList.add("hidden-cert");
    } else {
      card.classList.remove("hidden-cert");
    }
  });

  if (loadMoreBtn) {
    loadMoreBtn.style.display = certCards.length > INITIAL_COUNT ? "inline-block" : "none";
  }

  function createCertsModal() {
    if (document.getElementById("certs-modal")) return;

    const modal = document.createElement("div");
    modal.id = "certs-modal";

    const cardsHTML = Array.from(certCards)
      .map((card) => {
        const clone = card.cloneNode(true);
        clone.classList.remove("hidden-cert");
        return clone.outerHTML;
      })
      .join("");

    modal.innerHTML = `
      <div class="certs-modal-overlay-bg"></div>
      <div class="certs-modal-container">
        <button class="certs-modal-close" id="certs-modal-close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="certs-modal-content">
          <div class="certs-modal-grid">
            ${cardsHTML}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("certs-modal-close").addEventListener("click", closeCertsModal);
    modal.querySelector(".certs-modal-overlay-bg").addEventListener("click", closeCertsModal);
  }

  function openCertsModal() {
    createCertsModal();
    const modal = document.getElementById("certs-modal");
    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";

      history.pushState({ certsModalOpen: true }, "");
    }
  }

  function closeCertsModal() {
    const modal = document.getElementById("certs-modal");
    if (modal && modal.classList.contains("active")) {
      if (history.state && history.state.certsModalOpen) {
        history.back();
      } else {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    }
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCertsModal();
  });

  if (loadMoreBtn && !loadMoreBtn.dataset.listenerAdded) {
    loadMoreBtn.addEventListener("click", openCertsModal);
    loadMoreBtn.dataset.listenerAdded = "true";
  }
}

/* ============================================================
   11. Animated Statistics Counter
   ============================================================ */

const statsConfig = [
  { key: "hero.stat.num1", target: 6, suffix: "+" },
  { key: "hero.stat.num2", target: 3 },
  // { key: "hero.stat.num3", target: 28,  suffix: "+" },
];

const animateCounter = (el, target, suffix) => {
  let start = 0;
  const duration = 3000;
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    start = Math.round(eased * target);
    el.textContent = start + suffix;

    if (progress < 1) requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const config = statsConfig.find(s => el.dataset.key === s.key);
      if (config) animateCounter(el, config.target, config.suffix ?? "");
      observer.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statsConfig.forEach(({ key }) => {
  const el = document.querySelector(`[data-key="${key}"]`);
  if (el) observer.observe(el);
});

/* ============================================================
   12. INIT — DOMContentLoaded & Resize handle
   ============================================================ */

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";

  initProjects();
  initCarousel();
  initModals();
  initContactForm();
  initAOS();
  initCerts();
  setLanguage(savedLang);
  setCurrentYear();

  window.addEventListener('resize', debounce(() => {
    initProjects();
    initCarousel();
    initCerts();
  }, 250));
});
