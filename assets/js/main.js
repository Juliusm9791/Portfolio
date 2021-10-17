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
    if (response[i].name !== "Portfolio" && response[i].name !== "prework-about-me") {
      let div = $('<div>');
      let titleName = fixTitleName(response[i].name);
      let imageName = imageExist(response[i].name);
      console.log(imageName)
      div.append($(`<a href="https://juliusm9791.github.io/${response[i].name}/"><img src="${imageName}" alt="${titleName}"></a>`));
      div.append($('<p>').text(titleName));
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
  myWindow.document.write('<title>Julius resume</title><iframe src="./assets/pdf/resume-test.pdf" width="100%" height="100%"></iframe>');
}

function imageExist(x){
  let image = new Image();
  console.log(x)
  let imagePlace = './assets/images/' + x + '.jpg';
  image.src = imagePlace;
  console.log(imagePlace)
  console.log(image.height)
  if (image.height === 0) {
    return "<img src='./assets/images/Coming_Soon.jpg'>";
  } else {
    return "<img src='./assets/images/" + x + ".jpg'";
  }
}