Meteor.methods({

	adicionar : function(obj) {
		Tarefas.insert({nome: obj.nome, data: new Date()});
	},

	remover : function(id) {
		Tarefas.remove({_id: id});
	}

});