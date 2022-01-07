let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'How is your alefinvest.xyz', likesCount: 11},
            {id: 3, message: 'Hello, it\'s my first post', likesCount: 22},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Aleksei'},
            {id: 2, name: 'Vasiliy'},
            {id: 3, name: 'Volodymyr'},
            {id: 4, name: 'Svitlana'},
            {id: 5, name: 'Aleks'},
            {id: 6, name: 'Andrei'},
            {id: 7, name: 'Valerio'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your alefinvest.xyz'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Andrew', src: 'http://trailers.apple.com/trailers/fox/images/avatar_200908191149.jpg'},
            {id: 2, name: 'Sasha', src: 'http://trailers.apple.com/trailers/fox/images/avatar_200908191149.jpg'},
            {id: 3, name: 'Sveta', src: 'http://trailers.apple.com/trailers/fox/images/avatar_200908191149.jpg'},
        ],
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5, message: postMessage, likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
}

export default state;