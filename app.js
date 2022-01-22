let wsETH = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@depth20@1000ms');
let ethPriceElement = document.getElementById('eth-currentPrice');
let ethPercentChangeElement = document.getElementById('eth-percentChange');
let wsBTC = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth20@1000ms');
let btcPriceElement = document.getElementById('btc-currentPrice');
let btcPercentChangeElement = document.getElementById('btc-percentChange');
let wsADA = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@depth20@1000ms');
let adaPriceElement = document.getElementById('ada-currentPrice');
let adaPercentChangeElement = document.getElementById('ada-percentChange');
let wsCAKE = new WebSocket('wss://stream.binance.com:9443/ws/cakeusdt@depth20@1000ms');
let cakePriceElement = document.getElementById('cake-currentPrice');
let cakePercentChangeElement = document.getElementById('cake-percentChange');
let wsFTM = new WebSocket('wss://stream.binance.com:9443/ws/ftmusdt@depth20@1000ms');
let ftmPriceElement = document.getElementById('ftm-currentPrice');
let ftmPercentChangeElement = document.getElementById('ftm-percentChange');
let wsLUNA = new WebSocket('wss://stream.binance.com:9443/ws/lunausdt@depth20@1000ms');
let lunaPriceElement = document.getElementById('luna-currentPrice');
let lunaPercentChangeElement = document.getElementById('luna-percentChange');

let lastPriceETH = null;
let lastPriceBTC = null;
let lastPriceADA = null;
let lastPriceCAKE = null;
let lastPriceFTM = null;
let lastPriceLUNA = null;

let entryPriceADA = 1.2900;
let entryPriceCAKE = 11.4300;
let entryPriceETH = 2506.1200;
let entryPriceFTM = 2.6800;
let entryPriceLUNA = 70.1000;
let entryPriceOMI = 0.0750;
//let entryPriceBTC = 1000;

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
    ethPercentChange = (( (parseFloat(ethPriceObject.bids[0]).toFixed(4) - entryPriceETH ) / parseFloat(ethPriceObject.bids[0]).toFixed(4) ) * 100).toFixed(1);
    ethPercentChangeElement.innerText = ethPercentChange + '%';
    if (ethPercentChange >= 0) {
        ethPercentChangeElement.style.color = 'green';
    } else {
        ethPercentChangeElement.style.color = 'red';
    }
    
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
    let ftmPercentChange = (( (parseFloat(ftmPriceObject.bids[0]).toFixed(4) - entryPriceFTM ) / parseFloat(ftmPriceObject.bids[0]).toFixed(4) ) * 100).toFixed(1);
    ftmPercentChangeElement.innerText = ftmPercentChange + '%';
    if (ethPercentChange > 0) {
        ftmPercentChangeElement.style.color = 'green';
    } else {
        ftmPercentChangeElement.style.color = 'red';
    }
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
    btcPercentChange = (( (parseFloat(btcPriceObject.bids[0]).toFixed(4) - entryPriceBTC ) / parseFloat(btcPriceObject.bids[0]).toFixed(4) ) * 100).toFixed(1);
    btcPercentChangeElement.innerText = btcPercentChange + '%';
    if (btcPercentChange > 0) {
        btcPercentChangeElement.style.color = 'green';
    } else {
        btcPercentChangeElement.style.color = 'red';
    }
};
wsADA.onmessage = (Event) => {
    let adaPriceObject = JSON.parse(Event.data);
    let price = parseFloat(adaPriceObject.bids[0]).toFixed(4);


    adaPriceElement.innerText = parseFloat(adaPriceObject.bids[0]).toFixed(4);
    if (!lastPriceADA || lastPriceADA === price) {
        adaPriceElement.style.color = '#000000';
    }else if (lastPriceADA < price) {
        adaPriceElement.style.color = 'green';
    }else {
        adaPriceElement.style.color = 'red';
    }
    lastPriceADA = price;
    adaPercentChange = (( (parseFloat(adaPriceObject.bids[0]).toFixed(4) - entryPriceADA ) / parseFloat(adaPriceObject.bids[0]).toFixed(4) ) * 100).toFixed(1);
    adaPercentChangeElement.innerText = adaPercentChange + '%';
    if (adaPercentChange > 0) {
        adaPercentChangeElement.style.color = 'green';
    } else {
        adaPercentChangeElement.style.color = 'red';
    }
};
wsCAKE.onmessage = (Event) => {
    let cakePriceObject = JSON.parse(Event.data);
    let price = parseFloat(cakePriceObject.bids[0]).toFixed(4);


    cakePriceElement.innerText = parseFloat(cakePriceObject.bids[0]).toFixed(4);
    if (!lastPriceCAKE || lastPriceCAKE === price) {
        cakePriceElement.style.color = '#000000';
    }else if (lastPriceCAKE < price) {
        cakePriceElement.style.color = 'green';
    }else {
        cakePriceElement.style.color = 'red';
    }
    lastPriceCAKE = price;
};
wsLUNA.onmessage = (Event) => {
    let lunaPriceObject = JSON.parse(Event.data);
    let price = parseFloat(lunaPriceObject.bids[0]).toFixed(4);


    lunaPriceElement.innerText = parseFloat(lunaPriceObject.bids[0]).toFixed(4);
    if (!lastPriceLUNA || lastPriceLUNA === price) {
        lunaPriceElement.style.color = '#000000';
    }else if (lastPriceLUNA < price) {
        lunaPriceElement.style.color = 'green';
    }else {
        lunaPriceElement.style.color = 'red';
    }
    lastPriceLUNA = price;
};