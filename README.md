# MLB-App


#######################################
	   Creating tables for battingavg, home runs and rbis to start
#######################################

CREATE TABLE `players` (
	`idPlayer` int(11) NOT NULL auto_increment,
    `firstName` varchar(50) NULL,
	`lastName` varchar(50) NULL,
	`position` varchar(50) NULL,
	`team` varchar(50) NULL,
	`battingavg` float(11) NULL,
    Constraint pk_idPlayer Primary key (idPlayer)
);

#######################################
	   Add values to table
#######################################

insert into stats
(firstName, lastName, position, team, pointsPerGame)
values('Aaron', 'Judge', 'RF', 'NYY', .323);

#######################################
	  Add multiple values to table
#######################################

insert into stats
(firstName, lastName, position, team, pointsPerGame)
values('Michael', 'Brantley', 'DH', 'MIN', .341),


#######################################
	   Select all values from table
#######################################

SELECT * from players;

#######################################
	   Sort data
#######################################

select * from players order by battingavg desc ;

