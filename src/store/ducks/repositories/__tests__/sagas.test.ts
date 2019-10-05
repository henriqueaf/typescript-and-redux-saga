import { call, put } from 'redux-saga/effects';

import { load } from '../sagas';
import * as actions from '../actions';
import api from '../../../../services/api';

describe('repositories sagas', () => {
  test('when load success', () => {
    const generator = load();

    expect(generator.next().value).toEqual(
      call(api.get, 'users/henriqueaf/repos')
    );

    const response = {
      data: [
        {
          id: 2,
          name: 'repository 2',
        },
      ],
    };

    expect(generator.next(response).value).toEqual(
      put(actions.loadSuccess(response.data))
    );

    expect(generator.next().done).toBe(true);
  });

  test('when load fail', () => {
    const generator = load();

    expect(generator.next().value).toEqual(
      call(api.get, 'users/henriqueaf/repos')
    );

    if (generator.throw) {
      const error = new Error('server dead');
      expect(generator.throw(error).value).toEqual(
        put(actions.loadFailure(error))
      );
    }

    expect(generator.next().done).toBe(true);
  });
});
