var vm = new Vue({
    el: '#app',
    data: {
        qtd: 0,
        obs: '',
        checkedLanguages: []
    },
    methods: {
        addQtd: function (){
            this.qtd++;
        },
        removeQtd: function (){
            if(this.qtd > 0) this.qtd--;
        },
        changeObs: function (event){
            this.obs = event.target.value;
        },
        clearForm: function (){
            this.qtd = 0;
            this.obs = '';
            this.checkedLanguages = [];
        },
        send: function (){

            if(this.checkedLanguages.length === 0) return alert('É necessário escolher pelo menos uma linguagem!');
            if(this.qtd === 0) return alert('Quantidade de código deve ser maior que zero!');

            console.log({
                qtd: this.qtd,
                obs: this.obs,
                languages: this.checkedLanguages
            });

            this.clearForm();

            alert('Compra realizada!');

        }
    }
})
