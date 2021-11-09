var requestUrl = 'https://api.github.com/users/juliusm9791/repos';

// JQuery AJAX
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log(response);
  linksToPages(response);
});

function linksToPages(response) {
  for (let i = 0; i < requestUrl.length; i++) {
    if (response[i].name !== "Portfolio" && response[i].name !== "prework-about-me" && response[i].name !== "Readme_Generator" && response[i].name !== "Team_Profile_Generator" && response[i].name !== "Team_Profile_Generator_HTML" && response[i].name !== "Note_Taker" && response[i].name !== "Employee_Tracker") {
      let div = $('<div>');
      let titleName = fixTitleName(response[i].name);
      let imageLink =  `./assets/images/${response[i].name}.jpg`;
      let image = new Image();
      image.src = imageLink;
      image.alt = titleName;
      //console.log(response[i].html_url)
      div.append($(`<a href="https://juliusm9791.github.io/${response[i].name}/" target="_blank"></a>`).append(image)); 
      div.append($(`<a class="fa titleName" href="${response[i].html_url}" target="_blank">&#xf09b ${titleName}</a>`));
      $('#articlePort').append(div);
    }
  }
}

function fixTitleName(title) {
  title = title.toLowerCase()
  let titleSplit = title.split("_");
    for (let i = 0; i < titleSplit.length; i++) {
      titleSplit[i] = titleSplit[i].charAt(0).toUpperCase() + titleSplit[i].slice(1);
    }
  title = titleSplit.join(" ")
  return title;
}

$('#resume').on("click", openPDF)

function openPDF() {
  var myWindow = window.open("", "_blank");
  myWindow.document.write('<title>Julius resume</title><iframe src="./assets/pdf/Julius_Markauskas_resume3.pdf" width="100%" height="100%"></iframe>');
}