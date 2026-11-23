import parse from "html-react-parser";

// Original invitation markup preserved to retain its design exactly.
const markup = "<section class=\"scene couple-details\" data-parallax=\"\" id=\"couple-details\">\n<div class=\"scene-photo\" style=\"--scene-image:url('https://www.weddingsutra.com/images/wedding-images/real_wed/featured/kajal-ajul/kajal-ajul-img29.jpg')\">\n</div>\n<div class=\"scene-shade\"></div>\n<div class=\"scene-content\">\n<p class=\"eyebrow reveal\">दो दिलों का शुभ मिलन</p>\n<h2 class=\"display-title reveal\">\n          The <em>Happy Couple</em>\n</h2>\n<div class=\"fine-line reveal\"></div>\n<div class=\"couple-info reveal\">\n<div class=\"person-card\">\n<p class=\"family-label\">THE BRIDE</p>\n<h3>Sweta</h3>\n<p>\n              D/O Smt. Rekha &amp;<br/>\n              Mr. Hariom Sharma\n            </p>\n</div>\n<div aria-hidden=\"true\" class=\"pair-amp\">&amp;</div>\n<div class=\"person-card\">\n<p class=\"family-label\">THE GROOM</p>\n<h3>Vikas <span>(Hemchand)</span></h3>\n<p>\n              G/S Late Smt. Sarbati Devi &amp;<br/>\n              Late Sh. Ghasilal Ji Iyas\n            </p>\n<p>\n              S/O Smt. Meena Devi &amp;<br/>\n              Mr. Arvind Ji Sharma\n            </p>\n</div>\n</div>\n</div>\n</section>";
export default function Couple() {
  return parse(markup);
}
