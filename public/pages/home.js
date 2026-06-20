
export default function Home() {
  const container = document.createElement('div');
  container.className = 'home';

  container.innerHTML = `
    <div class="homeBg"></div>
    <div id="canvasContainer"><canvas id="canvas3d"></canvas></div>
    <div class="home-banner">
      <div class="welcome">9TH & 10TH JULY</div>
      <div class="title">YUVAKARSHAN</div>
      <div class="subtitle">2K26</div>
      <div class="tagline"> 
        <span style="
            background: linear-gradient(90deg, #00e5ff 0%, #7dff7d 40%, #b6ff00 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        ">
            MYTH
        </span>

        <span style="color:white;"> • </span>

        <span style="
            background: linear-gradient(90deg, #fff27a 0%, #ffc04d 40%, #ff7a18 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        ">
            MAGIC
        </span>

        <span style="color:white;"> • </span>

        <span style="
            background: linear-gradient(90deg, #ff4fd8 0%, #c86bff 40%, #4da6ff 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        ">
            MAYHEM
        </span>
     </div>
    </div> 
    
    <div class="scroll-prompt">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="YuvaHistContainer">
      <div class="YuvaHist Title">
        From the Yuvakarshan Directors' Desk
      </div>
      <p class="YuvaHist">
         Derived from the Sanskrit term Yuvakarshan, meaning “the magnetic pull of the youth”, this fest serves as a tribute to youthful energy, intellectual curiosity, artistic expression, and an indomitable spirit. With Yuvakarshan 2K26, the fest evolves into a dynamic new dimension <b>Neon Nexus</b>, a vibrant convergence of electrifying energy, futuristic imagination and limitless connections. 
      </p>
      <p class="YuvaHist">
      Yuvakarshan 2K26 is envisioned as a dynamic fusion of creativity, competition, innovation, and youthful ambition. Under the electrifying banner of Neon Nexus, the fest is designed as a multidimensional platform where talent from every domain converges, connects, and shines. 
      </p>
      <p class="YuvaHist">
              To celebrate the limitless spectrum of expression and skill, the fest is organized into three powerful thematic divisions:
        <br><br> 
          <span style="
              background: linear-gradient(90deg, #00e5ff 0%, #7dff7d 50%, #b6ff00 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              font-weight: bold;
          ">
              &ensp; ✧ Myth
          </span>

          <span style="color:white; font-style:italic;">
              — A high-energy arena dedicated to Sports & E-Sports, where strategy,
              teamwork, adrenaline, and competitive spirit collide in an atmosphere
              charged with intensity and glory.
          </span>

          <br>

          <span style="
              background: linear-gradient(90deg, #fff27a 0%, #ffc04d 50%, #ff7a18 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              font-weight: bold;
          ">
              &ensp; ✧ Magic
          </span>

          <span style="color:white; font-style:italic;">
              — A vibrant celebration of Creative Arts, showcasing imagination,
              performance, music, dance, and artistic brilliance that transforms
              ideas into unforgettable experiences.
          </span>

          <br>

          <span style="
              background: linear-gradient(90deg, #ff4fd8 0%, #c86bff 50%, #4da6ff 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              font-weight: bold;
          ">
              &ensp; ✧ Mayhem
          </span>

          <span style="color:white; font-style:italic;">
              — A bold hub for Skill-Based Arts, Tech & Science, and Commerce,
              where innovation meets chaos, pushing boundaries through intellect,
              experimentation, entrepreneurship, and technical mastery.
          </span>

          <br>
        Each division reflects a unique dimension of the Neon Nexus universe, a world illuminated by ambition, powered by creativity, and driven by the unstoppable energy of the next generation.
      </p>
    </div>
    <div class="HomeNav">
      <div class="HomeNavGrid">
        <div class="grid-item left" style="grid-row: 1; grid-column: 1;">
          <a href="/eventsDay1" data-link>Events</a>
        </div>
        <div class="grid-item left" style="grid-row: 2; grid-column: 1;">
          <a href="/team" data-link>Team</a>
        </div>
        <div class="grid-item left" style="grid-row: 3; grid-column: 1;">
          <a href="/noticeBoard" data-link>NOTICE BOARD</a>
        </div>
        <div class="grid-item right first" style="grid-row: 1; grid-column: 2;">
          <a href="/gallery" data-link>Gallery</a>
        </div>
        <div class="grid-item right" style="grid-row: 2; grid-column: 2;">
          <a href="https://instagram.com/yuvakarshan_2k26/" >Socials</a>
        </div>
        <div class="grid-item right" style="grid-row: 3; grid-column: 2;">
          <a href="/lotteryResults" data-link>LOTTERY RESULTS</a>
        </div>
      </div>
      <img class="HomeNavFrame" loading="eager" src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/HomeNavFrame.webp"></img>
    </div>
    <div class="dpsnHist">
      <div class="dpsnHistText"> DPS Newtown, under the aegis of the DPS society is a state-of-the-art modern school, the only DPS situated in the heart of Newtown. Spread over a sprawling 12-acre plush campus, the school is equipped with the best of amenities, giving the students ample opportunities to manifest their talents. <br><br>
      Since its inception on 25th April 2005, the school has striven to provide a holistic education experience that ensures high standards of academic excellence complemented by a kaleidoscope of co-curricular activities. The focus is on nurturing well-rounded personalities with the skills to excel in the world they will inherit in time.</div>
      <div class="dpsnHistTitle">ABOUT OUR SCHOOL</div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <a href="https://www.instagram.com/yuvakarshan_2k26/" target="_blank" rel="noopener" aria-label="Instagram" class="footer-icon instagram" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
          </svg>
        </a>
        <div class="footerText">
        <p>&copy; ${new Date().getFullYear()} YUVAKARSHAN DPSN. All rights reserved.</p>
        <div class="sign">Made by Riddhiman Ghosh, Aviral Kochgaway and Ujan Datta.</div>
        </div>

        
        <a href="mailto:yuvakarshan@dpsn.org.in" aria-label="Email" class="footer-icon email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
          </svg>
        </a>
      </div>

    </div>
  `;

  return container;
}

 