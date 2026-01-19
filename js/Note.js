export class Note {
    constructor(id, content, removeCallback) {
        this.id = id;
        this.removeCallback = removeCallback;

        // Create wrapper element
        this.element = document.createElement("div");
        this.element.classList.add("note-wrapper");

        // Create textarea
        this.textarea = document.createElement("textarea");
        this.textarea.value = content;
        this.textarea.classList.add("note-textarea");

        // Create Remove button
        this.removeBtn = document.createElement("button");
        this.removeBtn.textContent = "Remove";
        this.removeBtn.classList.add("note-remove-btn");
        this.removeBtn.addEventListener("click", () => this.remove());

        // Append textarea and remove button to wrapper
        this.element.appendChild(this.textarea);
        this.element.appendChild(this.removeBtn);
    }

    getElement() {
        return this.element;
    }

    remove() {
        this.element.remove();
        this.removeCallback(this.id);
    }

    getData() {
        return {
            id: this.id,
            content: this.textarea.value
        };
    }
}
