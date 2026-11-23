import parse from "html-react-parser";

// Original invitation markup preserved to retain its design exactly.
const markup = "<section class=\"scene hero\" data-parallax=\"\" id=\"home\">\n<div class=\"scene-photo\" style=\"--scene-image:url('https://www.elegantjourneys.com/repositery/blog/wedding-venue-jaipur.jpeg')\">\n</div>\n<div class=\"scene-shade\"></div>\n<div class=\"corner top-left\"></div>\n<div class=\"corner top-right\"></div>\n<div class=\"corner bottom-left\"></div>\n<div class=\"corner bottom-right\"></div>\n<div class=\"scene-content hero-content\">\n<p class=\"eyebrow reveal\">॥ श्री गणेशाय नमः ॥</p>\n<div class=\"fine-line reveal\"></div>\n<p class=\"upper reveal\">Together with their families</p>\n<p class=\"handwritten reveal\">The Wedding of</p>\n<h2 class=\"couple reveal\">\n          Sweta <span>&amp;</span> Vikas\n        </h2>\n<p class=\"hero-date reveal\">\n          Friday · 11 December 2026\n        </p>\n<p class=\"hero-caption reveal\">\n          Two hearts. One beautiful beginning.\n        </p>\n<div class=\"deco-line reveal\">\n          ❖   ❈   ❖\n        </div>\n<a class=\"scroll-cue reveal\" href=\"#blessings\">\n          SCROLL TO CELEBRATE <span>↓</span>\n</a>\n</div>\n</section>";
export default function Hero() {
  return parse(markup);
}
