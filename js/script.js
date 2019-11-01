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
    //Create the Planet as a Accordion Element with body and add it to the html - i is form the loopiteration to get the collaps id right
    Planet.prototype.creatAccordionCard = function (i) {
        $("#accordionExample").append("<div>\n                            <div class=\"card-header\" id=\"heading\">\n                                    <button style=\"width :100%\" class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse" + i + "\" aria-expanded=\"false\" aria-controls=\"collapset\">\n                                        <div class=\"row\" style=\"text-align:center\"><h4>" + this.name + "</h4>  \n                           \n                                    </button>\n                            </div>\n                            <div id=\"collapse" + i + "\" class=\"collapse\" aria-labelledby=\"heading\" data-parent=\"#accordionExample\">\n                                <div class=\"card-body row\" id=\"card-body" + i + "\">\n                                    <img style=\"object-fit:cover\" class=\"card-img col-4 offset-1\" src=\"" + this.img + "\">\n                                    <div class = \"col-7\">\n                                    <p class=\" text-left\">Cluster: " + this.adress + "</p>\n                                    <p class=\" text-left\">Homepage:  <a href=\"" + this.homepage + "\">" + this.locationName + "</a></p>\n                                    <p class=\" text-left\">Universe: " + this.universeName + "</p> \n                                    <p class=\" text-left\">" + this.description + "</p>\n                                    </div>\n                                    \n\n                                </div>\n                            </div>\n                        </div>");
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
    Locations.prototype.creatAccordionCard = function (i) {
        $("#accordionExample" + i).append("<div>\n                            <div class=\"card-header cardColor\" id=\"headingunderA\">\n                                    <button style=\"width :100%\" class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseUnderA" + this.name + "\" aria-expanded=\"false\" aria-controls=\"collapsetA\">\n                                        <div class=\"row\"><h5>Points of interests: " + this.locationName + "</h5>  \n                           \n                                    </button>\n                        \n                            </div>\n                            <div id=\"collapseUnderA" + this.name + "\" class=\"collapse\" aria-labelledby=\"heading\" data-parent=\"#accordionExample1\">\n                                <div class=\"card-body row\">\n                                    <img style=\"object-fit:cover\" class=\"card-img col-4 offset-1\" src=\"" + this.img + "\">\n                                    <div class = \"col-7\">\n                                    <p class=\" text-left\">Cluster: " + this.adress + "</p>\n                                    <p class=\" text-left\">Homepage:  <a href=\"" + this.homepage + "\">" + this.locationName + "</a></p>\n                                    <p class=\" text-left\">Universe: " + this.universeName + "</p>\n \t\t\t\t\t\t\t\t\t<p class=\" text-left\">" + this.description + "</p>\n\n                                    </div>\n                                   \n\n                                </div>\n                            </div>\n                        </div>");
    };
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
    Restaurant.prototype.creatAccordionCard = function (i) {
        $("#accordionExample" + i).append("<div>\n                            <div class=\"card-header cardColor\" id=\"headingUnderB\">\n                                    <button style=\"width :100%\" class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseUnderB" + this.name + "\" aria-expanded=\"false\" aria-controls=\"collapsetB\">\n                                        <div class=\"row\"><h5>Restaurant: " + this.locationName + "</h5>  \n                           \n                                    </button>\n                            </div>\n                            <div id=\"collapseUnderB" + this.name + "\" class=\"collapse\" aria-labelledby=\"heading\" data-parent=\"#accordionExample1\">\n                                <div class=\"card-body row\">\n                                    <img style=\"object-fit:cover\" class=\"card-img col-4 offset-1\" src=\"" + this.img + "\">\n                                    <div class = \"col-7\">\n                                    <p class=\" text-left\">Cluster: " + this.adress + "</p>\n                                    <p class=\" text-left\">Homepage:  <a href=\"" + this.homepage + "\">" + this.locationName + "</a></p>\n                                    <p class=\" text-left\">Universe: " + this.telephon + "</p>\n                                    <p class=\" text-left\">Universe: " + this.universeName + "</p>\n\t\t\t\t\t\t\t\t\t<p class=\" text-left\">" + this.description + "</p>\n\n                                    </div>\n                                    \n\n                                </div>\n                            </div>\n                        </div>");
    };
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
        return this.price = p;
    };
    Events.prototype.creatAccordionCard = function (i) {
        console.log(i);
        $("#accordionExample" + i).append("<div>\n                            <div class=\"card-header cardColor\" id=\"headingUnderC\">\n                              \n                                    <button style=\"width :100%\" class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseUnderC" + this.name + "\" aria-expanded=\"false\" aria-controls=\"collapsetC\">\n                                        <div class=\"row\"><h5>Event: " + this.locationName + "</h5>  \n                           \n                                    </button>\n                            \n                            </div>\n                            <div id=\"collapseUnderC" + this.name + "\" class=\"collapse\" aria-labelledby=\"heading\" data-parent=\"#accordionExample1\">\n                                <div class=\"card-body row\" id =\"nextAccordion" + i + "\">\n                                    <img style=\"object-fit:cover\" class=\"card-img col-4 offset-1\" src=\"" + this.img + "\">\n                                    <div class = \"col-7\">\n                                    <p class=\" text-left\">Cluster: " + this.adress + "</p>\n                                    <p class=\" text-left\">Price: " + this.date + "</p>\n\n                                    <p class=\" text-left\">Price: " + this.price + " \u20AC</p>\n\t\t\t\t\t\t\t\t\n                                    <p class=\" text-left\">Homepage: <a href=\"" + this.homepage + "\">" + this.locationName + "</a></p>\n                                    <p class=\" text-left\">Tel: " + this.telephon + "</p>\n                                    <p class=\" text-left\">Universe: " + this.universeName + "</p>\n                                    <p class=\" text-left\">" + this.description + "</p>\n\n\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>");
    };
    return Events;
}(DoTo));
//------------------------------------------Classes for my HTML Space Site--------------------------------------------
//first Universe with all classes
//Hitchiker data ----------
var universe1 = new Universe("The Hitchhiker's Guide to the Galaxy");
//Planet Magrathea
var planet0_0 = new Planet(universe1.universeName, "Magrathea", "“Magrathea itself soon became the richest planet of all time”", "Magrathea", "Horsehead Nebula", "./img/marga.jpg", "https://hitchhikers.fandom.com/wiki/Magrathea");
var location1_0 = new Locations(universe1.universeName, "MagraL0", "Deep Thought was a supernatural-computer programmed to calculate the answer to the Ultimate Question of Life, the Universe, and Everything. It designed the planet Earth, which was built by the Magratheans.", "Deep Thought", planet0_0.adress, "./img/deep.png", "https://hitchhikers.fandom.com/wiki/Deep_Thought");
var events1_0 = new Events(universe1.universeName, "MagraE0", "“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”", "Next Deep Thought Answer", "Magrathea; 4242, Desert: 42", "./img/42.jpg", "https://hitchhikers.fandom.com/wiki/Deep_Thought", "42", "approximately in 3.5 million years", 0);
var restaurant1_0 = new Restaurant(universe1.universeName, "DesertInn", "“You can´t come in without a Towel“", "Desert Inn", "Magrathea; 4242, Desert: 42", "./img/golga_restaurant3.jpg", "https://hitchhikers.fandom.com/wiki/Deep_Thought", "+042 4242 424 24 242");
//Planet Restaurant Frogstar
var planet0_1 = new Planet(universe1.universeName, "Frogstar World B", "Frogstar World B was once a happy, prosperous planet, which was plunged into poverty and despair by a tragic economic phenomenon known as the Shoe Event Horizon, the details of which are as follows: <br> Even though this planet was, indeed, happy and prosperous, it could be said to have had just a little too many shoe shops. Its poor, fashion-crazed and economically ignorant citizens bought these shoes, gradually coming to buy more, and more, and more, until the shoe companies saw and seized their opportunity, and began to build more shoe shops.", "Frogstar World B", "Total Perspective Vortex", "./img/frog_Planet.jpg", "https://hitchhikers.fandom.com/wiki/Frogstar_World_B");
var location1_1 = new Locations(universe1.universeName, "FrogE0", "Best Farm on this site of the galaxy", "Frogstar Farm", "Total Perspective Vortex 4242, Frogstreet 42/42", "./img/frog_location.jfif", "http://frogstarfarm.com/blog1/about-frogstar/");
var events1_1 = new Events(universe1.universeName, "FrogE1", "Singing all the night long, come and join us!", "Frogstar Karaoke", "Towelstreet 42, Frogsing 42", "./img/frog_event.jpg", "https://www.meetup.com/de-DE/members/8266470/?op=&memberId=8266470", "+024 4242 424 24 242", "every Frieday", 15);
var restaurant1_1 = new Restaurant(universe1.universeName, "EndoftheUniverse", "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.", "Restaurant at the End of the Universe", "End of the Universe 42, End 42", "./img/frog_restaurant.jpg", "https://hitchhikers.fandom.com/wiki/The_Restaurant_at_the_End_of_the_Universe", "+024 2424 424 24 242");
//Planet Golga
var planet0_2 = new Planet(universe1.universeName, "Golgafrincham", "Golgafrincham was a planet, once home to the Great Circling Poets of Arium. The descendants of these poets made up tales of impending doom about the planet. The tales varied; some said it was going to crash into the sun, or the moon was going to crash into the planet. Others said the planet was to be invaded by twelve-foot piranha bees and still others said it was in danger of being eaten by an enormous mutant star-goat.", "Golgafrincham", " Golga", "./img/golga_planet.jfif", "https://hitchhikers.fandom.com/wiki/Golgafrincham");
var location1_2 = new Locations(universe1.universeName, "GolgaL0", "“For a moment, nothing happened. Then, after a second or so, nothing continued to happen.”", "Arkship Museum", "Golgafrincham 4224 Golgastreet 42", "./img/golga_ark.jpg", "https://hitchhikers.fandom.com/wiki/Golgafrincham");
var events1_2 = new Events(universe1.universeName, "GolgaE0", "Disaster Area are a plutonium rock band from the Gagrakacka Mind Zones and are generally regarded as not only the loudest rock band in the Galaxy, but also as being the loudest noise of any kind at all.", "Disaster Area", "Golgadown 4242, Gostrett 4", "./img/golga_event.jpg", "https://hitchhikers.fandom.com/wiki/Disaster_Area", "+422 4242 4242", "06.11.2019", 500);
var restaurnat1_2_0 = new Restaurant(universe1.universeName, "ClassA", "Only for A-Class people", "Restaurant Class A", "Golgacity 2424, DownTown 42", "./img/golga_restaurant1.jpg", "https://www.birminghammail.co.uk/whats-on/family-kids-news/massive-space-themed-crazy-golf-15587392", "+422 2244 4422 2244");
var restaurnat1_2_1 = new Restaurant(universe1.universeName, "ClassB", "Only for B-Class people", "Restaurant Class B", "Golgacity 2442, DownTown 24", "./img/golga_restaurant2.jpg", "https://www.theyellowsparrow.com/conceptual-restaurants-in-india/", "+422 2244 4422 4224");
var restaurnat1_2_2 = new Restaurant(universe1.universeName, "ClassC", "Only for C-Class people", "Restaurant Class C", "Golgacity 4224, DownTown 4", "./img/golga_restaurant3.jpg", "https://www.syfy.com/syfywire/10_incredible_sci_fi_them", "+422 2244 4422 4422");
//Universe 1 all Arrays fo my Meth
var planetArr0 = [planet0_0, location1_0, events1_0, restaurant1_0];
var planetArr1 = [planet0_1, location1_1, events1_1, restaurant1_1];
var planetArr2 = [planet0_2, location1_2, events1_2, restaurnat1_2_0, restaurnat1_2_1, restaurnat1_2_2];
var universe1Arr = [planetArr0, planetArr1, planetArr2];
// Star Trek ----------
var universe2 = new Universe("Star Trek");
//Planet Vulcan
var planet1_0 = new Planet(universe2.universeName, "Vulcan", "The Vulcans, or Vulcanians, were a warp-capable humanoid species from the planet Vulcan. They were widely renowned for their strict adherence to logic and reason as well as their remarkable stoicism.", "Vulcan", "Delta Volanis Cluster", "./img/vulcan_planet.jpg", "https://memory-beta.fandom.com/wiki/Delta_Volanis_Cluster");
var location2_0 = new Locations(universe2.universeName, "Vulcan0", "The Vulcan lute (sometimes referred to as Vulcan harp, Vulcan lyre, or Vulcan Lyrette) was a twelve-stringed musical instrument, played on the planet Vulcan, that was tuned on a diatonic scale and noted to be very soothing.", "Vulcan lute Museum", "Raal 2554 , DownTown 8", "./img/vulcan_location.jpg", "https://memory-alpha.fandom.com/wiki/Vulcan_lute");
var event2_0_0 = new Events(universe2.universeName, "VulcanE0", "Live long and prosper", "Live long and prosper Tour 2285", "Vulcana Regar 2315, Somestreet 11", "./img/vulcan_event.jpg", "https://tenor.com/view/spock-guitar-rockstar-star-trek-gif-9511597", "+064 4640 4646", "12.12.2285", 100);
var event2_0_1 = new Events(universe2.universeName, "VulcanE1", "Learn Vulcan in 1 Day", "Vulcan Language Course", "Vulcana Regar 2315, Otherstreet 29", "./img/Vulcan_event1.gif", "https://memory-alpha.fandom.com/wiki/Vulcan_language", "+064 3240 1146", "09.01.2286", 50);
var restaurant2_0 = new Restaurant(universe2.universeName, "VulcanR0", "Vulcan foods and beverages were the typical food and drink consumed by Vulcans.<br> Several Vulcan dishes were served for dinner by the Romulan commander to Spock while he was aboard her flagship in 2268. When asked of the dishes meet his approval, Spock said: I am flattered, Commander. There is no doubt that the cuisine aboard your vessel far surpasses that of the Enterprise. It is indeed a powerful recruiting inducement.", "Vul Donald´s", "ShiKahr District 4647, Spockstreet 2", "./img/vulcan_restaurant.jpg", "https://memory-alpha.fandom.com/wiki/Vulcan_foods_and_beverages", "+889 6546 0444");
//Planet Klingon
var planet1_1 = new Planet(universe2.universeName, "Qo'noS", "The Klingons (tlhIngan in Klingonese) were a humanoid warrior species that originated from the planet Qo'noS (pronounced Kronos), an M-class planet in the Beta Quadrant. One of the major powers of the galaxy, the Klingons were a proud, tradition-bound people who valued honor and combat. The aggressive Klingon culture had made them an interstellar military power to be respected and feared.", "Qo'noS,", "Qo'noS system", "./img/kling_planet.jpg", "https://memory-alpha.fandom.com/wiki/Qo%27noS");
var location2_1 = new Locations(universe2.universeName, "KlingL0", "The bat'leth, or -sword of honor-, was a traditional Klingon bladed weapon. While Klingons often carried disruptors, they preferred to use bladed weapons in combat, with the two most common ones being the bat'leth and the mek'leth.", "Bat'leth Museum", "Ha'r Kling Jaa 4545 , DownTown 1", "./img/kling_location.jpg", "https://memory-alpha.fandom.com/de/wiki/Bat%27leth");
var event2_1_0 = new Events(universe2.universeName, "KlingonE0", "Party all night long", "Klingon drinking songs", "Tong Vey 2315, Somestreet 91", "./img/kling_event.jpg", "https://memory-alpha.fandom.com/wiki/Klingon_drinking_song", "+099 5440 1646", "08.02.2286", 10);
var event2_1_1 = new Events(universe2.universeName, "KlingonE1", "Learn Klingon in 1 Day", "Klingon Language Course", "Tong Vey 2315, Otherstreet 59", "./img/kling_event1.jpg", "http://klingonska.org/dict/", "+064 3240 1146", "09.01.2286", 40);
var restaurant2_1_0 = new Restaurant(universe2.universeName, "KlingonR0", "Yes. If Klingon food is too strong for you, perhaps we could get one of the females to breast feed you.", "Klingon Cake Factory", "Qam-Chee 1112, Khanstreet 12", "./img/kling_restaurant.jpg", "https://memory-alpha.fandom.com/wiki/Klingon_foods_and_beverages", "+889 6546 0444");
var restaurant2_1_1 = new Restaurant(universe2.universeName, "KlingonR1", "Revenge is a dish best served cold", "Klingon Inn", "Mor'em Cha 1872, Klingstreet 13", "./img/kling_restaurant1.jpg", "https://memory-alpha.fandom.com/wiki/Klingon_foods_and_beverages", "+314 4899 1234");
//Planet Romulus
var planet1_2 = new Planet(universe2.universeName, "Romulus", "Romulus was the inhabited second planet of the Romulan system in Sector Z-6; it was the homeworld of the Romulans and the capital world of the Romulan Star Empire. Romulus was destroyed by the Supernova of 2387.", "Romulus,", "Krocton Segment", "./img/romu_planet.jpg", "https://memory-alpha.fandom.com/wiki/Romulus");
var location2_2 = new Locations(universe2.universeName, "RomuL0", "Get a Tour throug the Romulan Imperial Senat", "Romulan Imperial Senat", "Krocton Segment 1045 , Mainstreet 1", "./img/romu_location.jpg", "https://memory-beta.fandom.com/wiki/Imperial_Senate_of_the_Romulan_Star_Empire");
var event2_2 = new Events(universe2.universeName, "RomuE0", "Movienight: The Romulan Way", "Romulan Gand Cinema", "Krocton Segment 2315, Romstreet 11", "./img/romu_event.jpg", "https://memory-alpha.fandom.com/wiki/The_Romulan_Way", "+081 5588 1676", "06.11.2285", 8);
var restaurant2_2_0 = new Restaurant(universe2.universeName, "RomuR0", "Romulan ale was a highly intoxicating alcoholic beverage of Romulan origin with a characteristic blue color (ranging from a pale sky blue to a dark midnight blue).", "Romulan Ale Distillery Bar", "Krocton Segment 4112, Romulanstreet 82", "./img/romu_restaurant.jpg", "https://memory-alpha.fandom.com/wiki/Romulus", "+889 6546 0444");
//The Expanse ----------
//Planet Earth
//Planet Mars
//Belter
//Planet
var planetArr3 = [planet1_0, location2_0, event2_0_0, event2_0_1, restaurant2_0];
var planetArr4 = [planet1_1, location2_1, event2_1_0, event2_1_1, restaurant2_1_0, restaurant2_1_1];
var planetArr5 = [planet1_2, location2_2, event2_2, restaurant2_2_0];
var universe2Arr = [planetArr3, planetArr4, planetArr5];
//------------------------------------------Start with createing my HTML----------------------------------------------
$(document).ready(function () {
    function creatPlanets(arr) {
        $(".cont1").append("<div class=\"accordion-inner\"><div class=\"accordion\" id=\"accordionExample\"></div></div>");
        for (var i = 0; i < arr.length; i++) {
            var planet = arr[i];
            planet[0].creatAccordionCard(i);
        }
        ;
    }
    function creatLocations(arr) {
        for (var i = 0; i < arr.length; i++) {
            var planet = arr[i];
            console.log(planet);
            $("#card-body" + i).append("<div class=\"accordion col-12\" id=\"accordionExample" + i + "\"></div>");
            for (var j = 1; j < planet.length; j++) {
                var location_1 = planet[j];
                console.log(location_1);
                location_1.creatAccordionCard(i);
            }
        }
        ;
    }
    creatPlanets(universe1Arr);
    creatLocations(universe1Arr);
    //------------------------------------------Some Function for my HTML ------------------------------------------------
    //change the universe
    $("input[id='option1']").change(function () {
        $(".cont1").html("");
        creatPlanets(universe1Arr);
        creatLocations(universe1Arr);
    });
    $("input[id='option2']").change(function () {
        $(".cont1").html("");
        creatPlanets(universe2Arr);
        creatLocations(universe2Arr);
    });
    //stop auto Carosel
    $('.carousel').carousel({
        interval: false
    });
});
(jQuery);
