/* menu show hidden */
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

//show
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

//hidden
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

// remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=== scroll selection active link ===*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionID = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll('.nav__menu a[href*='+ sectionID +']').classList.add('active')
        }else{
            document.querySelectorAll('.nav__menu a[href*='+ sectionID +']').classList.remove('active')
        }
    })
}

/*=== function contact us validation ===*/
// function validation(){
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var project = document.getElementById("project").value;
//     var message = document.getElementById("message").value;

//     alert(email);
// }



// function send(event) {
//     event.preventDefault();
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "muhammed0safuvan@gmail.com",
//         Password : "Safuvan@123",
//         To : 'muhammed0safuvan@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : document.getElementById('project').value,
//         Body : document.getElementById('message').value
//     }).then(function(response){
//         if (response == 'OK') {
//             alert('Success');
//         } else {
//             throw new Error("Error: " + response.statusText);
//         }
//     }
//     );
// }
