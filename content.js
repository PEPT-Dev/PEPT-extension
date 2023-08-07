let videos = document.querySelectorAll('video');
videos.forEach((video) => {
    video.style.display = 'none';
});


// let videoSrc = Array.from(videos).map(video => video.src);
// browser.runtime.sendMessage({videoSrc: videoSrc});