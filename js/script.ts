
//------------------------------------------Creat all my Classes--------------------------------------------------------------

class User{
	constructor(public user: string){

	}
	setUser(u){
	return this.user = "Captain " + u;
	}
}

//abstract because I dont want that someone create a class of Starystem 
class Universe{
	constructor(public universeName: string){

	}
	//get my universeName
	getuniverseName(){
		return this.universeName;
	}
}
//create my Class Planet with public variables so I can acces them and extends my Starsystem so my Planet is in my Starsystem 
//This Subclass of Starsystem is my Superclass for Location and DoTo
class Planet extends Universe{
	constructor(public universeName : string,  public name : string, public description : string, public locationName : string, public adress : string, public img :string, public homepage : string){
		super(universeName); //get my parameter form the Superclass
	}
	//I creat here getters and setters for the class so I can call my values from the class, or set new values for my class
	
	setDescription (d){
		return this.description = d;
	}
	setname(p){
		return this.name = p;
	}

	setlocationName(l){
		return this.locationName =l;
	}
	
	setAdress(a){
		return this.adress = a;
	}
	
	setImg(i){
		return this.img =i;
	}
	setHomepage(h){
		return this.homepage =h;
	}
	//Create the Planet as a Accordion Element with body and add it to the html - i is form the loopiteration to get the collaps id right
	creatAccordionCard(i){
		$("#accordionExample").append(`             <div class="typewriter">
<div>
                            <div class="card-header" id="heading">
                                    <button style="width :100%" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapset">
                                        <div class="row" style="text-align:center"><h4>${this.name}</h4>  
                           
                                    </button>
                            </div>
                            <div id="collapse${i}" class="collapse" aria-labelledby="heading" data-parent="#accordionExample">
                                <div class="card-body row" id="card-body${i}">
                                    <img style="object-fit:cover" class="card-img col-sm-11 col-md-7 col-lg-7 col-xl-7 offset-1" src="${this.img}">
                                    <div class = "col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <p class=" text-left">Cluster: ${this.adress}</p>
                                    <p class=" text-left">Homepage:  <a href="${this.homepage}">${this.locationName}</a></p>
                                    <p class=" text-left">Universe: ${this.universeName}</p> 
                                    <p class=" text-left">${this.description}</p>
                                    </div>
                                    

                                </div>
                            </div>
                        </div></div>`);
	}
	//Create Alle Items for Second side 3 Items in a row 1 on some
	creatItem(){
			           
		$(".all").append(`<div class="ui-state-default col-sm-12 col-md-12 col-lg-12 col-xl-12 card p-2 grid-sizer panel">
	            <h3 class="text-center p-3">${this.locationName}</h3>
	            <img src="${this.img}" class="rounded mx-auto d-block card-img-top plan"  alt="imgSuperhero" 	>  
	            <p class=" text-left">Cluster: ${this.adress}</p>
                <p class=" text-left">Homepage:  <a href="${this.homepage}">${this.locationName}</a></p>
                <p class=" text-left">Universe: ${this.universeName}</p> 
                <p class=" text-left">${this.description}</p>
	            </div>`);
	}
}

//Subclass of Planet - has all my meth and now we can creat a new Location on the Planet without writing to mutch - awsome!
class Locations extends Planet{
	constructor(public universeName : string, public name : string, public description : string, public locationName : string, public adress : string, public img : string, public homepage : string){
		super(universeName, name, description, locationName, adress, img, homepage);
	}
	creatAccordionCard(i){
		$("#accordionExample" +i).append(`<div>
                            <div class="card-header cardColor" id="headingunderA">
                                    <button style="width :100%" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseUnderA${this.name}" aria-expanded="false" aria-controls="collapsetA">
                                        <div class="row"><h5>Point of interest: ${this.locationName}</h5>  
                           
                                    </button>
                        
                            </div>
                            <div id="collapseUnderA${this.name}" class="collapse" aria-labelledby="heading" data-parent="#accordionExample1">
                                <div class="card-body row">
                                    <img style="object-fit:cover" class="card-img col-sm-12 col-md-5 col-lg-5 col-xl-5 d-none d-md-block" src="${this.img}">
                                    <div class = "col-sm-12 col-md-7 col-lg-7 col-xl-7">
                                    <p class=" text-left">Cluster: ${this.adress}</p>
                                    <p class=" text-left">Homepage:  <a href="${this.homepage}">${this.locationName}</a></p>
                                    <p class=" text-left">Universe: ${this.universeName}</p>
 									<p class=" text-left d-none d-md-block>${this.description}</p>

                                    </div>
                                   

                                </div>
                            </div>
                        </div>`);
	}
	creatItem(){
			           // <i class="fa fa-heart like puls " " aria-hidden="true" id ="${"c"+i}" ></i>

		$(".all").append(`<div class="ui-state-default col-sm-12 col-md-6 col-lg-4 col-xl-4 card p-2 grid-sizer panel">
	            <p class="text top-left">${this.locationName}</p>
	            <img src="${this.img}" class="rounded mx-auto  card-img-top d-none d-md-block"  alt="imgSuperhero" width = "100%" height ="300em">  
	            <p class=" text-left">Cluster: ${this.adress}</p>
                <p class=" text-left">Homepage:  <a href="${this.homepage}">${this.locationName}</a></p>
                <p class=" text-left">Universe: ${this.universeName}</p> 
                <p class=" text-left">${this.description}</p>
	            </div>`);
	}

}

//abstract because it is only here to give all activeties on my Planet the same Meth and function - Superclass of Restaurant and Events - Subclass of Planet
abstract class DoTo extends Planet{
		constructor(public universeName : string,  public name : string, public description : string, public locationName : string, public adress : string, public img : string, public homepage : string, public telephon :string){
		super(universeName, name, description, locationName, adress, img, homepage);
 	}
	setTelephon(t){
		return this.telephon =t;
	}

	
}

//Subclass of DoTo
class Restaurant extends DoTo{
	constructor(public universeName : string,  public name : string, public description : string, public locationName : string, public adress : string, public img : string, public homepage : string,public telephon : string){
		super(universeName, name, description, locationName, adress, img, homepage, telephon);
	}
		creatAccordionCard(i){
		$("#accordionExample" +i).append(`<div>
                            <div class="card-header cardColor" id="headingUnderB">
                                    <button style="width :100%" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseUnderB${this.name}" aria-expanded="false" aria-controls="collapsetB">
                                        <div class="row"><h5>Restaurant: ${this.locationName}</h5>  
                           
                                    </button>
                            </div>
                            <div id="collapseUnderB${this.name}" class="collapse" aria-labelledby="heading" data-parent="#accordionExample1">
                                <div class="card-body row">
                                    <img style="object-fit:cover" class="card-img col-sm-12 col-md-5 col-lg-5 col-xl-5 d-none d-md-block" src="${this.img}">
                                    <div class = "col-sm-12 col-md-7 col-lg-7 col-xl-7">
                                    <p class=" text-left">Cluster: ${this.adress}</p>
                                    <p class=" text-left">Homepage:  <a href="${this.homepage}">${this.locationName}</a></p>
                                    <p class=" text-left">Tel: ${this.telephon}</p>
                                    <p class=" text-left">Universe: ${this.universeName}</p>
									<p class=" text-left d-none d-md-block">${this.description}</p>

                                    </div>
                                    

                                </div>
                            </div>
                        </div>`);
	}
		creatItem(){
			           // <i class="fa fa-heart like puls " " aria-hidden="true" id ="${"c"+i}" ></i>
		$(".all").append(`<div class="ui-state-default col-sm-12 col-md-6 col-lg-4 col-xl-4 card p-2 grid-sizer panel">
	            <p class="text top-left">${this.locationName}</p>
	            <img src="${this.img}" class="rounded mx-auto  card-img-top d-none d-md-block"  alt="imgSuperhero" width = "100%" height ="300em">  
	               <p class=" text-left">Cluster: ${this.adress}</p>
                   <p class=" text-left">Homepage:  <a href="${this.homepage}">${this.locationName}</a></p>
                   <p class=" text-left">Tel: ${this.telephon}</p>
                   <p class=" text-left">Universe: ${this.universeName}</p>
				   <p class=" text-left d-none d-md-block">${this.description}</p>
	            </div>`);
	}

	
}

//Subclass of DoTo with 2 new parameter date and price
class Events extends DoTo{
	constructor(public universeName : string,  public name : string, public description : string, public locationName : string, public adress : string, public img : string, public homepage : string,public telephon : string, public date : string, public price : number){
		super(universeName, name, description, locationName, adress, img, homepage, telephon);
	}

	setDate(d){
		return this.date =d;
	}
	setPrice(p){
		return this.price =p;
	}
			creatAccordionCard(i){
				console.log(i);

		$("#accordionExample"+i).append(`<div>
                            <div class="card-header cardColor" id="headingUnderC">
                              
                                    <button style="width :100%" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseUnderC${this.name}" aria-expanded="false" aria-controls="collapsetC">
                                        <div class="row"><h5>Event: ${this.locationName}</h5>  
                           
                                    </button>
                            
                            </div>
                            <div id="collapseUnderC${this.name}" class="collapse" aria-labelledby="heading" data-parent="#accordionExample1">
                                <div class="card-body row" id ="nextAccordion${i}">
                                    <img style="object-fit:cover" class="card-img col-sm-12 col-md-5 col-lg-5 col-xl-5  d-none d-md-block" src="${this.img}">
                                    <div class = "col-sm-12 col-md-7 col-lg-7 col-xl-7">
                                    <p class=" text-left">Cluster: ${this.adress}</p>
									<p class=" text-left">Homepage: <a href="${this.homepage}">${this.locationName}</a></p>
                                    <p class=" text-left">Tel: ${this.telephon}</p>
                                    <p class=" text-left">Date: ${this.date}</p>
                                    <p class=" text-left">Price: ${this.price} €</p>
									<p class=" text-left">Universe: ${this.universeName}</p>								
                                    <p class=" text-left d-none d-md-block">${this.description}</p>


                                    </div>

                                </div>
                            </div>
                        </div>`);
	}
	creatItem(){
	         // <i class="fa fa-heart like puls " " aria-hidden="true" id ="${"c"+i}" ></i>
		$(".all").append(`<div class="ui-state-default col-sm-12 col-md-6 col-lg-4 col-xl-4 card p-2 grid-sizer panel">
	            <p class="text top-left">${this.locationName}</p>
	            <img src="${this.img}" class="rounded mx-auto  card-img-top d-none d-md-block" alt="imgSuperhero" width = "100%" height ="300em">  
	                <p class=" text-left">Cluster: ${this.adress}</p>
		            <p class=" text-left">Homepage: <a href="${this.homepage}">${this.locationName}</a></p>                    
                    <p class=" text-left">Tel: ${this.telephon}</p>          
                    <p class=" text-left">Date: ${this.date}</p>
                    <p class=" text-left">Price: ${this.price} €</p>
                    <p class=" text-left">Universe: ${this.universeName}</p>
                    <p class=" text-left d-none d-md-block">${this.description}</p>
	            </div>`);
	}
}

//------------------------------------------Classes for my HTML Space Site--------------------------------------------
//Username comes here
let user = new User("Captian")

//first Universe with all classes


//Hitchiker data ----------
const universe0 = new Universe("The Hitchhiker's Guide to the Galaxy");
//Planet Magrathea
let planet0_0 = new Planet (universe0.universeName, "Magrathea","“Magrathea itself soon became the richest planet of all time”", "Magrathea", "Horsehead Nebula", "./img/marga.jpg","https://hitchhikers.fandom.com/wiki/Magrathea");
let location1_0 = new Locations(universe0.universeName, "MagraL0", "Deep Thought was a supernatural-computer programmed to calculate the answer to the Ultimate Question of Life, the Universe, and Everything. It designed the planet Earth, which was built by the Magratheans.", 
	"Deep Thought", planet0_0.adress, "./img/deep.png", "https://hitchhikers.fandom.com/wiki/Deep_Thought");
let events1_0 = new Events(universe0.universeName, "MagraE0", "“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”", 
	"Next Deep Thought Answer", "Magrathea; 4242, Desert: 42", "./img/42.jpg", "https://hitchhikers.fandom.com/wiki/Deep_Thought", "42", "approximately in 3.5 million years", 0);
let restaurant1_0 = new Restaurant(universe0.universeName, "DesertInn", "“You can´t come in without a Towel“", 
	"Desert Inn", "Magrathea; 4242, Desert: 42", "./img/golga_restaurant3.jpg", "https://hitchhikers.fandom.com/wiki/Deep_Thought", "+042 4242 424 24 242");


//Planet Restaurant Frogstar
let planet0_1 = new Planet(universe0.universeName,"Frogstar World B","Frogstar World B was once a happy, prosperous planet, which was plunged into poverty and despair by a tragic economic phenomenon known as the Shoe Event Horizon, the details of which are as follows: <br> Even though this planet was, indeed, happy and prosperous, it could be said to have had just a little too many shoe shops. Its poor, fashion-crazed and economically ignorant citizens bought these shoes, gradually coming to buy more, and more, and more, until the shoe companies saw and seized their opportunity, and began to build more shoe shops.",
"Frogstar World B" , "Total Perspective Vortex", "./img/frog_Planet.jpg", "https://hitchhikers.fandom.com/wiki/Frogstar_World_B");
let location1_1 = new Locations (universe0.universeName, "FrogE0","Best Farm on this site of the galaxy",
"Frogstar Farm", "Total Perspective Vortex 4242, Frogstreet 42/42", "./img/frog_location.jfif", "http://frogstarfarm.com/blog1/about-frogstar/");
let events1_1 = new Events(universe0.universeName, "FrogE1", "Singing all the night long, come and join us!", "Frogstar Karaoke", 
"Towelstreet 42, Frogsing 42", "./img/frog_event.jpg", "https://www.meetup.com/de-DE/members/8266470/?op=&memberId=8266470" , "+024 4242 424 24 242", "every Frieday", 15);
let restaurant1_1 = new Restaurant(universe0.universeName, "EndoftheUniverse", "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.", 
	"Restaurant at the End of the Universe", "End of the Universe 42, End 42", "./img/frog_restaurant.jpg", "https://hitchhikers.fandom.com/wiki/The_Restaurant_at_the_End_of_the_Universe" , "+024 2424 424 24 242",);


//Planet Golga
let planet0_2 = new Planet (universe0.universeName,"Golgafrincham","Golgafrincham was a planet, once home to the Great Circling Poets of Arium. The descendants of these poets made up tales of impending doom about the planet. The tales varied; some said it was going to crash into the sun, or the moon was going to crash into the planet. Others said the planet was to be invaded by twelve-foot piranha bees and still others said it was in danger of being eaten by an enormous mutant star-goat.",
	"Golgafrincham" , " Golga", "./img/golga_planet.jfif", "https://hitchhikers.fandom.com/wiki/Golgafrincham");
let location1_2 = new Locations(universe0.universeName, "GolgaL0", "“For a moment, nothing happened. Then, after a second or so, nothing continued to happen.”", "Arkship Museum", 
	"Golgafrincham 4224 Golgastreet 42", "./img/golga_ark.jpg", "https://hitchhikers.fandom.com/wiki/Golgafrincham");
let events1_2 = new Events (universe0.universeName, "GolgaE0", "Disaster Area are a plutonium rock band from the Gagrakacka Mind Zones and are generally regarded as not only the loudest rock band in the Galaxy, but also as being the loudest noise of any kind at all.", 
	"Disaster Area", "Golgadown 4242, Gostrett 4", "./img/golga_event.jpg", "https://hitchhikers.fandom.com/wiki/Disaster_Area", "+422 4242 4242", "06.11.2019", 500);
let restaurnat1_2_0 = new Restaurant(universe0.universeName, "ClassA", "Only for A-Class people",  
	"Restaurant Class A", "Golgacity 2424, DownTown 42", "./img/golga_restaurant1.jpg", "https://www.birminghammail.co.uk/whats-on/family-kids-news/massive-space-themed-crazy-golf-15587392",
	"+422 2244 4422 2244");
let restaurnat1_2_1 = new Restaurant(universe0.universeName, "ClassB", "Only for B-Class people", 
	"Restaurant Class B", "Golgacity 2442, DownTown 24", "./img/golga_restaurant2.jpg", "https://www.theyellowsparrow.com/conceptual-restaurants-in-india/",
	"+422 2244 4422 4224");
let restaurnat1_2_2 = new Restaurant(universe0.universeName, "ClassC", "Only for C-Class people", 
	"Restaurant Class C", "Golgacity 4224, DownTown 4", "./img/golga_restaurant3.jpg", "https://www.syfy.com/syfywire/10_incredible_sci_fi_them",
	"+422 2244 4422 4422");


//Universe 1 all Arrays fo my Meth

let planetArr0 =[planet0_0, location1_0, restaurant1_0 , events1_0];
let planetArr1 =[planet0_1, location1_1, restaurant1_1,  events1_1];
let planetArr2 =[planet0_2,location1_2, restaurnat1_2_0, restaurnat1_2_1, restaurnat1_2_2,  events1_2, ];
let universe0Arr =[planetArr0, planetArr1, planetArr2];



// Star Trek ----------
const universe1 = new Universe("Star Trek");

//Planet Vulcan
let planet1_0 = new Planet(universe1.universeName, "Vulcan", "The Vulcans, or Vulcanians, were a warp-capable humanoid species from the planet Vulcan. They were widely renowned for their strict adherence to logic and reason as well as their remarkable stoicism.",
	"Vulcan", "Delta Volanis Cluster", "./img/vulcan_planet.jpg" ,"https://memory-beta.fandom.com/wiki/Delta_Volanis_Cluster");
let location2_0 = new Locations (universe1.universeName, "Vulcan0", "The Vulcan lute (sometimes referred to as Vulcan harp, Vulcan lyre, or Vulcan Lyrette) was a twelve-stringed musical instrument, played on the planet Vulcan, that was tuned on a diatonic scale and noted to be very soothing.",
	"Vulcan lute Museum", "Raal 2554 , DownTown 8", "./img/vulcan_location.jpg" ,"https://memory-alpha.fandom.com/wiki/Vulcan_lute");
let event2_0_0 = new Events(universe1.universeName, "VulcanE0", "Live long and prosper" , "Live long and prosper Tour 2285", "Vulcana Regar 2315, Somestreet 11", "./img/vulcan_event.jpg", "https://tenor.com/view/spock-guitar-rockstar-star-trek-gif-9511597", 
	"+064 4640 4646", "12.12.2285", 100);
let event2_0_1 = new Events (universe1.universeName, "VulcanE1", "Learn Vulcan in 1 Day" , "Vulcan Language Course", "Vulcana Regar 2315, Otherstreet 29", "./img/Vulcan_event1.gif", "https://memory-alpha.fandom.com/wiki/Vulcan_language", 
	"+064 3240 1146", "09.01.2286", 50);
let restaurant2_0 = new Restaurant (universe1.universeName, "VulcanR0", "Vulcan foods and beverages were the typical food and drink consumed by Vulcans.<br> Several Vulcan dishes were served for dinner by the Romulan commander to Spock while he was aboard her flagship in 2268. When asked of the dishes meet his approval, Spock said: I am flattered, Commander. There is no doubt that the cuisine aboard your vessel far surpasses that of the Enterprise. It is indeed a powerful recruiting inducement.", 
	"Vul Donald´s", "ShiKahr District 4647, Spockstreet 2", "./img/vulcan_restaurant.jpg", "https://memory-alpha.fandom.com/wiki/Vulcan_foods_and_beverages", "+889 6546 0444");

//Planet Klingon
let planet1_1 = new Planet(universe1.universeName, "Qo'noS", "The Klingons (tlhIngan in Klingonese) were a humanoid warrior species that originated from the planet Qo'noS (pronounced Kronos), an M-class planet in the Beta Quadrant. One of the major powers of the galaxy, the Klingons were a proud, tradition-bound people who valued honor and combat. The aggressive Klingon culture had made them an interstellar military power to be respected and feared.",
	"Qo'noS,", "Qo'noS system", "./img/kling_planet.jpg" ,"https://memory-alpha.fandom.com/wiki/Qo%27noS");
let location2_1 = new Locations (universe1.universeName, "KlingL0", "The bat'leth, or -sword of honor-, was a traditional Klingon bladed weapon. While Klingons often carried disruptors, they preferred to use bladed weapons in combat, with the two most common ones being the bat'leth and the mek'leth.",
	"Bat'leth Museum", "Ha'r Kling Jaa 4545 , DownTown 1", "./img/kling_location.jpg" ,"https://memory-alpha.fandom.com/de/wiki/Bat%27leth");
let event2_1_0 = new Events(universe1.universeName, "KlingonE0", "Party all night long" , "Klingon drinking songs", "Tong Vey 2315, Somestreet 91", "./img/kling_event.jpg", "https://memory-alpha.fandom.com/wiki/Klingon_drinking_song", 
	"+099 5440 1646", "08.02.2286", 10);
let event2_1_1 = new Events (universe1.universeName, "KlingonE1", "Learn Klingon in 1 Day" , "Klingon Language Course", "Tong Vey 2315, Otherstreet 59", "./img/kling_event1.jpg", "http://klingonska.org/dict/", 
	"+064 3240 1146", "09.01.2286", 40);
let restaurant2_1_0 = new Restaurant (universe1.universeName, "KlingonR0", "Yes. If Klingon food is too strong for you, perhaps we could get one of the females to breast feed you.", 
	"Klingon Cake Factory", "Qam-Chee 1112, Khanstreet 12", "./img/kling_restaurant.jpg", "https://memory-alpha.fandom.com/wiki/Klingon_foods_and_beverages", "+889 6546 0444");
let restaurant2_1_1 = new Restaurant (universe1.universeName, "KlingonR1", "Revenge is a dish best served cold", 
	"Klingon Inn", "Mor'em Cha 1872, Klingstreet 13", "./img/kling_restaurant1.jpg", "https://memory-alpha.fandom.com/wiki/Klingon_foods_and_beverages", "+314 4899 1234");
//Planet Romulus
let planet1_2 = new Planet(universe1.universeName, "Romulus", "Romulus was the inhabited second planet of the Romulan system in Sector Z-6; it was the homeworld of the Romulans and the capital world of the Romulan Star Empire. Romulus was destroyed by the Supernova of 2387.",
	"Romulus,", "Krocton Segment", "./img/romu_planet.jpg" ,"https://memory-alpha.fandom.com/wiki/Romulus");
let location2_2 = new Locations (universe1.universeName, "RomuL0", "Get a Tour throug the Romulan Imperial Senat",
	"Romulan Imperial Senat", "Krocton Segment 1045 , Mainstreet 1", "./img/romu_location.jpg" ,"https://memory-beta.fandom.com/wiki/Imperial_Senate_of_the_Romulan_Star_Empire");
let event2_2 = new Events(universe1.universeName, "RomuE0", "Movienight: The Romulan Way" , "Romulan Gand Cinema", "Krocton Segment 2315, Romstreet 11", "./img/romu_event.jpg", "https://memory-alpha.fandom.com/wiki/The_Romulan_Way", 
	"+081 5588 1676", "06.11.2285", 8);
let restaurant2_2_0 = new Restaurant (universe1.universeName, "RomuR0", "Romulan ale was a highly intoxicating alcoholic beverage of Romulan origin with a characteristic blue color (ranging from a pale sky blue to a dark midnight blue).", 
	"Romulan Ale Distillery Bar", "Krocton Segment 4112, Romulanstreet 82", "./img/romu_restaurant.jpg", "https://memory-alpha.fandom.com/wiki/Romulus", "+889 6546 0444");


let planetArr3 = [planet1_0, location2_0, restaurant2_0, event2_0_0, event2_0_1];
let planetArr4 = [planet1_1, location2_1, restaurant2_1_0, restaurant2_1_1, event2_1_0, event2_1_1];
let planetArr5 = [planet1_2, location2_2, restaurant2_2_0, event2_2];

let universe1Arr = [planetArr3, planetArr4, planetArr5];
//The Expanse ----------under construction
const universe2 = new Universe("The Expanse");

//Planet Earth
let planet2_0 = new Planet(universe2.universeName, "Earth", "Homeplanet",
	"Earth", "Sol-system", "./img/earther_logo.png" ,"https://memory-beta.fandom.com/wiki/Delta_Volanis_Cluster");
//Planet Mars
let planet2_1 = new Planet(universe2.universeName, "Mars", "Mars Colonie",
	"Marth", "Sol-system", "./img/expans_logo3.jpg" ,"https://memory-beta.fandom.com/wiki/Delta_Volanis_Cluster");
//Belter
let planet2_2 = new Planet(universe2.universeName, "Belter", "Space",
	"Belter", "Sol-system", "./img/belter_logo.png" ,"https://memory-beta.fandom.com/wiki/Delta_Volanis_Cluster");


let planetArr6 = [planet2_0, location2_0, restaurant2_0, event2_0_0, event2_0_1];
let planetArr7 = [planet2_1, location2_1, restaurant2_1_0, restaurant2_1_1, event2_1_0, event2_1_1];
let planetArr8 = [planet2_2, location2_2, restaurant2_2_0, event2_2];

let universe2Arr = [planetArr6, planetArr7, planetArr8];

//Planet
let universeNames=[universe0, universe1, universe2];
let allPlanetArr =[universe0Arr, universe1Arr, universe2Arr];



//------------------------------------------Start with createing my HTML----------------------------------------------
 

$(document).ready(function() { 


//Create groundstructor of my HTML
function createHTML(){
	$(".container").append(` <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" id = "home" href="#">Home</a>
                        <a class="nav-item nav-link" id ="all" href="#">Space</a>
                        <a class="nav-item nav-link" id ="newLocation" href="#">Add Locations</a>

                    </div>
                </div>
            </nav>
           
            <br>
            <h1 id=title> Space<br>Travel </h1>
            <h3 style="color:lightgreen">${user.user} online</h3>
            <hr>
            <content class="cont">
            </content>
        </header><!-- /header -->
        <main>
            <content class="cont0">
            </content>
             <div class="typewriter">
            <content class="cont1">
            </content></div>
        </main>
        <footer class="page-footer font-small blue">

  		<div class="text-center py-3" >
   		<p style: "color: blue">© 2019 Copyright: Philipp<p>
  		</div>
		</footer>`);
	yx();

}

//------------------------------------------HTML Elemtents that Change with going through the Page----------------------------------------------

//Create Buttons for home and Space
function threeButtons(){
	$(".cont").append(`   <div class="btn-group btn-group-toggle" data-toggle="buttons" id=universe>
                <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked> Hitchhiker’s Guide
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option2" autocomplete="off"> Star Trek
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option3" autocomplete="off"> The Expanse
                </label>
            </div>`);
	xy();
}

//Create Carosel for the 3 Universes
//Create Carosel for Hitchhiker’s
function creatCarosel1(){
            $(".cont0").append(`<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
                        <img class="d-block w-100" src="./img/universe_logo.jpg" alt="First slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h3>The Hitchhiker’s Guide to the Galaxy</h3>
                            <p>“Don't panic and don't forget your towel”</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./img/marga.jpg" alt="Second slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Magrathea</h1>
                            <p>“Magrathea itself soon became the richest planet of all time”</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./img/frog_Planet.jpg" alt="Third slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Frog Star</h3>
                            <p>“Frogstar World B was once a happy, prosperous planet”</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./img/golga_planet.jfif" alt="Third slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Golgafrincham</h3>
                            <p>“Golgafrincham was a planet, once home to the Great Circling Poets of Arium”</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>`);   
};
//Create Carosel for Star Trek
function creatCarosel2(){
            $(".cont0").append(`<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
                        <img class="d-block w-100" src="./img/starTrek_logo1.png" alt="First slide">

                        <div class="carousel-caption d-none d-md-block">
                            <h3>Star Trek</h3>
                            <p>“Live long and prosper”</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./img/vulcan_planet.jpg" alt="Third slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Vulcan</h1>
                            <p>“The Vulcans, or Vulcanians, were a warp-capable humanoid species from the planet Vulcan“</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 " src="./img/kling_planet.jpg" alt="Second slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Qo'noS</h3>
                            <p>“Revenge is a dish best served cold”</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 " src="./img/romu_planet.jpg" alt="Fourth slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Romulus</h3>
                            <p>“Romulus was the inhabited second planet of the Romulan system in Sector Z-6”</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <!--made a button insted of a-->
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>`);   
}


//Create alle Planets form one Array and add them to the Accordion
function creatPlanets(arr){
$(".cont1").append(`<div class="accordion-inner"><div class="accordion" id="accordionExample"></div></div>`);

for (let i = 0; i<arr.length;i++){
             let planet = arr[i];
             planet[0].creatAccordionCard(i);
};
}
//Create all Locations for from my planets and place them as a Accordion into my planets
function creatLocations(arr){
	

	for (let i = 0; i<arr.length;i++){
		     let planet = arr[i];
		     console.log(planet);
			$("#card-body"+ i).append(`<div class="accordion col-12" id="accordionExample${i}"></div>`);
             for(let j = 1;j<planet.length;j++){
             	let location = planet[j];

             location.creatAccordionCard(i);
         }
	};
}
//creat All my locations in Grid --loop throug universe - than loop throw my planet - here we loop throw my Locations/Restaurant and Events
function creatAllLocations(){
	$(".cont1").html("");
	$(".cont0").html("");
	$(".cont1").append(`<div class ="row all"></div>`)
	for (let i = 0; i<allPlanetArr.length;i++){
		let universe =allPlanetArr[i]; 
		$(".all").append(`<h2 class ="col-12">${universeNames[i].universeName}</h2>`);

		for (let j = 0; j<universe.length;j++){
			let planet = universe[j];

			for(let k = 0; k<planet.length;k++){
				planet[k].creatItem();
			}
			}
			
	    }xy();
 

}
//fill HTML with all planets and Locations by Clicking navbarr Hole Space
function yx(){
$(".collapse").on('click', '#all', function () {
	       	$(".cont").html("");

	       creatAllLocations();
	    });

//fill Main
$(".collapse").on('click', '#home', function () {
	$(".cont1").html("");
	$(".cont0").html("");
	$(".cont").html("");
	threeButtons();
	creatCarosel1();
	creatPlanets(universe0Arr);
	creatLocations(universe0Arr);
	    });


//should be created by loop in futur!!
$(".collapse").on('click', '#newLocation', function () {
	$(".cont1").html("");
	$(".cont0").html("");
	$(".cont").html("");
	getDropDown(universeNames);
	$(".cont").append(`<div class="row">
            <div class="col-4">
                <h4>Planet/Location</h4>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                    </div>
                    <input type="text" class="form-control" id= "plan1" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm ">Discription</span>
                    </div>
                    <input type="text" class="form-control"  id= "plan2"  aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Location/Planet Name</span>
                    </div>
                    <input type="text" class="form-control" id= "plan3"  aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Cluster</span>
                    </div>
                    <input type="text" class="form-control"  id= "plan4" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Image Source</span>
                    </div>
                    <input type="text" class="form-control" id= "plan5" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="<inputGroup-sizing-sm></inputGroup-sizing-sm>">Homepage</span>
                    </div>
                    <input type="text" class="form-control" id= "plan6" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <button type="button" id ="newPlanet">New Planet</button>
                <button type="button" id ="newLocation">New Location</button>

            </div>
          <div class="col-4">
            <h4>Restaurant</h4>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                    </div>
                    <input type="text" class="form-control" id ="plan7" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Discription</span>
                    </div>
                    <input type="text" class="form-control" id ="plan8" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Restaurant Name</span>
                    </div>
                    <input type="text" class="form-control" id ="plan9" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Cluster</span>
                    </div>
                    <input type="text" class="form-control" id ="plan10" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Image Source</span>
                    </div>
                    <input type="text" class="form-control" id ="plan11" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Homepage</span>
                    </div>
                    <input type="text" class="form-control" id ="plan12" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Telephon</span>
                    </div>
                    <input type="text" class="form-control" id ="plan13" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                                <button type="button" id ="newRestaurant">New Restaurant</button>


            </div>
            <div class="col-4">
                <h4>Event</h4>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                    </div>
                    <input type="text" class="form-control" id ="plan14" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Discription</span>
                    </div>
                    <input type="text" class="form-control" id ="plan15" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Event</span>
                    <input type="text" class="form-control" id ="plan16" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Cluster</span>
                    </div>
                    <input type="text" class="form-control" id ="plan17" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Image Source</span>
                    </div>
                    <input type="text" class="form-control" id ="plan18" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Homepage</span>
                    </div>
                    <input type="text" class="form-control" id ="plan19" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Telephon</span>
                    </div>
                    <input type="text" class="form-control" id ="plan20" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Date</span>
                    </div>
                    <input type="text" class="form-control" id ="plan21" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Price</span>
                    </div>
                    <input type="number" class="form-control"id ="plan22" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                </div>
                 <button type="button" id ="newEvent">New Event</button>

            </div>
        </div>`);
 });
creatNew();
}

function getDropDown(arr){
	$(".cont").append(`<select class="mdb-select md-form dropd" searchable="Search here..">
  <option value="" disabled selected>Choose your country</option>

</select> 
`)
	for(let i  =0;i<arr.length;i++){
			
    $(".dropd").append(`<option value="${i}">${arr[i].universeName}</option>`);

	
	}
}
//add new Planet, Location - Event and Restaurant need to be done
function creatNew(){
$(".cont").on('click', '#newPlanet', function () {
		for(let i  =0;i<allPlanetArr.length;i++){
			
				var selectedText = $(".dropd").find("option:selected").text();
				if (selectedText == allPlanetArr[i][0][0].universeName){
					let plan1 = "" +$("#plan1").val();
					console.log(plan1);
					let plan2 = "" +$("#plan2").val();
					let plan3 = ""+$("#plan3").val();
					let plan4 = ""+$("#plan4").val();
					let plan5 = ""+ $("#plan5").val();
					let plan6 = ""+ $("#plan6").val();
					let planetArr42 = new Array()
					let plan = new Planet(selectedText, plan1, plan2, plan3, plan4, plan5, plan6);
					planetArr42.push(plan);

					allPlanetArr[i].push(planetArr42);
				}
			
    	}
	});
$(".cont").on('click', '#newLocation', function () {
	for(let i  =0;i<allPlanetArr.length;i++){
			
				var selectedText = $(".dropd").find("option:selected").text();
				if (selectedText == allPlanetArr[i][0][0].universeName){
					for (let j = 0; j<allPlanetArr[i].length; j++){					
						let plan1 = $("#plan1").val();
						if (plan1 == allPlanetArr[i][j][0].name){
						let plan2 = "" +$("#plan2").val();
						let plan3 = ""+ $("#plan3").val();
						let plan4 = ""+ $("#plan4").val();
						let plan5 = ""+ $("#plan5").val();
						let plan6 = ""+ $("#plan6").val();
						let loca = new Locations(selectedText, allPlanetArr[i][j][0].name, plan2, plan3, plan4, plan5, plan6);
						console.log(loca);

						allPlanetArr[i][j].push(loca);					console.log(allPlanetArr[i][0]);
						}
					}
				}
    		}
	    });
$(".cont").on('click', '#newRestaurant', function () {
		for(let i  =0;i<allPlanetArr.length;i++){
			
				var selectedText = $(".dropd").find("option:selected").text();
				if (selectedText == allPlanetArr[i][0][0].universeName){
					for (let j = 0; j<allPlanetArr[i].length; j++){					
						let plan1 = $("#plan7").val();
						if (plan1 == allPlanetArr[i][j][0].name){

						let plan1 = "" +$("#plan7").val();
						console.log(plan1);

						let plan2 = "" +$("#plan8").val();
						let plan3 = ""+ $("#plan9").val();
						let plan4 = ""+ $("#plan10").val();
						let plan5 = ""+ $("#plan11").val();
						let plan6 = ""+ $("#plan12").val();
						let plan7 = ""+ $("#plan13").val();
						let loca = new Restaurant(selectedText, allPlanetArr[i][j][0].name, plan2, plan3, plan4, plan5, plan6, plan7);

						allPlanetArr[i][j].push(loca);					
						}
					}
				}
    		}
	    });
$(".cont").on('click', '#newEvent', function () {
	for(let i  =0;i<allPlanetArr.length;i++){
			
				var selectedText = $(".dropd").find("option:selected").text();
				if (selectedText == allPlanetArr[i][0][0].universeName){
					for (let j = 0; j<allPlanetArr[i].length; j++){					
						let plan1 = $("#plan14").val();
						if (plan1 == allPlanetArr[i][j][0].name){

						
						let plan2 = "" +$("#plan15").val();
						let plan3 = ""+ $("#plan16").val();
						let plan4 = ""+ $("#plan17").val();
						let plan5 = ""+ $("#plan18").val();
						let plan6 = ""+ $("#plan19").val();
						let plan7 = ""+ $("#plan20").val();
						let plan8 = ""+ $("#plan21").val();

						let plan9 = Number($("#plan22").val());

						let loca = new Events(selectedText, allPlanetArr[i][j][0].name, plan2, plan3, plan4, plan5, plan6, plan7, plan8, plan9);

						allPlanetArr[i][j].push(loca);					
						}
					}
				}
    		}
	
	    });
}
//------------------------------------------Some Function for my HTML ------------------------------------------------

//change the universe first Hitchhiker’s Second Star Trek
function xy(){
$("input[id='option1']").change(function(){
	$(".cont1").html("");
	$(".cont0").html("");

	creatCarosel1();
	creatPlanets(universe0Arr);
	creatLocations(universe0Arr);
});

$("input[id='option2']").change(function(){
	$(".cont1").html("");
	$(".cont0").html("");
	creatCarosel2();
	creatPlanets(universe1Arr);
	creatLocations(universe1Arr);
});
$("input[id='option3']").change(function(){
	$(".cont1").html("");
	$(".cont0").html("");
	creatCarosel2();
	creatPlanets(universe2Arr);
	creatLocations(universe2Arr);
});
}
// Check into my Travelblock Questions
$("input[id='no']").change(function(){
	$(".typewriter").append(`<h1 id="welcome" sysle="color: white, text-center">Oh :( So than</h1>
		           <h1 id="showMe">"Live long and prosper"</h1>

           <div class="btn-group btn-group-toggle" id ="showMe1" data-toggle="buttons" id=universe>
                <label class="btn btn-secondary active">
                    <input type="radio" name="yesno" id="yes" autocomplete="off"> No, I want to join now, I have overthought it!
                </label></div>
                `);
	console.log("Hallo");
	ok();
});
function ok(){
$("input[id='yes']").change(function(){
	$(".typewriter").append(`<h1 id="welcome" sysle="color: white, text-center">Awsome, please give us your name <br> Traveler</h1>
               <div class="input-group mb-3">
  				<input type="text" id = "user" class="form-control" placeholder="Traveler" aria-label="Recipient's username" aria-describedby="basic-addon2">
  				<div class="input-group-append" id="showMe">
				<div class="btn-group btn-group-toggle" id ="showMe1" data-toggle="buttons" id=universe>
                <label class="btn btn-secondary active">
                <input type="radio" name="yesno1" id="yes1" autocomplete="off">Join
                </label></div>
  				</div>
                
                    
                `);
	console.log("Hallo");
	start1();
});
}

function start1(){
$("input[id='yes1']").change(function(){
	user.setUser($("#user").val());
	let userName = $("#user").val(); 
	$(".typewriter").append(`<h1 id="welcome" sysle="color: white, text-center">Welcome on Board ${user.user}</h1>
		           <h1 id="showMe">Time for you to get your Traveldata package</h1>
		           <h1 id="showMe2">Plan your Rout through the universe and most important
		           <br>Don´t Panic!</h1>
		           <div class="btn-group btn-group-toggle" id ="showMe2" data-toggle="buttons" id=universe>
                	<label class="btn btn-secondary active">
                    <input type="radio" name="yesno3" id="yes3" autocomplete="off">Get Traveldata
                	</label></div>
  					`);start2();

});
}
//show content
function start2(){
$("input[id='yes3']").change(function(){
		console.log("Hallo");

$(".container").html("");

yx();
createHTML();
xy();
threeButtons();
creatCarosel1();
creatPlanets(universe0Arr);
creatLocations(universe0Arr);
});
}

ok();

//start up everythin Greatings


//start up


  
});(jQuery);



