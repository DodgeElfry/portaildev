import "./style.css";

document.querySelector("#app").innerHTML = `
  <header>
    <nav>
      <span class="logo" id="nav-logo">
        <img src="" alt="Logo">
        DevConnect
      </span>
      <span id="search-bloc">
        <input type="search">
        <button id="nav-button">Développeurs</button>
        <button id="nav-button">Compétences</button>
        <button id="nav-button">Localisation</button>
      </span>
      <a href="" id="about">A propos</a>
    </nav>
  </header>
  <main>
    <hero>
      <h1>
        Bienvenue sur <strong>DevConnect</strong><br>
        Votre portail de portfolio des developpeurs web
      </h1>
      <p>Decouvrir des développeurs, visiter des projets et des produits adaptés à vos besoins.</p>
    </hero>
    <section id="profiles-section">
      <span>
        <svg class="section-icon" id="profile-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.66666 36.6667C6.66666 29.3029 12.6362 23.3334 20 23.3334C27.3638 23.3334 33.3333 29.3029 33.3333 36.6667H30C30 31.1439 25.5228 26.6667 20 26.6667C14.4771 26.6667 9.99999 31.1439 9.99999 36.6667H6.66666ZM20 21.6667C14.475 21.6667 9.99999 17.1917 9.99999 11.6667C9.99999 6.14169 14.475 1.66669 20 1.66669C25.525 1.66669 30 6.14169 30 11.6667C30 17.1917 25.525 21.6667 20 21.6667ZM20 18.3334C23.6833 18.3334 26.6666 15.35 26.6666 11.6667C26.6666 7.98335 23.6833 5.00002 20 5.00002C16.3167 5.00002 13.3333 7.98335 13.3333 11.6667C13.3333 15.35 16.3167 18.3334 20 18.3334Z" fill="white"/>
        </svg>
        Profils de Développeurs
      </span>
      <div>
        <div class="dev-grid" id="dev-grid"></div>
        <a class="view-all" id="all-profiles" href="#">Explorer les projets ↗</a>
      </div>
    </section>
    <section id="projects-section">
      <span>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.66667 11.6667V6.66667C9.66667 5.7462 10.4129 5 11.3333 5H22.0237L25.357 8.33333H34.6667C35.5872 8.33333 36.3333 9.07953 36.3333 10V26.6667C36.3333 27.5872 35.5872 28.3333 34.6667 28.3333H29.6667V33.3333C29.6667 34.2538 28.9205 35 28 35H4.66667C3.7462 35 3 34.2538 3 33.3333V13.3333C3 12.4129 3.7462 11.6667 4.66667 11.6667H9.66667ZM9.66667 15H6.33333V31.6667H26.3333V28.3333H9.66667V15ZM13 8.33333V25H33V11.6667H23.9763L20.643 8.33333H13Z" fill="white"/>
        </svg>
        Projets
      </span>
      <div>
        <div class="project-grid" id="project-grid"></div>
        <a class="view-all" id="all-projects" href="#"> Explorer les projets ↗</a>
      </div>
    </section>
  </main>
  <footer>
    <span id="copyright">
      <p>DevConnect - Tout droits réservés</p>
      <a href="">Conditions d'utilisation</a>
      <a href="">Politique de confidentialité</a>
    </span>
    <span id="contact">
      <span class="logo" id="footer-logo">
        <img src="" alt="Logo">
        DevConnect
      </span>
      <p>contact@devconnect.com</p>
    </span>
  </footer>
`;

document.querySelector("#dev-grid").innerHTML = `
  <article class="dev-card">
    <button class="card-menu">⋮</button>
    <div class="avatar">
     <img src="./images/sarah-johnson.jpg" alt="Sarah Johnson">
     </div>
    <h3>Sarah Johnson</h3>
    <p>Frontend Developer</p>
    <small>Paris, France</small>
    <div class="skills">
      <span>React</span>
      <span>Node.Js</span>
      <span>MongoDB</span>
    </div>
    <a href="#" class="view-profile">
     Voir le profil
    </a>
  </article>
  <article class="dev-card">
    <button class="card-menu">⋮</button>
    <div class="avatar">
     <img src="./images/sarah-johnson.jpg" alt="Sarah Johnson">
     </div>
    <h3>Sarah Johnson</h3>
    <p>Frontend Developer</p>
    <small>Paris, France</small>
    <div class="skills">
      <span>React</span>
      <span>Node.Js</span>
      <span>MongoDB</span>
    </div>
    <a href="#" class="view-profile">
     Voir le profil
    </a>
  </article>
  <article class="dev-card">
    <button class="card-menu">⋮</button>
    <div class="avatar">
     <img src="./images/sarah-johnson.jpg" alt="Sarah Johnson">
     </div>
    <h3>Sarah Johnson</h3>
    <p>Frontend Developer</p>
    <small>Paris, France</small>
    <div class="skills">
      <span>React</span>
      <span>Node.Js</span>
      <span>MongoDB</span>
    </div>
    <a href="#" class="view-profile">
     Voir le profil
    </a>
  </article>
`;

document.querySelector("#project-grid").innerHTML = `
   <article class="project-card">
    <div class="project-logo">
        <img src="ill.jpg" alt="TaskManager">
    </div>
    <h3>TaskManager</h3>
    <p>Application de gestion des tâches collaborative</p>
    <div class="skills">
        <span>React</span>
        <span>Node.Js</span>
        <span>MongoDB</span>
    </div>
    <a href="#" class="view-profile">
     Voir le profil
    </a>
</article>
  <article class="project-card">
    <div class="project-logo">
        <img src="./images/taskmanager.jpg" alt="TaskManager">
    </div>
    <h3>ShopMaster</h3>
    <p>Plateforme e-commerce moderne avec panier, paiement sécurisé et gestion des commandes.</p>
    <div class="skills">
        <span>Next.js</span>
        <span>Stripe</span>
        <span>PostgreSQL</span>
    </div>
 </article>

  <article class="project-card">
    <div class="project-logo">
        <img src="./images/taskmanager.jpg" alt="TaskManager">
    </div>
    <h3>FinanceTracker</h3>
    <p>Application de suivi des dépenses et revenus avec tableaux de bord interactifs.</p>
    <div class="skills">
        <span>React</span>
        <span>Express.Js</span>
        <span>MySQl</span>
    </div>
</article>

  <article class="project-card">
    <div class="project-logo">
        <img src="./images/taskmanager.jpg" alt="TaskManager">
    </div>
    <h3>ChatConnect</h3>
    <p>Application de messagerie instantanée avec notifications et conversations en temps réel.</p>
    <div class="skills">
        <span>React</span>
        <span>Socket.io</span>
        <span>Node.js</span>
    </div>
</article>
`;
