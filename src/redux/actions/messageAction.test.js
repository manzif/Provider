import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/messageActions'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore();

describe('async actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  it('send messages', () => {
    fetchMock.post('https://nameless-springs-87911.herokuapp.com/api/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: ''
    })
    const messageData = {
        fullname: "jujuju",
        email: "manzif60@gmail.com",
        telephone: "0999999",
        message: "d"
    }
    return store.dispatch(actions.addMessage(messageData))
  })
})
