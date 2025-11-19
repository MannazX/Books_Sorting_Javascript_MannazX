const baseUrl = "https://anbo-books.azurewebsites.net/api/Books"

Vue.createApp({
    data() {
        return {
            pageTitle : "Books Sorting and Filtering Methods",
            fullBookList : [
                {"id" : 1, "title" : "Lord of the Rings", "price" : 20.99},
                {"id" : 2, "title" : "A Brief History of Time", "price" : 12.49},
                {"id" : 3, "title" : "The Grapes of Wrath", "price" : 23.49},
                {"id" : 4, "title" : "Be the Worst You Can Be", "price" : 9.99}
            ],
            selectBookList : [],
            title : null,
            price : null
        }
    },
    created() {
       this.getAll()
    },
    methods: {
        getAll() {
            this.selectBookList = this.fullBookList
        },
        sortByIdAsc() {
            this.selectBookList.sort((b1, b2) => b1.id - b2.id)
        },
        sortByIdDesc() {
            this.selectBookList.sort((b1, b2) => b2.id - b1.id)
        },
        sortByTitle() {
            this.selectBookList.sort((b1, b2) => b1.title.localeCompare(b2.title))
        },
        sortByPriceAsc() {
            console.log("Entered ascending method")
            this.selectBookList.sort((b1, b2) => b1.price - b2.price)
        },
        sortByPriceDesc() {
            console.log("Entered descending method")
            this.selectBookList.sort((b1, b2) => b2.price - b1.price)
        },
        filterByTitle() {
            this.selectBookList = this.selectBookList.filter(book => book.title.includes(this.title))
        },
        filterByPrice() {
            this.selectBookList = this.selectBookList.filter(book => book.price > this.price)
        }
    },
    computed: {
        myComputed() {

        }
    }
}).mount("#app")