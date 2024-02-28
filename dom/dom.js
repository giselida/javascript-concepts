/*
[Dom]
No vasto ecossistema do desenvolvimento web, o DOM JavaScript destaca-se como uma das ferramentas fundamentais para interagir e manipular conteúdo de páginas web em tempo real. 

Originado como uma convenção neutra de plataforma e linguagem, o DOM fornece uma representação estruturada de um documento como uma árvore de objetos. Cada nó desta árvore corresponde a uma parte do documento, seja ela um elemento HTML, um atributo ou texto.

JavaScript, como a linguagem de programação predominante na web, utiliza o DOM para acessar e modificar dinamicamente o conteúdo, a estrutura e o estilo de um website. 

Esse casamento entre JavaScript e DOM permitiu o desenvolvimento de páginas interativas e aplicações web de alto desempenho que conhecemos hoje. Os desenvolvedores podem, com precisão, selecionar elementos, alterar atributos, modificar estilos CSS, criar ou remover nós e responder a eventos, tudo através da interface de programação do DOM.

[O que é o DOM JavaScript?]

O DOM, ou Document Object Model, é uma representação estruturada de documentos. No contexto de páginas web, o DOM refere-se à representação estruturada de um documento HTML ou XML. Ele fornece uma forma programática de acessar, modificar, adicionar ou remover conteúdo e estrutura de um documento.

O DOM é uma interface de programação que permite a scripts interagir e modificar a estrutura, conteúdo e estilo de documentos web. Essencialmente, ele fornece uma representação em árvore da página, onde cada nó corresponde a uma parte (elemento, atributo, texto, etc.) do documento.

[Por que ele é importante?]

[Interatividade:] com o DOM, os desenvolvedores podem criar páginas dinâmicas e interativas. Por exemplo, ao clicar em um botão, o JavaScript pode usar o DOM para mudar o conteúdo de um parágrafo, mostrar ou ocultar imagens, ou alterar cores e estilos;

[Manipulação em tempo real:] sem a necessidade de recarregar a página, é possível alterar qualquer parte dela. Isso é essencial para criar experiências de usuário fluidas, como em aplicações de página única (SPA – Single Page Application);

[Integração com APIs:] muitas vezes, as aplicações web modernas se integram com APIs externas. O DOM permite que os desenvolvedores mostrem dados de uma API na página, atualizem esses dados ou enviem informações do usuário de volta para a API;

[Flexibilidade:] o DOM oferece aos desenvolvedores a capacidade de adaptar páginas web com base nas ações ou preferências dos usuários, criando assim experiências personalizadas.
Em suma, o DOM é a ponte entre o conteúdo estático de uma página web e as capacidades dinâmicas e interativas que os desenvolvedores querem implementar. Sem o DOM, portanto, a web como a conhecemos hoje – rica, dinâmica e interativa – não seria possível.

[Como o DOM é Estruturado?]

O DOM é estruturado hierarquicamente e pode ser visualizado como uma árvore de nós. Vamos detalhar essa estrutura:
 
O DOM é como uma árvore genealógica, porém, de forma invertida. O elemento que antecede o document é o window, que nada mais é que a janela do navegador. Em sua estrutura, o document está no topo como objeto global e tem como elemento raiz a tag html e todas as outras descendem dela através das suas ramificações (branchs).

[Hierarquia do DOM]

[Documento:] o objeto raiz que representa todo o documento;

[Elementos:] representam tags HTML. Por exemplo: <div>, <p>, <a>, etc.;

[Atributos:] são propriedades que os elementos podem ter. Por exemplo: class, id, href, etc.;

[Textos:] representam o conteúdo textual dentro das tags;

[Comentários e outros tipos:] como comentários (<!-- comentário -->) ou declarações de tipo de documento (<!DOCTYPE html>).

*/