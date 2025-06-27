// TODO: Remove the flickering between the transition of images

var currentPage = 'intro';

var intervalTime = 15;
var transitionTime = 3.5; 

var homeImagesUrls = [
    'armenia_1.jpg', 'armenia_2.jpg','armenia_3.jpg',
    'colombia_1.jpg','colombia_2.jpg','colombia_3.jpg',
    'franca_1.jpg','franca_2.jpg','franca_3.jpg',
    'grecia_1.jpg','grecia_2.jpg','grecia_3.jpg',
    'italia_1.jpg','italia_2.jpg','italia_3.jpg',
    'japao_1.jpg','japao_2.jpg','japao_3.jpg']
    
var imageTitles = [
    'Effendi', 'Effendi', 'Effendi', 
    'Macondo', 'Macondo', 'Macondo',
    'Petit Pain', 'Petit Pain', 'Petit Pain',
    'Acrópoles', 'Acrópoles', 'Acrópoles',
    'Gigio', 'Gigio', 'Gigio',
    'Kidoairaku', 'Kidoairaku', 'Kidoairaku'
]

var homeImages = [];
var mainImg = document.getElementById('intro').children[0];
var imgTitle = document.getElementsByClassName('typewriter')[0];

// Utility
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

function preloadImages()
{
    var img;
    for (var i = 0; i < homeImagesUrls.length; i++) 
    {
        img = new Image();
        img.src = 'img/home/' + homeImagesUrls[i];
        homeImages.push(img);
    }
}


// Main
var previousImg;

function fadeInImage() 
{
    var i = getRandomInt(0, homeImages.length);

    if (i == previousImg)
    {
        i++;
        if (i >= homeImages.length)
            i = 0;
    }

    var backgroundImg = homeImages[i].src;

    document.body.style.backgroundImage = 'url("' + backgroundImg + '")';
    document.body.className = "in"; 

    mainImg.src = backgroundImg;
    mainImg.className = "focus in"; 
    
    imgTitle.className = "typewriter typing";
    imgTitle.children[0].textContent = imageTitles[i];

    previousImg = i;
}

function fadeOutImage() 
{
    // Fade out previous background
    document.body.className = "";

    mainImg.className = "focus";
    imgTitle.className = "typewriter deleting";
    
    // Fade in new background
    setTimeout(() => { fadeInImage(); }, transitionTime * 1000);
}

function changePage(page)
{
    document.getElementById(currentPage).className = "disabled";
    document.getElementById(page).className = "";
    currentPage = page;
}

function navButton() 
{
    var mobileNav = document.getElementById("links");

    if (mobileNav.className === "disabled") 
        mobileNav.className = "none";
    else 
        mobileNav.className = "disabled";
}