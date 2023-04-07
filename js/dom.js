document.getElementById('apply-bg').addEventListener('click', function () {

    const friends = document.getElementsByClassName('friend');


    for (const f of friends) {
        f.style.backgroundColor = 'red';
    }

})

document.getElementById('add-new').addEventListener('click', function () {

    const friendsContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `

<h3 class="friend-name">new friend</h3>
<p> someone new friend </p>


`
    friendsContainer.appendChild(friend);


})