export default function EventsBuffer() {
  const container = document.createElement('div');
  container.className = 'events-page-buffer';

  container.innerHTML = `
    <section class="events-list">
        <div class="card-container">  
          <div class="card-grid ">
            <!-- Repeat this block for each card -->
              <a href="/MotionHavoc" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/5.webp" alt="Motion Havoc">
                <div class="card-title">Motion <br /> Havoc</div>
              </a>

              <a href="/CheckMatrix" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/7.webp" alt="Check Matrix">
                <div class="card-title">Check <br /> Matrix</div>
              </a>

              <a href="/AcesRacquets" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/25.webp" alt="Aces Racquets">
                <div class="card-title">Aces <br /> Racquets</div>
              </a>

              <a href="/HoopHavoc" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/6.webp" alt="Hoop Havoc">
                <div class="card-title">Hoop <br /> Havoc</div>
              </a>

              <a href="/BalanceBase" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/42.webp" alt="Balance Base">
                <div class="card-title">Balance <br /> Base</div>
              </a>

              <a href="/SpikeAttack" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/40.webp" alt="Spike Attack">
                <div class="card-title">Spike <br /> Attack</div>
              </a>

              <a href="/CrypticCraft" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/31.webp" alt="Cryptic Craft">
                <div class="card-title">Cryptic <br /> Craft</div>
              </a>

              <a href="/DojoCircuit" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/24.webp" alt="Dojo Circuit">
                <div class="card-title">Dojo <br /> Circuit</div>
              </a>

              <a href="/PingpongPrism" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/39.webp" alt="Pingpong Prism">
                <div class="card-title">Pingpong <br /> Prism</div>
              </a>

              <a href="/AquaSprint" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/38.webp" alt="Aqua Sprint">
                <div class="card-title">Aqua <br /> Sprint</div>
              </a>

              <a href="/GoalBlitz" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/21.webp" alt="Goal Blitz">
                <div class="card-title">Goal <br /> Blitz</div>
              </a>

              <a href="/PitchProtocol" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/11.webp" alt="Pitch Protocol">
                <div class="card-title">Pitch <br /> Protocol</div>
              </a>

              <a href="/SpikeAttack" data-link class="card">
                <img src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/logos/40.webp" alt="Spike Attack">
                <div class="card-title">Spike <br /> Attack</div>
              </a>
          </div>
        </div>
 
    <!-- Fixed Right Button -->
    <button class="side-button left-button"><a href="/eventsDay2" data-link>&larr; Day 2 </a> </button>

    <!-- page Center Label -->
    <div class="page-label">AXIAL WEEK</div>
    
    </section>


  `;

  return container;
}
