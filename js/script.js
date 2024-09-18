/*let container = document.getElementById("cv-container");

// Fonction pour charger le contenu d'un fichier CV
function loadCV(cvPath) {
    return fetch(cvPath)
        .then(response => response.text())
        .catch(error => console.error('Erreur de chargement du CV :', error));
}

// Fonction pour charger une image de profil
function loadImage(imagePath) {
    return fetch(imagePath)
        .then(response => response.blob())
        .then(blob => {
            let img = document.createElement('img');
            img.src = URL.createObjectURL(blob);
            return img;
        })
        .catch(error => console.error('Erreur de chargement de l\'image :', error));
}

// Parcourir les répertoires et charger les CVs et les images de profil
for (let i = 1; i <= 24; i++) {
    let cvPath = `chemin_vers_le_repertoire_${i}/cv.html`; // Mettez à jour le chemin
    let imagePath = `chemin_vers_le_repertoire_${i}/profile.jpg`; // Mettez à jour le chemin

    // Charger le CV et l'image de profil
    Promise.all([loadCV(cvPath), loadImage(imagePath)])
        .then(([cvContent, profileImage]) => {
            let cvElement = document.createElement("div");
            cvElement.classList.add("cv");

            // Afficher le contenu du CV et l'image de profil
            cvElement.innerHTML = cvContent;
            cvElement.appendChild(profileImage);

            // Ajouter le CV à la page
            container.appendChild(cvElement);
        });
}*/

// script.js
function afficherAll(){
    location.href = "allCvs.html";
    // gggggggggggggggggggg
   /* const container = document.getElementById("cv-container");

    const t=new Array(24)
    
    document.getElementById("my-script").src=`db/Cvs.js`;
    for (let i = 0; i <= 2; i++) {
           
        t[0]=
        document.getElementById("style").href=`css/style${i}.css`;

       
            const cvElement = document.createElement("div");
            cvElement.classList.add("cv");

            cvElement.innerHTML = `
            <link rel="stylesheet" href="css/style${i}.css" />
            <div class="left-column">
            <img src="db/images/image${i}.png" alt="Profile Picture" class="profile-picture" />
            <div class="contact-info">
                <span class="name"><strong>${Cvs[i].profile.firstName} ${Cvs[i].profile.lastName}</strong></span>
                <span class="birthdate">${Cvs[i].profile.birthday.year}/${Cvs[i].profile.birthday.month}/${Cvs[i].profile.birthday.day}</span>
                <span class="phone">${Cvs[i].profile.phone}</span>
                <span class="email" >${Cvs[i].profile.email}</span>
                <span class="address" >${Cvs[i].profile.address}</span>
                <span class="Links">${Cvs[i].profile.links[0]}</span>
                <span class="Links">${Cvs[i].profile.links[1]}</span>
            </div>
            <div class="languages">
                <span class="section-title">Langues</span>
                <div classe="language">
                  <span>${Cvs[i].languages[0].language}: ${Cvs[i].languages[0].level}</span>
                  <span>${Cvs[i].languages[1].language}: ${Cvs[i].languages[1].level}</span>
                </div>
            </div>
        </div>
        <div class="right-column">
            <div class="professional-summary">
                <span class="section-title" id="profile-summary-title">${Cvs[i].profile.firstName} ${Cvs[i].profile.lastName}</span>
                <span id="profile-summary">${Cvs[i].professionalSummary}</span>
            </div>
            <div class="education">
                <span class="section-title">Éducation</span>
                <div id="education"></div>
            </div>
            <div class="technology-skills">
                <span class="section-title">Compétences Techniques</span>
                <div id="technology-skills"></div>
            </div>
            <div class="experiences">
                <span class="section-title">Stages et Projets Académiques</span>
                <div id="experiences"></div>
            </div>
            <div class="soft-skills">
                <span class="section-title">Compétences Personnelles</span>
                <span id="soft-skills"></span>
            </div>
        </div>
            `;

            container.appendChild(cvElement);
        };

        document.head.appendChild(script);

    }*/
}

