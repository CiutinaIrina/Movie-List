import { useEffect, useState } from "react";
import type Movie from "../models/movies/movie.ts";
import MovieList from "../models/movies/MovieList.tsx";

export default function landingPage() {
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined);

  const [wathced, setWatched] = useState<Movie[] | undefined>(undefined);
  const [unwathced, setUnwatched] = useState<Movie[] | undefined>(undefined);

  useEffect(() => {
    //other movies: Kafka, Le crime du 3eme etage, Grandir, The Theory of Everything, Mean Girls, Interstellar, Don't Look Up, Legally Blonde, the ring, the ring 2, all x men movies
    setMovies([
      { id: 0, name: "Backrooms", genre: ["Horror"], src: "https://upload.wikimedia.org/wikipedia/en/3/3d/Backrooms_%28film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Chiwetel Ejiofor", "Renate Reinsve", "Mark Duplass"], seen: true, rating: 8.5, commentary: "An amazing and thought-provoking horor movie, i cannot wait for more analog-inspired horror."},
      { id: 1, name: "The Odyssey", genre: ["Drama", "Historical"], src: "https://upload.wikimedia.org/wikipedia/en/9/90/The_Odyssey_%282026_film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Matt Damon", "Tom Holland", "Anne Hathaway", "Robert Pattinson"], seen: true, rating: 5, commentary: "Extremley boring and way too long. Dialouge is too realistic and breaks immersion. Most charcters are obnoxious and the message is pretentious."},
      { id: 2, name: "Coyote vs Acme", genre: ["Comedy", "Children"], src: "https://upload.wikimedia.org/wikipedia/en/c/c0/Coyote_vs._Acme_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Will Forte", "Lana Condor", "John Cena"], seen: false, rating: null, commentary: "My friend reccomended this movie to me. It looks interesting"},
      { id: 3, name: "Miller's Girl", genre: ["Thriller"], src: "https://upload.wikimedia.org/wikipedia/en/9/91/Millers_girl_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Jenna Ortega", "Martin Freeman"], seen: true, rating: 0.5, commentary: "The worst movie i have ever seen in my life. Who thought that a premise like this would make a good idea? The whole film reads like a bad wattpad fiction but with all the redeeming aspects replaced by `relatable` slop."},
      { id: 4, name: "9 to 5", genre: ["Comedy"], src: "https://upload.wikimedia.org/wikipedia/en/e/e0/9_to_5_moviep.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Jane Fonda", "Lily Tomlin", "Dolly Parton"], seen: false, rating: null, commentary: "I planned on seeing this ever since i learned Dolly Parton died, this movies seems ahead of its time."},
      { id: 5, name: "Avatar 2: The Way of Water", genre: ["Sci-Fi"], src: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang", "Kate Winslet", "Cliff Curtis" ], seen: true, rating: 4, commentary: "To this day, i dont understand how such a film series with so much rich lore and worldbuilding ends up so forgettable. All that budget for some underwater scenes that, sure, look cool, but are at the end of the day just spectacle."},
      { id: 6, name: "Michael", genre: ["Biopic"], src: "https://upload.wikimedia.org/wikipedia/en/3/37/Michael_%282026_film_poster%29.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Jaafar Jackson", "Juliano Krue Valdi", "Nia Long", "Laura Harrier", "Miles Teller", "Colman Domingo" ], seen: true, rating: 6.5, commentary: "I'm sorry, but this had to be the most sanitized biopic i have ever seen in my life. They literally depict MJ like a saint. Bonus points for the music, becasue no matter how you see Jackson, he had some very amazing music."},
      { id: 7, name: "Back to Black", genre: ["Biopic"], src: "https://upload.wikimedia.org/wikipedia/en/2/27/Back_to_black_film_poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Jaafar Jackson", "Juliano Krue Valdi", "Nia Long", "Laura Harrier", "Miles Teller", "Colman Domingo" ], seen: true, rating: 5.5, commentary: "I find this biopic very very boring. Again we have the issues with sanitisation, Winehouse was dulled to be more accessible to contemporany audience and had much of what made her special removed. They didn't even show the final harrowing moments of her life. And i don't buy the `but it's exploitative` argument as it would not be such if the creators employed something called tact."},
      { id: 8, name: "Avatar 3: Fire and Ash", genre: ["Sci-Fi"], src: "https://i0.wp.com/maactioncinema.com/wp-content/uploads/2025/07/1000053281.jpg?ssl=1", leadActors: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang", "Kate Winslet", "Oona Chaplin", "Cliff Curtis"], seen: true, rating: 5.5, commentary: "" },
      { id: 9, name: "Minions & Monsters", genre: ["Animation", "Comedy", "Children"], src: "https://i.ebayimg.com/images/g/ZpkAAeSwGiFqPsQJ/s-l1600.jpg", leadActors: ["Pierre Coffin", "Allison Janney", "Christoph Waltz", "Jeff Bridges", "Jesse Eisenberg", "Zoey Deutch", "Trey Parker", "Bobby Moynihan", "Phil LaMarr"], seen: true, rating: 6, commentary: "" },
      { id: 10, name: "Wonka", genre: ["Fantasy", "Musical", "Adventure"], src: "https://upload.wikimedia.org/wikipedia/en/9/90/Wonka_2023_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Timothée Chalamet", "Calah Lane", "Keegan-Michael Key", "Olivia Colman", "Hugh Grant"], seen: true, rating: 5, commentary: "" },
      { id: 11, name: "Star Wars", genre: ["Sci-Fi", "Adventure"], src: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg", leadActors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing", "Alec Guinness"], seen: false, rating: null, commentary: "" },
      { id: 12, name: "Franz", genre: ["Drama", "Mystery", "Thriller"], src: "https://upload.wikimedia.org/wikipedia/en/6/60/Franz_2025.jpeg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Jeremy Irons", "Theresa Russell", "Joel Grey"], seen: true, rating: 7, commentary: "" },
      { id: 13, name: "Le Crime du 3e étage", genre: ["Comedy", "Crime", "Mystery"], src: "https://fr.web.img5.acsta.net/c_310_420/img/b2/0f/b20fa135f8ed4c7d0a5e0949c56e095e.jpg", leadActors: ["Gilles Lellouche", "Laetitia Casta", "Guillaume Gallienne"], seen: true, rating: 7.5, commentary: "" },
      { id: 14, name: "Temple Grandin", genre: ["Biography", "Drama"], src: "https://m.media-amazon.com/images/M/MV5BMjQwOTQ4NDk5OF5BMl5BanBnXkFtZTcwNzM0Mjk3Mw%40%40._V1_.jpg", leadActors: ["Claire Danes", "Catherine O'Hara", "Julia Ormond", "David Strathairn"], seen: true, rating: 5.5, commentary: "" },
      { id: 15, name: "The Theory of Everything", genre: ["Biography", "Drama", "Romance"], src: "https://www.impawards.com/intl/uk/2014/posters/theory_of_everything_ver4_xlg.jpg", leadActors: ["Eddie Redmayne", "Felicity Jones", "Charlie Cox"], seen: true, rating: 4.5, commentary: "" },
      { id: 16, name: "Mean Girls", genre: ["Comedy"], src: "https://upload.wikimedia.org/wikipedia/en/a/ac/Mean_Girls_film_poster.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Lindsay Lohan", "Rachel McAdams", "Lacey Chabert", "Amanda Seyfried"], seen: true, rating: 9, commentary: "" },
      { id: 17, name: "Interstellar", genre: ["Sci-Fi", "Drama", "Adventure"], src: "https://cdn.ome.lt/legacy/images/galerias/Interstellar/Interstellar-Poster-18Set2014-1.jpg", leadActors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"], seen: true, rating: 8, commentary: "" },
      { id: 18, name: "Don't Look Up", genre: ["Comedy", "Drama", "Sci-Fi"], src: "https://upload.wikimedia.org/wikipedia/en/5/5c/Don%27t_Look_Up_2021_film.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Leonardo DiCaprio", "Jennifer Lawrence", "Meryl Streep", "Cate Blanchett"], seen: true, rating: 9.5, commentary: "" },
      { id: 19, name: "Legally Blonde", genre: ["Comedy", "Romance"], src: "https://cdn.shopify.com/s/files/1/1416/8662/products/legally_blonde_2001_original_film_art_2000x.jpg?v=1551782770", leadActors: ["Reese Witherspoon", "Luke Wilson", "Selma Blair"], seen: false, rating: null, commentary: "" },
      { id: 20, name: "The Ring", genre: ["Horror", "Mystery"], src: "https://upload.wikimedia.org/wikipedia/en/3/37/Theringpostere.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Naomi Watts", "Martin Henderson", "David Dorfman"], seen: false, rating: null, commentary: "" },
      { id: 21, name: "The Ring Two", genre: ["Horror", "Mystery"], src: "https://amblin.com/wp-content/uploads/2019/07/ring2_2005_poster_1.jpg", leadActors: ["Naomi Watts", "Simon Baker", "David Dorfman"], seen: false, rating: null, commentary: "" },
      { id: 22, name: "X-Men", genre: ["Action", "Sci-Fi"], src: "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Hugh Jackman", "Patrick Stewart", "Ian McKellen", "Halle Berry"], seen: false, rating: null, commentary: "" },
      { id: 23, name: "X2: X-Men United", genre: ["Action", "Sci-Fi"], src: "https://upload.wikimedia.org/wikipedia/en/3/3e/X2_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Hugh Jackman", "Patrick Stewart", "Ian McKellen", "Halle Berry"], seen: false, rating: null, commentary: "" },
      { id: 24, name: "X-Men: The Last Stand", genre: ["Action", "Sci-Fi"], src: "https://upload.wikimedia.org/wikipedia/en/5/5b/X-Men_The_Last_Stand_theatrical_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Hugh Jackman", "Halle Berry", "Ian McKellen", "Patrick Stewart"], seen: false, rating: null, commentary: "" },
      { id: 25, name: "X-Men: First Class", genre: ["Action", "Sci-Fi"], src: "https://upload.wikimedia.org/wikipedia/en/5/55/X-MenFirstClassMoviePoster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Kevin Bacon"], seen: false, rating: null, commentary: "" },
      { id: 26, name: "X-Men: Days of Future Past", genre: ["Action", "Sci-Fi"], src: "https://upload.wikimedia.org/wikipedia/en/0/0c/X-Men_Days_of_Future_Past_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Hugh Jackman", "James McAvoy", "Michael Fassbender", "Jennifer Lawrence"], seen: false, rating: null, commentary: "" },
      { id: 27, name: "X-Men: Apocalypse", genre: ["Action", "Sci-Fi"], src: "https://upload.wikimedia.org/wikipedia/en/0/04/X-Men_-_Apocalypse.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Oscar Isaac"], seen: false, rating: null, commentary: "" },
      { id: 28, name: "X-Men: Dark Phoenix", genre: ["Action", "Sci-Fi"], src: "https://upload.wikimedia.org/wikipedia/en/9/9e/Dark_Phoenix_%28film%29.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled", leadActors: ["Sophie Turner", "James McAvoy", "Michael Fassbender", "Jennifer Lawrence"], seen: false, rating: null, commentary: "" },
      ]);
  }, [])

  setTimeout(() => {
    setWatched(movies?.filter(movie => movie.seen));
    setUnwatched(movies?.filter(movie => movie.seen === false));
  }, 2000)

  return (
    <div>
      <div className="p-4">
        <h1 className="py-5"> Watched Movies </h1>
        <div className="px-3">
          <MovieList movies={wathced} />
        </div>
        <h1 className="py-5"> Unwathced Movies </h1>
        <div className="px-3">
          <MovieList movies={unwathced} />
        </div>
      </div>
    </div>
  )
}