-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 09 mars 2024 à 14:56
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

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
  `nom` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `aliments`
--

INSERT INTO `aliments` (`id`, `nom`) VALUES
(1, 'California Saumon Avocat'),
(2, 'Sushi Saumon'),
(3, 'Spring Avocat Cheese'),
(4, 'California pacific'),
(5, 'Edamame/Salade de cho');

-- --------------------------------------------------------

--
-- Structure de la table `box`
--

DROP TABLE IF EXISTS `box`;
CREATE TABLE IF NOT EXISTS `box` (
  `id` int NOT NULL,
  `nom` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pièces` int DEFAULT NULL,
  `prix` float(15,2) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fav` int DEFAULT NULL,
  `stars` float(15,1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `box`
--

INSERT INTO `box` (`id`, `nom`, `pièces`, `prix`, `image`, `fav`, `stars`) VALUES
(1, 'Tasty Blend', 12, 12.50, 'tasty-blend', 1, 5.0),
(2, 'Tasty Blend', 12, 12.50, 'tasty-blend', 0, 4.8);

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
(1, 5, 1);

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
(1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `saveurs`
--

DROP TABLE IF EXISTS `saveurs`;
CREATE TABLE IF NOT EXISTS `saveurs` (
  `id` int NOT NULL,
  `nom` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `saveurs`
--

INSERT INTO `saveurs` (`id`, `nom`) VALUES
(1, 'saumon'),
(2, 'avocat'),
(3, 'cheese');

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
