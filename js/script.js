//------------------------------------------Creat all my Classes--------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//abstract because I dont want that someone create a class of Starystem 
var Universe = /** @class */ (function () {
    function Universe(universeName) {
        this.universeName = universeName;
    }
    //get my universeName
    Universe.prototype.getuniverseName = function () {
        return this.universeName;
    };
    return Universe;
}());
//create my Class Planet with public variables so I can acces them and extends my Starsystem so my Planet is in my Starsystem 
//This Subclass of Starsystem is my Superclass for Location and DoTo
var Planet = /** @class */ (function (_super) {
    __extends(Planet, _super);
    function Planet(universeName, name, description, locationName, adress, img, homepage) {
        var _this = _super.call(this, universeName) || this;
        _this.universeName = universeName;
        _this.name = name;
        _this.description = description;
        _this.locationName = locationName;
        _this.adress = adress;
        _this.img = img;
        _this.homepage = homepage;
        return _this;
    }
    //I creat here getters and setters for the class so I can call my values from the class, or set new values for my class
    Planet.prototype.setDescription = function (d) {
        return this.description = d;
    };
    Planet.prototype.setname = function (p) {
        return this.name = p;
    };
    Planet.prototype.setlocationName = function (l) {
        return this.locationName = l;
    };
    Planet.prototype.setAdress = function (a) {
        return this.adress = a;
    };
    Planet.prototype.setImg = function (i) {
        return this.img = i;
    };
    Planet.prototype.setHomepage = function (h) {
        return this.homepage = h;
    };
    return Planet;
}(Universe));
//Subclass of Planet - has all my meth and now we can creat a new Location on the Planet without writing to mutch - awsome!
var Locations = /** @class */ (function (_super) {
    __extends(Locations, _super);
    function Locations(universeName, name, description, locationName, adress, img, homepage) {
        var _this = _super.call(this, universeName, name, description, locationName, adress, img, homepage) || this;
        _this.universeName = universeName;
        _this.name = name;
        _this.description = description;
        _this.locationName = locationName;
        _this.adress = adress;
        _this.img = img;
        _this.homepage = homepage;
        return _this;
    }
    return Locations;
}(Planet));
//abstract because it is only here to give all activeties on my Planet the same Meth and function - Superclass of Restaurant and Events - Subclass of Planet
var DoTo = /** @class */ (function (_super) {
    __extends(DoTo, _super);
    function DoTo(universeName, name, description, locationName, adress, img, homepage, telephon) {
        var _this = _super.call(this, universeName, name, description, locationName, adress, img, homepage) || this;
        _this.universeName = universeName;
        _this.name = name;
        _this.description = description;
        _this.locationName = locationName;
        _this.adress = adress;
        _this.img = img;
        _this.homepage = homepage;
        _this.telephon = telephon;
        return _this;
    }
    DoTo.prototype.setTelephon = function (t) {
        return this.telephon = t;
    };
    return DoTo;
}(Planet));
//Subclass of DoTo
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(universeName, name, description, locationName, adress, img, homepage, telephon) {
        var _this = _super.call(this, universeName, name, description, locationName, adress, img, homepage, telephon) || this;
        _this.universeName = universeName;
        _this.name = name;
        _this.description = description;
        _this.locationName = locationName;
        _this.adress = adress;
        _this.img = img;
        _this.homepage = homepage;
        _this.telephon = telephon;
        return _this;
    }
    return Restaurant;
}(DoTo));
//Subclass of DoTo with 2 new parameter date and price
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(universeName, name, description, locationName, adress, img, homepage, telephon, date, price) {
        var _this = _super.call(this, universeName, name, description, locationName, adress, img, homepage, telephon) || this;
        _this.universeName = universeName;
        _this.name = name;
        _this.description = description;
        _this.locationName = locationName;
        _this.adress = adress;
        _this.img = img;
        _this.homepage = homepage;
        _this.telephon = telephon;
        _this.date = date;
        _this.price = price;
        return _this;
    }
    Events.prototype.setDate = function (d) {
        return this.date = d;
    };
    Events.prototype.setPrice = function (p) {
        return this.date = p;
    };
    return Events;
}(DoTo));
//------------------------------------------Classes for my HTML Space Site--------------------------------------------
//first Universe with all classes
//Hitchiker data ----------
var universe1 = new Universe("The Hitchhiker's Guide to the Galaxy");
//Planet Magrathea
var planet1 = new Planet(universe1.universeName, "Magrathea", "“Magrathea itself soon became the richest planet of all time”", "Magrathea", "Horsehead Nebula", "./marga.jpg", "https://hitchhikers.fandom.com/wiki/Magrathea");
var location1_0 = new Locations(universe1.universeName, planet1.name, "Deep Thought was a supernatural-computer programmed to calculate the answer to the Ultimate Question of Life, the Universe, and Everything. It designed the planet Earth, which was built by the Magratheans.", "Deep Thought", planet1.adress, planet1.img, "https://hitchhikers.fandom.com/wiki/Deep_Thought");
var events1_0 = new Events(universe1.universeName, planet1.name, "“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”", "Deep Thought", "Magrathea; 4242, Desert; 42", ".img/deep.png", "https://hitchhikers.fandom.com/wiki/Deep_Thought", "42", "approximately in 3.5 million years", 0);
var Restaurant1_0 = new Restaurant(universe1.universeName, planet1.name, "You can´t come in without a Towel", "Desert Inn", "Magrathea; 4242, Desert; 42", ".img/deep.png", "https://hitchhikers.fandom.com/wiki/Deep_Thought", "+042 4242 424 24 242");
//Plane Restaurant
//Planet Earth
// Star Trek ----------
//Planet
//The Expanse ----------
//Planet Earth
//Planet Mars
//Belter
//Star Wars
//Planet
//------------------------------------------Start with createing my HTML----------------------------------------------
$(document).ready(function () {
    $(".cont1").append("<div><h1>" + Restaurant1_0.universeName + " <br>" + Restaurant1_0.name + "<br>" + Restaurant1_0.description + "<br>" + Restaurant1_0.locationName + "<br>" + Restaurant1_0.adress + "<br>" + Restaurant1_0.homepage + "<br>" + Restaurant1_0.telephon + "</h1></div>");
    //------------------------------------------Some Function for my HTML ------------------------------------------------
    //background img form CodePen by  Marc Newport name Space travel
    //change postion ratio, size, and some other important things so that the background nice to look in a container 
    // Build the structure outside of the DOM
    var $layerWrap = $('.container').attr('id', 'layers'), layers = 5, $layer, stars, $star;
    while (layers) {
        $layer = $('<div/>').addClass('layer layer-' + layers);
        stars = 30;
        // Stick a bunch of svg stars on each layer
        while (stars) {
            $star = $('<span/>').addClass('star');
            //TODO : would it be more efficient to xlink it?
            $star.html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M10.744,5.372C7.777,5.372,5.372,2.967,5.372,0c0,2.967-2.405,5.372-5.372,5.372c2.967,0,5.372,2.405,5.372,5.372 C5.372,7.777,7.777,5.372,10.744,5.372z"/></svg>');
            // Randomise the position, size, and opacity (colour defined in CSS)
            $star.css({
                left: randomInt(1, 100) + '%',
                top: randomInt(1, 100) + '%',
                transform: 'scale(' + randomNum(0, 1) + ')',
                opacity: randomNum(0.6, 1)
            });
            $layer.append($star);
            stars--;
        }
        $layerWrap.prepend($layer);
        layers--;
    }
    $('.container').append($layerWrap);
    /**
     * Returns random integer
     */
    function randomInt(min, max) {
        return Math.floor((Math.random() * max) + min);
    }
    /**
     * Returns random number
     */
    function randomNum(min, max) {
        return Math.max((Math.random() * max), min).toFixed(1);
    }
    $('.carousel').carousel({
        interval: false
    });
});
(jQuery);
