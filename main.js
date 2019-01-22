'use strict';

class Main {

    clearLocalstorage() {
        localStorage.removeItem("dictionary");
        console.log('localstorage vymazán');
    }

    setText(text) {
        document.getElementById('dropdown').setAttribute('style', 'display: none');
        document.getElementById('input').value = text;
    }

    setDropdown() {
        let dropdown = document.getElementById('dropdown');
        let substr = document.getElementById('input').value.toLowerCase();
        if (substr.length == 0) {
            dropdown.setAttribute('style', 'display: none');
        } else {
            dropdown.innerHTML = '';
            dropdown.setAttribute('style', 'display: block');
            let count = 0;
            let i = 0;
            while (count < 10 && i < serviceDb.dictionary.length) {
                if (serviceDb.dictionary[i].toLowerCase().startsWith(substr)) {
                    let word = document.createElement('div');
                    word.setAttribute('style', 'padding-bottom: 5px ');
                    word.setAttribute('onclick', 'main.setText("' + serviceDb.dictionary[i] + '")');
                    word.innerHTML = serviceDb.dictionary[i];
                    dropdown.appendChild(word);
                    count++;
                }
                i++;
            }
        }
    }
}

const serviceDb = new ServiceDb();
const main = new Main();

document.getElementById('input').addEventListener("input", main.setDropdown);