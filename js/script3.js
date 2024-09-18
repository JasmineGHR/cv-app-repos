
function addDiplome() {
    const container = document.getElementById('educationContainer');
    const newEducation = document.createElement('div');
    newEducation.classList.add('education-section');
    newEducation.innerHTML = `
        <label for="diploma">Diplôme :</label>
        <input type="text" id="diploma" name="diploma[]" required>
        
        <label for="organisation">Organisation :</label>
        <input type="text" id="organisation" name="organisation[]" required>
        
        <label for="year">Année :</label>
        <input type="number" id="year" name="year[]" required>
    `;
    container.appendChild(newEducation);
}
function addSkill() {
    const container = document.getElementById('skillsContainer');
    const newSkill = document.createElement('div');
    newSkill.classList.add('skill-section');
    newSkill.innerHTML = `
        <label for="skillName">Compétence :</label>
        <input type="text" id="skillName" name="skillName[]" required>
        
        <label for="detail">Détail :</label>
        <textarea id="detail" name="detail[]" required></textarea>
    `;
    container.appendChild(newSkill);
}
function addExperience() {
    const container = document.getElementById('experienceContainer');
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience-section');
    newExperience.innerHTML = `
        <label for="type">Type :</label>
        <input type="text" id="type" name="type[]" required>
        
        <label for="organisationExperience">Organisation :</label>
        <input type="text" id="organisationExperience" name="organisationExperience[]" required>
        
        <label for="title">Titre :</label>
        <input type="text" id="title" name="title[]" required>
        
        <label for="technologies">Technologies :</label>
        <input type="text" id="technologies" name="technologies[]" required>
        
        <label for="experienceYear">Année :</label>
        <input type="number" id="experienceYear" name="experienceYear[]" required>
        
        <label for="duration">Durée :</label>
        <input type="text" id="duration" name="duration[]" required>
    `;
    container.appendChild(newExperience);
}
function addLanguage() {
    const container = document.getElementById('languagesContainer');
    const newLanguage = document.createElement('div');
    newLanguage.classList.add('language-section');
    newLanguage.innerHTML = `
        <label for="languageName">Langue :</label>
        <input type="text" id="languageName" name="languageName[]" required>
        
        <label for="level">Niveau :</label>
        <input type="text" id="level" name="level[]" required>
    `;
    container.appendChild(newLanguage);
}

function addSoftSkill() {
    const container = document.getElementById('softSkillsContainer');
    const newSoftSkill = document.createElement('div');
    newSoftSkill.classList.add('softSkill-section');
    newSoftSkill.innerHTML = `
        <label for="softSkill">Compétence Douce :</label>
        <input type="text" id="softSkill" name="softSkill[]" required>
    `;
    container.appendChild(newSoftSkill);
}

function addInterest() {
    const container = document.getElementById('interestsContainer');
    const newInterest = document.createElement('div');
    newInterest.classList.add('interest-section');
    newInterest.innerHTML = `
        <label for="interest">Intérêt :</label>
        <input type="text" id="interest" name="interest[]" required>
    `;
    container.appendChild(newInterest);
}
function addCv() {
    const profile = {
        photo: "", // Laisser vide ou ajouter un champ pour télécharger une photo
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        professionalSummary: document.getElementById('summary').value,
        links: [] // Ajouter des champs pour saisir les liens si nécessaire
    };

    const education = [];
    document.querySelectorAll('#educationContainer .education-section').forEach(section => {
        education.push({
            diploma: section.querySelector('input[name="diploma"]').value,
            organisation: section.querySelector('input[name="organisation"]').value,
            year: section.querySelector('input[name="year"]').value
        });
    });

    const technologySkills = [];
    document.querySelectorAll('#skillsContainer .skill-section').forEach(section => {
        technologySkills.push({
            skill: section.querySelector('input[name="skillName"]').value,
            details: section.querySelector('textarea[name="detail"]').value.split(',')
        });
    });

    const experiences = [];
    document.querySelectorAll('#experienceContainer .experience-section').forEach(section => {
        experiences.push({
            type: section.querySelector('input[name="type"]').value,
            organisation: section.querySelector('input[name="organisationExperience"]').value,
            title: section.querySelector('input[name="title"]').value,
            technologies: section.querySelector('input[name="technologies"]').value.split(','),
            year: section.querySelector('input[name="experienceYear"]').value,
            duration: section.querySelector('input[name="duration"]').value
        });
    });

    const languages = [];
    document.querySelectorAll('#languagesContainer .language-section').forEach(section => {
        languages.push({
            language: section.querySelector('input[name="languageName"]').value,
            level: section.querySelector('input[name="level"]').value
        });
    });

    const softSkills = [];
    document.querySelectorAll('#softSkillsContainer .softSkill-section').forEach(section => {
        softSkills.push(section.querySelector('input[name="softSkill"]').value);
    });

    const interests = [];
    document.querySelectorAll('#interestsContainer .interest-section').forEach(section => {
        interests.push(section.querySelector('input[name="interest"]').value);
    });

    const newCv = {
        profile,
        education,
        technologySkills,
        experiences,
        softSkills,
        languages,
        interests
    };

    Cvs.push(newCv);
    console.log(Cvs);
    alert('CV ajouté avec succès !');
}