CREATE DATABASE IF NOT EXISTS house_info;

USE house_info;

DROP TABLE IF EXISTS hostels;

CREATE TABLE hostels (
  id SMALLINT NOT NULL AUTO_INCREMENT,
  hostel_name VARCHAR(50),
  hostel_address VARCHAR(100),
  description_id SMALLINT,
  rules_id SMALLINT,
  address_id SMALLINT,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS descriptions;

CREATE TABLE descriptions (
  id SMALLINT NOT NULL AUTO_INCREMENT,
  editorial_text VARCHAR(800),
  property_description_text VARCHAR(1000),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS rules;

CREATE TABLE rules (
  id SMALLINT NOT NULL AUTO_INCREMENT,
  check_in_start TIME,
  check_in_end TIME,
  check_out TIME,
  kid_friendly TINYINT(1),
  credit_cards TINYINT(1)
  age_restriction TINYINT(1),
  curfew TINYINT(1),
  lock_out TINYINT(1),
  non_smoking TINYINT(1),
  pet_friendly TINYINT(1),
  taxes_included TINYINT(1),
  important_notes VARCHAR(1000),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS addresses;

CREATE TABLE addresses (
  id SMALLINT NOT NULL AUTO_INCREMENT,
  street_address VARCHAR(50),
  city VARCHAR(20),
  state CHAR(2),
  zip MEDIUMINT(5),
  country CHAR(20),
  country_code CHAR(2),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  PRIMARY KEY (id)
);

ALTER TABLE hostels ADD FOREIGN KEY (description_id) REFERENCES descriptions (id);
ALTER TABLE hostels ADD FOREIGN KEY (rules_id) REFERENCES rules (id);
ALTER TABLE hostels ADD FOREIGN KEY (address_id) REFERENCES addresses (id);