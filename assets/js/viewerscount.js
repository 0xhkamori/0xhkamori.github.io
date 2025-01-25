document.addEventListener("DOMContentLoaded", () => {
    let viewerCount = localStorage.getItem("viewerCount");

    if (!viewerCount) {
      viewerCount = 0; 
    }

    viewerCount++;
    localStorage.setItem("viewerCount", viewerCount);

    document.getElementById("visitor-count").innerText = `This page has been visited ${viewerCount} times!`;

    function checkViewers() {
      console.log(`This page has been visited ${localStorage.getItem("viewerCount")} times.`);
    }

    window.checkViewers = checkViewers;
});
