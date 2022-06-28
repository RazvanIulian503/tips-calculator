// SET LOCAL STORAGE ITEMS

const containerPopUp = document.querySelector(".container-pop-up");
const popUp = document.querySelector(".pop-up");

const setLocalStorages = () => {

    window.localStorage.setItem('name', JSON.stringify(document.querySelector('#user-name').value))
    window.localStorage.setItem('email', JSON.stringify(document.querySelector('#user-email').value))
    window.localStorage.setItem('pass', JSON.stringify(document.querySelector('#user-pass').value))
    window.localStorage.setItem('passions', JSON.stringify(document.querySelector('#user-passions').value))
    window.localStorage.setItem('status', JSON.stringify('logedIn'));

    containerPopUp.style.display = 'none';
    popUp.style.display = 'none';
    document.location.reload();
}

// SET USER

const user = {
    name: JSON.parse(window.localStorage.getItem('name')),
    email: JSON.parse(window.localStorage.getItem('email')),
    pass: JSON.parse(window.localStorage.getItem('pass')),
    passions: JSON.parse(window.localStorage.getItem('passions')),
    status: JSON.parse(window.localStorage.getItem('status'))
}

// POP-UP INIT

window.addEventListener('load', function() {

    if(user.status === null) {
        setTimeout(
            function open(event) {
                containerPopUp.style.display = 'flex';
                popUp.style.display = 'initial';
            }, 500
        )
    }
})

const guestUser = () => {
    containerPopUp.style.display = 'none';
    popUp.style.display = 'none';

    window.localStorage.setItem('status', JSON.stringify('incognito'));
    document.location.reload();
}


// HELLO FUNCTION

const helloUser = () => {
    if(user.name != null) {
        let helloMessage = document.querySelector('#user-hello');
        helloMessage.innerHTML = `Hello, ${user.name}!`;
    }
}

helloUser();


// USER INFO

if(user.status === 'logedIn') {
    document.querySelector('#profile-icon').addEventListener('click', function() {
        let name = document.querySelector('#user-info-name');
        let email = document.querySelector('#user-info-email');
        let passions = document.querySelector('#user-info-passions');
    
        name.innerHTML = `${user.name}`;
        email.innerHTML = `${user.email}`;
        passions.innerHTML = `You like ${user.passions}`

        document.querySelector('.user-profile').style.display = "initial";
    });
    
    window.addEventListener('mouseup', function(event) {
        let box = document.querySelector('.user-profile');
        if (event.target != box && event.target.parentNode != box) {
            box.style.display = 'none'
        }
    });
}

if(user.status === 'incognito') {
    document.querySelector('#profile-icon').addEventListener('click', function() {
        document.querySelector('.user-login').style.display = "initial";
    });
    
    window.addEventListener('mouseup', function(event) {
        let box = document.querySelector('.user-login');
        if (event.target != box && event.target.parentNode != box) {
            box.style.display = 'none'
        }
    });
}


// DELETE ACCOUNT

const deleteAccount = () => {
    let verify = window.confirm('Are you sure you want to delete this account?');

    if(verify) {
        window.localStorage.clear();
        document.location.reload();
    }
}


// USER lOGIN

const logIn = () => {
    window.localStorage.clear();
    document.location.reload();
}