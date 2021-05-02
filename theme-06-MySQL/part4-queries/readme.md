# Library mysql2

## Директория part4-queries - разбор программ  

В данной директории приведены примеры программ по организации запросов к связанным таблицам и некоторые другие особенные запросы.  

Будем использовать MySQL 8, документация [MySQL 8](https://dev.mysql.com/doc/refman/8.0/en/sql-data-manipulation-statements.html)  

## Введение в язык структурированных запросов SQL

Предполагается, что данные распределены по таблицам и могут иметь логические связи между полями таблиц.  

Синтаксис SQL включает несколько категорий команд, основные из них:  

1) DDL – язык определения данных (Data Definition Language) - для декларации структуры таблиц;  
2) DML – язык манипулирования данными (Data Manipulation Language)- для изменения записей в таблицах;  
3) DQL – язык запросов (Data Query Language) - для выборки данных из таблиц;  
4) DCL – язык управления данными (Data Control Language) - для управления доступом к таблицам.  

Начальный уровень подготовки по реляционным базам данных можно ограничить:  
Подмножеством команд DQL:  
SELECT  
Подмножеством команд DML:  
INSERT, UPDATE, DELETE  
Подмножеством команд DDL:  
CREATE TABLE, ALTER TABLE, DROP TABLE, CREATE INDEX, ALTER INDEX, DROP INDEX  

```SQL
CREATE TABLE `abiturs` (
    `id` INT NOT NULL AUTO_INCREMENT , 
    `firstName` VARCHAR(20) NOT NULL , 
    `lastName` VARCHAR(20) NOT NULL , 
    `rating` INT NOT NULL , 
    `city` VARCHAR(20) NULL , 
    PRIMARY KEY (`id`)
);
```

```SQL
INSERT INTO abiturs (firstName, lastName, rating, city) 
VALUES 
    ('Женя','Мишкин','217','Кунгур'),
    ('Роман','Бортич','224','Лысьва'),
    ('Оксана','Деревянко','182','Оса'),
    ('Анна','Столбова','194','Кунгур'),
    ('Женя','Хомич','205','Кунгур'),
    ('Коля','Круглов','191','Березники'),
    ('Иван','Иванов','192','Кунгур'),
    ('Петя','Петров','191','Кунгур'),
    ('Женя','Сидоров','196','Кунгур'),
    ('Егор','Капустин','196','Кунгур'),
    ('Алиса','Томатова','201','Кунгур'),
    ('Клава','Ежова','214','Лысьва'),
    ('Женя','Микова','222','Пермь'),
    ('Иаков','Мамин','199','Пермь'),
    ('Стёпа','Комов','195','Пермь');
```

```SQL
UPDATE `abiturs` SET `city`=1;
```

```SQL
ALTER TABLE `abiturs`
MODIFY `city` int NULL;
```

```SQL
CREATE TABLE `cities` (
    `id` INT NOT NULL AUTO_INCREMENT , 
    `nameCity` VARCHAR(20) NOT NULL , 
    PRIMARY KEY (`id`)
);
```

```SQL
INSERT INTO `cities` (`id`, `nameCity`) 
VALUES 
    (1, 'Березники'),
    (2, 'Кунгур'),
    (3, 'Лысьва'),
    (4, 'Оса'),
    (5, 'Пермь');
```

```SQL
-- 1
SELECT CONCAT_WS(' ', `abiturs`.`lastName`, `abiturs`.`firstName`) as abiturient, `abiturs`.`rating`, `cities`.`nameCity` 
FROM `abiturs`, `cities` 
WHERE `abiturs`.`keyCity` = `cities`.`idCity`
ORDER BY `abiturs`.`rating` DESC
LIMIT 10

-- 2
SELECT `cities`.`nameCity`, COUNT(`abiturs`.`keyCity`) AS cnt 
FROM `abiturs`
INNER JOIN `cities` ON `abiturs`.`keyCity`=`cities`.`idCity`
GROUP BY `cities`.`nameCity`
ORDER BY cnt DESC


```

```SQL
ALTER TABLE `abiturs` ADD FOREIGN KEY (`keyCity`) 
REFERENCES `cities`(`idCity`) 
ON DELETE RESTRICT ON UPDATE RESTRICT;
```

```SQL
ALTER TABLE `cities` CHANGE `id` `idCity` INT NOT NULL AUTO_INCREMENT;
```



---  

Примеры команд:

```SQL
CREATE TABLE `students` (
  `id` int NOT NULL,
  `nameStud` varchar(20) NOT NULL,
  `rating` int NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `date` date NOT NULL,
  `city` varchar(20) NOT NULL
);
```

```SQL
ALTER TABLE `students`
ADD PRIMARY KEY (`id`);

ALTER TABLE `students`
MODIFY `id` int NOT NULL AUTO_INCREMENT;
```

```SQL
CREATE TABLE `soft0015_faculty`.`abiturs` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `lastName` VARCHAR(20) NOT NULL , 
    `rating` INT NOT NULL , 
    `gender` BOOLEAN NOT NULL DEFAULT TRUE , 
    `date` DATE NOT NULL , 
    `city` VARCHAR(20) NULL , 
    PRIMARY KEY (`id`)) 
    ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_unicode_ci;
```

```SQL
INSERT INTO `students` 
(`id`, `nameStud`, `rating`, `gender`, `date`, `city`) 
VALUES (NULL, 'Сидоров', '207', '1', '2002-08-03', 'Кунгур');
```

```SQL
INSERT INTO `students` (`nameStud`, `rating`, `gender`, `date`, `city`) 
VALUES 
    ('Сидоров', '207', '1', '2002-08-03', 'Кунгур');
```

```SQL
INSERT INTO `students` (`nameStud`, `rating`, `gender`, `date`, `city`) 
VALUES
    ('Хомич', 207, 0, '2002-04-23', 'Кунгур'),
    ('Ежова', 212, 0, '2001-10-07', 'Лысьва');
```

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

```SQL
SELECT * FROM `students` WHERE `gender` = true
```

```SQL
UPDATE `students` SET `rating`=200 WHERE `nameStud`="Ежова";
```

```SQL
DELETE FROM `students` WHERE `rating` < 202;
```

```SQL
SELECT `nameStud`, `rating`, `city` FROM `students` ORDER BY `rating` DESC;
```

```SQL
SELECT `city`
FROM `students`
GROUP BY `city` 
ORDER BY `city` ASC;
```

```SQL
SELECT 
    `city`,
    COUNT(*) AS amount
FROM `students`
GROUP BY `city` 
ORDER BY `city` ASC;
```

```SQL
SELECT 
    `city`,
    COUNT(*) AS amount
FROM `students`
GROUP BY `city` 
ORDER BY `amount` DESC;
```

```SQL
SELECT 
    `date`,
    COUNT(*) AS amount 
FROM `students` 
GROUP BY `date` 
HAVING `amount` > 1;
```

```SQL
ALTER TABLE `groups` 
ADD FOREIGN KEY (`idCur`) 
REFERENCES `curators`(`id`) 
ON DELETE RESTRICT 
ON UPDATE RESTRICT;
```

```SQL
ALTER TABLE `users` 
ADD FOREIGN KEY (`keyGroup`) 
REFERENCES `studygroups`(`id`) 
ON DELETE RESTRICT 
ON UPDATE RESTRICT;
```

```SQL
SELECT `abiturs`.`lastName`, `genders`.`nameGender`
FROM `abiturs`
INNER JOIN `genders` 
ON `abiturs`.`gender` = `genders`.`id`
```