const tabs = Array.from(document.getElementsByClassName('tab'));
const content = Array.from(document.getElementsByClassName('tab__content'));

let indexOfActiveTab = tabs.findIndex(tab => tab.classList.contains('tab_active'));
let activeContent = content.findIndex(cont => cont.classList.contains('tab__content_active'));


function setActiveTab(index) {
    indexOfActiveTab = index;
    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('tab_active');
        } else {
            tab.classList.remove('tab_active');
        }
    });
}

function setActiveContent(index) {
    activeContent = index;
    content.forEach((cont, i) => {
        if (i === index) {
            cont.classList.add('tab__content_active');
        } else {
            cont.classList.remove('tab__content_active');
        }
    });
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setActiveTab(index) + setActiveContent(index))}
);

