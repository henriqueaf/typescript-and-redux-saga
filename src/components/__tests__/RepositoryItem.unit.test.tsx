import React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { Repository } from '../../store/ducks/repositories/types';
import RepositoryItem from '../RepositoryItem';

describe('RepositoryItem', () => {
  it('Renders a list item with a repository name', () => {
    const repository: Repository = {
      id: 1,
      name: 'teste',
    };

    const wrapper = TestRenderer.create(
      <RepositoryItem repository={repository} />
    );

    const repositoryItemInstance = wrapper.root;

    expect(repositoryItemInstance.findByType('li').children[0]).toBe('teste');
    expect(repositoryItemInstance).toMatchSnapshot();
  });
});
