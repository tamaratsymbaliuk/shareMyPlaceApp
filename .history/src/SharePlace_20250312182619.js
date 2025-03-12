import { Modal } from './UI/Modal';
import { Map } from './UI/Map';


class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }

    selectPlace(coordinates) {
        if (this.map) {
            this.map.render(coordinates);
        } else {
            this.map = new Map(coordinates);
        }       
    }

    locateUserHandler() {
        if (!navigator.geolocation) {
            alert('Location feature is not available in your browser');
            return;
        }

        const modal = new Modal('loading-modal-content', 'Loading location = please wait!');
        modal.show();
        navigator.geolocation.getCurrentPosition(successResult => {
            modal.hide();
            const coordinates = {
              lat: successResult.coords.latitude + Math.random() * 50,
              lng: successResult.coords.longitude + Math.random() * 50,
            };
            this.
            console.log(coordinates);

        }, error => {
            modal.hide();
            alert('Could not locate your unfortunately. Please enter an address manually!');
        });
    }

    findAddressHandler() {}
}

const placeFinder = new PlaceFinder();