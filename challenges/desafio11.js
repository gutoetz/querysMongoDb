db.produtos.find({nome: {$nin: ["Big Mac", "McChicken"] } },
 {"nome": 1, "_id": 0, "curtidas": 1, "vendidos": 1});