db.superheroes.find({ "aspects.hairColor" : { $nin: ["Black", "No Hair"] } }).count();
