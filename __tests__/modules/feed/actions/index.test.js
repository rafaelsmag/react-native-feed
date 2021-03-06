import { UPDATE_CATEGORY_POSTS } from '../../../../src/modules/feed/actions/types';
import { fetchFeedByCategory } from '../../../../src/modules/feed/actions';
import { getFacebookPostsStub } from '../../../assets/stubs/aprendfyStub';
import * as Aprendfy from '../../../../src/services/aprendfy';

jest.mock('../../../../src/services/aprendfy');

describe('Feed actions', () => {
  const mockDispatch = jest.fn();

  it('Should fetch feed from Aprendfy API', async () => {
    const feedMock = getFacebookPostsStub;
    Aprendfy.getFeedsByCategory = jest.fn(() => feedMock);
    const expectedAction = {
      type: UPDATE_CATEGORY_POSTS,
      payload: feedMock
    };

    const thunk = fetchFeedByCategory('SOMETHING');
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });

});
