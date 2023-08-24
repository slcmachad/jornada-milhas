# Jornada Milhas - Curso de Angular: componentização e design com Angular Material

A componentização e reutilização são princípios fundamentais no desenvolvimento com Angular, permitindo a criação de interfaces de usuário mais organizadas, modulares e fáceis de manter. Nesse contexto, componentização refere-se à prática de dividir a interface em partes menores e independentes chamadas de componentes. Esses componentes podem ser reutilizados em todo o aplicativo, resultando em um código mais limpo e eficiente.

## Benefícios da Componentização:

 - Organização: Componentes isolados tornam o código mais organizado, facilitando a localização e manutenção de partes específicas do aplicativo.

 - Reutilização: Uma vez criados, os componentes podem ser reutilizados em diferentes partes do aplicativo, economizando tempo e esforço de desenvolvimento.

 - Colaboração: A divisão do aplicativo em componentes permite que diferentes membros da equipe trabalhem em paralelo em diferentes partes do projeto.

 - Manutenção: Se um componente precisa ser atualizado, você só precisa fazer isso em um lugar, e todas as instâncias reutilizadas serão atualizadas automaticamente.

## O que aprendemos?

 - Qual foi a nossa jornada de aprendizado? Começamos dando os primeiros passos em serviços e entende o escopo do serviço. Passamos por padrão de projetos, entendendo o que é o Singleton.

 - Também evoluímos nossa aplicação. A Jornada Milhas ainda não tinha comportamentos, somente a camada visual. Por isso, tivemos que refatorar e escrever novas funcionalidades.

 - Tivemos que decidir como controlar o estado da aplicação, portanto, criamos mais um serviço para fazer o controle do formulário. Ele ficou responsável por instanciar o grupo de formulário que usamos e definir os controles. Quem precisava ter acesso, simplesmente chamava o serviço e fazia o que precisava.

 - Além disso, conseguimos trabalhar com a camada de cache na hora de obter os estados e também concluímos o componente que implementa um form control. Ou seja, o componente que criamos do zero permite que a pessoa usuária ou desenvolvedora que for consumi-lo, passe para ele um form control e a quantidade de passageiros que diminui ou aumenta vai estar disponível dentro daquele controle.

 - Precisamos implementar muitas funcionalidades interessantes. Nesse curso, passamos pela experiência de vida real de uma pessoa desenvolvedora, ou seja, pegamos uma aplicação que não começamos, com apenas um Figma e um sonho, e implementamos as funcionalidades de acordo com o que precisávamos fazer.
