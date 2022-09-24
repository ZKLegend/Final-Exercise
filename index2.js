// Watch Movie Function

// Get Element from HTML
let episodeContainer = document.querySelector('.episode-container');
let a = episodeContainer.querySelectorAll('a');
let video1Array = [
    "https://www.youtube.com/embed/-SBBef-OEiE",
    "https://www.youtube.com/embed/NP_unUdyIpU",
    "https://www.youtube.com/embed/Hiy2oGwNc1I",
    "https://www.youtube.com/embed/cDJwpPJIaRA",
    "https://www.youtube.com/embed/dC5aaFX0D8U",
    "https://www.youtube.com/embed/DewduHishvg",
    "https://www.youtube.com/embed/THnq66XsIG4",
    "https://www.youtube.com/embed/Sa_-xvOnngw",
    "https://www.youtube.com/embed/CGxhkQ8Zw0w",
    "https://www.youtube.com/embed/GdEKjvx2dTQ",
    
];
let video2Array = [
    "https://www.youtube.com/embed/AeaD3Q-bFjU",
    "https://www.youtube.com/embed/MucyhPWlx28",
    "https://www.youtube.com/embed/JtfyJemtkt0",
    "https://www.youtube.com/embed/QuMJjYgHsiM",
    "https://www.youtube.com/embed/TesYVK3lHkg",
];
let video3Array = [
    "https://www.youtube.com/embed/yJ6tOQpaO2A",
    "https://www.youtube.com/embed/IfoCfYVfrAs",
    "https://www.youtube.com/embed/IfoCfYVfrAs",
    "https://www.youtube.com/embed/FbsW2Wh-1JM",
    "https://www.youtube.com/embed/ypS16hvnp58"
];

let videoObject = {
    1: video1Array,
    2: video2Array,
    3: video3Array
}
console.log(videoObject[3][0]);
let properties = Object.getOwnPropertyNames(videoObject);
console.log(properties);

// Write changeVideo Function
function changeVideo(n) {
    let iframe = document.querySelector('iframe');
    let videoName = document.querySelector('h1');
    a[n].addEventListener('click', () => {
        event.preventDefault();
        for (m = 0; m <video1Array.length; m++) {
            if (m == n) {
    iframe.src = video1Array[m];
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


// Watch Video from Homepage
function watchVideo() {
    for (i = 0; i <= properties.length; i++) {
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    let name = searchParams.get('name');
    console.log(name);
    console.log(id);
    let iframe = document.querySelector('iframe');
    let videoName = document.querySelector('h1');
        if (id == i) {
            iframe.src = videoObject[i][0];
            videoName.innerHTML = `${name} - Episode 1`;
        }
        console.log(iframe.src);
    }
}

watchVideo();