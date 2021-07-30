var value = 0;
var String1 = "Even if there are solutions that degrade microplastics, we should not continue to produce microplastics indiscriminately. On the one hand, it will always be more costly to try to solve the problem than to avoid it. On the other hand, as with any type of pollution, there is a favor for organisms that use pollution as a resource. In natural ecosystems, this type of situation tends to cause an imbalance that affects the functioning of ecosystems.";
var String2 = 'Microplastics are plastic particles smaller than 5mm in size. They may have a more spherical shape or a longer shape, such as a fiber. When plastic particles are very, very small - less than 100 nanometers - the term "nanoplastics" is used to designate them.'
var String3 = 'Cases of plastic-related marine animal deaths have been increasing dramatically in recent years. Sea animals ingest plastic particles, which leads to digestive tract problems and a false sense of satiety that can cause death. Moreover, when ingested by marine animals, microplastics enter the food chain, eventually reaching humans.';
var String4 = 'Every year about 13 million tons of plastic end up in the oceans. Plastic bags, bottles or plastic packaging, fishing nets, toys, balloons, cotton swabs, thrown out incorrectly, eventually reach the sea where they degrade into smaller and smaller pieces of plastic - such secondary microplastics.';
var String5 = 'While about 86% of global plastic waste originates from the great rivers of Asia, alarming levels of microplastics have already been identified in some rivers in Europe. In Tame, Manchester, UK, 1000 plastic particles were found per liter of water. Also on the island of Madeira were found rocks with plastic crust. There is evidence that the crust will have formed - and will continue to form - due to the shock of the plastic particles to the rocks through the waves.';
var String6 = "In Portugal, a team of researchers from the University of Aveiro is working on new pathways of microplastic biodegradation. This team found that the fungus Zalerion maritimum, a naturally occurring marine organism in Portugal's coastal waters, is capable of degrading polyethylene microparticles."
var String7 = "Primary Microplastics: These are those that are intentionally produced to be part of the composition of certain products. Exfoliating Cosmetics, Whitening Toothpastes & Cleaning Products. Secondary Microplastics: These are those that result from the wear and degradation of larger objects. The sun, water, heat and some living organisms erode the objects such as plastic bottles, car tires, etc.";
var String8 = "It is a fact that microplastics contain chemical additives that can bind (like a magnet) to organic pollutants, metals, pathogens, which then transport them to wildlife, flora ... to you.";
var String9 = "Research on microplastics is relatively recent, and studies conducted so far do not allow us to understand the lifetime of microplastics. They are known to degrade into smaller and smaller particles, and it is not yet known whether at some point they completely degrade. Either way, you get the idea: a plastic bag can take decades to decompose ... and a plastic bottle will take centuries to millennia …";
var String10 = "Microplastics reach the ocean as a result of human use of polymers and have many negative consequences on the marine ecosystem.";
var factos = [String1, String2, String3, String4, String5, String6, String7, String8, String9, String10];

var timerProgress = setInterval (function() {
document.getElementById('progress').value=value;
value++;

if(document.getElementById('progress').value == 100) {
	window.location.replace("mundo3nivel2.html");
}
},150);

var facto = Math.floor(Math.random()*9);

var str = factos[facto].split("");
var el = document.getElementById('fact');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 10);
})();

//document.getElementById('fact').innerHTML += el;


