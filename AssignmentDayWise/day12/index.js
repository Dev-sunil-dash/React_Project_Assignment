var columns = ['Name', 'Username', 'Email'];
var users = [];
function btnClick() {
    const xhr = new XMLHttpRequest();

    xhr.open("get", "https://jsonplaceholder.typicode.com/users");
    xhr.send();

    xhr.onload = () => {
        users = JSON.parse(xhr.responseText);
    }
    xhr.onerror = () => {
        console.log("Failure");
    }
    prepareTable(users);
}

async function usingFetch() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "get"
        })

        const res2 = await res.json();
        console.log(res2);
    } catch (error) {
        console.log(error);
    } finally {

    }
}

function prepareTable(users) {
    const ths = columns.map(column => `<th>${column}</th>`).join("");
    let trs = "";
    users.forEach(user => {
        trs = trs + `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
        </tr>
    `});
    const tableData = `<table class="table table-striped table-dark text-center"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
    document.getElementById("res").innerHTML = tableData;
}