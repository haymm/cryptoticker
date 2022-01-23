let wsETH = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@depth20@1000ms');
let ethPriceElement = document.getElementById('eth-currentPrice');
let ethPercentChangeElement = document.getElementById('eth-percentChange');
let wsDYDX = new WebSocket('wss://stream.binance.com:9443/ws/dydxusdt@depth20@1000ms');
let dydxPriceElement = document.getElementById('dydx-currentPrice');
let dydxPercentChangeElement = document.getElementById('dydx-percentChange');
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
let lastPriceDYDX = null;
let lastPriceADA = null;
let lastPriceCAKE = null;
let lastPriceFTM = null;
let lastPriceLUNA = null;

let entryPriceADA = 1.2900;
let entryPriceADAElement = document.getElementById('ada-entryPrice');
entryPriceADAElement.innerText = entryPriceADA.toFixed(4);
let entryPriceCAKE = 11.4300;
let entryPriceCAKEElement = document.getElementById('cake-entryPrice');
entryPriceCAKEElement.innerText = entryPriceCAKE.toFixed(4);
let entryPriceETH = 2506.1200;
let entryPriceETHElement = document.getElementById('eth-entryPrice');
entryPriceETHElement.innerText = entryPriceETH.toFixed(4);
let entryPriceFTM = 2.6800;
let entryPriceFTMElement = document.getElementById('ftm-entryPrice');
entryPriceFTMElement.innerText = entryPriceFTM.toFixed(4);
let entryPriceLUNA = 70.1000;
let entryPriceLUNAElement = document.getElementById('luna-entryPrice');
entryPriceLUNAElement.innerText = entryPriceLUNA.toFixed(4);
let entryPriceOMI = 0.0750;
let entryPriceOMIElement = document.getElementById('omi-entryPrice');
entryPriceOMIElement.innerText = entryPriceOMI.toFixed(4);
let entryPriceDYDX = 6.4842;
let entryPriceDYDXElement = document.getElementById('dydx-entryPrice');
entryPriceDYDXElement.innerText = entryPriceDYDX.toFixed(4);


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
    ethPercentChange = (( (parseFloat(ethPriceObject.bids[0]).toFixed(4) - entryPriceETH ) / entryPriceETH ) * 100).toFixed(2);
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
    let ftmPercentChange = (( (parseFloat(ftmPriceObject.bids[0]).toFixed(4) - entryPriceFTM ) / entryPriceFTM ) * 100).toFixed(2);
    ftmPercentChangeElement.innerText = ftmPercentChange + '%';
    if (ethPercentChange > 0) {
        ftmPercentChangeElement.style.color = 'green';
    } else {
        ftmPercentChangeElement.style.color = 'red';
    }
};
wsDYDX.onmessage = (Event) => {
    let dydxPriceObject = JSON.parse(Event.data);
    let price = parseFloat(dydxPriceObject.bids[0]).toFixed(4);


    dydxPriceElement.innerText = parseFloat(dydxPriceObject.bids[0]).toFixed(4);
    if (!lastPriceDYDX || lastPriceDYDX === price) {
        dydxPriceElement.style.color = '#000000';
    }else if (lastPriceDYDX < price) {
        dydxPriceElement.style.color = 'green';
    }else {
        dydxPriceElement.style.color = 'red';
    }
    lastPriceDYDX = price;
    dydxPercentChange = (( (parseFloat(dydxPriceObject.bids[0]).toFixed(4) - entryPriceDYDX ) / entryPriceDYDX ) * 100).toFixed(2);
    dydxPercentChangeElement.innerText = dydxPercentChange + '%';
    if (dydxPercentChange > 0) {
        dydxPercentChangeElement.style.color = 'green';
    } else {
        dydxPercentChangeElement.style.color = 'red';
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
    adaPercentChange = (( (parseFloat(adaPriceObject.bids[0]).toFixed(4) - entryPriceADA ) / entryPriceADA ) * 100).toFixed(2);
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
    cakePercentChange = (( (parseFloat(cakePriceObject.bids[0]).toFixed(4) - entryPriceCAKE ) / entryPriceCAKE ) * 100).toFixed(2);
    cakePercentChangeElement.innerText = cakePercentChange + '%';
    if (cakePercentChange > 0) {
        cakePercentChangeElement.style.color = 'green';
    } else {
        cakePercentChangeElement.style.color = 'red';
    }
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
    lunaPercentChange = (( (parseFloat(lunaPriceObject.bids[0]).toFixed(4) - entryPriceLUNA ) / entryPriceLUNA ) * 100).toFixed(2);
    lunaPercentChangeElement.innerText = lunaPercentChange + '%';
    if (lunaPercentChange > 0) {
        lunaPercentChangeElement.style.color = 'green';
    } else {
        lunaPercentChangeElement.style.color = 'red';
    }
};