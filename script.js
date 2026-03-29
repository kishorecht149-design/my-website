// =========================
// 🔥 RUN AFTER DOM LOAD
// =========================
document.addEventListener("DOMContentLoaded", () => {

    /* ========================= */
    /* SCROLL ANIMATION */
    /* ========================= */
    const elements = document.querySelectorAll(".animate");

    function checkScroll() {
        const trigger = window.innerHeight * 0.85;

        elements.forEach(el => {
            if (el.getBoundingClientRect().top < trigger) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();


    /* ========================= */
    /* 🌌 PARTICLES (WORKING) */
    /* ========================= */
    const container = document.getElementById("particles");

    if (container) {
        for (let i = 0; i < 35; i++) {

            const p = document.createElement("div");
            p.classList.add("particle");

            const size = Math.random() * 4 + 2;
            p.style.width = size + "px";
            p.style.height = size + "px";

            p.style.left = Math.random() * 100 + "vw";
            p.style.animationDuration = (6 + Math.random() * 10) + "s";
            p.style.opacity = Math.random() * 0.5 + 0.2;

            container.appendChild(p);
        }
    }


    /* ========================= */
    /* 🔥 SIMPLE FADE (SAFE) */
    /* ========================= */
    document.body.classList.add("fade-in");

});
/* ========================= */
/* 🔥 CURSOR GLOW */
/* ========================= */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
const openBtn = document.getElementById("openMembership");
const popup = document.getElementById("membershipPopup");
const closeBtn = document.getElementById("closePopup");

openBtn.addEventListener("click", function(e) {
    e.preventDefault();
    popup.classList.add("show");
});

closeBtn.addEventListener("click", function() {
    popup.classList.remove("show");
});