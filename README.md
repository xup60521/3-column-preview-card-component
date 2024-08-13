# **Frontend Mentor Challenge - 3-column preview card component**

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2- "https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

        - [Element entry animation](#element-entry-animation)

- [Resources](#resources)

## Overview

Users should be able to:

- View the optimal layout depending on their device's screen size

- See hover states for interactive elements

Links:

- GitHub Repo: <https://github.com/xup60521/3-column-preview-card-component>

- Website: <https://xup60521.github.io/3-column-preview-card-component/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

- Semantic HTML5 markup

- TailwindCSS

- Vite - for bundling assets

### What I learned

#### Element entry animation

When dealing with many elements simultaneously, GSAP needs some adjustment.

```ts
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
```

Each card component has a `card` class name, and I loop over these elements to change their delay and duration. In so doing, the entry animation looks better.

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google Fonts - <https://fonts.google.com>