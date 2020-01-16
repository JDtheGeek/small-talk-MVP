const initState = {
  articles: [
    { id: '1', title: 'Title One', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aut, eum voluptates nostrum ratione sapiente commodi adipisci pariatur recusandae distinctio maxime dignissimos quisquam? Officia veniam doloribus atque corporis rerum suscipit.' },
    { id: '2', title: 'Title Two', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aut, eum voluptates nostrum ratione sapiente commodi adipisci pariatur recusandae distinctio maxime dignissimos quisquam? Officia veniam doloribus atque corporis rerum suscipit.' },
    { id: '3', title: 'Title Three', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aut, eum voluptates nostrum ratione sapiente commodi adipisci pariatur recusandae distinctio maxime dignissimos quisquam? Officia veniam doloribus atque corporis rerum suscipit.' }
  ]
}

const articleReducer = (state = initState, action) => {
  return state
}

export default articleReducer