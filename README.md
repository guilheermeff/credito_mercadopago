# credito_mercadopago

Aplicação de linha de comando que faz o cálculo da taxa de liberação de venda e e taxa de juros das vendas do Mercado Pago.


No início da aplicação o usuário tem duas opções: cobrar ou receber

  - Cobrar: o Usuário (vendedor) digita o valor e quantidade de parcelas referente a uma venda na máquina de cartão de crédito, em seguida
a aplicação calcula a taxa de liberação (para o vendedor) e aplica a taxa de juros referente às parcelas que ele digitou anteriormente.
Depois a aplicação retorna o valor líquido em que o vendedor receberá após a operação.

  - Receber: Nessa opção, quem paga a taxa de juros é o cliente. Então novamente o usuário (vendedor) digita o valor e a quantidade de parcelas refe-
rente a venda, em sequência a aplicação faz o cálculo da taxa de juros e soma o valor da venda, depois a aplicação retorna na tela o valor
total com juros e divide pela quantidade de parcelas digitada. Imprimindo na tela o valor que o cliente deverá pagar (com juros) e 
também o valor de cada parcela (com juros).


  Aplicação feita com JavaScript, usando o readline-sync para a execução
  
    Lista funcional e técnica
    
      - Utilizado Switch.. Case para selecionar o juros referente a quantidade de cada parcela (1 a 12)
      - Inputs para o armazenamento dos dados inseridos pelo usuário
      
 
 FUNCIONAMENTO
 
  - Usuário seleciona qual opção desejada: 1 (cobrar) ou 2 (receber);
  - Usuário (vendedor) informa qual o valor da venda;
  - Usuário (vendedor) informa a quantidade de parcelas em que será realizada a venda (1 a 12 com validação inclusa);
  - A aplicação retorna imprimindo na tela o valor líquido após aplicação do juros (caso seja escolhida opção 1), ou retorna o valor que 
o cliente pagará e qual valor ficará em cada parcela (caso seja escolhida a opção 2).
