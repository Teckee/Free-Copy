document.body.addEventListener("keydown", function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode; // keyCode detection
    var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); // ctrl detection

    if (key == 67 && (ctrl || e.metaKey)) {
        /* Modify the copied text */
        /* Reference : https://stackoverflow.com/questions/2026335/how-to-add-extra-info-to-copied-web-text */

        // 1. Create a new cotainer, then hide it
        newdiv = document.createElement('div');
        newdiv.style.position = 'absolute';
        newdiv.style.left = '-99999px';

        // 2. Insert the container, fill it with the selection text, and define the new selection
        document.body.appendChild(newdiv);
        newdiv.innerHTML = window.getSelection();
        window.getSelection().selectAllChildren(newdiv);

        // 3. Exec copy command
        document.execCommand("Copy");

        // 4. Remove the created 
        window.setTimeout(function () {
            document.body.removeChild(newdiv);
        }, 100);
    }

}, false);