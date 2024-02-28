/*
[Export]

A declaração de exportação é usada para exportar valores de um módulo JavaScript. Os valores exportados podem então ser importados para outros programas com a declaração de importação ou importação dinâmica. O valor de uma ligação importada está sujeito a alterações no módulo que a exporta — quando um módulo atualiza o valor de uma ligação que exporta, a atualização ficará visível no seu valor importado.

Usado para exportar funções para disponibilizá-las para importação em módulos externos e outros scripts.
*/


// exportação de membros individuais
export const name = "John";

export function getName() {
  console.log(name);
}

export class User {}

// Exportando múltiplos membros

const john = 1, jane = 2;
export { john, jane }

// Exportando via desestruturação com renomeação

const person = {
    name: "John",
    age: 30,
    city: "New York"
}

export const { name: firstName, age: userAge } = person;

// Exportação padrão

export default function sayHi() {
    console.log("Hi");
}

// Re-exportando módulos

export * from "./export-module";