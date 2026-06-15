
export default function Registration() {
  const container = document.createElement('div');
  container.className = 'registration';

  if (0.6*window.innerWidth < window.innerHeight) {
    container.innerHTML = `
      <div class="homeBg"></div>
      <section class="noticeBoardContainer">
        <div class="YuvaHist Title Headers Registration" style="width: 80vw !important;">REGISTRATION is only supported on laptop or desktop.</div>
      </section>
    `;
    return container;
  }
  container.innerHTML =`
    <div class="homeBg"></div>
    <section class="noticeBoardContainer">
      <div class="YuvaHist Title Headers Registration">REGISTRATION</div>
      <div class="regFormContainer">
      <div class="regFormWrapper">
        <iframe class="regForm" src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfC4puBKDJNUTs3TPCl2kCg82cgQoDHpfodRHbLOO8zNfK5PA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" loading="lazy">Loading…</iframe>
      </div>
      <div class="regNavContainer">
        <div class="YuvaHist Title Headers RegistrationP">EVENT NAVIGATION</div>
        <div class="notice-container">

          <div class="notice">
              <div class="accordion">
                <button class="accordion-button">MYTH<div class="accordion-arrow"></div></button>
                <div class="accordion-content">
                  <button class="regEvent" data-scroll="795">ace.racquets [Boys]</button>
                  <button class="regEvent" data-scroll="1416">ace.racquets [Girls]</button>
                  <button class="regEvent" data-scroll="2032">aqua.sprint</button>
                  <button class="regEvent" data-scroll="2316">balance.base [Boys]</button>
                  <button class="regEvent" data-scroll="3118">balance.base [Girls]</button>
                  <button class="regEvent" data-scroll="3910">check.matrix</button>
                  <button class="regEvent" data-scroll="4413">dojo.circuit</button>
                </div>
              </div>
          </div>
          <div class="notice">
              <div class="accordion">
                <button class="accordion-button">MAGIC<div class="accordion-arrow"></div></button>
                <div class="accordion-content">
                  <button class="regEvent" data-scroll="1200">EVENT 1</button>
                </div>
              </div>
          </div>
          <div class="notice">
              <div class="accordion">
                <button class="accordion-button">MAYHEM<div class="accordion-arrow"></div></button>
                <div class="accordion-content">
                <button class="regEvent" data-scroll="18470">runway.protocol</button>
                <button class="regEvent" data-scroll="20002">ink.echo</button>
                <button class="regEvent" data-scroll="20288">verbal.combat</button>
                <button class="regEvent" data-scroll="20572">lex.suprema</button>
                <button class="regEvent" data-scroll="21168">street.saga</button>
                <button class="regEvent" data-scroll="22567">silver.screen</button>
                <button class="regEvent" data-scroll="24278">synth.soirée</button>
                <button class="regEvent" data-scroll="24866">empire.rebuild</button>
                <button class="regEvent" data-scroll="25304">xport.exe</button>
                <button class="regEvent" data-scroll="25743">venture.warroom</button>
                <button class="regEvent" data-scroll="26184">appocalypse.dev</button>
                <button class="regEvent" data-scroll="26621">cyber.synth</button>
                <button class="regEvent" data-scroll="27065">circuit.circus</button>
                <button class="regEvent" data-scroll="27653">cryptic.craft</button>
                <button class="regEvent" data-scroll="28242">model.mint</button>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    `;

  
  const accordionButtons = container.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;
      if (button.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "5px 20px";
      } else {
        content.style.maxHeight = null;
        content.style.padding = "5px 20px";
      }
    });
  });

  const wrapper = container.querySelector('.regFormWrapper');

  container.querySelectorAll('.regEvent').forEach(button => {
    button.addEventListener('click', () => {
      wrapper.scrollTo({
        top: Number(button.dataset.scroll),
        behavior: 'smooth'
      });
    });
  });
  return container;
}