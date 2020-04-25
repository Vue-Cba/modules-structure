export default {

    state: {
        registers: [
            { name: 'Franco',lastname: 'Colares'},
            { name: 'Joel Alejandro',lastname: 'Villarreal'},
            { name: 'Franco',lastname: 'Dalmasso'},
            { name: 'Nicolás',lastname: 'Frati'},
            { name: 'Lari',lastname: 'Díaz'},
        ]
    },

    getters: {
        getAllRegisters (state) {
            return state.registers
        },

        getRegister: (state) => (id) => {
            return state.registers[id]
        },
    },

    actions: {
        addRegister ({commit, state}, toAdd) {
            const registers = state.registers;
            registers.push(toAdd)
            commit('REFRESH_STATE', registers)
        },
        updateRegister({commit, state}, id, toUpdate){
            const registers = state.registers;
            registers[id] = toUpdate
            commit('REFRESH_STATE', registers)
        },
        deleteRegister({commit, state}, id){
            const registers = state.registers;
            const firstPart = registers.slice(0, id)
            const lastPart = registers.slice(id+1, registers.length)
            commit('REFRESH_STATE', 'registers' ,firstPart.concat(lastPart))
        }
    },

    mutations: {
        REFRESH_STATE (state, key, value) {
            state[key] = value 
        }
    }

}