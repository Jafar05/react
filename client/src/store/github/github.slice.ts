import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface GithubSlice {
    favorite: string[]
}

const initialState: GithubSlice = {
    favorite: JSON.parse(localStorage.getItem('rfk') ?? '[]')
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<string>) {
            state.favorite.push(action.payload)
            localStorage.setItem('rfk', JSON.stringify(state.favorite))
        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.favorite = state.favorite.filter(f => f !== action.payload)
            localStorage.setItem('rfk', JSON.stringify(state.favorite))
        }
    }
})

export const githubActions = githubSlice.actions
export const githubReducers = githubSlice.reducer
