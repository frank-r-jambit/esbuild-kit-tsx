type MType = { id: number; title: string; desc: string };
function fn(id: number): MType {
  return { id, title: "hello" + id, desc: "world" + id };
}
console.log(JSON.stringify([fn(1), fn(2)]));
