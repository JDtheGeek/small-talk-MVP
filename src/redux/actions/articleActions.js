export function createArticle(article) {
  return (dispatch, getState) => {
    // TODO get data from firebase
    dispatch(
      { type: 'CREATE_ARTICLE', article })
  }
}
