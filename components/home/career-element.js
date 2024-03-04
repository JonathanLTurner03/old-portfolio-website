app.component('career-goals', {
    props: {
        plannedDegree: {
            type: String,
            required: true
        }
    },
    template: /* html */
    `
    <h3 class="content-header">Career Goals</h3>
    <p class="mx-3">
        I am currently going for a {{ plannedDegree }}. My goal is to go into Software Application or Game Development. 
        I am now conversing with my advisor about possibly going for an M.S. in Computer Science with 
        a specialization in Machine Learning at Kennesaw State University.
    </p>
    `
});