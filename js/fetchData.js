"use strict;"

function fetchData(){

	var paperList = [];

	//read raw data from json
	$.getJSON( "examples.json", function( data ) {
  		$.each( data, function( key, val ) {
    		
			var papers = val;
			paperList = [];
			$.each(papers, function(paperkey, paperval) {
				//console.log(paperval);
				paperList.push(paperval);

			});

			//order the list by year
			paperList.sort(function(a, b){ return b.year - a.year;});

			//console.log(paperList);

			//add section title
			addSectionTitle(key);

			for(var i = 0; i < paperList.length; i ++) {
				var paper  = paperList[i];
				var image = paper.image;
				var title = paper.title;
				var authors = paper.authors;
				var abstract = paper.abstract;
				var summary = paper.summary;
				var year = paper.year;
				addExample(image, title, year, authors, abstract, summary);
			}

  		});
 	});

}


function addSectionTitle(titleStr) {
	var container = document.getElementById("example-container");

	var divider = document.createElement("div");
	divider.className = "ui";
	divider.classList.add("hidden");
	divider.classList.add("divider");

	var title = document.createElement("h3");
	title.className = "ui";
	title.classList.add("header");
	title.innerHTML = titleStr;

	container.appendChild(divider);
	container.appendChild(title);

}


function addExample(imageStr, titleStr, yearStr, authorsStr, abstractStr, summaryStr) {

	var container = document.getElementById("example-container");

	//add an example
	var example = document.createElement("div");
	example.className = "item";
	container.appendChild(example);

	//image
	var imageDiv = document.createElement("div");
	imageDiv.className = "image";
	example.appendChild(imageDiv);
	var img = document.createElement("img");
	img.setAttribute("src", imageStr);  //`${this.index}`
	imageDiv.appendChild(img);
	
	//content
	var contentDiv = document.createElement("div");
	contentDiv.className = "content";
	example.appendChild(contentDiv);
	var header = document.createElement("a");
	header.className = "header";
	header.innerHTML = titleStr + " (" + yearStr + ")";  //`${this.category}`
	contentDiv.appendChild(header);
	var author = document.createElement("div");
	author.className = "meta";
	var meta_authors = document.createElement("span");
	meta_authors.innerHTML = authorsStr;  // to add
	author.appendChild(meta_authors);
	contentDiv.appendChild(author);
	var abstract = document.createElement("div");
	abstract.className = "description";
	var meta_abstract = document.createElement("p");
	meta_abstract.className = "activeP";
	meta_abstract.innerHTML = abstractStr;
	abstract.appendChild(meta_abstract);
	contentDiv.appendChild(abstract);
	var summary = document.createElement("div");
	summary.className = "extra";
	summary.innerHTML = summaryStr;  //to add
	contentDiv.appendChild(summary);
	//end of add an example

}


function recursiveGetProperty(obj, lookup, callback) {
    for (property in obj) {
        if (property == lookup) {
            callback(obj[property]);
        } else if (obj[property] instanceof Object) {
            recursiveGetProperty(obj[property], lookup, callback);
        }
    }
} 


document.addEventListener('DOMContentLoaded', function(event){
	let fetchdata = new fetchData();
})