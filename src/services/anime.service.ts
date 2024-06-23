import { AnimeResponse } from '../interfaces/service.interface';

export const getAnime = async (category: string, count: number): Promise<AnimeResponse> => {
  const response = await fetch(`https://nekos.best/api/v2/${category}?amount=${count}`);
  return await response.json();
}