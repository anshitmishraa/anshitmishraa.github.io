/**
 * ===================================================================
 * ANSHIT MISHRA - PORTFOLIO INTERACTION & RENDERING ENGINE
 * Clean, modular, extensible architecture
 * ===================================================================
 */

(function () {
  'use strict';

  // --- Safe Data Retrieval ---
  const data = window.portfolioData || {};

  // --- Theme Controller (Dark / Light Mode) ---
  const initTheme = () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check saved theme or system preference (Default to dark)
    const savedTheme = localStorage.getItem('portfolio-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default dark
    
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        updateThemeIcon(newTheme);
      });
    }

    function updateThemeIcon(theme) {
      if (!themeIcon) return;
      if (theme === 'light') {
        themeIcon.className = 'bx bx-moon';
        themeToggleBtn && themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
      } else {
        themeIcon.className = 'bx bx-sun';
        themeToggleBtn && themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
      }
    }
  };

  // --- Navigation & Mobile Menu ---
  const initNavigation = () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('show');
        const icon = navToggle.querySelector('i');
        if (icon) {
          icon.className = navMenu.classList.contains('show') ? 'bx bx-x' : 'bx bx-menu';
        }
      });

      // Close menu on click outside
      document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
          navMenu.classList.remove('show');
          const icon = navToggle.querySelector('i');
          if (icon) icon.className = 'bx bx-menu';
        }
      });
    }

    // Close menu when clicking nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu) {
          navMenu.classList.remove('show');
          const icon = navToggle?.querySelector('i');
          if (icon) icon.className = 'bx bx-menu';
        }
      });
    });

    // ScrollSpy: Highlight active section in navigation
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });

      // Show / hide back to top button
      const backToTop = document.getElementById('back-to-top');
      if (backToTop) {
        if (scrollY > 400) {
          backToTop.style.display = 'inline-flex';
        } else {
          backToTop.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Run on init
  };

  // --- Typewriter Effect ---
  const initTypewriter = () => {
    const typewriterElem = document.getElementById('hero-typewriter');
    if (!typewriterElem) return;

    const roles = data.personal?.typewriterRoles || [
      "Senior Software Engineer",
      "Distributed Systems Engineer",
      "FinTech Builder"
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function tick() {
      const currentRole = roles[roleIdx];

      if (isDeleting) {
        typewriterElem.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typingSpeed = 45;
      } else {
        typewriterElem.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typingSpeed = 85;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        // Pause at full word
        isDeleting = true;
        typingSpeed = 1600;
      } else if (isDeleting && charIdx === 0) {
        // Switch to next word
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 350;
      }

      setTimeout(tick, typingSpeed);
    }

    tick();
  };

  // --- Dynamic Content Rendering ---
  const renderContent = () => {
    // 1. Personal & Hero
    if (data.personal) {
      const p = data.personal;
      
      const statusPill = document.getElementById('hero-status-pill');
      if (statusPill && p.statusBadge) {
        statusPill.innerHTML = `<span class="status-dot"></span> ${p.statusBadge}`;
      }

      const heroTagline = document.getElementById('hero-tagline');
      if (heroTagline && p.tagline) {
        heroTagline.textContent = p.tagline;
      }

      const resumeBtns = document.querySelectorAll('.resume-link-btn');
      resumeBtns.forEach(btn => {
        if (p.resumeUrl) btn.setAttribute('href', p.resumeUrl);
      });

      const heroAvatar = document.getElementById('hero-avatar-img');
      if (heroAvatar && p.avatar) {
        heroAvatar.setAttribute('src', p.avatar);
      }

      const aboutAvatar = document.getElementById('about-avatar-img');
      if (aboutAvatar && p.aboutAvatar) {
        aboutAvatar.setAttribute('src', p.aboutAvatar);
      }
    }

    // 2. Hero Socials
    const heroSocialsContainer = document.getElementById('hero-socials');
    if (heroSocialsContainer && data.socials) {
      heroSocialsContainer.innerHTML = data.socials
        .map(
          (s) => `
          <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="hero-social-link" title="${s.name}" aria-label="${s.name}">
            <i class="${s.icon}"></i>
          </a>`
        )
        .join('');
    }

    // 3. Stats Bar
    const statsContainer = document.getElementById('stats-grid');
    if (statsContainer && data.stats) {
      statsContainer.innerHTML = data.stats
        .map(
          (stat) => `
          <div class="stat-item">
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
          </div>`
        )
        .join('');
    }

    // 4. About Section
    const aboutParagraphs = document.getElementById('about-paragraphs');
    if (aboutParagraphs && data.about?.paragraphs) {
      // Parse markdown-like bold text: **text** -> <strong>text</strong>
      aboutParagraphs.innerHTML = data.about.paragraphs
        .map((p) => {
          const formatted = p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          return `<p>${formatted}</p>`;
        })
        .join('');
    }

    const quickfactsGrid = document.getElementById('about-quickfacts');
    if (quickfactsGrid && data.about?.quickFacts) {
      quickfactsGrid.innerHTML = data.about.quickFacts
        .map(
          (qf) => `
          <div class="quickfact-card">
            <div class="quickfact-label">${qf.label}</div>
            <div class="quickfact-value">${qf.value}</div>
          </div>`
        )
        .join('');
    }

    // 5. Work Experience Timeline
    const experienceTimeline = document.getElementById('experience-timeline');
    if (experienceTimeline && data.experience) {
      experienceTimeline.innerHTML = data.experience
        .map((job) => {
          const highlightsList = (job.highlights || [])
            .map((hl) => {
              const formatted = hl.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return `<li>${formatted}</li>`;
            })
            .join('');

          const techTags = (job.techStack || [])
            .map((t) => `<span class="tech-tag">${t}</span>`)
            .join('');

          const companyDisplay = job.companyUrl
            ? `<a href="${job.companyUrl}" target="_blank" rel="noopener noreferrer" class="company-link">${job.company} <i class='bx bx-link-external' style='font-size:0.8em'></i></a>`
            : job.company;

          return `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="experience-card">
              <div class="experience-header">
                <div class="experience-title-group">
                  <h3>
                    ${job.role} <span style="color:var(--text-muted);font-weight:400">@</span> <span class="company-name">${companyDisplay}</span>
                    <span class="type-pill">${job.type}</span>
                  </h3>
                </div>
                <div class="experience-meta">
                  <div class="experience-period"><i class='bx bx-calendar'></i> ${job.period}</div>
                  ${job.duration ? `<div class="experience-duration">${job.duration}</div>` : ''}
                  <div class="experience-location"><i class='bx bx-map-pin'></i> ${job.location}</div>
                </div>
              </div>
              <p class="experience-description">${job.description}</p>
              ${highlightsList ? `<ul class="experience-highlights">${highlightsList}</ul>` : ''}
              ${techTags ? `<div class="tech-tags-list">${techTags}</div>` : ''}
            </div>
          </div>`;
        })
        .join('');
    }

    // 6. Skills Grid
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid && data.skillCategories) {
      skillsGrid.innerHTML = data.skillCategories
        .map((cat) => {
          const chips = cat.skills
            .map((s) => `<span class="skill-chip">${s}</span>`)
            .join('');

          return `
          <div class="skill-category-card">
            <div class="skill-category-header">
              <div class="skill-category-icon">
                <i class="${cat.icon}"></i>
              </div>
              <div>
                <h3 class="skill-category-title">${cat.category}</h3>
              </div>
            </div>
            <p class="skill-category-desc">${cat.description}</p>
            <div class="skill-chips-wrap">
              ${chips}
            </div>
          </div>`;
        })
        .join('');
    }

    // 7. Projects Grid
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid && data.projects) {
      projectsGrid.innerHTML = data.projects
        .map((proj) => {
          const highlights = (proj.highlights || [])
            .map((h) => `<li>${h}</li>`)
            .join('');

          const tags = (proj.tags || [])
            .map((t) => `<span class="tech-tag">${t}</span>`)
            .join('');

          return `
          <div class="project-card">
            <div>
              <div class="project-top">
                <i class='bx bx-folder project-folder-icon'></i>
                <span class="project-badge">${proj.badge}</span>
              </div>
              <h3 class="project-title">${proj.title}</h3>
              <p class="project-desc">${proj.description}</p>
              ${highlights ? `<ul class="project-highlights">${highlights}</ul>` : ''}
            </div>
            <div class="project-footer">
              <div class="tech-tags-list">${tags}</div>
              <div class="project-links">
                ${
                  proj.githubUrl
                    ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                        <i class='bx bxl-github'></i> Code Repository
                      </a>`
                    : ''
                }
                ${
                  proj.liveDemoUrl
                    ? `<a href="${proj.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" style="color:var(--accent-secondary)">
                        <i class='bx bx-link-external'></i> Live Preview
                      </a>`
                    : ''
                }
              </div>
            </div>
          </div>`;
        })
        .join('');
    }

    // 8. Achievements
    const achievementsGrid = document.getElementById('achievements-grid');
    if (achievementsGrid && data.achievements) {
      achievementsGrid.innerHTML = data.achievements
        .map(
          (ach) => `
          <div class="achievement-card">
            <div class="achievement-header">
              <div class="achievement-icon">
                <i class="${ach.icon}"></i>
              </div>
              <span class="achievement-badge">${ach.badge}</span>
            </div>
            <h4 class="achievement-title">${ach.title}</h4>
            <p class="achievement-desc">${ach.description}</p>
          </div>`
        )
        .join('');
    }

    // 9. Education & Certifications
    const educationContainer = document.getElementById('education-list');
    if (educationContainer && data.education) {
      educationContainer.innerHTML = data.education
        .map(
          (edu) => `
          <div class="credential-item">
            <h4>${edu.degree}</h4>
            <div class="institution">${edu.institution} (${edu.period})</div>
            <div class="details">${edu.description}</div>
          </div>`
        )
        .join('');
    }

    const certsContainer = document.getElementById('certs-list');
    if (certsContainer && data.certifications) {
      certsContainer.innerHTML = data.certifications
        .map(
          (cert) => `
          <div class="credential-item">
            <h4>${cert.title} <span class="type-pill" style="margin-left:0.4rem;font-size:0.7rem">${cert.badge}</span></h4>
            <div class="institution">${cert.issuer}</div>
            <div class="details">${cert.description}</div>
          </div>`
        )
        .join('');
    }

    // 10. Contact Section
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyEmailText = document.getElementById('copy-email-text');
    const copyTooltip = document.getElementById('copy-tooltip');
    const sendMailBtn = document.getElementById('send-mail-btn');

    const email = data.personal?.email || 'anshitmishraa@gmail.com';
    if (copyEmailText) copyEmailText.textContent = email;
    if (sendMailBtn) sendMailBtn.setAttribute('href', `mailto:${email}`);

    if (copyEmailBtn && copyTooltip) {
      copyEmailBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(email);
          copyTooltip.textContent = 'Copied to clipboard!';
          copyTooltip.classList.add('show');
          setTimeout(() => {
            copyTooltip.classList.remove('show');
            copyTooltip.textContent = 'Click to copy';
          }, 2500);
        } catch (err) {
          // Fallback if clipboard API is blocked
          copyTooltip.textContent = email;
          copyTooltip.classList.add('show');
          setTimeout(() => copyTooltip.classList.remove('show'), 3000);
        }
      });
    }

    const contactSocialGrid = document.getElementById('contact-social-grid');
    if (contactSocialGrid && data.socials) {
      contactSocialGrid.innerHTML = data.socials
        .map(
          (s) => `
          <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="contact-social-card">
            <i class="${s.icon}"></i> ${s.name} (${s.display})
          </a>`
        )
        .join('');
    }

    // Dynamic current year in footer
    const yearElem = document.getElementById('current-year');
    if (yearElem) {
      yearElem.textContent = new Date().getFullYear();
    }
  };

  // --- ScrollReveal Animations ---
  const initScrollAnimations = () => {
    if (typeof ScrollReveal !== 'undefined') {
      const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 900,
        delay: 100,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        reset: false
      });

      sr.reveal('.hero-content', { origin: 'left', delay: 100 });
      sr.reveal('.hero-visual', { origin: 'right', delay: 200 });
      sr.reveal('.stats-bar', { delay: 250 });
      sr.reveal('.about-image-card', { origin: 'left' });
      sr.reveal('.about-content', { origin: 'right' });
      sr.reveal('.timeline-item', { interval: 150 });
      sr.reveal('.project-card', { interval: 120 });
      sr.reveal('.skill-category-card', { interval: 100 });
      sr.reveal('.achievement-card', { interval: 100 });
      sr.reveal('.credential-block', { interval: 150 });
      sr.reveal('.contact-card', { delay: 150 });
    }
  };

  // --- Back to Top Smooth Scroll ---
  const initBackToTop = () => {
    const btn = document.getElementById('back-to-top');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  // --- Initialize Everything On DOM Ready ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderContent();
    initTypewriter();
    initNavigation();
    initBackToTop();
    initScrollAnimations();
  });
})();
