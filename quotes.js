        const quote1 = "Be the change that you wish to see in the world. ― Mahatma Gandhi";
        const quote2 = "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth. ― William W. Purkey";
        const quote3 = "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring. ― Marilyn Monroe";
        const quote4 = "It is never too late to be what you might have been. ― George Eliot";
        const quote5 = "It’s no use going back to yesterday, because I was a different person then. ― Lewis Carroll";
        const quote6 = "Do what you feel in your heart to be right – for you’ll be criticized anyway. ― Eleanor Roosevelt";

        const min = 1;
        const max = 6;

        let randomQuote = Math.floor(Math.random() * (max - min + 1)) + min;
        let selectedQuote;

        switch (randomQuote) {
            case 1:
                selectedQuote = quote1;
                break;
            case 2:
                selectedQuote = quote2;
                break;
            case 3:
                selectedQuote = quote3;
                break;
            case 4:
                selectedQuote = quote4;
                break;
            case 5:
                selectedQuote = quote5;
                break;
            case 6:
                selectedQuote = quote6;
                break;
        }

        console.log(alert(selectedQuote));
