function disableOthers(currentActive) {
    if (currentActive) {
        currentActive.classList.remove('active');
        const panel = currentActive.nextElementSibling;
        panel.style.maxHeight = null;
    }
}

function attachClicks(acc) {
    let currentActive;

    for (let i = 0; i < acc.length; i++) {
        if (acc[i].classList.contains('active')) {
            currentActive = acc[i];
        }
        acc[i].addEventListener("click", function () {
            disableOthers(currentActive);
            acc[i].classList.add("active");
            currentActive = acc[i];
            const panel = acc[i].nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

function accordion(selector, options = []) {

    const mainBlock = document.querySelector(selector);
    let accordionElements = [];
    let currentActive = mainBlock.querySelector('.active');

    for (let i = 0; i < options.length; i++) {
        let element = options[i];

        const accordionElement = document.createElement("button");
        const panel = document.createElement("div");
        const paragraph = document.createElement("p");


        accordionElement.classList.add("accordion");
        accordionElement.textContent = element.title;

        panel.classList.add("panel");
        panel.appendChild(paragraph);

        paragraph.textContent = element.content;

        mainBlock.appendChild(accordionElement);
        mainBlock.appendChild(panel);
        panel.appendChild(paragraph);
        accordionElements.push(accordionElement)
    }
    attachClicks(accordionElements);
}



export { accordion };