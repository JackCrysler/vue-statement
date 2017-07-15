let orderFooter = {
    props: {
        plus_condition: {
            type: [String]
        },
        total_price:{

        }
    },
    data:function () {
        return {
            sum_price:0
        }
    },
    template: `<footer>         
            <p><span>总计：￥<label>{{sum_price}}</label></span><span>{{plus_condition}}</span></p>
            <p @click="submit_order">提交订单</p>
        </footer>`,
    methods:{
        submit_order: function () {
            console.log('提交订单')
        }
    },

    mounted:function () {
        eventBus.$on('price', (data)=> {
            this.total_price[data.id] = data.price;

        });

        console.log(this.total_price)
        for(let i in this.total_price){
            this.sum_price+=this.total_price[i]*1
        }
        console.log(this.sum_price);
    }
};
