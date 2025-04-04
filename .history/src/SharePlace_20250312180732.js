import { Modal } from './UI/Modal';

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }

    locateUserHandler() {
        if (!navigator.geolocation) {
            alert('Location feature is not available in your browser');
            return;
        }

        const modal = new Modal('loading-modal-content', 'Loading location = please wait!');
        modal.show();
        navigator.geolocation.getCurrentPosition(successResult => {
            modal.
            const coordinates = {
              lat: successResult.coords.latitude + Math.random() * 50,
              lng: successResult.coords.longitude + Math.random() * 50,
            };
            console.log(coordinates);

        }, error => {
            alert('Could not locate your unfortunately. Please enter an address manually!');
        });
    }

    findAddressHandler() {}
}

const placeFinder = new PlaceFinder();