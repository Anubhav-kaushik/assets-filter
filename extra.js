const filterToggleBtnSelector = '#toggle-filter-btn';
const filterBtnContainerSelector = '.filter-btns-container';
const selectionBoxes = document.querySelectorAll(`${filterBtnContainerSelector} select`);


function toggleFilter(filtersSelector, activeFilter) {
    const filters = document.querySelectorAll(filtersSelector);

    for (let filter of filters) {
        filter.style.display = 'none';

        if (filter.dataset.filter == activeFilter) {
            filter.style.display = 'block';
        }
    }
}

function resetSelection(selectionBox) {
    selectionBox.value = 'all';
}


const filterToggleBtn = document.querySelector(filterToggleBtnSelector);


toggleFilter(filterBtnContainerSelector, filterToggleBtn.dataset.filter);

filterToggleBtn.addEventListener('click', function () {
    const currentFilter = this.dataset.filter;
    if (currentFilter == '1') {
        this.dataset.filter = '2';
    } else {
        this.dataset.filter = '1';
    }

    toggleFilter(filterBtnContainerSelector, this.dataset.filter);
    for (let selectBox of selectionBoxes) {
        resetSelection(selectBox);
    }

    const btnContainers = document.querySelectorAll('.btn-container');

    for (let btnContainer of btnContainers) {
        const btn = btnContainer.querySelector('button');
        resetBtn(btn, btnContainer);
    }

    filterSelection("all", 'category')
    filterSelection("all", 'organization')
})

