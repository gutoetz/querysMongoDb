db.produtos
.find({$and:[{"tags": {$exists: false}}, {"vendidos": {$ne: 50}}]}
, {"nome": 1, "vendidos": 1,"_id": 0});