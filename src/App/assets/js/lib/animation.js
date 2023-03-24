import { curry } from "lodash";
import { forOf, zip, mapStream, filterStream, merge } from "./utils.js";
import { createInterval, createTimeout } from "./source.js";

export const addClass = curry((idDiv, className) => {
  const target = document.getElementById(idDiv);
  target.classList.add(className);
});

export const typeEffect = curry((duration, text) =>
  zip(createInterval(duration), forOf(text))
);

export const typeEffect2 = curry((duration, text) =>
  merge(createTimeout(duration), forOf(text))
);