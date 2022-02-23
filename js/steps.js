

console.log("test 1...2...1...2");


base.profil={
    name:"Hercule",
    job:"Demi-dieu",
    age: 35,
    department: 75,
    arm: 60.5 ,
    inRelationship: true
};


base.friends=[
    "Jupiter", "Junon", "Alcmène","Déjanire"
];


const headerBanner=document.getElementById("header-banner");
const title = document.createElement('h1');
title.classList.add('banner__title');
title.innerHTML = '<h1>Vous consultez le profil de Hercule</h1>';
headerBanner.appendChild(title);


    for (let i=0; i< 12; i++){
      base.displayWork(i);
   };


  let hour=base.getHour();
   if (hour > 8 && hour< 20 ){
       const availability=document.getElementById("availability");
       availability.innerHTML = '<p> disponible</p>';
   }
   else{
    availability.classList.add('off');   
    availability.innerHTML = '<p>Non disponible</p>';
   };


   let pseudo=function(){
    return base.profil.name + "-du-" + base.profil.department;
  };
  let phrase = pseudo();
  let profilName=document.getElementById("profil-name");
  profilName.innerHTML = phrase;


  const menuToggler = document.getElementById("menu-toggler");
// const headerBanner=document.getElementsByClassName("header-banner");
const toggleClass = function() {
    headerBanner.classList.toggle('banner--open');
};
menuToggler.addEventListener('click', toggleClass);


const contact = document.getElementById("contact");
const handler = function(event) {
   event.preventDefault();
   alert("Hercule ne souhaite pas être dérangé")
};
contact.addEventListener('submit', handler);



const valeurHercule=Math.round(base.vote.hercule / (base.vote.hercule + base.vote.cesar) * 100);
console.log(valeurHercule);
const trendsHercule=document.getElementById("trends-hercule");
const herculePopularity=document.getElementsByClassName("people__popularity");
herculePopularity.innerHTML = valeurHercule;

const valeurCesar=Math.round(base.vote.cesar/ (base.vote.hercule + base.vote.cesar) * 100);
console.log(valeurCesar);
const trendsCesar=document.getElementById("trends-cesar");
const cesarPopularity=document.getElementsByClassName("people__popularity");
cesarPopularity.innerHTML = valeurCesar;



document.addEventListener('DOMContentLoaded', base.fillProfil(base.profil),base.printFriends(base.friends),base.setBestFriend(base.friends[0]));



