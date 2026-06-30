export default function EventsDay2() {
  const container = document.createElement('div');
  container.className = 'events-page-day-2';

  container.innerHTML = `
    <section class="events-list">
        <!-- <div class="scroll-prompt scroll-prompt-event">
          <span></span>
          <span></span>
          <span></span>
        </div> -->

        <div class="card-container">
          <div class="card-grid "> 
            <a href="/RockResonance" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/41.webp" alt="Rock Resonance">
              <div class="card-title">Rock <br /> Resonance</div>
            </a>

            <a href="/IqInterface" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/29.webp" alt="IQ Interface">
              <div class="card-title">IQ <br /> Interface</div>
            </a>

            <a href="/RunwayProtocol" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/18.webp" alt="Runway Protocol">
              <div class="card-title">Runway <br /> Protocol</div>
            </a>

            <a href="/VerbalCombat" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/14.webp" alt="Verbal Combat">
              <div class="card-title">Verbal <br /> Combat</div>
            </a>

            <a href="/PopPortraiture" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/32.webp" alt="Pop Portraiture">
              <div class="card-title">Pop <br /> Portraiture</div>
            </a>

            <a href="/AppocalypseDev" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/4.webp" alt="Appocalypse Dev">
              <div class="card-title">Appocalypse <br /> Dev</div>
            </a>

            <a href="/CyberSynth" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/22.webp" alt="Cyber Synth">
              <div class="card-title">Cyber <br /> Synth</div>
            </a>

            <a href="/ModelMint" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/27.webp" alt="Model Mint">
              <div class="card-title">Model <br /> Mint</div>
            </a>

            <a href="/ImProvex" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/23.webp" alt="Im Provex">
              <div class="card-title">Im <br /> Provex</div>
            </a>

            <a href="/FunkFaceoff" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/43.webp" alt="Funk Faceoff">
              <div class="card-title">Funk <br /> Faceoff</div>
            </a>

            <a href="/FloralFantasia" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/20.webp" alt="Floral Fantasia">
              <div class="card-title">Floral <br /> Fantasia</div>
            </a>

            <a href="/SynthSoiree" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/26.webp" alt="Synth Soirée">
              <div class="card-title">Synth <br /> Soirée</div>
            </a>

            <a href="/XportExe" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/33.webp" alt="Xport Exe">
              <div class="card-title">Xport <br /> Exe</div>
            </a>

            
   
          </div>
        </div>

    <!-- Fixed Right Button -->
    <button class="side-button left-button"><a href="/eventsDay1" data-link>&larr; Day 1</a></button>

    <!-- Fixed Right Button -->
    <button class="side-button right-button"><a href="/eventsBuffer" data-link>Axial &rarr;</a></button>

    <!-- page Center Label -->
    <div class="page-label">DAY TWO</div>
    
    </section>


  `;
 
  return container;
}
