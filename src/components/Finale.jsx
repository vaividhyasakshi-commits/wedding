import parse from "html-react-parser";

// Original invitation markup preserved to retain its design exactly.
const markup = "<section class=\"scene finale\" data-parallax=\"\" id=\"love\">\n<div class=\"scene-photo\" style=\"--scene-image:url('https://weddingsandeventsbyamitesh.com/public/assets/img/1%20%284%29.webp')\">\n</div>\n<div class=\"scene-shade\"></div>\n<div class=\"scene-content\">\n<p class=\"eyebrow reveal\">आभार एवं सप्रेम निमंत्रण</p>\n<h2 class=\"display-title reveal\">\n          With <em>Love</em>\n</h2>\n<div class=\"fine-line reveal\"></div>\n<p class=\"family-label reveal\">\n          WITH BEST COMPLIMENTS FROM\n        </p>\n<h3 class=\"final-family reveal\">\n          All Sandilya Parivar\n        </h3>\n<p class=\"final-amp reveal\">&amp;</p>\n<h3 class=\"final-family reveal\">\n          Relatives\n        </h3>\n<div class=\"deco-line reveal\">\n          ❈   ❖   ❈\n        </div>\n<p class=\"handwritten final-sign reveal\">\n          Sweta &amp; Vikas\n        </p>\n<p class=\"closing reveal\">\n          We look forward to celebrating with you.\n        </p>\n</div>\n</section>";
export default function Finale() {
  return parse(markup);
}
