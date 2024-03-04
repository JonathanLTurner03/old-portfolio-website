app.component('introduction', {
    props: {
        fullName: {
            type: String,
            required: true
        },
        major: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    template: /* html */
    `
    <h1 class="mx-1 mt-1 mb-0 content-header"><em>{{ fullName }}</em></h1>
    <p class="mx-2 mt-0 content-description">{{ major }} Major</p>
    <p class="mx-3">{{ message }}</p>
    `
})