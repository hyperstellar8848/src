const moviesData = [
  { id: 1, title: "Inception", year: 2010, genre: "sci-fi", rating: 8.8, director: "Christopher Nolan", cast: ["Leonardo DiCaprio", "Ellen Page"], plot: "A thief who steals corporate secrets through dream-sharing technology..." },
  { id: 2, title: "Interstellar", year: 2014, genre: "sci-fi", rating: 8.6, director: "Christopher Nolan", cast: ["Matthew McConaughey", "Anne Hathaway"], plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
  { id: 3, title: "The Matrix", year: 1999, genre: "sci-fi", rating: 8.7, director: "Lana Wachowski", cast: ["Keanu Reeves", "Laurence Fishburne"], plot: "A computer hacker learns from mysterious rebels about the true nature of his reality." },
  { id: 4, title: "The Dark Knight", year: 2008, genre: "action", rating: 9.0, director: "Christopher Nolan", cast: ["Christian Bale", "Heath Ledger"], plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham." },
  { id: 5, title: "Pulp Fiction", year: 1994, genre: "crime", rating: 8.9, director: "Quentin Tarantino", cast: ["John Travolta", "Uma Thurman"], plot: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine." },
  { id: 6, title: "The Godfather", year: 1972, genre: "crime", rating: 9.2, director: "Francis Ford Coppola", cast: ["Marlon Brando", "Al Pacino"], plot: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son." },
  { id: 7, title: "The Hangover", year: 2009, genre: "comedy", rating: 7.7, director: "Todd Phillips", cast: ["Bradley Cooper", "Zach Galifianakis"], plot: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night." },
  { id: 8, title: "Superbad", year: 2007, genre: "comedy", rating: 7.6, director: "Greg Mottola", cast: ["Michael Cera", "Jonah Hill"], plot: "Two co-dependent high school seniors are forced to deal with separation anxiety." },
  { id: 9, title: "Gladiator", year: 2000, genre: "action", rating: 8.5, director: "Ridley Scott", cast: ["Russell Crowe", "Joaquin Phoenix"], plot: "A former Roman General sets out to exact vengeance against the corrupt emperor." },
  { id: 10, title: "Fight Club", year: 1999, genre: "drama", rating: 8.8, director: "David Fincher", cast: ["Brad Pitt", "Edward Norton"], plot: "An insomniac office worker and a devil-care soapmaker form an underground fight club." },
  { id: 11, title: "Forrest Gump", year: 1994, genre: "drama", rating: 8.8, director: "Robert Zemeckis", cast: ["Tom Hanks", "Robin Wright"], plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal unfold." },
  { id: 12, title: "Spirited Away", year: 2001, genre: "fantasy", rating: 8.6, director: "Hayao Miyazaki", cast: ["Rumi Hiiragi", "Miyu Irino"], plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods." },
  { id: 13, title: "The Prestige", year: 2006, genre: "drama", rating: 8.5, director: "Christopher Nolan", cast: ["Christian Bale", "Hugh Jackman"], plot: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion." },
  { id: 14, title: "Se7en", year: 1995, genre: "crime", rating: 8.6, director: "David Fincher", cast: ["Morgan Freeman", "Brad Pitt"], plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins." },
  { id: 15, title: "Whiplash", year: 2014, genre: "drama", rating: 8.5, director: "Damien Chazelle", cast: ["Miles Teller", "J.K. Simmons"], plot: "A promising young drummer enrolls at a cut-throat music conservatory." }
];

export const fetchMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.01) {
        reject(new Error("server error"));
      } else {
        resolve(moviesData); 
      }
    }, 1000);
  });
};

export const fetchMovieById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = moviesData.find((m) => m.id === parseInt(id));
      if (movie) {
        resolve(movie); 
      } else {
        reject(new Error("movie not found")); 
      }
    }, 1000);
  });
};