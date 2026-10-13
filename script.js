/**
 * ===================================================================
 * PORTFOLIO CLIENT-SIDE INTERACTION SCRIPT
 * Client: Ashin K P (Aspiring DevOps & Cloud Engineer)
 * Technology: Pure Vanilla JavaScript (ES6+) - Zero Frameworks
 * ===================================================================
 */

(function () {
  'use strict';

  // -----------------------------------------------------------------
  // 1. Data Store: Project Detailed Profiles for Modal
  // -----------------------------------------------------------------
  const projectDatabase = {
    'proj-aws': {
      title: 'AWS Resource Monitoring Script',
      category: 'Personal Learning Project // DevOps & Cloud',
      tag: 'Learning Project',
      tech: ['AWS', 'AWS CLI', 'Bash', 'Linux', 'JSON'],
      summary: 'A Bash scripting project using AWS CLI to retrieve information about essential AWS resources.',
      description: `
        <p>This hands-on infrastructure scripting project was designed to automate the routine auditing of core AWS cloud assets from the command line. Instead of manually inspecting the AWS Management Console, the Bash script interfaces with the AWS CLI to query, format, and report active resources.</p>
        
        <h4 style="margin: 1rem 0 0.5rem; color: #fff;">Key Implementation Highlights:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
          <li><strong>EC2 Instance Discovery:</strong> Query instance IDs, states (running/stopped), instance types, and public/private IP addresses using <code>aws ec2 describe-instances</code>.</li>
          <li><strong>S3 Storage Auditing:</strong> Enumerate all configured buckets and test availability with <code>aws s3 ls</code>.</li>
          <li><strong>IAM Security Check:</strong> Fetch identity list and active user accounts using <code>aws iam list-users</code> to verify credential hygiene.</li>
          <li><strong>Serverless Visibility:</strong> Retrieve deployed AWS Lambda function names, runtimes, and memory allocations via <code>aws lambda list-functions</code>.</li>
          <li><strong>CLI Automation Practice:</strong> Exercises shell pipe operations, jq JSON filtering, exit code handling, and output formatting.</li>
        </ul>

        <div style="background: rgba(0, 242, 254, 0.08); border-left: 3px solid #00f2fe; padding: 0.75rem 1rem; border-radius: 4px; font-size: 0.88rem;">
          <strong>Learning Objective:</strong> Gaining deep programmatic familiarity with AWS CLI syntax, credentials profile configuration, and automating operational checks before deploying large architectures.
        </div>
      `,
      links: [
        { label: 'GitHub Profile / Repos', url: 'https://github.com/Ashinkp', icon: 'fa-brands fa-github' }
      ]
    },
    'proj-linux': {
      title: 'Linux Server File Management & Administration',
      category: 'Personal Learning Project // System Administration',
      tag: 'Hands-on Lab',
      tech: ['Linux', 'Ubuntu', 'Bash', 'Cron', 'File Systems'],
      summary: 'A Linux administration practice project focused on organizing server files, managing permissions, and creating backups.',
      description: `
        <p>A rigorous command-line practice project designed to solidify essential Linux operating system skills required for production server management, containerization, and cloud instance operations.</p>
        
        <h4 style="margin: 1rem 0 0.5rem; color: #fff;">Core Competencies Practiced:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
          <li><strong>Hierarchical Directory Organization:</strong> Structured file management across standard FHS directories (<code>/var</code>, <code>/etc</code>, <code>/opt</code>, <code>/home</code>).</li>
          <li><strong>File Permissions & Ownership:</strong> Configured granular read/write/execute rights using octal and symbolic <code>chmod</code>, user/group modification with <code>chown</code>, and security umasks.</li>
          <li><strong>Automated Backup Archival:</strong> Authored Bash utility scripts utilizing <code>tar</code>, <code>gzip</code>, and timestamping to preserve essential system state.</li>
          <li><strong>Symbolic & Hard Links:</strong> Established symbolic links to streamline application paths and configuration sharing.</li>
          <li><strong>Scheduled Automation:</strong> Implemented Linux <code>cron</code> tables to execute backup routines and disk-space checks on defined intervals.</li>
        </ul>

        <div style="background: rgba(245, 158, 11, 0.08); border-left: 3px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 4px; font-size: 0.88rem;">
          <strong>Significance for DevOps:</strong> Linux is the backbone of cloud compute instances and containers. Mastery of file descriptors, permissions, and shell utilities is non-negotiable for real-world DevOps engineers.
        </div>
      `,
      links: [
        { label: 'GitHub Profile', url: 'https://github.com/Ashinkp', icon: 'fa-brands fa-github' }
      ]
    },
    'proj-git': {
      title: 'Git and GitHub Workflow Practice',
      category: 'Personal Learning Project // Version Control',
      tag: 'Hands-on Practice',
      tech: ['Git', 'GitHub', 'Linux', 'Branching', 'CLI'],
      summary: 'A hands-on project demonstrating Git version control and repository management.',
      description: `
        <p>A structured personal project reinforcing best practices in distributed version control, atomic commits, branch isolation, and multi-remote collaboration using the Git command-line interface.</p>
        
        <h4 style="margin: 1rem 0 0.5rem; color: #fff;">Workflows &amp; Operations:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
          <li><strong>Repository Lifecycle:</strong> Initializing repositories (<code>git init</code>), cloning remotes (<code>git clone</code>), and configuring upstream remotes.</li>
          <li><strong>Staging & Commit Hygiene:</strong> Precision staging with <code>git add</code>, inspecting diffs with <code>git diff</code>, and authoring descriptive, conventional commit messages.</li>
          <li><strong>Branch Management:</strong> Creating feature branches, switching context, merging updates, and inspecting history with graphical <code>git log --oneline --graph</code>.</li>
          <li><strong>Conflict Resolution:</strong> Safely resolving merge divergences and understanding local vs remote HEAD states.</li>
          <li><strong>GitHub Integration:</strong> Managing SSH authentication keys, creating remote repositories, and synchronizing codebases cleanly.</li>
        </ul>
      `,
      links: [
        { label: 'View GitHub Profile', url: 'https://github.com/Ashinkp', icon: 'fa-brands fa-github' }
      ]
    },
    'proj-smartconnect': {
      title: 'Smart Connect – Financial API Integration',
      category: 'Professional Experience // Distinct Infotech Solutions',
      tag: 'Enterprise Project',
      tech: ['Python', 'Django', 'REST APIs', 'Postman', 'JSON', 'FinTech'],
      summary: 'Production financial integration system involving Python, Django, financial API integration, backend development, and integration testing.',
      description: `
        <p>As part of my professional responsibilities at <strong>Distinct Infotech Solutions</strong>, Smart Connect involved configuring, integrating, and maintaining financial and banking API pipelines with high requirements for data integrity and reliability.</p>
        
        <h4 style="margin: 1rem 0 0.5rem; color: #fff;">Key Responsibilities:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
          <li><strong>API Integration:</strong> Interfaced with third-party banking and money-transfer endpoints, adhering to strict request authentication and encryption standards.</li>
          <li><strong>Backend Development:</strong> Developed and maintained backend services, data parsers, and validation layers using Python and Django.</li>
          <li><strong>Payload Validation:</strong> Designed request/response test suites in Postman to test financial transaction payloads against edge cases and timeout conditions.</li>
          <li><strong>Troubleshooting & Support:</strong> Diagnosed API connectivity anomalies, HTTP status code errors, and partner schema updates.</li>
        </ul>

        <div style="background: rgba(37, 99, 235, 0.1); border-left: 3px solid #3b82f6; padding: 0.75rem 1rem; border-radius: 4px; font-size: 0.88rem;">
          <strong>Confidentiality Note:</strong> Source code and direct banking endpoints are proprietary to Distinct Infotech Solutions and client partners. Architecture methodologies and technical integration skills are represented transparently.
        </div>
      `,
      links: [
        { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/ashin-k-p-a9692a250/', icon: 'fa-brands fa-linkedin-in' }
      ]
    },
    'proj-fusion': {
      title: 'Fusion EFZEE – API Configuration Framework',
      category: 'Professional Experience // Distinct Infotech Solutions',
      tag: 'Enterprise Project',
      tech: ['API Configuration', 'Banking Integrations', 'SoapUI', 'Postman', 'JSON', 'XML'],
      summary: 'Professional API configuration framework facilitating third-party financial API configuration, banking integrations, and financial data exchange.',
      description: `
        <p>Fusion EFZEE represents an enterprise configuration framework facilitating seamless data exchange between core applications and diverse banking institution APIs.</p>
        
        <h4 style="margin: 1rem 0 0.5rem; color: #fff;">Key Responsibilities:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
          <li><strong>Configuration Engineering:</strong> Configured parameters, authentication credentials, webhooks, and endpoint URLs for diverse banking partners.</li>
          <li><strong>Protocol & Format Handling:</strong> Reconciled heterogeneous payload formats across REST/JSON and SOAP/XML structures.</li>
          <li><strong>Integration Testing:</strong> Executed API requests using Postman and SoapUI to verify payload parsing, status assertions, and error-handling responses.</li>
          <li><strong>Production Reliability:</strong> Monitored response latencies and assisted with integration troubleshooting during service updates.</li>
        </ul>

        <div style="background: rgba(37, 99, 235, 0.1); border-left: 3px solid #3b82f6; padding: 0.75rem 1rem; border-radius: 4px; font-size: 0.88rem;">
          <strong>Confidentiality Note:</strong> Proprietary enterprise banking solution at Distinct Infotech Solutions. Detailed architectural responsibilities available during professional discussions.
        </div>
      `,
      links: [
        { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/ashin-k-p-a9692a250/', icon: 'fa-brands fa-linkedin-in' }
      ]
    },
    'proj-class': {
      title: 'Online Class Website (Academic Capstone)',
      category: 'Academic Project // BCA Degree',
      tag: 'Academic Capstone',
      tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      summary: 'An academic web application developed using PHP, HTML, CSS, and MySQL, featuring dedicated modules for administrators, teachers, and students.',
      description: `
        <p>A full-stack academic web application designed to facilitate remote learning, course content delivery, and student record keeping during my Bachelor of Computer Applications degree program.</p>
        
        <h4 style="margin: 1rem 0 0.5rem; color: #fff;">Module Features:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
          <li><strong>Administrator Module:</strong> User management, teacher/student account creation, course department assignment, and system settings.</li>
          <li><strong>Teacher Module:</strong> Class syllabus publishing, lecture notes and assignment uploads, attendance tracking, and grading interfaces.</li>
          <li><strong>Student Module:</strong> Course enrollment, downloadable learning resources, assignment submission, and grade viewing.</li>
          <li><strong>Database Schema:</strong> Relational MySQL tables with foreign key constraints, parameterized queries, and session management.</li>
          <li><strong>Interface:</strong> Clean, responsive UI built with pure HTML5, CSS3, and JavaScript.</li>
        </ul>
      `,
      links: [
        { label: 'GitHub Profile', url: 'https://github.com/Ashinkp', icon: 'fa-brands fa-github' }
      ]
    }
  };

  // -----------------------------------------------------------------
  // 2. Mobile Navigation Toggle & Smooth Link Clicks
  // -----------------------------------------------------------------
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
      document.body.classList.toggle('nav-open');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('nav-open');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  }

  // Header background blur intensification on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // -----------------------------------------------------------------
  // 3. Active Navigation Link Highlighting (Scroll Spy)
  // -----------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(function (current) {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector('.nav-link[href*="' + sectionId + '"]');

      if (targetLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(function (link) { link.classList.remove('active'); });
          targetLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // -----------------------------------------------------------------
  // 4. Hero Subtitle Typewriter Effect
  // -----------------------------------------------------------------
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const phrases = [
      'Aspiring DevOps & Cloud Engineer',
      'API Configuration & Integration Specialist',
      'Linux Administrator & Bash Scripter',
      'AWS Cloud Computing Explorer',
      'Python Developer & Problem Solver'
    ];

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = false;
    let typingSpeed = 90;

    function handleTypewriter() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 85;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end of sentence
        typingSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 450;
      }

      setTimeout(handleTypewriter, typingSpeed);
    }

    // Start typing cycle after initial greeting delay
    setTimeout(handleTypewriter, 2000);
  }

  // -----------------------------------------------------------------
  // 5. Terminal Tabs Switcher in Hero Visual
  // -----------------------------------------------------------------
  const terminalTabs = document.querySelectorAll('.terminal-tab');
  const tabPanels = document.querySelectorAll('.tab-panel');

  terminalTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const targetTab = this.getAttribute('data-tab');

      terminalTabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(function (p) {
        p.classList.remove('active');
      });

      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      const activePanel = document.getElementById('tab-' + targetTab);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });

  // Simulated node ping latency variation in tab 1
  const pingIndicator = document.getElementById('node-ping-indicator');
  if (pingIndicator) {
    setInterval(function () {
      const pings = ['12ms', '14ms', '18ms', '11ms', '16ms'];
      const randomPing = pings[Math.floor(Math.random() * pings.length)];
      pingIndicator.innerHTML = '<span class="ping-dot"></span> Latency: <strong>' + randomPing + '</strong>';
    }, 4500);
  }

  // -----------------------------------------------------------------
  // 6. Project Category Filtering
  // -----------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filterValue = this.getAttribute('data-filter');

      filterButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      projectCards.forEach(function (card) {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(function () {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(function () {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // -----------------------------------------------------------------
  // 7. Project Details Modal Dialog
  // -----------------------------------------------------------------
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalFooter = document.getElementById('modal-footer');
  const detailButtons = document.querySelectorAll('.view-details-btn');

  function openProjectModal(projectId) {
    const data = projectDatabase[projectId];
    if (!data || !projectModal) return;

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.description;

    let footerHtml = '';
    data.links.forEach(function (link) {
      footerHtml += `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="${link.icon}" aria-hidden="true"></i>
          <span>${link.label}</span>
        </a>
      `;
    });
    footerHtml += `<button class="btn btn-ghost btn-sm" id="modal-cancel-btn">Close</button>`;
    modalFooter.innerHTML = footerHtml;

    const cancelBtn = document.getElementById('modal-cancel-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', closeProjectModal);
    }

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  detailButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const projId = this.getAttribute('data-project');
      openProjectModal(projId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', function (e) {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // -----------------------------------------------------------------
  // 8. Resume Download Button Handling & Notice Modal
  // -----------------------------------------------------------------
  const resumeButtons = document.querySelectorAll('.resume-btn');
  const resumeModal = document.getElementById('resume-modal');
  const resumeModalClose = document.getElementById('resume-modal-close');
  const resumeModalOk = document.getElementById('resume-modal-ok');

  function openResumeNoticeModal() {
    if (resumeModal) {
      resumeModal.classList.add('open');
      resumeModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResumeNoticeModal() {
    if (resumeModal) {
      resumeModal.classList.remove('open');
      resumeModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (resumeModalClose) resumeModalClose.addEventListener('click', closeResumeNoticeModal);
  if (resumeModalOk) resumeModalOk.addEventListener('click', closeResumeNoticeModal);
  if (resumeModal) {
    resumeModal.addEventListener('click', function (e) {
      if (e.target === resumeModal) {
        closeResumeNoticeModal();
      }
    });
  }

  // Check if file exists via HEAD request when clicked
  resumeButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Perform a check to ensure user gets a polite fallback if PDF hasn't been placed yet
      fetch(href, { method: 'HEAD' })
        .then(function (res) {
          if (!res.ok) {
            e.preventDefault();
            openResumeNoticeModal();
          }
          // If 200 OK, default browser download will proceed seamlessly!
        })
        .catch(function () {
          // If running off local file:/// protocol or fetch fails, let default anchor proceed,
          // or fallback gracefully if error event occurs.
        });
    });
  });

  // Global Escape key listener for modals
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResumeNoticeModal();
    }
  });

  // -----------------------------------------------------------------
  // 9. Copy Email to Clipboard & Toast Notifications
  // -----------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-text');
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, icon) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${icon || 'fa-solid fa-check text-cyan'}" aria-hidden="true"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(function () { toast.classList.add('show'); }, 10);

    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3200);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function () {
      const email = 'ashinkp33@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () {
          if (copyText) copyText.textContent = 'Copied!';
          showToast('Email copied to clipboard: ashinkp33@gmail.com', 'fa-solid fa-clipboard-check text-cyan');
          setTimeout(function () {
            if (copyText) copyText.textContent = 'Copy';
          }, 2500);
        }).catch(function () {
          window.location.href = 'mailto:' + email;
        });
      } else {
        window.location.href = 'mailto:' + email;
      }
    });
  }

  // -----------------------------------------------------------------
  // 10. Client-Side Contact Form (Clean Mailto Composer)
  // -----------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const formStatus = document.getElementById('form-status');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  function clearErrors() {
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (subjectError) subjectError.textContent = '';
    if (messageError) messageError.textContent = '';
    if (formStatus) {
      formStatus.className = 'form-status-alert';
      formStatus.textContent = '';
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      let isValid = true;
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      // Validate Name
      if (!nameVal) {
        if (nameError) nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal) {
        if (emailError) emailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!emailRegex.test(emailVal)) {
        if (emailError) emailError.textContent = 'Please provide a valid email format.';
        isValid = false;
      }

      // Validate Subject
      if (!subjectVal) {
        if (subjectError) subjectError.textContent = 'Please provide a subject.';
        isValid = false;
      }

      // Validate Message
      if (!messageVal) {
        if (messageError) messageError.textContent = 'Please enter your message.';
        isValid = false;
      } else if (messageVal.length < 10) {
        if (messageError) messageError.textContent = 'Message should be at least 10 characters.';
        isValid = false;
      }

      if (!isValid) return;

      // Construct honest mailto composition link
      const encodedSubject = encodeURIComponent(`[Portfolio Contact] ${subjectVal} - from ${nameVal}`);
      const encodedBody = encodeURIComponent(
        `Hello Ashin,\n\nName: ${nameVal}\nEmail: ${emailVal}\nSubject: ${subjectVal}\n\nMessage:\n${messageVal}\n\n---\nSent via portfolio contact form`
      );

      const mailtoUrl = `mailto:ashinkp33@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

      // Open email client safely
      window.location.href = mailtoUrl;

      // Display UI confirmation
      if (formStatus) {
        formStatus.className = 'form-status-alert success';
        formStatus.innerHTML = `
          <strong>Draft created!</strong> Your default email client has been opened to send this message to <code>ashinkp33@gmail.com</code>.
        `;
      }

      showToast('Opening your email client to send message...', 'fa-solid fa-paper-plane text-cyan');
      contactForm.reset();
    });
  }

  // -----------------------------------------------------------------
  // 11. Back to Top Button
  // -----------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -----------------------------------------------------------------
  // 12. Current Year in Footer
  // -----------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // -----------------------------------------------------------------
  // 13. High-Performance Particle Network Canvas Animation
  // -----------------------------------------------------------------
  const canvas = document.getElementById('bg-canvas');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrameId = null;

    // Configuration
    const particleCount = window.innerWidth < 768 ? 32 : 55;
    const maxDistance = 140;

    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    window.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseout', function () {
      mouse.x = null;
      mouse.y = null;
    }, { passive: true });

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function Particle() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.5 + 0.8;
      this.color = Math.random() > 0.4 ? 'rgba(0, 242, 254, ' : 'rgba(37, 99, 235, ';
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    Particle.prototype.update = function () {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce smoothly off boundaries
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Gentle mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    };

    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    };

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function renderLoop() {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes with glowing network lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      for (let k = 0; k < particles.length; k++) {
        particles[k].update();
        particles[k].draw();
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    }

    resizeCanvas();
    initParticles();
    renderLoop();

    // Debounced resize handler
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resizeCanvas();
        initParticles();
      }, 200);
    });

    // Pause animation when page tab is hidden to save CPU/battery
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(renderLoop);
      }
    });
  }

  // -----------------------------------------------------------------
  // 14. Scroll Reveal Animations (IntersectionObserver)
  // -----------------------------------------------------------------
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealTargets = document.querySelectorAll(
      '.skill-category-card, .project-card, .timeline-card, .roadmap-step, .degree-card, .cert-card, .highlight-item'
    );

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealTargets.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      revealObserver.observe(el);
    });
  }

})();
