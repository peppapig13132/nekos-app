import React from 'react';
import { AnimeCardProps } from '../interfaces/component.interface';
import { ImageLoader } from './ImageLoader';

export const AnimeCard:React.FC<AnimeCardProps> = ({artist_href, artist_name, url, source_url}) => {
  return (
    <div className="w-60 min-h-60 m-2 flex justify-center items-center">
      <ImageLoader src={url} alt={artist_name} />
    </div>
  );
}