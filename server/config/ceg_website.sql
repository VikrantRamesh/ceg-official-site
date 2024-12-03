SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `ceg_website` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ceg_website`;

CREATE TABLE `clubs` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `clubname` varchar(50) NOT NULL,
  `description` varchar(1024) NOT NULL,
  `socials` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`socials`)),
  `logo_path` varchar(512) NOT NULL,
  `banner_path` varchar(512) NOT NULL,
  `website` varchar(2038) NOT NULL,
  `members` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`members`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `club_events` (
  `id` int(11) NOT NULL,
  `clubid` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `description` varchar(1024) NOT NULL,
  `link` varchar(2038) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `statistics` (
  `research_centres` varchar(20) NOT NULL,
  `rd_grants` varchar(20) NOT NULL,
  `publications` varchar(20) NOT NULL,
  `patents_pub_gra` varchar(20) NOT NULL,
  `books_rfid_auto` varchar(20) NOT NULL,
  `student_clubs` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `statistics` (`research_centres`, `rd_grants`, `publications`, `patents_pub_gra`, `books_rfid_auto`, `student_clubs`) VALUES
('06', '61Cr+', '3615+', '18/8', '95.6K+', '32');

CREATE TABLE `updates` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `message` varchar(512) NOT NULL,
  `link` varchar(2083) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `updates` (`id`, `category`, `message`, `link`, `created_date`) VALUES
(1, 'Student', 'Student Event 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'https://google.com', '2024-10-05 18:30:00'),
(2, 'General', 'Exam Timetable Released: Check the official portal for details.', NULL, '2024-10-05 18:30:00');

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(10) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `users` (`id`, `username`, `password`, `type`, `created_on`) VALUES
(2, 'admin', '$2a$12$bUYgCrv9m9kG9oI0YHVDsu5.2AzVe6meqst8nM/xMvpBh9K1Axwgq', 'admin', '2024-10-09 13:55:54');


ALTER TABLE `clubs`
  ADD KEY `userid_fk` (`userid`);

ALTER TABLE `club_events`
  ADD KEY `clubid_fk` (`clubid`);

ALTER TABLE `updates`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `updates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `clubs`
  ADD CONSTRAINT `userid_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`id`);

ALTER TABLE `club_events`
  ADD CONSTRAINT `clubid_fk` FOREIGN KEY (`clubid`) REFERENCES `clubs` (`userid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
