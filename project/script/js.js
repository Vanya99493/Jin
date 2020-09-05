const startGame = document.getElementById('start-button')
const blackEl = document.getElementById('black')
const startEl = document.getElementById('start')
const introEl = document.getElementById('intro')
const introAnimEl = document.getElementById('intro-anim')
const introHintEl = document.getElementById('intro-hint')

    // String for result
    const res1 = 'Ну конечно же правильный овтет это: "тот, кто много говорит", потому-что тот кто много говорит, тот на дне уже кормит рыб))'
    const res2 = 'Конечно стена... А чем она ещё может быть?'
    const res3 = 'Ну конечно? Он же последний!!!'
    const res4 = 'Ты ещё не в курсе? 9 марта. Вот он уже в курсе: https://www.youtube.com/watch?v=OJDRvjvpe_M'
    const res5 = 'А почему бы и нет?'

function clickOnStartButton(){
    blackEl.className = 'black black-z-ind'
    startEl.className = 'start start-z-ind'
    introEl.className = 'intro'
    introAnimEl.className = 'intro__img intro-anim'
    introHintEl.className = 'intro__hint intro__hint-anim'
}
startGame.addEventListener('click',clickOnStartButton)

const smokeLeftEl = document.getElementById('smoke-left')
const smokeRightEl = document.getElementById('smoke-right')
const smokeEl = document.getElementById('smoke')
const smokeJinEl = document.getElementById('smoke-jin')
const smokeJinSmokeAnimEl = document.getElementById('smoke-jin__smoke-anim')
const cloudImgEl = document.getElementById('cloud-img')
const cloudEl = document.getElementById('cloud')
const helloTextEl = document.getElementById('hello-text-section')

function openJin(){
    introHintEl.className = 'intro__hint intro__hint-anim intro__hint-off'
    smokeEl.className = 'smoke'
    smokeLeftEl.className = 'smoke__left-img smoke__li'
    smokeRightEl.className = 'smoke__right-img smoke__ri'
    smokeJinEl.className = 'smoke-jin'
    smokeJinSmokeAnimEl.className = 'smoke-jin__smoke smoke-jin__smoke-anim'
    cloudImgEl.className = 'cloud-img cloud-img-anim'
    cloudEl.className = 'cloud'
    helloTextEl.className = 'hello-text hello-text-anim'
}
introAnimEl.addEventListener('click', openJin)

// --------------
let jinText = document.getElementById('dialog-with-jin')
const skipButton = document.getElementById('button-skip')
// --------------

const jin1 = document.getElementById('jin-1')
const jin2 = document.getElementById('jin-2')
const jin3 = document.getElementById('jin-3')
const jin4 = document.getElementById('jin-4')

//--------------
const registrationBlock = document.getElementById('registration')
const registrationInput = document.getElementById('registration-input')
const registrationButton = document.getElementById('registration-button')
//--------------

/*---*/
const gameBlockEl = document.getElementById('game-block')
function linkToRules(){
    gameBlockEl.className = 'game-block'
}
/*---*/

let tapCalculated = 0
function nextText(){
    if(tapCalculated === 0){
        jinText.innerHTML = 'Ха! Поверил? Ха-ха. Как же затекло тело сидеть в этой лампе. Спасибо тебе!'
        tapCalculated = 10
        smokeJinEl.className = 'smoke-jin smoke-jin-naher-z-ekrana'
        jin1.className = 'jin-1'
        introAnimEl.className = 'position-0'//-----------------
    } else if(tapCalculated === 10){
        jinText.innerHTML = 'Ву-у-ух! Не потерял я свою силу! Ты конечно надеешся на три желания, но у меня свои правила...'
        tapCalculated = 20
        jin1.className = 'jin-1 jin-1-z-ind'
        jin2.className = 'jin-2'
    } else if(tapCalculated === 20){
        jinText.innerHTML = 'Такс... Для начала ты должен поиграть со мной в игру. Ты готов?'
        tapCalculated = 30
        jin2.className = 'jin-2 jin-1-z-ind'
        jin3.className = 'jin-3'
    } else if(tapCalculated === 30){
        jinText.innerHTML = 'Отлично! Тогда предлагаю познакомится. Меня зовут Джин. А как зовут тебя?'
        tapCalculated = 40
        jin3.className = 'jin-3 jin-1-z-ind'
        jin4.className = 'jin-4'
        registrationBlock.className = 'registration'
        skipButton.className = 'hello-text__button hello-text__button-z-ind'
    } else if(tapCalculated === 40){
        linkToRules()
    }
}

skipButton.addEventListener('click', nextText)


let i = 0

function clickOnButtonRegistration(){
    let name = registrationInput.value
    if(name.length === 0){
        if(i < 3){
            alert('Введите своё имя!!!')
            i += 1
        } else{
            alert('Ты издеваешся?')
            alert('Введите своё имя!!!')
        }
    } else if(name.length > 0){
        jinText.innerHTML = 'Привет, ' + name + '! Теперь приступим к правилам: ...'
        skipButton.className = 'hello-text__button'
        registrationBlock.className = 'registration registration-z-ind'
    }
}

registrationButton.addEventListener('click', clickOnButtonRegistration)



const playGame = document.getElementById('game-game')
const buttonLoadStart = document.getElementById('button-load-start')
const gameCenter = document.getElementById('game-center')

let jinTextForGame = document.getElementById('jin-text-for-game')
let buttonForGame = document.getElementById('game-button')

let yl = 0
let bls = 0 

function clickOnGameButton(){
    if(yl === 0){
        buttonForGame.innerHTML = 'правила'
        yl = 1
        playGame.className = 'game__game'
        renameJinText()
    } else if(yl === 1){
        buttonForGame.innerHTML = 'играть'
        yl = 0
        playGame.className = 'game__game game__game-z-ind'
        jinTextForGame.innerHTML = 'Ознакомся с правилами! Там всё написано, так-что я не буду роспинатся...'
    }
}

buttonForGame.addEventListener('click', clickOnGameButton)


function startButtonClick(){
    if(bls === 0){
        gameCenter.innerHTML = `
        <div class="game__mystery" id="game-mystery"></div>
        <div class="game__row-2">
            <input type="text" placeholder="введите ответ" class="game__answer" id="game-answer"></input>
            <button class="game__check" id="game-check">Отправить</button>
        </div>`
        gameCenter.className = 'game__colums game__colums-for-game'
        bls = 1
        chooseMistery()
    }
}
buttonLoadStart.addEventListener('click', startButtonClick)

function renameJinText(){
    if(bls === 0){
        jinTextForGame.innerHTML = 'Ты - страдай, а я посмотрю на твои успехи) Удачи!!!'
    } else {
        jinTextForGame.innerHTML = 'Мне кажется, у тебя ничего не получится...'
    }
}


function repead(){
    const gameRules2Child = document.getElementById('game-rules-2-child')
    const jinKillYou = document.getElementById('jin-kill-you')
    jinKillYou.className = 'jin-kill-you z-ind'
    // g1 = 2
    gameRules2Child.innerHTML = '2. У вас будет всего 1 попыткa.'
    
    oneOfMistery = mistery[Math.floor(Math.random() * mistery.length)]
    gameMistery.innerHTML = oneOfMistery
    gameCheck.addEventListener('click', checkYourAnswer)

    clickOnGameButton()
}
        
const jinKYBut = document.getElementById('jin-k-y-but')
jinKYBut.addEventListener('click', repead)

let g1

let gameAnswer
let gameMistery
let gameCheck
let mistery = [
    'Кто проживает на дне океана?',
    'Если окно это дверь, тогда стена это ...',
    'Какого цвета красный провод?',
    'Какого чила в етом году празнуют 8 марта?',
    'Сколько лет коту, если собаке столькоже?'
]
let oneOfMistery 


function chooseMistery(){
    g1 = 2
    function youLose(){
        const ifYouLose = document.getElementById('if-you-lose-1')
        let innerLose = document.getElementById('inner-you-lose')
        
        ifYouLose.className = 'if-you-lose-1'
        innerLose.innerHTML = 'Ответ неверный! У вас осталось ' + g1 + ' попыток. Для того что-бы продолжыть нажмите на экран...'

        g1 -= 1

        ifYouLose.addEventListener('click', () => ifYouLose.className = 'if-you-lose-1 z-ind')
    }
    function youOnlyLose(){
        const ifYouLose = document.getElementById('if-you-lose-1')
        const jinKillYou = document.getElementById('jin-kill-you')
        let innerLose = document.getElementById('inner-you-lose')
        
        ifYouLose.className = 'if-you-lose-1'
        innerLose.innerHTML = 'Ответ неверный! Вы исчерпали лимит попыток. Джин вами недоволен...'

        ifYouLose.addEventListener('click', () => jinKillYou.className = 'jin-kill-you')
    }
    function result(resClass, resInner){
        const res = document.getElementById('result')
        const winSkipBut = document.getElementById('if-you-win-button')
        let resText = document.getElementById('result-text')

        res.className = resClass
        resText.innerHTML = resInner

        winSkipBut.addEventListener('click', goToFinal)
    }
    function goToFinal(){
        //! -------------------------------------------------------------------------------------------------------- !//
        const final = document.getElementById('final')
        const finalJin = document.getElementById('final-jin')
        const finalBut = document.getElementById('final-but')
        const finalJinTextt = document.getElementById('final-jin-textt')

        final.className = 'final'

        finalBut.addEventListener('click', finalFunc)

        function finalFunc(){
            finalJinTextt.innerHTML = `Какие ещё три желания? Мы с тобой не догаваривались ни на какие три желания, так-что гуляй...`
            finalBut.innerHTML = 'Ноо...'

            jin4.className = 'jin-4 z-ind-plus'
            finalJin.style = 'display: none;'

            finalBut.addEventListener('click', finalFunc2)

            function finalFunc2(){
                finalJinTextt.innerHTML = `Никаких но. Будущему джыну нельзя задавать много лишних слов...`
                finalBut.innerHTML = 'Что???'
                const jinNado = document.getElementById('jin-nado')

                jin4.className = 'jin-4 z-ind'
                jinNado.className = 'jin-nado z-ind-plus'


                finalBut.addEventListener('click', finalFunc3)

                function finalFunc3(){
                    finalJinTextt.innerHTML = 'Ак-шке-мене-тиби-дохх!!!'
                    finalBut.style = 'display: none;'

                    window.setTimeout(finalIntro, 1000)

                    function finalIntro(){
                        const finIntro = document.getElementById('final-intro')
                        const yellow = document.getElementById('yellow')

                        finIntro.className = 'final-intro final-anim'
                        yellow.className = 'yellow yellow-anim'
                    }
                }
            }
        }
    }


    gameAnswer = document.getElementById('game-answer')
    gameMistery = document.getElementById('game-mystery')
    gameCheck = document.getElementById('game-check')
    // mistery = [
    //     'Кто проживает на дне океана?',
    //     'Если окно это дверь, тогда стена это ...',
    //     'Какого цвета красный провод?',
    //     'Какого чила в етом году празнуют 8 марта?',
    //     'Сколько лет коту, если собаке столькоже?'
    // ]
    oneOfMistery = mistery[Math.floor(Math.random() * mistery.length)]

    gameMistery.innerHTML = oneOfMistery

    gameCheck.addEventListener('click', checkYourAnswer)

    function checkYourAnswer(){
        if(oneOfMistery === mistery[0]){
            let _yes = String(gameAnswer.value)
            if(_yes === 'тот кто много говорит' || _yes === 'тот, кто много говорит'){
                result('if-you-win-1', res1)
            } else{
                if(g1 === 2){
                    youLose()    
                } else if(g1 === 1){
                    youLose()
                } else if(g1 === 0){
                    youOnlyLose()
                }
            }
        } else if(oneOfMistery === mistery[1]){
            let _yes = String(gameAnswer.value)
            if(_yes === 'стена'){
                result('if-you-win-2', res2)
            } else{
                if(g1 === 2){
                    youLose()    
                } else if(g1 === 1){
                    youLose()
                } else if(g1 === 0){
                    youOnlyLose()
                }
            }
        } else if(oneOfMistery === mistery[2]){
            let _yes = String(gameAnswer.value)
            if(_yes === 'последний'){
                result('if-you-win-3', res3)
            } else{
                if(g1 === 2){
                    youLose()    
                } else if(g1 === 1){
                    youLose()
                } else if(g1 === 0){
                    youOnlyLose()
                }
            }
        } else if(oneOfMistery === mistery[3]){
            let _yes = String(gameAnswer.value)
            if(_yes === '9'){
                result('if-you-win-4', res4)
            } else{
                if(g1 === 2){
                    youLose()    
                } else if(g1 === 1){
                    youLose()
                } else if(g1 === 0){
                    youOnlyLose()
                }
            }
        } else if(oneOfMistery === mistery[4]){
            let _yes = String(gameAnswer.value)
            if(_yes === _yes){
                result('if-you-win-5', res5)
            }
        } 
    }
}