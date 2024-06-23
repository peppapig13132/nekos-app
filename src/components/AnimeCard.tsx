import React from 'react';
import { AnimeCardProps } from '../interfaces/component.interface';
import { ImageLoader } from './ImageLoader';

export const AnimeCard:React.FC<AnimeCardProps> = ({artist_href, artist_name, url, source_url}) => {
  return (
    <div className="m-2">
      <ImageLoader src={url} alt={artist_name} />
    </div>
  );
}