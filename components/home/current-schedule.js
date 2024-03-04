app.component('current-schedule', {
    data() {
        return {
            classes: [
                {
                    name: 'American Government',
                    professor: 'Dr. Dylan McLean',
                    time: 'Monday/Wednesday 11:00-12:15',
                    lab: ''
                },
                {
                    name: 'Intro to Computer Science II',
                    professor: 'Dr. Michael Orsega',
                    time: 'Monday/Wednesday 12:30-1:45',
                    lab: 'Wednesday 3:30-4:15'
                },
                {
                    name: 'Intro to Web Development',
                    professor: 'Christine Rolka, M.S.',
                    time: 'Monday/Wednesday 2:00-3:15',
                    lab: ''
                }
            ]
        }
    },
    template: /* html */
    `
    <h3 class="content-header pt-3">Current Class Schedule</h3>
    <div class="d-lg-flex justify-content-around">
        <ul class="current-schedule px-1 me-2" v-for="subject in classes">
            <li><strong>{{ subject.name }}</strong></li>
            <li>By <em>{{ subject.professor }}</em></li>
            <li>Class Time: <em>{{ subject.time }}</em></li>
            <li v-if="subject.lab !== ''">Lab: <em>{{ subject.lab }}</em></li>
        </ul>
    </div>
    `
});