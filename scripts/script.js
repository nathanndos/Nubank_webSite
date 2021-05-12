var app = angular.module('appMain',[])

app.controller('controllerMain',function($scope){

    $scope.tipoConta = ['Corrente','Poupança','Salario','Universitária','Digital']
    //Vetor com tipos de Conta

    $scope.agencia = [547, 444 ,312, 217, 171] //Vetor com tipos de Agencia

    $scope.clientes = [ //Vetor de clientes
        {numConta:'12345',
        numAgencia:$scope.agencia[1],
        nome:'Marcos', 
        tipoDeConta:$scope.tipoConta[3],
        saldo: '1573.50' ,
        criadoEm: new Date()},

        {numConta:'25462',
        numAgencia:$scope.agencia[2],
        nome:'Carla', 
        tipoDeConta:$scope.tipoConta[0],
        saldo: '987.35' ,
        criadoEm: new Date()},

        {numConta:'31471',
        numAgencia:$scope.agencia[0],
        nome:'Zack', 
        tipoDeConta:$scope.tipoConta[1],
        saldo: '3687.69' ,
        criadoEm: new Date()},

        {numConta:'13452',
        numAgencia:$scope.agencia[4],
        nome:'Ana', 
        tipoDeConta:$scope.tipoConta[1],
        saldo: '435.22' ,
        criadoEm: new Date()},

    ]

    $scope.confirmarCadastro = function(cliente){
        cliente.criadoEm = new Date();
        $scope.clientes.push(angular.copy(cliente))
        $scope.limparDados();
    }

    $scope.limparDados = function(){
        delete $scope.cliente
        $scope.formRegister.$setUntouched();
        $scope.formRegister.$setPristine();
    }
    $scope.deleteClient = function(cliente, clientes){
        for(var i = 0; i < clientes.length; i++){
            if(clientes[i].numConta == cliente.numConta){
                clientes = clientes.splice(i,1)
            }
        }
    }
    $scope.orderFor = function(_typeOrder){
        $scope.typeOrder = _typeOrder
        $scope.order = !$scope.order
    }
})
