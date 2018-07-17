import axios from 'axios';
import l from '../console';

export default class Meals {
    constructor (query) {
        this.query = query;
    }

    async getResults() {
        const key = 'b2b709a71826b160d71a7f12dfab07';
        const endPoint = `http://food2fork.com/api/search?key=${key}cc&q=${this.query}`
        try {
            const result = await axios(endPoint);
            this.recipes = result.data.recipes;
            //l(this.recipes);
        } catch(error) {
            l(error);
        }
    }
}