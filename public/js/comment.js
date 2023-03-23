const submitCommentHandler = async (event) => {
    event.preventDefault();
   
    const newCommentContent = document.querySelector("#new-comment-content").value.trim();
    const pathname = document.location.pathname;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const dateNow = `${currentYear}-${currentMonth}-${currentDay}`;

    console.log(dateNow)

    if (newCommentContent) {
        const response = await fetch(`/api${pathname}`, {
            method: "POST",
            body: JSON.stringify({ newCommentContent, dateNow }),
            headers: { "Content-Type": "application/json" },
        });
        if(response.ok){
            document.location.reload();
        };
    }
};

document.querySelector("#new-comment-btn").addEventListener("submit", submitCommentHandler);