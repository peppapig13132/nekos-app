export interface AnimeBlockProps {
  category: string;
  count: number;
}

export interface AnimeCardProps {
  artist_href: string;
  artist_name: string;
  source_url: string;
  url: string;
}

export interface ImageLoaderProps {
  src: string;
  alt: string;
}

export interface TagProps {
  name: string;
}