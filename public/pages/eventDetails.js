import { eventData } from '/pages/eventData.js';

export default function eventDetails() {
  const path = window.location.pathname;
  const data = eventData[path];

  const segmentStyles = {
  Magic: {
    gradient: ['#ffe554', '#FF8C00'], // yellow → orange
  },
  Myth: {
    gradient: ['#5a99ff', '#04fc00'], // cyan → lime
  },
  Mayhem: {
    gradient: ['#42a1ff', '#FF4FD8'], // blue → pink
  }
};

const style = segmentStyles[data.segment] || {
  gradient: ['#FFFFFF', '#FFFFFF'],
};

const [startColor, endColor] = style.gradient;

  const container = document.createElement('div');
  container.className = 'eventDetails';

  container.innerHTML = `
    <div class="eventDetailsBg">

      <div class="event-segment"
           style="
            background: linear-gradient(90deg, ${startColor}  40%, ${endColor} 60%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          "
      >
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
