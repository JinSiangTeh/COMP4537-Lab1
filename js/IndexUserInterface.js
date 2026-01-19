import { MESSAGES } from "../lang/messages/en/user.js";

export class IndexUserInterface {
    constructor() {
        this.root = document.body;
        this.createControls();
    }

    createControls() {
        
        document.title = MESSAGES.APP_TITLE;

        
        this.first_container = document.createElement("div");
        this.first_container.classList.add("title");

        this.title = document.createElement("h1");
        this.title.textContent = MESSAGES.APP_TITLE;

        this.first_container.appendChild(this.title);

        
        this.container = document.createElement("div");
        this.container.classList.add("hyperlink");

        
        this.link1 = document.createElement("a");
        this.link1.href = MESSAGES.READER;
        this.link1.textContent = MESSAGES.READER_PAGE;

        
        this.link2 = document.createElement("a");
        this.link2.href = MESSAGES.WRITER;
        this.link2.textContent = MESSAGES.WRITER_PAGE;

        
        this.container.appendChild(this.link1);
        this.container.appendChild(document.createElement("br"));
        this.container.appendChild(this.link2);

        
        this.root.appendChild(this.first_container);
        this.root.appendChild(this.container);
    }
}
