export default function Team() {
  const container = document.createElement('div');
  container.className = 'team-page';

  container.innerHTML = `
    <div class="homeBg"></div>
    <section class="CoreCommittee">
      
      <div class="scroll-prompt team R">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="scroll-prompt team L">
        <span></span>
        <span></span>
        <span></span>
      </div>


      <div class="CoreColumn Grid Left">
        <div class="CoreCard Shubhashree" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/Shubhashree.webp'); "></div>
        <div class="CoreCard Riddhiman" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/Riddhiman.webp'); "></div>
        <div class="CoreCard Arush" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/Arush.webp'); "></div>
        <div class="CoreCard Aviral" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/Aviral.webp'); "></div>
      </div>
      <div class="CoreColumn Focus">
        <div class="SectionTitle">
        Core Committee
        </div>
        <div class="Highlighted core">
        </div>
      </div>
      <div class="CoreColumn Grid Right">
        <div class="CoreCard Sagarika" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/Sagarika.webp'); "></div>
        <div class="CoreCard Aahana" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/Aahana.webp'); "></div>
        <div class="CoreCard Saanvi" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/Saanvi.webp'); "></div>
      </div>
    </section>
    <section class="TechTeam">
      <div class="SectionTitle Tech">
        Tech Team
      </div>
      <div class="WTCardContainer">
        <div class="WTCard Piyush" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/Piyush.webp'); "></div>
        <div class="WTCard Srinjani" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/Srinjani.webp'); "></div>
        <div class="WTCard Ujan" style="background-image: url('https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/Ujan.webp'); "></div>
      </div>
    </section>
    <!--<div class="ComingSoon"></div>-->
  `;

  return container;
}
 