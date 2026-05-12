export default function Events() {
  const container = document.createElement('div');
  container.className = 'events-page';

  container.innerHTML = `
    <section class="events-list">

        <div id="eventClickPrompt" class="eventClickPrompt hidden">
          Click any event to see its details
        </div>

        <div class="scroll-prompt scroll-prompt-event">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div class="card-container">
          <div class="card-grid ">
            <a href="/RagaResonance" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/16.webp" alt="Raga Resonance">
              <div class="card-title">Raga <br /> Resonance</div>
            </a>

            <a href="/RhythmRapture" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/13.webp" alt="Rhythm Rapture">
              <div class="card-title">Rhythm <br /> Rapture</div>
            </a>

            <a href="/IqInterface" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/29.webp" alt="IQ Interface">
              <div class="card-title">IQ <br /> Interface</div>
            </a>

            <a href="/MarketMake" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/2.webp" alt="Market Make">
              <div class="card-title">Market <br /> Make</div>
            </a>

            <a href="/SilverScreen" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/34.webp" alt="Silver Screen">
              <div class="card-title">Silver <br /> Screen</div>
            </a>

            <a href="/YkChronicles" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/17.webp" alt="YK Chronicles">
              <div class="card-title">YK <br /> Chronicles</div>
            </a>

            <a href="/StreetSaga" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/37.webp" alt="Street Saga">
              <div class="card-title">Street <br /> Saga</div>
            </a>

            <a href="/HuesShades" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/8.webp" alt="Hues Shades">
              <div class="card-title">Hues <br /> Shades</div>
            </a>

            <a href="/LuminaDigitalis" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/15.webp" alt="Lumina Digitalis">
              <div class="card-title">Lumina <br /> Digitalis</div>
            </a>

            <a href="/VocalVortex" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/1.webp" alt="Vocal Vortex">
              <div class="card-title">Vocal <br /> Vortex</div>
            </a>

            <a href="/LexSuprema" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/28.webp" alt="Lex Suprema">
              <div class="card-title">Lex <br /> Suprema</div>
            </a>

            <a href="/QuillCore" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/10.webp" alt="Quill Core">
              <div class="card-title">Quill <br /> Core</div>
            </a>

            <a href="/GlobalBites" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/9.webp" alt="Global Bites">
              <div class="card-title">Global <br /> Bites</div>
            </a>

            <a href="/CyberSynth" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/22.webp" alt="Cyber Synth">
              <div class="card-title">Cyber <br /> Synth</div>
            </a>

            <a href="/CircuitCircus" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/30.webp" alt="Circuit Circus">
              <div class="card-title">Circuit <br /> Circus</div>
            </a>

            <a href="/StrikeGlitch" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/19.webp" alt="Strike Glitch">
              <div class="card-title">Strike <br /> Glitch</div>
            </a>

            <a href="/VentureWarroom" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/36.webp" alt="Venture Warroom">
              <div class="card-title">Venture <br /> Warroom</div>
            </a>

            <a href="/EmpireRebuild" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/12.webp" alt="Empire Rebuild">
              <div class="card-title">Empire <br /> Rebuild</div>
            </a>

            <a href="/InkEcho" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/35.webp" alt="Ink Echo">
              <div class="card-title">Ink <br /> Echo</div>
            </a>

            <a href="/VerbalCombat" data-link class="card">
              <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/14.webp" alt="Verbal Combat">
              <div class="card-title">Verbal <br /> Combat</div>
            </a>
          </div>
        </div>

    <!-- Fixed Right Button -->
    <button class="side-button left-button"><a href="/repsEvent" data-link>&larr; Rep's</a></button>
    <button class="side-button right-button"><a href="/eventsDay2" data-link>Day 2 &rarr;</a></button> 
 
    <!-- page Center Label -->
    <div class="page-label">DAY ONE</div>
    
    </section>


  `;

  return container;
}
