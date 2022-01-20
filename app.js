let wsETH = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@depth20@1000ms');
let ethPriceElement = document.getElementById('eth-price');
let wsBTC = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth20@1000ms');
let btcPriceElement = document.getElementById('btc-price');
let wsADA = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@depth20@1000ms');
let adaPriceElement = document.getElementById('ada-price');
let wsCAKE = new WebSocket('wss://stream.binance.com:9443/ws/cakeusdt@depth20@1000ms');
let cakePriceElement = document.getElementById('cake-price');
let wsFTM = new WebSocket('wss://stream.binance.com:9443/ws/ftmusdt@depth20@1000ms');
let ftmPriceElement = document.getElementById('ftm-price');

let lastPriceETH = null;
let lastPriceBTC = null;
let lastPriceADA = null;
let lastPriceCAKE = null;
let lastPriceFTM = null;

wsETH.onmessage = (Event) => {
    let ethPriceObject = JSON.parse(Event.data);
    let price = parseFloat(ethPriceObject.bids[0]).toFixed(2);


    ethPriceElement.innerText = parseFloat(ethPriceObject.bids[0]).toFixed(2);
    if (!lastPriceETH || lastPriceETH === price) {
        ethPriceElement.style.color = '#ffffff';
    }else if (lastPriceETH < price) {
        ethPriceElement.style.color = 'green';
    }else {
        ethPriceElement.style.color = 'red';
    }
    lastPriceETH = price;
};
wsFTM.onmessage = (Event) => {
    let ftmPriceObject = JSON.parse(Event.data);
    let price = parseFloat(ftmPriceObject.bids[0]).toFixed(2);


    ftmPriceElement.innerText = parseFloat(ftmPriceObject.bids[0]).toFixed(2);
    if (!lastPriceFTM || lastPriceFTM === price) {
        ftmPriceElement.style.color = '#ffffff';
    }else if (lastPriceFTM < price) {
        ftmPriceElement.style.color = 'green';
    }else {
        ftmPriceElement.style.color = 'red';
    }
    lastPriceFTM = price;
};
wsBTC.onmessage = (Event) => {
    let btcPriceObject = JSON.parse(Event.data);
    let price = parseFloat(btcPriceObject.bids[0]).toFixed(2);


    btcPriceElement.innerText = parseFloat(btcPriceObject.bids[0]).toFixed(2);
    if (!lastPriceBTC || lastPriceBTC === price) {
        btcPriceElement.style.color = '#ffffff';
    }else if (lastPriceBTC < price) {
        btcPriceElement.style.color = 'green';
    }else {
        btcPriceElement.style.color = 'red';
    }
    lastPriceBTC = price;
};
wsADA.onmessage = (Event) => {
    let adaPriceObject = JSON.parse(Event.data);
    let price = parseFloat(adaPriceObject.bids[0]).toFixed(2);


    adaPriceElement.innerText = parseFloat(adaPriceObject.bids[0]).toFixed(2);
    if (!lastPriceADA || lastPriceADA === price) {
        ethPriceElement.style.color = '#ffffff';
    }else if (lastPriceADA < price) {
        ethPriceElement.style.color = 'green';
    }else {
        ethPriceElement.style.color = 'red';
    }
    lastPriceADA = price;
};
wsCAKE.onmessage = (Event) => {
    let cakePriceObject = JSON.parse(Event.data);
    let price = parseFloat(cakePriceObject.bids[0]).toFixed(2);


    cakePriceElement.innerText = parseFloat(cakePriceObject.bids[0]).toFixed(2);
    if (!lastPriceCAKE || lastPriceCAKE === price) {
        ethPriceElement.style.color = '#ffffff';
    }else if (lastPriceCAKE < price) {
        ethPriceElement.style.color = 'green';
    }else {
        ethPriceElement.style.color = 'red';
    }
    lastPriceCAKE = price;
};