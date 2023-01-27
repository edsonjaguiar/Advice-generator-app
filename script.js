const cardId = document.querySelector('#card__advice-title__id');
const cardAdvice = document.querySelector('#card__advice');
const cardButton = document.querySelector('#card__button-icon');

cardButton.addEventListener('click', fetchNewAdvice);

async function fetchNewAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Bad response', {
                cause: {
                    res,
                },
            });
        }

        cardButton.disabled = false;
        cardId.innerText = data.slip.id;
        cardAdvice.textContent = `"${data.slip.advice}"`;
    } catch (err) {
        switch (err.cause.status) {
            case 400:
                break;
            case 401:
                break;
            case 404:
                break;
            case 500:
                break;
        }
    }
}

fetchNewAdvice();
