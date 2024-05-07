class SiteObject {
    constructor(name, url,city,lat,long,postcode,timeOn,timeoff,companyName,agree,guards,checkCall,daysArray) {
        this.name = name;
        this.url = url;
        this.city = city;
        this.lat = lat;
        this.long = long;
        this.postcode = postcode;
        this.timeoff = timeoff;
        this.timeOn = timeOn;
        this.companyName = companyName;
        this.agree = agree;
        this.guards = guards;
        this.checkCall = checkCall;
        this.daysArray = daysArray;

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