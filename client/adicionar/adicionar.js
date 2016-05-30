Template.adicionar.events({

	"submit form": function(e, template){
		
		//to cancel default form submit
		e.preventDefault(); 

		var input = $('#tarefa');		
		var nome = input.val();
		
		Tarefas.insert({nome: nome, data: new Date()});
		input.val('');
		
	}
});