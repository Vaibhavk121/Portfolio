// SEO utility functions for better search engine optimization

export const generateStructuredData = (type = 'Person') => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "Vaibhav Kumar",
    "url": "https://vaibhavk.site",
    "image": "https://vaibhavk.site/mylogo.png",
    "sameAs": [
      "https://github.com/Vaibhavk121",
      "https://www.linkedin.com/in/vaibhav-kumar-b366872a6/",
      "https://www.instagram.com/vaibhav.k111"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "React",
      "Node.js", 
      "JavaScript",
      "Python",
      "AI/ML",
      "Full Stack Development",
      "Web Development",
      "Software Engineering"
    ],
    "email": "vaibhavkumar2k24@gmail.com",
    "description": "Passionate Full Stack Developer and Software Engineer specializing in React, Node.js, AI/ML, and modern web technologies."
  };

  return JSON.stringify(baseData);
};

export const updateMetaTags = (title, description, keywords, image = '/mylogo.png') => {
  // Update document title
  document.title = title;
  
  // Update or create meta tags
  const updateOrCreateMeta = (name, content, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector);
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  };

  // Basic meta tags
  updateOrCreateMeta('description', description);
  updateOrCreateMeta('keywords', keywords);
  
  // Open Graph tags
  updateOrCreateMeta('og:title', title, true);
  updateOrCreateMeta('og:description', description, true);
  updateOrCreateMeta('og:image', `https://vaibhavk.site${image}`, true);
  
  // Twitter tags
  updateOrCreateMeta('twitter:title', title, true);
  updateOrCreateMeta('twitter:description', description, true);
  updateOrCreateMeta('twitter:image', `https://vaibhavk.site${image}`, true);
};

export const addStructuredDataToHead = (data) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = data;
  document.head.appendChild(script);
};

// SEO-friendly section data
export const seoSections = {
  home: {
    title: "Vaibhav Kumar - Full Stack Developer & Software Engineer Portfolio",
    description: "Welcome to Vaibhav Kumar's portfolio. Passionate Full Stack Developer specializing in React, Node.js, AI/ML, and modern web technologies.",
    keywords: "Vaibhav Kumar, Full Stack Developer, Software Engineer, React Developer, Portfolio, Home"
  },
  about: {
    title: "About Vaibhav Kumar - Full Stack Developer & Software Engineer",
    description: "Learn about Vaibhav Kumar's journey as a Full Stack Developer, his passion for technology, and expertise in React, Node.js, and AI/ML development.",
    keywords: "Vaibhav Kumar About, Full Stack Developer Background, Software Engineer Experience, React Node.js Developer"
  },
  skills: {
    title: "Vaibhav Kumar's Technical Skills - React, Node.js, AI/ML & More",
    description: "Explore Vaibhav Kumar's comprehensive technical skills including React, Node.js, JavaScript, Python, AI/ML, and modern web development technologies.",
    keywords: "Vaibhav Kumar Skills, React Developer Skills, Node.js Skills, AI ML Skills, JavaScript Python Developer"
  },
  projects: {
    title: "Vaibhav Kumar's Projects - DDOS.AI, Fearlessher & More",
    description: "Discover Vaibhav Kumar's innovative projects including DDOS.AI (AI-based DDoS Detection), Fearlessher (Women Safety App), and other cutting-edge applications.",
    keywords: "Vaibhav Kumar Projects, DDOS.AI, Fearlessher, React Projects, AI ML Projects, Full Stack Projects"
  },
  blog: {
    title: "Vaibhav Kumar's Blog - Tech Insights & Hackathon Experiences",
    description: "Read Vaibhav Kumar's blog posts about technology, hackathon experiences, and insights into full stack development and AI/ML.",
    keywords: "Vaibhav Kumar Blog, Tech Blog, Hackathon Experience, Full Stack Development Blog, AI ML Insights"
  },
  contact: {
    title: "Contact Vaibhav Kumar - Full Stack Developer for Hire",
    description: "Get in touch with Vaibhav Kumar for full stack development projects, collaborations, or job opportunities. Available for React, Node.js, and AI/ML projects.",
    keywords: "Contact Vaibhav Kumar, Hire Full Stack Developer, React Developer for Hire, Node.js Developer Contact"
  }
};

export const preloadCriticalResources = () => {
  const criticalImages = [
    '/mylogo.png',
    '/me/Hi.png',
    '/me/profile.png',
    '/me/coding.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};