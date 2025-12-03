document.addEventListener('DOMContentLoaded', () => {

    // --- DATA FROM RESUME AND SNIPPETS ---

    const companyLogos = {
        'The Alliance for Climate Transition (ACT)': 'public/images/logos/ACT Primary Logo Horizontal Black Text Default.svg',
        'Buffr Inc.': 'public/images/logos/Buffr_Logo.png',
        'Insait IO': 'public/images/logos/insait_logo.png',
        'Brandeis International Business School': 'public/images/logos/IBS_logo_stack_center_blue_DIGITAL.png',
        'Polar Power Inc.': 'public/images/logos/polarpower_logo.png',
        'Lithon Project Consultants': 'public/images/logos/lithon.png',
        'Namibia University of Science & Technology': 'public/images/logos/nust.png',
        'Aquasaic Corporation': 'public/images/logos/global-venture-labs-logo.png' // Placeholder, assuming a logo
    };

    const professionalExperience = [
        { role: 'Founder', company: 'Buffr Inc.', location: 'Windhoek, Namibia', period: 'January 2023 – Present', description: "Building financial identity for Namibia's informal economy—a sector representing approximately 24.7% of GDP (approximately N$8 billion).", logo: companyLogos['Buffr Inc.'], points: [{ title: 'Products Developed', items: ['Buffr Payment Companion — Instant payment infrastructure for emerging markets, inspired by India\'s UPI', 'BuffrLend — Digital lending module', 'BuffrSign — Digital signature module', 'Buffr Host — Front desk AI for independent Hospitality properties'] }, { title: 'Key Achievements', items: ['Conducted comprehensive field studies on digital payment ecosystems across 5+ countries', 'Selected for MassChallenge, Global Venture Labs, and Brandeis Spark accelerators', 'Developed AI-powered credit scoring using ML-driven transaction analysis'] }] },
        { role: 'Project Manager, DEIJ & Workforce Development', company: 'The Alliance for Climate Transition (ACT)', location: 'Massachusetts, USA', period: 'October 2024 – June 2025', description: 'Led comprehensive workforce development assessment in partnership with Massachusetts Clean Energy Center (MassCEC).', logo: companyLogos['The Alliance for Climate Transition (ACT)'], points: [{ title: 'Key Accomplishments', items: ['Conducted 14+ in-depth interviews with clean energy companies (startups to Fortune 500)', 'Analyzed hiring needs across 50+ companies in the clean energy sector', 'Developed diversity and inclusion strategies for clean energy workforce', 'Authored comprehensive workforce development assessment report with actionable recommendations'] }, { title: 'Technical Project', items: ['ACT Climate Economy Careers Platform — Career platform with AI-powered resume analysis, skill gap identification, and real-time chat interface'] }] },
        { role: 'Business Development Consultant', company: 'Aquasaic Corporation', location: 'Remote', period: 'October 2024 – March 2025', description: 'Strategic consulting for innovative water treatment technology startup', logo: companyLogos['Aquasaic Corporation'], points: [{ title: null, items: ['Designed initial architecture for Aquasaic Aqua Intel Platform', 'Conducted commercial and technical research on cutting-edge water treatment technologies', 'Developed pitch decks tailored for funding opportunities (municipal, industrial, residential sectors)'] }] },
        { role: 'Business Development Intern', company: 'Insait IO', location: 'Tel Aviv, Israel', period: 'June 2023 – July 2023', description: 'Fintech predictive analytics startup focused on AI applications in banking.', logo: companyLogos['Insait IO'], points: [{ title: null, items: ['Analyzed Valley National Bank financial data, identifying real estate loans as key revenue driver (>30% of industry revenue)', 'Researched EU AI Act and US regulatory compliance considerations for AI in finance', 'Developed compliance framework documentation for AI applications in banking'] }] },
        { role: 'Business Operations Manager / Site Engineer', company: 'Polar Power Inc.', location: 'Windhoek, Namibia', period: 'July 2018 – April 2019', description: 'Led operations for multinational telecommunications and renewable energy company', logo: companyLogos['Polar Power Inc.'], points: [{ title: 'Key Achievements', items: ['Successfully constructed 10 telecommunication towers for MTC (Namibia\'s largest carrier)', 'Secured contract to design and deliver 2 portable WiFi trailer masts to BoFiNet (Botswana)', 'Managed optical fiber installation project in Swakopmund'] }] },
        { role: 'Civil Engineering Intern', company: 'Lithon Project Consultants', location: 'Ongwediva, Namibia', period: 'November 2015 – January 2016', description: null, logo: companyLogos['Lithon Project Consultants'], points: [{ title: null, items: ['Evaluated 15+ tender documents for compliance with Namibian standards', 'Conducted site inspections for stormwater infrastructure projects', 'Assisted with civil engineering projects focusing on infrastructure development and municipal services'] }] }
    ];

    const buffrProducts = [
        { name: 'Buffr Payment Companion', description: 'Instant payment infrastructure for emerging markets' },
        { name: 'BuffrLend', description: 'Digital lending module' },
        { name: 'BuffrSign', description: 'Digital signature module' },
        { name: 'Buffr Host', description: 'Front desk AI for independent hospitality properties' },
    ];

    const accelerators = [
        {
            name: 'Brandeis Spark',
            logo: 'public/images/logos/brandeis-spark-logo.png',
            description: 'Participated in the Brandeis Spark Startup Cohort, receiving guidance and support to develop and launch my startup within the Brandeis University ecosystem.',
            link: 'https://www.brandeis.edu/innovation/grant-programs/spark/index.html'
        },
        {
            name: 'MassChallenge',
            logo: 'public/images/logos/masschallenge-logo.png',
            description: 'As part of the MassChallenge Early Stage Foundations Cohort, accessed mentorship, resources, and a network to refine entrepreneurial skills and grow ventures.',
            link: 'https://www.masschallenge.org/'
        },
        {
            name: 'Global Venture Labs',
            logo: 'public/images/logos/global-venture-labs-logo.png',
            description: 'Participated in the Global Venture Labs Accelerator Cohort, gaining valuable insights into entrepreneurship, business strategy, and scaling startups.',
            link: 'https://www.globalventurelabs.org/'
        }
    ];

    const recognition = {
        title: 'Asper Student Startup Prize Winner (Apps, Software & Computer Science)',
        image: 'public/images/buffr/asper_win.jpeg',
        description: 'Winner of the Asper Student Startup Prize in the Apps, Software & Computer Science category at Brandeis International Business School for Buffr.'
    };

    const researchProjects = [
        { title: 'Machine Learning in Peer-to-Peer Lending', year: '2024', description: 'Analyzed 1.8 million loan records using machine learning for investment optimization. Implemented predictive models: random forests, gradient boosting.' },
        { title: 'Time Series Analysis: AMD Stock Prices (1984-2024)', year: '2024', description: 'Applied econometric techniques to 40-year stock price dataset. Incorporated sentiment analysis of news articles and annual reports.' },
        { title: 'COVID-19 Economic Impact Analysis', year: '2024', description: 'Analyzed pandemic effects on rental markets using Airbnb datasets (458,177 listings). Applied statistical techniques to assess market recovery patterns.' },
        { title: 'Stripe Payment Processing Platform Analysis', year: '2023', description: 'Comprehensive analysis of mobile payment market in SADC region. Researched M-Pesa, Flutterwave, PayStack competitive landscape.' }
    ];

    const hackathonProjects = [
        { title: 'Kit Star', event: 'DeisHacks 2023', description: 'Custom shipping containerized aquaponics and organic vertical farm solution. Creates a symbiotic relationship between fish and plants, reducing waste and producing fresh, healthy produce.', link: 'https://devpost.com/software/kit-star' },
        { title: 'FRONT-AI Healthcare', event: 'DeisHacks 2024', description: 'Addresses complex challenges in healthcare data management, particularly in complying with HIPAA regulations. Simplifies the management of sensitive patient data for healthcare organizations, ensuring compliance while being user-friendly.', link: 'https://devpost.com/software/front-ai' },
        { title: 'BUFFR', event: 'Asper Student Startup Prizes', description: 'Namibia\'s payment companion inspired by India\'s UPI, building financial identity for the informal economy. Provides instant payment infrastructure, AI-powered credit scoring, and digital lending solutions for underserved merchants and SMEs.', link: 'https://devpost.com/software/buffr' }
    ];

    const education = {
        mba: { degree: 'Master of Business Administration (STEM-Designated)', school: 'Brandeis International Business School', location: 'Waltham, MA', date: 'May 2024', concentrations: ['Data Analytics', 'Strategy & Innovation'], gpa: '3.45/4.0', courses: ['Advanced Data Analytics', 'Competition and Strategy', 'Machine Learning for Business & Finance', 'Marketing Management', 'Forecasting in Finance and Economics', 'Business Dynamics: Managing in a Complex World', 'Python and Applications to Business Analytics', 'Business in Global Markets', 'Information Visualization', 'Entrepreneurship and Rapid Prototyping', 'Credit Risk Analysis', 'Business & Economic Strategies in Emerging Markets'], leadership: ['Vice President, International Business School Student Association (IBSSA)', 'Graduate Student Senator, Graduate Student Association (GSA) (Aug 2023 - May 2024)', 'Asper Center for Global Entrepreneurship - Intern (Feb 2024 - May 2024)', 'Instructional Assistant, Social Impact Investing (Jan 2024 - June 2024)', 'Instructional Assistant, MBA Career and Management Communication (Aug 2023 - Dec 2023)', 'Board Member, Student Conduct Board (Aug 2023 - Nov 2023)', 'Led IBSSA to "2023 Student Group of the Year" recognition'] },
        beng: { degree: 'Bachelor of Engineering: Civil & Environmental Engineering', school: 'Namibia University of Science & Technology', location: 'Windhoek, Namibia', date: 'October 2017', capstone: 'Comprehensive water tower system design for Kalkrand township', extra: ['International Exchange: FH-Aachen University, Germany (Project Management)', 'Engineering Students Association Committee Member'] }
    };

    const awards = [
        { award: 'Asper Student Startup Prize Winner (Apps, Software & Computer Science)', org: 'Brandeis University', year: '2023' },
        { award: 'Student Group of the Year (IBSSA)', org: 'Brandeis University', year: '2023' },
        { award: 'Student Choice for Community Engagement (IBSSA)', org: 'Brandeis University', year: '2023' },
        { award: 'Prime Liaison Recognition (GSA)', org: 'Brandeis University', year: '2024' },
        { award: 'Ain Family Fellowship', org: 'Brandeis International Business School', year: '2024' },
        { award: 'Hassenfeld Immersion Program Fellow', org: 'Brandeis International Business School', year: '2023-2024' }
    ];

    const skills = {
        'Programming & Data Science': ['Python', 'R', 'SQL', 'JavaScript/TypeScript', 'PostgreSQL', 'Neo4j'],
        'AI/ML & Frameworks': ['Machine Learning', 'LangGraph', 'LlamaIndex', 'Pydantic AI', 'CrewAI', 'AutoGen', 'Scikit-learn', 'Time Series Analysis', 'Sentiment Analysis', 'RAG Systems'],
        'Web Development & Cloud': ['Next.js', 'FastAPI', 'SQLAlchemy', 'Supabase', 'AWS', 'Google Cloud Platform'],
        'Business & Analytics': ['Data Visualization', 'Financial Modeling', 'Forecasting', 'Market Research', 'Statistical Analysis', 'Process Optimization', 'Quantitative Analysis']
    };
    
    const certificateImages = [
        { src: 'public/images/certificates/aibootcamp-cert.png', alt: 'AI Bootcamp Certificate' },
        { src: 'public/images/certificates/fintech-cert.png', alt: 'Fintech Certificate' },
        { src: 'public/images/certificates/openbanking-cert.png', alt: 'Open Banking Certificate' },
        { src: 'public/images/certificates/mba-certificate.JPG', alt: 'MBA Certificate' },
        { src: 'public/images/certificates/certificate5.png', alt: 'Professional Certificate' }
    ];

    const hassenfeldFellowship = {
        title: 'Hassenfeld Immersion Program — Global Business Immersion (2023-2024)',
        description: 'Prestigious in-country student experience offering intensive introduction to the business, economy, and culture of dynamic overseas markets. Selected as a Hassenfeld Fellow to participate in immersive business study programs across international markets.',
        locations: [
            { name: 'Israel (2023)', points: ['Visited innovative companies: Mobileye (autonomous driving), Lemonade (insurtech), Lightricks (creative technology), Trullion (AI-powered accounting), MassChallenge Israel (startup accelerator), Ma\'agan Michael (kibbutz visit)', 'Deep dive into AI-driven innovations and startup culture', 'Explored Jerusalem and Tel Aviv tech ecosystems', 'Awarded internship at Insait IO as Business Development Intern'] },
            { name: 'India (2023-2024)', points: ['Engaged with industry leaders: Varun Beverages (Pepsi bottler), Mahindra Group (automotive/conglomerate), ICICI Prudential (financial services), Welspun (textiles/infrastructure), Dabur (FMCG/consumer goods), Bharti Airtel (telecommunications)', 'Visited National Stock Exchange of India', 'Met with innovative companies: Mobikwik (payment platform), Tata Group', 'Studied UPI payment system and India Stack — primary inspiration for Buffr'] }
        ]
    };

    const volunteer = [
        { org: 'New Elementary Namibia', desc: 'Collected and distributed educational materials, food, and clothing for impoverished schools; contributed to school refurbishment projects to improve early education standards' },
        { org: 'Global Entrepreneurship Network Namibia', desc: 'Developed \'Zizza Makazi\' green hydrogen concept for HDF Energy' }
    ];

    const conferences = [
        {
            title: 'MIT FinTech Conference',
            year: '2024 & 2025',
            location: 'Boston, MA',
            link: 'https://www.mitfintech.com/',
            description: `Engaged with innovators and professionals at the MIT FinTech Conference.
The 2024 conference addressed pressing issues in fintech, including
real-time payments and AI applications in finance. Participated in
discussions led by industry leaders from Visa and PayPal, gaining valuable
 insights into the future of financial services. The 2025 conference
focused on the impact of open banking, AI, and digital currencies on
financial services, with networking opportunities discussing strategies
for navigating the evolving financial ecosystem.`
        },
        {
            title: 'FinTech Junction',
            year: '2023',
            location: 'Tel Aviv, Israel',
            link: 'https://events.lynx.co/fintech-junction/',
            description: `Attended Israel's premier fintech conference at the Hilton Tel Aviv. This
event brought together over 1,000 attendees from 25 countries, including
leaders from banks, fintech startups, and venture capital firms. Gained
insights into global fintech trends, particularly in AI-driven innovation
and digital payments, and networked with industry leaders, enhancing
understanding of challenges and opportunities in the fintech landscape.`
        },
        {
            title: 'Black in E-Commerce',
            year: '2023',
            location: 'Atlanta, GA',
            link: 'https://www.linkedin.com/posts/blackinecom_welcome-to-the-black-in-ecom-conference-activity-7092732100386181120-4053',
            description: `Attended the Black in eCom Conference 2023, a pivotal event focused on
empowering Black entrepreneurs and professionals in e-commerce and
technology. The conference aimed to amplify Black voices in e-commerce,
celebrate their contributions, and address industry challenges through
networking, education, and empowerment initiatives.`
        },
        {
            title: 'Dubai Expo 2020',
            year: '2020',
            location: 'Dubai, UAE',
            link: null,
            description: `Represented Kanie Distribution and Supply Chain at Dubai Expo 2020, showcasing innovative solutions and connecting with international stakeholders.`
        },
        {
            title: 'Namibia 4th Industrial Revolution Expo',
            year: '2021',
            location: 'Windhoek, Namibia',
            link: null,
            description: `Presented at Namibia's 4th Industrial Revolution Expo, providing training to government officials on drone applications and emerging technologies.`
        },
        {
            title: 'PowerGEN Africa Utility Week',
            year: '2019',
            location: 'South Africa',
            link: null,
            description: `Participated in PowerGEN Africa, focusing on renewable energy and telecommunications infrastructure development across Southern Africa.`
        }
    ];


    // --- RENDER FUNCTIONS ---

    function renderBuffrSection() {
        const container = document.getElementById('buffr-container');
        if (!container) return;

        const productsHtml = buffrProducts.map(p => `<div class="card"><h4>${p.name}</h4><p>${p.description}</p></div>`).join('');
        const acceleratorsHtml = accelerators.map(acc => `
            <div class="card">
                <img src="${acc.logo}" alt="${acc.name} Logo" class="logo-image">
                <h4>${acc.name}</h4>
                <p>${acc.description}</p>
                <a href="${acc.link}" target="_blank" rel="noopener noreferrer" class="card-link">Learn More</a>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="buffr-header">
                <h2 class="section-title">BUFFR</h2>
                <p class="section-subtitle">Your Payment Companion</p>
                <p class="section-tagline">Building Financial Identity for Southern Africa</p>
            </div>

            <div class="card-grid two-col">
                <div class="card">
                    <h3>THE CHALLENGE</h3>
                    <p>Namibia's informal economy represents approximately 24.7% of GDP (approximately N$8 billion), encompassing street vendors, small-scale traders, artisanal miners, and transport operators. These economic participants face a cycle of exclusion: No digital footprint, no credit history, and limited access to formal financial services.</p>
                </div>
                <div class="card">
                    <h3>BUFFR'S APPROACH</h3>
                    <p>Buffr transforms everyday payment activity into a foundation for financial identity through AI-powered analysis. By capturing transaction data, we create credit histories for users who may have previously operated entirely in cash, enabling access to formal financial services and business growth opportunities.</p>
                </div>
            </div>

            <h3 class="subsection-title">Platform Capabilities</h3>
            <div class="card-grid two-col">
                <div class="card">
                    <img src="public/images/buffr/buffr_app_mock.jpeg" alt="Buffr App" style="width: 100%; border-radius: 12px; margin-bottom: 1rem;">
                    <h4>Real-Time Transaction Data</h4>
                    <p>Creates digital footprints for cash-based operations, building verifiable business histories and enabling data-driven financial assessments.</p>
                </div>
                <div class="card">
                    <img src="public/images/buffr/buffr_app_mock2.png" alt="Buffr Features" style="width: 100%; border-radius: 12px; margin-bottom: 1rem;">
                    <h4>AI-Powered Credit Scoring</h4>
                    <p>Machine learning algorithms assess creditworthiness based on actual economic behavior rather than traditional credit history requirements.</p>
                </div>
            </div>

            <h3 class="subsection-title">Products</h3>
            <div class="card-grid four-col">${productsHtml}</div>

            <h3 class="subsection-title">Research & Impact</h3>
            <div class="card">
                <h4>Breaking the Financial Exclusion Cycle</h4>
                <p>Buffr addresses the "No Data → No Rating → No Credit" loop that traps informal traders. Our comprehensive research on Namibia's informal economy identifies key institutional challenges and provides solutions through:</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                    <li><strong>Unified Micro-Seller Identity:</strong> Streamlined registration creating business identity and government linkages</li>
                    <li><strong>Digital Payment Infrastructure:</strong> Instant payment systems inspired by India's UPI, adapted for African markets</li>
                    <li><strong>Business Rating Systems:</strong> Reputation-based assessments through customer feedback and transaction history</li>
                    <li><strong>Compliance Automation:</strong> Simplified tax calculations and filing for micro-businesses</li>
                </ul>
            </div>

            <h3 class="subsection-title">Accelerator Recognition</h3>
            <div class="card-grid three-col">${acceleratorsHtml}</div>

            <h3 class="subsection-title">Additional Recognition</h3>
            <div class="card recognition-card">
                <img src="${recognition.image}" alt="Asper Win" style="width: 100%; border-radius: 12px; margin-bottom: 1rem;">
                <h4>${recognition.title}</h4>
                <p>${recognition.description}</p>
            </div>
            <div class="learn-more-container">
                <a href="https://buffr.ai" target="_blank" rel="noopener noreferrer" class="card-link">Learn More at buffr.ai</a>
            </div>
        `;
    }

    function renderExperience() {
        const container = document.querySelector('.experience-grid');
        if (!container) return;
        let html = '';
        professionalExperience.forEach(job => {
            let pointsHtml = '';
            job.points.forEach(pointSection => {
                pointsHtml += pointSection.title ? `<h4>${pointSection.title}:</h4>` : '';
                pointsHtml += '<ul>';
                pointSection.items.forEach(item => {
                    pointsHtml += `<li>${item}</li>`;
                });
                pointsHtml += '</ul>';
            });
            html += `
                <div class="card experience-card">
                    <div class="experience-header">
                        ${job.logo ? `<img src="${job.logo}" alt="${job.company} Logo" class="company-logo">` : ''}
                        <div class="experience-title">
                            <h3 class="job-title">${job.role}</h3>
                            <p class="job-meta">${job.company} | ${job.location}</p>
                            <p class="job-meta">${job.period}</p>
                        </div>
                    </div>
                    ${job.description ? `<p>${job.description}</p>` : ''}
                    <div class="job-points">${pointsHtml}</div>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    function renderProjects() {
        const container = document.querySelector('#research-projects-grid');
        if (!container) return;
        let html = '';
        researchProjects.forEach(proj => {
            html += `
                <div class="card">
                    <p class="job-meta">${proj.year}</p>
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    function renderHackathons() {
        const container = document.querySelector('#hackathon-projects-grid');
        if (!container) return;
        let html = '';
        hackathonProjects.forEach(proj => {
            html += `
                <div class="card">
                    <h3>${proj.title}</h3>
                    <p class="job-meta">${proj.event}</p>
                    <p>${proj.description}</p>
                    <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="card-link">View Project</a>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    function renderEducation() {
        const container = document.querySelector('.education-grid');
        if (!container) return;
        const mba = education.mba;
        const beng = education.beng;
        container.innerHTML = `
            <div class="card">
                <h3>${mba.degree}</h3>
                <p>${mba.school} | ${mba.location}</p>
                <p class="job-meta">${mba.date}</p>
                <p><strong>GPA:</strong> ${mba.gpa}</p>
                <p><strong>Concentrations:</strong> ${mba.concentrations.join(', ')}</p>
                <h4>Relevant Coursework:</h4>
                <p>${mba.courses.join(', ')}</p>
                <h4>Leadership & Campus Involvement:</h4>
                <ul>${mba.leadership.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
            <div class="card">
                <h3>${beng.degree}</h3>
                <p>${beng.school} | ${beng.location}</p>
                <p class="job-meta">${beng.date}</p>
                <p><strong>Capstone Project:</strong> ${beng.capstone}</p>
                <ul>${beng.extra.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
        `;
    }

    function renderAwards() {
        const container = document.querySelector('#awards tbody');
        if (!container) return;
        let html = '';
        awards.forEach(award => {
            html += `
                <tr>
                    <td>${award.award}</td>
                    <td>${award.org}</td>
                    <td>${award.year}</td>
                </tr>
            `;
        });
        container.innerHTML = html;
    }

    function renderSkills() {
        const container = document.querySelector('#skills .card-grid');
        if (!container) return;
        let html = '';
        for (const [category, skillList] of Object.entries(skills)) {
            html += `
                <div class="card">
                    <h3>${category}</h3>
                    <p>${skillList.join(' | ')}</p>
                </div>
            `;
        }
        container.innerHTML = html;
    }

    function renderCertifications() {
        const track = document.querySelector('#certifications .carousel-track');
        if (!track) return;
        let html = '';
        certificateImages.forEach(cert => {
            html += `
                <div class="carousel-item">
                    <img src="${cert.src}" alt="${cert.alt}">
                </div>
            `;
        });
        track.innerHTML = html;
    }
    
    function renderFellowship() {
        const container = document.querySelector('#fellowship-details');
        if (!container) return;
        let html = '';
        if (hassenfeldFellowship.description) {
            html += `<p style="margin-bottom: 1.5rem;">${hassenfeldFellowship.description}</p>`;
        }
        hassenfeldFellowship.locations.forEach(loc => {
            html += `
                <div>
                    <h4>${loc.name}:</h4>
                    <ul>${loc.points.map(p => `<li>${p}</li>`).join('')}</ul>
                </div>
            `
        });
        container.innerHTML = html;
    }

    function renderVolunteer() {
        const container = document.querySelector('#volunteer .cert-list');
        if (!container) return;
        let html = '';
        volunteer.forEach(item => {
            html += `
                <div class="card">
                    <h3>${item.org}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    function renderConferences() {
        const container = document.querySelector('#conferences-list');
        if (!container) return;
        let html = '';
        conferences.forEach(conf => {
            const linkHtml = conf.link ? `<a href="${conf.link}" target="_blank" rel="noopener noreferrer" class="card-link">Learn More</a>` : '';
            html += `
                <div class="card">
                    <h3>${conf.title}</h3>
                    <p class="job-meta">${conf.location} - ${conf.year}</p>
                    <p>${conf.description}</p>
                    ${linkHtml}
                </div>
            `;
        });
        container.innerHTML = html;
    }


    // --- INTERACTIVITY ---

    function setupMobileMenu() {
        const menuButton = document.querySelector('.mobile-menu-button');
        const mobileNav = document.querySelector('.mobile-nav');
        if (menuButton && mobileNav) {
            menuButton.addEventListener('click', () => {
                mobileNav.classList.toggle('active');
            });
        }
    }

    function setupCarousel() {
        const track = document.querySelector('#certifications .carousel-track');
        const prevButton = document.querySelector('#certifications .carousel-button.prev');
        const nextButton = document.querySelector('#certifications .carousel-button.next');

        if (!track || !prevButton || !nextButton) return;

        nextButton.addEventListener('click', () => {
            const itemWidth = track.querySelector('.carousel-item').offsetWidth;
            track.scrollBy({ left: itemWidth + 20, behavior: 'smooth' });
        });

        prevButton.addEventListener('click', () => {
            const itemWidth = track.querySelector('.carousel-item').offsetWidth;
            track.scrollBy({ left: -itemWidth - 20, behavior: 'smooth' });
        });
    }


    // --- INITIALIZE ---
    
    renderBuffrSection();
    renderExperience();
    renderProjects();
    renderHackathons();
    renderEducation();
    renderAwards();
    renderSkills();
    renderCertifications();
    renderFellowship();
    renderVolunteer();
    renderConferences();
    
    setupMobileMenu();
    setupCarousel();

});