const gridContainer = document.getElementById("grid-container");
let rows = 64;
let cols = 128;
const maxRows = 64;
const maxCols = 128;
const minRows = 8;
const minCols = 4;
let aspectRatio = "2:1";
let isDrawing = false;
let isErasing = false;

const undoStack = [];
const redoStack = [];

function initializeGrid() {
  if (aspectRatio === "2:1") {
    cols = Math.max(Math.min(cols, maxCols), minCols);
    rows = Math.floor(cols / 2);
    gridContainer.classList.remove("aspect-1-1");
    gridContainer.classList.add("aspect-2-1");
  } else if (aspectRatio === "1:1") {
    rows = Math.max(Math.min(rows, maxRows), minRows);
    cols = rows;
    gridContainer.classList.remove("aspect-2-1");
    gridContainer.classList.add("aspect-1-1");
  }

  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");

    cell.addEventListener("mousedown", () => {
      addToUndoStack();
      if (isErasing) {
        cell.classList.remove("active");
      } else {
        cell.classList.add("active");
      }
      isDrawing = true;
    });

    cell.addEventListener("mousemove", () => {
      if (isDrawing) {
        if (isErasing) {
          cell.classList.remove("active");
        } else {
          cell.classList.add("active");
        }
      }
    });

    cell.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    gridContainer.appendChild(cell);
  }

  document.body.addEventListener("mouseup", () => {
    isDrawing = false;
  });
}

function addToUndoStack() {
  const currentState = Array.from(gridContainer.children).map((cell) =>
    cell.classList.contains("active")
  );
  undoStack.push(currentState);
  redoStack.length = 0;
}

function undo() {
  if (undoStack.length > 0) {
    const currentState = Array.from(gridContainer.children).map((cell) =>
      cell.classList.contains("active")
    );
    redoStack.push(currentState);
    const previousState = undoStack.pop();
    previousState.forEach((active, index) => {
      gridContainer.children[index].classList.toggle("active", active);
    });
  }
}

function redo() {
  if (redoStack.length > 0) {
    const currentState = Array.from(gridContainer.children).map((cell) =>
      cell.classList.contains("active")
    );
    undoStack.push(currentState);
    const nextState = redoStack.pop();
    nextState.forEach((active, index) => {
      gridContainer.children[index].classList.toggle("active", active);
    });
  }
}

function addRow() {
  if (rows < maxRows) {
    addToUndoStack();
    rows++;
    if (aspectRatio === "2:1") {
      cols = rows * 2;
    } else if (aspectRatio === "1:1") {
      cols = rows;
    }
    updateInputs();
    initializeGrid();
  }
}

function removeRow() {
  if (rows > minRows) {
    addToUndoStack();
    rows--;
    if (aspectRatio === "2:1") {
      cols = rows * 2;
    } else if (aspectRatio === "1:1") {
      cols = rows;
    }
    updateInputs();
    initializeGrid();
  }
}

function addColumn() {
  if (cols < maxCols) {
    addToUndoStack();
    cols++;
    if (aspectRatio === "2:1") {
      rows = Math.floor(cols / 2);
    } else if (aspectRatio === "1:1") {
      rows = cols;
    }
    updateInputs();
    initializeGrid();
  }
}

function removeColumn() {
  if (cols > minCols) {
    addToUndoStack();
    cols--;
    if (aspectRatio === "2:1") {
      rows = Math.floor(cols / 2);
    } else if (aspectRatio === "1:1") {
      rows = cols;
    }
    updateInputs();
    initializeGrid();
  }
}

const getSpriteData = () => {
  const design = [];
  const gridRows = gridContainer.querySelectorAll(".grid-item");

  let rowArray = [];

  gridRows.forEach((cell, index) => {
    rowArray.push(cell.classList.contains("active") ? 1 : 0);

    if ((index + 1) % cols === 0) {
      design.push([...rowArray]);
      rowArray = [];
    }
  });

  return design;
};

function saveDesign() {
  const spriteData = getSpriteData();
  const nameInput = document.getElementById("spriteName");
  const name = nameInput?.value?.trim() || "Sprite " + new Date().getTime();

  const newSprite = {
    name: name,
    data: spriteData,
  };

  const prevSprites = JSON.parse(localStorage.getItem("bipes@sprites") || "[]");

  const updatedSprites = [...prevSprites, newSprite];

  localStorage.setItem("bipes@sprites", JSON.stringify(updatedSprites));

  showSaveConfirmation();
  closeSaveSpriteModal();
}

function generateArray() {
  const design = [];
  const gridRows = gridContainer.querySelectorAll(".grid-item");

  let rowArray = [];

  gridRows.forEach((cell, index) => {
    rowArray.push(cell.classList.contains("active") ? 1 : 0);

    if ((index + 1) % cols === 0) {
      design.push([...rowArray]);
      rowArray = [];
    }
  });

  return JSON.stringify(design);
}

function showSaveConfirmation() {
  const confirmationMessage = document.createElement("div");
  confirmationMessage.id = "confirmation-message";
  confirmationMessage.innerText = "Design salvo com sucesso!";
  document.body.appendChild(confirmationMessage);

  setTimeout(() => {
    confirmationMessage.remove();
  }, 2000);
}

function updateGridSize() {
  rows = parseInt(document.getElementById("rowCount").value, 10);
  if (aspectRatio === "2:1") {
    cols = rows * 2;
  } else if (aspectRatio === "1:1") {
    cols = rows;
  }
  updateInputs();
  initializeGrid();
}

function updateInputs() {
  document.getElementById("rowCount").value = rows;
  document.getElementById("colCount").value = cols;
}

function toggleEraser() {
  isErasing = !isErasing;
  const eraserButton = document.querySelector("#sprite-controls button:nth-child(1)");
  const eraserIcon = document.getElementById("eraser-icon");

  if (isErasing) {
    eraserIcon.setAttribute("name", "eraser");
    eraserButton.innerHTML =
      '<box-icon name="eraser" color="#333333" id="eraser-icon"></box-icon>';
  } else {
    eraserIcon.setAttribute("name", "pencil");
    eraserButton.innerHTML =
      '<box-icon name="pencil" color="#333333" id="eraser-icon"></box-icon>';
  }
}

function changeAspectRatio() {
  aspectRatio = document.getElementById("aspectRatio").value;
  updateGridSize();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "E" || event.key === "e") {
    toggleEraser();
  } else if (event.ctrlKey && event.key === "z") {
    undo();
  } else if (event.ctrlKey && event.key === "y") {
    redo();
  }
});

function openSaveSpriteModal() {
  const spriteData = getSpriteData();

  if (spriteData.length === 0) {
    alert("Nenhum sprite para salvar!");
    return;
  }

  document.getElementById("saveSpriteModal").style.display = "block";
}

function closeSaveSpriteModal() {
  document.getElementById("saveSpriteModal").style.display = "none";
}

initializeGrid();
