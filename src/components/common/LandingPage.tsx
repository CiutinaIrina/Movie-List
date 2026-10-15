import { useEffect, useState } from "react";
import MovieList from "../models/MovieList.tsx";
import type Movie from "../../models/movie.ts";
import NavBar from "./NavBar.tsx";

export default function landingPage() {
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined);

  const [wathced, setWatched] = useState<Movie[] | undefined>(undefined);
  const [unwathced, setUnwatched] = useState<Movie[] | undefined>(undefined);

  useEffect(() => {
    //other movies: Avatar 3, Barbie, Willy Wonka, Kafka, Minions and Monsters, Le crime du 3eme etage, Grandir, Back to Black, The Theory of Everything, Mean Girls, Interstellar, Don't Look Up, Legally Blonde, 
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
      { id: 10, name: "Wonka", genre: ["Fantasy", "Musical", "Adventure"], src: "https://www.impawards.com/2023/posters/wonka_ver2_xxlg.jpg", leadActors: ["Timothée Chalamet", "Calah Lane", "Keegan-Michael Key", "Olivia Colman", "Hugh Grant"], seen: true, rating: 5, commentary: "" },
      { id: 11, name: "Star Wars", genre: ["Sci-Fi", "Adventure"], src: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg", leadActors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing", "Alec Guinness"], seen: false, rating: null, commentary: "" },
    ]);
  }, [])

  setTimeout(() => {
    setWatched(movies?.filter(movie => movie.seen));
    setUnwatched(movies?.filter(movie => movie.seen === false));
  }, 2000)

  return (
    <div>
      <NavBar />
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