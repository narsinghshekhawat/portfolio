/*==================== MOBILE MENU ====================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


/*==================== STICKY NAVBAR ====================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


/*==================== COUNTER ANIMATION ====================*/

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.dataset.target;
    let count = 0;

    const updateCounter = () => {

        const increment = Math.ceil(target / 100);

        if (count < target) {

            count += increment;

            if (count > target) count = target;

            counter.innerText = count;

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

};


const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));

/*==================== TYPING EFFECT ====================*/

new Typed(".typing", {
    strings: [
        "Web Developer",
        "Frontend Developer",
        "UI Designer",
        "Freelancer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});
/*==================== LOADER ====================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1200);

});
/*==================== SCROLL TO TOP ====================*/

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/*==================== SCROLL PROGRESS ====================*/

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});
/*==================== ACTIVE NAV ====================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
/*==================== CURSOR GLOW ====================*/

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
/*==================== CUSTOM CURSOR ====================*/

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

    dot.style.left=e.clientX+"px";
    dot.style.top=e.clientY+"px";

});

document.querySelectorAll("a,.btn,.portfolio-card").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.width="60px";
        cursor.style.height="60px";
        cursor.style.borderColor="#7c3aed";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.width="32px";
        cursor.style.height="32px";
        cursor.style.borderColor="#38bdf8";

    });

});
/*==================== 3D PROJECT TILT ====================*/

const cards = document.querySelectorAll(".portfolio-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((0.5 - y / rect.height)) * 20;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

    });

});
/*==================== HERO PARALLAX ====================*/

const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-image");

hero.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;
});

hero.addEventListener("mouseleave", () => {

    heroImage.style.transform = "translate(0,0)";

});
/*==================== EMAILJS ====================*/

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_dxkabob",
        "template_4ciqnnw",
        this
    )
    .then(() => {

        alert("✅ Message Sent Successfully!");

        contactForm.reset();

    })
    .catch((error) => {

        console.error(error);

        alert("❌ Message could not be sent. Please try again.");

    });

});