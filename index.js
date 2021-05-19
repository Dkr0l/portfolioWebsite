let openSection='aboutMe';
function showSection(id){   //collapses all sections beside the chosen one(which is opened)
    let aboutMeClasses=document.getElementById('aboutMe').classList;
    let myWorkClasses=document.getElementById('myWork').classList;
    let contactClasses=document.getElementById('contact').classList;
    if(id=='aboutMe'){
        aboutMeClasses.replace('hide', 'show');
        myWorkClasses.replace('show', 'hide');
        contactClasses.replace('show', 'hide');
    }else if(id=='myWork'){
        aboutMeClasses.replace('show', 'hide');
        myWorkClasses.replace('hide', 'show');
        contactClasses.replace('show', 'hide');
    }else if(id=='contact'){
        aboutMeClasses.replace('show', 'hide');
        myWorkClasses.replace('show', 'hide');
        contactClasses.replace('hide', 'show');
    }
    openSection=id;
}

let navButton=document.getElementById('navButton');

//Toggling the sidebar menu
navButton.onclick=function(){
    let navbar=document.getElementById('navbar');
    navbar.classList.toggle('hide');
    navbar.classList.toggle('show');
    let showAboutMe=document.getElementById('showAboutMe').classList;
    showAboutMe.toggle('hide');
    showAboutMe.toggle('show');
};

//toggle About Me section
document.getElementById('toggleAboutMe').onclick=function(){
    document.getElementById('showAboutMe').classList.toggle('disabled');
    document.getElementById('lessAboutMe').classList.toggle('disabled');
}

//on menu click
document.getElementById('goToAboutMe').onclick=function(){
    navButton.click();
    //showSection('aboutMe');
};
document.getElementById('goToMyWork').onclick=function(){
    navButton.click();
    //showSection('myWork');
};
document.getElementById('goToContact').onclick=function(){
    navButton.click();
   //showSection('contact');
};

//detect currently scrolled part
window.onscroll=function(){
    let body=document.body;
    console.log(scrollPercentage);
};