/* ==========================================================================
   SAHAYAA — application logic
   Vanilla JS + three.js r128 (no build step, single-file-friendly).
   Sections: i18n, accessibility engine, 3D companion orb, voice companion,
   my day, scam shield, family connect, emergency, digital help, principles,
   demo, tutorial modal.
   ========================================================================== */

/* ----------------------------- 1. TRANSLATIONS --------------------------- */
const I18N = {
  en: {
    nav_home:"Home", nav_myday:"My Day", nav_voice:"Voice", nav_safety:"Safety",
    nav_family:"Family", nav_help:"Digital Help", nav_a11y:"Accessibility",
    btn_a11y:"Accessibility",
    hero_eyebrow:"A senior-first digital companion",
    hero_h1:"Technology should feel simple.",
    hero_sub:"SAHAYAA helps older adults navigate everyday technology with confidence, clarity and safety.",
    btn_explore:"Explore SAHAYAA", btn_demo:"See the real-world demo",
    chip_text:"Text Size", chip_contrast:"High Contrast", chip_voice:"Voice Mode",
    problem_eyebrow:"The problem",
    problem_h2:"Technology wasn't always designed with them in mind.",
    problem_lede:"Small text. Too many choices. Too much uncertainty.",
    clutter1:"Tiny 8px text", clutter2:"14 menu items", clutter3:'"Verify your account now!!"',
    clutter4:"Forgotten password", clutter5:"Confusing form: 22 fields",
    clutter6:"Pop-up: Click here to claim", clutter7:"CAPTCHA failed. Try again.",
    clutter_caption_1:"Scroll to see what changes.",
    clutter_caption_2:"SAHAYAA clears the clutter away.",
    meet_eyebrow:"Meet SAHAYAA", meet_h2:"A calmer digital companion for everyday life.",
    orbit_voice:"VOICE", orbit_safety:"SAFETY", orbit_family:"FAMILY", orbit_reminders:"REMINDERS", orbit_help:"HELP",
    voice_eyebrow:"Voice companion", voice_h2:"Just speak.",
    voice_lede:"Typing is never required. Speak to SAHAYAA the way you'd speak to a person.",
    voice_tap:"Tap to speak", voice_listening:"Listening…", voice_thinking:"Thinking…",
    voice_greeting:"Hello. How can I help you today?",
    voice_input_label:"Type a message instead", voice_placeholder:"Or type here instead…",
    btn_send:"Send",
    voice_not_supported:"Voice recognition isn't available in this browser — please type instead.",
    myday_eyebrow:"My Day", myday_h2:"Your day, at a glance.",
    scam_eyebrow:"Scam Shield", scam_h2:"Not sure about a message? Check it first.",
    scam_lede:"This is an educational tool. It cannot guarantee whether something is a scam — but it can help you slow down and think it through.",
    scam_sms:'"Congratulations! You have won ₹50,000! Click this link immediately."',
    btn_check_msg:"Check this message",
    scam_warning_title:"⚠️ This message may be suspicious.",
    scam_warning_body:"Be careful. It promises unexpected money and asks you to click a link. Never share OTPs, passwords or banking details.",
    btn_ask_trusted:"Ask someone I trust", btn_back:"Go back",
    scam_trusted_msg:"Meera (Daughter) has been notified and will call you shortly to check this together.",
    family_eyebrow:"Family Connect", family_h2:"The people who matter, one tap away.",
    call_action:"Call", message_action:"Message", video_action:"Video",
    call_sim:"Calling {name} (simulated) — no real call is made.",
    msg_sim:"Message sent to {name} (simulated).",
    video_sim:"Starting video with {name} (simulated).",
    emg_eyebrow:"Emergency Help", emg_h2:"If something is wrong, help is one tap away.",
    btn_get_help:"GET HELP", emg_desc:"Contact my trusted person.",
    btn_im_safe:"I am safe", safe_confirm:"Noted. Glad you're safe.",
    emg_confirm_title:"Are you sure you want to contact your trusted person?",
    emg_confirm_sub:"This is a prototype — no real call will be made.",
    btn_yes_call:"Yes, call", btn_cancel:"Cancel",
    emg_called:"Arjun (Son) is being contacted now (simulated).",
    dh_eyebrow:"Digital Help", dh_h2:"Help me with technology.",
    btn_read_aloud:"Read aloud", btn_close:"Close",
    dp_eyebrow:"How this was designed", dp_h2:"Designed with seniors, not just for seniors.",
    demo_eyebrow:"See SAHAYAA in real life", demo_h2:"From a suspicious text to peace of mind.",
    btn_restart_demo:"Restart Demo", btn_run_demo:"Run Demo",
    uj_eyebrow:"The change", uj_h2:"How SAHAYAA changes the experience.",
    j1:"CONFUSED", j2:"GUIDED", j3:"SAFE", j4:"CONFIDENT", j5:"INDEPENDENT",
    audit_eyebrow:"Prototype Accessibility Audit", audit_h2:"Where this prototype stands today.",
    ai_eyebrow:"AI & Accessibility Prompts", ai_h2:"How AI was used to shape this design.",
    footer_line:"Technology should give people confidence.",
    ac_title:"Accessibility Center", ac_textsize:"Text Size", ac_medium:"Medium", ac_large:"Large", ac_xlarge:"Extra Large",
    ac_contrast:"Contrast", ac_standard:"Standard", ac_highcontrast:"High Contrast",
    ac_voice:"Voice", ac_voiceon:"Voice On", ac_voiceoff:"Voice Off",
    ac_motion:"Motion", ac_normalmotion:"Normal Motion", ac_reducemotion:"Reduce Motion",
    ac_language:"Language", ac_buttonsize:"Button Size",
    myday_items:[
      {time:"09:00", icon:"🩺", desc:"Doctor appointment", ta:""},
      {time:"12:30", icon:"🍽️", desc:"Lunch reminder"},
      {time:"16:00", icon:"📞", desc:"Call Meera"},
      {time:"19:00", icon:"🚶", desc:"Evening walk"}
    ],
    done:"Mark as done", undone:"Done ✓", speak:"Read aloud",
    tutorials:[
      {icon:"📱", title:"How to use my phone", steps:["Press the round button to wake the screen.","Slide or tap to unlock.","Tap an app icon once to open it.","Press the home button to go back."]},
      {icon:"🖼️", title:"How to share a photo", steps:["Open Photos.","Choose your photo.","Tap Share.","Choose the person."]},
      {icon:"💳", title:"How to make a digital payment safely", steps:["Only use apps your bank recommends.","Never enter your PIN if someone else asks you to.","Double-check the amount before confirming.","Keep the receipt or confirmation message."]},
      {icon:"🔑", title:"How to create a safe password", steps:["Use at least 8 characters.","Mix letters, numbers and a symbol.","Avoid birthdays or names.","Never share it, even with 'the bank'."]},
      {icon:"🚩", title:"How to identify suspicious messages", steps:["Be cautious of urgent language like 'Act now!'","Be cautious of unexpected prizes or money.","Never click links from unknown senders.","Ask a trusted person if you're unsure."]},
      {icon:"🏛️", title:"How to use a government website", steps:["Check the address starts with the official domain.","Look for a lock icon in the address bar.","Never pay through a link sent by SMS.","Ask family to double-check before submitting forms."]}
    ],
    principles:[
      {t:"Simplicity First", p:"Interfaces overwhelm with choice.", d:"One primary action per screen.", w:"Reduces decision fatigue and errors."},
      {t:"Accessibility by Default", p:"Accessibility is often an afterthought.", d:"Large text and contrast are the default, not an option buried in settings.", w:"Nobody has to go looking for a usable experience."},
      {t:"Voice Before Typing", p:"Typing is hard for many older adults.", d:"Every core task has a voice-first path.", w:"Removes the biggest single barrier to use."},
      {t:"Large Targets", p:"Small buttons cause mis-taps.", d:"44px+ minimum touch targets everywhere.", w:"Fewer accidental actions, more confidence."},
      {t:"Clear Language", p:"Jargon excludes people.", d:"Plain, warm, direct wording throughout.", w:"Understanding replaces guessing."},
      {t:"Human Confirmation", p:"Irreversible actions cause anxiety.", d:"Every emergency or sensitive action asks for confirmation first.", w:"Mistakes become recoverable, not scary."},
      {t:"Trust and Safety", p:"Scams specifically target older adults.", d:"Scam Shield explains risk in plain terms, never alone.", w:"Builds informed caution, not fear."},
      {t:"Consistency", p:"New patterns on every screen confuse users.", d:"Same icons, wording and layout throughout.", w:"What you learn once, you can use everywhere."},
      {t:"User Control", p:"Systems that decide for you feel unsafe.", d:"Every setting is visible, adjustable and reversible.", w:"Confidence comes from control."},
      {t:"Dignity and Independence", p:"Tools for seniors can feel patronizing.", d:"SAHAYAA is designed to support independence, not replace it.", w:"Respect is part of good design."}
    ],
    demo_steps:[
      "An elderly user receives a suspicious SMS.",
      "They open SAHAYAA.",
      'They tap "Check this message."',
      "SAHAYAA explains why it may be suspicious.",
      'They tap "Ask someone I trust."',
      "A trusted family contact appears.",
      "The user avoids the suspicious action."
    ]
  },
  ta: {
    nav_home:"முகப்பு", nav_myday:"என் நாள்", nav_voice:"குரல்", nav_safety:"பாதுகாப்பு",
    nav_family:"குடும்பம்", nav_help:"டிஜிட்டல் உதவி", nav_a11y:"அணுகல்தன்மை",
    btn_a11y:"அணுகல்தன்மை",
    hero_eyebrow:"மூத்தோருக்கான டிஜிட்டல் துணைவன்",
    hero_h1:"தொழில்நுட்பம் எளிமையாக இருக்க வேண்டும்.",
    hero_sub:"SAHAYAA மூத்த குடிமக்கள் தொழில்நுட்பத்தை நம்பிக்கையுடனும், தெளிவுடனும், பாதுகாப்புடனும் பயன்படுத்த உதவுகிறது.",
    btn_explore:"SAHAYAA-வை பார்க்க", btn_demo:"நேரடி உதாரணத்தைப் பார்க்க",
    chip_text:"எழுத்து அளவு", chip_contrast:"அதிக மாறுபாடு", chip_voice:"குரல் முறை",
    problem_eyebrow:"சிக்கல்",
    problem_h2:"தொழில்நுட்பம் எப்போதும் மூத்தோரை மனதில் கொண்டு வடிவமைக்கப்படவில்லை.",
    problem_lede:"சிறிய எழுத்துகள். அதிக தேர்வுகள். அதிக குழப்பம்.",
    clutter1:"சிறிய 8px எழுத்து", clutter2:"14 மெனு உருப்படிகள்", clutter3:'"இப்போதே உங்கள் கணக்கை உறுதிப்படுத்தவும்!!"',
    clutter4:"மறந்த கடவுச்சொல்", clutter5:"22 புலங்கள் கொண்ட படிவம்",
    clutter6:"பாப்-அப்: பெற இங்கே கிளிக் செய்யவும்", clutter7:"CAPTCHA தோல்வி. மீண்டும் முயற்சிக்கவும்.",
    clutter_caption_1:"என்ன மாறுகிறது என்பதைக் காண ஸ்க்ரோல் செய்யவும்.",
    clutter_caption_2:"SAHAYAA குழப்பத்தை அகற்றுகிறது.",
    meet_eyebrow:"SAHAYAA-வை சந்திக்கவும்", meet_h2:"அன்றாட வாழ்க்கைக்கான அமைதியான துணைவன்.",
    orbit_voice:"குரல்", orbit_safety:"பாதுகாப்பு", orbit_family:"குடும்பம்", orbit_reminders:"நினைவூட்டல்கள்", orbit_help:"உதவி",
    voice_eyebrow:"குரல் துணைவன்", voice_h2:"பேசுங்கள் மட்டும்.",
    voice_lede:"தட்டச்சு செய்ய வேண்டிய அவசியமில்லை. ஒரு நபரிடம் பேசுவது போல் SAHAYAA-விடம் பேசுங்கள்.",
    voice_tap:"பேச தட்டவும்", voice_listening:"கேட்கிறது…", voice_thinking:"யோசிக்கிறது…",
    voice_greeting:"வணக்கம். இன்று நான் எப்படி உதவலாம்?",
    voice_input_label:"பதிலாக தட்டச்சு செய்யவும்", voice_placeholder:"அல்லது இங்கே தட்டச்சு செய்யவும்…",
    btn_send:"அனுப்பு",
    voice_not_supported:"இந்த உலாவியில் குரல் அங்கீகாரம் கிடைக்கவில்லை — தட்டச்சு செய்யவும்.",
    myday_eyebrow:"என் நாள்", myday_h2:"உங்கள் நாள், ஒரே பார்வையில்.",
    scam_eyebrow:"ஸ்கேம் ஷீல்ட்", scam_h2:"ஒரு செய்தி பற்றி உறுதியாக இல்லையா? முதலில் சரிபார்க்கவும்.",
    scam_lede:"இது ஒரு கல்வி கருவி. இது ஸ்கேமா என்று உறுதி செய்ய முடியாது — ஆனால் யோசிக்க உதவும்.",
    scam_sms:'"வாழ்த்துக்கள்! நீங்கள் ₹50,000 வென்றுள்ளீர்கள்! இப்போதே இந்த இணைப்பைக் கிளிக் செய்யவும்."',
    btn_check_msg:"இந்த செய்தியை சரிபார்க்க",
    scam_warning_title:"⚠️ இந்த செய்தி சந்தேகத்திற்குரியதாக இருக்கலாம்.",
    scam_warning_body:"எச்சரிக்கையாக இருங்கள். இது எதிர்பாராத பணத்தை வாக்குறுதி அளித்து ஒரு இணைப்பைக் கிளிக் செய்யச் சொல்கிறது. OTP, கடவுச்சொற்கள் அல்லது வங்கி விவரங்களை ஒருபோதும் பகிர வேண்டாம்.",
    btn_ask_trusted:"நம்பிக்கையான ஒருவரிடம் கேட்க", btn_back:"திரும்பு",
    scam_trusted_msg:"மீரா (மகள்) அறிவிக்கப்பட்டுள்ளார், விரைவில் இதை சேர்ந்து பார்க்க அழைப்பார்.",
    family_eyebrow:"குடும்ப இணைப்பு", family_h2:"முக்கியமான மக்கள், ஒரே தட்டில்.",
    call_action:"அழை", message_action:"செய்தி", video_action:"வீடியோ",
    call_sim:"{name}-ஐ அழைக்கிறது (சிமுலேஷன்) — உண்மையான அழைப்பு இல்லை.",
    msg_sim:"{name}-க்கு செய்தி அனுப்பப்பட்டது (சிமுலேஷன்).",
    video_sim:"{name}-உடன் வீடியோ தொடங்குகிறது (சிமுலேஷன்).",
    emg_eyebrow:"அவசர உதவி", emg_h2:"ஏதாவது தவறாக இருந்தால், உதவி ஒரே தட்டில் உள்ளது.",
    btn_get_help:"உதவி பெறவும்", emg_desc:"என் நம்பிக்கையான நபரைத் தொடர்பு கொள்ளவும்.",
    btn_im_safe:"நான் பாதுகாப்பாக இருக்கிறேன்", safe_confirm:"குறிப்பிடப்பட்டது. நீங்கள் பாதுகாப்பாக இருப்பது மகிழ்ச்சி.",
    emg_confirm_title:"உங்கள் நம்பிக்கையான நபரைத் தொடர்பு கொள்ள விரும்புகிறீர்களா?",
    emg_confirm_sub:"இது ஒரு முன்மாதிரி — உண்மையான அழைப்பு செய்யப்படாது.",
    btn_yes_call:"ஆம், அழைக்கவும்", btn_cancel:"ரத்து செய்",
    emg_called:"அர்ஜுன் (மகன்) இப்போது தொடர்பு கொள்ளப்படுகிறார் (சிமுலேஷன்).",
    dh_eyebrow:"டிஜிட்டல் உதவி", dh_h2:"தொழில்நுட்பத்தில் எனக்கு உதவுங்கள்.",
    btn_read_aloud:"படித்துக் காட்டு", btn_close:"மூடு",
    dp_eyebrow:"இது எப்படி வடிவமைக்கப்பட்டது", dp_h2:"மூத்தோருடன் சேர்ந்து வடிவமைக்கப்பட்டது.",
    demo_eyebrow:"நேரடி உதாரணம்", demo_h2:"சந்தேகத்திற்குரிய செய்தியிலிருந்து மன அமைதி வரை.",
    btn_restart_demo:"மீண்டும் தொடங்கு", btn_run_demo:"உதாரணத்தை இயக்கு",
    uj_eyebrow:"மாற்றம்", uj_h2:"SAHAYAA அனுபவத்தை எப்படி மாற்றுகிறது.",
    j1:"குழப்பம்", j2:"வழிகாட்டல்", j3:"பாதுகாப்பு", j4:"நம்பிக்கை", j5:"சுதந்திரம்",
    audit_eyebrow:"முன்மாதிரி அணுகல்தன்மை ஆய்வு", audit_h2:"இந்த முன்மாதிரி இன்று எங்கு நிற்கிறது.",
    ai_eyebrow:"AI மற்றும் அணுகல்தன்மை கேள்விகள்", ai_h2:"இந்த வடிவமைப்பை AI எப்படி வடிவமைக்க உதவியது.",
    footer_line:"தொழில்நுட்பம் மக்களுக்கு நம்பிக்கையை அளிக்க வேண்டும்.",
    ac_title:"அணுகல்தன்மை மையம்", ac_textsize:"எழுத்து அளவு", ac_medium:"நடுத்தரம்", ac_large:"பெரியது", ac_xlarge:"மிகப் பெரியது",
    ac_contrast:"மாறுபாடு", ac_standard:"நிலையான", ac_highcontrast:"அதிக மாறுபாடு",
    ac_voice:"குரல்", ac_voiceon:"குரல் இயக்கம்", ac_voiceoff:"குரல் நிறுத்தம்",
    ac_motion:"அசைவு", ac_normalmotion:"இயல்பான அசைவு", ac_reducemotion:"குறைந்த அசைவு",
    ac_language:"மொழி", ac_buttonsize:"பொத்தான் அளவு",
    done:"முடிந்ததாக குறிக்க", undone:"முடிந்தது ✓", speak:"படித்துக் காட்டு"
  }
};
let LANG = localStorage.getItem('sahayaa_lang') || 'en';

function t(key){
  return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
}

function applyI18n(){
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  document.getElementById('lang-en').setAttribute('aria-pressed', LANG==='en');
  document.getElementById('lang-ta').setAttribute('aria-pressed', LANG==='ta');
  document.querySelectorAll('[data-group="language"] .a11y-opt').forEach(b=>{
    b.setAttribute('aria-pressed', b.dataset.value === LANG);
  });
  renderMyDay();
  renderTutorials();
  renderPrinciples();
  renderFamily();
  renderDemoStep(demoIndex, true);
}

function setLang(l){
  LANG = l;
  localStorage.setItem('sahayaa_lang', l);
  applyI18n();
}
document.getElementById('lang-en').addEventListener('click', ()=>setLang('en'));
document.getElementById('lang-ta').addEventListener('click', ()=>setLang('ta'));

/* ------------------------- 2. ACCESSIBILITY ENGINE ------------------------ */
const A11Y_DEFAULTS = { textsize:"1", contrast:"standard", voice:"on", motion:"normal", btnsize:"1" };
let a11y = Object.assign({}, A11Y_DEFAULTS, JSON.parse(localStorage.getItem('sahayaa_a11y')||'{}'));

// Respect prefers-reduced-motion on first-ever visit
if(!localStorage.getItem('sahayaa_a11y') && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  a11y.motion = 'reduced';
}

function saveA11y(){ localStorage.setItem('sahayaa_a11y', JSON.stringify(a11y)); }

function applyA11y(){
  document.documentElement.style.setProperty('--step', a11y.textsize);
  document.documentElement.style.setProperty('--btn-step', a11y.btnsize);
  document.documentElement.setAttribute('data-contrast', a11y.contrast);
  document.documentElement.setAttribute('data-motion', a11y.motion);
  document.documentElement.style.setProperty('--motion', a11y.motion === 'reduced' ? 0 : 1);

  document.querySelectorAll('.a11y-opt').forEach(btn=>{
    const group = btn.parentElement.dataset.group;
    if(group && a11y[group] !== undefined){
      btn.setAttribute('aria-pressed', String(btn.dataset.value) === String(a11y[group]));
    }
  });
  document.getElementById('chip-textsize').setAttribute('aria-pressed', a11y.textsize !== "1");
  document.getElementById('chip-contrast').setAttribute('aria-pressed', a11y.contrast === "high");
  document.getElementById('chip-voice').setAttribute('aria-pressed', a11y.voice === "on");
  saveA11y();
}

document.querySelectorAll('.a11y-opt').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const group = btn.parentElement.dataset.group;
    if(group === 'language'){ setLang(btn.dataset.value); return; }
    a11y[group] = btn.dataset.value;
    applyA11y();
  });
});

// Quick hero chips
document.getElementById('chip-textsize').addEventListener('click', ()=>{
  const order = ["1","1.25","1.5"];
  const i = order.indexOf(a11y.textsize);
  a11y.textsize = order[(i+1) % order.length];
  applyA11y();
});
document.getElementById('chip-contrast').addEventListener('click', ()=>{
  a11y.contrast = a11y.contrast === 'high' ? 'standard' : 'high';
  applyA11y();
});
document.getElementById('chip-voice').addEventListener('click', ()=>{
  a11y.voice = a11y.voice === 'on' ? 'off' : 'on';
  applyA11y();
  if(a11y.voice==='on') document.getElementById('voice').scrollIntoView({behavior: a11y.motion==='reduced'?'auto':'smooth'});
});

// Accessibility Center panel open/close
const a11yBackdrop = document.getElementById('a11y-backdrop');
function openA11yPanel(){ a11yBackdrop.classList.add('open'); document.getElementById('close-a11y').focus(); }
function closeA11yPanel(){ a11yBackdrop.classList.remove('open'); }
document.getElementById('open-a11y-top').addEventListener('click', openA11yPanel);
document.getElementById('bottom-a11y-btn').addEventListener('click', (e)=>{ e.preventDefault(); openA11yPanel(); });
document.getElementById('close-a11y').addEventListener('click', closeA11yPanel);
a11yBackdrop.addEventListener('click', (e)=>{ if(e.target === a11yBackdrop) closeA11yPanel(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeA11yPanel(); });

document.getElementById('cta-explore').addEventListener('click', ()=>{
  document.getElementById('meet').scrollIntoView({behavior: a11y.motion==='reduced'?'auto':'smooth'});
});

/* smooth-scroll nav links honoring reduced motion */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      const el = document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior: a11y.motion==='reduced' ? 'auto':'smooth'}); }
    }
  });
});
document.querySelectorAll('[data-goto]').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.querySelector(b.dataset.goto).scrollIntoView({behavior: a11y.motion==='reduced'?'auto':'smooth'});
  });
});

/* --------------------- 3. THREE.JS SAHAYAA COMPANION ORB ------------------ */
function makeOrb(canvas, opts){
  opts = opts || {};
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0,0,6);

  function resize(){
    const w = canvas.clientWidth || canvas.parentElement.clientWidth;
    const h = canvas.clientHeight || w;
    renderer.setSize(w,h,false);
    camera.aspect = w/h; camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // Core sphere — warm lavender/white gradient via vertex colors
  const coreGeo = new THREE.IcosahedronGeometry(1.15, 5);
  const posAttr = coreGeo.attributes.position;
  const colors = [];
  const cLav = new THREE.Color(0x9B86D0);
  const cWhite = new THREE.Color(0xFBF7FF);
  for(let i=0;i<posAttr.count;i++){
    const y = posAttr.getY(i);
    const mix = (y + 1.15) / 2.3;
    const c = cWhite.clone().lerp(cLav, mix*0.85);
    colors.push(c.r,c.g,c.b);
  }
  coreGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors,3));
  const coreMat = new THREE.MeshPhongMaterial({vertexColors:true, shininess:60, transparent:true, opacity:0.95});
  const core = new THREE.Mesh(coreGeo, coreMat);
  scene.add(core);

  // Outer soft glow shell
  const glowGeo = new THREE.SphereGeometry(1.5, 32,32);
  const glowMat = new THREE.MeshBasicMaterial({color:0xC9B8F2, transparent:true, opacity:0.16, side:THREE.BackSide});
  const glow = new THREE.Mesh(glowGeo, glowMat);
  scene.add(glow);

  // Inner light core (bright warm point)
  const light1 = new THREE.PointLight(0xFFFFFF, 1.4, 10);
  light1.position.set(2,2,3);
  scene.add(light1);
  const light2 = new THREE.PointLight(0xD9C6F5, 0.9, 10);
  light2.position.set(-2,-1,2);
  scene.add(light2);
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));

  // small orbiting particles (calm, not sci-fi)
  const particleGeo = new THREE.BufferGeometry();
  const N = opts.particles || 26;
  const pPos = new Float32Array(N*3);
  const radii = [];
  for(let i=0;i<N;i++){
    const r = 1.7 + Math.random()*0.5;
    const theta = Math.random()*Math.PI*2;
    const phi = Math.acos((Math.random()*2)-1);
    pPos[i*3] = r*Math.sin(phi)*Math.cos(theta);
    pPos[i*3+1] = r*Math.sin(phi)*Math.sin(theta);
    pPos[i*3+2] = r*Math.cos(phi);
    radii.push(r);
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(pPos,3));
  const particleMat = new THREE.PointsMaterial({color:0xEFE6FF, size:0.045, transparent:true, opacity:0.7});
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', (e)=>{
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
  });

  let listening = false;
  this.setListening = (v)=>{ listening = v; };

  let t0 = 0;
  function animate(){
    requestAnimationFrame(animate);
    const reduceMotion = document.documentElement.getAttribute('data-motion') === 'reduced';
    t0 += reduceMotion ? 0.003 : 0.012;
    const floatAmt = reduceMotion ? 0.02 : 0.16;
    core.position.y = Math.sin(t0*1.3) * floatAmt;
    glow.position.y = core.position.y;
    const pulse = listening ? (1 + Math.sin(t0*7)*0.08) : (1 + Math.sin(t0*0.9)*0.02);
    core.scale.setScalar(pulse);
    glow.scale.setScalar(pulse*1.02);
    if(!reduceMotion){
      core.rotation.y += 0.0025;
      core.rotation.x = mouseY*0.25;
      core.rotation.y += mouseX*0.001;
      particles.rotation.y += 0.0016;
      camera.position.x += (mouseX*0.6 - camera.position.x)*0.03;
      camera.position.y += (-mouseY*0.4 - camera.position.y)*0.03;
      camera.lookAt(0,0,0);
    }
    light1.intensity = listening ? 1.9 + Math.sin(t0*8)*0.3 : 1.4;
    renderer.render(scene, camera);
  }
  animate();
  return this;
}

let webglOk = true;
try{
  const testCanvas = document.createElement('canvas');
  webglOk = !!(testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'));
}catch(e){ webglOk = false; }

let heroOrb=null, meetOrb=null;
if(webglOk){
  try{
    heroOrb = new makeOrb(document.getElementById('orb-hero'), {particles:18});
    meetOrb = new makeOrb(document.getElementById('orb-meet'), {particles:30});
  }catch(e){ webglOk = false; }
}
if(!webglOk){
  document.querySelectorAll('.hero-canvas-wrap, .meet-orb-wrap').forEach(el=>{
    el.innerHTML = '<div style="width:100%;height:100%;border-radius:50%;background:radial-gradient(circle at 35% 30%, #EFE6FF, #9B86D0);" aria-hidden="true"></div>';
  });
}

/* ------------------------------ 4. MY DAY --------------------------------- */
const MYDAY = [
  {time:"09:00", icon:"🩺", key:"myday1", en:"Doctor appointment", ta:"மருத்துவர் சந்திப்பு"},
  {time:"12:30", icon:"🍽️", key:"myday2", en:"Lunch reminder", ta:"மதிய உணவு நினைவூட்டல்"},
  {time:"16:00", icon:"📞", key:"myday3", en:"Call Meera", ta:"மீராவை அழைக்கவும்"},
  {time:"19:00", icon:"🚶", key:"myday4", en:"Evening walk", ta:"மாலை நடைபயிற்சி"}
];
const dayDone = JSON.parse(localStorage.getItem('sahayaa_day_done')||'{}');

function renderMyDay(){
  const grid = document.getElementById('myday-grid');
  grid.innerHTML = '';
  MYDAY.forEach(item=>{
    const done = !!dayDone[item.key];
    const card = document.createElement('div');
    card.className = 'card day-card';
    const desc = LANG==='ta' ? item.ta : item.en;
    card.innerHTML = `
      <div class="day-icon" aria-hidden="true">${item.icon}</div>
      <div style="flex:1">
        <div class="day-time">${item.time}</div>
        <div class="day-desc">${desc}</div>
        <div class="day-actions">
          <button class="btn btn-ghost" data-speak="${desc}">🔊 ${t('speak')}</button>
          <button class="btn ${done ? 'btn-primary':'btn-secondary'}" data-toggle-done="${item.key}">${done ? t('undone') : t('done')}</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
  grid.querySelectorAll('[data-toggle-done]').forEach(b=>{
    b.addEventListener('click', ()=>{
      const k = b.dataset.toggleDone;
      dayDone[k] = !dayDone[k];
      localStorage.setItem('sahayaa_day_done', JSON.stringify(dayDone));
      renderMyDay();
    });
  });
  grid.querySelectorAll('[data-speak]').forEach(b=>{
    b.addEventListener('click', ()=> speak(b.dataset.speak));
  });
}

/* ------------------------------ 5. SPEECH --------------------------------- */
function speak(text){
  if(a11y.voice === 'off') return;
  if(!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = LANG === 'ta' ? 'ta-IN' : 'en-IN';
  u.rate = 0.95;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

/* --------------------------- 6. VOICE COMPANION --------------------------- */
const micBtn = document.getElementById('mic-btn');
const micStatus = document.getElementById('mic-status');
const waveRow = document.getElementById('wave-row');
const transcript = document.getElementById('transcript');
const voiceForm = document.getElementById('voice-form');
const voiceText = document.getElementById('voice-text');

for(let i=0;i<14;i++){ const b=document.createElement('div'); b.className='wave-bar'; waveRow.appendChild(b); }
let waveTimer = null;
function animateWave(active){
  clearInterval(waveTimer);
  const bars = waveRow.querySelectorAll('.wave-bar');
  if(!active){ bars.forEach(b=>b.style.height='4px'); return; }
  waveTimer = setInterval(()=>{
    bars.forEach(b=> b.style.height = (6 + Math.random()*28) + 'px');
  }, 140);
}

function addMsg(text, who){
  const div = document.createElement('div');
  div.className = 'msg ' + who;
  div.textContent = text;
  transcript.appendChild(div);
  transcript.scrollTop = transcript.scrollHeight;
}

function botReply(userText){
  micStatus.textContent = t('voice_thinking');
  setTimeout(()=>{
    let reply;
    const lower = userText.toLowerCase();
    if(lower.includes('day') || lower.includes('today') || lower.includes('நாள்')){
      reply = LANG==='ta'
        ? "இன்று 9 மணிக்கு மருத்துவர் சந்திப்பு மற்றும் 4 மணிக்கு மீராவுடன் அழைப்பு உள்ளது."
        : "You have an appointment at 9 AM and a call with Meera at 4 PM.";
    } else if(lower.includes('help') || lower.includes('உதவி')){
      reply = LANG==='ta' ? "நிச்சயமாக. நீங்கள் என்ன செய்ய விரும்புகிறீர்கள் என்று சொல்லுங்கள்." : "Of course. Tell me what you'd like to do, and I'll guide you step by step.";
    } else if(lower.includes('scam') || lower.includes('message') || lower.includes('ஸ்கேம்')){
      reply = LANG==='ta' ? "சந்தேகத்திற்குரிய செய்தியா? கீழே உள்ள ஸ்கேம் ஷீல்டைப் பயன்படுத்தி சரிபார்க்கலாம்." : "If a message feels off, we can check it together using Scam Shield below.";
    } else {
      reply = LANG==='ta' ? "புரிந்தது. உங்களுக்கு மேலும் எப்படி உதவ முடியும்?" : "Got it. How else can I help you today?";
    }
    addMsg(reply, 'bot');
    speak(reply);
    micStatus.textContent = t('voice_tap');
  }, 700);
}

let recognizing = false;
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognizer = null;
if(SpeechRecognitionAPI){
  recognizer = new SpeechRecognitionAPI();
  recognizer.continuous = false;
  recognizer.interimResults = false;
  recognizer.onresult = (e)=>{
    const text = e.results[0][0].transcript;
    addMsg(text, 'user');
    botReply(text);
  };
  recognizer.onend = ()=>{
    recognizing = false;
    micBtn.classList.remove('listening');
    micBtn.setAttribute('aria-pressed','false');
    animateWave(false);
    if(heroOrb) heroOrb.setListening(false);
    if(meetOrb) meetOrb.setListening(false);
  };
  recognizer.onerror = ()=>{ recognizer.onend(); };
}

micBtn.addEventListener('click', ()=>{
  if(!recognizer){
    micStatus.textContent = t('voice_not_supported');
    return;
  }
  if(recognizing){ recognizer.stop(); return; }
  recognizer.lang = LANG === 'ta' ? 'ta-IN' : 'en-IN';
  recognizing = true;
  micBtn.classList.add('listening');
  micBtn.setAttribute('aria-pressed','true');
  micStatus.textContent = t('voice_listening');
  animateWave(true);
  if(heroOrb) heroOrb.setListening(true);
  if(meetOrb) meetOrb.setListening(true);
  try{ recognizer.start(); }catch(e){ /* already started guard */ }
});

voiceForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const val = voiceText.value.trim();
  if(!val) return;
  addMsg(val, 'user');
  voiceText.value = '';
  botReply(val);
});

/* --------------------------- 7. SCAM SHIELD -------------------------------- */
const scamResult = document.getElementById('scam-result');
const scamActions = document.getElementById('scam-actions');
document.getElementById('scam-check-btn').addEventListener('click', ()=>{
  scamResult.style.display = 'block';
  scamResult.innerHTML = `<strong>${t('scam_warning_title')}</strong><p style="margin-top:8px; font-weight:500;">${t('scam_warning_body')}</p>`;
  scamActions.style.display = 'flex';
  speak(t('scam_warning_title') + '. ' + t('scam_warning_body'));
});
document.getElementById('scam-ask-trusted').addEventListener('click', ()=>{
  scamResult.innerHTML = `<strong>${t('scam_warning_title')}</strong><p style="margin-top:8px; font-weight:500;">${t('scam_trusted_msg')}</p>`;
});
document.getElementById('scam-back').addEventListener('click', ()=>{
  scamResult.style.display = 'none';
  scamActions.style.display = 'none';
});

/* --------------------------- 8. FAMILY CONNECT ----------------------------- */
const FAMILY = [
  {name:"Meera", roleEn:"Daughter", roleTa:"மகள்", initial:"M"},
  {name:"Arjun", roleEn:"Son", roleTa:"மகன்", initial:"A"},
  {name:"Anita", roleEn:"Caregiver", roleTa:"பராமரிப்பாளர்", initial:"A"}
];
function renderFamily(){
  const web = document.getElementById('family-web');
  web.innerHTML = '';
  FAMILY.forEach(person=>{
    const role = LANG === 'ta' ? person.roleTa : person.roleEn;
    const div = document.createElement('div');
    div.className = 'family-card card';
    div.innerHTML = `
      <div class="avatar" aria-hidden="true">${person.initial}</div>
      <h3 style="margin-bottom:2px; font-size:var(--fs-lg);">${person.name}</h3>
      <div class="family-role">${role}</div>
      <div class="family-actions">
        <button class="icon-btn" data-action="call" data-name="${person.name}">📞 ${t('call_action')}</button>
        <button class="icon-btn" data-action="message" data-name="${person.name}">💬 ${t('message_action')}</button>
        <button class="icon-btn" data-action="video" data-name="${person.name}">🎥 ${t('video_action')}</button>
      </div>`;
    web.appendChild(div);
  });
  web.querySelectorAll('[data-action]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const templates = {call:'call_sim', message:'msg_sim', video:'video_sim'};
      const msg = t(templates[btn.dataset.action]).replace('{name}', btn.dataset.name);
      alert(msg);
    });
  });
}

/* --------------------------- 9. EMERGENCY HELP ----------------------------- */
const emgModal = document.getElementById('emg-modal');
document.getElementById('get-help-btn').addEventListener('click', ()=> emgModal.classList.add('open'));
document.getElementById('emg-cancel').addEventListener('click', ()=> emgModal.classList.remove('open'));
emgModal.addEventListener('click', (e)=>{ if(e.target===emgModal) emgModal.classList.remove('open'); });
document.getElementById('emg-yes').addEventListener('click', ()=>{
  emgModal.classList.remove('open');
  alert(t('emg_called'));
});
document.getElementById('im-safe-btn').addEventListener('click', ()=>{
  const p = document.getElementById('safe-confirm');
  p.style.display = 'block';
  speak(t('safe_confirm'));
});

/* --------------------------- 10. DIGITAL HELP ------------------------------ */
const TUTORIALS = [
  {icon:"📱", en:"How to use my phone", ta:"என் தொலைபேசியை எப்படி பயன்படுத்துவது",
    steps_en:["Press the round button to wake the screen.","Slide or tap to unlock.","Tap an app icon once to open it.","Press the home button to go back."],
    steps_ta:["திரையை எழுப்ப வட்ட பொத்தானை அழுத்தவும்.","திறக்க ஸ்லைடு அல்லது தட்டவும்.","ஆப் ஐகானை ஒருமுறை தட்டவும்.","திரும்ப செல்ல ஹோம் பொத்தானை அழுத்தவும்."]},
  {icon:"🖼️", en:"How to share a photo", ta:"புகைப்படத்தை எப்படி பகிர்வது",
    steps_en:["Open Photos.","Choose your photo.","Tap Share.","Choose the person."],
    steps_ta:["புகைப்படங்களைத் திறக்கவும்.","உங்கள் புகைப்படத்தைத் தேர்ந்தெடுக்கவும்.","பகிர் என்பதைத் தட்டவும்.","நபரைத் தேர்ந்தெடுக்கவும்."]},
  {icon:"💳", en:"How to make a digital payment safely", ta:"பாதுகாப்பாக டிஜிட்டல் பணம் செலுத்துவது எப்படி",
    steps_en:["Only use apps your bank recommends.","Never enter your PIN if someone else asks you to.","Double-check the amount before confirming.","Keep the receipt or confirmation message."],
    steps_ta:["உங்கள் வங்கி பரிந்துரைக்கும் ஆப்களை மட்டும் பயன்படுத்தவும்.","யாராவது கேட்டால் உங்கள் PIN-ஐ ஒருபோதும் உள்ளிட வேண்டாம்.","உறுதிப்படுத்தும் முன் தொகையை மீண்டும் சரிபார்க்கவும்.","ரசீது அல்லது உறுதிப்படுத்தல் செய்தியை வைத்திருங்கள்."]},
  {icon:"🔑", en:"How to create a safe password", ta:"பாதுகாப்பான கடவுச்சொல்லை உருவாக்குவது எப்படி",
    steps_en:["Use at least 8 characters.","Mix letters, numbers and a symbol.","Avoid birthdays or names.","Never share it, even with 'the bank'."],
    steps_ta:["குறைந்தது 8 எழுத்துகளைப் பயன்படுத்தவும்.","எழுத்துகள், எண்கள் மற்றும் சின்னத்தைக் கலக்கவும்.","பிறந்த தேதிகள் அல்லது பெயர்களைத் தவிர்க்கவும்.","'வங்கி' என்று சொன்னாலும் ஒருபோதும் பகிர வேண்டாம்."]},
  {icon:"🚩", en:"How to identify suspicious messages", ta:"சந்தேகத்திற்குரிய செய்திகளை அடையாளம் காண்பது எப்படி",
    steps_en:["Be cautious of urgent language like 'Act now!'","Be cautious of unexpected prizes or money.","Never click links from unknown senders.","Ask a trusted person if you're unsure."],
    steps_ta:["'இப்போதே செயல்படு!' போன்ற அவசர மொழியில் எச்சரிக்கையாக இருங்கள்.","எதிர்பாராத பரிசுகள் அல்லது பணத்தில் எச்சரிக்கையாக இருங்கள்.","அறியப்படாதவர்களின் இணைப்புகளை ஒருபோதும் கிளிக் செய்ய வேண்டாம்.","உறுதியாக இல்லையென்றால் நம்பிக்கையான நபரிடம் கேளுங்கள்."]},
  {icon:"🏛️", en:"How to use a government website", ta:"அரசு இணையதளத்தை எப்படி பயன்படுத்துவது",
    steps_en:["Check the address starts with the official domain.","Look for a lock icon in the address bar.","Never pay through a link sent by SMS.","Ask family to double-check before submitting forms."],
    steps_ta:["முகவரி அதிகாரப்பூர்வ டொமைனுடன் தொடங்குகிறதா எனச் சரிபார்க்கவும்.","முகவரிப் பட்டியில் பூட்டு ஐகானைத் தேடுங்கள்.","SMS மூலம் அனுப்பப்பட்ட இணைப்பு வழியாக ஒருபோதும் பணம் செலுத்த வேண்டாம்.","படிவங்களைச் சமர்ப்பிக்கும் முன் குடும்பத்தினரிடம் சரிபார்க்கச் சொல்லுங்கள்."]}
];
function renderTutorials(){
  const grid = document.getElementById('tutorial-grid');
  grid.innerHTML = '';
  TUTORIALS.forEach((tu, idx)=>{
    const title = LANG==='ta' ? tu.ta : tu.en;
    const card = document.createElement('div');
    card.className = 'card tutorial-card';
    card.tabIndex = 0;
    card.setAttribute('role','button');
    card.innerHTML = `<div class="icon" aria-hidden="true">${tu.icon}</div><div style="font-weight:700; font-size:var(--fs-lg);">${title}</div>`;
    const open = ()=> openTutorial(idx);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); }});
    grid.appendChild(card);
  });
}
const tutorialModal = document.getElementById('tutorial-modal');
function openTutorial(idx){
  const tu = TUTORIALS[idx];
  const title = LANG==='ta' ? tu.ta : tu.en;
  const steps = LANG==='ta' ? tu.steps_ta : tu.steps_en;
  document.getElementById('tutorial-modal-title').textContent = title;
  const list = document.getElementById('tutorial-steps');
  list.innerHTML = '';
  steps.forEach((s,i)=>{
    const li = document.createElement('li');
    li.innerHTML = `<span class="step-num">${i+1}</span><span>${s}</span>`;
    list.appendChild(li);
  });
  tutorialModal.classList.add('open');
  tutorialModal._steps = steps;
  tutorialModal._title = title;
}
document.getElementById('tutorial-close').addEventListener('click', ()=> tutorialModal.classList.remove('open'));
tutorialModal.addEventListener('click', (e)=>{ if(e.target===tutorialModal) tutorialModal.classList.remove('open'); });
document.getElementById('tutorial-read-aloud').addEventListener('click', ()=>{
  const full = tutorialModal._title + '. ' + (tutorialModal._steps||[]).join('. ');
  speak(full);
});

/* --------------------------- 11. DESIGN PRINCIPLES ------------------------- */
const PRINCIPLES = I18N.en.principles;
function renderPrinciples(){
  const list = document.getElementById('principles-list');
  list.innerHTML = '';
  PRINCIPLES.forEach((p,i)=>{
    const row = document.createElement('div');
    row.className = 'principle-row';
    row.innerHTML = `
      <div class="principle-num">${String(i+1).padStart(2,'0')}</div>
      <div class="principle-body">
        <h4>${p.t}</h4>
        <div class="principle-meta">
          <div><b>Problem</b>${p.p}</div>
          <div><b>Design decision</b>${p.d}</div>
          <div><b>Why it helps</b>${p.w}</div>
        </div>
      </div>`;
    list.appendChild(row);
  });
}

/* --------------------------- 12. PROBLEM SCROLL FX -------------------------- */
const clutterStage = document.getElementById('clutter-stage');
const clutterCaption = document.getElementById('clutter-caption');
let clutterSimplified = false;
function onScrollClutter(){
  const rect = clutterStage.getBoundingClientRect();
  const progress = 1 - (rect.top / window.innerHeight);
  const shouldSimplify = progress > 0.65;
  if(shouldSimplify !== clutterSimplified){
    clutterSimplified = shouldSimplify;
    clutterStage.classList.toggle('simplified', clutterSimplified);
    clutterCaption.setAttribute('data-i18n', clutterSimplified ? 'clutter_caption_2' : 'clutter_caption_1');
    clutterCaption.textContent = t(clutterSimplified ? 'clutter_caption_2' : 'clutter_caption_1');
  }
}
window.addEventListener('scroll', onScrollClutter, {passive:true});

/* --------------------------- 13. REAL-WORLD DEMO ---------------------------- */
let demoIndex = 0;
const demoStage = document.getElementById('demo-stage');
const demoDots = document.getElementById('demo-dots');
function renderDemoStep(i, silent){
  const steps = (I18N[LANG] && I18N[LANG].demo_steps) || I18N.en.demo_steps;
  demoIndex = Math.max(0, Math.min(i, steps.length-1));
  demoStage.innerHTML = `<span class="demo-step-label">STEP ${demoIndex+1} / ${steps.length}</span><p style="font-size:var(--fs-h3); font-family:var(--font-display); max-width:560px;">${steps[demoIndex]}</p>`;
  demoDots.innerHTML = '';
  steps.forEach((_,idx)=>{
    const dot = document.createElement('span');
    dot.className = 'demo-dot' + (idx===demoIndex ? ' active' : '');
    demoDots.appendChild(dot);
  });
  if(!silent) speak(steps[demoIndex]);
  document.getElementById('demo-next').disabled = demoIndex === steps.length-1;
}
document.getElementById('demo-next').addEventListener('click', ()=>{
  const steps = I18N[LANG].demo_steps || I18N.en.demo_steps;
  if(demoIndex < steps.length-1) renderDemoStep(demoIndex+1);
});
document.getElementById('demo-restart').addEventListener('click', ()=> renderDemoStep(0));

/* --------------------------------- INIT ------------------------------------- */
applyA11y();
applyI18n();
renderDemoStep(0, true);
