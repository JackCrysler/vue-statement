let pay = {
    props:['pay_way','reserved_money'],
    template:`<div><p>
                        <span>{{pay_way}} ￥<label>{{reserved_money}}</label></span>
                    </p>
                    <input type="checkbox" id="name" class="checkbox"><label for="name" class="checkbox-label"></label></div>`
};
let pay_wrap = {
    props:['pay_ways'],
    template:`<div class="pay">
            <ol>
                <li v-for="(value,key) in pay_ways">
                    <pay :pay_way="key" :reserved_money="value"></pay>
                </li>
                <slot></slot>
            </ol>
        </div>`,
    components:{
        pay:pay
    }
};