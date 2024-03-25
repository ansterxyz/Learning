document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.querySelector('#eventForm');
    const eventCardsContainer = document.querySelector('.event-cards');

    eventForm.addEventListener('submit', event => {
        event.preventDefault();

        const eventName = document.querySelector('#eventName').value;
        const eventDate = document.querySelector('#eventDate').valueAsDate;
        const eventDescription = document.querySelector('#eventDescription').value;
        const eventLocation = document.querySelector('#eventLocation').value;
        const eventImage = document.querySelector('#eventImage').files[0];

        if (!eventName || !eventDate || !eventDescription || !eventLocation || !eventImage) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function () {
            const eventCard = document.createElement('div');
            eventCard.classList.add('contract-card');
            const randomColor = getRandomColor();
            eventCard.style.backgroundColor = randomColor;
            eventCard.innerHTML = `
                <div class="event-info">
                    <h3>${eventName}</h3>
                    <p><strong>Дата события:</strong> ${formatDate(eventDate)}</p>
                    <p><strong>Описание:</strong> ${eventDescription}</p>
                    <p><strong>Место:</strong> ${eventLocation}</p>
                </div>
                <img src="${reader.result}" alt="Event Image">
            `;
            eventCardsContainer.appendChild(eventCard);
        };
        reader.readAsDataURL(eventImage);
    });
});

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}

function getRandomColor() {
    const colors = ['olive', 'silver', 'golden'];
    return getComputedStyle(document.body).getPropertyValue(`--${colors[Math.floor(Math.random() * colors.length)]}`);
}