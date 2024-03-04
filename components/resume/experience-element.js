app.component('experience', {
    data() {
        return {
            experience: [
                {
                    id: 'GSC',
                    name: 'BestBuy Geek Squad',
                    title: 'Consulation Agent',
                    years: 'April 2021-August 2022',
                    description: [
                        "Handle appointments and consultations for clients.",
                        "Completed software and hardware diagnostics and repairs.",
                        "Handled all custom build desktops for the precinct."
                    ]
                },
                {
                    id: 'GSC',
                    name: 'BestBuy Geek Squad',
                    title: 'Advanced Repair Agent',
                    years: 'August 2022-Current',
                    description: [
                        "Accurately completed services within a timely manner."
                    ]
                }
            ],
        }
    },
    template: /* html */
    `
    <h3 class="content-header">Experience</h3>
    <div class="px-5" v-for="job in experience">
        <h5 class="employer mb-0"><strong>{{ job.name }} ({{ job.years }})</strong></h5>
        <p class="job-title mb-0">{{ job.title }}</p>
        <ul class="my-0" v-for="description in job.description">
            <li><em>{{ description }}</em></li>
        </ul>
    </div>
    <p></p>
    `
});