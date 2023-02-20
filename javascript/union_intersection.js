const a = new Set([4, 5, 8, 9]);
const b = new Set([3, 4, 5, 7]);
const union = new Set([...a, ...b]);  
const intersection = new Set([...a].filter(x => b.has(x)));
const difference = new Set([...a].filter(x => !b.has(x)));
console.log(union); 
console.log(intersection); 
console.log(difference);

