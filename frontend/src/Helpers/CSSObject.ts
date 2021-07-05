import type * as CSS from 'csstype';

type Pseudo = {
  [key in CSS.Pseudos]: CSS.Properties;
}

export type CSSObject = {
  [key: string]: CSS.Properties | Pseudo,
}


export type CSSFunctionObject = {
  [key: string]: (...args: any[]) => CSS.Properties,
}