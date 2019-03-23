<template>
    <div class="star fr">
        <span v-for="item in scoreArr" :class="item"></span>
    </div>
</template>
<script>
export default {
    props:['score'],
    data() {
        return {
            
        }
    },
    computed: {
        scoreArr() {
            let arr = []
            let int = Math.floor(this.score)
            for(let i=0; i<int; i++) {
                arr.push('hightLight')
            }
            let drease = this.score - int
            if (drease ==0 ) {
                for (let j =int; j<5; j++) {
                    arr.push('gray')
                }
            } else if (drease < 0.5) {
                for (let j =int; j<5; j++) {
                    if (j = int) {
                        arr.push('half')
                    } else {
                        arr.push('gray')
                    }
                }
            } else {
                for (let j =int; j<5; j++) {
                    if (j = int) {
                        arr.push('hightLight')
                    } else {
                        arr.push('gray')                        
                    }
                }
            } 
            return arr
        }
    },
}
</script>
<style lang="less" scoped>
.star {
    margin-right: 10px;
    span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-size: 100%;
        margin-right: 3px;
        &.hightLight {
            background-image: url('../../resource/img/star24_on@2x.png');
        }
        &.half {
            background-image: url('../../resource/img/star24_half@2x.png');
        }
        &.gray {
            background-image: url('../../resource/img/star24_off@2x.png');
        }
    }
}
</style>