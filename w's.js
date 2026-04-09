allMeal = ['jollof', 'plaintain', 'pepper soup']
function addMeal(){
    const userInput = document.getElementById('mealInput').value
    if(userInput.trim() == ''){
        alert('Enter your meal')
    } else if (allMeal.includes(userInput)){
        showMeal()
        document.getElementById('mealInput').value = ''
    }
    else{
        allMeal.push(userInput)
        showMeal()
    }
}

function showMeal(){
    show.innerHTML = ''
    for (let index = 0; index < allMeal.length; index++) {
        const element = allMeal[index];
        show.innerHTML += `<p>${index + 1}. ${element} successfully cooked <button onclick="deleteMeal()">Delete</button> <button onclick="editMeal(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button></p>`
    }
}