
let currentIndex = 0;

function loadCvFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    currentIndex = parseInt(urlParams.get('index'), 10);
    displaySelectedCv();
}

function displaySelectedCv() {
    let container = document.getElementById('cv-container');
    container.innerHTML = '';

    const cv = Cvs[currentIndex];
    const cvHTML = `
        <div class="cv cv-container">
            <link rel="stylesheet" href="css/style${currentIndex}.css" />
            <div class="left-column">
                <img id="profile-photo-${currentIndex}" src="${cv.profile.photo}" alt="Profile Photo" class="profile-picture">
                <div class="name" id="profile-name-${currentIndex}">Etudiante en Master Qualité du Logiciel (MQL)</div>
                <div class="birthdate" id="profile-birthdate-${currentIndex}">Date de Naissance: ${cv.profile.birthday.day}/${cv.profile.birthday.month}/${cv.profile.birthday.year}</div>
                <div class="phone" id="profile-phone-${currentIndex}">Téléphone: ${cv.profile.phone}</div>
                <div class="email" id="profile-email-${currentIndex}">Email: <a href="mailto:${cv.profile.email}">${cv.profile.email}</a></div>
                <div class="address" id="profile-address-${currentIndex}">Adresse: ${cv.profile.address}</div>
                <div class="linkedin" id="profile-linkedin-${currentIndex}">Lien vers LinkedIn : <a href="${cv.profile.links[0]}">${cv.profile.links[0]}</a></div>
                <div class="github" id="profile-github-${currentIndex}">Lien vers GitHub : <a href="${cv.profile.links[1]}">${cv.profile.links[1]}</a></div>
            </div>
            <div class="right-column">
                <div class="profile-summary">
                    <div class="profile-summary-title" id="profile-summary-title-${currentIndex}">${cv.profile.firstName} ${cv.profile.lastName}</div>
                    <div class="profile-summary-content" id="profile-summary-${currentIndex}">${cv.profile.professionalSummary}</div>
                </div>
                <div class="languages" id="languages-${currentIndex}"></div>
                <div class="education" id="education-${currentIndex}"></div>
                <div class="technology-skills" id="technology-skills-${currentIndex}"></div>
                <div class="experiences" id="experiences-${currentIndex}"></div>
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

function goBack() {
    window.location.href = 'index.html';
}

