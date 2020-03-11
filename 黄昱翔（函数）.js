let x =10;
let y =20;
function asdf(x,y) {
  let hyx
  hyx = x;
  x = y;
  y = hyx;
  console.log(x,y);
}
asdf(x,y);
console.log(x,y);