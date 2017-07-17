let shop = {
    template: '#shop',
    data: function () {
        return {
            count: 1,
            sum_price: 0,
            all_price: 0
        }
    },
    props: {
        freight:{type:Number},
        shop_name: {
            type: String,
            required: true
        },
        shop_id: {
            required: true
        },
        product_name: {},
        discount_price: {},
        product_price: {},
        count_limit: {}
    },
    methods: {
        minus: function () {
            this.count > 1 ? this.count-- : this.count = 1;
        },
        plus: function () {
            this.count >= this.count_limit ? this.count = this.count_limit : this.count++;

        },
        compute_price: function () {
            this.sum_price = this.count * this.discount_price;
            this.all_price = this.sum_price + this.freight;
        }
    },
    watch: {
        count: function (val, oldVal) {
            this.sum_price = val * this.discount_price;
            this.all_price = this.sum_price + this.freight;

            eventBus.$emit('price', {
                id:this.shop_id,
                price:this.all_price
            })
        }
    },
    created: function () {

    },
    mounted: function () {
        this.compute_price();
    }
};