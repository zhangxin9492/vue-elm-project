<template>
    <div class="goods">
        <div class="meau" ref="meauScroll">
            <ul>
                <li class="border-1px" 
                    :class="{'active':index==currentIndex}" 
                    v-for="(item,index) in goodsList" 
                    @click="chooseGoods(index,$event)">{{item.name}}</li>
            </ul>
        </div>
        <div class="info" ref="infoScroll">
            <div>
                <div v-for="item in goodsList" ref="foodlist">
                <div class="name">{{item.name}}</div>
                <ul class="content">
                    <li v-for="food in item.foods">
                        <div class="pic fl">
                            <img :src="food.image" alt="">
                        </div>
                        <div class="food_info">
                            <p class="goodName">{{food.name}}</p>
                            <p class="description no-wrap">{{food.description}}</p>
                            <p class="rating">
                                <span>月售{{food.sellCount}}份</span>
                                <span>好评率{{food.rating}}%</span>
                            </p>
                            <p class="price">
                                <span>¥{{food.price}}</span>
                                <span class="oldPrice" v-if="food.oldPrice">¥{{food.oldPrice}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            goodsList: [],
            // currentIndex: 0,
            heightList: [],
            scrollY: 0
        }
    },
    created() {
        this.getGoodsData()
    },
    computed: {
        currentIndex() {
            for(let i =0; i<this.heightList.length-1; i++) {
                if (this.scrollY >= this.heightList[i] && this.scrollY < this.heightList[i+1]) {
                    return i
                }
            }
        }
    },
    methods: {
        getGoodsData() {
            this.$http.get('/api/goods').then((res) => {
                let {code,data} = res.body
                console.log(code,data)
                this.goodsList = data
                this.$nextTick(() => {
                    this.initScroll()
                    this.calculateHeight()
                })
            })
        },
        // 选择商品
        chooseGoods(index,e) {
            // pc端会派发两次点击事件
            if (!e._constructed) {
                return
            }
            // this.currentIndex = index
            let foodlist = this.$refs.foodlist
            let el = foodlist[index]
            // better-scroll内置滚动到某一个位置的事件
            this.infoScroll.scrollToElement(el,200)          
            
        },
        // 初始化滚动
        initScroll() {
            this.infoScroll = new BScroll(this.$refs.infoScroll,{
                click: true,
                // 设置该属性可以监听到dom滚动的位置
                probeType: 3
            });
            this.meauScroll = new BScroll(this.$refs.meauScroll,{
                click: true,
            })
            // 该事件是better-scroll内置监听位置的事件
            this.infoScroll.on('scroll',(pos) => {
                this.scrollY = Math.abs(Math.round(pos.y))
            })
        },
        // 计算高度
        calculateHeight() {
            let foodlist = this.$refs.foodlist
            let height =0
            this.heightList.push(height)
            for(let i=0; i<this.goodsList.length;i++) {
                let item = foodlist[i]
                height += item.clientHeight
                this.heightList.push(height)
            }
        },
    },
}
</script>
<style lang="less" scoped>
    .goods {
        position: fixed;
        z-index: 0;
        top: 180px;
        bottom: 50px;
        overflow: hidden;
        .meau {
            height: 100%;
            width: 80px;
            float: left;
            ul {
                li {
                    width: 80px;
                    box-sizing: border-box;
                    color: #333;
                    background-color: #f3f7f5;
                    height: 54px;
                    padding: 0 12px;
                    line-height: 28px;
                    display: flex;
                    align-items: center;
                    line-height: 20px;
                    font-size: 12px;
                    &.active {
                        background-color: #fff;
                        border-right: 1px solid #f3f7f5;
                    }
                }
            }
        }
        .info {
            overflow: hidden;
            height: 100%;
            .name {
                height: 26px;
                line-height: 26px;
                padding-left: 14px;
                background-color: #f3f5f7;
            }
            .content {
                li {
                    overflow: hidden;
                    padding: 18px;
                    background-color: #fff;
                    border-bottom: 1px solid #f3f5f7;
                    .pic {
                        width: 60px;
                        height: 60px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .food_info {
                        overflow: hidden;
                        padding-left: 10px;
                        .goodName {
                            font-size: 14px;
                            color: rgb(7,17,27);
                            margin-bottom: 5px;
                        }
                        .description {
                            font-size: 12px;
                            margin-bottom: 5px;
                            color: rgb(147,153,159);
                        }
                        .rating {
                            color: rgb(147,153,159);
                            margin-bottom: 5px;
                            font-size: 12px;
                        }
                        .price {
                            span:nth-child(1) {
                                color: red;
                            }
                            .oldPrice {
                                text-decoration: line-through;
                                color: rgb(147,153,159);
                            }
                        }
                    }
                }
            }
        }
        .footer {
            height: 50px;
            background-color: #141d27;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
        }
    }
</style>