Template.adicionar.events({

	'submit #form-adicionar': function(e, template){
		
		//to cancel default form submit
		e.preventDefault(); 

		var input = $('#tarefa');		
		var nome = input.val();
		
		if(nome != '') {
			//Tarefas.insert({nome: nome, data: new Date()});
			Meteor.call("adicionar", {nome: nome});

			input.val('');
		}

	}
});