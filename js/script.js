import { WriterApp } from "./writer.js";
import { ReaderApp } from "./reader.js";
import { IndexUserInterface } from "./IndexUserInterface.js";

const page = document.body.dataset.page;

if (page === "index") {
    new IndexUserInterface();
}

if (page === "writer") {
    new WriterApp();
}

if (page === "reader") {
    new ReaderApp();
}
