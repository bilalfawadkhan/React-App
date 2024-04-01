class SiteObject {
    constructor(name, url,city,lat,long) {
        this.name = name;
        this.url = url;
        this.city = city;
        this.lat = lat;
        this.long = long;
    }
    setName(name) {
        this.name = name;
    }

    setUrl(url) {
        this.url = url;
    }

    setCity(city) {
        this.city = city;
    }

    setLat(lat) {
        this.lat = lat;
    }

    setLong(long) {
        this.long = long;
    }

    getName() {
        return this.name;
    }

    getUrl() {
        return this.url;
    }

    getCity() {
        return this.city;
    }

    getLat() {
        return this.lat;
    }

    getLong() {
        return this.long;
    }
    // Add any additional methods or properties here
}

module.exports = SiteObject;