import "../css/output.css"
import { typeEffect, typeEffect2 } from "./lib/animation"
import { filterStream } from "./lib/utils";

// typeEffect(150,"123456789")(
//   filterStream(x => x )(value => value)(function(x) {
//     x[0] ++;
//     console.log(x)
//   })
// );


typeEffect(150,"123456789")(function(x) {
  x[0] ++ ;
  console.log(x)
});


