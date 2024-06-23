export interface Anime {
  artist_href: string;
  artist_name: string;
  source_url: string;
  url: string;
}

export interface AnimeResponse {
  results: Anime[];
}