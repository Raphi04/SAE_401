-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 11 mars 2024 à 14:36
-- Version du serveur : 8.0.31
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sushiko`
--

-- --------------------------------------------------------

--
-- Structure de la table `aliments`
--

DROP TABLE IF EXISTS `aliments`;
CREATE TABLE IF NOT EXISTS `aliments` (
  `id` int NOT NULL,
  `nom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `aliments`
--

INSERT INTO `aliments` (`id`, `nom`) VALUES
(1, 'California Saumon Avocat'),
(2, 'Sushi Saumon'),
(3, 'Spring Avocat Cheese'),
(4, 'California Pacific'),
(5, 'Edamame/Salade de chou'),
(6, 'Maki Salmon Roll'),
(7, 'Spring Saumon Avocat'),
(8, 'Maki Cheese Avocat'),
(9, 'Sushi Thon'),
(10, 'California Thon Avocat'),
(11, 'California Thon Cuit Avocat'),
(12, 'Sando Chicken Katsu'),
(13, 'Sando Salmon Aburi'),
(14, 'Maki Salmon'),
(15, 'California Crevette'),
(16, 'California Chicken Katsu'),
(17, 'Spring tataki Saumon'),
(18, 'Signature Dragon Roll'),
(19, 'California French Touch'),
(20, 'California French salmon'),
(21, 'California Yellowtail Ponzu'),
(22, 'Signature Rock\'n Roll'),
(23, 'Sushi Saumon Tsukudani');

-- --------------------------------------------------------

--
-- Structure de la table `box`
--

DROP TABLE IF EXISTS `box`;
CREATE TABLE IF NOT EXISTS `box` (
  `id` int NOT NULL,
  `nom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pièces` int DEFAULT NULL,
  `prix` float(15,2) DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fav` int DEFAULT NULL,
  `stars` float(15,1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `box`
--

INSERT INTO `box` (`id`, `nom`, `pièces`, `prix`, `image`, `fav`, `stars`) VALUES
(1, 'Tasty Blend', 12, 12.50, 'tasty-blend', 1, 4.8),
(2, 'Amateur Mix', 18, 15.90, 'amateur-mix', 1, 4.5),
(3, 'Saumon Original', 11, 12.50, 'saumon-original', 0, 4.3),
(4, 'Salmon Lovers', 18, 15.90, 'salmon-lovers', 1, 3.9),
(5, 'Salmon Classic', 10, 15.90, 'salmon-classic', 0, 3.5),
(6, 'Master Mix', 12, 15.90, 'master-mix', 1, 4.6),
(7, 'Sunrise', 18, 15.90, 'sunrise', 0, 4.3),
(8, 'Sando Box Chicken Katsu', 13, 15.90, 'sando-box-chicken-katsu', 1, 4.8),
(9, 'Sando Box Salmon Aburi', 13, 15.90, 'sando-box-salmon-aburi', 0, 4.2),
(10, 'Super Salmon', 24, 19.90, 'super-salmon', 1, 4.6),
(11, 'California Dream', 24, 19.90, 'california-dream', 0, 4.3),
(12, 'Gourmet Mix', 22, 24.50, 'gourmet-mix', 0, 4.2),
(13, 'Fresh Mix', 22, 24.50, 'fresh-mix', 0, 4.6);

-- --------------------------------------------------------

--
-- Structure de la table `boxaliments`
--

DROP TABLE IF EXISTS `boxaliments`;
CREATE TABLE IF NOT EXISTS `boxaliments` (
  `idBox` int NOT NULL,
  `idAliment` int DEFAULT NULL,
  `quantité` int DEFAULT NULL,
  KEY `idBox` (`idBox`),
  KEY `boxaliments_ibfk_2` (`idAliment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `boxaliments`
--

INSERT INTO `boxaliments` (`idBox`, `idAliment`, `quantité`) VALUES
(1, 1, 3),
(1, 2, 3),
(1, 3, 3),
(1, 4, 3),
(1, 5, 1),
(2, 6, 3),
(2, 7, 3),
(2, 8, 6),
(2, 1, 3),
(2, 5, 1),
(3, 1, 6),
(3, 2, 5),
(3, 5, 1),
(4, 1, 6),
(4, 7, 6),
(4, 2, 6),
(4, 5, 1),
(5, 2, 10),
(5, 5, 1),
(6, 2, 4),
(6, 9, 2),
(6, 10, 3),
(6, 1, 3),
(6, 5, 1),
(7, 6, 6),
(7, 1, 6),
(7, 5, 1),
(7, 11, 6),
(8, 12, 1),
(8, 6, 6),
(8, 1, 6),
(8, 11, 6),
(8, 5, 1),
(9, 13, 1),
(9, 1, 6),
(9, 11, 6),
(9, 5, 1),
(10, 1, 6),
(10, 6, 6),
(10, 14, 6),
(10, 7, 6),
(10, 5, 1),
(11, 1, 6),
(11, 15, 6),
(11, 11, 6),
(11, 16, 6),
(11, 5, 1),
(12, 17, 6),
(12, 18, 4),
(12, 19, 3),
(12, 20, 6),
(12, 21, 3),
(12, 5, 1),
(13, 22, 4),
(13, 6, 6),
(13, 4, 6),
(13, 2, 4),
(13, 23, 2),
(13, 5, 1);

-- --------------------------------------------------------

--
-- Structure de la table `boxsaveurs`
--

DROP TABLE IF EXISTS `boxsaveurs`;
CREATE TABLE IF NOT EXISTS `boxsaveurs` (
  `idBox` int NOT NULL,
  `idSaveur` int DEFAULT NULL,
  KEY `idBox` (`idBox`),
  KEY `idSaveur` (`idSaveur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `boxsaveurs`
--

INSERT INTO `boxsaveurs` (`idBox`, `idSaveur`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(4, 4),
(4, 1),
(4, 2),
(5, 1),
(6, 1),
(6, 5),
(6, 2),
(7, 1),
(7, 5),
(7, 2),
(7, 3),
(8, 1),
(8, 6),
(8, 2),
(8, 3),
(9, 1),
(9, 5),
(9, 2),
(10, 4),
(10, 1),
(10, 2),
(10, 3),
(11, 7),
(11, 1),
(11, 5),
(11, 8),
(11, 6),
(11, 2),
(12, 4),
(12, 7),
(12, 1),
(12, 6),
(12, 2),
(12, 9),
(13, 7),
(13, 1),
(13, 5),
(13, 2),
(13, 3);

-- --------------------------------------------------------

--
-- Structure de la table `saveurs`
--

DROP TABLE IF EXISTS `saveurs`;
CREATE TABLE IF NOT EXISTS `saveurs` (
  `id` int NOT NULL,
  `nom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `saveurs`
--

INSERT INTO `saveurs` (`id`, `nom`) VALUES
(1, 'saumon'),
(2, 'avocat'),
(3, 'cheese'),
(4, 'coriande'),
(5, 'thon'),
(6, 'viande'),
(7, 'spicy'),
(8, 'crevette'),
(9, 'seriole lalandi');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `boxaliments`
--
ALTER TABLE `boxaliments`
  ADD CONSTRAINT `boxaliments_ibfk_1` FOREIGN KEY (`idBox`) REFERENCES `box` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `boxaliments_ibfk_2` FOREIGN KEY (`idAliment`) REFERENCES `aliments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `boxsaveurs`
--
ALTER TABLE `boxsaveurs`
  ADD CONSTRAINT `boxsaveurs_ibfk_1` FOREIGN KEY (`idBox`) REFERENCES `box` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `boxsaveurs_ibfk_2` FOREIGN KEY (`idSaveur`) REFERENCES `saveurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
