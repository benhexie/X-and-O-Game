const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

let x = Math.floor(Math.random() * 2);  // Keeps track of last player; 1 is X, 0 is O.
let i;  // Determines the positions of X and O arrays.
let clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let xArray = [];    // Stores X-positions on the grid.
let oArray = [];    // Stores Y-positions on the grid.
// The game can only be won if AT LEAST 5 entries have been made,
    // hence nEntries.
let nEntries = 0;
let hasWon = 0; // Indicates if a player has won.

possibleOutcomes = [
    [1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8],
    [3, 6, 9], [3, 5, 7], [4, 5, 6], [7, 8, 9]
];



/**
 * *******************************************************************************************************************
 */
 box1.addEventListener("click", () => {
    boxClicked(1);
});
box2.addEventListener("click", () => {
    boxClicked(2);
});
box3.addEventListener("click", () => {
    boxClicked(3);
});
box4.addEventListener("click", () => {
    boxClicked(4);
});
box5.addEventListener("click", () => {
    boxClicked(5);
});
box6.addEventListener("click", () => {
    boxClicked(6);
});
box7.addEventListener("click", () => {
    boxClicked(7);
});
box8.addEventListener("click", () => {
    boxClicked(8);
});
box9.addEventListener("click", () => {
    boxClicked(9);
});

/**
 * *******************************************************************************************************************
 */

const winner = (isWinner) => {
    if (isWinner === "x") {
        return 1;
    }
    else if(isWinner === "o") {
        return 1;
    }
    else {
        displayError("winner error");
    }
}

// Verifies if entry made is a winning entry.
const verify = (arr) => {
    if (JSON.stringify(arr) === JSON.stringify(xArray)) {
        for(i = 0; xArray[i+2] !== undefined; i++) {
            for (let j of possibleOutcomes) {
                if(JSON.stringify([xArray[i], xArray[i + 1], xArray[i + 2]]) === JSON.stringify(j)) {
                    hasWon = winner("x");
                    break;
                }
            }
            if (hasWon === 1) {
                break;
            }
        }
    }
    else if (JSON.stringify(arr) === JSON.stringify(oArray)) {
        for(i = 0; oArray[i+2] !== undefined; i++) {
            for (let j of possibleOutcomes) {
                if(JSON.stringify([oArray[i], oArray[i + 1], oArray[i + 2]]) === JSON.stringify(j)) {
                    hasWon = winner("o");
                    break;
                }
            }
            if (hasWon === 1) {
                break;
            }
        }
    }
    else {
        displayError("verify error");
    }
}

const displayError = (errorMsg) => {
    switch (errorMsg) {
        case "verify error":
            error.log("%cAn error occured in verify()", "color: red; font-weight: bold");
            break;
        case "winner error":
            error.log("%cAn error occured in winner()", "color: red; font-weight: bold");
            break;
    
        default:
            console.error("An error occured!");
            break;
    }
}

/**
 * ********************************************************************************************************************
 */
const boxClicked = (box) => {
    if (clicked[box - 1] === 0) {
        if (x === 1) {
            document.getElementsByClassName("fa-x")[box - 1].setAttribute('style', 'display:inline !important');
            document.getElementsByClassName("fa-o")[box - 1].setAttribute('style', 'display:none !important');
            xArray.push(box);
            xArray.sort();
            clicked[box - 1] = 1;
            if (x === 1) x = 0;
            else x = 1;
            if (nEntries >= 4) {
                verify(xArray);
            }
            nEntries++;
        }
        else {
            document.getElementsByClassName("fa-x")[box - 1].setAttribute('style', 'display:none !important');
            document.getElementsByClassName("fa-o")[box - 1].setAttribute('style', 'display:inline !important');
            oArray.push(box);
            oArray.sort();
            clicked[box - 1] = 1;
            if (x === 1) x = 0;
            else x = 1;
            if (nEntries >= 4) {
                verify(oArray);
            }
            nEntries++;
        }
    }
}

/**
 * ********************************************************************************************************************
 */