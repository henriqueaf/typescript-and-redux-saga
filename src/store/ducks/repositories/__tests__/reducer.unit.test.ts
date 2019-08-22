import reducer from '../reducer';
import * as actions from '../actions';
import { Repository } from '../types';

describe('repositories reducer', () => {
  test('initial state', () => {
    expect(reducer(undefined, { type: '__INIT__' })).toEqual({
      data: [],
      error: false,
      loading: false,
    });
  });

  test('trigger load request', () => {
    const initialState = reducer(undefined, { type: '__INIT__' });
    const stateAfterLoadRequest = reducer(initialState, actions.loadRequest());

    expect(stateAfterLoadRequest).toEqual({
      data: [],
      error: false,
      loading: true,
    });
  });

  test('trigger load success', () => {
    const initialState = reducer(undefined, { type: '__INIT__' });
    const stateAfterLoadRequest = reducer(initialState, actions.loadRequest());

    const repositoriesList: Repository[] = [
      {
        id: 1,
        name: 'repository 1',
      },
    ];

    const stateAfterLoadSuccess = reducer(
      stateAfterLoadRequest,
      actions.loadSuccess(repositoriesList)
    );

    expect(stateAfterLoadSuccess).toEqual({
      data: repositoriesList,
      error: false,
      loading: false,
    });
  });

  test('trigger load failure', () => {
    const initialState = reducer(undefined, { type: '__INIT__' });
    const repositoriesList: Repository[] = [
      {
        id: 1,
        name: 'repository 1',
      },
    ];

    const stateWithData = {
      ...initialState,
      data: repositoriesList,
    };

    const stateAfterLoadFailure = reducer(stateWithData, actions.loadFailure());

    expect(stateAfterLoadFailure).toEqual({
      data: [],
      error: true,
      loading: false,
    });
  });
});
