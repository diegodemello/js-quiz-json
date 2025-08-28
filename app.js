async function getQuestions(){
    try {
        const response = await fetch('questions.json');
        const data = await response.json();
        const body = document.body;

        data.forEach(question => {
            const container = document.createElement('div');
            container.classList.add('container-question');
            container.innerHTML = `
                <h2 class="title" id="title">${question.question}</h2>
                <div class="container-options">
                    <button class="option">${question.options[0]}</button>
                    <button class="option">${question.options[1]}</button>
                    <button class="option">${question.options[2]}</button>
                    <button class="option">${question.options[3]}</button>
                    <button class="option">${question.options[4]}</button>
                </div>
                <div class="container-explanation hide" id="explanation">
                    <p>${question.explanation}</p>
                </div>
            `;
            body.appendChild(container);

            const options = container.querySelectorAll('.option');
            options.forEach((option, index) => {
                option.addEventListener('click', () => {
                    const explanation = container.querySelector('.container-explanation');
                    if(index != question.correct_index){
                        console.log(index);
                        explanation.classList.remove('hide');
                    }else{
                        explanation.classList.remove('hide');
                        explanation.classList.add('correct');
                        explanation.innerHTML = 'Parabéns! Você acertou.'
                    }
                });
            });
        })
    } catch (error) {
        console.log(`Houve um erro na busa pela questões: ${error}`);
    }
}

getQuestions();