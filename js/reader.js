import { MESSAGES } from "../lang/messages/en/user.js";

const STORAGE_KEY = "notes";

export class ReaderApp {
    constructor() {
        this.container = document.querySelector("#notesContainer");
        this.statusLabel = document.querySelector("#status");

        
        this.backBtn = document.createElement("button");
        this.backBtn.textContent = MESSAGES.BACK;
        this.backBtn.classList.add("back-btn");
        this.backBtn.addEventListener("click", () => {
            window.location.href = MESSAGES.INDEX;
        });


        
        this.container.parentElement.appendChild(this.backBtn);

        this.loadNotes();
        this.startAutoRefresh();
    }

    loadNotes() {
        this.container.innerHTML = "";

        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return;

        const data = JSON.parse(stored);
        data.forEach(note => {
            const box = document.createElement("div");
            box.classList.add("note-box");
            box.textContent = note.content;
            this.container.appendChild(box);
        });

        this.updateStatus();
    }

    updateStatus() {
        const time = new Date().toLocaleTimeString();
        this.statusLabel.textContent = `${MESSAGES.UPDATED} ${time}`;
    }

    startAutoRefresh() {
        setInterval(() => {
            this.loadNotes();
        }, 2000);
    }
}
