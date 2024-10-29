function newElement() {
    let li = document.createElement("li"); // Crée un nouvel élément <li>

    // Récupère la valeur des inputs
    let titleValue = document.getElementById("bookTitle").value; // valeur du titre
    let authorValue = document.getElementById("bookAuthor").value; // la valeur de l'auteur
    let literatureValue = document.getElementById("typeliterature").value; // le type de littérature

    // Vérifie si le titre, l'auteur ou le type de littérature est vide
    if (titleValue === '' || authorValue === '' || literatureValue === '') {
        alert("Vous n'avez pas rempli les champs requis !");
        return;
    }

    // Ajoute des classes Bootstrap pour le style
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Crée le texte à afficher dans le <li>
    let t = document.createTextNode(`Le nom du livre : ${titleValue} - L'auteur s'appelle : ${authorValue} (${literatureValue})`);
    li.appendChild(t);

    // Crée le conteneur pour suprimmer et pour la checkbox
    let buttonContainer = document.createElement("div");
    buttonContainer.className = "d-flex align-items-center";

    // Crée le bouton "Supprimer"
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm ms-2";// class boostrap pour le bouton
    deleteButton.textContent = "Supprimer";// texte du bouton
    deleteButton.onclick = function() { // fonction du bouton qui suprime quand on clique 
        li.remove(); // Supprime le livre de la liste
    };

    // Crée la checkbox
    let readCheckbox = document.createElement("input");
    readCheckbox.className = "form-check-input me-2";
    readCheckbox.type = "checkbox";
    readCheckbox.id = `checkbox-${Date.now()}`; // Donne un ID unique

    // Crée le label pour la checkbox
    let readLabel = document.createElement("label");
    readLabel.className = "form-check-label";
    readLabel.textContent = "Je l'ai lu.";
    readLabel.htmlFor = readCheckbox.id;

    // Ajoute la checkbox et le label au conteneur
    buttonContainer.appendChild(readCheckbox);
    buttonContainer.appendChild(readLabel);
    buttonContainer.appendChild(deleteButton);

    // Ajoute le conteneur de boutons au <li>
    li.appendChild(buttonContainer);

    document.getElementById("addBook").appendChild(li); //ajoute les livre dans le <li> 

    // Réinitialise les inputs
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
}

// Fonction de recherche
