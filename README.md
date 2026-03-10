# 🔢 Calculadora com React

Uma calculadora funcional desenvolvida em **React** para colocar em prática conceitos avançados de gerenciamento de estado e manipulação de eventos.

<img width="1483" height="717" alt="image" src="https://github.com/user-attachments/assets/b20f595a-d49c-4822-8a4a-7d2060f69f21" />
---

## 🚀 O Projeto
O objetivo deste projeto foi ir além de uma interface simples, focando na lógica de como uma calculadora real processa dados, evita erros de digitação (como zeros à esquerda) e interage com o usuário tanto via clique quanto via teclado.

---

## ✨ Funcionalidades
- Operações matemáticas: soma, subtração, multiplicação e divisão.  
- **Suporte a teclado:** Digite números e execute operações diretamente pelo teclado físico.  
- **Tratamento de interface:** Limpeza de display e prevenção de múltiplos zeros iniciais.  
- Interface responsiva e intuitiva.

---

## 🧠 O que eu aprendi
Este projeto foi um excelente exercício para dominar o fluxo de dados no React:

Gerenciamento de Estado: Usei o useState para controlar três pilares:
currentNumber → Número atual no visor.
firstNumber → Armazena o primeiro valor antes da operação.
operation → Guarda o operador selecionado (+, -, *, /).

Ciclo de Vida com useEffect: Utilizado para criar um event listener global para o teclado. Implementei também a função de limpeza (cleanup) para remover o evento quando o componente é desmontado, evitando problemas de performance.

Organização de Funções (Handles): Estruturei funções como handleSumNumbers e handleOnClear para manter a lógica de cada botão isolada e fácil de manter.

---

## 🛠️ Tecnologias Utilizadas
- **React.js** (Biblioteca principal)
- **Styled Components** (Estilização isolada e dinâmica)
- **Hooks:** `useState` e `useEffect`

- ## Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/joaobsdev/calculadora-react.git

# Entre na pasta
cd calculadora-react

# Instale as dependências
npm install

## 🔗 Links
www.linkedin.com/in/joaopedro-bs
l
# Inicie o projeto
npm run dev
