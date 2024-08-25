## Nome: `Claudia Rayara Alves da Silva`

Para executar este projeto:

1. Verifique se esta na pasta context-react-project-fase1 no terminal, caso não esteja entre na pasta usando:
```
cd context-react-project-fase1
```
![Captura de tela 2024-08-25 021808](https://github.com/user-attachments/assets/5d28fae3-1e9e-4e07-9260-e4c5d4706b16)



2. Rode npm install para instalar as dependências do projeto:
```
npm install
```
![Captura de tela 2024-08-25 021854](https://github.com/user-attachments/assets/1b90bc17-7426-4b99-a948-653258c062ad)

3. E em seguida use no terminal o comando npm run dev, para iniciar a execução do projeto e abra o link segurando ctrl e clicando nele:
```
npm run dev
```

![Captura de tela 2024-08-25 021929](https://github.com/user-attachments/assets/3e904db9-7341-43ef-94c3-ccb5b8c1f8f6)

![Captura de tela 2024-08-25 013314](https://github.com/user-attachments/assets/387e900b-264e-41cc-af6b-04eb32ce4329)

![Captura de tela 2024-08-25 013327](https://github.com/user-attachments/assets/7529777e-e93c-4678-b8f6-5a2c73fd63e7)



## Após execução do projeto, este é o resultado esperado no navegador:
![resultado](https://github.com/user-attachments/assets/abdd24df-fa1b-416d-95d6-0a9eed5f0715)


## Introdução
Para esta primeira fase do projeto, foi construído a parte estática do projeto de um sistema frontend.

## Componentes
Os componentes estão no diretório `./src/components` e eles possuem as seguintes características:
- ChildrenComponent:
  - props
    - items: um array com uma lista de dados para ser mostrado;
    - onAdd: callback que é chamado quando o botão "Adicionar algo" é clicado;
  - Descrição: este componente é uma simples demostração de como utilizar callback para adicionar itens em um array e como listar este array.

- List:
  - Descrição: este componente renderiza o ChildrenComponent a partir dos dados presentes no contexto e também é responsável por disparar as mudanças no contexto.

- Navbar:
  - Descrição: este componente utiliza Link do React Router para mostrar as páginas disponíveis em uma barra de navegação

## Conclusão
Este projeto é apenas para fins demonstrativos e não contém mais alterações do que as necessárias para demostrar algumas funcionalidades úteis para o desenvolvimento de projetos em ReactJS.
