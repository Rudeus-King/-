const magicBall = document.querySelector('.magic-ball');
const answerElement = document.querySelector('#answer span');
const askButton = document.getElementById('askButton');
const questionInput = document.getElementById('questionInput');

// Массив возможных ответов
const answers = [
    "Бесспорно",
    "Предрешено",
    "Никаких сомнений",
    "Определённо да",
    "Можешь быть уверен в этом",
    "Мне кажется — да",
    "Вероятнее всего",
    "Хорошие перспективы",
    "Знаки говорят — да",
    "Да",
    "Пока не ясно, попробуй снова",
    "Спроси позже",
    "Лучше не рассказывать",
    "Сейчас нельзя предсказать",
    "Сконцентрируйся и спроси опять",
    "Даже не думай",
    "Мой ответ — нет",
    "По моим данным — нет",
    "Перспективы не очень хорошие",
    "Весьма сомнительно"
];

function getAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

async function updateAnswer() {
    if (!questionInput.value.trim()) {
        answerElement.textContent = 'Сначала задайте вопрос!';
        return;
    }
    
    answerElement.textContent = 'Думаю...';
    
    // Добавляем небольшую задержку для эффекта
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const answer = getAnswer();
    answerElement.textContent = answer;
    
    // Очищаем поле ввода после получения ответа
    questionInput.value = '';
}

magicBall.addEventListener('click', updateAnswer);
askButton.addEventListener('click', updateAnswer);

// Добавляем обработчик для клавиши Enter
questionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        updateAnswer();
    }
}); 