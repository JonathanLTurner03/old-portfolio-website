app.component('footer-element', {
    props: {
        emailURL: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    template: /* html */
    `
    <footer class="ps-1 mb-0 sticky-bottom">
        <img src="images/signature.png" class="w-25">
        <p><em><a :href="emailURL">{{ email }}</a></em></p>
        <p>All Rights Reserved &copy; 2022</p>
        <p class="pb-3"><a href="https://www.westga.edu/its/website-disclaimer.php">UWG Disclaimer</a></p>
    </footer>
    `
});