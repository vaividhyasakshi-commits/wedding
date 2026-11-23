import parse from "html-react-parser";

// Original invitation markup preserved to retain its design exactly.
const markup = "<section class=\"scene blessing\" data-parallax=\"\" id=\"blessings\">\n<div class=\"scene-photo\" style=\"--scene-image:url('https://weddingsandeventsbyamitesh.com/public/assets/img/1%20%284%29.webp')\">\n</div>\n<div class=\"scene-shade\"></div>\n<div class=\"scene-content\">\n<p class=\"eyebrow reveal\">पधारो म्हारे देश</p>\n<h2 class=\"display-title reveal\">\n          A Celebration <em>of Love</em>\n</h2>\n<div class=\"fine-line reveal\"></div>\n<p class=\"invitation-copy reveal\">\n          With hearts full of joy and gratitude,<br/>\n          we cordially invite you to grace the<br/>\n          auspicious wedding celebration of\n        </p>\n<h3 class=\"name-pair reveal\">\n          Sweta <i>&amp;</i> Vikas\n        </h3>\n<p class=\"invitation-copy reveal\">\n          Your gracious presence and blessings<br/>\n          will make this occasion truly memorable.\n        </p>\n<div class=\"deco-line reveal\">\n          ✧   ✺   ✧\n        </div>\n</div>\n</section>";
export default function Blessings() {
  return parse(markup);
}
