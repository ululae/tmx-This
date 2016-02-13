 // // *
 // //   * Slide top instantiation and action.
   
 //  var slideTop = new Menu({
 //    wrapper: '#o-wrapper',
 //    type: 'slide-top',
 //    menuOpenerClass: '.c-button',
 //    maskId: '#c-mask'
 //  });

 //  var slideTopBtn = document.querySelector('#c-button--slide-top');
  
 //  slideTopBtn.addEventListener('click', function(e) {
 //    e.preventDefault;
 //    slideTop.open();
 //  });


	// function toggleNav()
	// {
	// 	// Toggle the nav
	// 	$("nav ul").toggleClass("slideIn");
	// }

	// // Set up the click event
	// $("#nav-icon").click(toggleNav);

	// function onLinkClicked(event) {
	// 	// Prevent default link behavior
	// 	event.preventDefault();

	// 	// Get the href of the link that we clicked
	// 	var href = $(this).attr("href");

	// 	// Do the scrolling
	// 	$(window).scrollTo(href, 1000);
	// }

	// // Set up click event
	// $("nav a").click(onLinkClicked);


// Form JS


$("#createHeader").click(tmxHeader);
  function tmxHeader(event){
   event.preventDefault();

    var sourceLanguage = document.getElementById("SourceL").value;
    var headerTxt = "<?xml version=\"1.0\" encoding=\"utf-16\"?><!DOCTYPE tmx SYSTEM \"tmx14.dtd\"><tmx  version=\"1.4\"><header creationtool=\"Opentrans\" creationtoolversion=\"0.1\" datatype=\"PlainText\" segtype=\"sentence\" o-tmf=\"DVMDB\" adminlang=\"EN-US\" srclang=\"" + sourceLanguage + "\"></header><body>";
  
  $("#results").val(headerTxt);

// If SourceL = TargetL then alert: "Target language and source language cannot be the same. Please change your selections."

}

$("#add").click(addTU);
  function addTU(results){
  event.preventDefault();
    var sourceLanguage = document.getElementById("SourceL").value;
    var targetLanguage = document.getElementById("TargetL").value;
    var sourceString = document.getElementById("sourceText").value;
    var targetString = document.getElementById("translation").value;
    var segmentTU = "<tu tuid=\"007\" datatype=\"Text\"><tuv xml:lang=\"" + sourceLanguage + "\"><seg>" + sourceString + "</seg></tuv><tuv xml:lang=\"" + targetLanguage + "\"><seg>" + targetString + "</seg></tuv></tu>";
    var obj = document.getElementById("results");
    obj.value += segmentTU;
}

$("#reset").click(resetResults);
  function resetResults(){
  event.preventDefault();
    $("#results").val('');
}



// Attempt at creating a downloadable file!



$("#generate").click(saveTextAsFile);
function saveTextAsFile()
{
  var textToWrite = document.getElementById("results").value;
  var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
  var sourceLanguage = document.getElementById("SourceL").value;
  var targetLanguage = document.getElementById("TargetL").value;
  var fileNameToSaveAs = sourceLanguage + "_" +targetLanguage;
  
    textToWrite.value += "</body>";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  // downloadLink.setAttribute("");
  if (window.webkitURL != null)
  {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  }
  else
  {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}





 //create file: "Hello World"
 //save to Drive