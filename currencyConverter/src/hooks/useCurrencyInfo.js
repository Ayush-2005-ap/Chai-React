import {useEffect , useState} from 'react'

function useCurrencyInfo(currency) {
    const [Data, SetData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res) => res.json()).then((res) => SetData(res[currency]))
        console.log(Data);
    } , [currency ])
    console.log(Data);
    return Data;
}

export default useCurrencyInfo;