(() => {
 'use strict';
 const i18n = {
  en: {
   brandSmall:'Community Engagement & Social Protection',navAbout:'About',navExpert:'Expertise',navField:'In the field',navJourney:'Experience',navSkills:'Skills',navContact:'Contact me',
   heroEyebrow:'WORKING WITH COMMUNITIES',heroRole:'Field Mobilization Coordinator',heroIntro:'Connecting communities, partners and social protection programmes. Experience grounded in listening, community engagement and monitoring interventions close to the people they serve.',
   tag1:'Social protection',tag2:'Community engagement',tag3:'Field monitoring',discover:'Explore my experience',downloadCV:'Download my CV',locationShort:'Agadez, Niger · Open to national and international assignments',portraitCaption:'AZOUMA KOCHIMI LALA · NIGER',heroPillBig:'Over 11 years',heroPillSmall:'of commitment to the communities she serves',scrollHint:'SCROLL TO EXPLORE',
   yearsMonths:'years',metric1:'of field experience and community action',metric2:'first professional assignments',metric3:'professional roles presented',
   aboutKicker:'EXPERIENCE & CONVICTION',aboutTitle:'People are at the heart of every intervention.',aboutLead:'Effective social programmes begin on the ground: through dialogue, trust and an understanding of local realities.',aboutText:'With experience in social protection and community development, Azouma works alongside local communities, women’s groups and community facilitators. She combines supervision, outreach, activity monitoring and information sharing to contribute to reliable programme delivery.',followExperience:'Explore the professional experience',
   pillar1Title:'Listen before acting',pillar1Body:'Understand needs and give people a meaningful voice in community initiatives.',pillar2Title:'Mobilize respectfully',pillar2Body:'Enable dialogue, participation and cooperation with local stakeholders.',pillar3Title:'Monitor with rigor',pillar3Body:'Document activities, support stakeholders and communicate useful field information.',
   chapterOne:'THE ENCOUNTER',momentOneTitle:'Where dialogue truly begins.',momentOneText:'In a village, a community gathering is more than a meeting: it is a space for listening, participation and discussing everyday concerns.',illustrationLabel:'Illustrative scene',
   expertiseKicker:'AREAS OF EXPERTISE',expertiseTitle:'Skills in service of action.',expertiseIntro:'Experience built around four complementary fields within social and community programmes.',
   exp1Title:'Social protection',exp1Body:'Monitoring interventions, cash transfers and assistance for vulnerable populations.',exp1Foot:'Programmes & support',exp2Title:'Community engagement',exp2Body:'Village assemblies, awareness sessions, women’s mobilization and community volunteer training.',exp2Foot:'Outreach & participation',exp3Title:'Field coordination',exp3Body:'Supervision of partners’ activities, support to local teams and information sharing.',exp3Foot:'Partners & facilitators',exp4Title:'Monitoring & data',exp4Body:'Digital data collection and reporting to document activity implementation.',exp4Foot:'KoboToolbox · ODK · GEMS',
   storyKicker:'ACTION ROOTED IN COMMUNITIES',storyTitle:'Everyday actions that reflect a commitment to people.',storyBody:'Informing, reassuring, listening, discussing and gathering information: meaningful moments at the heart of fieldwork.',visualOne:'Engage & inform',visualTwo:'Listen & document',
   journeyKicker:'PROFESSIONAL EXPERIENCE',journeyTitle:'A career built close to communities.',journeyLead:'Progressive responsibilities, from population census work and household support to the supervision of social programmes.',
   duration1:'8 years 3 months',duration2:'1 year',duration3:'1 year 8 months',duration4:'1 year',duration5:'1 month',
   job1:'Field Mobilization Coordinator',jobDesc1:'Supervised NGO partner activities, monitored cash transfers delivered by microfinance institutions, supported women’s groups and collected data using GEMS and KoboToolbox.',
   job2:'Field Officer',jobDesc2:'Organized village assemblies, supervised community facilitators and helped information flow between implementation teams and communities.',
   job3:'Community Facilitator',jobDesc3:'Recruited and trained community facilitators, organized village gatherings, delivered family-practice awareness sessions and monitored household records.',
   job4:'Field Officer · Support to vulnerable populations',jobDesc4:'Identified vulnerable households, supported food distribution arrangements, helped resolve disputes and contributed to field reporting.',
   job5:'Census Field Supervisor · RGPH-4',jobDesc5:'Allocated enumeration zones, assisted team redeployment and checked census records.',
   officeImageNote:'THE DEDICATION BEHIND EACH ACTION',officeKicker:'BEYOND FIELD ACTIVITIES',officeTitle:'Human commitment, operational discipline.',officeText:'Fieldwork continues through preparation, monitoring and sharing information. Coordination, planning and digital tools support the work delivered with communities.',officePoint1:'Plan and organize activities',officePoint2:'Monitor field information',officePoint3:'Collaborate with teams and partners',
   skillsKicker:'SKILLS & EDUCATION',skillsTitle:'Practical experience, relevant tools.',skillsIntro:'A combination of field practice, university education, social outreach training and digital data-collection tools.',
   toolsTitle:'Tools & working methods',toolsCollect:'Data collection & monitoring',toolsOffice:'Office applications',toolsCollab:'Collaboration & digital',toolsMethods:'Working methods',toolsMethodsVal:'Activity monitoring · Outreach · Coordination · Reporting',
   educationTitle:'Education & development',education1:'Bachelor’s degree in Geography',education2:'Secondary school diploma · A4 stream',education3:'Infant nutrition & early childhood development',complaints:'grievance management',education4:'Environmental & social safeguards',education4Desc:'Vulnerable household targeting · Cash for Work',education5:'Technical guidance on behavioural change',
   languagesLabel:'LANGUAGES',frenchLanguage:'French',englishLanguage:'English (basic)',
   contactKicker:'CONTACT & MOBILITY',contactTitle:'A new mission to build together?',contactDesc:'Based in Agadez and open to assignments and travel according to programme needs. For collaboration, inquiries or requests for a CV, please use the contact information below.',writeEmail:'Send an email',emailLabel:'EMAIL ADDRESS',phoneLabel:'PRIMARY PHONE',phoneSecond:'SECONDARY PHONE',based:'LOCATION & MOBILITY',locationContact:'Agadez, Niger · National and international mobility',footerTag:'Social protection · Field engagement · Community development',imageEthics:'© 2026 Azouma KOCHIMI LALA. All rights reserved.',backTop:'Back to top ↑'
  }
 };
 let lang='fr';
 const langSwitch=document.getElementById('languageSwitch');
 const langOptions=Array.from(document.querySelectorAll('[data-lang-choice]'));
 function applyLanguage(next){
   lang = next === 'en' ? 'en' : 'fr';
   const dict=i18n.en;
   document.querySelectorAll('[data-i18n]').forEach(el=>{
     const key=el.dataset.i18n;
     if(lang==='en' && Object.prototype.hasOwnProperty.call(dict,key)){
       if(!el.hasAttribute('data-original-html')) el.setAttribute('data-original-html',el.innerHTML);
       el.textContent=dict[key];
     }else if(lang==='fr' && el.hasAttribute('data-original-html')){
       el.innerHTML=el.getAttribute('data-original-html');
     }
   });
   document.documentElement.lang=lang;
   langSwitch.dataset.lang=lang;
   langSwitch.setAttribute('aria-label',lang==='fr'?'Choix de la langue':'Select language');
   langOptions.forEach(option=>{
     const current=option.dataset.langChoice===lang;
     option.setAttribute('aria-pressed',String(current));
     option.setAttribute('aria-label',option.dataset.langChoice==='fr'?(lang==='fr'?'Français sélectionné':'Switch to French'):(lang==='en'?'English selected':'Passer en anglais'));
   });
   document.title= lang==='fr'?'Azouma KOCHIMI LALA | Action communautaire & protection sociale':'Azouma KOCHIMI LALA | Community Engagement & Social Protection';
   try{localStorage.setItem('azouma-site-lang',lang)}catch(e){}
 }
 langOptions.forEach(option=>option.addEventListener('click',()=>applyLanguage(option.dataset.langChoice)));
 try{if(localStorage.getItem('azouma-site-lang')==='en') applyLanguage('en')}catch(e){}

 const menuButton=document.getElementById('mobileToggle');
 const mobile=document.getElementById('mobileNav');
 const motionReduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let menuOpen=false;
 const updateMenuLabel=()=>menuButton?.setAttribute('aria-label',menuOpen?(lang==='fr'?'Fermer le menu':'Close menu'):(lang==='fr'?'Ouvrir le menu':'Open menu'));
 const openMenu=()=>{
   if(!mobile || menuOpen)return;
   menuOpen=true;
   mobile.hidden=false;
   menuButton?.setAttribute('aria-expanded','true');
   menuButton?.classList.add('is-active');
   requestAnimationFrame(()=>{if(menuOpen)mobile.classList.add('is-open')});
   updateMenuLabel();
 };
 const closeMenu=({restoreFocus=false}={})=>{
   if(!mobile || !menuOpen)return;
   menuOpen=false;
   menuButton?.setAttribute('aria-expanded','false');
   menuButton?.classList.remove('is-active');
   mobile.classList.remove('is-open');
   if(motionReduced.matches) mobile.hidden=true;
   if(restoreFocus)menuButton?.focus();
   updateMenuLabel();
 };
 menuButton?.addEventListener('click',()=>menuOpen?closeMenu():openMenu());
 mobile?.addEventListener('transitionend',event=>{
   if(event.target===mobile && event.propertyName==='opacity' && !menuOpen) mobile.hidden=true;
 });
 mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
 document.addEventListener('pointerdown',event=>{
   if(menuOpen && !event.target.closest('.site-header'))closeMenu();
 });
 window.addEventListener('resize',()=>{
   if(window.innerWidth>980 && menuOpen)closeMenu();
 });

 const navLinks=Array.from(document.querySelectorAll('.desktop-nav a'));
 if('IntersectionObserver' in window){
   document.body.classList.add('js-motion');
   const revealObserver=new IntersectionObserver(entries=>{
     entries.forEach(ent=>{if(ent.isIntersecting){ent.target.classList.add('visible');revealObserver.unobserve(ent.target)}});
   },{rootMargin:'0px 0px -35px 0px',threshold:0.05});
   document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
   const spyObserver=new IntersectionObserver(entries=>{entries.forEach(ent=>{if(ent.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+ent.target.id))}})},{rootMargin:'-20% 0px -70% 0px'});
   ['apropos','terrain','expertises','parcours','competences'].forEach(id=>{const el=document.getElementById(id);if(el)spyObserver.observe(el)});
 }

 const lightbox=document.getElementById('lightbox');
 const lightboxImg=document.getElementById('lightboxImage');
 const closeBox=document.getElementById('lightboxClose');
 let lastFocus=null;
 const closeLightbox=()=>{if(!lightbox)return;lightbox.hidden=true;document.body.classList.remove('lock');lastFocus?.focus()};
 document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{
   lastFocus=button;
   lightboxImg.src=button.getAttribute('data-photo');
   lightboxImg.alt=button.querySelector('img')?.alt || '';
   lightbox.hidden=false;document.body.classList.add('lock');closeBox?.focus();
 }));
 closeBox?.addEventListener('click',closeLightbox);
 lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!lightbox?.hidden)closeLightbox();else closeMenu({restoreFocus:true})}});
})();
