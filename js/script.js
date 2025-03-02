// upadeted date
const newDate = new Date();
const updateTime = (newDate.toLocaleString('en-us', {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
}).replace(/,/g, ""));
const currentTimeParent = document.getElementById('current-date-time');
currentTimeParent.innerHTML = `
    <span class="text-[#00303C] text-lg font-medium">${updateTime}</span>
`

let completedBtns = document.querySelectorAll(".completed");
for (let completedBtn of completedBtns) {
    completedBtn.addEventListener("click", function (event) {
        event.target.setAttribute("disabled", true);
        const taskAssign = document.getElementById("task-assign");
        const newTaskAssign = parseInt(taskAssign.innerText);
        if (newTaskAssign > 0) {
            taskAssign.innerText = newTaskAssign - 1;
            alert("Board Updated Successfully");
            if ((newTaskAssign - 1) < 1) {
                alert("Congrates!!! You have completed all the current task")
            }
        }

        const taskCount = document.getElementById("task-count");
        const newTaskCount = parseInt(taskCount.innerText);;

        taskCount.innerText = newTaskCount + 1;

        const title = event.target.parentNode.parentNode.childNodes[3].innerText;
        const history = document.getElementById("history");
        const div = document.createElement("div");
        div.className = "bg-[#F4F7FF] p-3 rounded-lg";
        div.textContent = `You have completed the task ${title} at ${new Date().toLocaleTimeString()}`;
        history.appendChild(div);

        document.getElementById("clear-history").addEventListener("click", function () {
            history.innerHTML = ""
        });

    })
};


document.getElementById("theme-btn").addEventListener("click", function () {
    let number1 = Math.floor(Math.random() * 200);;
    let number2 = Math.floor(Math.random() * 200);;
    let number3 = Math.floor(Math.random() * 200);;
    document.body.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
})

document.getElementById("discover-new-btn").addEventListener("click", function () {
    window.location.href = "./blog.html"
})