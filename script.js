const cercle = document.querySelector("#links");
const imgs = document.querySelectorAll(".link");

const TL = gsap.timeline({ paused: true });

TL.to(imgs, {
    scale: 1.0,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.7)"
});

cercle.addEventListener("mouseenter", () => {
    TL.play();
});
cercle.addEventListener("mouseout", () => {
    TL.reverse();
});
