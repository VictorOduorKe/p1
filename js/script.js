
const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 55 },
    { name: "PHP", level: 60 }
];

const projects = [
    { title: "E-commerce Website", description: "A full-stack e-commerce site built with React and PHP." },
    { title: "Game Concept", description: "An educational game to teach JavaScript basics." },
    { title: "AI Student Predictor", description: "AI program to predict students' results using PHP." }
];

// Populate skills with progress bars
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';
    skillDiv.innerHTML = `
        <p>${skill.name}</p>
        <div class="skill-bar">
            <div class="skill-bar-inner" style="width: ${skill.level}%;"></div>
        </div>`;
    skillsList.appendChild(skillDiv);
});

// Populate projects
const projectCards = document.getElementById('project-cards');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectCards.appendChild(card);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Ensure this part is implemented correctly.
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
});

const control_nav=document.querySelector(".control_nav");
const open_nav=document.querySelector('.open');

open_nav.addEventListener("click",function(){
    control_nav.style.transform='scale(1)';
    open_nav.style.transform="scale(0)";       
    open_nav.style.transition="all .3s ease-in-out";
    control_nav.style.transition="all .3s ease-in-out";         

});

const exit_nav=document.querySelector(".exit").addEventListener("click",function(){
    open_nav.style.transform="scale(1)";       
    open_nav.style.transition="all .3s ease-in-out";         
    control_nav.style.transition="all .3s ease-in-out";         
    control_nav.style.transform='scale(0)';

    
});


/*--------------------------FORM HANDLING------------------------*/

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    const formData = new FormData(this);
  
    try {
      const response = await fetch('/backend/form_submit.php', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting the form. Please try again.');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred. Please check your connection.');
    }
  });
  



/*    if(control_nav.classList="control_nav"){
    control_nav.classList.add("open-nav");
    control_nav.classList.remove("control_nav");
  }else{
   view_nav.classList.add("control_nav");
   view_nav.classList.remove("open-nav");
  }*/