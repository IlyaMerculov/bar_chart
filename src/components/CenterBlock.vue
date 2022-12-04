<template>
    <div class="center-block flex">
        <div class="center-block-content flex" >
            <div class="center-block-period flex">
                <div class="center-block-period-data flex">
                    <div class="center-block-period-text flex">
                        Выберите дату начала периода
                    </div>
                    <input type="date" name="" id=""  v-model="startDate">
                </div>
                <div class="center-block-period-data flex">
                    <div class="center-block-period-text flex">
                        Выберите дату конца периода
                    </div>
                    <input type="date" name="" id="" v-model="finishDate" @input="date">
                </div>
            </div>
            <SelfResourses />
            <IncomeExpense />
            <div class="center-block-next-prev-buttons flex">
                <div class="center-block-next-prev-buttons-frame flex">
                    <div class="center-block-next-prev-button flex" title="Предыдущий график" @click="changeGraphic">
                        <img class="ico" src="@/assets/back.png" >
                    </div>
                    <div class="center-block-next-prev-button flex" title="Следующий график" @click="changeGraphic">
                        <img class="ico" src="@/assets/next.png" >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SelfResourses from './charts/SelfResourses.vue';
import IncomeExpense from './charts/IncomeExpenses.vue';
import { mapActions } from 'vuex'

export default {
    components:{
        SelfResourses,
        IncomeExpense,
    },
    name: 'CenterBlock',
    data(){
        return {
            startDate: '',
            finishDate: '',
        }
    },
  
    methods:{
        date(){
            console.log(this.startDate, this.finishDate)
            let start = parseInt(this.startDate.split('-')[1])
            let finish = parseInt(this.finishDate.split('-')[1])
            console.log(start, finish)
            this.$store.dispatch('getPeriod', start + '-' + finish)
            // return this.startDate + this.finishDate
        },
 
        ...mapActions({
            changeGraphic: 'changeGraphics',
        })
    }
}

</script>
<style>
    .center-block{
        height: 100%;
        width: 100%;
    }
    .center-block-content{
        width: 100%;
        height: 97%;
        background-color: #f1efef;
        border-radius: 15px;
        margin: 20px 20px 20px 0;
        flex-direction: column;
    }
    .center-block-period{
        width: 97%;
        height: 100px;
        margin: 70px 0 0 0;
    }
    .center-block-period-data{
        height: 100%;
        width: 50%;
        justify-content: space-evenly
    }
    .center-block-period-text{
        justify-content: center;
        height: 100%;
        width: 50%;
    }
    input[type="date"]{
        width: 170px;
        height: 30px;
        border-radius: 10px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        padding: 10px;
    }
    .center-block-next-prev-buttons{
        width: 100%;
        height: 200px;
        justify-content: center;
    }
    .center-block-next-prev-buttons-frame{
        width: 250px;
        height: 100%;
        justify-content: space-between
    }
    .center-block-next-prev-button{
        height: 60px;
        width: 60px;
        background-color: #ffffff;
        justify-content: center;
        border-radius: 100%;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
    }
    .ico{
        width: 30px
    }
    .center-block-next-prev-button:hover{
        background-color: #e9e9e9;
        box-shadow: 0px 0px 6px 0px;
    }
    .center-block-next-prev-button:active{
        background-color: #e9e9e9;
        box-shadow: 0px 0px 6px 0px;
        transform: scale(0.9, 0.9);
    }
</style>