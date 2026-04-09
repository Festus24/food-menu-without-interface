allMeal = []
function addMeal(){
    const userInput = document.getElementById('mealInput').value
    // console.log(userInput);
    if(userInput.trim() == ''){
        alert('Enter your meal')
    } 
    else if(userInput.trim() == 'jollof rice'){
        alert('You don cook jollof rice before, i no add am again, cook something else abeg')
        document.getElementById('mealInput').value = ''
    }
    else if(userInput.trim() == 'plantain'){
        alert('You don cook plantain before, i no add am again, cook something else abeg')
        document.getElementById('mealInput').value = ''
    }
    else if(userInput.trim() == 'pepper soup'){
        alert('You don cook pepper soup rice before')
        document.getElementById('mealInput').value = ''
    }
    else if(userInput.trim() == 'Amala'){
        alert('You don cook Amala before, i no add am again, cook something else abeg')
        document.getElementById('mealInput').value = ''
    }

    else{
        allMeal.push(userInput)
        showMeal()
        document.getElementById('mealInput').value = ''
    }
}
function deleteMeal(i){
    const confirmation = confirm('Are you sure you want to delete?')
    if(confirmation){
        allMeal.splice(i, 1)
        showMeal()
    }
    else{
        showMeal()
    }
}

function editMeal(i){
    editIndex = i
    editMealinput.value = allMeal[i]
}

function saveEdit(){
    const mealEditt = document.getElementById('editMealinput').value
    if(mealEditt.trim() == ''){
        alert('input cannot be empty')
    }
    else{
        allMeal.splice(editIndex, 1, mealEditt)
        showMeal()
        document.getElementById('editMealinput').value = ''
    }
}

function showMeal(){
    show.innerHTML = ''
    for (let index = 0; index < allMeal.length; index++) {
        const element = allMeal[index];
        show.innerHTML += `<p>${index + 1}. ${element} successfully cooked <button onclick="deleteMeal()">Delete</button> <button onclick="editMeal(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button></p>`
    }
}