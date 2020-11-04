const WHITE_KEYS = ['z', 'x','c','v','b','n','m']
const BLACK_KEYS = ['s','d','g','h','j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')


keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    const key = e.key
    const whiteKeysIndex = WHITE_KEYS.indexOf(key)
    const blackKeysIndex = BLACK_KEYS.indexOf(key)

    // if(whiteKeysIndex > -1) playNote(whiteKeys[whiteKeysIndex])
    // if(blackKeysIndex > -1) playNote(blackKeys[blackKeysIndex])

})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}