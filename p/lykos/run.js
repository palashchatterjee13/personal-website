const start_page_index = 1;
const end_page_index = 106;

var startup_id_array = [];

async function extractLinks() {
    const discovered = document.querySelectorAll(`.service-card h6 a`);

    for (const a of discovered) {
        startup_id_array.push(a.getAttribute(`href`).replace(/\/profile\//g, ``).replace(/\/startups/g, ``));
    }
}

async function extract() {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const getStartPageIndex = () => start_page_index;
    const getEndPageIndex = () => end_page_index;
    const getCurrentPage = () => parseInt(document.querySelector(`.page-item .page-link.active`).innerText);
    const moveToPageWithIndex = (i) => {
        const available = document.querySelectorAll(`.page-item .page-link.text-secondary`);

        for (const page of available) {
            if (parseInt(page.innerText) === i) {
                page.click()
            }
        }
    }

    if (getCurrentPage() != start_page_index) {
        console.warn(`SCRIPT: Execution aborted as the current page index "${getCurrentPage()}" is not same as specified start page index "${start_page_index}", please move to the correct start page index of "${start_page_index} to ensure seamless execution"`)
        return;
    }

    for (var c = getStartPageIndex(); c <= getEndPageIndex(); c++) {
        extractLinks();
        moveToPageWithIndex(c + 1);
        // console.clear();
        console.log(startup_id_array);
        await sleep(1500);
    }

    extractLinks();
}

await extract();
console.log(startup_id_array)

