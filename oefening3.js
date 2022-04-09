const questions = [
    'Where did Frodo destroy the One Ring?',
    'What is Batman\'s real name?',
    'Which company developed the video game Minecraft?',
    'Which character is portrayed by Henry Cavill in the Netflix adaptation of The Witcher?',
    'Who likes to jump around on his tail in the Winnie The Pooh stories?',
    'Wie is de maker van dit document?'
];
const answers = ['Mount Doom', 'Bruce Wayne', 'Mojang', 'Geralt of Rivia', 'Tigger', 'Stijn Janssens'];

function oefening3() {
    // Maak hier oefening 3
    document.querySelector('.oefening3').innerHTML = "";
    let antwoord = [];
    for (let i = 0; i < questions.length; i++) {
        antwoord[i] = prompt(questions[i]);
    }
    for (let i = 0; i < questions.length; i++) {
        if (antwoord[i] == answers[i]) {
            const el = document.createElement('div');
            el.innerHTML = '<h4>' + questions[i] + '</h4>' + 'Je antwoorde: ' + antwoord[i];
            el.classList.add('container-fluid', 'card', 'cardbody', 'm-1', 'p-2');
            el.setAttribute("style", "background-color: green; text-align: center; color: white;");
            document.querySelector('.oefening3').appendChild(el);
        } else {
            const el = document.createElement('div');
            el.innerHTML = '<h4>' + questions[i] + '</h4>' + 'Je antwoorde: ' + antwoord[i] + '<br>' + 'Het juiste antwoord was ' + answers[i];
            el.classList.add('container-fluid', 'card', 'cardbody', 'm-1', 'p-2')
            el.setAttribute("style", "background-color: red; text-align: center; color: white;");
            document.querySelector('.oefening3').appendChild(el);
        }
    }
}