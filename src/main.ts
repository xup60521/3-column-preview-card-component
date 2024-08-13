import gsap from "gsap";

const cards = gsap.utils.toArray<HTMLElement>(".card");
cards.forEach((card, index) => {
    card.style.display = "flex";
    gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, delay: 0.1 * index, duration: 0.12 * index + 0.5, ease: "power2.out" }
    );
});
