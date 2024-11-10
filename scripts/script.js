function projectsComponent() {
    return {
        activePage: 0,
        projects: [
            {
                title: 'Project 1',
                description: 'This is the description of project 1',
                image: 'images/project1.png',
                link: '#',
                technologies: 'HTML, CSS, JS',
            },
            {
                title: 'Project 2',
                description: 'This is the description of project 2',
                image: 'images/project2.png',
                link: '#',
                technologies: 'React, Tailwind, API',
            },
            {
                title: 'Project 3',
                description: 'This is the description of project 3',
                image: 'images/project3.png',
                link: '#',
                technologies: 'Vue, SCSS, Node',
            },
        ],
        get pages() {
            return Math.ceil(this.projects.length);
        },
        get currentProject() {
            return this.projects[this.activePage];
        },
        formatProjectNumber(number) {
            return number < 10 ? `0${number}` : number;
        }
    };
}

function carouselComponent() {
    return {
        currentIndex: 0,
        projects: [
            {
                title: 'Project 1',
                description: 'This is the description of project 1',
                image: 'images/project1.png',
                link: '#',
                technologies: 'HTML, CSS, JS',
            },
            {
                title: 'Project 2',
                description: 'This is the description of project 2',
                image: 'images/project2.png',
                link: '#',
                technologies: 'React, Tailwind, API',
            },
            {
                title: 'Project 3',
                description: 'This is the description of project 3',
                image: 'images/project3.png',
                link: '#',
                technologies: 'Vue, SCSS, Node',
            },
        ],
        get currentProject() {
            return this.projects[this.currentIndex];
        },
        formatProjectNumber(number) {
            return number < 10 ? `0${number}` : number;
        },
        nextProject() {
            this.currentIndex = (this.currentIndex + 1) % this.projects.length;
        },
        prevProject() {
            this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
        },
    };
}


document.getElementById("current-year").innerText = new Date().getFullYear().toString();
