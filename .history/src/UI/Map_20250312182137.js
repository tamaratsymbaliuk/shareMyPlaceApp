class Map {
    constructor(coords) {
        this.coordinates = coords;
        this.render();

    }

    render() {
        if (!google) {
           alert ('Could not load map library - please try later');
           return; 
        }

        const map = new google.maps.Map(document.getElementById('map'), {center: this.coordinates, zoom: 16});

        new google.maps.Marker({
            posit
        })
    }
}