var lizfacts = [
    'Some lizards can detach their tails if caught by predators.',
    'The upper and lower eyelids of chameleons are joined, leaving just a small hole for them to see through.',
    'Chameleons have long tongues which they rapidly extend from their mouth, too fast for human eyes to see properly.',
    'Chameleons generally eat insects.',
    'Some chameleons have the ability to change color.',
    'Geckos have no eyelids.',
    'Geckos have unique toes which allow them to be good climbers.',
    'Iguanas have a row of spines which run down their back and tail.',
    'Green iguanas are popular pets.',
    'The Komodo dragon is the largest type of lizard, growing up to 3 metres (10 feet) in length.',
    'They are found on a number of different Indonesian Islands.',
    'Komodo dragons are carnivores (meat eaters) and can be very aggressive.'
        ]
        
        
        function lizaFact() {
            var randomNumber = Math.floor(Math.random()*(lizfacts.length));
            document.getElementById('factDisplayss').innerHTML = lizfacts[randomNumber];
            }