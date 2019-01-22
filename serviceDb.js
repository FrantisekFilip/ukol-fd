'use strict';

class ServiceDb {
    constructor() {
        this.dictionary = [];
        if (localStorage.dictionary) {
            this.dictionary = localStorage.dictionary.split(",");
            console.log(`načteno z localstorage ${this.dictionary[0]}`);
        } else {
            let config = {
                apiKey: "AIzaSyBG4z9-TminNGtLoxQdF-6UjVOcjiTY1ZU",
                authDomain: "franta-pokus-01.firebaseapp.com",
                databaseURL: "https://franta-pokus-01.firebaseio.com",
                projectId: "franta-pokus-01",
                storageBucket: "franta-pokus-01.appspot.com",
                messagingSenderId: "622795519802"
            };
            firebase.initializeApp(config);
            firebase.database().ref("slovnik/2").once('value').then((snapshot) => {
                this.dictionary = snapshot.val().split(" ");
                console.log(`načteno z db ${this.dictionary[0]}`);
                localStorage.dictionary = this.dictionary;
            });
        }
    }
}


