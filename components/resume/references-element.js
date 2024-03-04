app.component('references', {
    data() {
        return {
            references: [
                {
                    name: 'Josh Keller',
                    position: 'Assistant Store Manager',
                    address: '2703 GA-54',
                    city: 'Peachtree City, GA 30263',
                    contactType: 'Email',
                    text: 'Phillip.Keller@Bestbuy.com',
                    link: 'emailto:Josh.Keller@Bestbuy.com'
                }
            ],
        }
    },
    template: /* html */
    `
    <h3 class="ps-2">References</h3>
    <div class="ps-2 content-info" v-for="reference in references">
        <address>
            <em>
                {{ reference.name }}<br>
                {{ reference.position }}<br>
                {{ reference.address }}<br>
                {{ reference.city }}<br>
                {{ reference.contactType }}: 
                <a :href="reference.link" rel="external">
                    {{ reference.text }}
                </a>
            </em>
        </address>
    </div>
    `
});