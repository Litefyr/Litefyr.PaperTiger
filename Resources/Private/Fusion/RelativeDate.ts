import getDate from "Packages/Carbon/Carbon.Editor.RelativeDate/Resources/Private/Assets/getDate.js";

document.addEventListener("papertiger-relativedate:init", () => {
    Alpine.data("relativeDate", ({ earliest, latest }) => ({
        min: null,
        max: null,
        init() {
            this.min = getDate(earliest);
            this.max = getDate(latest);
        },
    }));
});
