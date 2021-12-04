interface IPosterImage {
  original: string;
}

export interface IAnimes {
  id: string;
  attributes: {
    description: string;
    canonicalTitle: string;
    posterImage: IPosterImage;
  };
}

export interface IAnimesResponse {
  data: IAnimes[];
}
