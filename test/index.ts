import {getSearchResult} from '../src/functions/search';

const test = async () => {
    const result = await getSearchResult('messi', {
        language: 'fr',
    });
    console.log(result);
}

test();


