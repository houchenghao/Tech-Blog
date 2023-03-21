const updateFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const pathname = document.location.pathname;

    console.log("update")
    const response = await fetch(`/api${pathname}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
    });

};

const deleteFormHandler = async (event) => {
    event.preventDefault();
    console.log("delete");
    const pathname = document.location.pathname;
    const response = await fetch(`/api${pathname}`, {
        method: "DELETE",
        // body: JSON.stringify({ title, content }),
        // headers: { "Content-Type": "application/json" },
      });
}


document
.querySelector("#update-post-btn")
.addEventListener("click", updateFormHandler);



document
.querySelector("#delete-post-btn")
.addEventListener("click", deleteFormHandler);