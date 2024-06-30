import recipes from './recipes.mjs';

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

document.addEventListener('DOMContentLoaded', () => {
    const recipeContainer = document.getElementById('recipe-container');

    recipes.forEach(recipe => {
        const recipeHTML = `
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
        recipeContainer.insertAdjacentHTML('beforeend', recipeHTML);
    });
});