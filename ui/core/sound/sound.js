const verifyAmadoBoardIsSelected = () => {
  // verifica se a AmadoBoard está selecionada e exibe o conteúdo de Som
  const valueDeviceSelector = document.getElementById("device_selector").value;

  const tabSound = document.getElementById("tab_sound");
  const contentSound = document.getElementById("containerSound");

  if (valueDeviceSelector === "AmadoBoard") {
    tabSound.style.display = "block";
    contentSound.style.display = "block";
  }else{
      tabSound.style.display = "none";
      contentSound.style.display = "none";
  }
};

verifyAmadoBoardIsSelected();

document
  .getElementById("device_selector")
  .addEventListener("change", verifyAmadoBoardIsSelected);

function openModal() {
  document.getElementById("saveSoundModal").style.display = "block";
}

function closeModal() {
  document.getElementById("saveSoundModal").style.display = "none";
}

// Eventos de clique para abrir e fechar o modal
document.getElementById("openModalBtn").onclick = openModal;
document.getElementById("closeModalBtn").onclick = closeModal;
document.getElementById("cancelBtn").onclick = closeModal;