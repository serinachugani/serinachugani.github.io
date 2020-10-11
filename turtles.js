var facts = [
    'Turtles are reptiles.',
    'Turtles have a hard shell that protects them like a shield, this upper shell is called a carapace',
    'Turtles also have a lower shell called a plastron',
    'Many turtle species (not all) can hide their heads inside their shells when attacked by predators',
    'Turtles have existed for around 215 million years',
    'Like other reptiles, turtles are cold blooded',
    'The largest turtle is the leatherback sea turtle, it can weigh over 900 kg! 2000 lb',
    'Turtles lay eggs',
    'In some species of turtle the temperature determines if the egg will develop into a male or female, lower temperatures lead to a male while higher temperatures lead to a female',
    'Some turtles lay eggs in the sand and leave them to hatch on their own The young turtles make their way to the top of the sand and scramble to the water while trying to avoid predators'
    
    ]


    
  
    function newFact() {
    var randomNumber = Math.floor(Math.random()*(facts.length));
    document.getElementById('factDisplay').innerHTML = facts[randomNumber];
    }
    
        