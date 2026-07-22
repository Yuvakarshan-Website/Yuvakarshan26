export default function Navbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div class="nav-left" >
      <a href="/" class="nav-title" data-link><img class="nav-image" src="https://cdn.jsdelivr.net/gh/Yuvakarshan-Website/yuva-files-26@main/navbarImage.png" alt="Logo" /></a>
    </div>
    <div class="nav-hamburger">
      <span class="nav-hamburger-bar"></span>
       <span class="nav-hamburger-bar"></span>
       <span class="nav-hamburger-bar"></span>
    </div>
    <div class="nav-right">
      <ul class="nav-list">
        <li><a href="/" class="nav-link" data-link>Home</a></li>
        <li><a href="/generalGuidelines" class="nav-link" data-link>Guidelines</a></li>
        <li><a href="/noticeBoard" class="nav-link" data-link>Notices</a></li>
        <li><a href="/eventsDay1" class="nav-link" data-link>Events</a></li>
        <li><a href="https://drive.google.com/drive/folders/14nwEZ1-aP1pD475xlZR7QJ6bFpXR-9Zd" class="nav-link">Gallery</a></li>
        <li><a href="/team" class="nav-link" data-link>Team</a></li>
      </ul>
    </div>
  `;
 
  return nav;
}


