let wsETH = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@depth20@1000ms');
let ethPriceElement = document.getElementById('eth-price')
let wsBTC = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth20@1000ms');
let btcPriceElement = document.getElementById('btc-price')
let wsADA = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@depth20@1000ms');
let adaPriceElement = document.getElementById('ada-price')
let wsCAKE = new WebSocket('wss://stream.binance.com:9443/ws/cakeusdt@depth20@1000ms');
let cakePriceElement = document.getElementById('cake-price')

wsETH.onmessage = (Event) => {
    let ethPriceObject = JSON.parse(Event.data);
    ethPriceElement.innerText = parseFloat(ethPriceObject.bids[0]);
};
wsBTC.onmessage = (Event) => {
    let btcPriceObject = JSON.parse(Event.data);
    btcPriceElement.innerText = parseFloat(btcPriceObject.bids[0]);
};
wsADA.onmessage = (Event) => {
    let adaPriceObject = JSON.parse(Event.data);
    adaPriceElement.innerText = parseFloat(adaPriceObject.bids[0]);
};
wsCAKE.onmessage = (Event) => {
    let cakePriceObject = JSON.parse(Event.data);
    cakePriceElement.innerText = parseFloat(cakePriceObject.bids[0]);
};