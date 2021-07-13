const fobj = { name: 'Hasan' };
const sobj = { age: 28, name: 'Shaoli' };

const mlrobj = { ...fobj, ...sobj };
const mrlobj = { ...sobj, ...fobj };

const assignobj = Object.assign(sobj, fobj);

console.table(mlrobj);
console.table(mrlobj);
console.table(assignobj);
