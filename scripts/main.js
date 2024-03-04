const app = Vue.createApp({
    data() {
        return {
            name: {
                first: 'Jonathan',
                last: 'Turner'
            },
            degreeInfo: {
                major: 'Computer Science',
                concentration: 'Artificial Intelligence',
                minor: 'Game Design'
            },
            contactInfo: {
                email: 'JonathanLTurnerCS@gmail.com',
                phone: '6783783789'
            },
            address: {
                street: '55 Roscoe Rd',
                city: 'Newnan',
                state: 'GA',
                zip: '30263'
            },
            image: {
                altText: 'Headshot of Jonathan Turner',
                link: 'images/portraits/headshot.jpg'
            }
        }
    },
    computed: {
        emailURL() {
            return 'mailto:' + this.contactInfo.email;
        },
        phoneURL() {
            return 'tel:' + this.contactInfo.phone;
        },
        formattedPhone() {
            return this.contactInfo.phone.slice(0, 3) + '-' + this.contactInfo.phone.slice(3, 6) + '-' + this.contactInfo.phone.slice(6);
        },
        formattedCityStateZip() {
            return this.address.city + ', ' + this.address.state + ' ' + this.address.zip; 
        },
        fullName() {
            return this.name.first + ' ' + this.name.last;
        },
        plannedDegree() {
            return "Bachelor's in " + this.degreeInfo.major 
                + " with a concentration in " + this.degreeInfo.concentration 
                + " and a minor in " + this.degreeInfo.minor;
        },
        introduction() {
            return "Experience with repairs involving both Hardware and Software issues."
                + " I enjoy problem solving and working with a team on complicated and thought provoking issues."
                + " Currently persuing a " + this.plannedDegree + ".";
        }
    }
});