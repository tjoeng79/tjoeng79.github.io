class Quiz {
    constructor (question, choices) {
        this.question = question;
        this.choices = choices;
    }

    answer() {
        return this.choices[0];
    };
}

function generateQuizData() {
    const quiz1 = new Quiz('Where is the capital of Japan?',[1,'Tokyo','London','New York','Sydney']);
    const quiz2 = new Quiz('What is the symbol of water?',[2,'O2','H2O','NaCl','CO2']);
    const quiz3 = new Quiz('Who discover light bulb?',[3,'Alfred Nobel','Galileo Galilei','Thomas Edison','Wright Brothers']);
    const quiz4 = new Quiz('When was WWII?',[4,'1910','1920','1930','1940']);
    const quiz5 = new Quiz('Why thing fall down when thrown-up in the air?',[4,'Atmosphere','Mass','Air Pressure','Gravity']);

    const quizes = [];
    quizes.push(quiz1);
    quizes.push(quiz2);
    quizes.push(quiz3);
    quizes.push(quiz4);
    quizes.push(quiz5);

    return quizes;
}

const questionText_p = document.getElementById('question-text');
const answer1_li = document.getElementById('answer1');
const answer2_li = document.getElementById('answer2');
const answer3_li = document.getElementById('answer3');
const answer4_li = document.getElementById('answer4');

function showQuiz(no) {
    questionText_p.textContent = `${no+1}. ${quizData[no].question}`;
    answer1_li.innerHTML = `a. ${quizData[no].choices[1]}`;
    answer2_li.innerHTML = `b. ${quizData[no].choices[2]}`;
    answer3_li.innerHTML = `c. ${quizData[no].choices[3]}`;
    answer4_li.innerHTML = `d. ${quizData[no].choices[4]}`;
}

function validateAnswer(no, answer) {
    let quizAnswer = `answer${quizData[no].answer()}`;
    return (answer == quizAnswer) ? true : false;
}

function clearSelection(){
    answer1_li.setAttribute('class','');
    answer2_li.setAttribute('class','');
    answer3_li.setAttribute('class','');
    answer4_li.setAttribute('class','');
}

const quizData = generateQuizData();

let quizNo = 0;
showQuiz(quizNo);

const quizPrev_button = document.getElementById('quiz-prev');
quizPrev_button.addEventListener('click',function(){
    if (quizNo > 0) {
        quizNo--;
        clearSelection();
        showQuiz(quizNo);
    }
});

const quizNext_button = document.getElementById('quiz-next');
quizNext_button.addEventListener('click',function(){
    if (quizNo < quizData.length - 1) {
        quizNo++;
        clearSelection();
        showQuiz(quizNo);
    }
});

const answerChoices_li = document.querySelectorAll('.answer-area ul li');
answerChoices_li.forEach(function(li){
    li.addEventListener('click',function(){
        clearSelection();

        let selectedAnswer = li.getAttribute('id');
        let result = validateAnswer(quizNo,selectedAnswer);

        if (result) {
            li.classList.add('answer-true');
        } else {
            li.classList.add('answer-false');
        }
    });
});