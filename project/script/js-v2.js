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
        renameJinText()
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
