function projectsComponent() {
    return {
        activePage: 0,
        projects: [
            {
                title: 'LocalShare',
                description: 'LocalShare is a local file-sharing web app designed to facilitate seamless file exchange between devices on the same network.',
                image: 'images/localshare.png',
                link: 'https://github.com/PrinciMixtiy/LocalShare',
                technologies: 'Python, Django, TailwindCSS, Alpine.js',
            },
            {
                title: 'Chat App',
                description: 'A chat web app using WebSockets enables real-time, bidirectional communication between users and the server, allowing instant message exchange without needing to refresh the page.',
                image: 'images/chat.png',
                link: 'https://github.com/PrinciMixtiy/ChatApp',
                technologies: 'Python, DJango, DjangoChannels, Bootsrtrap, HTMX',
            },
            {
                title: 'Reverse Shell',
                description: 'A Python-based reverse shell project where a server script can control multiple client scripts to execute shell commands and download files from client machines remotely.',
                image: 'images/ReverseShell.png',
                link: 'https://github.com/PrinciMixtiy/ReverseShell',
                technologies: 'Python',
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

document.getElementById("current-year").innerText = new Date().getFullYear().toString();
