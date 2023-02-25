CREATE DATABASE inmog;

CREATE TABLE company(

    COMPANY_ID INT NOT NULL,
    COMPANY_NAME VARCHAR(50),
    PRIMARY KEY (COMPANY_ID)
);

CREATE TABLE claimset (

    COMPANY_ID INT NOT NULL PRIMARY KEY,
    PROGRESS VARCHAR(5),
    FOREIGN KEY (COMPANY_ID) REFERENCES company (COMPANY_ID)
);


 CREATE TABLE car(

     COMPANY_ID INT NOT NULL,
     MAKE_MODEL VARCHAR(25),
     COLOUR VARCHAR(10),
     YEAR_MAN VARCHAR(10),
     FOREIGN KEY (COMPANY_ID) REFERENCES company (COMPANY_ID)

 );


CREATE TABLE policyy (

    COMPANY_ID INT NOT NULL,
    MAKE_MODEL VARCHAR(25),
    IDV INT,
    PREMIUM INT,
    PRIMARY KEY(COMPANY_ID,IDV),
    FOREIGN KEY (COMPANY_ID) REFERENCES company (COMPANY_ID),
    FOREIGN KEY (MAKE_MODEL) REFERENCES car (MAKE_MODEL)
   
);


CREATE TABLE  services(

    COMPANY_ID INT NOT NULL PRIMARY KEY,
    FREE_PICKUP VARCHAR(5),
    ASSISTANCE VARCHAR(5),
    FOREIGN KEY (COMPANY_ID) REFERENCES company (COMPANY_ID)

);




ALTER TABLE services
drop CONSTRAINT services_company_id_fkey;



ALTER TABLE services
ADD CONSTRAINT services_company_id_fkey
    FOREIGN KEY (company_id)
    REFERENCES company
        (company_id)
    ON DELETE CASCADE;

    
ALTER TABLE policyy
drop CONSTRAINT policyy_company_id_fkey;

    
ALTER TABLE claimset
ADD CONSTRAINT claimset_company_id_fkey
    FOREIGN KEY (company_id)
    REFERENCES company
        (company_id)
    ON DELETE CASCADE;


UPDATE services SET company_id = 17  where company_id = 7;
UPDATE policyy SET company_id = 17 where company_id = 7;
UPDATE company SET company_id = 17, company_name = 'aloo' where company_id = 7;



    
    INSERT INTO company VALUES(2,'NATIONAL INSURANCE');

    INSERT INTO claimset VALUES(2,'92%');

    INSERT INTO car VALUES(2,'MARUTI ALTO','GREY','2079');

    INSERT INTO policyy VALUES(2,'nm',098,67);

    INSERT INTO services VALUES(2,'NO','NO');


    ALTER TABLE claimset
    ADD CONSTRAINT claimset_company_id_fkey
    FOREIGN KEY (company_id)
    REFERENCES company
        (company_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE;




     select * from policyy left join (select * from services)
     services on services.company_id=policyy.company_id 
     where policyy.company_id= 2 and policyy.make_model='abc';



    CREATE TRIGGER services_insert
    AFTER INSERT ON services
    FOR EACH ROW
    BEGIN
    UPDATE services
    SET FREE_PICKUP = 'YES',
        ASSISTANCE = 'YES'
    WHERE COMPANY_ID = NEW.COMPANY_ID;
    END;



    CREATE TABLE owner(
       username  VARCHAR(10) NOT NULL PRIMARY KEY,
    password VARCHAR(10) NOT NULL
    );

    INSERT INTO owner (username, password) VALUES('aditya','asdfghjkl');