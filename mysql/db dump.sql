cd-- MySQL dump 10.13  Distrib 5.5.23, for Win64 (x86)
--
-- Host: localhost    Database: cinema
-- ------------------------------------------------------
-- Server version	5.5.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `film`
--

DROP TABLE IF EXISTS `film`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `film` (
  `title` varchar(100) DEFAULT NULL,
  `duration` char(10) DEFAULT NULL,
  `price` int(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `premiere` date DEFAULT NULL,
  `genres` varchar(20) DEFAULT NULL,
  `description` mediumtext,
  `actors` text,
  `director` varchar(100) DEFAULT NULL,
  `YouTube` text,
  `id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `film`
--

LOCK TABLES `film` WRITE;
/*!40000 ALTER TABLE `film` DISABLE KEYS */;
INSERT INTO `film` VALUES ('The Matrix','130',45,'/films-posters/The_Matrix_Poster.jpg','2015-11-29','Adventure','!!!!!!!!!!!!!!!!!!Fooooooooooooooo\r\nWhat if virtual reality wasn\'t just for fun, but was being used to imprison you? That\'s the dilemma that faces mild-mannered computer jockey Thomas Anderson (Keanu Reeves) in The Matrix. It\'s the year 1999, and Anderson (hacker alias: Neo) works in a cubicle, manning a computer and doing a little hacking on the side. It\'s through this latter activity that Thomas makes the acquaintance of Morpheus (Laurence Fishburne), who has some interesting news for Mr. Anderson -- none of what\'s going on around him is real. The year is actually closer to 2199, and it seems Thomas, like most people, is a victim of The Matrix, a massive artificial intelligence system that has tapped into people\'s minds and created the illusion of a real world, while using their brains and bodies for energy, tossing them away like spent batteries when they\'re through. Morpheus, however',' Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',' Andy Wachowski (as The Wachowski Brothers) , Lana Wachowski (as The Wachowski Brothers)','https://www.youtube.com/embed/_Ls19O-9p3s','the-matrix'),('The Marsian','144',30,'/films-posters/iphone360_841700.jpg','2015-11-29','Sci-Fi','Марсианская миссия «Арес-3» в процессе работы была вынуждена экстренно покинуть планету из-за надвигающейся песчаной бури. �?нженер и биолог Марк Уотни получил повреждение скафандра во время песчаной бури. Сотрудники миссии, посчитав его погибшим, эвакуировались с планеты, оставив Марка одного.\r\n\r\nОчнувшись, Уотни обнаруживает, что связь с Землёй отсутствует, но при этом полностью функционирует жилой модуль. Главный герой начинает искать способ продержаться на имеющихся запасах еды, витаминов, воды и воздуха ещё 4 года до прилёта следующей миссии «Арес-4».','Мэтт Дэймон, Джессика Честейн, Чиветель Эджиофор, Кристен Уиг, Джефф Дэниелс, Майкл Пенья, Шон Бин, Кейт Мара, Себастьян Стэн, Аксель Хенни','Ридли Скотт','https://www.youtube.com/embed/Ue4PCI0NamI','the-marsian'),('Alien','116',45,'/films-posters/alien.jpg','2015-11-18','Sci-Fi','В далеком будущем возвращающийся на Землю грузовой космический корабль перехватывает исходящий с неизвестной планеты неопознанный сигнал. Экипаж принимает решение совершить посадку и разобраться, в чем дело. Оказавшись на планете, астронавты повсюду обнаруживают неопознанные предметы, по виду напоминающие гигантские коконы…','Сигурни Уивер, Том Скеррит, �?эн Холм, Джон Хёрт','Ридли Скотт','https://www.youtube.com/embed/LjLamj-b0I8','alien'),('The Terminator','108',5,'/films-posters/507.jpg','2015-11-10','Sci-Fi','�?стория противостояния солдата Кайла Риза и киборга-терминатора, прибывших в 1984-й год из пост-апокалиптического будущего, где миром правят машины-убийцы, а человечество находится на грани вымирания. Цель киборга: убить девушку по имени Сара Коннор, чей ещё нерождённый сын к 2029 году выиграет войну человечества с машинами. Цель Риза: спасти Сару и остановить Терминатора любой ценой.','Арнольд Шварценеггер Майкл Бин Линда Хэмилтон Пол Уинфилд Лэнс Хенриксен','Джеймс Кэмерон','https://www.youtube.com/embed/62E4FJTwSuc','the-terminator'),('Форсаж','100',6,'/films-posters/666.jpg','2015-02-20','Adventure','Его зовут Брайан, и он — фанатик турбин и нитроускорителей. Его цель — быть принятым в автобанду легендарного Доминика Торетто, чемпиона опасных и незаконных уличных гонок. Но это лишь часть правды… Брайан также полицейский, имеющий задание войти в доверие к Торетто, подозреваемому в причастности к дерзким грабежам трейлеров, совершенным прямо «с колес».\r\n\r\nНо чем больше доверяет нахальному новичку харизматичный Доминик, тем больше проникается герой идеалами «ангелов дорог». �? тем меньше ему хочется выполнять свою миссию. �? вот, наступает момент, когда Брайану придется выбирать между дружбой и долгом. �? выбирать на скорости в 200 километров в час…','Пол Уокер Вин Дизель Мишель Родригес Джордана Брюстер','Роб Коэн','https://www.youtube.com/embed/3YeRywwC2FQ','форсаж');
/*!40000 ALTER TABLE `film` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-16 14:19:46
