import { IAnimesResponse } from '../types';
import { instanciaAxios } from './api';

export const getAnime = async (page: string): Promise<IAnimesResponse> => {
  const { data } = await instanciaAxios.get<IAnimesResponse>(
    `/anime?page[limit]=10&page[offset]=${page}0`,
  );
  return data;
};
