import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader } from './views/base';

//Global state of app
const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();
    //console.log(query);

    if (query) {

        state.search = new Search(query);

        searchView.clearIpnut();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        await state.search.getResults();

        //console.log(state.search.result);

        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});




//   e31998911a844b2e9ef7d13b9c0269e3
//   https://www.food2fork.com/api/search



//   https://www.food2fork.com/api/get
/*
const key = 'e31998911a844b2e9ef7d13b9c0269e3';

const getResults = async query => {
    const response = await axios.get(`https://www.food2fork.com/api/search?key=${key}&q${query}`);
    const data = await response.data;
    console.log(data);
};
*/