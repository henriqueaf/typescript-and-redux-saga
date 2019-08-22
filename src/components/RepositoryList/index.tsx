import React, { Component } from 'react';

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

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    );
  }
}

export default RepositoryList;
