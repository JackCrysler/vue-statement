let eventBus = new Vue();
new Vue({
    el:'.container',
    data:{
        title:'订单支付',
        goods_list:[],
        plus_condition:'（含运费）',
        address_detail:"中国北京",
        phone_number:13213213221,
        person_name:'路飞',
        shop_name:'',
        product_name:'',
        discount_price:120,
        product_price:0,
        count_limit:10,
        pay_ways:{},
        init_price:0,
        query_data:{},
        reserved:0,
        awards:0,
        reserved_money_input:true,
        awards_money_input:false
    },
    methods:{
        send:function (str) {
            let _obj = {

            };
            if(str=='reserved'){
                _obj.selected = !this.reserved_money_input;
                _obj.way = '余额支付';
                _obj.money = this.reserved;
            }else{
                _obj.way= '奖金支付';
                _obj.money = this.awards;
                _obj.selected = !this.awards_money_input;
            }

            eventBus.$emit('pay_way',_obj)
        }
    },
    components:{
        "order-footer":orderFooter,
        "address-detail":address,
        "shop-detail":shop,
        "pay-wrap":pay_wrap
    },
    created:function () {
        axios.get('server/shop.json').then((result)=> {
            this.query_data = result.data;
            this.goods_list = result.data.res;
            this.reserved = result.data.pay_ways.reserved;
            this.awards = result.data.pay_ways.awards;
            this.init_price = result.data.init_price;
            for(let i in result.data.res){
                this.init_price[result.data.res[i].id] = result.data.res[i].discount_price*1+result.data.res[i]
            }
        });
    }
});