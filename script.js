
/* Ravan crunchyroll premium*/


/*bottom nav*/
// Create a new div element
const newNav = document.createElement('nav');
newNav.id = 'myNewNav';

// Set content for the nav element
newNav.innerHTML = `
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
  <nav class="nav">
    <a href="#" class="nav__link active">
      <i class="material-symbols-outlined nav__icon">cottage</i>
      <span class="nav__text">Home</span>
    </a>
    <a href="/watchlist" class="nav__link">
      <i class="material-symbols-outlined nav__icon">bookmark</i>
      <span class="nav__text">MyList</span>
    </a>
    <a href="/videos/popular" class="nav__link">
      <i class="material-symbols-outlined nav__icon">grid_view</i>
      <span class="nav__text">Browse</span>
    </a>
    <a href="/simulcasts/seasons/summer-2024" class="nav__link">
      <i class="material-symbols-outlined nav__icon">hotel_class</i>
      <span class="nav__text">Simulcast</span>
    </a>
  </nav>
`;

// Create a separate style element
const newStyle = document.createElement('style');
newStyle.textContent = `
  body {
  margin: 0 0 55px 0;
}

.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #000000;
  display: flex;
  overflow-x: auto;
  z-index: 999;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-family: sans-serif;
  font-size: 13px;
  color: #ffffff;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out;
}

.nav__link:hover {
    background-color: #000000;
    color: #ff6600;
}

.nav__link.active {
  background-color: #000000;
  color: #ff6600; /* Orange background for active link */
}


.nav__link  :hover {
    color: #ff6600;
}

.nav__link  :active {
    background-color:#000000;
    color: #ff6600;
}

.nav__icon {
    font-size: 18px;
}

  
`;

// Create a separate script element
const newScript = document.createElement('script');
newScript.textContent = `
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
`;

// Append the nav, style, and script elements to the body
document.body.appendChild(newNav);
document.body.appendChild(newStyle);
document.body.appendChild(newScript);




