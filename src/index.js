import "./styles.css";
import { add, initBody } from "./helpers";
import { interval } from "rxjs";
import { map, take } from "rxjs/operators";

initBody("rx-js first");

interval(1000)
  .pipe(
    take(5),
    map(val => val * val)
  )
  .subscribe(val => add.li(val));
