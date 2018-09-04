"use strict;"

function fetchData(){

	


	//read raw data from json
	$.getJSON( "examples.json", function( data ) {
  		$.each( data, function( key, val ) {
    		if(key == "papers") {
    			var papers = val;
    			$.each(papers, function(paperkey, paperval) {
    				//console.log(paperval);

    				var image = paperval.image;
    				var title = paperval.title;
    				var authors = paperval.authors;
    				var summary = paperval.summary;

    				addExample(image, title, authors, summary);

    			});
    		}
  		});
 	});

}


function addExample(imageStr, titleStr, authorsStr, summaryStr) {

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
	header.innerHTML = titleStr;  //`${this.category}`
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
	meta_abstract.innerHTML = "abstract empty";
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