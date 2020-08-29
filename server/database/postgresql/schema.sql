CREATE DATABASE IF NOT EXISTS hostileworld;

USE hostileworld;

DROP TABLE IF EXISTS hostels;

CREATE TABLE hostels (
  id INT NOT NULL AUTO_INCREMENT,
  hostel_name VARCHAR(50) NOT NULL,
  editorial_text_one TEXT NOT NULL,
  editorial_text_two TEXT NOT NULL,
  description_text_one TEXT NOT NULL,
  description_text_two TEXT NOT NULL,
  description_text_three TEXT NOT NULL,
  check_in_start TIME NOT NULL,
  check_in_end TIME NOT NULL,
  check_out TIME NOT NULL,
  kid_friendly TINYINT(1) NOT NULL,
  credit_cards TINYINT(1) NOT NULL,
  age_restriction TINYINT(1) NOT NULL,
  curfew TINYINT(1) NOT NULL,
  lock_out TINYINT(1) NOT NULL,
  non_smoking TINYINT(1) NOT NULL,
  pet_friendly TINYINT(1) NOT NULL,
  taxes_included TINYINT(1) NOT NULL,
  cancellation VARCHAR(500) NOT NULL,
  important_notes_one TEXT NOT NULL,
  important_notes_two TEXT NOT NULL,
  important_notes_three TEXT NOT NULL,
  important_notes_four TEXT NOT NULL,
  important_notes_five TEXT NOT NULL,
  street_address VARCHAR(100) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state CHAR(25) NOT NULL,
  zip MEDIUMINT(5) NOT NULL,
  country CHAR(50) NOT NULL,
  country_code CHAR(5) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  name_id SMALLINT NOT NULL,
  descriptions_id SMALLINT NOT NULL,
  rules_id SMALLINT NOT NULL,
  addresses_id SMALLINT NOT NULL,
  PRIMARY KEY (id)
);


-- CREATE DATABASE IF NOT EXISTS hostileworld;

-- USE hostileworld;

-- DROP TABLE IF EXISTS hostels;

-- CREATE TABLE hostels (
--   id SMALLINT NOT NULL AUTO_INCREMENT,
--   hostel_name VARCHAR(50) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- DROP TABLE IF EXISTS descriptions;

-- CREATE TABLE descriptions (
--   id SMALLINT AUTO_INCREMENT,
--   editorial_text_one TEXT NOT NULL,
--   editorial_text_two TEXT NOT NULL,
--   description_text_one TEXT NOT NULL,
--   description_text_two TEXT NOT NULL,
--   description_text_three TEXT NOT NULL,
--   PRIMARY KEY (id)
-- );

-- DROP TABLE IF EXISTS rules;

-- CREATE TABLE rules (
--   id SMALLINT AUTO_INCREMENT,
--   check_in_start TIME NOT NULL,
--   check_in_end TIME NOT NULL,
--   check_out TIME NOT NULL,
--   kid_friendly TINYINT(1) NOT NULL,
--   credit_cards TINYINT(1) NOT NULL,
--   age_restriction TINYINT(1) NOT NULL,
--   curfew TINYINT(1) NOT NULL,
--   lock_out TINYINT(1) NOT NULL,
--   non_smoking TINYINT(1) NOT NULL,
--   pet_friendly TINYINT(1) NOT NULL,
--   taxes_included TINYINT(1) NOT NULL,
--   cancellation VARCHAR(500) NOT NULL,
--   important_notes_one TEXT NOT NULL,
--   important_notes_two TEXT NOT NULL,
--   important_notes_three TEXT NOT NULL,
--   important_notes_four TEXT NOT NULL,
--   important_notes_five TEXT NOT NULL,
--   PRIMARY KEY (id)
-- );

-- DROP TABLE IF EXISTS addresses;

-- CREATE TABLE addresses (
--   id SMALLINT AUTO_INCREMENT,
--   street_address VARCHAR(100) NOT NULL,
--   city VARCHAR(50) NOT NULL,
--   state CHAR(25) NOT NULL,
--   zip MEDIUMINT(5) NOT NULL,
--   country CHAR(50) NOT NULL,
--   country_code CHAR(5) NOT NULL,
--   latitude DECIMAL(10, 8) NOT NULL,
--   longitude DECIMAL(11, 8) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- DROP TABLE IF EXISTS full_listing;

-- CREATE TABLE full_listing (
--   id SMALLINT AUTO_INCREMENT,
--   name_id SMALLINT NOT NULL,
--   descriptions_id SMALLINT NOT NULL,
--   rules_id SMALLINT NOT NULL,
--   addresses_id SMALLINT NOT NULL,
--   PRIMARY KEY (id)
-- );

-- ALTER TABLE full_listing ADD FOREIGN KEY (name_id) REFERENCES hostels (id);
-- ALTER TABLE full_listing ADD FOREIGN KEY (descriptions_id) REFERENCES descriptions (id);
-- ALTER TABLE full_listing ADD FOREIGN KEY (rules_id) REFERENCES rules (id);
-- ALTER TABLE full_listing ADD FOREIGN KEY (addresses_id) REFERENCES addresses (id);