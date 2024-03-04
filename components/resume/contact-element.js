app.component('contact', {
    props: {
        streetAddress: {
            type: String,
            required: true
        },
        formattedCityStateZip: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            contacts: [
                {
                    type: 'Linked In',
                    link: 'https://www.linkedin.com/in/LTurnerJonathan',
                    text: 'LTurnerJonathan'
                },
                {
                    type: 'Cell',
                    link: 'tel:6783783789',
                    text: '(678) 378-3789'
                },
                {
                    type: 'Email',
                    link: 'mailto:JonathanLTurnerCS@gmail.com',
                    text: 'JonathanLTurnerCS@gmail.com'
                }
            ]
        }
    },
    template: /* HTML */
    `
    <h3 class="ps-2">Contacts</h3>
    <address class="ps-2">
        <em>{{ streetAddress }}<br>
        {{ formattedCityStateZip }}</em>
    </address>
    <div class="contact-info" v-for="contact in contacts">
        <p class="ps-2 mb-0">
            {{ contact.type }}: <a :href="contact.link" target="_blank" rel="noopener noreferrer">{{ contact.text }}</a>
        </p>
    </div>
    `
});