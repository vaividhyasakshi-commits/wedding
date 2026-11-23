import parse from "html-react-parser";

// Original invitation markup preserved to retain its design exactly.
const markup = "<section class=\"scene family\" data-parallax=\"\" id=\"family\">\n<div class=\"scene-photo\" style=\"--scene-image:url('https://www.shaadipath.com/blog/assets/images/best-destination-wedding-places-india-03-planning.webp')\">\n</div>\n<div class=\"scene-shade\"></div>\n<div class=\"scene-content\">\n<p class=\"eyebrow reveal\">\n          With the Blessings of Our Elders\n        </p>\n<h2 class=\"display-title reveal\">\n          The <em>Family</em>\n</h2>\n<div class=\"fine-line reveal\"></div>\n<p class=\"family-label reveal\">\n          WITH LOVE &amp; WARM REGARDS FROM\n        </p>\n<div class=\"family-list\">\n<div class=\"family-person reveal\">Shri Om Sharma</div>\n<div class=\"family-person reveal\">Hariom Sharma</div>\n<div class=\"family-person reveal\">Pawan Sharma</div>\n<div class=\"family-person reveal\">Vikas Sharma</div>\n<div class=\"family-person reveal\">Abhishek Sharma</div>\n<div class=\"family-person reveal\">Hardik Sharma</div>\n</div>\n<p class=\"family-footer reveal\">\n          Together, we request the honour of your presence.\n        </p>\n</div>\n</section>";
export default function Family() {
  return parse(markup);
}
