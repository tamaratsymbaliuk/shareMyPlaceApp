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
// const coords = {
//   lat: +queryParams.get("lat"), // or parseFloat(queryParams.get('lat'))
//   lng: +queryParams.get("lng"),
// };
// const address = queryParams.get('address');

const locId = queryParams.get('location');
fetch('http://localhost:3000/location/' + locId)
.then(response => {
  return response.json();
})
.then(data => {
  new LoadedPlace(coords, address);
})

