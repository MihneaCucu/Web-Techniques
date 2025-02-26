window.onload = function()
{let text ='<cinemateca><film category="biografie"><titlu lang="en">Oppenheimer</titlu><regizor>Cristopher Nolan</regizor><an>2023</an><scenarist>Cristopher Nolan</scenarist><producatori>Cristopher Nolan, Emma Thomas</producatori><actori>Cillian Murphy, Emily Blunt</actori><scor>93%</scor></film><film category="Sci-Fi"><titlu lang="en">Dune: Part Two</titlu><regizor>Denis Villeneuve</regizor><an>2024</an><scenarist>Denis Villeneuve</scenarist><producatori>Denis Villeneuve, Zendaya</producatori><actori>Timothee Chalamet, Zendaya</actori><scor>92%</scor></film></cinemateca>';
let parser = new DOMParser();
var xmlDoc = parser.parseFromString(text,"text/xml"); 
var lista = document.createElement("ul");
document.getElementById("filme").appendChild(lista);
var filme = xmlDoc.getElementsByTagName("film");
var film = filme[0];
var atribute = film.
for (var i = 0; i < atribute.length; i++)
{
	film = filme[i];
	let li = document.createElement("li");
	li.innerHTML =  
	document.getElementByTagName("ul")[0].appendChild(li);
}
var div = document.getElementById("filme");
div.appendChild(lista);
}