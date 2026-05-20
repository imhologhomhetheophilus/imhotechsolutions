  const hamburger = document.querySelector("#hamburger");
    const mobileMenu = document.querySelector("#mobileMenu");
    const navitems = document.querySelector("#navitems");

    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    

    hamburger.addEventListener("click", () => {
      navitems.classList.toggle("hidden");
      navitems.classList.toggle("flex");
    });

    // Close menu when link clicked
    const links = document.querySelectorAll("#navitems a");

    links.forEach(link => {
      link.addEventListener("click", () => {
        navitems.classList.add("hidden");
        navitems.classList.remove("flex");
      });
    });