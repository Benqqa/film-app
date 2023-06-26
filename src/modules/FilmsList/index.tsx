import { Flex } from "@/UI/Flex";
import { TicketCard } from "@/components/TicketCard";
import { useCallback } from "react";
import { EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";

interface IFilm {
  id: string;
  description: string;
  image: string;
  title: string;
  genre: string;
}

interface IFilmsList {
  films?: IFilm[];
  className?: string;
}

export const FilmsList = ({ films, className }: IFilmsList) => {
  if (!films) {
    films = [
      { id: "1", image: "/icons/minus.svg", genre: "asd", title: "dasd", description: "asdas" },
      { id: "2", genre: "asd", title: "eeee", image: "/icons/minus.svg", description: "asdasd" },
    ];
  }
  const renderFilmsList = useCallback(
    (_films: IFilm[]) => {
      return _films.map((film: IFilm) => (
        <TicketCard
          typeTicketCard="short"
          key={film.id}
          image={film.image}
          title={film.title}
          genre={film.genre}
          id={film.id}
        ></TicketCard>
      ));
    },
    [films]
  );
  return (
    <>
      <Flex gap={EMarginSize.md} direction={"column"} className={`${className} ${global.fullWidth}`}>
        {!!renderFilmsList && renderFilmsList(films)}
      </Flex>
    </>
  );
};
