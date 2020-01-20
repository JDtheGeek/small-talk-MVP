const initState = {
  articles: [
    { id: '1', author: 'Auther One', title: 'Title One', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aut, eum voluptates nostrum ratione sapiente commodi adipisci pariatur recusandae distinctio maxime dignissimos quisquam? Officia veniam doloribus atque corporis rerum suscipit.' },
    { id: '2', author: 'Auther Two', title: 'Title Two', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aut, eum voluptates nostrum ratione sapiente commodi adipisci pariatur recusandae distinctio maxime dignissimos quisquam? Officia veniam doloribus atque corporis rerum suscipit.' },
    { id: '3', author: 'Auther Three', title: 'Title Three', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aut, eum voluptates nostrum ratione sapiente commodi adipisci pariatur recusandae distinctio maxime dignissimos quisquam? Officia veniam doloribus atque corporis rerum suscipit.' }
  ]
}

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE':
      console.log('Created article: ', action.article)
      break
    default:
      break
  }
  return state
}

export default articleReducer