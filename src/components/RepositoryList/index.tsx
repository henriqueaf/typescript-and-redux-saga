import React, { useEffect } from 'react';

import {
  Repository,
  RepositoriesList,
} from '../../store/ducks/repositories/types';
import RepositoryItem from '../RepositoryItem';

type StateProps = RepositoriesList;

interface DispatchProps {
  loadRequest(): void;
  loadSuccess(data: Repository[]): void;
}

export type Props = StateProps & DispatchProps;

const RepositoryList: React.SFC<Props> = ({ repositories, loadRequest }) => {
  useEffect(() => {
    loadRequest();
  }, []);

  return (
    <ul>
      {repositories.map(repository => (
        <RepositoryItem key={repository.id} repository={repository} />
      ))}
    </ul>
  );
};

export default RepositoryList;
