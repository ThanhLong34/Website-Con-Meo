; (() => {
    document.getElementById("image-cat").onclick = function () {
        document.getElementById("image-checkbox").checked = true;
        setTimeout(() => {
            document.getElementById("image-checkbox").checked = false;
        }, 1200);
    }
})();