
const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")


const convertValues = async () => {
    const input = document.getElementById('input-real').value
    const realtext = document.getElementById('real-text')
    const currencyValue = document.getElementById('converted-value')

    const data = await fetch(' https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = (data.BTCBRL.high * 1000)
   

    realtext.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(input)
    if (select.value === 'US$ Dólar Americano') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(input / dolar)
    }


    if (select.value === '€ Euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(input / euro)
    }


    if (select.value === '₿ BitCoin') {
        currencyValue.innerHTML = new Intl.NumberFormat('bt-BT', {
            style: "currency",
            currency: "BTC"
        }).format(input / bitcoin)
    }



}
const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "€ Euro"
        currencyImg.src = "./img/Design sem nome 1.svg"
    }
    if (select.value === '₿ BitCoin') {
        currencyName.innerHTML = "₿ BitCoin"
        currencyImg.src = "./img/Design sem nome (1) 1.png"
    }
    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "₿ BitCoin"
        currencyImg.src = "./img/estados-unidos (1) 1.svg"
    }
    convertValues()

}



button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)