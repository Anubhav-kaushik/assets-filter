function filterSelection(category, tagName, assetsSelector = '.column') {
    const columns = document.querySelectorAll(assetsSelector);

    for (let column of columns) {
        column.dataset[`${tagName}Visible`] = false;

        if (isIn(category, separateTags(column, tagName))) {
            column.dataset[`${tagName}Visible`] = true;
        } else if (category == "all") {
            column.dataset[`${tagName}Visible`] = true;
        }
    }
}

function separateTags(element, dataName, separator = ',') {
    const dataTags = element.dataset[dataName];
    const tagsArray = dataTags.split(separator);

    return tagsArray
}

function isIn(key, array) {
    for (let element of array) {
        if (key == element) {
            return true;
        }
    }

    return false;
}

const inputSelector = '.filter-btns-container select';

const inputElements = document.querySelectorAll(inputSelector);

for (let inputElement of inputElements) {
    // filterSelection(inputElement.value, inputElement.getAttribute('name'));

    inputElement.addEventListener('change', function () {
        const categoryTag = this.getAttribute('name')
        const category = this.value;

        filterSelection(category, categoryTag);
    })
}