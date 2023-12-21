const developerName = document.getElementById('developer-name');
const header = document.querySelector('header');
const hamburg = document.querySelector('.hamburg');
const nav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('.nav-item')
const skillItems = document.querySelectorAll('.skillsContainer > .cell');
const skills = document.querySelectorAll('.graphContainer > .skill');
const skillSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress');
const projects = document.querySelectorAll('.project');
const projectSection = document.querySelector('#work');
const keyFeatures = document.querySelectorAll('.key-features');
const toggleSeeMore = document.querySelectorAll('.toggle-see-more');
const contactSection = document.querySelector('#contact');
const firstSocial = document.querySelector('#contact>a');
const socials = document.querySelectorAll('#contact>a');

window.onload = () => {
    if (window.innerWidth < 900) {
        keyFeatures.forEach(each => {
            each.classList.add('hidden');
        })
    }
    progressBars.forEach(progressbar => {
        progressbar.classList.add('hidden');
    })
    projects.forEach(project => {
        project.classList.add('hidden');
    })
    socials.forEach(social => {

        social.classList.add('hidden');
    })
}

navLinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        header.classList.remove('active');
    })
})

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

window.addEventListener('scroll', () => {
    progressBars.forEach(progressbar => {
        if (isInViewport(progressbar)) {
            progressbar.classList.remove('hidden');
        }
        else
            progressbar.classList.add('hidden');

    })
    projects.forEach(project => {
        if (isInViewport(project)) {
            project.classList.remove('hidden');
        }
        else
            project.classList.add('hidden');

    })
    socials.forEach(social => {
        if (isInViewport(firstSocial)) {
            social.classList.remove('hidden');
        }
        else
            social.classList.add('hidden');
    })
})





if (window.innerWidth < 900) {
    toggleSeeMore.forEach(toggle => {
        toggle.classList.add('show');
    })
}
else
    toggleSeeMore.forEach(toggle => {
        toggle.classList.add('hidden');
    })



toggleSeeMore.forEach(toggle => {
    toggle.addEventListener('click', () => {
        console.log('clicked');
        const hiddenSection = toggle.nextElementSibling;
        toggle.classList.toggle('active');
        if (!toggle.classList.contains('active'))
            hiddenSection.classList.add('hidden');
        else
            hiddenSection.classList.remove('hidden');
    })
})


progressBars.forEach(progress => {
    progress.addEventListener('click', () => {
    })
})

hamburg.addEventListener('click', () => {
    header.classList.toggle('active');
})

var typed = new Typed('.role', {
    strings: ["Web Developer", "PHP Developer"],
    typeSpeed: 60,
    backspeed: 150,
    loop: true
});


skillItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('always')) {
            item.classList.toggle('active');
            skills.forEach(skill => {
                if (skill.classList.toString().toLowerCase().includes(item.textContent.toLowerCase())) {
                    console.log(skill.classList[1]);
                    if (item.classList.contains('active')) {
                        const processedTop = window.innerWidth > 768 ? skillSection.scrollHeight : skillSection.scrollHeight + 200;
                        window.scrollTo({
                            top: processedTop,
                            behavior: 'smooth'
                        });
                    }
                    skill.classList.toggle('show');
                }
            });
        }
    });
});


skillItems.forEach(item => {
    item.addEventListener('click', () => {

        skills.forEach(skill => {
            if (skill.classList[1].toString().toLowerCase() == item.textContent.toLowerCase()) {
                const skillprogress = document.querySelector(`.${skill.classList[1]} .progress-bar`);
                skillprogress.classList.add('highlight');
                setTimeout(() => {
                    skillprogress.classList.remove('highlight');
                }, 600);
            }
        })
    })
})


