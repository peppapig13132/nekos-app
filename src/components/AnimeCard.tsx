import React from 'react';
import { AnimeCardProps } from '../interfaces/component.interface';

export const AnimeCard:React.FC<AnimeCardProps> = ({artist_href, artist_name, url, source_url}) => {
  return (
    <div className="m-2">
      <img src={url} alt="" className="w-24" />
    </div>
  );
}