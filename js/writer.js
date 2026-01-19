import { Note } from "./Note.js";
import { MESSAGES } from "../lang/messages/en/user.js";

const STORAGE_KEY = "notes";

export class WriterApp {
    constructor() {
        this.notes = [];

        // DOM elements
        this.container = document.querySelector("#notesContainer");
        this.statusLabel = document.querySelector("#status");
        this.addBtn = document.querySelector("#addNoteBtn");
        this.backBtn = document.querySelector("#backBtn");


        
        this.addBtn.textContent = MESSAGES.ADD_NOTE; // "Add"

        
        this.backBtn.textContent = MESSAGES.BACK; // "Back"

        // Event listeners
        this.addBtn.addEventListener("click", () => {
            this.addNote("", Date.now());
        });

        this.backBtn.addEventListener("click", () => {
            window.location.href = MESSAGES.INDEX;
        });

        // Load saved notes
        this.loadNotes();

        // Start autosave every 2 seconds
        this.startAutoSave();
    }

    loadNotes() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return;

        const data = JSON.parse(stored);
        data.forEach(note => {
            this.addNote(note.content, note.id);
        });
    }

    addNote(content, id) {
        const note = new Note(id, content, (noteId) => {
            this.removeNote(noteId);
        });

        this.notes.push(note);

        // Append note inside container
        this.container.appendChild(note.getElement());
    }

    removeNote(id) {
        this.notes = this.notes.filter(n => n.id !== id);
        this.saveNotes();
    }

    saveNotes() {
        const data = this.notes.map(n => n.getData());
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        this.updateStatus(MESSAGES.STORE);
    }

    updateStatus(label) {
        const time = new Date().toLocaleTimeString();
        this.statusLabel.textContent = `${label} ${time}`;
    }

    startAutoSave() {
        setInterval(() => {
            this.saveNotes();
            this.updateStatus(MESSAGES.UPDATED);
        }, 2000);
    }
}
