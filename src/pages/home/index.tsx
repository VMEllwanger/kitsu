import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Next, Prev } from '../../assets/icons';
import { Card, Spinner } from '../../components';
import * as Api from '../../services';
import { IAnimes } from '../../types';
import { Container, Pagination, PaginationItem, RenderCard } from './styles';

export const Home = (): JSX.Element => {
  const [animes, setAnimes] = useState<IAnimes[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  const getDate = async () => {
    setLoader(true);
    try {
      const { data } = await Api.getAnime(id);
      setAnimes(data);
    } catch {
      toast.error('Opsss..! An error has occurred on the server. Try later');
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getDate();
  }, [id]);

  return (
    <Container>
      <Pagination>
        <PaginationItem
          to={id === '0' ? '/animes/0' : `/animes/${parseInt(id, 10) - 1}`}
        >
          {Prev}
          Previous
        </PaginationItem>
        <PaginationItem to={`/animes/${parseInt(id, 10) + 1}`}>
          Next
          {Next}
        </PaginationItem>
      </Pagination>
      {loader ? (
        <Spinner />
      ) : (
        <RenderCard>
          {animes.length > 0 &&
            animes.map((anime) => (
              <Card
                key={anime.id}
                title={anime.attributes.canonicalTitle}
                description={anime.attributes.description}
                image={anime.attributes.posterImage.original}
              />
            ))}
        </RenderCard>
      )}
    </Container>
  );
};
