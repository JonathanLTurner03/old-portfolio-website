app.component('education', {
    data() {
        return {
            education: [
                {
                    id: 0,
                    name: 'Eagles Nest Eluminatus',
                    degree: 'Highschool Diploma',
                    year: '2017-2021'
                },
                {
                    id: 1,
                    name: 'University of West Georgia',
                    degree: "Bachelor's in Computer Science",
                    year: 'Expected Graduation in 2025'
                }
            ],
        }
    },
    template: /* html */
    `
    <h3 class="ps-2">Education</h3>
    <div class="ps-2 content-info" v-for="school in education">
        <address>
            <strong>{{ school.name }}</strong><br>
            {{ school.degree }}<br>
            <em>{{ school.year }}</em><br>
        </address>
        <p></p>
    </div>
    `
});