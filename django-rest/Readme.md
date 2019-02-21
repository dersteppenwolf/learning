# Django Rest Tutorial

## Docs

https://www.django-rest-framework.org/

https://wsvincent.com/official-django-rest-framework-tutorial-beginners-guide/

## Install

        pip3 install -r requirements.txt 

        django-admin.py startproject tutorial .

        python3 manage.py startapp snippets

        python3 manage.py makemigrations snippets

        python3 manage.py migrate

        python3 manage.py createsuperuser

Now start our local web server for the first time.

        python3 manage.py runserver

        >> Starting development server at http://127.0.0.1:8000/

django admin

        http://127.0.0.1:8000/admin/login/?next=/admin/



        python3 manage.py runserver

        http://127.0.0.1:8000/snippets/

        http://127.0.0.1:8000/snippets/1/

        http://127.0.0.1:8000/snippets/1.json