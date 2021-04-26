// code samples that aren't one liners can go here to
// keep other parts of the app clean

export const elixirImports = `
 # in elixir, you can use a fully qualified name without importing,
 # or you can import like this:
 import MySuperSpecialProject.ThingIWantToImport

 # or if you only want certain functions from ThingIWantToImport:
 import MySuperSpecialProject.ThingIWantToImport, only: [my_function, 1]

`;

export const jsFunction = `
 function add(n1, n2) {
   return n1 + n2;
 }

 const add(n1, n2) => n1 + n2;

`;

export const elixirFunction = `
 def add(n1, n2) do
     n1 + n2
 end

 add = fn(a, b) -> a + b end
 add = &(&1 + &2)
 
`;

export const elixirMap = `
 a = [1, 2, 3]
 b = Enum.map(a, fn n -> n * 2 end)
 # b is [2, 4, 6]

`;

export const jsMap = `
 const a = [1, 2, 3];
 const b = a.map(n => n * 2);
 // b is [2, 4, 6]

`;

export const elixirFilter = `
 people = [%{name: "Bob", age: 30}, %{name: "Bill", age: 18}]
 old_enough = Enum.filter(people, fn %{age: age} -> age > 21 end)

`;

export const jsFilter = `
 const people = [{name: 'Bob', age: 30}, {nane: 'Bill', age: 18}];
 const oldEnough = a.filter({age} => age > 21);

`;

export const elixirReduce = `
 sum = Enum.reduce([1, 2, 3], 0, fn n, acc -> n + acc end)
 # sum is 6

`;

export const jsReduce = `
 const sum = [1, 2, 3].reduce((acc, n) => n + acc, 0)
 // sum is 6

`;
