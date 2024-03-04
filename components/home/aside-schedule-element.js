app.component('next-semester', {
    data() {
        return {
            classes: [
                {
                    name: 'Introductory Physics I',
                    professor: 'TBA',
                    time: 'Monday/Wednesday 9:15-10:45',
                    lab: 'Wednesday 11:15-12:30'
                },
                {
                    name: 'US History',
                    professor: 'TBA',
                    time: 'Monday/Wednesday 1:00-2:30',
                    lab: ''
                },
                {
                    name: 'Data Structures',
                    professor: 'TBA',
                    time: 'Tuesday/Thursday 11:15-12:45',
                    lab: ''
                },
                {
                    name: 'Computer Organization and Architecture',
                    professor: 'TBA',
                    time: 'Tusday/Thursday 1:30-2:45',
                    lab: ''
                }
            ]
        }
    },
    template: /* html */
    `
    <h3 class="ps-3">Fall 2022 Schedule</h3>
    <ul v-for="subject in classes">
        <li><strong>{{ subject.name }}</strong></li>
        <li>Professor: <em>{{ subject.professor }}</em></li>
        <li>Class Time: <em>{{ subject.time }}</em></li>
        <li v-if="subject.lab !== ''">Lab: <em>{{ subject.lab }}</em></li>
    </ul>
    `
});