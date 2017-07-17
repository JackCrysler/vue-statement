let orderFooter = {
    props: {
        plus_condition: {
            type: [String]
        },
        init_price:{
            type:Number,
            required:true
        },
        query_data:{
            required:true,
            type:Object
        }
    },
    data:function () {
        return {
            sum_price:0,
            total_price_obj:{},
            pay_info:{},
            isShow:false
        }
    },
    template: `<footer>         
            <p><span>总计：￥<label>{{sum_price}}</label></span><span>{{plus_condition}}</span></p>
            <p @click="submit_order">提交订单</p>
            <transition>
                <p class="tip" v-if="isShow">余额不足</p>
            </transition>
        </footer>`,
    methods:{
        submit_order: function () {
            console.log('提交订单')
            let data = this.pay_info;
            if(data.selected){
                if(data.money>=this.sum_price){
                    axios.post('').then(function(){})
                }else{
                    this.isShow = true;
                    setTimeout(()=>{
                        this.isShow = false
                    },2000)
                }

            }
        }
    },
    watch:{
        init_price:function (v) {
            this.sum_price = v
        },
        query_data:function (data) {
            let tmp_arr = this.query_data.res;
            for(let j =0 ;j<tmp_arr.length;j++){
                this.total_price_obj[tmp_arr[j].id] = tmp_arr[j].discount_price*1+tmp_arr[j].freight*1
            }
            console.log(this.total_price_obj)
        }
    },
    mounted:function () {
        console.log(this.query_data);

        eventBus.$on('pay_way', (data)=> {
            this.pay_info = data
        });

        eventBus.$on('price', (data)=> {
            this.total_price_obj[data.id] = data.price;
            console.log(this.total_price_obj);
            this.sum_price=0;
            for(let i in this.total_price_obj){
                this.sum_price+=this.total_price_obj[i]*1;
                console.log(this.total_price_obj[i]*1)
            }

        });
    }
};
