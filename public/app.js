import Home from './pages/home.js';
import GeneralGuidelines from './pages/generalGuidelines.js';
import Events from './pages/events/day1.js';
import EventsDay2 from './pages/events/day2.js';
import EventsBuffer from './pages/events/buffer.js';
import Gallery from './pages/gallery.js';
import Team from './pages/team.js';
import Navbar from './components/navbar.js';
import repsEvent from './pages/events/repsEvent.js';
import eventDetails from './pages/eventDetails.js';
import LotteryResults from './pages/lotteryResults.js';
import Registration from './pages/registration.js';

import { Application } from 'https://unpkg.com/@splinetool/runtime@1.10.27/build/runtime.js';
import NoticeBoard from './pages/noticeBoard.js';

let ClickPromptShown = false;

// Fallback 404 component
function NotFound() {
  const div = document.createElement('div');
  div.innerHTML = '<h1>404 - Page Not Found</h1>';
  return div;
}


// Route definitions
const routes = {
  '/': Home,
  '/home': Home,
  '/generalGuidelines': GeneralGuidelines,
  '/repsEvent': repsEvent,
  '/eventsDay1': Events,
  '/eventsDay2': EventsDay2,
  '/eventsBuffer': EventsBuffer,
  '/gallery': Gallery,
  '/team': Team,
  '/lotteryResults': LotteryResults,
  '/noticeBoard': NoticeBoard,
  '/registration': Registration,

  '/VocalVortex': eventDetails,
  '/MarketMake': eventDetails,
  '/LyricLoop': eventDetails,
  '/AppocalypseDev': eventDetails,
  '/MotionHavoc': eventDetails,
  '/HoopHavoc': eventDetails,
  '/CheckMatrix': eventDetails,
  '/HuesShades': eventDetails,
  '/GlobalBites': eventDetails,
  '/QuillCore': eventDetails,
  '/PitchProtocol': eventDetails,
  '/EmpireRebuild': eventDetails,
  '/RhythmRapture': eventDetails,
  '/VerbalCombat': eventDetails,
  '/LuminaDigitalis': eventDetails,
  '/RagaResonance': eventDetails,
  '/YkChronicles': eventDetails,
  '/RunwayProtocol': eventDetails,
  '/StrikeGlitch': eventDetails,
  '/FloralFantasia': eventDetails,
  '/GoalBlitz': eventDetails,
  '/CyberSynth': eventDetails,
  '/ImProvex': eventDetails,
  '/DojoCircuit': eventDetails,
  '/AceRacquets': eventDetails,
  '/SynthSoiree': eventDetails,
  '/ModelMint': eventDetails,
  '/LexSuprema': eventDetails,
  '/IqInterface': eventDetails,
  '/CircuitCircus': eventDetails,
  '/CrypticCraft': eventDetails,
  '/PopPortraiture': eventDetails,
  '/XportExe': eventDetails,
  '/SilverScreen': eventDetails,
  '/InkEcho': eventDetails,
  '/VentureWarroom': eventDetails,
  '/StreetSaga': eventDetails,
  '/AquaSprint': eventDetails,
  '/PingpongPrism': eventDetails,
  '/SpikeAttack': eventDetails,
  '/RockResonance': eventDetails,
  '/BalanceBase': eventDetails,
  '/FunkFaceoff': eventDetails,
};

// Normalize path (removes trailing slash, ensures fallback to "/")
function normalizePath(path) {
  return path.replace(/\/+$/, '') || '/';
}

// Render the correct page based on path
function render(path) {
  const app = document.getElementById('app');

  window.scrollTo(0, 0);

  const normalized = normalizePath(path);
  const Page = routes[normalized] || NotFound;
  const isPortrait = window.innerHeight > window.innerWidth;

  app.innerHTML = '';
  app.appendChild(Page());

  eventDetailsScroll();

const scrollPrompts = document.querySelectorAll('.scroll-prompt');

scrollPrompts.forEach(scrollPrompt => {
  scrollPrompt.addEventListener('click', () => {
    window.scrollBy({
      top: 1.3 * window.innerHeight,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const threshold = 0.2 * window.innerHeight;

  scrollPrompts.forEach(scrollPrompt => {
    const isActive = scrollPrompt.classList.contains('active');

    if (scrollY > threshold && !isActive) {
      scrollPrompt.classList.add('active');
    } else if (scrollY <= threshold && isActive) {
      scrollPrompt.classList.remove('active');
    }
  });
});

  //for events page

  const eventContainer = document.querySelector('.card-grid');

  if (eventContainer) {
    eventContainer.addEventListener('scroll', () => {
      const scrollY = eventContainer.scrollTop;
      const threshold = 0.05 * eventContainer.clientHeight;

      const isActive = scrollPrompt.classList.contains('active');

      if (scrollY > threshold && !isActive) {
        scrollPrompt.classList.add('active');
      } else if (scrollY <= threshold && isActive) {
        scrollPrompt.classList.remove('active');
      }
    });
  }


  if (normalized === '/' || normalized === '/home') {
      const container = document.getElementById('canvasContainer');
      const canvas = document.getElementById('canvas3d');
      const app = new Application(canvas);

      if (isPortrait) {
          app.load('https://prod.spline.design/I8bIE3VFK0-v5b2B/scene.splinecode').then(() => {
          document.getElementById('loader').classList.add('fade-out');
          const targetObject = app.findObjectByName('yuva');
          handlePortraitScroll(targetObject, window.scrollY || window.pageYOffset);
          window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || window.pageYOffset;
            handlePortraitScroll(targetObject, scrollY);
          });
        });
      } 
      else {
        app.load('https://prod.spline.design/bgX-AFhVeuMiutiB/scene.splinecode').then(() => {
        document.getElementById('loader').classList.add('fade-out');
        let size = (window.innerWidth/1366)*2.6;
        app.setVariable('Size', size);
        const targetObject = app.findObjectByName('yuva');
        handleLandscapeScroll(targetObject, window.scrollY || window.pageYOffset);

        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY || window.pageYOffset;
          handleLandscapeScroll(targetObject, scrollY);
        });
        });   
        
      }


      let state = "base";

      function handleLandscapeScroll(targetObject, scrollY) {
        const h = window.innerHeight;

        if ((scrollY < h * 0.3) && state !== "base") {
          app.setVariable('States', 0);
          state = "base";
        } 
        else if (scrollY >= h * 0.3 && scrollY < h * 3) {
          if (state === "base") {
            app.setVariable('States', 1);
            state = "left";
          } else if (state === "down") {
            app.setVariable('States', -1);
            state = "left";
          }
        }
        else if (scrollY >= h * 3) {
          if (state !== "down") {
            app.setVariable('States', 2);
            state = "down";
          }
        }
        container.classList.toggle("active", scrollY >= h * 3.6);
      } 

      function handlePortraitScroll(targetObject, scrollY) {
        const h = window.innerHeight;

        if ((scrollY < h * 0.1) && state !== "base") {
          app.setVariable('States', 0);
          state = "base";
        } 
        else if (scrollY >= h * 0.1 && scrollY < h * 3.15) {
          if (state === "base") {
            app.setVariable('States', 1);
            state = "left";
          } else if (state === "down") {
            app.setVariable('States', -1);
            state = "left";
          }
        }
        else if (scrollY >= h * 3.15) {
          if (state !== "down") {
            app.setVariable('States', 2);
            state = "down";
          }
        }
        container.classList.toggle("active", scrollY >= h * 3.2);
      } 


  }

  if (normalized === '/team') {
let lastHiddenCard = null;

const coreCards = [...document.querySelectorAll('.CoreCard')];

const leftGrid = document.querySelector('.CoreColumn.Left');
const rightGrid = document.querySelector('.CoreColumn.Right');

function distributeCards() {

  // clear both columns
  leftGrid.innerHTML = '';
  rightGrid.innerHTML = '';

  // remove highlighted card from layout list
  const visibleCards = coreCards.filter(
    card => card !== lastHiddenCard
  );

  // alternate cards into left/right columns
  visibleCards.forEach((card, index) => {

    card.style.display = 'flex';
    if(isPortrait) {rightGrid.appendChild(card);} 
    else {
      if (index % 2 === 0) {
        leftGrid.appendChild(card);
      } else {
        rightGrid.appendChild(card);
      }
    }

  });

  // hide highlighted card
  if (lastHiddenCard) {
    lastHiddenCard.style.display = 'none';
  }
}

const shubhashreeCard = document.querySelector('.CoreCard.Shubhashree');

if (shubhashreeCard) {
  updateHighlighted(shubhashreeCard);
  lastHiddenCard = shubhashreeCard;
}

distributeCards();

coreCards.forEach(card => {

  card.addEventListener('click', () => {

    if (card === lastHiddenCard) return;

    updateHighlighted(card);

    lastHiddenCard = card;

    distributeCards();

  });

});

function updateHighlighted(card) {

  const highlight =
    document.querySelector('.Highlighted.core');

  if (card && highlight) {

    const bgImage =
      window.getComputedStyle(card).backgroundImage;

    highlight.style.backgroundImage = bgImage;
    highlight.style.backgroundSize =
      (isPortrait) ? '100%' : '90%';

    highlight.style.backgroundRepeat = 'no-repeat';
    highlight.style.backgroundPosition = 'bottom';
  }
}

    VanillaTilt.init(document.querySelectorAll(".Highlighted"), {
      max: 15,
      speed: 500,
      glare: true,
      "max-glare": 0.0,
      scale: 1.08, 
    });

    VanillaTilt.init(document.querySelectorAll(".WTCard"), {
      max: 15,
      speed: 2000,
      glare: true,
      "max-glare": 0,
      scale: 1.08,
    });
  }

  if (normalized === '/eventsDay1') {
    const prompt = document.getElementById('eventClickPrompt');

    if (prompt && !ClickPromptShown) {
      ClickPromptShown = true;

      prompt.classList.remove('hidden');

      // Auto-hide after 3 seconds
      setTimeout(() => {
        prompt.classList.add('hidden');
      }, 3000);

      // Optional: allow manual dismiss on click
      prompt.addEventListener('click', () => {
        prompt.classList.add('hidden');
      });
    }
  }

  if (normalized === "/registration") {
    initializeRegistration();
  }
  if (normalized !== '/home' && normalized!== '/') {
  document.getElementById('loader').classList.add('fade-out');}
}

function initializeRegistration() {
    const SEGMENTS = {
      myth: {
        formUrl: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeEwLAxxGl5eKHzBRjaF4tjm1li9j5tHCxqqjyXfourYbLHyg/viewform?embedded=true",
        height: "22000px",
        events: [
          { name: "ace.racquets [Boys]", scroll: 750 },
          { name: "ace.racquets [Girls]", scroll: 1366 },
          { name: "aqua.sprint [Boys]", scroll: 1990 },
          { name: "aqua.sprint [Girls]", scroll: 2909 },
          { name: "balance.base [Boys]", scroll: 3833 },
          { name: "balance.base [Girls]", scroll: 4645 },
          { name: "check.matrix", scroll: 5490 },
          { name: "dojo.circuit", scroll: 6010 },
          { name: "goal.blitz [Boys]", scroll: 6444 },
          { name: "goal.blitz [Girls]", scroll: 8536 },
          { name: "hoop.havoc", scroll: 10634 },
          { name: "motion.havoc [Boys]", scroll: 12066 },
          { name: "motion.havoc [Girls]", scroll: 13221 },
          { name: "pingpong.prism", scroll: 14388 },
          { name: "pitch.protocol", scroll: 15133 },
          { name: "spike.attack [Boys]", scroll: 16863 },
          { name: "spike.attack [Girls]", scroll: 18988 },
          { name: "strike.glitch", scroll: 21114 },
          { name: "SUBMIT", scroll: 21400 }
        ]
      },

      magic: {
        formUrl: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdv46AkCmgwdTbsL66HpwOM89EH_4pL66jQlbCJdQwbIWGHbA/viewform?embedded=true",
        height: "12200px",
        events: [
          { name: "global.bites", scroll: 651 },
          { name: "quill.core", scroll: 1088 },
          { name: "funk.faceoff", scroll: 1530 },
          { name: "lyric.loop", scroll: 1972 },
          { name: "raga.resonance", scroll: 2430 },
          { name: "rhythm.rapture", scroll: 3843 },
          { name: "market.make", scroll: 5420 },
          { name: "yk.chronicles", scroll: 6313 },
          { name: "rock.resonance", scroll: 6906 },
          { name: "vocal.vortex", scroll: 8310 },
          { name: "iq.interface", scroll: 9260 },
          { name: "floral.fantasia", scroll: 9849 },
          { name: "lumina.digitalis", scroll: 10288 },
          { name: "im.provex", scroll: 10725 },
          { name: "hues.shades", scroll: 11174 },
          { name: "pop.portraiture", scroll: 11461 },
          { name: "SUBMIT", scroll: 11700 }
        ]
      },

      mayhem: {
        formUrl: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScHbqPa56zaIFrJ7kRl_tde1WLEAJukXE95gvCFHQSp7Gc3Ng/viewform?embedded=true",
        height: "11400px",
        events: [
          { name: "runway.protocol", scroll: 654 },
          { name: "ink.echo", scroll: 2182 },
          { name: "verbal.combat", scroll: 2473 },
          { name: "lex.suprema", scroll: 2753 },
          { name: "street.saga", scroll: 3341 },
          { name: "silver.screen", scroll: 4750 },
          { name: "synth.soirée", scroll: 6454 },
          { name: "empire.rebuild", scroll: 7046 },
          { name: "xport.exe", scroll: 7483 },
          { name: "venture.warroom", scroll: 7923 },
          { name: "appocalypse.dev", scroll: 8362 },
          { name: "cyber.synth", scroll: 8804 },
          { name: "circuit.circus", scroll: 9238 },
          { name: "cryptic.craft", scroll: 9655 },
          { name: "model.mint", scroll: 10250 },
          { name: "SUBMIT", scroll: 10725 }
        ]
      }
    };

  const iframe = document.getElementById("registrationForm");
  const eventNav = document.getElementById("eventNav");

  if (!iframe || !eventNav) return;

  function buildEventList(events) {
    eventNav.innerHTML = "";

    events.forEach(({ name, scroll }) => {
      const button = document.createElement("button");
      const container = document.querySelector('.registration');
      const wrapper = container.querySelector('.regFormWrapper');

      button.className = "regEvent";
      button.textContent = name;

      // store scroll target
      button.dataset.scroll = scroll;

      button.addEventListener("click", () => {
        wrapper.scrollTo({
          top: Number(scroll),
          behavior: "smooth"
        });
      });

      eventNav.appendChild(button);
    });
  }

  function loadSegment(segment) {

    const config = SEGMENTS[segment];
    iframe.src = config.formUrl;
    iframe.style.height = config.height;

    buildEventList(config.events);

  }

  document.querySelectorAll(".regTab").forEach(tab => {

    tab.addEventListener("click", () => {

      document
        .querySelectorAll(".regTab")
        .forEach(t => t.classList.remove("active"));

      tab.classList.add("active");

      loadSegment(tab.dataset.segment);

    });

  });

  loadSegment("myth");
}



// Setup SPA-style routing
function setupRouter() {
  const navbarContainer = document.getElementById('navbar');
  navbarContainer.innerHTML = '';
  navbarContainer.appendChild(Navbar());

  // Intercept link clicks
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const path = new URL(e.target.href).pathname;
      const normalized = normalizePath(path);
      history.pushState(null, '', normalized);
      document.getElementById('loader').classList.remove('fade-out');
      render(normalized);
    }
  });

  // Handle back/forward buttons
  window.addEventListener('popstate', () => render(normalizePath(location.pathname)));

  // Initial render
  render(location.pathname);
}

setupRouter();

// Hamburger menu toggle
const hamburger = document.querySelector('.nav-hamburger');
const navRight = document.querySelector('.nav-right');
const links = document.querySelectorAll('.nav-link');

hamburger?.addEventListener("click", () => {
  navRight.classList.toggle("active");
  hamburger.classList.toggle("active");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navRight.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});





// Intersection observer for .YuvaHist elements
function observeYuvaHist() {
  const targets = document.querySelectorAll('.YuvaHist');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.2 });

  targets.forEach(target => observer.observe(target));
}

// Observe on load and DOM changes
document.addEventListener("DOMContentLoaded", observeYuvaHist);
window.addEventListener("load", observeYuvaHist);
const bodyObserver = new MutationObserver(() => observeYuvaHist());
bodyObserver.observe(document.body, { childList: true, subtree: true });


function observeCards() {
  const cards = document.querySelectorAll('.WTCard');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fly-in');
      } else {
        entry.target.classList.remove('fly-in'); // optional: remove if you want replay on scroll
      }
    });
  }, { threshold: 0.4 });

  cards.forEach(card => observer.observe(card));
}

// Observe on load and DOM changes
document.addEventListener("DOMContentLoaded", observeCards);
window.addEventListener("load", observeCards);
const cardMutationObserver = new MutationObserver(() => observeCards());
cardMutationObserver.observe(document.body, { childList: true, subtree: true });

function eventDetailsScroll() {
  const desc = document.querySelector('.event-description');
  const scrollContainer = document.querySelector('.eventDetailsBg');

  if (!desc || !scrollContainer) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0.7) {
        desc.classList.add('unscrolled');
      } else if (ratio < 0.2) {
        desc.classList.remove('unscrolled');
      }

      // Optional: console.log visibility for debugging
      // console.log("Visibility:", ratio);
    });
  }, {
    root: scrollContainer,
    threshold: [0, 0.2, 0.7, 1] // observe at key %s
  });

  observer.observe(desc);
}

document.addEventListener("DOMContentLoaded", eventDetailsScroll);
window.addEventListener("load", eventDetailsScroll);
