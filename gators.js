var gatfacts = [
    'Alligators continue to grow throughout their lifetimes.',
    'Alligators have two kinds of walks.',
    'Alligators are ecosystem engineers.',
    'Alligators are apex predators that also eat fruit.',
    'Their sex is determined by temperature.',
    'Alligators are reptiles.',
    'Alligators have been living on Earth for millions of years and are sometimes described as living fossils',
    'There are two different species of alligator, the American alligator and the Chinese alligator.',
    'American alligators live in south-eastern areas of the United States such as Florida and Louisiana.',
    'Chinese alligators are found in the Yangtze River but they are critically endangered and only a few remain in the wild.',
    'Like other reptiles, alligators are cold-blooded.',
    'Alligators can weigh over 450 kg (1000 lb) and be as long as 10 to 13 feet.',
    'Alligators have a powerful bite but the muscles that open the jaw are relatively weak. An adult human could hold the jaws of an alligator shut with their bare hands.'
    
        ]
        function gatoFacts() {
            var randomNumber = Math.floor(Math.random()*(gatfacts.length));
            document.getElementById('factDisplays').innerHTML = gatfacts[randomNumber];
            }