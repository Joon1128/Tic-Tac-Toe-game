function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1
    playerConfigOvelayElement.style.display = 'block';
    backdropElement.style.display ='block';

}

function closePlayerConfig () {
    playerConfigOvelayElement.style.display = 'none';
    backdropElement.style.display ='none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();  //  '     Max' ==>  'Max'   (앞 뒤 공백 제거)
    
    if (!enteredPlayername){ // enteredPlayername ===''
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }
    
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
    
    
    players[editedPlayer - 1].name = enteredPlayername;
    closePlayerConfig();  
}