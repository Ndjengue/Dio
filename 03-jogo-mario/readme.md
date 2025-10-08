# 🏎️ Simulação de Corrida entre Personagens em JavaScript

## 📘 Descrição Geral
Este projeto implementa uma **simulação interativa de corrida entre personagens**, desenvolvida em **JavaScript (Node.js)**.  
O sistema utiliza princípios de **probabilidade, atributos de desempenho e eventos aleatórios** para determinar o vencedor de uma corrida composta por múltiplas rodadas.

Cada personagem possui atributos definidos que influenciam diretamente os resultados:
- **VELOCIDADE**
- **MANOBRABILIDADE**
- **PODER**
- **PONTOS**

Durante a execução, o programa realiza lançamentos de dados virtuais, aplica modificadores conforme o tipo de pista e calcula automaticamente os pontos, determinando o vencedor final de forma dinâmica.

---

## ⚙️ Funcionalidades Principais
- Simulação de **6 rodadas** com resultados aleatórios.
- Tipos de pista gerados de forma probabilística:
  - **RECTA:** teste de velocidade;
  - **CURVA:** teste de manobrabilidade;
  - **CONFRONTO:** teste de poder, com possibilidade de perda de pontos.
- Implementação de **eventos aleatórios (Casco e Bomba)** que afetam a pontuação.
- Sistema de pontuação acumulativa com **logs detalhados no console**.
- Exibição automática do **resultado final e vencedor da corrida**.

---

## 🧩 Estrutura Lógica do Programa
O fluxo lógico segue a seguinte sequência:

1. Inicialização dos personagens e atributos base.  
2. Execução da função principal (`main()`), que invoca o motor da corrida (`playRaceEngine()`).
3. Geração aleatória do tipo de pista através de `getRandomBlock()`.
4. Lançamento de dados para cada jogador por meio de `rollDice()`.
5. Aplicação de modificadores com base no tipo de pista (Velocidade, Manobrabilidade ou Poder).
6. Avaliação de confrontos diretos e possíveis penalizações com `getRandomHullBomb()`.
7. Atribuição de pontos ao vencedor de cada rodada.
8. Exibição do placar e declaração do vencedor final via `declareWinner()`.

---

## 🧮 Estrutura de Dados dos Personagens

```javascript
const player1 = {
    "NOME": "Esteves Junior",
    "VELOCIDADE": 5,
    "MANOBRABILIDADE": 4,
    "PODER": 4,
    "PONTOS": 0
};

const player2 = {
    "NOME": "Felipe Aguiar",
    "VELOCIDADE": 3,
    "MANOBRABILIDADE": 3,
    "PODER": 4,
    "PONTOS": 7
};
