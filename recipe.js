const recipes =  []; 


function showMenu() {
    return prompt(
        "Welcome to Recipe App\n" +
        "Choose an option:\n" +
        "1. Add Recipe\n" +
        "2. Update Recipe\n" +
        "3. Delete Recipe\n" +
        "4. View Recipes\n" +
        "5. Exit\n"
    );
}

function addRecipe() {
    const id = recipes.length + 1; 
    const name = prompt("Enter the Recipe name:");
    const type = prompt("Enter the type of recipe (e.g., main course, dessert, appetizer):");
    const description = prompt("Enter the description:");

    if (name && type && description) {
        recipes.push({ id, name, type, description });
        console.log("Added successfully!");
    } else {
        console.log("Failed to add recipe. All fields are required.");
    }
}

function updateRecipe() {
    const id = parseInt(prompt("Enter the ID of the recipe to update:"));
    const recipe = recipes.find(a => a.id === id);

    if (recipe) {
        const newName = prompt(`Enter new name (current: ${recipe.name}):`, recipe.name);
        const newType = prompt(`Enter new type (current: ${recipe.type}):`, recipe.type);
        const newDescription = prompt(`Enter new description (current: ${recipe.description}):`, recipe.description);

        recipe.name = newName || recipe.name;
        recipe.type = newType || recipe.type;
        recipe.description = newDescription || recipe.description;
        console.log("Updated successfully!");
    } else {
        console.log("Recipe not found.");
    }
}

function deleteRecipe() {
    const id = parseInt(prompt("Enter the recipe ID to delete:"));
    const index = recipes.findIndex(r => r.id === id);

    if (index !== -1) {
        recipes.splice(index, 1);
        console.log("Recipe deleted successfully!");
    } else {
        console.log("Recipe not found!");
    }
}

function viewRecipes() {
    if (recipes.length === 0) {
        console.log("No recipes available.");
    } else {
        console.log("Current Recipes:");
        recipes.forEach(recipe => {
            console.log(
                `ID: ${recipe.id}, Name: ${recipe.name}, Type: ${recipe.type}, Description: ${recipe.description}`
            );
        });
    }
}

function recipeApp() {
    let exit = false;
    while (!exit) {
        const choice = showMenu();
        switch (choice) {
            case "1":
                addRecipe();
                break;
            case "2":
                updateRecipe();
                break;
            case "3":
                deleteRecipe();
                break;
            case "4":
                viewRecipes();
                break;
            case "5":
                exit = true;
                break;
            default:
                console.log("Not a valid choice.");
        }
    }
}
document.getElementById("btn").addEventListener("click",function(){
    console.log("Strating the recipeApp");
    recipeApp();
    
})

