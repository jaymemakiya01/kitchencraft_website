document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('recipe-search-input');
    const recipeGrid = document.getElementById('recipe-grid');

    const recipeCards = recipeGrid.querySelectorAll('.col'); 
    document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('recipe-search-input');
    const recipeGrid = document.getElementById('recipe-grid');document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('recipe-search-input');
  const recipeGrid = document.getElementById('recipe-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const saveBtn = document.getElementById('save-btn');
  const toggleNutritionBtn = document.getElementById('toggle-nutrition-btn');
  const nutritionDetails = document.getElementById('nutrition-details');
  const cards = recipeGrid.querySelectorAll('.col');
  const initialVisibleCount = 3;
  const loadMoreCount = 3;
  let visibleCount = initialVisibleCount;

  nutritionDetails.style.display = 'none';

  function updateVisibility() {
    let shown = 0;
    let anyHiddenBySearch = false;
    cards.forEach(card => {
      if (card.style.display === 'none') {
        anyHiddenBySearch = true;
        return;
      }
      if (shown < visibleCount) {
        card.style.display = 'block';
        shown++;
      } else {
        card.style.display = 'none';
      }
    });
    const totalMatches = Array.from(cards).filter(card => card.style.display !== 'none').length;
    loadMoreBtn.style.display = (visibleCount >= totalMatches && !anyHiddenBySearch) ? 'none' : 'block';
  }

  function filterCards() {
    const query = searchInput.value.toLowerCase().trim();
    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const description = card.querySelector('.card-text').textContent.toLowerCase();
      card.style.display = (title.includes(query) || description.includes(query)) ? 'block' : 'none';
    });
    visibleCount = initialVisibleCount;
    updateVisibility();
  }

  function loadMore() {
    visibleCount += loadMoreCount;
    updateVisibility();
  }

  saveBtn.addEventListener('click', () => {
    const saved = saveBtn.classList.toggle('saved');
    saveBtn.textContent = saved ? '✅ Saved!' : '❤️ Save Recipe';
    alert(saved ? 'Recipe added to favorites!' : 'Recipe removed from favorites!');
  });

  toggleNutritionBtn.addEventListener('click', () => {
    const isHidden = nutritionDetails.style.display === 'none';
    nutritionDetails.style.display = isHidden ? 'block' : 'none';
    toggleNutritionBtn.textContent = isHidden ? 'Hide Nutrition Facts' : 'View Nutrition Facts';
  });

  function checkMobileView() {
    if (window.innerWidth < 768) console.log('Mobile view detected.');
  }

  checkMobileView();
  window.addEventListener('resize', checkMobileView);
  updateVisibility();
  searchInput.addEventListener('input', filterCards);
  loadMoreBtn.addEventListener('click', loadMore);
});

    const loadMoreBtn = document.getElementById('load-more-btn');
    const recipeCards = recipeGrid.querySelectorAll('.col'); 
    
    const initialLoadCount = 3; 
    const loadStep = 3;        
    let currentlyVisibleCount = 0;

    
    function updateRecipeVisibility() {
        let visibleCount = 0;
        let hiddenCardFound = false; 

        recipeCards.forEach((card, index) => {
            const isCurrentlyHiddenBySearch = card.style.display === 'none';

            if (isCurrentlyHiddenBySearch) {
                card.style.display = 'none';
                hiddenCardFound = true;
                return;
            }

            if (visibleCount < currentlyVisibleCount) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        const totalVisibleCards = Array.from(recipeCards).filter(c => c.style.display === 'block').length;
        const totalMatchingCards = Array.from(recipeCards).filter(c => c.style.display !== 'none' || c.style.display === 'block').length;
        
        if (totalVisibleCards >= totalMatchingCards && !hiddenCardFound) {
            loadMoreBtn.style.display = 'none';
        } else if (currentlyVisibleCount >= recipeCards.length) {
             loadMoreBtn.style.display = 'none';
        } else {
             loadMoreBtn.style.display = 'block';
        }
    }

    function loadMoreRecipes(){
        currentlyVisibleCount += loadStep;
        updateRecipeVisibility();
    }
    
    function filterRecipes() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        recipeCards.forEach(card => {
            const cardContent = card.textContent.toLowerCase();
            
            if (cardContent.includes(searchTerm)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';
            }
        });
        
        currentlyVisibleCount = initialLoadCount;
        updateRecipeVisibility();
    }
    
    currentlyVisibleCount = initialLoadCount;
    updateRecipeVisibility();

    searchInput.addEventListener('input', filterRecipes);
    loadMoreBtn.addEventListener('click', loadMoreRecipes);
});

    function filterRecipes() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        recipeCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const text = card.querySelector('.card-text').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || text.includes(searchTerm)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterRecipes);
    
});

document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('save-btn');
    saveBtn.addEventListener('click', () => {
        if (saveBtn.classList.contains('saved')) {
            saveBtn.classList.remove('saved');
            saveBtn.textContent = '❤️ Save Recipe';
            alert('Recipe removed from favorites!');
        } else {
            saveBtn.classList.add('saved');
            saveBtn.textContent = '✅ Saved!';
            alert('Recipe added to favorites!');
        }
    });

    const toggleBtn = document.getElementById('toggle-nutrition-btn');
    const nutritionDetails = document.getElementById('nutrition-details');

    nutritionDetails.style.display = 'none'; 

    toggleBtn.addEventListener('click', () => {
        if (nutritionDetails.style.display === 'none') {
            nutritionDetails.style.display = 'block';
            toggleBtn.textContent = 'Hide Nutrition Facts';
        } else {
            nutritionDetails.style.display = 'none';
            toggleBtn.textContent = 'View Nutrition Facts';
        }
    });
    
    function checkAndAdjustLayout() {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            console.log("Mobile view detected.");
        }
    }
    
    checkAndAdjustLayout();
    window.addEventListener('resize', checkAndAdjustLayout);
});
