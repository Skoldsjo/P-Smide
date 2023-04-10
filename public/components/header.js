class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>            
            <header>
                <div class="logo">
                    <a href="index.html">P-Smide</a>
                </div>
                <div id="navbar" class="menu">
                    <ul class="menu-list">
                        <li class="menu-text">
                            <a href="index.html">Hem</a>
                        </li>
                        <li class="menu-text">
                            <a href="about.html">Om Oss</a>
                        </li>
                        <li class="menu-text">
                            <a href="contact.html">Kontakt</a>
                        </li>
                    </ul>
                </div>

                <button class="menu-icon">
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div> 
                </button>

                <div class="small-menu-container">
                    <ul class="small-menu-list">      
                        <li class="menu-text">
                            <a href="index.html">Hem</a>
                        </li>
                        <li class="menu-text">
                            <a href="about.html">Om Oss</a>
                        </li>
                        <li class="menu-text">
                            <a href="contact.html">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </header>        
        </nav>
      `;
    }
  }

customElements.define('main-header', Header);