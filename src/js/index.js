// Global app controller
// Where webpack starts looking my files
// The value 50 exported from 'test.js' would be saved in `num`
import num from './test';

console.log(`I imported ${num} from test.js`);