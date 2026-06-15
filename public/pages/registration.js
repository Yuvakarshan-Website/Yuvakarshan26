
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
      <div style="display:flex; flex-direction:row; width:90vw;">

        <div style="width:50%; display:flex; flex-direction:row; align-items:center; justify-content:center;"><div class="YuvaHist Title Headers Registration">REGISTRATION</div></div>
        <div class="regTabs">
          <button class="regTab active" data-segment="myth">
            MYTH
          </button>

          <button class="regTab" data-segment="magic">
            MAGIC
          </button>

          <button class="regTab" data-segment="mayhem">
            MAYHEM
          </button>
        </div>
      </div>
      <div class="regFormContainer">
        <div class="regFormWrapper">
          <iframe class="regForm" id="registrationForm" src="" frameborder="0" marginheight="0" marginwidth="0" loading="lazy">Loading…</iframe>
        </div>
        <div class="regNavContainer" >
          <div class="YuvaHist Title Headers RegistrationP">EVENT NAVIGATION</div>
          <div class="notice-container" id="eventNav">
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