const calculate = () => {
    // Получаем значения количества и стоимости различных услуг
    const inputTile = parseInt(document.querySelector('#tile').value);
    const priceTile = parseFloat(document.querySelector('#priceTile').value);

    const inputPlastering = parseInt(document.querySelector('#plastering').value);
    const pricePlastering = parseFloat(document.querySelector('#pricePlastering').value);

    const inputPlumbing = parseInt(document.querySelector('#plumbing').value);
    const pricePlumbing = parseFloat(document.querySelector('#pricePlumbing').value);

    if (isNaN(inputTile) || isNaN(priceTile) || isNaN(inputPlastering) || isNaN(pricePlastering) || isNaN(inputPlumbing) || isNaN(pricePlumbing)) {
        alert("Заполните все поля!");
        return;
    }

    // Рассчитываем общий объем работ и их стоимостб
    const totalWorkVolume = inputTile + inputPlastering + inputPlumbing;
    const totalCost = (inputTile * priceTile) + (inputPlastering * pricePlastering) + (inputPlumbing * pricePlumbing);

    // Отображаем результаты
    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML =
        `<p>Общий объем работ: ${totalWorkVolume}</p>
         <p>Общая стоимость: ${totalCost.toFixed(2)}</p>`;
};