let address = {
    template: `<div><div class="addressBox">
                <p class="info"><span>{{person_name}}</span><span>{{phone_number}}</span></p>
                <div class="address">
                    <p>
                      <span class="iconfont icon-position"></span>
                      <span>{{address_detail}}</span></p>
                    <p>></p>
                </div>
           </div>
            <div class="strip"></div></div>`,
    props:['person_name','address_detail','phone_number']
};