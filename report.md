```sql CREATE TABLE cpen.tbl_students
(
    id integer NOT NULL,
    f_name "char" NOT NULL,
    l_name "char" NOT NULL,
    date_of_birth date NOT NULL,
    contact_number numeric(10) NOT NULL,
    outstanding_fees bigint NOT NULL,
    gender "char" NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS cpen.tbl_students
    OWNER to postgres;

COMMENT ON TABLE cpen.tbl_students
    IS 'This table contains info or personal details  about the students of Cpen';
```
My Function to calculate fees

```sql 
CREATE OR REPLACE FUNCTION cpen.outstanding_fees()
RETURNS json[]
LANGUAGE 'plpgsql'
COST 100
VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    result json[];
BEGIN
    SELECT array_agg(
        json_build_object(
            'student_id', sub.student_id, 
			'Student_name', sub.f_name || ' '|| sub.l_name,
            'outstanding_fees', COALESCE(sub.total_fees, 0) - COALESCE(sub.total_paid, 0)
        )
    ) INTO result
    FROM (
        SELECT 
            s.id AS student_id,
			s.f_name AS f_name,
			s.l_name AS l_name,
		
            SUM(f.fees) AS total_fees,
            SUM(f.paid_amount) AS total_paid
        FROM cpen.tbl_students s
        LEFT JOIN cpen.tbl_fees f ON s.id = f.student_id
        GROUP BY s.id
    ) sub;

    RETURN result;
END;
$BODY$;

ALTER FUNCTION cpen.outstanding_fees()
OWNER TO postgres;

 SELECT * FROM cpen.outstanding_fees();

```