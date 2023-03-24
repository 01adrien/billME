import { curry } from "lodash";

export const Box = (x) => ({
  value: x,
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => console.log(`Box(${x})`),
});

export const Right = (x) => ({
  value: x,
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (_, f) => f(x),
  inspect: () => console.log(`Right(${x})`),
});

export const Left = (x) => ({
  value: x,
  chain: () => Left(x),
  map: () => Left(x),
  fold: (err, _) => err(x),
  inspect: () => console.log(`Left(${x})`),
});

export const Monoid = (x) => ({
  value: x,
  chain: f => f(x),
  concat: y => Monoid(x + y),
  empty: () => Monoid(null),
  map: f => Monoid(f(x)),
  fold: f => f(x),
  inspect: () => console.log(`Monoid(${x})`),
});

export const fromNullable = x => (x || x === 0 ? Right(x) : Left("error"));

export const safeString = x =>
  typeof x === "string" ? Right(x) : Left("error");

export const safeNum = x =>
  typeof x === "number" ? Right(x) : Left("error");

export const getSafeProp = curry((propName, object) =>
  fromNullable(object[propName]));
