// code samples that aren't one liners can go here to
// keep other parts of the app clean

export const jsVars = `
 const foo = 1;
 let bar = 2;
 var baz = 3;

`;

export const elixirVars = `
 foo = 1
 # atoms are elixir variables that are used to
 # represent a constant whose value is its own name
 # they are often used to express status
 :ok
 :error

`;

export const jsImports = `
 import React, { useState } from 'react';

`;

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

 # functions in elixir can be private
 defp private_add(n1, n2) do
  n1 + n2
 end
 
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
 const oldEnough = people.filter({age} => age > 21);

`;

export const elixirReduce = `
 sum = Enum.reduce([1, 2, 3], 0, fn n, acc -> n + acc end)
 # sum is 6

`;

export const jsReduce = `
 const sum = [1, 2, 3].reduce((acc, n) => n + acc, 0)
 // sum is 6

`;

export const jsChaining = `
 const people = [{name: 'Bob', age: 30}, {nane: 'Bill', age: 18}];
 const filteredAndMapped = people.filter({age} => age > 21).amp({name} => name);

 // ['Bob']

`;

export const elixirChaining = `
 people = [%{name: "Bob", age: 30}, %{name: "Bill", age: 18}]
 old_enough_names = Enum.filter(people, fn %{age: age} -> age > 21 end)
 |> Enum.map(n, fn n -> n.name end)

 # ["Bob"]

 # The pipe operator (|>) can be applied to more than just arrays:
 score = 45
 score
 |> Kernel./(2)
 |> :math.pow(-1)
 |> Kernel.*(100)

 # equivalent to (((45 / 2) ^ -1) * 100)

`;

export const jsDestructuring = `
 const o = { nested: { prop: 'Hi!' } };

 const { nested: { prop } = {} } = o;

 console.log(prop);
 // Hi!

`;

export const jsDestructuring2 = `
 const list = ( user ) => {
   if (user.isAdmin) {
     return store.listAll();
   }
   return store.listForUser(user);
 }

`;

export const elixirDestructuring = `
 o = %{ nested: %{ prop: "Hi!" }}

 %{ nested: %{ prop: prop }} = o

 IO.inspect(prop)

 # Hi!

`;

export const elixirDestructuring2 = `
 # if the user passed in is an admin, this
 # function will be called
 defp list( %{ is_admin = true } ) do
  store.list_all()
 end

 # regular users have this function called
 defp list( user ) do
  store.list_for_user(user)
 end

`;

export const jsCase = `
 const response = getAResponse();
 switch (response.status) {
   case 200:
     return "Success";
   case 401:
     return "Not Allowed";
   default:
     return "There was an error";
 }

`;

export const elixirCase = `
 # very common in elixir to use case statements
 # to match on the results of a function. In this
 # example get_a_response returns a tuple where the
 # first element is the status
 case get_a_repoonse do
  { :ok, _ } ->
    "Success"
  { :error, %{ reason = "Unauthorized" } } ->
    "Not Allowed"
  { :error, _ } ->
    "There was an error"
 end

`;

export const jsIf = `
 if (n > 100) {
   return 100;
 } else {
   return n;
 }

 n > 100 ? 100 : n;

`;

export const elixirIf = `
 if n > 100 do
  100
 else
  n
 end

 # unless keyword is a sort of reverse if
 unless n > 100 do
  n
 else
  100
 end 
 
 # ternary isn't really directly supported, but this version of
 # an if statement is one line and very easy to read
 if n > 100, do: 100, else: n

`;
