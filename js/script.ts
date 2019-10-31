
//------------------------------------------Creat all my Classes--------------------------------------------------------------


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
		$("#accordionExample").append(`<div class="card">
                            <div class="card-header" id="heading">
                                <h2 class="mb-0">
                                    <button style="width :100%" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapset">
                                        <div class="row"><h3 class="col-6 text-left offset-1">${this.name}</h3>  
                           
                                    </button>
                                </h2>
                            </div>
                            <div id="collapse${i}" class="collapse" aria-labelledby="heading" data-parent="#accordionExample">
                                <div class="card-body row" id="card-body${i}">
                                    <img style="object-fit:cover" class="card-img col-4 offset-1" src="${this.img}">
                                    <div class = "col-7">
                                    <p class=" text-left">Cluster: ${this.adress}</p>
                                    <p class=" text-left">Homepage: ${this.homepage}</p>
                                    <p class=" text-left">Universe: ${this.universeName}</p> 
                                    </div>
                                    <p class="col-11 offset-1 text-left">${this.description}</p>

                                </div>
                            </div>
                        </div>`);
	}
}

//Subclass of Planet - has all my meth and now we can creat a new Location on the Planet without writing to mutch - awsome!
class Locations extends Planet{
	constructor(public universeName : string, public name : string, public description : string, public locationName : string, public adress : string, public img : string, public homepage : string){
		super(universeName, name, description, locationName, adress, img, homepage);
	}
	creatAccordionCard(i){
		$("#accordionExample" +i).append(`<div class="card">
                            <div class="card-header" id="headingunderA">
                                <h2 class="mb-0">
                                    <button style="width :100%" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseUnderA${i}" aria-expanded="false" aria-controls="collapsetA">
                                        <div class="row"><h3 class="col-6 text-left offset-1">${this.locationName}</h3>  
                           
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseUnderA${i}" class="collapse" aria-labelledby="heading" data-parent="#accordionExample1">
                                <div class="card-body row">
                                    <img style="object-fit:cover" class="card-img col-4 offset-1" src="${this.img}">
                                    <div class = "col-7">
                                    <p class=" text-left">Cluster: ${this.adress}</p>
                                    <p class=" text-left">Homepage: ${this.homepage}</p>
                                    <p class=" text-left">Universe: ${this.universeName}</p>


                                    </div>
                                    <p class="col-11 offset-1 text-left">${this.description}</p>

                                </div>
                            </div>
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
		$("#accordionExample" +i).append(`<div class="card">
                            <div class="card-header" id="headingUnderB">
                                <h2 class="mb-0">
                                    <button style="width :100%" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseUnderB${i}" aria-expanded="false" aria-controls="collapsetB">
                                        <div class="row"><h3 class="col-6 text-left offset-1">${this.locationName}</h3>  
                           
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseUnderB${i}" class="collapse" aria-labelledby="heading" data-parent="#accordionExample1">
                                <div class="card-body row">
                                    <img style="object-fit:cover" class="card-img col-4 offset-1" src="${this.img}">
                                    <div class = "col-7">
                                    <p class=" text-left">Cluster: ${this.adress}</p>
                                    <p class=" text-left">Homepage: ${this.homepage}</p>
                                    <p class=" text-left">Universe: ${this.telephon}</p>
                                    <p class=" text-left">Universe: ${this.universeName}</p>


                                    </div>
                                    <p class="col-11 offset-1 text-left">${this.description}</p>

                                </div>
                            </div>
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

		$("#accordionExample"+i).append(`<div class="card">
                            <div class="card-header" id="headingUnderC">
                                <h2 class="mb-0">
                                    <button style="width :100%" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseUnderC${i}" aria-expanded="false" aria-controls="collapsetC">
                                        <div class="row"><h3 class="col-6 text-left offset-1">${this.locationName}</h3>  
                           
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseUnderC${i}" class="collapse" aria-labelledby="heading" data-parent="#accordionExample1">
                                <div class="card-body row" id ="nextAccordion${i}">
                                    <img style="object-fit:cover" class="card-img col-4 offset-1" src="${this.img}">
                                    <div class = "col-7">
                                    <p class=" text-left">Cluster: ${this.adress}</p>
                                    <p class=" text-left">Homepage: ${this.homepage}</p>
                                    <p class=" text-left">Universe: ${this.telephon}</p>
                                    <p class=" text-left">Universe: ${this.universeName}</p>


                                    </div>
                                    <p class="col-11 offset-1 text-left">${this.description}</p>

                                </div>
                            </div>
                        </div>`);
	}
}

//------------------------------------------Classes for my HTML Space Site--------------------------------------------
//first Universe with all classes


//Hitchiker data ----------
const universe1 = new Universe("The Hitchhiker's Guide to the Galaxy");
//Planet Magrathea
let planet0 = new Planet (universe1.universeName, "Magrathea","“Magrathea itself soon became the richest planet of all time”", "Magrathea", "Horsehead Nebula", "./img/marga.jpg","https://hitchhikers.fandom.com/wiki/Magrathea");
let location1_0 = new Locations(universe1.universeName, planet0.name, "Deep Thought was a supernatural-computer programmed to calculate the answer to the Ultimate Question of Life, the Universe, and Everything. It designed the planet Earth, which was built by the Magratheans.", 
	"Deep Thought", planet0.adress, "./img/deep.png", "https://hitchhikers.fandom.com/wiki/Deep_Thought");
let events1_0 = new Events(universe1.universeName, planet0.name, "“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”", 
	"Next Deep Thought Answer", "Magrathea; 4242, Desert: 42", "./img/42.jpg", "https://hitchhikers.fandom.com/wiki/Deep_Thought", "42", "approximately in 3.5 million years", 0);
let Restaurant1_0 = new Restaurant(universe1.universeName, planet0.name, "You can´t come in without a Towel", 
	"Desert Inn", "Magrathea; 4242, Desert: 42", "./img/golga_restaurant3.jpg", "https://hitchhikers.fandom.com/wiki/Deep_Thought", "+042 4242 424 24 242");
console.log(Restaurant1_0);


//Planet Restaurant Frogstar
let planet1 = new Planet(universe1.universeName,"Frogstar World B","Frogstar World B was once a happy, prosperous planet, which was plunged into poverty and despair by a tragic economic phenomenon known as the Shoe Event Horizon, the details of which are as follows: <br> Even though this planet was, indeed, happy and prosperous, it could be said to have had just a little too many shoe shops. Its poor, fashion-crazed and economically ignorant citizens bought these shoes, gradually coming to buy more, and more, and more, until the shoe companies saw and seized their opportunity, and began to build more shoe shops.",
"Frogstar World B" , "Total Perspective Vortex", "./img/frog_Planet.jpg", "https://hitchhikers.fandom.com/wiki/Frogstar_World_B");
let location1_1 = new Locations (universe1.universeName, planet1.name,"Best Farm on this site of the galaxy",
"Frogstar Farm", "Total Perspective Vortex 4242, Frogstreet 42/42", "./img/frog_location.jfif", "http://frogstarfarm.com/blog1/about-frogstar/");
let events1_1 = new Events(universe1.universeName, planet1.name, "Singing all the night long, come and join us!", "Frogstar Karaoke", 
"Towelstreet 42, Frogsing 42", "./img/frog_event.jpg", "https://www.meetup.com/de-DE/members/8266470/?op=&memberId=8266470" , "+024 4242 424 24 242", "every Frieday", 15);
let Restaurant1_1 = new Restaurant(universe1.universeName, planet1.name, "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.", 
	"Restaurant at the End of the Universe", "End of the Universe 42, End 42", "./img/frog_restaurant.jpg", "https://hitchhikers.fandom.com/wiki/The_Restaurant_at_the_End_of_the_Universe" , "+024 2424 424 24 242",);


//Planet Golga
let planet2 = new Planet (universe1.universeName,"Golgafrincham","Golgafrincham was a planet, once home to the Great Circling Poets of Arium. The descendants of these poets made up tales of impending doom about the planet. The tales varied; some said it was going to crash into the sun, or the moon was going to crash into the planet. Others said the planet was to be invaded by twelve-foot piranha bees and still others said it was in danger of being eaten by an enormous mutant star-goat.",
	"Golgafrincham" , " Golga", "./img/golga_planet.jfif", "https://hitchhikers.fandom.com/wiki/Golgafrincham");
let location1_2 = new Locations(universe1.universeName, planet2.name, "“For a moment, nothing happened. Then, after a second or so, nothing continued to happen.”", "Arkship Museum", 
	"Golgafrincham 4224 Golgastreet 42", "./img/golga_ark.jpg", "https://hitchhikers.fandom.com/wiki/Golgafrincham");
let events1_2 = new Events (universe1.universeName, planet2.name, "Disaster Area are a plutonium rock band from the Gagrakacka Mind Zones and are generally regarded as not only the loudest rock band in the Galaxy, but also as being the loudest noise of any kind at all.", 
	"Disaster Area", "Golgadown 4242, Gostrett 4", "./img/golga_event1", "https://hitchhikers.fandom.com/wiki/Disaster_Area", "+422 4242 4242", "06.11.2019", 500);
let Restaurnat1_2_0 = new Restaurant(universe1.universeName, planet2.name, "“Time is an illusion. Lunchtime doubly so.”", 
	"Restaurant Class A", "Golgacity 2424, DownTown 42", "./img/golga_restaurant1.jpg", "https://www.birminghammail.co.uk/whats-on/family-kids-news/massive-space-themed-crazy-golf-15587392",
	"+422 2244 4422 2244");
let Restaurnat1_2_1 = new Restaurant(universe1.universeName, planet2.name, "“Time is an illusion. Lunchtime doubly so.”", 
	"Restaurant Class B", "Golgacity 2442, DownTown 24", "./img/golga_restaurant2.jpg", "https://www.theyellowsparrow.com/conceptual-restaurants-in-india/",
	"+422 2244 4422 4224");
let Restaurnat1_2_2 = new Restaurant(universe1.universeName, planet2.name, "“Time is an illusion. Lunchtime doubly so.”", 
	"Restaurant Class C", "Golgacity 4224, DownTown 4", "./img/golga_restaurant3.jpg", "https://www.syfy.com/syfywire/10_incredible_sci_fi_them",
	"+422 2244 4422 4422");


//Universe 1 all Arrays fo my Meth

let planetArr0 =[planet0 ,location1_0, events1_0, Restaurant1_0];
let planetArr1 =[planet1, location1_1, events1_1, Restaurant1_1];
let planetArr2 =[planet2, location1_2, events1_2, Restaurnat1_2_0, Restaurnat1_2_1, Restaurnat1_2_2];


let universe1Arr =[planetArr0, planetArr1, planetArr2];



// Star Trek ----------

//Planet


//The Expanse ----------

//Planet Earth

//Planet Mars

//Belter


//Star Wars

//Planet


//------------------------------------------Start with createing my HTML----------------------------------------------
 

 $(document).ready(function() {

function creatPlanets(arr){
$(".cont1").append(`<div class="accordion-inner"><div class="accordion" id="accordionExample"></div></div>`);

for (let i = 0; i<arr.length;i++){
             let planet = arr[i];
             planet[0].creatAccordionCard(i);
};
}
function creatLocations(arr){
	

	for (let i = 0; i<arr.length;i++){
		     let planet = arr[i];
		     console.log(planet);
			$("#card-body"+ i).append(`<div class="accordion col-12" id="accordionExample${i}"></div>`);
             for(let j = 1;j<planet.length;j++){
             	let location = planet[j];
             	console.log(location);

             location.creatAccordionCard(i);
         }
	};
}

creatPlanets(universe1Arr);
creatLocations(universe1Arr);
//------------------------------------------Some Function for my HTML ------------------------------------------------


// //background img form CodePen by  Marc Newport name Space travel
// //change postion ratio, size, and some other important things so that the background nice to look in a container 
    
//     // Build the structure outside of the DOM
//     var $layerWrap = $('.container').attr('id', 'layers'),
//         layers = 5,
//         $layer,
//         stars,
//         $star;
    
//     while (layers) {
//       $layer = $('<div/>').addClass('layer layer-'+ layers);
//       stars = 30;
      
//       // Stick a bunch of svg stars on each layer
//       while (stars) {
//         $star = $('<span/>').addClass('star');
//         //TODO : would it be more efficient to xlink it?
//         $star.html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M10.744,5.372C7.777,5.372,5.372,2.967,5.372,0c0,2.967-2.405,5.372-5.372,5.372c2.967,0,5.372,2.405,5.372,5.372 C5.372,7.777,7.777,5.372,10.744,5.372z"/></svg>');
        
//         // Randomise the position, size, and opacity (colour defined in CSS)
//         $star.css({
//           left: randomInt(1, 100) +'%',
//           top: randomInt(1, 100) +'%',
//           transform: 'scale('+ randomNum(0, 1) +')',
//           opacity: randomNum(0.6, 1)
//         });
        
//         $layer.append($star);
//         stars--;
//       }
//       $layerWrap.prepend($layer);
//       layers--;
//     }
    
//     $('.container').append($layerWrap);

  
  
  
//   /**
//    * Returns random integer
//    */
//   function randomInt(min, max) {
//     return Math.floor((Math.random() * max) + min);
//   }
  
  
  
//   /**
//    * Returns random number
//    */
  // function randomNum(min, max) {
  //   return Math.max((Math.random() * max), min).toFixed(1);
  // }
      $('.carousel').carousel({
     interval: false
});
  
  });(jQuery);



