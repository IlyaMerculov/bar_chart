<template>
    <div :class="{selfResourses: visibleSelfResourses, flex: visibleSelfResourses, hideSelf: !visibleSelfResourses}">
        <canvas  ref="selfResourses"  :class="{hideSelf: !visibleSelfResourses}"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js/auto'
import { mapGetters } from 'vuex'

let delayed
// let chart
export default {
    name: "SelfResourses",
    data(){
        return {
            chart:'',
            newPeriod: ''
        }
    },
    watch:{
        
        newPeriod(){
            this.newPeriod = this.dataPeriods
            // this.createChart()
            console.log(this.chart)
            // this.createChart()
        }
    },
    methods:{
       createChart(){
        this.chart = new Chart(this.$refs.selfResourses, {
            type: 'bar',
            data: {
            labels: this.dataPeriods,
            datasets: [{
                    label: 'доход собств. средств, факт, тыс.руб',
                    data: this.selfValues,
                    backgroundColor: '#7DAE75',
                    borderWidth: 1
                },
                {
                    label: 'расход собств. средств, факт, тыс.руб',
                    data: this.expensesValues,
                    borderWidth: 1
            },
            ]
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
                plugins:{
                    title: {
                        display: true,
                        text: 'ДОХОДЫ - РАСХОДЫ'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'мес'
                        },
                    },
                    y: {
                        // beginAtZero: true,
                        title: {
                            display: true,
                            text: 'тыс.руб.,накоплено'
                        },
                        min: 0,
                        max: 150000,
                        ticks: {
                            stepSize: 25000
                        },
                        
                    },
                
                }
            }
        }).reset()
        
        
       
        },
    
    },
    computed:{
        ...mapGetters([
            'selfValues',
            'expensesValues',
           
        ]),
        dataPeriods(){
            
            return this.$store.getters.dataPeriods
        },
        visibleSelfResourses(){
            // if() this.destroy()
            // console.log(this.chart.data.labels)
            // this.chart.update()
            // if (this.$store.getters.visibleSelfResourses) this.createChart()
            return this.$store.getters.visibleSelfResourses
        },
        // getNewPeriod(){

        // }
    },
    mounted(){
        this.newPeriod = this.dataPeriods
        
        // this.newPeriod = this.dataPeriods
        this.createChart()
        console.log(this.$refs.canvas, this.chart)
    }
}
</script>
<style>
    .selfResourses{
        width: 100%;
        height: 60%;
        justify-content: center;
    }
    .hideSelf{
        display: none;
    }
</style>