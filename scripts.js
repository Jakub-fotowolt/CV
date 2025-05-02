function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = (section.id === sectionId) ? 'block' : 'none';
    });
}

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-lang-pl], [data-lang-en]');

    elements.forEach(element => {
        const newContent = element.getAttribute(`data-lang-${language}`);
        if (!newContent) return;

        if (element.id === 'about-section') {
            const formatted = newContent
                .replace(/^\s+|\s+$/g, '')
                .replace(/\n\s*/g, '<br>&nbsp;&nbsp;&nbsp;');
            element.innerHTML = '&nbsp;&nbsp;&nbsp;' + formatted;
        } else {
            if (newContent.includes('<br>') || newContent.includes('&nbsp;')) {
                element.innerHTML = newContent;
            } else {
                element.textContent = newContent;
            }
        }
    });

    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        const text = button.getAttribute(`data-lang-${language}`);
        if (text) button.textContent = text;
    });

    const sectionItems = document.querySelectorAll('.section li');
    sectionItems.forEach(item => {
        const text = item.getAttribute(`data-lang-${language}`);
        if (text) item.textContent = text;
    });

    // ✅ Ten blok MUSI być poza forEach!
    const img = document.getElementById("profile-pic");
    if (img) {
        if (language === "pl") {
            img.src = "obrazek1.jpg";
        } else if (language === "en") {
            img.src = "obrazek2.jpg";
        }
    }
}
