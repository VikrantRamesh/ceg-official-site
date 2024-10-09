-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2024 at 06:19 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ceg_website`
--
CREATE DATABASE IF NOT EXISTS `ceg_website` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ceg_website`;

-- --------------------------------------------------------

--
-- Table structure for table `statistics`
--

CREATE TABLE `statistics` (
  `research_centres` varchar(20) NOT NULL,
  `rd_grants` varchar(20) NOT NULL,
  `publications` varchar(20) NOT NULL,
  `patents_pub_gra` varchar(20) NOT NULL,
  `books_rfid_auto` varchar(20) NOT NULL,
  `student_clubs` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `statistics`
--

INSERT INTO `statistics` (`research_centres`, `rd_grants`, `publications`, `patents_pub_gra`, `books_rfid_auto`, `student_clubs`) VALUES
('06', '61Cr+', '3615+', '18/8', '95.6K+', '32');

-- --------------------------------------------------------

--
-- Table structure for table `updates`
--

CREATE TABLE `updates` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `message` varchar(512) NOT NULL,
  `link` varchar(2083) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `updates`
--

INSERT INTO `updates` (`id`, `category`, `message`, `link`, `created_date`) VALUES
(1, 'Student', 'Student Event 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'https://google.com', '2024-10-05 18:30:00'),
(2, 'General', 'Exam Timetable Released: Check the official portal for details.', NULL, '2024-10-05 18:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(10) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `type`, `created_on`) VALUES
(2, 'admin', '$2a$12$bUYgCrv9m9kG9oI0YHVDsu5.2AzVe6meqst8nM/xMvpBh9K1Axwgq', 'admin', '2024-10-09 13:55:54'),
(3, 'acm', '$2b$12$fBHNOBb8nrPGxu.dxx3DFes67ZUbi6O.pxMVNkCmwMnsjWnsXx9kC', 'club', '2024-10-09 14:56:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `updates`
--
ALTER TABLE `updates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `updates`
--
ALTER TABLE `updates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
