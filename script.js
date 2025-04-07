document.getElementById("fetchData").addEventListener("click", async () => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "데이터를 불러오는 중...";

    try {
        // 예제 API (실제 비트코인 예측 API로 변경해야 함)
        const response = await fetch("https://api.coinpaprika.com/v1/tickers/btc-bitcoin");
        const data = await response.json();
        
        // 현재 비트코인 가격 가져오기
        const price = data.quotes.KRW.price;
        resultDiv.innerHTML = `<strong>현재 비트코인 가격:</strong> $${price}`;
        
    } catch (error) {
        resultDiv.innerHTML = "데이터를 불러오는 데 실패했습니다.";
    }
});
