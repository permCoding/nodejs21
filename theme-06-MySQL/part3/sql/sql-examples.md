
```SQL
INSERT INTO `students` (`nameStud`, `rating`, `gender`, `date`, `city`) 
VALUES
('Мишкин', 217, 1, '2002-08-23', 'Кунгур'),
('Бортич', 224, 0, '2002-06-03', 'Лысьва'),
('Деревянко', 182, 0, '2002-02-20', 'Оса'),
('Столбова', 194, 0, '2003-01-22', 'Кунгур'),
('Хомич', 205, 0, '2002-04-23', 'Кунгур'),
('Круглов', 191, 1, '2002-04-23', 'Березники'),
('Иванов', 192, 1, '2002-05-17', 'Кунгур'),
('Петров', 191, 1, '2002-11-25', 'Кунгур'),
('Сидоров', 196, 1, '2004-01-20', 'Кунгур'),
('Капустин', 196, 1, '2002-06-04', 'Кунгур'),
('Томатова', 201, 0, '2003-04-16', 'Кунгур'),
('Ежова', 214, 0, '2001-10-07', 'Лысьва'),
('Микова', 222, 0, '2001-10-07', 'Пермь'),
('Мамин', 199, 1, '2001-11-10', 'Пермь'),
('Комов', 195, 1, '2002-01-17', 'Пермь');
```  

---  

CREATE TABLE `decan_faculty`.`students` ( `id` INT NOT NULL AUTO_INCREMENT , `lastName` VARCHAR(20) NOT NULL , `idGroup` INT NOT NULL , `idCity` INT NOT NULL , `idHobby` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `decan_faculty`.`marks` ( `keyStudent` INT NOT NULL , `keySubject` INT NOT NULL , `mark` SET('2','3','4','5') NOT NULL ) ENGINE = InnoDB;

ALTER TABLE `marks` ADD FOREIGN KEY (`keyStudent`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `marks` ADD FOREIGN KEY (`keySubject`) REFERENCES `edusubjects`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

INSERT INTO `edusubjects` (`id`, `nameSubject`) VALUES (NULL, 'АиП');

INSERT INTO `students` (`id`, `lastName`, `keyGroup`, `keyCity`, `keyHobby`) VALUES (NULL, 'Иванов', '1', '1', '1');

INSERT INTO `marks` (`keyStudent`, `keySubject`, `mark`) VALUES ('1', '3', '4');

INSERT INTO `marks` (`keyStudent`, `keySubject`, `mark`) VALUES ('2', '1', '5');
если назначен ключ по двум столбцам, то он будет вести контроль - чтобы не было у студента по этой же дисциплине второй оценки (только одна запись на пару `keyStudent`, `keySubject`)
INSERT INTO `marks` (`keyStudent`, `keySubject`, `mark`) VALUES ('2', '1', '5');

SELECT `edusubjects`.`nameSubject`, `students`.`lastName`, `marks`.`mark`
FROM `students`
INNER JOIN `marks` ON `students`.`id` = `marks`.`keyStudent`
INNER JOIN `edusubjects` ON `edusubjects`.`id` = `marks`.`keySubject`
ORDER BY `edusubjects`.`nameSubject` ASC, `students`.`lastName` ASC

SELECT `students`.`lastName`, ROUND(AVG(`marks`.`mark`),2) AS avg
FROM `students` INNER JOIN `marks` ON `students`.`id` = `marks`.`keyStudent`
GROUP BY `students`.`lastName`
HAVING avg < 4.0
ORDER BY avg DESC

CREATE TABLE `decan_faculty`.`studygroups` ( `id` INT NOT NULL AUTO_INCREMENT , `nameGroup` VARCHAR(10) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;


ALTER TABLE `students` ADD FOREIGN KEY (`keyGroup`) REFERENCES `studygroups`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;


SELECT `studygroups`.`nameGroup`, `students`.`lastName`
FROM `students`, `studygroups` 
-- WHERE `students`.`keyGroup` = `studygroups`.`id`
-- ORDER BY `studygroups`.`nameGroup` ASC

SELECT `studygroups`.`nameGroup`, `students`.`lastName` 
FROM `students` 
LEFT JOIN `studygroups` ON `students`.`keyGroup` = `studygroups`.`id` 
ORDER BY `studygroups`.`nameGroup`;

```
nameGroup lastName
ПИб-1 Иванов
ПИб-1 Бобко
ПИб-1 Мишкин
ПИнб-2 Сидоров
ПИнб-3 Петров
ПИнб-4 Хомкин
ПИнб-4 Клопова
```

SELECT `studygroups`.`id` FROM `studygroups` WHERE `studygroups`.`nameGroup` = 'ПИб-1';


SELECT `studygroups`.`nameGroup`, `students`.`lastName`
FROM `students`, `studygroups` 
WHERE `studygroups`.`nameGroup` = 'ПИб-1' AND `studygroups`.`id` = `students`.`keyGroup`
ORDER BY `students`.`lastName`

SELECT `studygroups`.`nameGroup`, `students`.`lastName`
FROM `students` 
INNER JOIN `studygroups` 
ON `studygroups`.`nameGroup` = 'ПИб-1' AND `studygroups`.`id` = `students`.`keyGroup`
ORDER BY `students`.`lastName`


===========

CREATE TABLE `decan_testing_queries`.`clients` ( `idClient` INT NOT NULL , `nameClient` VARCHAR(20) NOT NULL ) ENGINE = InnoDB;

INSERT INTO `clients` (`idClient`, `nameClient`, `numCard`) VALUES 
('1', 'Иванов', 120034),
('2', 'Петров', 120035),
('3', 'Мишкина', 120036),
('4', 'Абрамов', 200001),
('5', 'Дятько', 200002),
('6', 'Климов', 200003),
('7', 'Комова', 200004)

ALTER TABLE `clients` ADD `numCard` INT NULL AFTER `nameClient`;

UPDATE `clients` SET `numCard`=120034 WHERE `clients`.`idClient`=1



EXPLAIN SELECT `nameClient`, `numCard` FROM `clients` WHERE `nameClient` LIKE '%а'

id select_type table partitions type possible_keys key key_len ref rows filtered Extra
1 SIMPLE clients NULL ALL NULL NULL NULL NULL 7 14.29 Using where

ALTER TABLE `clients` ADD INDEX( `idClient`);

ALTER TABLE `clients` DROP INDEX `idClient`;

ALTER TABLE `decan_testing_queries`.`clients` DROP INDEX `idClient_2`, ADD UNIQUE `idClientIndex` (`idClient`) USING BTREE;


ALTER TABLE `decan_testing_queries`.`clients` DROP INDEX `nameClient`, ADD FULLTEXT `nameClient` (`nameClient`(5));


EXPLAIN SELECT * FROM `clients` WHERE `clients`.`numCard` = 200003

SELECT `clients`.`nameClient` FROM `clients` WHERE `clients`.`numCard` = 200003

ALTER TABLE `clients` ADD `emailClient` VARCHAR(20) NULL AFTER `numCard`;

SELECT * FROM `clients` WHERE `clients`.`emailClient` IS NOT NULL

SELECT * FROM `clients` WHERE `clients`.`numCard` LIKE '200%'

SELECT `clients`.`nameClient`, `clients`.`emailClient` 
FROM `clients` 
WHERE `clients`.`numCard` = 120036


ALTER TABLE `students` CHANGE `keyHobby` `birthData` DATE NULL;
ALTER TABLE `students` DROP `keyHobby`;
ALTER TABLE `students` ADD `birthData` DATE NULL AFTER `keyCity`;




