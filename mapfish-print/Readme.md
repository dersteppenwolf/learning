# Using Mapfish Print with Docker

- [Using Mapfish Print with Docker](#using-mapfish-print-with-docker)
  - [docs](#docs)
  - [Build and run image](#build-and-run-image)
  - [Multi-instance](#multi-instance)

## docs

* Docs: http://mapfish.github.io/mapfish-print-doc/docker.html
* Docker Image: https://hub.docker.com/r/camptocamp/mapfish_print
* Example configurations: https://github.com/mapfish/mapfish-print/tree/master/examples/src/test/resources/examples
* Web api: http://mapfish.github.io/mapfish-print-doc/api.html

## Build and run image

```bash
docker build  -t dersteppen/mapfish-print  .

docker images dersteppen/mapfish-print

docker rm  -f  mapfish-print-test

docker run  --name mapfish-print-test -p 8080:8080  dersteppen/mapfish-print:latest

```

open web app ad http://localhost:8080/

list apps:

```bash
curl http://localhost:8080/print/apps.json | jq '.'
```

Create and get a simple print: 

```bash 
curl -H "Content-Type: application/json" --data @apps/simple/requestData.json  -X POST -o reportSimple.pdf http://localhost:8080/print/simple/buildreport.pdf
```

Create and get prints from wms services : 

```bash 
curl -H "Content-Type: application/json" --data @apps/wms/requestData.json  -X POST -o reportWMS.pdf http://localhost:8080/print/wms/buildreport.pdf

curl -H "Content-Type: application/json" --data @apps/wms/requestData2.json  -X POST -o reportWMS2.pdf http://localhost:8080/print/wms/buildreport.pdf

curl -H "Content-Type: application/json" --data @apps/wms/requestData3.json  -X POST -o reportWMS3.pdf http://localhost:8080/print/wms/buildreport.pdf
```

## Multi-instance 

Multi-instance mode uses a postgresql database to store job statuses and file results.


```bash

docker rm  -f  mapfish-print-test

docker run  --name mapfish-print-test -p 8080:8080   \
    -e TOMCAT_LOG_TYPE='json' \
    -e CATALINA_OPTS="-Ddb.name=mydb -Ddb.host=192.168.0.10 -Ddb.username=myuser -Ddb.password=mypwd " \
    dersteppen/mapfish-print:latest
```

The application creates the following tables:

```sql
CREATE TABLE public.print_accountings
(
    reference_id text COLLATE pg_catalog."default" NOT NULL,
    app_id text COLLATE pg_catalog."default" NOT NULL,
    completion_time timestamp without time zone NOT NULL,
    file_size bigint,
    layout text COLLATE pg_catalog."default" NOT NULL,
    mapexport boolean NOT NULL,
    output_format text COLLATE pg_catalog."default" NOT NULL,
    processing_time_ms bigint,
    referer text COLLATE pg_catalog."default",
    stats jsonb,
    status character varying(255) COLLATE pg_catalog."default" NOT NULL,
    total_time_ms bigint NOT NULL,
    CONSTRAINT print_accountings_pkey PRIMARY KEY (reference_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.print_accountings
    OWNER to user;



CREATE TABLE public.print_job_results
(
    dtype character varying(31) COLLATE pg_catalog."default" NOT NULL,
    reporturi text COLLATE pg_catalog."default" NOT NULL,
    fileextension text COLLATE pg_catalog."default",
    filename text COLLATE pg_catalog."default",
    mimetype text COLLATE pg_catalog."default",
    referenceid text COLLATE pg_catalog."default",
    data bytea,
    CONSTRAINT print_job_results_pkey PRIMARY KEY (reporturi),
    CONSTRAINT fk_cvwledfmrdumks087n17rrhjn FOREIGN KEY (referenceid)
        REFERENCES public.print_job_statuses (referenceid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.print_job_results
    OWNER to user;



CREATE TABLE public.print_job_statuses
(
    dtype character varying(31) COLLATE pg_catalog."default" NOT NULL,
    referenceid text COLLATE pg_catalog."default" NOT NULL,
    completiontime bigint,
    access text COLLATE pg_catalog."default",
    requestdata text COLLATE pg_catalog."default",
    starttime bigint,
    error text COLLATE pg_catalog."default",
    requestcount bigint,
    status character varying(255) COLLATE pg_catalog."default",
    lastchecktime bigint,
    CONSTRAINT print_job_statuses_pkey PRIMARY KEY (referenceid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.print_job_statuses
    OWNER to user;
```

Create a print job:

```bash
curl -H "Content-Type: application/json" --data @apps/wms/requestData3.json  -X POST http://localhost:8080/print/wms/report.pdf | jq '.'
```

response sample:
```json
{
  "ref": "cc41d987-e437-4cee-990a-a4700c295f03@54fc20b8-ab34-46d9-a4b4-ced4ecc8b8bd",
  "statusURL": "/print/status/cc41d987-e437-4cee-990a-a4700c295f03@54fc20b8-ab34-46d9-a4b4-ced4ecc8b8bd.json",
  "downloadURL": "/print/report/cc41d987-e437-4cee-990a-a4700c295f03@54fc20b8-ab34-46d9-a4b4-ced4ecc8b8bd"
}
```

Get the status for a print job:

```bash
curl http://localhost:8080/print/status/cc41d987-e437-4cee-990a-a4700c295f03@54fc20b8-ab34-46d9-a4b4-ced4ecc8b8bd.json | jq '.'
```

response sample:

```json
{
  "done": true,
  "status": "finished",
  "elapsedTime": 10725,
  "waitingTime": 0,
  "downloadURL": "/print/report/cc41d987-e437-4cee-990a-a4700c295f03@54fc20b8-ab34-46d9-a4b4-ced4ecc8b8bd"
}
```

Download the report for a print job:

```bash
curl http://localhost:8080/print/report/cc41d987-e437-4cee-990a-a4700c295f03@54fc20b8-ab34-46d9-a4b4-ced4ecc8b8bd -o report.pdf 
```


