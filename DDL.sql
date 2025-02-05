SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;


CREATE OR REPLACE TABLE Trainers (
    trainer_id int NOT NULL AUTO_INCREMENT,
    items_held char(50) NOT NULL,
    battle_record int(11) NOT NULL,
    PRIMARY KEY (trainer_id)
);

CREATE OR REPLACE TABLE Battles (
    battle_id int NOT NULL AUTO_INCREMENT,
    trainer_id int NOT NULL,
    result tinyint(1) NOT NULL,
    PRIMARY KEY(battle_id),
    FOREIGN KEY (trainer_id) REFERENCES Trainers(trainer_id)
);

CREATE OR REPLACE TABLE Pokemon (
    pokemon_id int NOT NULL AUTO_INCREMENT,
    pokemon_name char(20) NOT NULL,
    pokemon_type char NOT NULL,
    health int(10) NOT NULL,
    PRIMARY KEY (pokemon_id)
);
--intersection table
CREATE OR REPLACE TABLE Pokemon_Trainers (  
    pokemon_trainer_id int NOT NULL AUTO_INCREMENT,
    pokemon_id int NOT NULL,
    trainer_id int NOT NULL,
    PRIMARY KEY (pokemon_trainer_id),
    FOREIGN KEY (pokemon_id) REFERENCES Pokemon(pokemon_id),
    FOREIGN KEY (trainer_id) REFERENCES Trainers(trainer_id)
);

CREATE OR REPLACE TABLE Gyms (
    gym_id int NOT NULL AUTO_INCREMENT,
    gym_leader_id int NOT NULL,
    PRIMARY KEY (gym_id),
    FOREIGN KEY (gym_leader_id) REFERENCES Trainers(trainer_id)
);

CREATE OR REPLACE TABLE Moves (
    move_id int NOT NULL AUTO_INCREMENT,
    move_type char(10) NOT NULL,
    move_dmg int(5) NOT NULL,
    move_name char(15) NOT NULL,
    PRIMARY KEY (move_id)
);
--intersection table
CREATE OR REPLACE TABLE Pokemon_Moves ( 
    pokemon_moves_id int NOT NULL AUTO_INCREMENT,
    move_id int NOT NULL,
    pokemon_id int NOT NULL,
    PRIMARY KEY (pokemon_moves_id),
    FOREIGN KEY (move_id) REFERENCES Moves(move_id),
    FOREIGN KEY (pokemon_id) REFERENCES Pokemon(pokemon_id)
);

INSERT INTO Pokemon (pokemon_name, pokemon_type, health)
VALUES ("Cat", "Normal", 10),
("Dog", "Fighting", 11),
("Rat", "Darkness", 5),
("Bird", "Flying", 7);

INSERT INTO Trainers (items_held, battle_record)
VALUES ("Potion", 0),
("Egg", 1),
("Potion", 3),
("Bandage", 5);

INSERT INTO Moves (move_type, move_dmg, move_name)
VALUES("fire", 10, "fireball"),
("water", 5, "water gun"),
("earth", 11, "rock"),
("air", 4, "gust");

INSERT INTO Pokemon_Trainers(pokemon_id, trainer_id)
VALUES(1,1),
(2,1),
(3,2);

SELECT * FROM Pokemon;

SELECT * FROM Trainers;

SELECT * FROM Moves;

--displays trainers team based on trainer id. 
SELECT Pokemon.pokemon_name, Trainers.items_held, Trainers.battle_record
FROM Pokemon_Trainers
INNER JOIN Pokemon ON Pokemon_Trainers.pokemon_id = Pokemon.pokemon_id
INNER JOIN Trainers ON Pokemon_Trainers.trainer_id = Trainers.trainer_id
WHERE Trainers.trainer_id = 1; 

SET FOREIGN_KEY_CHECKS=1;
COMMIT;
