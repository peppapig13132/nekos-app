import React, { useEffect, useState } from 'react';
import { AnimeBlockProps } from '../interfaces/component.interface';
import { getAnime } from '../services/anime.service';
import { Anime, AnimeResponse } from '../interfaces/service.interface';
import { AnimeCard } from './AnimeCard';

export const AnimeBlock: React.FC<AnimeBlockProps> = ({category, count}) => {
  const [animeArray, setAnimeArray] = useState<Anime[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const _animeArray:AnimeResponse = await getAnime(category, count);
      setAnimeArray(_animeArray.results)
    }
    fetchData();
  }, [category, count]);

  return (
    <div className="flex flex-wrap justify-center">
      {
        animeArray.map((anime, index) => {
          return <AnimeCard
                    key={index}
                    artist_href={anime.artist_href}
                    artist_name={anime.artist_name}
                    url={anime.url}
                    source_url={anime.source_url}
                  />
        })
      }
    </div>
  )
}