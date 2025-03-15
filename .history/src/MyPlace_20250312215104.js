import { Map } from './UI/Map';

class LoadedPlace {
    constructor(coordinates, address) {
        new Map(coordinates);
        const headerTitleEl= document.querySelector('header h1');
        headerTitleEl.textContent = address;
    }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
const coords = {
    lat: +queryParams.get('lat'), // or parseFloat(que)
    lng: +queryParams.get('lng')
}
new LoadedPlace();