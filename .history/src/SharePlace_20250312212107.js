import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordsFromAddress, getAddressFromCoords } from './Utility/Location';


class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');
        this.shareBtn = document.getElementById('share-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
        this.shareBtn.addEventListener('click',);
        addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
    }

    selectPlace(coordinates, address) {
        if (this.map) {
            this.map.render(coordinates);
        } else {
            this.map = new Map(coordinates);
        }
        
        this.shareBtn.disabled = false;
        const sharedLinkInputElement = document.getElementById('share-link');
        sharedLinkInputElement.value = `${location.origin}`;
        
        
    }

    async locateUserHandler() {
        if (!navigator.geolocation) {
            alert('Location feature is not available in your browser');
            return;
        }

        const modal = new Modal('loading-modal-content', 'Loading location - please wait!');
        modal.show();
        navigator.geolocation.getCurrentPosition(successResult => {
            const coordinates = {
              lat: successResult.coords.latitude + Math.random() * 50,
              lng: successResult.coords.longitude + Math.random() * 50,
            };
            const address = await getAddressFromCoords(coordinates);
            modal.hide();
            this.selectPlace(coordinates, address);
            console.log(coordinates);

        }, error => {
            modal.hide();
            alert('Could not locate your unfortunately. Please enter an address manually!');
        });
    }

    async findAddressHandler(event) {
        event.preventDefault();
        const address = event.target.querySelector('input').value;
        if (!address || address.trim().length === 0) {
            alert('Invalid address entered - please try again!');
            return;
        }
        const modal = new Modal('loading-modal-content', 'Loading location - please wait!');
        modal.show();
        try {
        const coordinates = await getCoordsFromAddress(address);
        this.selectPlace(coordinates, address);
        } catch (err) {
            alert(err.message);
        }    
        modal.hide();
    }
}

const placeFinder = new PlaceFinder();