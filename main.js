const tablinks = document.getElementsByClassName("tab-links")
const tabContents = document.getElementsByClassName("tab-contents")

function handleClickOnAboutSubtab( tabname){
    for(let tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for(let tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

/*-------menu-------*/

const side_menu = document.getElementById("side-menu")
function openMenu() {
    side_menu.style.right = "0";
}

function closeMenu() {
    side_menu.style.right = "-200px";
}

function closeMenuOnClick() {
    const menuOptions = document.querySelectorAll("#side-menu a");

    menuOptions.forEach(option => {
        option.addEventListener("click", function () {
            closeMenu();
        });
    });
}

document.addEventListener("DOMContentLoaded", closeMenuOnClick);

/*--------Contact Save----------*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbwbfBD4PW-4TaYM9-cPrnWcJU56tXawisL_Fbf3iSOclleCJFcmGoU3mLJZRZMvaUM/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  const loading = document.getElementById('loading');
  const overlay = document.getElementById('overlay');

  form.addEventListener('submit', e => {
    e.preventDefault()

    loading.style.display = 'block';
    overlay.style.display = 'flex';
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        overlay.style.display = 'none';
        loading.style.display = 'none';
        msg.innerHTML = 'Message Sent Successfully'
        setTimeout(() =>{
            msg.innerHTML = ''
        },7000)
        form.reset()
      })
      .catch(error => {
        overlay.style.display = 'none';
        loading.style.display = 'none';
        console.error('Error!', error.message);
    });
  })

/*--------------------Portfolio--------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const showMoreBtn = document.getElementById('show-btn');
    const hiddenWorks = document.querySelectorAll('.work.hidden');

    // Function to toggle visibility of additional work items
    function toggleHiddenWorks() {
        hiddenWorks.forEach(work => {
            work.classList.toggle('hidden');
        });

        const isHidden = hiddenWorks[0].classList.contains('hidden');
        showMoreBtn.textContent = isHidden ? 'Show More' : 'Show Less';
    }

    // Event listener for the "Show More" button
    showMoreBtn.addEventListener('click', function (event) {
        event.preventDefault();
        toggleHiddenWorks();
    });
});