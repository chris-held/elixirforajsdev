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
