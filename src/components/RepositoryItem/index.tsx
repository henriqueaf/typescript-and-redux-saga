import React from 'react';
import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
  repository: Repository;
}

export default ({ repository }: OwnProps) => <li>{repository.name}</li>;
