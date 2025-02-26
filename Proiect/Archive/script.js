document.addEventListener("DOMContentLoaded", () => {
    const quizData = [
        {
            "question": "Who directed the movie 'Oppenheimer'?",
            "options": ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
            "answer": "Christopher Nolan"
        },
        {
            "question": "Who played J. Robert Oppenheimer?",
            "options": ["Cillian Murphy", "Leonardo DiCaprio", "Tom Hanks", "Brad Pitt"],
            "answer": "Cillian Murphy"
        },
        {
            "question": "Who played Kitty Oppenheimer?",
            "options": ["Emma Stone", "Jennifer Lawrence", "Emily Blunt", "Florence Pugh"],
            "answer": "Emily Blunt"
        },
        {
            "question": "Who played Lewis Strauss?",
            "options": ["Matt Damon", "Robert Downey Jr.", "Brad Pitt", "Robert De Niro"],
            "answer": "Robert Downey Jr."
        },
        {
            "question": "Where did the Manhattan Project take place?",
            "options": ["Seattle", "Los Angeles", "Los Alamos", "Fort Lauderdale"],
            "answer": "Los Alamos"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById("quizContainer");
    const nextButton = document.getElementById("nextButton");
    const retakeButton = document.getElementById("retakeButton");
    const message = document.getElementById("message");

    const loadQuestion = (index) => {
        if (index >= quizData.length) {
            showResult();
            return;
        }

        const questionData = quizData[index];
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <p>${questionData.question}</p>
            ${questionData.options.map(option => `
                <label>
                    <input type="radio" name="answer" value="${option}"> ${option}
                </label><br>
            `).join('')}
        `;

        quizContainer.innerHTML = '';
        quizContainer.appendChild(questionElement);
        startTimeout();
        questionElement.style.color = randomColor;
    };

    const showResult = () => {
    quizContainer.innerHTML = `<p>Your score is ${score}/${quizData.length}</p>`;
    nextButton.style.display = "none";
    retakeButton.style.display = "block";
    document.getElementById("quizForm").style.display = "block";
};

    const loadProgress = () => {
        loadQuestion(currentQuestionIndex);
    };

    const markSelectedAnswer = (event) => {
        const selectedOption = event.target;
        if (selectedOption.tagName === 'INPUT' && selectedOption.type === 'radio') {
            const questionElement = selectedOption.closest('.question');
            const allOptions = questionElement.querySelectorAll('label');
            allOptions.forEach(label => label.style.fontWeight = 'normal');
            const selectedLabel = selectedOption.closest('label');
            selectedLabel.style.fontWeight = 'bold';
            questionElement.classList.add('selected');
        }
    };

    const stopEventPropagation = (event) => {
        event.stopPropagation();
    };

    const applyRandomColor = () => {
    const elements = document.querySelectorAll('.question');
    elements.forEach(element => {
        const randomColor = getRandomColor();
        element.style.color = randomColor;
    });
};

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z\s]+$/;
        return nameRegex.test(name);
    };

    const startTimeout = () => {
        setTimeout(() => {
            alert("Time's up for this question!");
        }, 10000);
    };

    const saveScoreToLocalStorage = () => {
        localStorage.setItem('quizScore', String(score));
    };

    const loadScoreFromLocalStorage = () => {
        const savedScore = localStorage.getItem('quizScore');
        if (savedScore) {
            score = parseInt(savedScore, 10);
        }
    };

    nextButton.addEventListener("click", () => {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (!selectedOption) {
            alert("Please select an answer.");
            return;
        }

        const answer = selectedOption.value;
        if (answer === quizData[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    });

    retakeButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.style.display = "block";
        retakeButton.style.display = "none";
        loadQuestion(currentQuestionIndex);

        localStorage.removeItem('quizScore');
    });

    quizContainer.addEventListener("click", markSelectedAnswer);
    quizContainer.addEventListener("click", stopEventPropagation);

    loadProgress();
    loadScoreFromLocalStorage();
});