/*
[querySelectorAll()]

O método Document querySelectorAll() retorna um NodeList estático (não ativo) representando uma lista de elementos do documento que correspondem ao grupo especificado de seletores.

[Syntax]

querySelectorAll(selectors)

[selectors]

Uma string contendo um ou mais seletores para correspondência. Esta string deve ser uma string de seletor CSS válida; caso contrário, uma exceção SyntaxError será lançada. Consulte Localizando elementos DOM usando seletores para obter mais informações sobre como usar seletores para identificar elementos. Vários seletores podem ser especificados separando-os por vírgulas.

*/

const $allButtons = document.querySelectorAll("#buttons");
const $allIdReset = document.querySelectorAll("#reset");
const $allClassActive = document.querySelectorAll(".active");
const $allTagsP = document.querySelectorAll("p");