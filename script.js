const api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchBtn = document.querySelector('.searchBtn');
const sound = document.querySelector('#sound');
const result = document.querySelector('.result');

searchBtn.addEventListener('click',() => {
    let input = document.querySelector('input').value;
    fetch(`${api_url}${input}`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    result.innerHTML = 
    `<div class="worddisplay">
                <h3 class="word">${input}</h3>
                <button class="soundBtn" onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <div class="details">
                <p class="wordmeaning">${data[0].meanings[0].partOfSpeech}</p>
                <p class="phonetic">${data[0].phonetic}</p>
            </div>
            <p class="definition">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="word-example">${data[0].meanings[0].definitions[0].example}</p>`;
    sound.setAttribute("src",data[0].phonetics[0].audio);
    document.querySelector('.soundBtn').style.display='inline';
    document.querySelector('.word-example').style.display = 'flex';
    })
    .catch(() => {
        let result = document.querySelector('.result').innerHTML = `<h3>Couldn't Find The Word</h3>`;
    })
});
function playSound(){
    sound.play();
};