var requestUrl = 'https://api.github.com/users/juliusm9791/repos';

const ignoreList = ["Portfolio", "prework-about-me", "Readme_Generator", "Team_Profile_Generator", "Team_Profile_Generator_HTML", "Note_Taker", "Employee_Tracker", "E-Commerce", "Social_Network_API", "Text_Editor", "Book_Search_Engine", "Redux_Store", "tech-news-java-api", "News-python", "fly-app-3.0"]
// JQuery AJAX
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log(response);
  linksToPages(response);
});

function linksToPages(response) {

  console.log(response)
  for (let i = 0; i < requestUrl.length; i++) {
    if (!ignoreList.includes(response[i].name)) {
      let div = $('<div>');
      let titleName = fixTitleName(response[i].name);
      let imageLink = `./assets/images/${response[i].name}.jpg`;
      let image = new Image();
      image.src = imageLink;
      image.alt = titleName;
      div.append($(`<a href=${response[i].homepage} target="_blank"></a>`).append(image));
      div.append($(`<a class="fa titleName" href=${response[i].html_url} target="_blank">&#xf09b ${titleName}</a>`));
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
  myWindow.document.write('<title>Julius resume</title><iframe src="./assets/pdf/Julius_Markauskas_resume.pdf" width="100%" height="100%"></iframe>');
}
