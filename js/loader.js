function cvload() {
    displayCVs(Cvs);
}
//********************************************************** */

function displayCVs(cvArray) {
    let container = document.getElementById('cv-container');
    container.innerHTML = ''; // Clear the container

    cvArray.forEach((cv, i) => {
        // Vérifier que cv et cv.profile existent
        if (cv && cv.profile) {
            const cvHTML = `
                <div class="cv cv-container" onclick="selectCv(${i})">
                    <div class="left-column">
                        <img id="profile-photo-${i}" src="${cv.profile.photo}" alt="Profile Photo" class="profile-picture">
                        <div class="name" id="profile-name-${i}">${cv.profile.firstName} ${cv.profile.lastName.toUpperCase()}</div>
                        <div class="birthdate" id="profile-birthdate-${i}">Date de Naissance: ${cv.profile.birthday.day}/${cv.profile.birthday.month}/${cv.profile.birthday.year}</div>
                        <div class="phone" id="profile-phone-${i}">Téléphone: ${cv.profile.phone}</div>
                        <div class="email" id="profile-email-${i}">Email: <a href="mailto:${cv.profile.email}">${cv.profile.email}</a></div>
                        <div class="address" id="profile-address-${i}">Adresse: ${cv.profile.address}</div>
                        <div class="linkedin" id="profile-linkedin-${i}">Lien vers LinkedIn : <a href="${cv.profile.links[0]}">${cv.profile.links[0]}</a></div>
                        <div class="github" id="profile-github-${i}">Lien vers GitHub : <a href="${cv.profile.links[1]}">${cv.profile.links[1]}</a></div>
                        <span class="section-title">Langues</span>
                        <div class="languages" id="languages-${i}">Langues</div>
                    </div>
                    <div class="right-column">
                        <div class="profile-summary">
                            <div class="section-title" id="profile-summary-title-${i}">${cv.profile.firstName} ${cv.profile.lastName.toUpperCase()}</div>
                            <div class="profile-summary-content" id="profile-summary-${i}">${cv.profile.professionalSummary}</div>
                        </div>
                        <span class="section-title">Éducation</span>
                        <div class="education" id="education-${i}">
                        </div>
                        <span class="section-title">Competences Techniques</span>
                        <div class="technology-skills" id="technology-skills-${i}">
                        </div>
                        <span class="section-title">Experiences et Projets pedagogiques</span>
                        <div class="experiences" id="experiences-${i}">
                        </div>
                        <span class="section-title">Communication</span>
                        <div class="soft-skills" id="soft-skills-${i}">${cv.softSkills}</div>
                    </div>
                </div>
            `;
        
            container.innerHTML += cvHTML;
        
            let languagesHTML = '';
            cv.languages.forEach(lang => {
                languagesHTML += `<div class="language">${lang.language}: ${lang.level}</div>`;
            });
            document.getElementById(`languages-${i}`).innerHTML = languagesHTML;
        
            let educationHTML = '';
            cv.education.forEach(edu => {
                educationHTML += `
                    <div class="education-item">
                        <div class="degree-container">
                            <span class="degree">${edu.diploma}</span>
                            <span class="year">${edu.year}</span>
                        </div>
                        <span class="organisation">${edu.organisation}</span>
                    </div>`;
            });
            document.getElementById(`education-${i}`).innerHTML = educationHTML;
        
            let technologySkillsHTML = '';
            cv.technologySkills.forEach(skill => {
                technologySkillsHTML += `<div class="skill-item"><span class="skill-title">${skill.skill + ': ' + skill.details}</span></div>`;
            });
            document.getElementById(`technology-skills-${i}`).innerHTML = technologySkillsHTML;
        
            let experiencesHTML = '';
            cv.experiences.forEach(exp => {
                experiencesHTML += `
                    <div class="experience-item">
                        <span class="title">${exp.title}</span>
                        <span class="description">${exp.title} les technologies utilisées sont :</span>
                        ${exp.technologies ? `<span class="technologies">${exp.technologies}</span>` : ''}
                    </div>`;
            });
            document.getElementById(`experiences-${i}`).innerHTML = experiencesHTML;
        }
    });
}

function scroll(){
   location.href = "cv.html";
}

function selectCv(index) {
   // location.href = "allCvs.html";
    currentIndex = index;
    displaySelectedCv();
    document.getElementById('navigation-buttons').style.display = 'block';
}

function displayCvByIndex(index) {
    if (index >= 0 && index < Cvs.length) {
        currentIndex = index;
        displaySelectedCv();
    } else {
        alert("Index de CV invalide.");
    }
}

function displaySelectedCv() {
    let container = document.getElementById('cv-container');
    container.innerHTML = '';

    const cv = Cvs[currentIndex];
    if (cv && cv.profile) {
        const cvHTML = `
            <div class="cv cv-container">
                <link rel="stylesheet" href="css/style${currentIndex}.css" />
                <div class="left-column">
                    <img id="profile-photo-${currentIndex}" src="${cv.profile.photo}" alt="Profile Photo" class="profile-picture">
                    <div class="name" id="profile-name-${currentIndex}">${cv.profile.firstName} ${cv.profile.lastName.toUpperCase()}</div>
                    <div class="birthdate" id="profile-birthdate-${currentIndex}">Date de Naissance: ${cv.profile.birthday.day}/${cv.profile.birthday.month}/${cv.profile.birthday.year}</div>
                    <div class="phone" id="profile-phone-${currentIndex}">Téléphone: ${cv.profile.phone}</div>
                    <div class="email" id="profile-email-${currentIndex}">Email: <a href="mailto:${cv.profile.email}">${cv.profile.email}</a></div>
                    <div class="address" id="profile-address-${currentIndex}">Adresse: ${cv.profile.address}</div>
                    <div class="linkedin" id="profile-linkedin-${currentIndex}">Lien vers LinkedIn : <a href="${cv.profile.links[0]}">${cv.profile.links[0]}</a></div>
                    <div class="github" id="profile-github-${currentIndex}">Lien vers GitHub : <a href="${cv.profile.links[1]}">${cv.profile.links[1]}</a></div>
                    <span class="section-title">Langues</span>
                        <div class="languages" id="languages-${currentIndex}">Langues</div>
                </div>
                <div class="right-column">
                    <div class="profile-summary">
                        <div class="profile-summary-title" id="profile-summary-title-${currentIndex}">${cv.profile.firstName} ${cv.profile.lastName.toUpperCase()}</div>
                        <div class="profile-summary-content" id="profile-summary-${currentIndex}">${cv.profile.professionalSummary}</div>
                    </div>
                    <span class="section-title">Education</span>
                    <div class="education" id="education-${currentIndex}"></div>
                    <span class="section-title">Compétences et Technoliges </span>
                    <div class="technology-skills" id="technology-skills-${currentIndex}"></div>
                    <span class="section-title">Experiences et Projets pedagogiques</span>
                    <div class="experiences" id="experiences-${currentIndex}"></div>
                    <span class="section-title">Communication</span>
                    <div class="soft-skills" id="soft-skills-${currentIndex}">${cv.softSkills}</div>
                </div>
            </div>
        `;
        
        container.innerHTML += cvHTML;
        
        let languagesHTML = '';
        cv.languages.forEach(lang => {
            languagesHTML += `<div class="language">${lang.language}: ${lang.level}</div>`;
        });
        document.getElementById(`languages-${currentIndex}`).innerHTML = languagesHTML;
        
        let educationHTML = '';
        cv.education.forEach(edu => {
            educationHTML += `
                <div class="education-item">
                    <div class="degree-container">
                        <span class="degree">${edu.diploma}</span>
                        <span class="year">${edu.year}</span>
                    </div>
                    <span class="organisation">${edu.organisation}</span>
                </div>`;
        });
        document.getElementById(`education-${currentIndex}`).innerHTML = educationHTML;
        
        let technologySkillsHTML = '';
        cv.technologySkills.forEach(skill => {
            technologySkillsHTML += `<div class="skill-item"><span class="skill-title">${skill.skill + ': ' + skill.details}</span></div>`;
        });
        document.getElementById(`technology-skills-${currentIndex}`).innerHTML = technologySkillsHTML;
        
        let experiencesHTML = '';
        cv.experiences.forEach(exp => {
            experiencesHTML += `
                <div class="experience-item">
                    <span class="title">${exp.title}</span>
                    <span class="description">${exp.description}</span>
                    ${exp.technologies ? `<span class="technologies">${exp.technologies}</span>` : ''}
                </div>`;
        });
        document.getElementById(`experiences-${currentIndex}`).innerHTML = experiencesHTML;
    } else {
        alert("CV invalide.");
    }
}

function firstCv() {
    currentIndex = 0;
    displaySelectedCv();
}

function lastCv() {
    currentIndex = Cvs.length - 1;
    displaySelectedCv();
}

function previousCv() {
    if (currentIndex > 0) {
        currentIndex--;
        displaySelectedCv();
    }
}

function nextCv() {
    if (currentIndex < Cvs.length - 1) {
        currentIndex++;
        displaySelectedCv();
    }
}

function searchCV() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredCVs = Cvs.filter(cv => {
        if (cv && cv.profile) {
            const fullName = `${cv.profile.firstName.toLowerCase()} ${cv.profile.lastName.toLowerCase()}`;
            const nameMatch = fullName.includes(searchInput);
            
            const techMatch = cv.experiences.some(exp => 
                Array.isArray(exp.technologies) && exp.technologies.some(tech => tech.toLowerCase().includes(searchInput))
            );
            const skills = cv.technologySkills.some(skill => 
                Array.isArray(skill.details) && skill.details.some(det => det.toLowerCase().includes(searchInput))
            );

            return nameMatch || techMatch || skills;
        }
        return false;
    });

    if (filteredCVs.length > 0) {
        displayCVs(filteredCVs);
    } else {
        alert("Aucun CV trouvé.");
    }
}


function create(){
    location.href = "addCvPage.html";
}