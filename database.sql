CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;


-- insert into 2 sample users

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'test1@test.com', '123456'),
(2, 'test2@test.com', '123456');

