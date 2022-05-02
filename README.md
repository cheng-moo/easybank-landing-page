# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My Process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop](./dist/images/Screenshot%202022-05-02%20at%2018-14-36%20Frontend%20Mentor%20Easybank%20landing%20page.png)

![Mobile](./dist/images/Screenshot%202022-05-02%20at%2018-18-30%20Frontend%20Mentor%20Easybank%20landing%20page.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/responsive-landing-page-using-sass-scss-mobilefirst-workflow-and-bem-HkiW-i6rc)
- Live Site URL: [Live Site](https://cheng-moo.github.io/easybank-landing-page/dist/)


## My process

### Built with

- Sass (SCSS)
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS

### What I learned

- Three methods to create overlay div & pseudo element ::before in addition to linear gradient with the opacity

- Hamburger Icon with spans

- Style svg images

- When to use img tag and when to use background-image property

- max-width to limit container expansion

- Using open class and JS to toggle between open and close state of nav menu

- centering element positioned absolutely using left and transformX

- The Difference Between top/right/bottom/left and transformXY in positioning

- Add Transition to backgrounds using opacity

- Fade in / Fade out Animation using opacity and visibility ((display cannot be animated))

- Connet Fade in / Fade out Animation with the existence of open class (JS)

- Adding Backgrounds in top of each other using ::after and ::before pseudo elements and playing with background sizing and positioning properties

- Adding Responsiveness By using Grids and Media Queries Breakpoints together

- border radius and overflow hidden to make radius in background-image

- The Difference between display block and display inline-block

- Sass

   - BEM (Block - Element - Modifier) Approach

   - Create global partial and add in it common and global properties and reusable properties in classes

   - Create variables for colors and fonts so that they will be consistant through out the web page

   - Mixins For Media Queries


   ```scss
    // 640px, 1024px, 1400px
    $breakpoints-up: ('medium': '40em', 'large': '64em', 'xlarge': '87.5em');

    // 639px, 1023px, 1399px
    $breakpoints-down: ('small': '39.9375em', 'medium': '63.9375em', 'large': '87.4375em');

    @mixin breakpoint-up($size) {
        @media (min-width: map-get($breakpoints-up, $size)){
            @content
        }
    };
    @mixin breakpoint-down($size) {
        @media (max-width: map-get($breakpoints-down, $size)){
            @content
        }
    }
   ```
   - Hiding ELements From Desktop and Mobile using global classes and breakpoint mixins 


   ### Useful resources

- [How to Make a Landing Page using HTML, SCSS, and JavaScript - Full Course
](https://www.youtube.com/watch?v=aoQ6S1a32j8) - It's really useful tutorial


## Author


- Frontend Mentor - [@cheng-moo](https://www.frontendmentor.io/profile/cheng-moo)
- Twitter - [@Cheng_Mo_](https://twitter.com/Cheng_Mo_)

## Acknowledgments

- [Jessica - Coder Coder](https://www.youtube.com/thecodercoder)
