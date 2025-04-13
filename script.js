const submit = document.getElementById("task-submit");

submit.addEventListener("click", function(event) {
    const task = document.getElementById("task").value;
    event.preventDefault(); 
    
    const item = document.createElement("li");
    item.textContent = task;

    const list = document.getElementById("task-list");
    list.appendChild(item);

    document.getElementById("task").value = "";
    
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function() {
        item.classList.toggle("completed");
    })

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        item.remove();
    })

    item.appendChild(completeBtn);
    item.appendChild(deleteBtn);
});