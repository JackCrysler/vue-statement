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
        pay_ways:{'余额支付':100,'奖金支付':50},
        init_price:{}
    },
    components:{
        "order-footer":orderFooter,
        "address-detail":address,
        "shop-detail":shop,
        "pay-wrap":pay_wrap
    },

    created:function () {

        axios.get('server/shop.json').then((result)=> {

            this.goods_list = result.data.res;
            for(let i in result.data.res){
                this.init_price[result.data.res[i].id] = result.data.res[i].price
            }
        });
    }
});