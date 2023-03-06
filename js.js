const fs = require('fs');

// Lê o arquivo JSON com os dados de faturamento
const faturamento = JSON.parse(fs.readFileSync('faturamento.json'));

// Filtra apenas os dias úteis do mês
const diasUteis = faturamento.filter(valor => valor > 0);

// Calcula o menor valor de faturamento
const menorFaturamento = Math.min(...faturamento);

// Calcula o maior valor de faturamento
const maiorFaturamento = Math.max(...faturamento);

// Calcula a média mensal de faturamento (considerando apenas os dias úteis)
const mediaMensal = diasUteis.reduce((acc, curr) => acc + curr, 0) / diasUteis.length;

// Calcula o número de dias em que o faturamento diário foi superior à média mensal
const diasAcimaMedia = diasUteis.filter(valor => valor > mediaMensal).length;

console.log(`Menor faturamento: ${menorFaturamento}`);
console.log(`Maior faturamento: ${maiorFaturamento}`);
console.log(`Número de dias acima da média: ${diasAcimaMedia}`);