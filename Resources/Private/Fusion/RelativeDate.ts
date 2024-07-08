import getDate from "Packages/Carbon/Carbon.Editor.RelativeDate/Resources/Private/Assets/getDate.js";
import eventListener from "Packages/Carbon/Carbon.FileLoader/Resources/Private/Assets/EventListener";

eventListener("papertiger-relativedate:init", () => {
    Alpine.data("relativeDate", ({ earliest, latest }) => ({
        min: null,
        max: null,
        init() {
            this.min = getDate(earliest);
            this.max = getDate(latest);
        },
    }));
});
