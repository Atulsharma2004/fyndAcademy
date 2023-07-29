const quizData = [{
            question: "Which language is run in a web server ?",
            a: "Java",
            b: "Python",
            c: "Javascript",
            d: "C",
            correct: "c"
        }, {
            question: "What does CSS stands for ?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cacading Simple Sheet",
            d: "Cars SUVs Sailboats",
            correct: "b"
        }, {
            question: "The web is based on ?",
            a: "Images",
            b: "Text",
            c: "Information",
            d: "HTML",
            correct: "d"
        }, {
            question: "Which control is used when the input from the user may extend to several lines?",
            a: "multiline text area",
            b: "check box",
            c: "password control",
            d: "menu control",
            correct: "a"
        }, {
            question: "The item present within the angled brackets in an HTML tag is",
            a: "identifier",
            b: "data",
            c: "tags",
            d: "text",
            correct: "a"
        }];

        const quiz = document.getElementById('quiz')
        const answerEls = document.querySelectorAll('.answer')
        const questionEl = document.getElementById('question')
        const a_text = document.getElementById('a_text')
        const b_text = document.getElementById('b_text')
        const c_text = document.getElementById('c_text')
        const d_text = document.getElementById('d_text')
        const submitBtn = document.getElementById('submit')

        let currQuiz = 0;
        let score = 0;
        let point = 0;

        loadQuiz();

        function loadQuiz() {
            deselectAnswer()
            const currQuizData = quizData[currQuiz]
            questionEl.innerText = currQuizData.question
            a_text.innerHTML = `A.${currQuizData.a}`
            b_text.innerHTML = `B.${currQuizData.b}`
            c_text.innerHTML = `C.${currQuizData.c}`
            d_text.innerHTML = `D.${currQuizData.d}`
        }

        function deselectAnswer() {
            answerEls.forEach(answerEl => answerEl.checked = false)
        }

        function getSelect() {
            let answer
            answerEls.forEach(answerEl => {
                if (answerEl.checked) {
                    answer = answerEl.id
                }
            })
            return answer
        }

        submitBtn.addEventListener('click', () => {
            const answer = getSelect()

            if (answer) {
                if (answer === quizData[currQuiz].correct) {
                    score++
                    point += 2
                }

                currQuiz++

                if (currQuiz < quizData.length) {
                    loadQuiz()
                } else {
                    if (point >= 6) {
                        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2><br>
                    <h3 style="text-align: center;font-size:0.9rem;">You got ${point}/${quizData.length*2} points</h3>
                    <button onclick="location.reload()">Reload</button>`
                    } else {
                        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2><br>
                    <h3 style="text-align: center;font-size:0.9rem;">You got ${point}/${quizData.length*2} points</h3>
                    <button disabled &:not:hover {background-color: #04adc4;}>Reload</button>`
                    }
                }
            }
        })