SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;


CREATE OR REPLACE TABLE Trainers (
    trainer_id int NOT NULL AUTO_INCREMENT,
    item_held varchar(50) NOT NULL,
    battle_record int(11) NOT NULL,
    trainer_name varchar(15) NOT NULL,
    PRIMARY KEY (trainer_id)
);

CREATE OR REPLACE TABLE Battles (
    battle_id int NOT NULL AUTO_INCREMENT,
    trainer_1_id int NOT NULL,
    trainer_2_id int NOT NULL,
    result tinyint(1) NOT NULL,
    PRIMARY KEY(battle_id),
    FOREIGN KEY (trainer_1_id) REFERENCES Trainers(trainer_id) ON DELETE CASCADE,
    FOREIGN KEY (trainer_2_id) REFERENCES Trainers(trainer_id) ON DELETE CASCADE
);

CREATE OR REPLACE TABLE Pokemon (
    pokemon_id int NOT NULL AUTO_INCREMENT,
    pokemon_name varchar(20) NOT NULL,
    pokemon_type varchar(20) NOT NULL,
    health int(10) NOT NULL,
    PRIMARY KEY (pokemon_id)
);
-- intersection table
CREATE OR REPLACE TABLE Pokemon_Trainers (  
    pokemon_trainer_id int NOT NULL AUTO_INCREMENT,
    pokemon_id int NOT NULL,
    trainer_id int NOT NULL,
    PRIMARY KEY (pokemon_trainer_id),
    FOREIGN KEY (pokemon_id) REFERENCES Pokemon(pokemon_id) ON DELETE CASCADE,
    FOREIGN KEY (trainer_id) REFERENCES Trainers(trainer_id) ON DELETE CASCADE
);

CREATE OR REPLACE TABLE Gyms (
    gym_id int NOT NULL AUTO_INCREMENT,
    gym_leader_id int,
    PRIMARY KEY (gym_id),
    FOREIGN KEY (gym_leader_id) REFERENCES Trainers(trainer_id) ON DELETE CASCADE
);

CREATE OR REPLACE TABLE Moves (
    move_id int NOT NULL AUTO_INCREMENT,
    move_type varchar(10) NOT NULL,
    move_dmg int(5) NOT NULL,
    move_name char(15) NOT NULL,
    PRIMARY KEY (move_id)
);
-- intersection table
CREATE OR REPLACE TABLE Pokemon_Moves ( 
    pokemon_moves_id int NOT NULL AUTO_INCREMENT,
    pokemon_id int NOT NULL,
    move_id int NOT NULL,
    PRIMARY KEY (pokemon_moves_id),
    FOREIGN KEY (move_id) REFERENCES Moves(move_id) ON DELETE CASCADE,
    FOREIGN KEY (pokemon_id) REFERENCES Pokemon(pokemon_id) ON DELETE CASCADE
);
-- data
INSERT INTO Pokemon (pokemon_name, pokemon_type, health)
VALUES ("Farfetch'd", "Fighting", 80),
("Bulbasaur", "Grass", 90),
("Charmander", "Fire", 95);


INSERT INTO Trainers (items_held, battle_record, trainer_name)
VALUES ("Potion", 0, "Ash"),
("Egg", 1, "Red"),
("Revive", 5, "Amethio");

INSERT INTO Moves (move_type, move_dmg, move_name)
VALUES("Fighting", 10, "Rock Smash"),
("Fire", 12, "Fireball"),
("Grass", 10, "Vine Whip");

-- pokemon are assigned to trainers through Pokemon_Trainers based on their id number in their respective tables
INSERT INTO Pokemon_Trainers(pokemon_id, trainer_id)
VALUES(1,1),
(2,2),
(3,3);

-- Moves are assinged to Pokemon through Pokemon_moves based on their id number in their respective tables
INSERT INTO Pokemon_Moves(pokemon_id, move_id)
VALUES(1,1),
(2,3),
(3,2);

-- result is 1 for win or 0 for loss. Result is based on trainer_1
INSERT INTO Battles(trainer_1_id,trainer_2_id, result)
VALUES(1,2,1),
(2,3,1),
(3,1,1);

INSERT INTO Gyms(gym_leader_id)
VALUES(1),
(2),
(3);



SET FOREIGN_KEY_CHECKS=1;
COMMIT;
