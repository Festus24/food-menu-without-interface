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

function showMeal(){
    show.innerHTML = ''
    for (let index = 0; index < allMeal.length; index++) {
        const element = allMeal[index];
        show.innerHTML += `<p>${index + 1}. ${element} successfully cooked</p>`
    }
}