// complile function that compile HTML+CSS+JS in iFrame tag
function compile() {
  var html = document.getElementById("html-box");
  var css = document.getElementById("css-box");
  var js = document.getElementById("js-box");
  var code = document.getElementById("output-box").contentWindow.document;

      console.log("run");
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  ;
}
    // split function that makes the text are resizable
    Split([".html", ".css", ".js"], {
        minSize: 30,
        gutterSize: 10,
      });
// diable the split funtion by resizing the html,css,js box
function disable(){
     document.getElementById("box-size-1").style.width = "100%";
     document.getElementById("box-size-2").style.width = "100%";
     document.getElementById("box-size-3").style.width = "100%";
}

// function to changge the layout
$('.view').on('click',function(e) {
    if ($(this).hasClass('default')) {
        $('.layout').removeClass('layout-2 layout-3');
        $('.layout').addClass('layout-1');
        $('.main-container').removeClass('main-container-2 main-container-3');
        $('.main-container').addClass('main-container-1');
        
    }
    else if($(this).hasClass('left-view')) {
         $('.layout').addClass('layout-2');
        $('.layout').removeClass('layout-1 layout-3');
        $('.main-container').removeClass('main-container-1 main-container-3');
        $('.main-container').addClass('main-container-2');
    }
    else if($(this).hasClass('right-view')) {
         $('.layout').addClass('layout-3');
        $('.layout').removeClass('layout-1 layout-2');
        $('.main-container').removeClass('main-container-1 main-container-2');
        $('.main-container').addClass('main-container-3');
    }
});


// function to changge the theme
$('.circle').on('click',function(e) {
    if ($(this).hasClass('light')) {
        $('.body').removeClass('dark-body contrast-body');
        $('.body').addClass('light-body');
        $('.textbox').removeClass('dark-textbox contrast-textbox');
        $('.textbox').addClass('light-textbox');
        $('.navbar').removeClass('dark-nav contrast-nav');
        $('.navbar').addClass('light-nav');
    }
    else if($(this).hasClass('dark')) {
         $('.body').removeClass('light-body contrast-body');
        $('.body').addClass('dark-body');
        $('.textbox').removeClass('light-textbox contrast-textbox');
        $('.textbox').addClass('dark-textbox');
        $('.navbar').removeClass('light-nav contrast-nav');
        $('.navbar').addClass('dark-nav');
    }
    else if($(this).hasClass('contrast')) {
         $('.body').removeClass('light-body dark-body');
        $('.body').addClass('contrast-body');
        $('.textbox').removeClass('light-textbox dark-textbox');
        $('.textbox').addClass('contrast-textbox');
        $('.navbar').removeClass('dark-nav light-nav');
        $('.navbar').addClass('contrast-nav');
    }
});


// Copy functions..

function copyHtmlFunction() {
  /* Get the text field */
  var copyText = document.getElementById("html-box");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text");
}


function copyCssFunction() {
  /* Get the text field */
  var copyText = document.getElementById("css-box");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text");
}

function copyJsFunction() {
  /* Get the text field */
  var copyText = document.getElementById("js-box");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text");
}


