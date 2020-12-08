import {gsap} from "gsap";

// import{DrawSVGPlugin} from "gsap/DrawSVGPlugin";

// gsap.registerPlugin(DrawSVGPlugin);

// import $ from "jquery"

// const svgHeight = $("#svg-design").height();
// console.log(svgHeight + "267px");

// const logoHeight = $("#logo").height();
// console.log(logoHeight + "267px");

const logoTL = gsap.timeline();
logoTL.from("#Body", {duration: 1, alpha: 0}, "second")
        .from("#LW", {duration: 1, alpha: 0, rotation: 83, transformOrigin: "right"}, "third")
        .from("#RW", {duration: 1, alpha: 0, rotation: -83, transformOrigin: "left"}, "third")
        .from("#Beak", {duration: 1, alpha: 0}, "after-third")
        .from("#Shadows", {duration: 1, alpha: 0}, "after-third")
        .from("#Feathers", {delay: 1.5, duration: 1, alpha: 0}, "third")
        .to("#logo1", {duration: 1, y: 217}, "fourth")
        .to("#LW", {duration: 1, alpha: 0}, "fourth")
        .to("#RW", {duration: 1, alpha: 0}, "fourth")
        .to("#Beak", {duration: 1, alpha: 0}, "fourth")
        .to("#Shadows", {duration: 1, alpha: 0}, "fourth")
        .to("#Feathers", {duration: 1, alpha: 0}, "fourth")
        .from("#Wings", {duration: 1, alpha: 0}, "fourth")
        // .from("#dash", {duration: 1, alpha: 0}, "fifth");






export function logoAnimation() {
    return logoTL;
}
