// Watch Movie Function

// Get Element from HTML
let episodeContainer = document.querySelector('.episode-container');
let a = episodeContainer.querySelectorAll('a');
let videoArray = [
    "https://www.youtube.com/embed/-SBBef-OEiE",
    "https://www.youtube.com/embed/NP_unUdyIpU",
    "https://www.youtube.com/embed/Hiy2oGwNc1I",
    "https://www.youtube.com/embed/cDJwpPJIaRA",
    "https://www.youtube.com/embed/dC5aaFX0D8U",
    "https://www.youtube.com/embed/CGhK2NPKtQE",
    "https://www.youtube.com/embed/MucyhPWlx28",
    "https://www.youtube.com/embed/JtfyJemtkt0",
    "https://www.youtube.com/embed/QuMJjYgHsiM",
    "https://www.youtube.com/embed/TesYVK3lHkg",
    "https://www.youtube.com/embed/DewduHishvg",
    "https://www.youtube.com/embed/THnq66XsIG4",
    "https://www.youtube.com/embed/Sa_-xvOnngw",
    "https://www.youtube.com/embed/CGxhkQ8Zw0w",
    "https://www.youtube.com/embed/GdEKjvx2dTQ",
    "https://www.youtube.com/embed/WAjCQkf4UEI",
    "https://www.youtube.com/embed/IfoCfYVfrAs",
    "https://www.youtube.com/embed/IfoCfYVfrAs",
    "https://www.youtube.com/embed/FbsW2Wh-1JM",
    "https://www.youtube.com/embed/ypS16hvnp58"
];



// Write changeVideo Function
function changeVideo(n) {
    let iframe = document.querySelector('iframe');
    let videoName = document.querySelector('h1');
    a[n].addEventListener('click', () => {
        event.preventDefault();
        for (m = 0; m <videoArray.length; m++) {
            if (m == n) {
    iframe.src = videoArray[m];
    videoName.innerHTML = `Naruto - Episode ${m+1}`;
    a[n].style.backgroundColor = "red";
            }
        }
    })
}

// Call changeVideo function
for (i = 0; i < a.length; i++) {
    changeVideo(i);
}


