const createFormEl = document.getElementById("form-display")

const showPostFormHandler = (event) => {
    event.preventDefault();
    computedStyle = getComputedStyle(createFormEl).display;
    if (computedStyle ==="none"){
        createFormEl.style.display = "block";
    }
};

const newPostHandler = async(event) => {
    event.preventDefault();
    const title = document.querySelector("#post-title").value.trim();
    const body = document.querySelector("#post-content").value.trim();
    console.log(title,body)

    

    const currentDate = new Date();
    // Get the current year
    const currentYear = currentDate.getFullYear();
    // Get the current month (0-11, where 0 = January and 11 = December)
    const currentMonth = currentDate.getMonth();
    // Get the current day of the month (1-31)
    const currentDay = currentDate.getDate();
    // Get the current hour (0-23)
    const currentHour = currentDate.getHours();
    // Get the current minute (0-59)
    const currentMinute = currentDate.getMinutes();
    // Get the current second (0-59)
    const currentSecond = currentDate.getSeconds();
    const dateNow = `${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinute}:${currentSecond}`;

    

    if(title){
        const response = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({ title, body,dateNow }),
        headers: { "Content-Type": "application/json" },
        });
    
        if(response.ok){
            const data = await response.json();
        }
    }
}



document.querySelector("#new-post-btn").addEventListener("click", showPostFormHandler);
document.querySelector("#form-display").addEventListener("submit", newPostHandler);
