const showPostFormHandler = (event) => {
    event.preventDefault();
    document.location.replace("/newpost");
};
document.querySelector("#new-post-btn").addEventListener("submit", showPostFormHandler);

