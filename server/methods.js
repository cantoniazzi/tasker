Meteor.methods({

	adicionar : function(obj) {
		Tarefas.insert({nome: obj.nome, data: new Date(),
			usuario: this.userId});
	},

	remover : function(id) {
		Tarefas.remove({_id: id, usuario: this.userId});
	}

});