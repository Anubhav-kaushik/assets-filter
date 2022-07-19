function filterSelection(category, tagName, assetsSelector='.column') {
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

function separateTags(element, dataName, separator=',') {
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

// Main

filterSelection("all", 'category')
filterSelection("all", 'organization')

// Add active class to the current button (highlight it)
const categoriesBtnContainerSelector = '#category-selection-container';
const organizationBtnContainerSelector = '#oraganization-selection-container';
const btnSelector = '.btn';

const categoriesBtnContainer = document.querySelector(categoriesBtnContainerSelector);
const categoriesBtns = categoriesBtnContainer.querySelectorAll(btnSelector);

const organizationBtnContainer = document.querySelector(organizationBtnContainerSelector);
const organizationBtns = organizationBtnContainer.querySelectorAll(btnSelector)

for (let btn of categoriesBtns) {
    btn.addEventListener("click", function () {
        const prev = categoriesBtnContainer.querySelector(".active");
        prev.classList.toggle("active");

        this.classList.add("active");
    });
}

for (let btn of organizationBtns) {
    btn.addEventListener("click", function () {
        const prev = organizationBtnContainer.querySelector(".active");
        prev.classList.toggle("active");

        this.classList.add("active");
    });
}