const GOOGLE_API_KEY = 'AIzaSyCueuEMBmaAK6XUl6pfsL0J5NTF6HwpjtY';

export async function getCoordsFromAddress(address) {
    const urlAddress = encodeURI(address);
    
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${}&key=${GOOGLE_API_KEY}`);


}