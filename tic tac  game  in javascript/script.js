let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    true0 = true;
    enablebox();
    msgcontainer.classList.add("hide");
}
let turno = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turno) {
            box.innerText = "o";
            turno = false;
        }
        else {
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disabledbox = () => {
    for (let box of boxes) {
        box.disabled = true
    };
};
const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};


const showWinner = (winner) => {
    msg.innerText = `Congratutation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox()
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }

    }
}
newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame)