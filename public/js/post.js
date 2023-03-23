const updateFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    console.log(content)

    const pathname = document.location.pathname;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() +1;
    const currentDay = currentDate.getDate();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
    const dateNow = `${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinute}:${currentSecond}`;

   
    const response = await fetch(`/api${pathname}`, {
        method: "PUT",
        body: JSON.stringify({ title, content, dateNow }),
        headers: { "Content-Type": "application/json" },
    });
    if(response.ok){
        document.location.replace('/dashboard');
    }

};

const deleteFormHandler = async (event) => {
    event.preventDefault();
    
    const pathname = document.location.pathname;
    const response = await fetch(`/api${pathname}`, {
        method: "DELETE",
    });
    if(response.ok){
        document.location.replace('/dashboard');
    }
}


document
.querySelector("#update-post-btn")
.addEventListener("click", updateFormHandler);



document
.querySelector("#delete-post-btn")
.addEventListener("click", deleteFormHandler);