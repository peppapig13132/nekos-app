import { AnimeResponse } from '../interfaces/service.interface';

const defaultAnimeResponse: AnimeResponse = {
  results: []
}

export const getAnime = async (category: string, count: number): Promise<AnimeResponse> => {
  try {
    const response = await fetch(`https://nekos.best/api/v2/${category}?amount=${count}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data: AnimeResponse = await response.json();
    
    return data;
  } catch (e) {
    console.error('Fetching anime data failed:', e);
    return defaultAnimeResponse;
  }
}
