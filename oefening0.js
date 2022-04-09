let oefening0 = () => {
    // Maak hier oefening 0
    document.title = "Stijn Janssens";
    const logo = document.getElementsByClassName('navbar-brand')
    logo[0].innerHTML = '<img src="afbeeldingen/Favicon.png" alt="Logo" height="50px">';
    //veranderen van de achtergrond kleur, omdat deze logo kleuren niet goed zichtbaar zijn.
    logo[0].style.backgroundColor = "#000000";
}