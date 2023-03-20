// const createFormEl = document.getElementById("form-display")

const showPostFormHandler = (event) => {
    event.preventDefault();
    // computedStyle = getComputedStyle(createFormEl).display;
    // if (computedStyle ==="none"){
    //     createFormEl.style.display = "block";
    // }
    document.location.replace("/newpost");
};
document.querySelector("#new-post-btn").addEventListener("submit", showPostFormHandler);