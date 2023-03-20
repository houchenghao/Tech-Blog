const newPostHandler = async(event) => {
    event.preventDefault();
    const title = document.querySelector("#post-title").value.trim();
    const body = document.querySelector("#post-content").value.trim();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
    const dateNow = `${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinute}:${currentSecond}`;

    if(title){
        const response = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({ title, body,dateNow }),
        headers: { "Content-Type": "application/json" },
        });
    
        if(response.ok){
            // const data = await response.json();
            document.location.replace("/dashboard");
        }
    }
}
document.querySelector("#form-display").addEventListener("submit", newPostHandler);