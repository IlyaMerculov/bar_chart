<template>
    <div :class="{incomeExpenses: visibleIncomeExpenses, flex: visibleIncomeExpenses, hideIncome: !visibleIncomeExpenses}">
        <canvas ref="incomeExpenses" :class="{ hideIncome: !visibleIncomeExpenses}"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js/auto'
import { mapGetters } from 'vuex'
let delayed
export default {
    name: "IncomeExpenses",
    data(){
        return {

        }
    },
    methods:{
        createChart(){
        new Chart(this.$refs.incomeExpenses, {
            type: 'bar',
            data: {
            labels: ['Доходы', 'Расходы'],
            datasets: this.incomeValues,
            },
            options: {
                animation:{
                    onComplete: () => {
                    delayed = true;
                    },
                    delay: (context) => {
                        let delay = 0;
                        if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                        }
                        return delay;
                    },
                },
                indexAxis: 'y',
                plugins:{
                    title: {
                        display: true,
                        text: 'СОБСТВЕННЫЕ СРЕДСТВА ДОХОДЫ - РАСХОДЫ'
                    }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            
                        }
                    },
                    x: {
                        // beginAtZero: true,
                      
                        min: 0,
                        max: 150000,
                        ticks: {
                            stepSize: 25000
                        }
                    },
                
                }
            }
        });
        }
    },
    computed:{
        ...mapGetters([
            'incomeValues',
            'visibleIncomeExpenses'
        ])
    },
    mounted(){
        console.log(this.$refs.canvas, Chart)
    this.createChart()
    }
}
</script>
<style>
    .incomeExpenses{
        width: 100%;
        height: 60%;
        justify-content: center;
    }
    .hideIncome{
        display: none;
    }
</style>