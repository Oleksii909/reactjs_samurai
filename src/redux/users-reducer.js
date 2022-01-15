const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        {id: 1, name: 'Oleksii909', status: 'I am professional FullStack Developer (Drupal+React)', location: {city:'Kiev', country: 'Ukraine'}},
        {id: 2, name: 'Andrey', status: 'I am drupal developer', location: {city:'Moscow', country: 'Russia'}},
        {id: 3, name: 'Dmitriy', status: 'I am react developer', location: {city:'Minsk', country: 'Belarus'}},
    ],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default usersReducer;