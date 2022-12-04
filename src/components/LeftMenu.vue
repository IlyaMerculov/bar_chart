<template>
    <div class="left-menu flex">
        <div class="left-menu-toolbar flex">
            <div class="left-menu-rus-flag flex">
                <img src="@/assets/russia.png" alt="">
            </div>
            <div class="left-menu-buttons flex">
                
                <div id="meetings" class="button flex" :class="{buttonActive: meetingsV}" @click="meetingsU()">
                    <div class="button-text flex">Оперативные совещания</div>    
                </div>
                <div id="orders" class="button flex" :class="{buttonActive: ordersV}" @click="ordersU()">
                    <div class="button-text flex">Поручения Правительства РФ</div>
                </div>
                <div id="requests" class="button flex" :class="{buttonActive: requestsV}" @click="requestsU()">
                    <div class="button-text flex">Запросы Правительства РФ</div>
                </div>
                <div id="projects" class="button flex" :class="{buttonActive: projectsV}" @click="projectsU()">
                    <div class="button-text flex">Проекты</div>
                </div>
                <div id="finance" class="button flex" :class="{buttonActive: financeV}" @click="financeU()">
                    <div class="button-text flex">Финансы</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'LeftMenu',
    data(){
        return {

        }
    },
    methods:{
        meetingsU(){
            this.$store.dispatch('meetingsState', true)
            this.$store.dispatch('ordersState', false)
            this.$store.dispatch('requestsState', false)
            this.$store.dispatch('projectsState', false)
            this.$store.dispatch('financeState',false)
        },
        ordersU(){
            this.$store.dispatch('meetingsState', false)
            this.$store.dispatch('ordersState', true)
            this.$store.dispatch('requestsState', false)
            this.$store.dispatch('projectsState', false)
            this.$store.dispatch('financeState',false)
        },
        requestsU(){
            this.$store.dispatch('meetingsState', false)
            this.$store.dispatch('ordersState', false)
            this.$store.dispatch('requestsState', true)
            this.$store.dispatch('projectsState', false)
            this.$store.dispatch('financeState',false)
        },
        projectsU(){
            this.$store.dispatch('meetingsState', false)
            this.$store.dispatch('ordersState', false)
            this.$store.dispatch('requestsState', false)
            this.$store.dispatch('projectsState', true)
            this.$store.dispatch('financeState',false)
        },
        financeU(){
            this.$store.dispatch('meetingsState', false)
            this.$store.dispatch('ordersState', false)
            this.$store.dispatch('requestsState', false)
            this.$store.dispatch('projectsState', false)
            this.$store.dispatch('financeState',true)
        },
    },
    computed:{
        ...mapGetters([
            'meetingsV',
            'ordersV',
            'requestsV',
            'projectsV',
            'financeV',
           
        ]),
    }
}

</script>
<style>
    .left-menu{
        height: 100%;
        width: 120px;
    }
    .left-menu-toolbar{
        width: 100%;
        height: 97%;
        flex-direction: column;
        justify-content: flex-start;
    }
    .left-menu-rus-flag{
        justify-content: center;
        width: 100%;
        height: 80px;
    }
    .left-menu-rus-flag > img{
        width: 80px;
    }
    .left-menu-buttons{
        color: #ffffff;
        flex-direction: column;
        margin: 15px 0 0 0 ;
    }
    .button{
        width: 100%;
        height: 60px;
        font-size: 0.7em;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
    }
    .button:hover{
        background-color: #e3e3e33d;
    }

    .buttonActive{
        width: 100%;
        height: 60px;
        font-size: 0.7em;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        background-color: #e3e3e33d;
    }
    
    .button-text{
        width: 98%;
        height: 100%;
        justify-content: center;
    }
</style>