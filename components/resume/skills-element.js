app.component('skills', {
    data() {
        return {
            skills: [
                {
                    category: 'Certificates',
                    attributes: ['Apple ASP Repair Certification']
                },
                {
                    category: 'Programming/Markup Languages',
                    attributes: ['Java', 'HTML', 'JavaScript'] 
                },
                {
                    category: 'Other',
                    attributes: [
                        'Computer Repair (Software & Hardware)', 
                        'Communication', 
                        'Customer Service']
                }
            ]
        }
    },
    template: /* html */
    `
    <h3 class="content-header">Skills & Certificates</h3>
    <div class="ps-3 d-lg-flex justify-content-between">
        <div v-for="skill in skills" class="me-3">
            <h4 class="skill-category">{{ skill.category }}</h4>
            <ul class="skill-list" v-for="attribute in skill.attributes">
                <li class="px-2 me-3">{{ attribute }}</li>
            </ul>
        </div>
    </div>
    `
});