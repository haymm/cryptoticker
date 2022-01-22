let wsETH = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@depth20@1000ms');
let ethPriceElement = document.getElementById('eth-currentPrice');
let wsBTC = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth20@1000ms');
let btcPriceElement = document.getElementById('btc-currentPrice');
let wsADA = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@depth20@1000ms');
let adaPriceElement = document.getElementById('ada-currentPrice');
let wsCAKE = new WebSocket('wss://stream.binance.com:9443/ws/cakeusdt@depth20@1000ms');
let cakePriceElement = document.getElementById('cake-currentPrice');
let wsFTM = new WebSocket('wss://stream.binance.com:9443/ws/ftmusdt@depth20@1000ms');
let ftmPriceElement = document.getElementById('ftm-currentPrice');

let lastPriceETH = null;
let lastPriceBTC = null;
let lastPriceADA = null;
let lastPriceCAKE = null;
let lastPriceFTM = null;

let entryPriceADA = 1.29;
let entryPriceCAKE = 11.43;
let entryPriceETH = 2598.52;
let entryPriceFTM = 2.68;
let entryPriceLUNA = 70.1;
let entryPriceOMI = 0.075;

wsETH.onmessage = (Event) => {
    let ethPriceObject = JSON.parse(Event.data);
    let price = parseFloat(ethPriceObject.bids[0]).toFixed(4);


    ethPriceElement.innerText = parseFloat(ethPriceObject.bids[0]).toFixed(4);
    if (!lastPriceETH || lastPriceETH === price) {
        ethPriceElement.style.color = '#000000';
    }else if (lastPriceETH < price) {
        ethPriceElement.style.color = 'green';
    }else {
        ethPriceElement.style.color = 'red';
    }
    lastPriceETH = price;
};
wsFTM.onmessage = (Event) => {
    let ftmPriceObject = JSON.parse(Event.data);
    let price = parseFloat(ftmPriceObject.bids[0]).toFixed(4);


    ftmPriceElement.innerText = parseFloat(ftmPriceObject.bids[0]).toFixed(4);
    if (!lastPriceFTM || lastPriceFTM === price) {
        ftmPriceElement.style.color = '#000000';
    }else if (lastPriceFTM < price) {
        ftmPriceElement.style.color = 'green';
    }else {
        ftmPriceElement.style.color = 'red';
    }
    lastPriceFTM = price;
};
wsBTC.onmessage = (Event) => {
    let btcPriceObject = JSON.parse(Event.data);
    let price = parseFloat(btcPriceObject.bids[0]).toFixed(4);


    btcPriceElement.innerText = parseFloat(btcPriceObject.bids[0]).toFixed(4);
    if (!lastPriceBTC || lastPriceBTC === price) {
        btcPriceElement.style.color = '#000000';
    }else if (lastPriceBTC < price) {
        btcPriceElement.style.color = 'green';
    }else {
        btcPriceElement.style.color = 'red';
    }
    lastPriceBTC = price;
};
wsADA.onmessage = (Event) => {
    let adaPriceObject = JSON.parse(Event.data);
    let price = parseFloat(adaPriceObject.bids[0]).toFixed(4);


    adaPriceElement.innerText = parseFloat(adaPriceObject.bids[0]).toFixed(4);
    if (!lastPriceADA || lastPriceADA === price) {
        ethPriceElement.style.color = '#000000';
    }else if (lastPriceADA < price) {
        ethPriceElement.style.color = 'green';
    }else {
        ethPriceElement.style.color = 'red';
    }
    lastPriceADA = price;
};
wsCAKE.onmessage = (Event) => {
    let cakePriceObject = JSON.parse(Event.data);
    let price = parseFloat(cakePriceObject.bids[0]).toFixed(4);


    cakePriceElement.innerText = parseFloat(cakePriceObject.bids[0]).toFixed(4);
    if (!lastPriceCAKE || lastPriceCAKE === price) {
        ethPriceElement.style.color = '#000000';
    }else if (lastPriceCAKE < price) {
        ethPriceElement.style.color = 'green';
    }else {
        ethPriceElement.style.color = 'red';
    }
    lastPriceCAKE = price;
};