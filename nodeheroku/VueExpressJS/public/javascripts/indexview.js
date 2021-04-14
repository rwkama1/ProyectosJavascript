const p = require("crudproductimagesqlserver/dproducto");
var vue_det = new Vue({
    el: '#vue_det',
    data: {
        firstname: "Ria",
        lastname: "Singh",
        address: "Mumbai"
    },
    methods: {
        mydetails: function () {
            return  "I am " + this.firstname + " " + this.lastname;
            
        },
       
    }
})