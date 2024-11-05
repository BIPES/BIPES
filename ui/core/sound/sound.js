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

// // Eventos de clique para abrir e fechar o modal
document.getElementById("openModalBtn").onclick = openModal;
document.getElementById("cancelBtn").onclick = closeModal;

// array de notas musicais com seus nomes e frequências
const notes = [
    { name: 'C4', frequency: 261.63 },
    { name: 'D4', frequency: 293.66 },
    { name: 'E4', frequency: 329.63 },
    { name: 'F4', frequency: 349.23 },
    { name: 'G4', frequency: 392.00 },
    { name: 'A4', frequency: 440.00 },
    { name: 'B4', frequency: 493.88 },
    { name: 'C5', frequency: 523.25 }
  ];
  
  // seleciona o contêiner onde as notas serão exibidas
  const pianoContainer = document.getElementById('piano-container');
  let audioContext = null; // variável para o contexto de áudio
  let activeNotes = []; // array para armazenar notas ativas
  let loopTimeout = null; // variável para gerenciar o loop
  const pianoCols = 32;  // define o número de colunas como 32
  
  // cria a interface do piano
  notes.forEach((note, rowIndex) => {
    for (let colIndex = 0; colIndex < pianoCols; colIndex++) {
        const noteDiv = document.createElement('div'); // cria um elemento div para cada nota
        noteDiv.classList.add('note', note.name); // adiciona classes para estilo e identificação
        noteDiv.dataset.note = note.name; // armazena o nome da nota em um atributo de dados
        noteDiv.dataset.frequency = note.frequency; // armazena a frequência da nota em um atributo de dados
        noteDiv.dataset.row = rowIndex; // armazena a linha da nota
        noteDiv.dataset.col = colIndex; // armazena a coluna da nota
        // adiciona um evento de clique para alternar a ativação da nota
        noteDiv.addEventListener('click', () => {
            noteDiv.classList.toggle('active');
        });
        pianoContainer.appendChild(noteDiv); // adiciona o elemento ao contêiner
    }
  });
  
  // função para tocar a melodia
  function playMelody() {
    if (audioContext) {
        audioContext.close(); // fecha o contexto de áudio anterior, se existir
    }
    audioContext = new (window.AudioContext || window.webkitAudioContext)(); // cria um novo contexto de áudio
  
    const bpm = document.getElementById('bpm').value; // obtém o valor de BPM do elemento de entrada
    const beatDuration = 60000 / bpm; // calcula a duração de cada batida em milissegundos
  
    activeNotes = []; // reinicializa as notas ativas
    let currentNote = null; // variável para a nota atual
    let duration = 0; // duração da nota atual
  
    // percorre as colunas do piano
    for (let col = 0; col < pianoCols; col++) {
        let hasActiveNote = false; // flag para verificar se há uma nota ativa
  
        // percorre as linhas das notas
        for (let row = 0; row < notes.length; row++) {
            const noteDiv = document.querySelector(`.note[data-row="${row}"][data-col="${col}"]`); // seleciona o elemento da nota
  
            // verifica se a nota está ativa
            if (noteDiv.classList.contains('active')) {
                // se a nota atual é a mesma que a nota clicada, incrementa a duração
                if (currentNote && currentNote.note === noteDiv.dataset.note) {
                    duration++;
                } else {
                    // se existe uma nota atual, adiciona ao array de notas ativas
                    if (currentNote) {
                        currentNote.duration = duration; // define a duração da nota atual
                        activeNotes.push(currentNote);
                    }
                    // define a nova nota atual
                    currentNote = {
                        note: noteDiv.dataset.note,
                        frequency: noteDiv.dataset.frequency,
                        duration: 1 // inicializa a duração
                    };
                    duration = 1; // reinicia a duração para a nova nota
                }
                hasActiveNote = true; // marca que há uma nota ativa
            }
        }
  
        // adiciona a última nota ativa ao array
        if (currentNote) {
            currentNote.duration = duration; // define a duração
            activeNotes.push(currentNote);
            currentNote = null; // reseta a nota atual
            duration = 0; // reinicia a duração
        }
  
        // se não houver nota ativa na coluna, adiciona uma nota de silêncio
        if (!hasActiveNote) {
            activeNotes.push({
                note: null,
                frequency: null,
                duration: 1 // define duração padrão para silêncio
            });
        }
    }
  
    // função para executar o loop de reprodução
    function playLoop() {
        if (!audioContext) return; // verifica se o contexto de áudio existe
  
        let currentTime = 0; // tempo atual de reprodução
  
        // percorre as notas ativas e agenda sua reprodução
        activeNotes.forEach(note => {
            setTimeout(() => {
                if (audioContext) {
                    // se a nota não for nula, toca o tom
                    if (note.note) {
                        playTone(note.frequency, note.duration * beatDuration);
                    } else {
                        playSilence(note.duration * beatDuration); // toca silêncio
                    }
                }
            }, currentTime);
            currentTime += note.duration * beatDuration; // atualiza o tempo atual
        });
    }
  
    playLoop(); // inicia a reprodução do loop
  }
  
  // função para pausar a melodia
  function pauseMelody() {
    if (audioContext) {
        audioContext.close(); // fecha o contexto de áudio
        audioContext = null; // reseta o contexto
    }
  }
  
  // função para tocar uma nota com uma determinada frequência e duração
  function playTone(frequency, duration) {
    if (!audioContext) return; // verifica se o contexto de áudio existe
  
    const oscillator = audioContext.createOscillator(); // cria um oscilador
    oscillator.type = 'sine'; // define o tipo de onda
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // define a frequência
    oscillator.connect(audioContext.destination); // conecta o oscilador ao destino de áudio
    oscillator.start(); // inicia o oscilador
    oscillator.stop(audioContext.currentTime + duration / 1000); // para o oscilador após a duração
  }