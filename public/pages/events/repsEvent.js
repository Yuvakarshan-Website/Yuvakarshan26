export default function repsEvent() {
  const container = document.createElement('div');
  container.className = 'events-page';

  container.innerHTML = `
    <section class="events-list">
      
    <!-- Fixed Right Button -->
    <button class="side-button right-button"><a href="/eventsDay1" data-link>Day 1 &rarr;</a></button> 
 
    <!-- page Center Label -->
    <div class="page-label">REPS' EVENT</div>
    <div class="card-container">
      <div class="card-grid ">
        <h1 class='get-ready'>We can't wait to begin our glamorous journey on the 19th of June at the Rep's Meet! However it's not all about folders and documents. Get ready for a special surprise planned for all representatives on the first axial day, 1st July, 2026.</h1>
      <div>
    </div>
    </section>


  `;

  return container;
}
