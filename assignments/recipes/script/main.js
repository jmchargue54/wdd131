import recipes from './recipes.mjs';

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

function getRandomRecipe() {
    return recipes[getRandomNumber(recipes.length)];
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span aria-hidden="true" class="icon-star">⭐</span> ';
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span aria-hidden="true" class="icon-star-empty">☆</span> ';
    }
    
    return starsHTML.trim();
}

function generateTags(tags) {
    if (typeof tags === 'string') {
        return tags.split(',').map(tag => `<span class="tag">${tag.trim()}</span>`).join(' ');
    } else if (Array.isArray(tags)) {
        return tags.map(tag => `<span class="tag">${tag.trim()}</span>`).join(' ');
    }
    return '';
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe">
            <div class="front">
                <img id="recipe-image" src="${recipe.image}" alt="${recipe.name}">
                <div class="front-content">
                    <div id="recipe-tags">${generateTags(recipe.tags)}</div>
                    <h2 id="recipe-name">${recipe.name}</h2>
                    <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                        ${generateStarRating(recipe.rating)}
                    </span>
                </div>
            </div>
            <div class="extended">    
                <p id="recipe-description">${recipe.description}</p>
                <p id="recipe-prepTime">Prep Time: ${recipe.prepTime}</p>
                <p id="recipe-cookTime">Cook Time: ${recipe.cookTime}</p>
                <p id="recipe-yield">Yield: ${recipe.recipeYield}</p>
                <ul class="recipe-ingredients">
                    ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <ol class="recipe-instructions">
                    ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
                <p class="recipe-author">Author: ${recipe.author}</p>
                <p class="recipe-datePublished">Published: ${recipe.datePublished}</p>
            </div>
        </div>
    `;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.getElementById('recipe-container');
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    recipeContainer.innerHTML = recipeHTML;
}

function filterRecipes(query) {
    const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
    );

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.querySelector('.search input');
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

function init() {
    const recipe = getRandomRecipe();
    renderRecipes([recipe]);

    const searchButton = document.getElementById('add');
    searchButton.addEventListener('click', searchHandler);
}

document.addEventListener('DOMContentLoaded', init);