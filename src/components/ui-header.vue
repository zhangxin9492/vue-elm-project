<template>
    <div class="header">
        <div class="top-content">
            <div class="avanta fl">
                <img :src="seller.avatar" alt="" v-if="seller.avatar">
            </div>
            <div class="content">
                <div class="name">
                    <span class="title">品牌</span>
                    <span>{{seller.name}}</span>
                </div>
                <div class="server">
                    {{seller.description}}/30分钟送达
                </div>
                <div class="promotion">
                    <div class="fl icon"></div>
                    <div class="fl" v-for="(item,index) in seller.supports" v-if="index==0">{{item.description}}</div>
                    <ui-star :score="seller.foodScore"></ui-star>
                </div>
            </div>
        </div>
        <div class="bot-content">
            <span class="label"></span>
            <span class="info no-wrap">{{seller.bulletin}}</span>
            <span class="icon"></span>
        </div>
    </div>
</template>
<script>
import uiStar from './ui-star.vue'
export default {
    components: {
        uiStar
    },
    props: ['seller'],
}
</script>
<style lang="less" scoped>
    .header {
        background-color: rgba(7,17,27,0.5);
        .top-content {
            padding-top: 24px;
            padding-left: 24px;
            padding-bottom: 18px;
            overflow: hidden;
            .avanta {
                float: left;
                width: 64px;
                height: 64px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .content {
                overflow: hidden;
                padding-left: 16px;
                .name {
                    // line-height: 16px;
                    // height: 16px;
                    color: #fff;
                    font-weight: bold;
                    span {
                        display: inline-block;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .title {
                        background-color: red;
                        text-align: center;
                        padding: 3px 4px;
                    }
                }
                .server {
                    color: #fff;
                    font-size: 12px;
                    margin: 8px 0 10px;
                }
                .promotion {
                    color: #fff;
                    font-size: 12px;
                    .icon {
                        width: 12px;
                        height: 12px;
                        background: url('../../resource/img/decrease_1@2x.png');
                        background-size: 100%;
                    }
                }
            }
        }
        .bot-content {
            height: 28px;
            line-height: 28px;
            padding: 0 12px;
            background-color: rgba(7,17,27,0.2);
            span {
                display: inline-block;
                font-size: 12px;
                color: #fff;
            }
            .label {
                margin-bottom: 6px;
                width: 24px;
                height: 16px;
                background-image: url('../../resource/img/bulletin@2x.png');
                background-size: 100% 100%;
            }
            .info {
                width: 85%;
            }
        }
    }
</style>