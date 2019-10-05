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
    const error = new Error('some error');

    expect(actions.loadFailure(error)).toEqual({
      type: '@repositories/LOAD_FAILURE',
      payload: {
        error,
      },
    });
  });
});
