import {getSearchResult} from '../src/functions/search';

const test = async () => {
    const result = await getSearchResult('messi');
    console.log(result);
}

test();


