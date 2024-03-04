app.component('header-element', {
    props: {
        page: {
            type: String,
            required: true
        },
        emailURL: {
            type: String,
            required: true
        },
        phoneURL: {
            type: String,
            required: true
        },
        contactInfo: {
            type: Object,
            required: true
        },
        formattedPhone: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            
        }
    },
    template: /* html */
        `
    <div id="top-header">
        <div id="contact">
            <ul>
                <li><a :href="emailURL">
                        <img src="./images/socials/envelope.svg" width="14" alt="email icon">
                    {{ contactInfo.email }}</a>
                </li>
                <li><a :href="phoneURL">
                        <img src="./images/socials/phone.svg" width="14" alt="phone icon">
                    {{ formattedPhone }}</a>
                </li>
            </ul>
        </div>    
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand ps-2" href="#">Jonathan's Portfolio</a>
            <button class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: page === 'home' }" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: page === 'resume' }" href="resume.html">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: page === 'projects' }" href="projects.html">Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
});