import * as actions from '../actions';
import { Repository } from '../types';

describe('repositories actions', () => {
  test('loadRequest', () => {
    expect(actions.loadRequest()).toEqual({
      type: '@repositories/LOAD_REQUEST',
    });
  });

  test('loadSuccess', () => {
    const repositories: Repository[] = [
      {
        id: 1,
        name: 'repository 1',
      },
    ];

    expect(actions.loadSuccess(repositories)).toEqual({
      type: '@repositories/LOAD_SUCCESS',
      payload: {
        data: repositories,
      },
    });
  });

  test('loadFailure', () => {
    expect(actions.loadFailure()).toEqual({
      type: '@repositories/LOAD_FAILURE',
    });
  });
});
