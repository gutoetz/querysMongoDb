db.produtos.updateOne({nome: "Big Mac"}, { $currentDate: { ultimaModificao: {$type: "timestamp" } } }); 
db.produtos.find({ultimaModificao: {$exists: true}}, { nome: 1, _id: 0});