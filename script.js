
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const addButton = document.getElementById("add");
const list = document.getElementById("list");
const totalElement = document.getElementById("total");
const error = document.getElementById("error");

let total = 0;

addButton.addEventListener("click", function() {
    const name = nameInput.value;
    const amount = Number(amountInput.value);

    if (name === "" || amount <= 0) {
        error.textContent = "Enter a name and amount";
        return;
    }

    const item = document.createElement("li");
    item.textContent = name + " - " + amount + " EGP ";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        total = total - amount;
        totalElement.textContent = total;
        item.remove();
    });

    item.appendChild(deleteButton);
    list.appendChild(item);

    total = total + amount;
    totalElement.textContent = total;

    nameInput.value = "";
    amountInput.value = "";
    error.textContent = "";
});
