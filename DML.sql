-- list of queries
-- update team
-- display team
-- display gym
-- display the two trainers that will battle
-- choose pokemon moves
-- display pokemon information
-- change gym leader
-- Delete moves off of a pokemon
-- Delete pokemon off of a trainers team


-- Add a move to a Pokemon's moveset
INSERT INTO Pokemon_Moves(pokemon_id, move_id) VALUES (
    (SELECT Pokemon.pokemon_id FROM Pokemon WHERE Pokemon.pokemon_name = pokemon_name_from_form),
    (SELECT Moves.move_id FROM Moves WHERE Moves.move_name = move_name_from_form)
);

-- displays trainers team based on trainer id. 
SELECT Pokemon.pokemon_name, Trainers.items_held, Trainers.battle_record
FROM Pokemon_Trainers
INNER JOIN Pokemon ON Pokemon_Trainers.pokemon_id = Pokemon.pokemon_id
INNER JOIN Trainers ON Pokemon_Trainers.trainer_id = Trainers.trainer_id
WHERE Trainers.trainer_id = trainer_id_from_form; -- id corresponds to what trainer is selected

-- displays pokemon and their respective moves
SELECT Pokemon.pokemon_name, Moves.move_name, Moves.move_type, Moves.move_dmg
FROM Pokemon_Moves
INNER JOIN Pokemon ON Pokemon_Moves.pokemon_id = Pokemon.pokemon_id
INNER JOIN Moves ON Pokemon_Moves.move_id = Moves.move_id
WHERE Pokemon.pokemon_id = pokemon_id_from_form; -- id corresponds to what pokemon is selected

-- display gym plus leader
-- Display gym leader team using the query above? Just need ID from form.
SELECT Gyms.gym_leader_id
FROM Gyms
WHERE Gyms.gym_leader_id = gym_leader_id_from_form


-- displays the two trainers that will be in the battle.
SELECT Battles.trainer_1_id, Battles.trainer_2_id
FROM Battles
WHERE Battles.trainer_1_id_from_form AND Battles.trainer_2_id_from_form



-- Changes the selected pokemons moves
UPDATE Pokemon_Moves
SET pokemon_id = pokemon_id_from_form, move_id = move_id_from_form
WHERE pokemon_moves_id = pokemon_moves_id_from_form --the user would select which "section" they want the move. Each pokemon has 6 possible
-- section would correspond to pokemon_moves_id 1-6

-- changing pokemon
UPDATE Pokemon_Trainers
SET trainer_id = trainer_id_from_form, pokemon_id = pokemon_id_from_form
WHERE pokemon_trainer_id = pokemon_trainer_id_from_form

-- change gym leader
UPDATE Gyms
SET gym_leader_id = gym_leader_id_from_form
WHERE gym_id = gym_id_from_form


-- deletes a move from the pokemon
DELETE FROM Pokemon_Moves
WHERE move_name = move_name_from_form && pokemon_id = pokemon_id_from_form

-- delete pokemon from a trainers team
DELETE FROM Pokemon_Trainers
WHERE pokemon_id = pokmon_id_from_form AND trainer_id = trainer_1_id_from_form



