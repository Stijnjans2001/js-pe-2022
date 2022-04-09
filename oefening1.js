var fout = "";

function validateForm() {
    var varVoornaam = document.forms["Formulier"]["InputVoornaam"].value;
    var varNaam = document.forms["Formulier"]["InputNaam"].value;
    var varEmailadres = document.forms["Formulier"]["InputE-mailadres"].value;
    var varAdres = document.forms["Formulier"]["InputAdres"].value;
    var varLand = document.forms["Formulier"]["InputLand"].value;
    var varProvincie = document.forms["Formulier"]["InputProvincie"].value;
    var varPostcode = document.forms["Formulier"]["InputPostcode"].value;

    makeDiv();
    checkEmptyness();
    checkValidations();
    if (fout != "") {
        makeDivErrors();
    } else {
        makeDivSuccess();
    }

    function checkEmptyness() {
        checkEmptyField(varVoornaam, "Het veld voornaam is vereist!");
        checkEmptyField(varNaam, "Het veld naam is vereist!");
        checkEmptyField(varEmailadres, "Het veld e-mailadres is vereist!");
        checkEmptyField(varAdres, "Adres is vereist!");
        checkEmptyField(varLand, "Land is vereist!");
        checkEmptyField(varProvincie, "Provincie is vereist!");
        checkEmptyField(varPostcode, "Postcode is vereist!");
    }

    function checkValidations() {
        validationEmail(varEmailadres, "E-mailadres is niet van het juiste type.");
        validationPostcode(varPostcode, "Postcode moet tussen de 1000 en 9999 liggen.");
    }

    function makeDiv() {
        const el = document.createElement('div');
        el.setAttribute('class', 'col-md-4 container-fluid');
        el.setAttribute('id', 'volledigGevalideerd')
        const show = document.querySelector('#formulier-div');
        show.appendChild(el);
    }

    function makeDivSuccess() {
        success = "";
        success = '<div class="alert alert-success">';
        success += '<h4>Good shit!<br></h4>';
        success += 'Je bent succesvol geabonneerd!';
        success += '</div>';
        document.querySelector('#volledigGevalideerd').innerHTML = success;
    }

    function makeDivErrors() {
        Errors = "";
        Errors = '<div class="alert alert-danger">';
        Errors += "<h4>Je hebt fouten gemaakt ... <br></h4>"
        Errors += fout;
        Errors += '</div>'
        fout = "";
        document.querySelector('#volledigGevalideerd').innerHTML = Errors;
    }

    function checkEmptyField(veld, melding) {
        if (veld == "") {
            fout += melding + "<br>";
        } else {
            fout = "";
        }
    }

    function validationEmail(veld, melding) {
        var emailformaat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (veld.match(emailformaat)) {
            return true;
        } else {
            fout += melding + "<br>";
            return false;
        }
    }

    function validationPostcode(veld, melding) {
        var postcodeformaat = /^[1-9]{1}[0-9]{3}$/;
        if (veld.match(postcodeformaat)) {
            return true;
        } else {
            fout += melding + "<br>";
            return false;
        }
    }
}