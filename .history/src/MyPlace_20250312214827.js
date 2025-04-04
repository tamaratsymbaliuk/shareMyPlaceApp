import { Map } from './UI/Map';

class LoadedPlace {
    constructor(coordinates, address) {
        new Map(coordinates);
        const headerTitleEl= document.querySelector('header h1');
        headerTitleEl.textContent = address;
    }
}

new URL(location.href)
new LoadedPlace();