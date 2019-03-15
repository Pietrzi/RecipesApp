import axios from 'axios';

export default class Search {
    constructor (query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'e31998911a844b2e9ef7d13b9c0269e3';
        try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q${this.query}`);
        this.result = res.data.recipes;
        //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}