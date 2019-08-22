import React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { Repository } from '../../store/ducks/repositories/types';
import RepositoryList, { Props } from '../RepositoryList';

const mockLoadRequest = jest.fn();
const mockLoadSuccess = jest.fn();

const defaultProps: Props = {
  repositories: [],
  loadRequest: mockLoadRequest,
  loadSuccess: mockLoadSuccess,
};

const mount = (props?: Object) => {
  const mergedProps = {
    ...defaultProps,
    ...props,
  };

  const wrapper = TestRenderer.create(<RepositoryList {...mergedProps} />);

  return {
    wrapper,
    repositoriesList: wrapper.root.findAllByType('li'),
  };
};

describe('RepositoryList', () => {
  it('Renders an empty ul', () => {
    const { wrapper } = mount();

    const repositoryListInstance = wrapper.root;
    expect(repositoryListInstance.findByType('ul')).not.toBeNull();
  });

  it('Renders a list of li inside an ul', () => {
    const repositories: Repository[] = [
      {
        id: 1,
        name: 'testando 1',
      },
      {
        id: 2,
        name: 'testando 2',
      },
    ];

    const { repositoriesList } = mount({ repositories });
    expect(repositoriesList.length).toBe(2);
  });
});
