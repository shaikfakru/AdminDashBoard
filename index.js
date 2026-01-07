async function fetchData() {
    let res = await fetch("http://localhost:3000/data");
    let data = await res.json();
    showData(data)
}
fetchData();
function showData(data) {
    data.map((item) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <h3>${item.id}</h3>
        <p>${item.title}</p>
        <button id="updateBtn" onclick="updateData(${item.id})">Update</button>
        <button id="deleteBtn" onclick="deleteData(${item.id})">Delete</button>
        `
        document.getElementById("container").appendChild(div);
    })
}
function deleteData(id) {
    fetch(`http://localhost:3000/data/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            fetchData();
        })
}
function updateData(id) {
    fetch(`http://localhost:3000/data/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title: "updated title"
        })
    })
        .then(() => {
            fetchData();
        })
}

function saveData() {
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;
    let image = document.getElementById("image").value;
    let rating = document.getElementById("rating").value;
    let id = document.getElementById("id").value;
    fetch(`http://localhost:3000/data/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title: title,
            price: price,
            description: description,
            category: category,
            image: image,
            rating: rating
        })
    })
        .then(() => {
            fetchData();
        })
}
// document.addEventListener("DOMContentLoaded", () => {
//     fetchData();
// })
// fetchData();