import { createStore } from "vuex";

const store = createStore({
    state (){
        return {
            SelfValues:  [
                {
                    x:1, y:50000
                },
                {
                    x:2, y:60000
                },
                {
                    x:3, y:70000
                },
                {
                    x:4, y:80000
                },
                {
                    x:5, y:90000
                },
                {
                    x:6, y:100000
                }
            ],
            ExpensesValues: [
                {
                    x:1, y:10000
                },
                {
                    x:2, y:20000
                },
                {
                    x:3, y:30000
                },
                {
                    x:4, y:40000
                },
                {
                    x:5, y:50000
                },
                {
                    x:6, y:60000
                }
            ],
            IncomeValues: [
                {
                    label: 'ВХОДЯЩИЙ ОСТАТОК',
                    data: [{
                        x: 50000, y:'Доходы'
                    }],
                    backgroundColor: '#6067B1',
                    borderWidth: 1
                },
                {
                    label: 'ПЛАН',
                    data: [{
                        x: 100000, y:'Доходы'
                    }],
                    backgroundColor: '#649CF5',
                    borderWidth: 1
                },
                {
                    label: 'ЗАКЛЮЧЕНО ДОГОВОРОВ',
                    data: [{
                        x: 80000, y:'Доходы'
                    }],
                    backgroundColor: '#034732',
                    borderWidth: 1
                },
                {
                    label: 'ПОСТУПИЛО СРЕДСТВ НА СЧЕТ',
                    data: [{
                        x: 40000, y:'Доходы'
                    }],
                    backgroundColor: '#0CA071',
                    borderWidth: 1
                },
                {
                    label: 'ПОТРАЧЕНО',
                    data: [{
                        x: 60000, y:'Расходы'
                    }],
                    backgroundColor: '#FFBC42',
                    borderWidth: 1
                },
                {
                    label: 'ОСТАТОК НА СЧЕТЕ',
                    data: [{
                        x: 40000, y:'Расходы'
                    }],
                    backgroundColor: '#CE8704',
                    borderWidth: 1
                }
            ],
            periods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            selfResoursesVisible: true,
            incomeExpensesVisible: false,
            meetings: false,
            orders: false,
            requests: false,
            projects: false,
            finance: true,
        }
    },
    getters:{
        selfValues(state){
            return state.SelfValues
        },
        expensesValues(state){
            return state.ExpensesValues
        },
        incomeValues(state){
            return state.IncomeValues
        },
        dataPeriods(state){
             return state.periods
        },
        visibleSelfResourses(state){
            return state.selfResoursesVisible
        },
        visibleIncomeExpenses(state){
            return state.incomeExpensesVisible
        },
        meetingsV(state){
            return state.meetings
        },
        ordersV(state){
            return state.orders
        },
        requestsV(state){
            return state.requests
        },
        projectsV(state){
            return state.projects
        },
        financeV(state){
            return state.finance
        },
    },
    mutations: {
        vchange(state){
            state.selfResoursesVisible = !state.selfResoursesVisible
            state.incomeExpensesVisible = !state.selfResoursesVisible
            console.log()
        },
        getNewPeriod(state, val){
            let [start, end] = val.split('-')
            if (parseInt(end) == 12) {
                state.periods = state.periods.slice(parseInt(start) - 1)
            } else {
                state.periods = state.periods.slice(parseInt(start) - 1, parseInt(end))
            }
            console.log(store.state.periods)
        },
        meetingsVisible(state, val){
            state.meetings = val
        },
        ordersVisible(state, val){
            state.orders = val
        },
        requestsVisible(state, val){
            state.requests = val
        },
        projectsVisible(state, val){
            state.projects = val
        },
        financeVisible(state, val){
            state.finance = val
        },
      
    },
    actions:{
        changeGraphics(act){
            act.commit('vchange')
        },
        getPeriod(act, val){
            console.log(val)
            // let mas = val.map( el => parseInt(el) )
            act.commit('getNewPeriod', val)
        },
        meetingsState(act, val){
            act.commit('meetingsVisible', val)
        },
        ordersState(act, val){
            act.commit('ordersVisible', val)
        },
        requestsState(act, val){
            act.commit('requestsVisible', val)
        },
        projectsState(act, val){
            act.commit('projectsVisible', val)
        },
        financeState(act, val){
            act.commit('financeVisible',val)
        },
    }
})

export default store