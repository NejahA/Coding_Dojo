select * from cities;
select * from countries;
select * from languages;

select * from countries,languages where (countries.code = languages.country_code) and (languages.language="Slovene");


SELECT countries.name , COUNT(cities.name) as cities
FROM countries
LEFT JOIN cities ON countries.id = cities.country_id
GROUP BY countries.name
ORDER BY cities DESC;