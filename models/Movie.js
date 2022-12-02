const movies = [

  {
    "titre": "Viking",
    "realisateur": "Michael Hirst",
    "description": "Scandinavie, à la fin du 8ème siècle. Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer.",
    "dureeTotale": 120,
    "imageUrl": "viking.jpg"
    
  },

    {
      "titre": "Gameofthrones",
      "realisateur": "David Benioff",
      "description": "Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.",
      "dureeTotale": 117,
      "imageUrl": "game-of-thrones.jpg"
    },
    {
      "titre": "Power",
      "realisateur": "50cent",
      "description": "James St. Patrick, surnommé Ghost, est le propriétaire d'une boîte de nuit populaire à New York. En parallèle, il est un acteur majeur dans l'un des plus grands réseaux de drogues illicites de la ville.",
      "dureeTotale": 40,
      "imageUrl": "power.jpg"
    },
    {
      "titre": "Ozark",
      "realisateur": "Bill Dubuque",
      "description": "Marty blanchit de l'argent pour le compte d'un baron de la drogue. Lorsque son partenaire le trahit, il déménage avec sa famille aux monts Ozarks. Là-bas, il se retrouve opposé à un dealer local, à une bande de voyous et à un agent du FBI tenace.",
      "dureeTotale": 700,
      "imageUrl": "ozark.jpg"
    },
    {
      "titre": "Blacklist",
      "realisateur": "Jon Bokenkamp",
      "description": "L'ex-agent du gouvernement Raymond Red Reddington est l'un des fugitifs les plus recherchés au monde. Il accepte de collaborer avec le FBI à condition de travailler avec la profileuse Elizabeth Keen.",
      "dureeTotale": 900,
      "imageUrl": "blacklist.jpg"
    },
    {
      "titre": "Narcos",
      "realisateur": "Chris Brancato",
      "description": "Inspirée de l'histoire du célèbre narcotrafiquant de Medellín Pablo Escobar, cette série raconte la guerre sanglante des cartels en Colombie.",
      "dureeTotale": 70,
      "imageUrl": "narcos.jpg"
    }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}




