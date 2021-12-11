import{
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
} from '../actions/types';


const INIT_STATE ={
    resultsPosts: [],
    recentPosts: []
}

export default function(state= INIT_STATE, action) {
    switch(action.type) {
        case SET_RECENT_POSTS:
            const recentPosts= action.playload;
            return {
                ...state, 
                recentPosts
            }

    case SET_RESULTS_POSTS:
        const resultsPosts = action.playload;
        return {
            ...state,
            resultslPosts
        }
        default:
            return state;
    }
}