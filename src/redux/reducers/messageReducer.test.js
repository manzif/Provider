import messageReducer from './messageReducer'
import * as types from '../actions/types'

describe('message reducer', () => {

  it('should handle NEW_MESSAGE', () => {
    expect(
      messageReducer([], {
        type: types.NEW_MESSAGE,
        message: 'Run the tests'
      })
    ).toEqual(
      {
        "message": undefined }
    )
  })
})
