import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const FETCH_LINK = "https://api.github.com/repos/m0ozeh/my-github-blog/contents/posts/";

export interface Category {
    name : string,
    postTitle : string[]
}

const initialState: Category[] = [];

export const fetchCategory = createAsyncThunk('fetchCategory', async () => {
    // need to validate this type
    const categoryData:Category[] = [];

    let fetchedData:Category[] = (await axios.get(FETCH_LINK)).data as Category[];

    fetchedData = fetchedData.map((el) => ({name:el.name, postTitle:[]}));

    for await (let value of fetchedData) {
        let singleCategory = (await axios.get(FETCH_LINK + value.name)).data as Category[];

        categoryData.push({name:value.name, postTitle:singleCategory.map((value) => (value.name.replace(".md", ""))) });
    }
    console.log("호출됨");
    return categoryData;
})

export const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            return action.payload;
        })
    },
})

export default categorySlice.reducer;