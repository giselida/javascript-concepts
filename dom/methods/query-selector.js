/* 
[querySelector()]

Retorna o primeiro nó Element no documento, na ordem do documento, que corresponde aos seletores especificados.

O método Document querySelector() retorna o primeiro elemento do documento que corresponde ao seletor especificado ou grupo de seletores. Se nenhuma correspondência for encontrada, null será retornado.

[Syntax]

querySelector(selectors)

[selectors]

Uma string contendo um ou mais seletores para correspondência. Esta string deve ser uma string de seletor CSS válida; se não for, uma exceção SyntaxError será lançada. Consulte Localizando elementos DOM usando seletores para saber mais sobre seletores e como gerenciá-los.

*/
const $idReset = document.querySelector("#reset");
const $classActive = document.querySelector(".active");
const $tagP = document.querySelector("p");

/*
[Complex selectors]

Os seletores também podem ser muito poderosos, conforme demonstrado no exemplo a seguir. Aqui, o primeiro elemento <input> com o nome "login" (<input name="login"/>) localizado dentro de um <div> cuja classe é "user-panel main" (<div class="user-panel main ">) no documento é retornado:

Ex: <div class="user-panel main">
    <input name="login"/>
    </div>
*/
const element = document.querySelector("div.user-panel.main input[name='login']");
