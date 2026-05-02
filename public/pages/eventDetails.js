import { eventData } from '/pages/eventData.js';

export default function eventDetails() {
  const path = window.location.pathname;
  const data = eventData[path];

  const segmentStyles = {
    'Magic': ['#bf70e4', '#521969'],        // lavender, dark violet
    "Myth": ['#4c6ace', '#2621b0'],  // cyan, deep teal
    'Mayhem': ['#ff6be1', '#54002a']          // coral, blood red
  };

  const [fontColor, glowColor] = segmentStyles[data.segment] || ['#FFFFFF', '#000000'];

  const container = document.createElement('div');
  container.className = 'eventDetails';

  container.innerHTML = `
    <div class="eventDetailsBg">

      <div class="event-segment"
           style="
             color: ${fontColor};
             text-shadow: 0 0 4px ${glowColor}, 0 0 6px ${glowColor};
           ">
        ${data.segment}
      </div>
      <div class="logoContainer">
        <img class="event-logo" src="${data.logo}"></img>
      </div>
      <div class="event-segmentFrame" style="background-image: url('${data.segmentFrame}'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
      <div class="event-name">${data.name}<div class="event-subject">${data.subject}</div></div>
      <div class="event-overlay">
        <div class="event-description">
          <div class="event-desc-title">EVENT DETAILS</div>
            <br><br>
            <div class="event-desc-text">
            ${data.description}
            </div>
          </div>
      </div>
    </div>
  `;

  return container;
}
