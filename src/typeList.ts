/* eslint-disable @typesclipt-eslint/no-unused-vars */

/**typescritの基本の型 */

//boolean
let bool: boolean = true;

//number 数値
let num: number = 0;

//string
let str: string = "A";

//Array 配列　じゃけえさんは上のほうがいいらしいけど、どちらでもOK
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple　ほぼ使わない
let tuple: [number, string] = [0, "A"];

//any　使わないほうが好ましい
let any1: any = false;

//void　あまり使わない
const fancA = (): void => {
  const test = "TEST";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object あまり使わない
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AA" };
