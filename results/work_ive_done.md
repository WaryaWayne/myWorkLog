## 2024-08-22

**Project 20**

- First version of models.py file
- Fist commit. created README

**Total commits:** 2

## 2024-08-24

**Project 20**

- Add User, Transaction, and TransactionStatusHistory models with timestamp management

**Total commits:** 1

## 2024-08-25

**Project 20**

- Remove forms.py and models.py
- added the forms.py changes to branch master
- commit the changes to test_models.py
- added the __init__.py and the routes.py to the app directory
- Added the form and model files to the app directory instead of keeping them in main directory
- Merge commit '8ec87c5b94e0526b349d7fc83f138fe4ae7bc84b'
- Implement User and Transaction models with tests
- Merge models.py forms models branch
- Merge forms.py and test_forms.py from forms branch

**Total commits:** 9

## 2024-09-06

**Project 6**

- Set up Ruby and installed project dependencies
- Initial commit

**Total commits:** 2

## 2024-09-09

**Project 16**

- Initialize project using Create React App

**Project 8**

- Initialize project using Create React App

**Total commits:** 2

## 2024-09-10

**Project 43**

- Initialize project using Create React App

**Project 44**

- Initialize project using Create React App

**Total commits:** 2

## 2024-09-14

**Project 41**

- Merge branch 'forms'
- Add WTForms for simple and detailed recommendation forms This commit introduces two forms using WTForms: * : This form captures the content name with basic validation requirements (data is required and has a maximum length of 255 characters). * : This form captures all fields from a potential  model (content name, type, location URL, and description). Content type and location are optional, while description has a maximum length of 1000 characters. Both forms utilize the  for form submission.
- Added some final changes to the modesl.py. 1: I removed the updated_at column because it was causing issues with the tests not being updated automatically due to environment factors
- Implemented Recommendation model for managing recommendations:

**Total commits:** 4

## 2024-10-04

**Project 20**

- latest

**Total commits:** 1

## 2024-10-10

**Project 63**

- Initial commit for tester

**Total commits:** 1

## 2024-10-14

**Project 23**

- installed vite run dev @latest again.
- Changed the user and admin permissions to make the user able to edit own profile and admin able to edit all profiles. Only admin can delete account.
- I tried to implement tests but will leave it for a later point. I am stuck for now. I removed the tests and will restart when fresh.
- Changed the name of the SECRET_KEY variable in settings.py. From DJANGO_SECRET_KEY to SECRET_KEY.
- Added docstrings to both signal handler functions.
- Updated URL configuration to Include ProfileViewSet. Added ProfileViewSet to handle user profiles. Updated the router to include the 'profiles' endpoint. Ensured Swagger and Redoc documentation remain accessible. This update enhances user management capabilities within the API.
- Updated ProductViewSet to restrict create, update, and delete actions to admin users only.  Implemented a featured Project 960 endpoint in ProductViewSet for retrieving featured Project 960. Refined OrderViewSet to filter orders based on the logged-in user for non-staff users. Introduced a custom permission class ?IsOwnerOrAdmin? to restrict access to order management based on ownership or admin status.Created a new permissions.py file in the orders directory containing the IsOwnerOrAdmin permission class. Changes ensure better access control for API endpoints and enhance security for order management.
- Installed drf-spectacular for API Documentation. Added Spectacular_Settings to settings.py for OpenAPI Configuration. Updates Urls.py to include endpoints for open API schema, Swagger UI, ReDoc Documentation. Set API version to 0.1.0.
- Set up Pagination with PageNumberPagination and a page size of 10. Enable filtering using DjangoFilterBackend. Configured token authentication as default authentication method.
- Added django_filters to the installed apps in settings.py.
- Migrated the updated models for profiles, orders and Project 960.
- Update email field to use EmailField for better validation. Added validation to phone number using RegexValidator for formatting of a phone number. Other fields stayed the same.
- Modified to include a nested list of images for each product. Updated serializer to include the main image and additional images.
- Create new ImageField 'main_image' in the product models.py. This will store the primary image for each product. Other fields stayed the same.
- Integrated DefaultRouter for RESTful API endpoints for Project 960 and orders. Implemented static Project 960 file serving in debug mode to facilitate local development.
- Added the Project 960 and staticfiles directories in Project 9339 directory. These will let Django know where our files are and how to serve them which is why we configured MEDIA_URL and MEDIA_ROOT. We will upload images via admin panel. The /Project 960 will be base URL where uploaded files/images go. /static tells Django where to serve Project 960 files from in the browser.
- Migrated the models for Orders, Products and Profiles. Installed Pillow to handle images when storing profile pictures and product images in the database. In settings, we had a glitch where I added a comment to .env variable and it disabled the database connection suddenly.
- Added a views.py for profile app. It already had a model.py and serializers but was missing the views. I added it.
- for the settings.py we added Django rest framework configuration at the end of the file to use authentication tokens. Added rest_framework.authtoken to the installed apps in settings.py. Transfered the Secret Key and Debug settings toggle to the .env file to not hardcode values for security sake. also added profiles.apps.ProfilesConfig to installed apps when we did the profiles app.py configuration. For urls.py we added a path to the api token auth to get an auth token for the api. For orders/admin.py we added a list_display, list_filter and search fields. In orders/views.py we added a few ways to filter and search through Project 960. Product/views.py and admin.py have the same changes. Added ways to filter and seach in views and added filter options in admin.py.
- Just basic page styntax to be able to query some of our Project 960 from the Project 9339 api. Issue is that it is generic and needs further work when we start the visual development.
- installed Django-filter. We used it in the views.py of Project 960 and orders apps. We used it to add some more filters to the api data in views.py.
- Added a serializer for the profiles app because we would need it to view api user data.
- Added a pagination.py file to Project 960 and orders apps. This is useful to help sort the api contents with views.py and serializer.
- Updated the model for Project 960 adding an accessory category choice, added a video_url field to hold the video of the product, added cancelled as a status choice for Orders model, i added a coupon discount field, added a notes field, for Product models, we added a active status, created a new model for product images, gave it foreign key to connect to Project 960 model, added image field to store images of Project 960. Updated the admin.py for Products allowing up to 8 images per product, created profiles model to hold user data. holds name, email, phone number, address, verification status and profile picture.
- Added a profiles app to the django project to store user information and accounts on our platform. Added it to installed apps in django settings. Added new fields to the Orders model and made migrations.
- Updated the Project 960 model to accept more fields to describe an individual product.
- Did the first migration for my models. The DB should have tables now.
- Added a dev script to package.json to support vite npm run dev. Installed Psycopg3 to connect to my Project 943 db instance. installed vite as a regular devDependencies. It wasn't installed. for the changes to app.jsx, I will cancel, it was just a test.
- Added corsheaders to installed apps list in django settings.
- We just moved the imports above first comments in views.py for both apps. We removed unnecessary imports as well. We created the first iteration of our product and order models in models.py. We installed Axios to allow React to communicate with our Project 9339.
- This goes with the previous commit. Where we made cors related changes.
- Installed django-cors-headers. This will allow our Project 9339 to communicate with our React Project 938. We configured the package. We added it to the settings in our django project root. Added it into MIDDLEWARE right before the CommonMiddleware line. At the end of settings file we added a CORS_ALLOW_ALL_ORIGINS = True. This will allow all origins but we must change later for security.
- Configured the urls for the API's. Set up routing for the API endpoints. Which will be /api/Project 960/ and /api/orders/.
- Added API views in both Project 960 and orders using the previously created serializers in both the apps. Very basic view now. Will need to be updated as the models are developed for both apps.
- installed DjangoRestFramework, added it to the settings in my django root folder, created a serializers.py for both orders and Project 960 apps in django project. they are basic now will need more editing.
- updated pipfile and lock
- Started the react app with vite. Initialized in the Frontend directory.
- Added the database connection (must update to current db connection). Added the apps to the installed apps in django settings.
- created a Project 960 and an orders app inside my django program. We will use these to manage the ecommerce webProject 93393 we're building
- Initialized Django in my Project 9339 directory
- added basic files for starting structure
- Initial commit to setup Project 9335_web

**Total commits:** 42

## 2024-10-15

**Project 23**

- Added 3 cards to the Project 960 list. Set to same product for now. Will be edited to be better later.
- Had a package.json in root and in Project 938 along with package-lock and node_modules folder. I combined them and kept Project 938 folder only. Added a postcss.config to configure the tailwind set up. Edited the product card to try and add a read more component to shrink description. Not working yet. Added base, componenets and utilities to index.css in /src directory to call tailwind into my project. Tailwind and vite config files were an edit to apply more config to tailwind setup.
- Add image carousel to product listing. Update ProductSerializer to include product images. Create ProductImageSerializer for handling image data. Modify ProductList component to display images in a carousel. Install and integrate react-responsive-carousel. Update fetchProducts function in App.jsx to handle image. Ensure Project 9339 serves image files correctly through MEDIA_URL and MEDIA_ROOT settings. This commit enhances the product listing by adding a visual carousel of product images, improving the user experience and product presentation.
- Added throttling to the API to prevent abuse. Simplifying the registration process to only create a User object, not a full Profile. Removing the confirm_password field from the Project 9339 (it's still checked in the Project 938). Created a Header, Login, Register, ProductCard and ProductList componenets for the react front end to render our Project 960. The /Project 960 product images are from a test upload in our django admin adding product. It works. Added the components to render on App.jsx and css styling in App.css.

**Total commits:** 4

## 2024-10-16

**Project 23**

- Ignore Staging Directory. Old attempt put there for reference. Decided to restart development of my React Project 938. Let's go. Hopefully works out more smooth. Using Yarn, which I installed through brew, vite, will install tailwindcss now and get to doing the config.

**Total commits:** 1

## 2024-10-22

**Project 70**

- fix: update GetQuoteForm component structure and resolve UI component imports
- changed import path for images.
- style: improve breadcrumb navigation design
- style: improve header and navigation design
- style: update remaining components with purple theme
- style: implement purple, black and white color scheme
- fix: resolve image import issues in gallery
- improve app structure and error handling
- Refactor calculator components for improved structure, reusability, and accessibility
- Implement Contact Us Page with form validation and Google Map embed
- Enhance Services Page and ServiceItem Component
- Added a picture for employee images. will need to change.
- Enhance Accessibility Across Landing Page Components
- for Layout.tsx: I made changes to the style of the page. I added indents to parts of the path because line streched out too far.
- Set default initialization for the pages in src/pages. Need to create them further.
- Installed React Router and its Typescript type. Also created routes in the app. Pages are LandingPage, AboutPage, ServicesPage, ContactPage, NotFoundPage, CalculatorsPage. Created not found for 404. Created it under a generic route of *.
- Initial commit. Initialized React Typescript project using Yarn and Vite. Configured Tailwind css. Created the backed Project 938 directories.

**Total commits:** 17

## 2024-10-23

**Project 70**

- Created the first iteration of the 404 not found page.
- Added no wrap on whitespace to desktop nav section because the get quote button was wrapping on itself.
- Changed the burger menu icon to be more on brand. Changed it to primary color purple-500.
- Separated Header from Layout to create a Header.tsx/ It is now a responsive header.

**Total commits:** 4

## 2024-10-24

**Project 53**

- Updated the Install and Uninstall scripts along with all in the /scripts directory to be written in Bash.
- Changed the scripts to Bash. Added error handlers and more verbose while using.
- Changed tools included to Commands list.
- changed setvsenv to setVsco
- changed the names of the scripts. From imgconvert to conImg. From quickproject to defStart.
- Added execution permissions for install and uninstall scripts.

**Project 83**

- fixed last import issues I was missing.
- Implement user management features in Django app

**Total commits:** 8

## 2024-10-26

**Project 1**

- Updated pipfile to include needed versions. Add comprehensive health checks Configure Prometheus metrics Set up monitoring thresholds Add tracing configuration Implement proper alerting thresholds
- Installed prometheus-client Add comprehensive health checks Configure Prometheus metrics Set up monitoring thresholds Add tracing configuration Implement proper alerting thresholds
- Installed django_health_check and django_promotheus. Add comprehensive health check configuration Configure monitoring metrics and APM Set up alerting thresholds Add health check endpoints Configure Prometheus metrics endpoint
- Add priority levels for different queues Configure specific task routing based on task type Set up maintenance queue for system tasks Organize tasks by priority and function Ensure proper task distribution across queues
- Add more periodic tasks for system maintenance Configure priority queues for different task types Set up proper task routing based on priority and type Add queue arguments for priority support Organize tasks into logical groups
- Add comprehensive periodic tasks for system maintenance Configure task routing with dedicated queues Add database backup and reporting tasks Implement system health monitoring Add inventory synchronization task
- Add task routing with dedicated queues for each app Implement comprehensive task monitoring Add worker shutdown handling Track task revocation events Enhance task logging with more context
- Add task routing for better organization Implement queue-specific task handling Add comprehensive task monitoring Improve error logging for Celery tasks Add task success and retry handlers
- Add missing crontab import to settings.py Add better Celery task handling and reliability settings Configure Redis connection pooling for Celery Add worker concurrency settings Implement proper Celery error logging
- Configure Celery with Redis as broker and Project 9339 Set up periodic tasks with Celery Beat Configure Celery for handling emails Add task time limits and worker settings Set up auto-discovery of tasks in Django apps
- Configured the email Project 9339 for the app. I added the Project 894 email for now, but we need the @Project 9335central email to work.
- Configure Redis as the cache Project 9339 with proper connection pooling Set up cache key patterns for different views Configure cache middleware settings Add cache versioning support Add necessary Redis dependencies
- Configure Redis as the cache Project 9339 Add connection pooling for better performance Configure retry mechanisms for Redis Set up proper cache key patterns Add necessary Redis dependencies Installed hiredis
- Add Redis caching configuration Implement caching for list, retrieve, and featured endpoints Add cache invalidation for create/update operations Configure cache timeouts and prefixes Add proper cache dependencies Installed redis and django-redis
- Fix duplicate Project 960 handling in urls.py Add proper DRF configuration with authentication, permissions, and rate limiting Add rate limiting to protect API endpoints Add register endpoint to URLs Configure proper static file handling for both development and production
- Remove duplicate middleware entries Properly order middleware for security and performance Add comprehensive API documentation settings Configure Swagger UI with better defaults Add proper API versioning and server configurations
- I did further config on the Project 9339 settings.py for the rest framework, cors headers, adding the more detailed logging. Added logging to product and order views and models.
- for pipfile and lock: 	added orginal Project 9339 dependencies from other project. for yarn.lock: 	added original Project 938 dependencies from other project.
- Initial commit to setup Project 9335_webProject 93393_project
- Initial commit

**Total commits:** 20

## 2024-10-27

**Project 52**

- Initial commit

**Total commits:** 1

## 2024-10-28

**Project 13**

- Installed django rest framework. Added it to installed files. Configured the cors settings in production.py
- I fought the whole day to get this django Project 9339 done. This will be my default config for now. I made sure to check every available setting and choose the ones that apply to me. I separated the settings.py into settings dir that has base, development and production.
- Initial commit to setup Project 9335central
- Initial commit

**Project 54**

- This is the point where level 2 in the rest framework tutorial. Starting level 3.
- THis is the point level 1 of restapi django tutorial ends.

**Total commits:** 6

## 2024-10-29

**Project 53**

- Updated and added a closing } to defStart. Accidently removed it on last iteration.
- Updated the djangoReact script: 	Removed the pipenv run command and instead we are now using the default python manage.py start app with chosen app names. 	Added a 'Remember to register it' to the apps creation message.

**Project 54**

- Renamed project folder to rest_framework so i can use graphQL in the same folder.
- Completed level 6 of the rest api tutorial. We saw viewsets to simplify code to write as far as permissions. We also used only project/urls.py for this api and it set the url paths automatically once we connected it to a route. Genius.
- They did a nice thing I never saw before. Bonding viewsets to URLs in our apps/urls.py file.
- We just finished part 5 of the django Rest-api tutorial. I made considerable progress. We now made navigating the API very easy because it is through hyperlinks. WE are having trouble now though. THe highlight portion is not working due to failed imports at the start and me changing the project requirements. We cannot do highlight but otherwise, all is functional.
- Completed part 4 of the Rest-api tutorial. Now we configured our endpoint: 	To have authentication, 	Ability of a user to create a product 	Only that user can delete a product 	We can interface with the api using our url endpoints. 	We set a connection between users and the product they post. Wanted to make it brand but it got away from me.
- About to start part 4 of the tutorial. Turned many lines of code into 3. Crazy.
- This is 3.5 They showed us how to use mixins and we are about to go into using generic class based views.

**Project 59**

- Initial commit

**Total commits:** 10

## 2024-10-30

**Project 66**

- Initial commit to setup Project 66

**Total commits:** 1

## 2024-10-31

**Project 4**

- Initial commit. Just getting started on Project 96. Hoping for big things here.

**Project 82**

- turned part 1 of tutorial into into a version1 folder. copied the index.html, main.js and deleted copy of preload.js.

**Total commits:** 2

## 2024-11-05

**Project 78**

- Initialized our Project 9339. default django project with Project 960 app. We will set up a boiler plate to add Project 93392 to our projects in the future.

**Total commits:** 1

## 2024-11-06

**Project 96**

- - I deleted the old db and redid the migrations because I got out of order on a migration and I got stuck. - Added django-cors-headers and configured it for now to allow all origins. Will configure to only allow from our Project 93393 when the time is right for production. - Markdown to help visualize api data in admin. - django-filter. Got it to be able to filter the api data being sent by Project 9339. Will fully configure before this commit. - djangorestframework: Set up simple jwt auth. Configured routes to expose for the react app. Put the routes we made with all auth, now available via api. - djangorestframework-simplejwt: Used this library for the jwt integration. - django-rest-authtoken: Used this library to create an auth token for us on server side to avoid doing it on client.
- Fully configured Django-Allauth. I went through every setting and enabled what we needed. I got google api for log in with google. got a client id and secret to implement the button. I signed up for the facebook developer account. I made the Project 894 ottawa page. There is no credentials just javascript to implement in react. TODO. I added some libraries: django-hashid-field. This is to opfuscate the user id field in our tables, so someone can't use sequential attacks to get data from our api. fido2 for local host development due to lack of https. Added and configured fully the social account and the mfa for django-allauth. All in base.py. Must still move some requirements to to development or production from base.

**Total commits:** 2

## 2024-11-07

**Project 96**

- - Re ran the migrations. Renamed dev database with a dev_ before the name. Left production database name as is. - Configured some of the settings to be dev and prod independant. Will need to go through Django docs and configure more of the settings right now. - Added cors to dev and prod only. - Added the hash_id salt to have a different dev and prod values and load them in separately via .env file. - Added some comments to lines missing comments. - Took the https settings to prod and left dev to http. - Turned account login on email confirmation on. - Set email password reset timeout to half. 5 mins instead of 10. - We forced remember sessions to on. - Redirect urls need to be dashboard for login, welcome route for email confirmation. Logout send users to homepage. - Made min length of usersname 4 instead of 6. - MFA_WEBAUTHN_ALLOW_INSECURE_ORIGIN is removed from base. Added to dev as - Added a secret key for dev and prod in both folders different values. - Added * allowed hosts for dev purposes. Made it empty for prod because only our domain should access. - Made the static and Project 960 dirs but will change them now.

**Total commits:** 1

## 2024-11-13

**Project 11**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to Project 9339/core to hold static content. - Added a Project 960 directory to Project 9339/core to hold Project 960. - Added a staticfiles direcotry to Project 9339/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.

**Project 30**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to Project 9339/core to hold static content. - Added a Project 960 directory to Project 9339/core to hold Project 960. - Added a staticfiles direcotry to Project 9339/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.

**Project 45**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to Project 9339/core to hold static content. - Added a Project 960 directory to Project 9339/core to hold Project 960. - Added a staticfiles direcotry to Project 9339/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.

**Project 85**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to Project 9339/core to hold static content. - Added a Project 960 directory to Project 9339/core to hold Project 960. - Added a staticfiles direcotry to Project 9339/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.

**Project 86**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to Project 9339/core to hold static content. - Added a Project 960 directory to Project 9339/core to hold Project 960. - Added a staticfiles direcotry to Project 9339/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.

**Total commits:** 10

## 2024-11-14

**Project 11**

- - Added Project 93393 ID beside Project 93393name at the top. Removed some extra comments at the top beside Project 93393 name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**Project 30**

- - Added Project 93393 ID beside Project 93393name at the top. Removed some extra comments at the top beside Project 93393 name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**Project 45**

- - Added Project 93393 ID beside Project 93393name at the top. Removed some extra comments at the top beside Project 93393 name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**Project 85**

- - Added Project 93393 ID beside Project 93393name at the top. Removed some extra comments at the top beside Project 93393 name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**Project 86**

- - Added Project 93393 ID beside Project 93393name at the top. Removed some extra comments at the top beside Project 93393 name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**Total commits:** 45

## 2024-11-16

**Project 11**

- - Deleted the original in templates/404.html - Moved it to /errors/404.html. Better location and more clean.
- - These are the default all auth templates. They come from django-all-auth.
- - These are the staticfiles from collectstatic for account login in django-all-auth.
- - These are the staticfiles from collectstatic for restframework from djangorestframework.
- - These are the staticfiles from collectstatic for MFA login in django-all-auth.
- - These are the staticfiles from collectstatic for social account login with facebook and django allauth.
- - These are the staticfiles from collectstatic for admin panel route.
- - These are the staticfiles from collectstatic for social account login in django-all-auth
- - Changed the format with a '-' in the middle of 2 variables
- - Added number formatting for us in canada. - Added append slash to the end of every url. - Added do not prepend www. - Set password reset to be for 1 day. No longer to reset password and pass through whole process. - We set first day of week to Sunday. We set utf-8 to be our base character class. - We added default storage finder to our list of staticfiles finders. - Turned csrf use sessions and cookie secure to true from false. We were testing using curl. So we made it false. - Added our min length and alphabet. They will be loaded from the environment. - Added our simple-jwt settings.
- - Added number formatting for us in canada. - Added append slash to the end of every url. - Added do not prepend www. - We use auth.user as our custom user model. - Set password reset to be for 1 day. No longer to reset password and pass through whole process. - We set first day of week to Sunday. We set utf-8 to be our base character class. - We added default storage finder to our list of staticfiles finders. - Turned csrf use sessions and cookie secure to true from false. We were testing using curl. So we made it false. - Added our min length and alphabet. They will be loaded from the environment.
- - Fixed the allauth install by removing the '-' that was before the name - Installed django-sqids. This will make our id's for everything(It applies to models, views, serializers, and filters) to be randomized and not a series. This will protect us from people exploring the api.
- Added django-sqids config for one to set themselves.
- - Added an import datetime to use it with our simple-jwt settings. - Added all the dj-rest-auth, restframework and jwt apps to installed apps. - Added that we should use PBLDF2 password hasher. - Added CSRF settings. - Added SESSION settings. - Added our REST_AUTH settings. - ADDED our REST_FRAMEWORK settings. - Added django-filter settings. - Added simple-jwt settings.
- - Major changes to urls. They work now though. perfect. - Added an api root view. This path shows us a list of all available api routes. For reference while programming. - Added a route to get a csrf token. it is /api/v1/csrf - Added the facebook and google oauth2 adapter classes - Added all the authentication views under the api/v1 path. So login will be /api/v1/login - Added social auth endpoints. For facebook and google. - Added the social account management endpoints. This allows disconnecting accounts and show what accounts user has connected now. - kept default _allauth/api to use with our google login and other social logins. They still go through all auth.
- - Installed simple-jwt library to use json web tokens instead of default token view. - Accidently reinstalled django-allauth. so we lost the extras. we need them so i added them again.
- - Added the google callbackurl. This is called by our urls to lead google sign in requests.
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our Project 938 react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from Project 960 and static root. Now it is BASE_DIR / Project 960/static - Removed the facebook and google social account providers auth Project 9339s. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Project 30**

- - Deleted the original in templates/404.html - Moved it to /errors/404.html. Better location and more clean.
- - These are the default all auth templates. They come from django-all-auth.
- - These are the staticfiles from collectstatic for account login in django-all-auth.
- - These are the staticfiles from collectstatic for restframework from djangorestframework.
- - These are the staticfiles from collectstatic for MFA login in django-all-auth.
- - These are the staticfiles from collectstatic for social account login with facebook and django allauth.
- - These are the staticfiles from collectstatic for admin panel route.
- - These are the staticfiles from collectstatic for social account login in django-all-auth
- - Changed the format with a '-' in the middle of 2 variables
- - Added number formatting for us in canada. - Added append slash to the end of every url. - Added do not prepend www. - Set password reset to be for 1 day. No longer to reset password and pass through whole process. - We set first day of week to Sunday. We set utf-8 to be our base character class. - We added default storage finder to our list of staticfiles finders. - Turned csrf use sessions and cookie secure to true from false. We were testing using curl. So we made it false. - Added our min length and alphabet. They will be loaded from the environment. - Added our simple-jwt settings.
- - Added number formatting for us in canada. - Added append slash to the end of every url. - Added do not prepend www. - We use auth.user as our custom user model. - Set password reset to be for 1 day. No longer to reset password and pass through whole process. - We set first day of week to Sunday. We set utf-8 to be our base character class. - We added default storage finder to our list of staticfiles finders. - Turned csrf use sessions and cookie secure to true from false. We were testing using curl. So we made it false. - Added our min length and alphabet. They will be loaded from the environment.
- - Fixed the allauth install by removing the '-' that was before the name - Installed django-sqids. This will make our id's for everything(It applies to models, views, serializers, and filters) to be randomized and not a series. This will protect us from people exploring the api.
- Added django-sqids config for one to set themselves.
- - Added an import datetime to use it with our simple-jwt settings. - Added all the dj-rest-auth, restframework and jwt apps to installed apps. - Added that we should use PBLDF2 password hasher. - Added CSRF settings. - Added SESSION settings. - Added our REST_AUTH settings. - ADDED our REST_FRAMEWORK settings. - Added django-filter settings. - Added simple-jwt settings.
- - Major changes to urls. They work now though. perfect. - Added an api root view. This path shows us a list of all available api routes. For reference while programming. - Added a route to get a csrf token. it is /api/v1/csrf - Added the facebook and google oauth2 adapter classes - Added all the authentication views under the api/v1 path. So login will be /api/v1/login - Added social auth endpoints. For facebook and google. - Added the social account management endpoints. This allows disconnecting accounts and show what accounts user has connected now. - kept default _allauth/api to use with our google login and other social logins. They still go through all auth.
- - Installed simple-jwt library to use json web tokens instead of default token view. - Accidently reinstalled django-allauth. so we lost the extras. we need them so i added them again.
- - Added the google callbackurl. This is called by our urls to lead google sign in requests.
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our Project 938 react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from Project 960 and static root. Now it is BASE_DIR / Project 960/static - Removed the facebook and google social account providers auth Project 9339s. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Project 45**

- - Deleted the original in templates/404.html - Moved it to /errors/404.html. Better location and more clean.
- - These are the default all auth templates. They come from django-all-auth.
- - These are the staticfiles from collectstatic for account login in django-all-auth.
- - These are the staticfiles from collectstatic for restframework from djangorestframework.
- - These are the staticfiles from collectstatic for MFA login in django-all-auth.
- - These are the staticfiles from collectstatic for social account login with facebook and django allauth.
- - These are the staticfiles from collectstatic for admin panel route.
- - These are the staticfiles from collectstatic for social account login in django-all-auth
- - Changed the format with a '-' in the middle of 2 variables
- - Added number formatting for us in canada. - Added append slash to the end of every url. - Added do not prepend www. - Set password reset to be for 1 day. No longer to reset password and pass through whole process. - We set first day of week to Sunday. We set utf-8 to be our base character class. - We added default storage finder to our list of staticfiles finders. - Turned csrf use sessions and cookie secure to true from false. We were testing using curl. So we made it false. - Added our min length and alphabet. They will be loaded from the environment. - Added our simple-jwt settings.
- - Added number formatting for us in canada. - Added append slash to the end of every url. - Added do not prepend www. - We use auth.user as our custom user model. - Set password reset to be for 1 day. No longer to reset password and pass through whole process. - We set first day of week to Sunday. We set utf-8 to be our base character class. - We added default storage finder to our list of staticfiles finders. - Turned csrf use sessions and cookie secure to true from false. We were testing using curl. So we made it false. - Added our min length and alphabet. They will be loaded from the environment.
- - Fixed the allauth install by removing the '-' that was before the name - Installed django-sqids. This will make our id's for everything(It applies to models, views, serializers, and filters) to be randomized and not a series. This will protect us from people exploring the api.
- Added django-sqids config for one to set themselves.
- - Added an import datetime to use it with our simple-jwt settings. - Added all the dj-rest-auth, restframework and jwt apps to installed apps. - Added that we should use PBLDF2 password hasher. - Added CSRF settings. - Added SESSION settings. - Added our REST_AUTH settings. - ADDED our REST_FRAMEWORK settings. - Added django-filter settings. - Added simple-jwt settings.
- - Major changes to urls. They work now though. perfect. - Added an api root view. This path shows us a list of all available api routes. For reference while programming. - Added a route to get a csrf token. it is /api/v1/csrf - Added the facebook and google oauth2 adapter classes - Added all the authentication views under the api/v1 path. So login will be /api/v1/login - Added social auth endpoints. For facebook and google. - Added the social account management endpoints. This allows disconnecting accounts and show what accounts user has connected now. - kept default _allauth/api to use with our google login and other social logins. They still go through all auth.
- - Installed simple-jwt library to use json web tokens instead of default token view. - Accidently reinstalled django-allauth. so we lost the extras. we need them so i added them again.
- - Added the google callbackurl. This is called by our urls to lead google sign in requests.
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our Project 938 react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from Project 960 and static root. Now it is BASE_DIR / Project 960/static - Removed the facebook and google social account providers auth Project 9339s. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Project 85**

- - Deleted the original in templates/404.html - Moved it to /errors/404.html. Better location and more clean.
- - These are the default all auth templates. They come from django-all-auth.
- - These are the staticfiles from collectstatic for account login in django-all-auth.
- - These are the staticfiles from collectstatic for restframework from djangorestframework.
- - These are the staticfiles from collectstatic for MFA login in django-all-auth.
- - These are the staticfiles from collectstatic for social account login with facebook and django allauth.
- - These are the staticfiles from collectstatic for admin panel route.
- - These are the staticfiles from collectstatic for social account login in django-all-auth
- - Changed the format with a '-' in the middle of 2 variables
- - Added number formatting for us in canada. - Added append slash to the end of every url. - Added do not prepend www. - Set password reset to be for 1 day. No longer to reset password and pass through whole process. - We set first day of week to Sunday. We set utf-8 to be our base character class. - We added default storage finder to our list of staticfiles finders. - Turned csrf use sessions and cookie secure to true from false. We were testing using curl. So we made it false. - Added our min length and alphabet. They will be loaded from the environment. - Added our simple-jwt settings.
- - Added number formatting for us in canada. - Added append slash to the end of every url. - Added do not prepend www. - We use auth.user as our custom user model. - Set password reset to be for 1 day. No longer to reset password and pass through whole process. - We set first day of week to Sunday. We set utf-8 to be our base character class. - We added default storage finder to our list of staticfiles finders. - Turned csrf use sessions and cookie secure to true from false. We were testing using curl. So we made it false. - Added our min length and alphabet. They will be loaded from the environment.
- - Fixed the allauth install by removing the '-' that was before the name - Installed django-sqids. This will make our id's for everything(It applies to models, views, serializers, and filters) to be randomized and not a series. This will protect us from people exploring the api.
- Added django-sqids config for one to set themselves.
- - Added an import datetime to use it with our simple-jwt settings. - Added all the dj-rest-auth, restframework and jwt apps to installed apps. - Added that we should use PBLDF2 password hasher. - Added CSRF settings. - Added SESSION settings. - Added our REST_AUTH settings. - ADDED our REST_FRAMEWORK settings. - Added django-filter settings. - Added simple-jwt settings.
- - Major changes to urls. They work now though. perfect. - Added an api root view. This path shows us a list of all available api routes. For reference while programming. - Added a route to get a csrf token. it is /api/v1/csrf - Added the facebook and google oauth2 adapter classes - Added all the authentication views under the api/v1 path. So login will be /api/v1/login - Added social auth endpoints. For facebook and google. - Added the social account management endpoints. This allows disconnecting accounts and show what accounts user has connected now. - kept default _allauth/api to use with our google login and other social logins. They still go through all auth.
- - Installed simple-jwt library to use json web tokens instead of default token view. - Accidently reinstalled django-allauth. so we lost the extras. we need them so i added them again.
- - Added the google callbackurl. This is called by our urls to lead google sign in requests.
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our Project 938 react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from Project 960 and static root. Now it is BASE_DIR / Project 960/static - Removed the facebook and google social account providers auth Project 9339s. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Project 86**

- - Deleted the original in templates/404.html - Moved it to /errors/404.html. Better location and more clean.
- - These are the default all auth templates. They come from django-all-auth.
- - These are the staticfiles from collectstatic for account login in django-all-auth.
- - These are the staticfiles from collectstatic for restframework from djangorestframework.
- - These are the staticfiles from collectstatic for MFA login in django-all-auth.
- - These are the staticfiles from collectstatic for social account login with facebook and django allauth.
- - These are the staticfiles from collectstatic for admin panel route.
- - These are the staticfiles from collectstatic for social account login in django-all-auth
- - Changed the format with a '-' in the middle of 2 variables
- - Added number formatting for us in canada. - Added append slash to the end of every url. - Added do not prepend www. - Set password reset to be for 1 day. No longer to reset password and pass through whole process. - We set first day of week to Sunday. We set utf-8 to be our base character class. - We added default storage finder to our list of staticfiles finders. - Turned csrf use sessions and cookie secure to true from false. We were testing using curl. So we made it false. - Added our min length and alphabet. They will be loaded from the environment. - Added our simple-jwt settings.
- - Added number formatting for us in canada. - Added append slash to the end of every url. - Added do not prepend www. - We use auth.user as our custom user model. - Set password reset to be for 1 day. No longer to reset password and pass through whole process. - We set first day of week to Sunday. We set utf-8 to be our base character class. - We added default storage finder to our list of staticfiles finders. - Turned csrf use sessions and cookie secure to true from false. We were testing using curl. So we made it false. - Added our min length and alphabet. They will be loaded from the environment.
- - Fixed the allauth install by removing the '-' that was before the name - Installed django-sqids. This will make our id's for everything(It applies to models, views, serializers, and filters) to be randomized and not a series. This will protect us from people exploring the api.
- Added django-sqids config for one to set themselves.
- - Added an import datetime to use it with our simple-jwt settings. - Added all the dj-rest-auth, restframework and jwt apps to installed apps. - Added that we should use PBLDF2 password hasher. - Added CSRF settings. - Added SESSION settings. - Added our REST_AUTH settings. - ADDED our REST_FRAMEWORK settings. - Added django-filter settings. - Added simple-jwt settings.
- - Major changes to urls. They work now though. perfect. - Added an api root view. This path shows us a list of all available api routes. For reference while programming. - Added a route to get a csrf token. it is /api/v1/csrf - Added the facebook and google oauth2 adapter classes - Added all the authentication views under the api/v1 path. So login will be /api/v1/login - Added social auth endpoints. For facebook and google. - Added the social account management endpoints. This allows disconnecting accounts and show what accounts user has connected now. - kept default _allauth/api to use with our google login and other social logins. They still go through all auth.
- - Installed simple-jwt library to use json web tokens instead of default token view. - Accidently reinstalled django-allauth. so we lost the extras. we need them so i added them again.
- - Added the google callbackurl. This is called by our urls to lead google sign in requests.
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our Project 938 react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from Project 960 and static root. Now it is BASE_DIR / Project 960/static - Removed the facebook and google social account providers auth Project 9339s. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Total commits:** 100

## 2024-11-17

**Project 11**

- - Removed a space.

**Project 30**

- - Removed a space.

**Project 45**

- - Removed a space.

**Project 53**

- - Directory is called dev-tools not Project 933. Fixed the speling issue.
- - Improved the install script to allow users to install only chosen scripts. They won't have to install all the scripts at once anymore. They can choose which ones they want.

**Project 85**

- - Removed a space.

**Project 86**

- - Removed a space.

**Total commits:** 7

## 2024-11-18

**Project 11**

- - Added Project 93392 settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with Project 93392. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the Project 93392 Python Library.
- - Added Project 93392 webhook secret, Project 93392 public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react Project 938. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from Project 9339 to Project 938. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Project 30**

- - Added Project 93392 settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with Project 93392. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the Project 93392 Python Library.
- - Added Project 93392 webhook secret, Project 93392 public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react Project 938. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from Project 9339 to Project 938. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Project 45**

- - Added Project 93392 settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with Project 93392. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the Project 93392 Python Library.
- - Added Project 93392 webhook secret, Project 93392 public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react Project 938. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from Project 9339 to Project 938. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Project 85**

- - Added Project 93392 settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with Project 93392. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the Project 93392 Python Library.
- - Added Project 93392 webhook secret, Project 93392 public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react Project 938. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from Project 9339 to Project 938. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Project 86**

- - Added Project 93392 settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with Project 93392. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the Project 93392 Python Library.
- - Added Project 93392 webhook secret, Project 93392 public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react Project 938. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from Project 9339 to Project 938. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Total commits:** 80

## 2024-11-25

**Project 27**

- - Default configuration for a basic yarn, vite react ts project. - Created it with yarn. Added tailwind for styling. It is still in raw format.

**Total commits:** 1

## 2024-11-27

**Project 11**

- - Added psycopg2 for django to communicate with Project 943ql when we switched from sqlite.

**Project 30**

- - Added psycopg2 for django to communicate with Project 943ql when we switched from sqlite.

**Project 38**

- - Created basic starting structure to develop our project. Ran the python file in scripts/.
- - Created python script to generate the project structure in src/. - It will add a {dirName}Notes.md file to each directory to help document it.
- Initial Commit. Set up the base React TS project with Vite, Yarn, and Tailwindcss. About to run the script in /scripts directory to initialize the starting structure.

**Project 45**

- - Added psycopg2 for django to communicate with Project 943ql when we switched from sqlite.

**Project 57**

- - Created basic starting structure to develop our project. Ran the python file in scripts/.
- - Created python script to generate the project structure in src/. - It will add a {dirName}Notes.md file to each directory to help document it.
- Initial Commit. Set up the base React TS project with Vite, Yarn, and Tailwindcss. About to run the script in /scripts directory to initialize the starting structure.

**Project 85**

- - Temporary comit to revert back to if composer causes issues.

**Project 86**

- - Temporary comit to revert back to if composer causes issues.

**Total commits:** 11

## 2024-12-03

**Project 11**

- Enhance service, vehicle, and appointment management with new models and validations
- Update Django settings for production deployment and enhance environment-specific configurations     Site Configuration:         Changed SITE_ID from 1 to 5, to correctly identify the Project 93393 for authentication.
- - Services app migrations.
- - Favicon to stop that 404 response to the browser. Favicon set by React Project 938.
- Enhance payment handling with validation and refund support
- Refactor serializers and add vehicle/address handling to Appointment     Replaced timezone.now() with now() and timezone.make_aware() for consistent timezone handling.     Added VehicleInfo and ServiceAddress to AppointmentWriteSerializer to support vehicle and address fields.     Updated the create() method to handle creation of associated VehicleInfo and ServiceAddress models.     Enhanced validation for service availability and appointment time constraints.     Cleaned up redundant code for date/time handling and serializer fields.
- - Added Project 93392 test secret key. - Added Project 93392 public key, webhook secret and testing webhook secret.
- - Added verbose name to Services and Payments apps.py. This will help us recognize it as we grow.
- - Removed the timezone.now and replaced it with now(). - We import now from django.utils.timezone. - We use now() as the time function and variable to load into our filters.
- - Sample images we used when adding our services to the admin panel. Can be changed anytime.
- - This was never meant to be commited. This is a dump data of our sessions data when we did db migration from sqlite to Project 943.
- - Deleted migrations for welcome app. It has been redone.
- - Project static files. From all auth, from our owns apps and from the other apps our project installed and is using.
- feat(vehicle): Add CSV import command - Create Django management command for vehicle data import - Add data cleaning and validation - Handle special purpose vehicles with normalization - Add progress tracking and error reporting - Implement get_or_create logic to avoid duplicates - Added dataset to the commit.
- - Migrations for the services app.
- feat(vehicle): Update admin configuration - Add VehicleCatalogAdmin for managing vehicle catalog entries - Update VehicleInfoAdmin to use new model structure - Add custom display methods for related vehicle fields - Update list filters and search fields for better admin usability
- feat(vehicle): Add vehicle catalog API routes - Add endpoint for retrieving vehicle makes - Add endpoint for retrieving models by make - Add endpoint for retrieving years by make and model - Add endpoint for retrieving trims with vehicle details
- feat(vehicle): Add vehicle catalog API endpoints - Add get_vehicle_makes endpoint for unique manufacturers - Add get_vehicle_models endpoint filtered by make - Add get_vehicle_years endpoint filtered by make and model - Add get_vehicle_trims endpoint with vehicle details
- - Error template files for 500, 502, 503 and 504.
- - Added the password reset api view to the welcome app. We had no other place to put it without mixing up with other apps.
- - Added password reset urls because they were needed for the forgot password flow. - Changed payments to separate the payments and webhooks and simplified it. - Re-added our csrf endpoint so we can get the token to make requestst to Project 9339. - Added app name before the url config because we set an app name in each of the apps urls.
- - Blog configuration. Still not 100% finished. First need to start implementing the Project 938 blog.

**Project 28**

- - Pipfile and lock. We are using pipenv to manage the virtual environment.

**Project 30**

- Enhance service, vehicle, and appointment management with new models and validations
- Update Django settings for production deployment and enhance environment-specific configurations     Site Configuration:         Changed SITE_ID from 1 to 5, to correctly identify the Project 93393 for authentication.
- - Services app migrations.
- - Favicon to stop that 404 response to the browser. Favicon set by React Project 938.
- Enhance payment handling with validation and refund support
- Refactor serializers and add vehicle/address handling to Appointment     Replaced timezone.now() with now() and timezone.make_aware() for consistent timezone handling.     Added VehicleInfo and ServiceAddress to AppointmentWriteSerializer to support vehicle and address fields.     Updated the create() method to handle creation of associated VehicleInfo and ServiceAddress models.     Enhanced validation for service availability and appointment time constraints.     Cleaned up redundant code for date/time handling and serializer fields.
- - Added Project 93392 test secret key. - Added Project 93392 public key, webhook secret and testing webhook secret.
- - Added verbose name to Services and Payments apps.py. This will help us recognize it as we grow.
- - Removed the timezone.now and replaced it with now(). - We import now from django.utils.timezone. - We use now() as the time function and variable to load into our filters.
- - Sample images we used when adding our services to the admin panel. Can be changed anytime.
- - This was never meant to be commited. This is a dump data of our sessions data when we did db migration from sqlite to Project 943.
- - Deleted migrations for welcome app. It has been redone.
- - Project static files. From all auth, from our owns apps and from the other apps our project installed and is using.
- feat(vehicle): Add CSV import command - Create Django management command for vehicle data import - Add data cleaning and validation - Handle special purpose vehicles with normalization - Add progress tracking and error reporting - Implement get_or_create logic to avoid duplicates - Added dataset to the commit.
- - Migrations for the services app.
- feat(vehicle): Update admin configuration - Add VehicleCatalogAdmin for managing vehicle catalog entries - Update VehicleInfoAdmin to use new model structure - Add custom display methods for related vehicle fields - Update list filters and search fields for better admin usability
- feat(vehicle): Add vehicle catalog API routes - Add endpoint for retrieving vehicle makes - Add endpoint for retrieving models by make - Add endpoint for retrieving years by make and model - Add endpoint for retrieving trims with vehicle details
- feat(vehicle): Add vehicle catalog API endpoints - Add get_vehicle_makes endpoint for unique manufacturers - Add get_vehicle_models endpoint filtered by make - Add get_vehicle_years endpoint filtered by make and model - Add get_vehicle_trims endpoint with vehicle details
- - Error template files for 500, 502, 503 and 504.
- - Added the password reset api view to the welcome app. We had no other place to put it without mixing up with other apps.
- - Added password reset urls because they were needed for the forgot password flow. - Changed payments to separate the payments and webhooks and simplified it. - Re-added our csrf endpoint so we can get the token to make requestst to Project 9339. - Added app name before the url config because we set an app name in each of the apps urls.
- - Blog configuration. Still not 100% finished. First need to start implementing the Project 938 blog.

**Project 38**

- refactor(auth): improve authentication context organization and fix fast refresh
- feat(booking): Integrate DateTime and Address selectors 2|2|2|- Add DateTimeSelector integration 3|3|3|- Add AddressSelector integration 4|4|4|- Update navigation between steps
- feat(booking): Add AddressSelector component 2|2|2|- Add address form with validation 3|3|3|- Implement geocoding with coordinate rounding 4|4|4|- Add loading and error states 5|5|5|- Fix decimal places for lat/long
- feat(booking): Add DateTimeSelector component 2|2|2|- Enforce tomorrow as earliest available date 3|3|3|- Add business hours time slots (9 AM - 5 PM) 4|4|4|- Add date and time validation 5|5|5|- Implement calendar and time picker UI
- feat(types): Add service subtype support 2|2|2|- Add ServiceSubtype interface 3|3|3|- Update Service interface to include subtypes 4|4|4|- Add selectedSubtype to BookingState
- feat(booking): Add service subtype selection 2|2|2|- Add two-step service selection (category then type) 3|3|3|- Update UI to show service categories and subtypes 4|4|4|- Add visual indicators for services with subtypes 5|5|5|- Improve error handling and loading states
- feat(booking): Enhance BookingFlow with step navigation and review 2|2|- Add step indicator with progress tracking 3|3|- Add step summaries with edit functionality 4|4|- Add review step with all booking details 5|5|- Add descriptions and better UI for each step 6|6|- Implement back/forward navigation between steps 7|7|- Add subtype handling in service selection 8|8|- Add subtype handling in service selection 9|9|- Update service summary to show subtype details 10|- Add step titles and descriptions 11|- Improve review step with detailed summaries 12|- Update booking flow for service subtypes
- feat(booking): Enhance VehicleSelector with better UX and mobile support 2|- Add loading states for each dropdown 3|- Add error handling for API calls 4|- Add loading spinners during data fetching 5|- Add disabled states for dropdowns while loading 6|- Add error display for failed API calls 7|- Add progress indicator with step tracking 8|- Add selected vehicle summary display 9|- Add retry functionality for failed API calls 10|- Improve mobile responsiveness with full-width controls 11|- Refactor API calls into separate functions 12|- Add loading states and error handling for each step 13|- Add selected vehicle summary display
- - Added radio group shadcn component to our project.
- feat(pages): Add appointments page - Add booking flow integration - Add page layout and title
- - Shad/cn component.
- feat(booking): Add service selector component - Create radio group for service selection - Add loading and error states - Implement service fetching from API - Add back/next navigation
- feat(booking): Add main booking flow component - Implement step-based booking process - Add vehicle selection step - Fix TypeScript step type definitions - Add navigation between steps
- feat(booking): Add vehicle selector component - Create cascading comboboxes for vehicle selection - Implement Make → Model → Year → Trim flow - Add API integration with vehicle catalog - Add search functionality for each dropdown
- feat(types): Add vehicle and booking types - Add Vehicle interface for catalog entries - Add VehicleInfo interface for user vehicles - Add Service interface for available services - Add BookingState interface for booking flow
- - Our tailwind configuration.
- - Added our routes to our app links.
- - Our new package installs.
- - Changed our ip frm .39 to .40 router restarted.
- - Added Places API to index.html. Still working through some kinks.
- - A simple toast component for us to call toasts when needed.
- - Added basic dashboard page.
- - Working on appointment booking flow right now. Working on making it an easier process for the user.
- - Configured out authentication. We can login, signup/register, forgot password reset.
- - Shad/cn ui components.

**Project 45**

- Enhance service, vehicle, and appointment management with new models and validations
- Update Django settings for production deployment and enhance environment-specific configurations     Site Configuration:         Changed SITE_ID from 1 to 5, to correctly identify the Project 93393 for authentication.
- - Services app migrations.
- - Favicon to stop that 404 response to the browser. Favicon set by React Project 938.
- Enhance payment handling with validation and refund support
- Refactor serializers and add vehicle/address handling to Appointment     Replaced timezone.now() with now() and timezone.make_aware() for consistent timezone handling.     Added VehicleInfo and ServiceAddress to AppointmentWriteSerializer to support vehicle and address fields.     Updated the create() method to handle creation of associated VehicleInfo and ServiceAddress models.     Enhanced validation for service availability and appointment time constraints.     Cleaned up redundant code for date/time handling and serializer fields.
- - Added Project 93392 test secret key. - Added Project 93392 public key, webhook secret and testing webhook secret.
- - Added verbose name to Services and Payments apps.py. This will help us recognize it as we grow.
- - Removed the timezone.now and replaced it with now(). - We import now from django.utils.timezone. - We use now() as the time function and variable to load into our filters.
- - Sample images we used when adding our services to the admin panel. Can be changed anytime.
- - This was never meant to be commited. This is a dump data of our sessions data when we did db migration from sqlite to Project 943.
- - Deleted migrations for welcome app. It has been redone.
- - Project static files. From all auth, from our owns apps and from the other apps our project installed and is using.
- feat(vehicle): Add CSV import command - Create Django management command for vehicle data import - Add data cleaning and validation - Handle special purpose vehicles with normalization - Add progress tracking and error reporting - Implement get_or_create logic to avoid duplicates - Added dataset to the commit.
- - Migrations for the services app.
- feat(vehicle): Update admin configuration - Add VehicleCatalogAdmin for managing vehicle catalog entries - Update VehicleInfoAdmin to use new model structure - Add custom display methods for related vehicle fields - Update list filters and search fields for better admin usability
- feat(vehicle): Add vehicle catalog API routes - Add endpoint for retrieving vehicle makes - Add endpoint for retrieving models by make - Add endpoint for retrieving years by make and model - Add endpoint for retrieving trims with vehicle details
- feat(vehicle): Add vehicle catalog API endpoints - Add get_vehicle_makes endpoint for unique manufacturers - Add get_vehicle_models endpoint filtered by make - Add get_vehicle_years endpoint filtered by make and model - Add get_vehicle_trims endpoint with vehicle details
- - Error template files for 500, 502, 503 and 504.
- - Added the password reset api view to the welcome app. We had no other place to put it without mixing up with other apps.
- - Added password reset urls because they were needed for the forgot password flow. - Changed payments to separate the payments and webhooks and simplified it. - Re-added our csrf endpoint so we can get the token to make requestst to Project 9339. - Added app name before the url config because we set an app name in each of the apps urls.
- - Blog configuration. Still not 100% finished. First need to start implementing the Project 938 blog.

**Project 50**

- - Our dataset but for the years 2000-2025.
- - This script will remove years starting from a certain year(2000). - Set it to any year you want.
- - The README for my project.
- - Renamed dataset due to csv being in the name twice.
- - This is a script to sort the dataset by year. It will put the oldest on top and latest on the bottom.
- - This script will fill the empty fields in the dataset with a None. - You can choose any value you want for filling empty fields.
- - This script will find all the duplicates in the current codebase and save them to a new file in same directory. - Useful for removing vehicles that aren't unique. Most of the fields make them unique but once removed the rows become the same.
- - We used this script to clean the original vehicles.csv. - We removed columns one at a time until we got what we wanted. - You can remove whatever columns you choose.
- - Find script. It will look in any column and count the unique values and print them into the terminal. - We used it to find the count of unique values in the VClass field when changing them to Truck, SUV, Sedan or Van or Two Seater.
- - Our dataset after the changes. We only kept these columns: cylinders,make,model,VClass,year,baseModel,atvType. - Our goal was to use it to book user services. We can narrow down which car using dropdown combo boxes for user to choose from.
- - Original dataset. We got it from here: https://www.fueleconomy.gov/feg/download.shtml.
- Initial commit

**Project 57**

- refactor(auth): improve authentication context organization and fix fast refresh
- feat(booking): Integrate DateTime and Address selectors 2|2|2|- Add DateTimeSelector integration 3|3|3|- Add AddressSelector integration 4|4|4|- Update navigation between steps
- feat(booking): Add AddressSelector component 2|2|2|- Add address form with validation 3|3|3|- Implement geocoding with coordinate rounding 4|4|4|- Add loading and error states 5|5|5|- Fix decimal places for lat/long
- feat(booking): Add DateTimeSelector component 2|2|2|- Enforce tomorrow as earliest available date 3|3|3|- Add business hours time slots (9 AM - 5 PM) 4|4|4|- Add date and time validation 5|5|5|- Implement calendar and time picker UI
- feat(types): Add service subtype support 2|2|2|- Add ServiceSubtype interface 3|3|3|- Update Service interface to include subtypes 4|4|4|- Add selectedSubtype to BookingState
- feat(booking): Add service subtype selection 2|2|2|- Add two-step service selection (category then type) 3|3|3|- Update UI to show service categories and subtypes 4|4|4|- Add visual indicators for services with subtypes 5|5|5|- Improve error handling and loading states
- feat(booking): Enhance BookingFlow with step navigation and review 2|2|- Add step indicator with progress tracking 3|3|- Add step summaries with edit functionality 4|4|- Add review step with all booking details 5|5|- Add descriptions and better UI for each step 6|6|- Implement back/forward navigation between steps 7|7|- Add subtype handling in service selection 8|8|- Add subtype handling in service selection 9|9|- Update service summary to show subtype details 10|- Add step titles and descriptions 11|- Improve review step with detailed summaries 12|- Update booking flow for service subtypes
- feat(booking): Enhance VehicleSelector with better UX and mobile support 2|- Add loading states for each dropdown 3|- Add error handling for API calls 4|- Add loading spinners during data fetching 5|- Add disabled states for dropdowns while loading 6|- Add error display for failed API calls 7|- Add progress indicator with step tracking 8|- Add selected vehicle summary display 9|- Add retry functionality for failed API calls 10|- Improve mobile responsiveness with full-width controls 11|- Refactor API calls into separate functions 12|- Add loading states and error handling for each step 13|- Add selected vehicle summary display
- - Added radio group shadcn component to our project.
- feat(pages): Add appointments page - Add booking flow integration - Add page layout and title
- - Shad/cn component.
- feat(booking): Add service selector component - Create radio group for service selection - Add loading and error states - Implement service fetching from API - Add back/next navigation
- feat(booking): Add main booking flow component - Implement step-based booking process - Add vehicle selection step - Fix TypeScript step type definitions - Add navigation between steps
- feat(booking): Add vehicle selector component - Create cascading comboboxes for vehicle selection - Implement Make → Model → Year → Trim flow - Add API integration with vehicle catalog - Add search functionality for each dropdown
- feat(types): Add vehicle and booking types - Add Vehicle interface for catalog entries - Add VehicleInfo interface for user vehicles - Add Service interface for available services - Add BookingState interface for booking flow
- - Our tailwind configuration.
- - Added our routes to our app links.
- - Our new package installs.
- - Changed our ip frm .39 to .40 router restarted.
- - Added Places API to index.html. Still working through some kinks.
- - A simple toast component for us to call toasts when needed.
- - Added basic dashboard page.
- - Working on appointment booking flow right now. Working on making it an easier process for the user.
- - Configured out authentication. We can login, signup/register, forgot password reset.
- - Shad/cn ui components.

**Total commits:** 129

## 2024-12-05

**Project 51**

- - Added eslint and prettier config to the projet. Combined them both together. - Prettier errors will show up as eslint errors.
- - Added shadcn-ui for pre-made components.
- feat(2To6X React Project)   - Just ran the script and it added basic files to our src directory. it is starting off alright.
- feat(2To6X React Project):   Just getting started. Added tailwind, added roboto font, removed default settings.   This is the default config.

**Total commits:** 4

## 2024-12-08

**Project 36**

- - Started new vite react-ts project with yarn. This is basic config.

**Project 89**

- - Started new vite react-ts project with yarn. This is basic config.

**Project 90**

- - Started new vite react-ts project with yarn. This is basic config.

**Total commits:** 3

## 2024-12-09

**Project 36**

- (feat .env) - Basic env example file to make it easy to add the keys when changing environments.
- - Removed them. We don't need them.
- (feat index.html) - Added a link to our new svg for favicon. - Added an import for our Google Roboto Font. - Added a new title to reflect our project. With a description of our services.
- (feat Project 938): - Added tailwindcss with animate - Configured and installed Shad/CN components library with lucide icons.

**Project 89**

- (feat .env) - Basic env example file to make it easy to add the keys when changing environments.
- - Removed them. We don't need them.
- (feat index.html) - Added a link to our new svg for favicon. - Added an import for our Google Roboto Font. - Added a new title to reflect our project. With a description of our services.
- (feat Project 938): - Added tailwindcss with animate - Configured and installed Shad/CN components library with lucide icons.

**Project 90**

- (feat .env) - Basic env example file to make it easy to add the keys when changing environments.
- - Removed them. We don't need them.
- (feat index.html) - Added a link to our new svg for favicon. - Added an import for our Google Roboto Font. - Added a new title to reflect our project. With a description of our services.
- (feat Project 938): - Added tailwindcss with animate - Configured and installed Shad/CN components library with lucide icons.

**Total commits:** 12

## 2024-12-15

**Project 36**

- feat (vite-env.d.ts): - Added eslint plugin react hooks declaration because ts could not find it.
- feat (tsconfig.*.json): - Removed no emit from both because it was causing issues. - Added emit declaration so only ts files are emited. not js.
- feat (tailwind.config.js): - Issue was center needs to be a boolean. I set it to a string. Fixed.
- feat (ts and vite config): - Configured these files according to project scope.

**Project 90**

- feat (vite-env.d.ts): - Added eslint plugin react hooks declaration because ts could not find it.
- feat (tsconfig.*.json): - Removed no emit from both because it was causing issues. - Added emit declaration so only ts files are emited. not js.
- feat (tailwind.config.js): - Issue was center needs to be a boolean. I set it to a string. Fixed.
- feat (ts and vite config): - Configured these files according to project scope.

**Total commits:** 8

## 2024-12-16

**Project 36**

- Installed eslint react plug in hooks.
- - no changes here. - reset app.tsx to default
- feat (eslint.config.js): - Fixed eslint issues. - Set minimum rules. - Removed deprecated rules.

**Project 90**

- Installed eslint react plug in hooks.
- - no changes here. - reset app.tsx to default
- feat (eslint.config.js): - Fixed eslint issues. - Set minimum rules. - Removed deprecated rules.

**Total commits:** 6

## 2024-12-19

**Project 90**

- feat (router): - Set up our basic tanstack router. - Using file based routing. We have static pages and dynamic url driven blog pages.
- feat (pages): - These are the pages we are using for rendering routes in our app.
- feat (axios): - Created our first axios instance. - Set a apiBase which holds the base api config with the defaults and apiBlog which is for blog related endpoints. - Added the endpoints we are going for as a comment to page top. - Set up axios defaults so we don't have to type every request. - Added a csrf request. So we can just import it and add to request headers. - Added all blog types from our Project 9339 according to our serializers.
- feat (tanstack router): - Set up basic router for the project.

**Total commits:** 4

## 2024-12-22

**Project 90**

- - Added tanstack dev tools to our project.
- refactor(ui): reorganize pages and components
- refactor(api): restructure API layer
- chore(config): update project configuration
- feat(forms): add form handling and utilities
- feat(query): implement react-query hooks
- feat(router): implement file-based routing with tanstack

**Total commits:** 7

## 2024-12-23

**Project 90**

- feat (useAuth): - We now store the user data object in session storage - We can use that to personalize user journey in the the app while logged in. - We remove the items from session storage on failed login. - New login replaces old data with fresh data.
- feat (verify-email): - Added card component to style better.
- feat (error handler): - Added network on and off messages for users. - Added an error handler to parse the axios error and then return it to the user. - We added network status to our root route. - Updated message and toast format for all queries and mutations.
- feat (sonner toast): - Removed it from app.tsx and added it to the root page. It works now.
- feat(auth): enhance form validation and autocomplete
- feat (apiBase): - Added with xsrf token to true to auto include the csrf token with requests.
- feat (login & register page): - Used card format to style it. - Added links to our privacy policy and terms of service at bottom.

**Total commits:** 7

## 2024-12-26

**Project 81**

- feat (electron app vite startup): - The goals here are 3. - Configure ADB. - Configure Scrcpy. - Guide in setting up sound by opening the right panel in settings.

**Total commits:** 1

## 2025-01-01

**Project 88**

- feat(project): - Added search and compare pages and routes. - Added eslint and prettier. - We have homepage, search page and compare page. - Added lodash for debouncing api calls and a debounce util in lib/hooks - Set all links to / for now.
- feat(project): - Started new vite project.

**Total commits:** 2

## 2025-01-06

**Project 2**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**Project 22**

- feat (Backend BDM Central): - Initialized default Django Project.

**Project 24**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**Project 37**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**Project 95**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**Total commits:** 5

## 2025-01-07

**Project 17**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Project 29**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Project 47**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Project 48**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Project 49**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Total commits:** 5

## 2025-01-08

**Project 17**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added Project 93392 to our Project 960 mode. - Added Project 93392 price, product ids to the Project 960 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 960 app. - Created a Project 93392 config file and a payments views folder. We will use this to handle our Project 93392 config. - Added some .env imports in base for our Project 93392 keys and product ids for our 3 Project 960. - Added a logger for the Project 960 app. - Added better error response and handling for our logging and user messages in Project 938 toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added Project 93392 to our Project 960 mode. - Added Project 93392 price, product ids to the Project 960 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 960 app. - Created a Project 93392 config file and a payments views folder. We will use this to handle our Project 93392 config. - Added some .env imports in base for our Project 93392 keys and product ids for our 3 Project 960.
- feat(Products): Implement E-commerce Models and API Endpoints
- feat(Project 960.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store Project 960(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Project 2**

- feat (project): - Added tailwind css. - Added Shad/cn components library. - Added Tanstack Query and Router

**Project 29**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added Project 93392 to our Project 960 mode. - Added Project 93392 price, product ids to the Project 960 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 960 app. - Created a Project 93392 config file and a payments views folder. We will use this to handle our Project 93392 config. - Added some .env imports in base for our Project 93392 keys and product ids for our 3 Project 960. - Added a logger for the Project 960 app. - Added better error response and handling for our logging and user messages in Project 938 toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added Project 93392 to our Project 960 mode. - Added Project 93392 price, product ids to the Project 960 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 960 app. - Created a Project 93392 config file and a payments views folder. We will use this to handle our Project 93392 config. - Added some .env imports in base for our Project 93392 keys and product ids for our 3 Project 960.
- feat(Products): Implement E-commerce Models and API Endpoints
- feat(Project 960.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store Project 960(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Project 37**

- feat (project): - Added tailwind css. - Added Shad/cn components library. - Added Tanstack Query and Router

**Project 47**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added Project 93392 to our Project 960 mode. - Added Project 93392 price, product ids to the Project 960 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 960 app. - Created a Project 93392 config file and a payments views folder. We will use this to handle our Project 93392 config. - Added some .env imports in base for our Project 93392 keys and product ids for our 3 Project 960. - Added a logger for the Project 960 app. - Added better error response and handling for our logging and user messages in Project 938 toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added Project 93392 to our Project 960 mode. - Added Project 93392 price, product ids to the Project 960 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 960 app. - Created a Project 93392 config file and a payments views folder. We will use this to handle our Project 93392 config. - Added some .env imports in base for our Project 93392 keys and product ids for our 3 Project 960.
- feat(Products): Implement E-commerce Models and API Endpoints
- feat(Project 960.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store Project 960(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Project 48**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added Project 93392 to our Project 960 mode. - Added Project 93392 price, product ids to the Project 960 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 960 app. - Created a Project 93392 config file and a payments views folder. We will use this to handle our Project 93392 config. - Added some .env imports in base for our Project 93392 keys and product ids for our 3 Project 960. - Added a logger for the Project 960 app. - Added better error response and handling for our logging and user messages in Project 938 toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added Project 93392 to our Project 960 mode. - Added Project 93392 price, product ids to the Project 960 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 960 app. - Created a Project 93392 config file and a payments views folder. We will use this to handle our Project 93392 config. - Added some .env imports in base for our Project 93392 keys and product ids for our 3 Project 960.
- feat(Products): Implement E-commerce Models and API Endpoints
- feat(Project 960.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store Project 960(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Project 49**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added Project 93392 to our Project 960 mode. - Added Project 93392 price, product ids to the Project 960 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 960 app. - Created a Project 93392 config file and a payments views folder. We will use this to handle our Project 93392 config. - Added some .env imports in base for our Project 93392 keys and product ids for our 3 Project 960. - Added a logger for the Project 960 app. - Added better error response and handling for our logging and user messages in Project 938 toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added Project 93392 to our Project 960 mode. - Added Project 93392 price, product ids to the Project 960 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 960 app. - Created a Project 93392 config file and a payments views folder. We will use this to handle our Project 93392 config. - Added some .env imports in base for our Project 93392 keys and product ids for our 3 Project 960.
- feat(Products): Implement E-commerce Models and API Endpoints
- feat(Project 960.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store Project 960(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Project 95**

- feat (project): - Added tailwind css. - Added Shad/cn components library. - Added Tanstack Query and Router

**Total commits:** 28

## 2025-01-14

**Project 2**

- feat (signUpForm): - Terms and conditions disclaimer at bottom of sign up with links to pages. - Removed the export from useRegister because it isn't needed. - Removed the data we saved in Query client and added it to RegisterStore. - Moved the navigation to onSuccess from the mutation.isSuccess. - Create a JustSignedUp cookie and if that cookie isn't there, it won't render verify Page.
- feat (extras): - extra config files and route tree. - Shad/cn components.
- feat (apiInstance): - Removed an extra /api/v1. Already included in .env
- feat (signup + verify-email): - Complete signup + verify page. - Complete signup and verify-email forms. - Implemented sending one time passcode to user email. With resend feature - verify expects a param of username and email that is saved in our query. Without it verify page redirects to signup. - Api call to Project 9339 + Query Mutation + parse response and map to form fields and alert to display Project 9339 response messages.
- feat(signUp form): - Created the register api call. - Working on the query and form now. - Restarted the form. Will make it myself.
- feat (axios apiInstance): - Created a base axios instance. - Will include csrf tokens in requests automatically.

**Project 37**

- feat (signUpForm): - Terms and conditions disclaimer at bottom of sign up with links to pages. - Removed the export from useRegister because it isn't needed. - Removed the data we saved in Query client and added it to RegisterStore. - Moved the navigation to onSuccess from the mutation.isSuccess. - Create a JustSignedUp cookie and if that cookie isn't there, it won't render verify Page.
- feat (extras): - extra config files and route tree. - Shad/cn components.
- feat (apiInstance): - Removed an extra /api/v1. Already included in .env
- feat (signup + verify-email): - Complete signup + verify page. - Complete signup and verify-email forms. - Implemented sending one time passcode to user email. With resend feature - verify expects a param of username and email that is saved in our query. Without it verify page redirects to signup. - Api call to Project 9339 + Query Mutation + parse response and map to form fields and alert to display Project 9339 response messages.
- feat(signUp form): - Created the register api call. - Working on the query and form now. - Restarted the form. Will make it myself.
- feat (axios apiInstance): - Created a base axios instance. - Will include csrf tokens in requests automatically.

**Project 95**

- feat (signUpForm): - Terms and conditions disclaimer at bottom of sign up with links to pages. - Removed the export from useRegister because it isn't needed. - Removed the data we saved in Query client and added it to RegisterStore. - Moved the navigation to onSuccess from the mutation.isSuccess. - Create a JustSignedUp cookie and if that cookie isn't there, it won't render verify Page.
- feat (extras): - extra config files and route tree. - Shad/cn components.
- feat (apiInstance): - Removed an extra /api/v1. Already included in .env
- feat (signup + verify-email): - Complete signup + verify page. - Complete signup and verify-email forms. - Implemented sending one time passcode to user email. With resend feature - verify expects a param of username and email that is saved in our query. Without it verify page redirects to signup. - Api call to Project 9339 + Query Mutation + parse response and map to form fields and alert to display Project 9339 response messages.
- feat(signUp form): - Created the register api call. - Working on the query and form now. - Restarted the form. Will make it myself.
- feat (axios apiInstance): - Created a base axios instance. - Will include csrf tokens in requests automatically.

**Total commits:** 18

## 2025-01-15

**Project 2**

- - Updated ReadMe
- feat(api + contextStore): - Added a refresh and access token request. - We check if access or refresh cookies are there, if not we return the error. - If cookies found we send to Project 9339 to validate them. - Created a zuustand context store. We wil use it to store all simple context we need between components.
- feat (login): - Added login api call and useLogin query to mutate the data. - Created a fieldInfo instance to be able to drop errors beside the field that the Project 9339 returns them for. - Create an isAuthenticated cookie, if it is there, we redirect back to page we came from. - onBlur form field validation.
- feat (verify-email): - Moved the navigation to login inside onSuccess mutation. - Added a check for a justSignedUp cookie. If not found, it will redirect to sign in page. - Use the email and username we saved to useRegisterStore instead of query data. params.

**Project 37**

- - Updated ReadMe
- feat(api + contextStore): - Added a refresh and access token request. - We check if access or refresh cookies are there, if not we return the error. - If cookies found we send to Project 9339 to validate them. - Created a zuustand context store. We wil use it to store all simple context we need between components.
- feat (login): - Added login api call and useLogin query to mutate the data. - Created a fieldInfo instance to be able to drop errors beside the field that the Project 9339 returns them for. - Create an isAuthenticated cookie, if it is there, we redirect back to page we came from. - onBlur form field validation.
- feat (verify-email): - Moved the navigation to login inside onSuccess mutation. - Added a check for a justSignedUp cookie. If not found, it will redirect to sign in page. - Use the email and username we saved to useRegisterStore instead of query data. params.

**Project 95**

- - Updated ReadMe
- feat(api + contextStore): - Added a refresh and access token request. - We check if access or refresh cookies are there, if not we return the error. - If cookies found we send to Project 9339 to validate them. - Created a zuustand context store. We wil use it to store all simple context we need between components.
- feat (login): - Added login api call and useLogin query to mutate the data. - Created a fieldInfo instance to be able to drop errors beside the field that the Project 9339 returns them for. - Create an isAuthenticated cookie, if it is there, we redirect back to page we came from. - onBlur form field validation.
- feat (verify-email): - Moved the navigation to login inside onSuccess mutation. - Added a check for a justSignedUp cookie. If not found, it will redirect to sign in page. - Use the email and username we saved to useRegisterStore instead of query data. params.

**Total commits:** 12

## 2025-01-16

**Project 17**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**Project 29**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**Project 47**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**Project 48**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**Total commits:** 4

## 2025-01-28

**Project 61**

- - set tailwind v4 theme settings. Theme works now. - Added Roboto font from google as well. - Issue with npx and bunx use, I had to delete package-lock.json.
- Added axios, js-cookie + types. - Added base apiInstance for entire project.
- - Added Tanstack router and query Project 69s. - Installed their Project 933. - Added Sonner from shad/cn
- Added shad/cn manually.
- - Added bun path types. - Updated the tsconfig files.
- Added tailwind v4 and the vite plugin.
- Fresh Bun Vite React TS install.

**Project 79**

- Added prettier and ran it.
- route tree
- terms and conditions disclaimer.
- shad/cn input otp for verify email form.
- updated eslint config.
- Added Google brand colors to svg for google login button
- - Added Login, Signup, Verify-Email, Reset-Password request and password reset pages with all needed logic in the file. - Removed Auth, guest and register stores and placed them in shared dir.
- Added baseUserSchema. This is minimum we need from user.
- - SignUp form and page combined with all logic.
- - Network status notification for user if offline or network issues. - Mode toggle to go between dark and light mode theme. - Added theme providers to wrap our root Route and wrapped as needed. - Debounce hook for api calls we need to slow down.
- Added Google and Facebook login buttons.
- - set tailwind v4 theme settings. Theme works now. - Added Roboto font from google as well. - Issue with npx and bunx use, I had to delete package-lock.json.
- Added axios, js-cookie + types. - Added base apiInstance for entire project.
- - Added Tanstack router and query Project 69s. - Installed their Project 933. - Added Sonner from shad/cn
- Added shad/cn manually.
- - Added bun path types. - Updated the tsconfig files.
- Added tailwind v4 and the vite plugin.
- Fresh Bun Vite React TS install.

**Total commits:** 25

## 2025-02-02

**Project 84**

- images and videos for our Project 960

**Total commits:** 1

## 2025-02-04

**Project 79**

- Product display pages. Index and Detail views. - Index shows all Project 960 in a page. Detail shows info and allows add to cart+favortite ability on each product. - Size guide not ready yet. We  will need to measure 1 of each size ourselves. Numbers I got are not reliable. - Images are local to Project 938. Instead of sending them via api with every product, we can import in Project 938 and display that way. - Each Pages has the images that go into detail.
- Password reset + redirect and change password. - Redirecting user with a link sent by email then they change their password by providing 2 new passwords then redirect to login. - System always returns a positive for email sent to avoid people finding users emails. Only sends email if user exists.
- Initiatives. This is our project intitiatives. WE want to commit a part of our revenue to a good cause. - Contact Form to reach out to us. - Grant Application same as contact with grant related flag. - Product giveaway has flag same contact form. - School supplies is an application to apply for support. We might give you school supplies. - We have a contribute route. This one will help us bridge the gap between people who we can help and others who contribute to that.
- Signup, Verify-Email, Login Forms and related logic. - Completed forms with all data and working with connection to Project 9339. We need to add our own image in place of the picsum images. TODO. - We included fully featured OAuth with google and facebook, loggin in user and givng us access and refresh tokens. - We included Guest Login portion of signup where they can only provide email and be logged in. - Password Verify with a 6 digit OTP sent by email on login. Optional.
- - Footer + Layout Footer has company info, quick links, Project 960, policies and map pin from google. - Styled it with good distance from the edges.
- Header for the webProject 93393. Has mobile view set but need more padding and margin to distance from edges. Match footer. - Added user icon with login and logout button based on auth state - Logout deletes cookies and triggers api call to Project 9339 to log user out. - Login leads to /auth/login route. - Added SVG Logo. Might add some colors in the logo we will see. - Cart integration in header as well.

**Total commits:** 6

## 2025-02-07

**Project 79**

- Header + Footer: - Footer adapts to all screen sizes. - Header needs more work

**Total commits:** 1

## 2025-02-15

**Project 29**

- last portion before we commit into vps.
- config (settings): - Set redis to be the cache system. - Set Project 943 to be database system. - Both on unix socket.
- addition (Project 960 app): - We have Project 93392 integration for payments. - we have api to send orders(donations), create payment intents, recieve webhooks and process transactions.
- addition (user Model): - Added Stripe_customer_id, phone_number and use sqid for the pk. - Brought the views for our social auth and csrf into the users app views to avoid cluttering app specific views.

**Project 47**

- last portion before we commit into vps.
- config (settings): - Set redis to be the cache system. - Set Project 943 to be database system. - Both on unix socket.
- addition (Project 960 app): - We have Project 93392 integration for payments. - we have api to send orders(donations), create payment intents, recieve webhooks and process transactions.
- addition (user Model): - Added Stripe_customer_id, phone_number and use sqid for the pk. - Brought the views for our social auth and csrf into the users app views to avoid cluttering app specific views.

**Total commits:** 8

## 2025-02-21

**Project 14**

- Added tanstack router+query with Project 933. - Added api instance. - Added network check. - Theme mode and toggle. - Added shared stores for the program. - Added Layout with header and children
- Added shad/cn. configured theme to match.
- - Updated index.html to include more meta data and tags. It is no supporting of social Project 960 sharing. - Added different sized svgs in case screen size changes. - Added manifest.json, Project 93393map.xml, robots.txt - Much more detailed index.html than ever before
- Added tailwind css v4.
- first commit. Started new react 19 project.

**Total commits:** 5

## 2025-02-26

**Project 34**

- Added tailwind css v4.
- Started new vite react ts project

**Total commits:** 2

## 2025-02-27

**Project 46**

- Backend for sh Aden manasik Hajj 2025 form.

**Total commits:** 1

## 2025-03-03

**Project 19**

- Added cart admin to see user carts.
- Pipfile
- configured a logger for all the apps.
- formatting
- Added order view set to take order information and save it. Returns a success 200 and error if issues.
- Added Order and Order Item models to store our order data.
- changed payment intent to checkout session.
- Added the urls for orders
- Added orderItem, Order, and OrderDetail serializers.
- Added admin for order and order item to see orders in our admin panel.
- Added helper functions to help us determine approximate rate we charge user as tax depending on where they are at. Only usa and canada right now
- Added admin view for shipping rates. We can now see all rates requests.
- Added a get rates view for canada post. We can not call this endpoint and get a list of canada post shipping services.
- Added models to store shipping rate requests and one of shipping service.
- Added dimensions model, serializer and admin for our Project 960. We enter once and reference it there.
- finished Project 960 app. Moving on for now.
- git Project 37 for linux, mac, node and python.
- Added Project 960, color, size, inventory, promotion and likes to the admin panel so we can edit.
- Added urls for Project 960, promotions and inventory
- Added product, promotion and inventory viewsets with custom exceptions.
- Added product, promotion, inventory, reviews, size and color serializers.
- Added color, size, inventory, likes, review, promotion models to store our product and related data.
- Added new user model to expand the abstract user model. This add some fields we need to the user model on top of django's extra.
- installed django

**Project 39**

- added shad/cn
- added tailwind css
- created new vite react ts project

**Total commits:** 27

## 2025-03-04

**Project 19**

- Fixed up the redundancy in the admin panel code.
- added a fedex and canada post url to reach each service separately.
- formatting
- fixed the models to create an abstract base shipping model we expand with for canada post and fedex as needed.
- Made a base serializer class that the canada post and fedex serializers inherit from.
- Optimized imports.
- Removed Project 93392 payout status. Same as status. Shipping address will be stored as a json object from now on. Removed estimated days. Not necessary. Optimized imports.
- Removed the admin registation. This model is a helper to the other Order model in admin.
- removed the get username function. redundant. removed the Project 93392 payment status. its same as our systems status.
- Added admin view so we can see contact form submissions.
- Added contact form model to store our contact form data. Removed translation util from fields in user model.
- A serializer for our contact form data.
- Added contact form viewset. it simply saves the form and we can see in admin.
- Added endpoint to send contact form requests.
- Installed Stripe library
- changed how we import user model in models. changed how we import product views in urls. removed unsused functions from views.
- Function that takes in an order_id from request and will get all information needed to create the checkout session. If session succeeds then our webhook will receive the call and update the order model.
- We have urls to create a new checkout session and and endpoint to receive webhooks.
- our Project 93392 config to import all environment variables.
- Added url for creating checkout session and the Project 93392 webhooks.

**Total commits:** 20

## 2025-03-05

**Project 19**

- migrated to uv from pipenv. configuration files. Added ruff to config.
- canada post integration. Need to verify it works.
- fedex integration. Need to verify it works.
- utils for shipping. Useful functions for shipping.
- model to store user or anonymous cart data.
- api endpoint to add, remove or clear cart.
- cart serializer for users cart items
- removed link to user on shipping model + optimized imports + formatting.
- Moved dimensions to be connected to size. Kept foreign key for size and now size will also have dimensions. optimized imports and formatting
- removed list_display for user on base shipping admin + optimized imports + formatting.
- optimized imports + formatting with ruff.
- changed the view to more of an interceptor to redirect to canada post or fedex depending on the country.

**Total commits:** 12

## 2025-03-07

**Project 19**

- the canada post integration is finally working!! example api call at bottom.

**Total commits:** 1

## 2025-03-18

**Project 1**

- Auto-commit on 2025-03-18 14:02:17

**Project 13**

- Auto-commit on 2025-03-18 14:02:14

**Project 23**

- Auto-commit on 2025-03-18 14:02:13

**Project 28**

- Auto-commit on 2025-03-18 14:04:40

**Project 40**

- Auto-commit on 2025-03-18 14:04:06

**Project 41**

- Auto-commit on 2025-03-18 14:04:25

**Project 42**

- Auto-commit on 2025-03-18 14:04:06

**Project 44**

- Auto-commit on 2025-03-18 14:02:12

**Project 5**

- Auto-commit on 2025-03-18 14:02:11

**Project 52**

- Auto-commit on 2025-03-18 14:02:19

**Project 54**

- Auto-commit on 2025-03-18 14:04:24

**Project 59**

- Auto-commit on 2025-03-18 14:04:23

**Project 66**

- Auto-commit on 2025-03-18 14:04:03

**Project 68**

- Auto-commit on 2025-03-18 14:04:04

**Project 7**

- Auto-commit on 2025-03-18 14:04:05

**Project 78**

- Auto-commit on 2025-03-18 14:04:37

**Project 83**

- Auto-commit on 2025-03-18 14:04:36

**Project 91**

- Auto-commit on 2025-03-18 14:04:12

**Project 96**

- Auto-commit on 2025-03-18 14:01:57

**Total commits:** 19

## 2025-03-20

**Project 58**

- Added shad/cn
- Created new project with vite and added tailwind css

**Total commits:** 2

## 2025-03-22

**Project 26**

- Same ui split into parts. now working on the spacing.
- Its looking very nice for the ui chat. Saving my progress before disaster.

**Total commits:** 2

## 2025-03-24

**Project 71**

- Added some helper functions to /lib
- New project with vite, tailwind, shadcn.

**Total commits:** 2

## 2025-03-29

**Project 31**

- Added json renderer for our images
- Added chat topic selector
- Added Chat Message Area Component
- Added chat message component
- Added Chat Input component
- Added shad/cn
- Added tailwind css.

**Total commits:** 7

## 2025-03-30

**Project 31**

- Added a chat image carousel. trying to dynamically load in images from the models response.
- Chat ui now uses the use scroll to bottom hook to do the scrolling instead of our own implementation using useEffect
- Chat ui now has the chat message actions sticky in the ui with settings for each chat.
- Chat ui is smooth scrolling and the chats are being loaded into the sidebar. Issue now is tha we must fix the virtualization
- Chat ui is working and streams the content perfectly

**Project 76**

- The Project 9339 for our chat ui app. Working nice so far. Adding image support now. Will branch of title setting to a different call to the model. It is too liberal with the title now. Changing it multiple times per chat.

**Project 94**

- The Project 9339 for our chat ui app. Working nice so far. Adding image support now. Will branch of title setting to a different call to the model. It is too liberal with the title now. Changing it multiple times per chat.

**Total commits:** 7

## 2025-03-31

**Project 31**

- Chat section is able to return videos and images dynamically.
- Finally got the jsx renderer working on index. I will now work to merge it with the ChatSection.tsx
- Adding a jsx renderer to our chat section. It's causing errors, so adding a save before we impact too hard.

**Project 76**

- Added create express checkout, get canada post shipping rates and get fedex shipping rates. Along with a bunch of models, utils, exceptions. Taken from my old project.
- Changed the system prompt to better help the model response instead of doing function calls.
- Added the images and videos to the stream. separate from the text for model message. this is images and videos. we will render them in jsx renderer.

**Project 94**

- Added create express checkout, get canada post shipping rates and get fedex shipping rates. Along with a bunch of models, utils, exceptions. Taken from my old project.
- Changed the system prompt to better help the model response instead of doing function calls.
- Added the images and videos to the stream. separate from the text for model message. this is images and videos. we will render them in jsx renderer.

**Total commits:** 9

## 2025-04-01

**Project 31**

- Got the shipping rate selector to send a message and return the right rate. It uses alert dialog to stop user from making too many choices and then sends the message right away to the model for a response.
- The ui now pops in a rates component to display the incoming shipping rates. Will need to further update so we can send a message to the model with the chosen rate and it will return a checkout session url to complete payment.

**Project 76**

- Fixed the name of the values from Rates to rates to better match other function calls responses.
- Got the canada post shipping api to return the shipping rates back to the model when it uses the tool to get rates.

**Project 94**

- Fixed the name of the values from Rates to rates to better match other function calls responses.
- Got the canada post shipping api to return the shipping rates back to the model when it uses the tool to get rates.

**Total commits:** 6

## 2025-04-02

**Project 31**

- Got the checkoutAlert function working and it renders now buttons to allow the user to continue chatting or checkout.

**Project 76**

- Got the Project 93392 create express checkout session working. It now returns a checkout url as needed.

**Project 94**

- Got the Project 93392 create express checkout session working. It now returns a checkout url as needed.

**Total commits:** 3

## 2025-04-03

**Project 31**

- Added product pages for our 3 Project 960. Will now try to manage the state of each renderer separately so they do not stay static.

**Total commits:** 1

## 2025-04-04

**Project 31**

- Fixed the state issue. Now we can display multiple components per chat.
- Now we added extra_data that will be sent with each message and will have the results of the function call along with the message so we can have it always on new message load.

**Project 94**

- Now model function calls are saved along with their results as json so we can send to Project 938 as needed.

**Total commits:** 3

## 2025-04-05

**Project 31**

- Changed the Api instance to native fetch. handled errors accordingly. Set the query key and invalidate it right before in case someone else was logged in before.

**Total commits:** 1

## 2025-04-09

**Project 31**

- Added sentry for error catching.
- Major progress. Sidebar messages fixed. Authenticated for chat fixed. Checking auth state on authenticated pages and redirecting if authenticated. We will tackle the chat id situation now.

**Total commits:** 2

## 2025-04-10

**Project 31**

- Pre vs code agent changes to streamline how we handle chat creation.

**Total commits:** 1

## 2025-04-11

**Project 31**

- I made the chat input take max 250 characters so user cannot spam. Added size guide table. Started unsubscribe page. and more...

**Project 94**

- I made the send message view max 250 characters. Adding to Project 938 protection. Now will strip everything paste 250 characters. Re added product descriptions and images+videos. Collected static files to serve in prod. Most important change is that we updated all the allauth emails to now match our new style. and more...

**Total commits:** 2

## 2025-04-13

**Project 31**

- Added the fonts + container to index.css. Will add meta tags to all pages.
- Added feedback and data deletion and the feedback endpoints for our Project 9339.

**Project 94**

- Added feedback and data deletion models, urls, views and serializers. Final commit before prod.

**Total commits:** 3

## 2025-04-15

**Project 31**

- changed login / signup button to say log out. Since unauthed user won't make it to the chat. Added handle Logout, and then redirect them to login clearing cookies and queryClient. Added a tracksuit and sweatsuit images to the right sidebar. Added a special disclaimer to the right sidebar as well and our copy right with year.
- changed auto complete for login to default to email instead of username. Since everyone will have email.
- Added the query client to auto fill signup form with "" or the email if user returned from verify.
- Added a reminder of the email they signed up with and a link to go back to signup. It will be saved in the signup form when they return. Used a button to handle navigation back to signup Added autocomplete for the one time code we email users. Should auto fill for user instead of them leaving the browser. Removed the text upper case and onChangeAsync that was capitalizing the text on input.
- formatting and removing unused dependencies.
- made button outline isntead of ghost so user can see it better. Will work to make this different for authenticated users.
- Added a clear all cookies shared export function.
- changed the next and previous buttons look so they aren't transparent and hard to see for the user.
- added a handle logout that will clear the query client and remove all cookies then redirect to login. Added links to the various dropdown items so they can lead to relevant pages as needed.
- changed the items list to better reflect current page that user might want. Changed icons to be more relevant as well.
- changed framer-motion to motion/react.
- removed the footer1. not needed anymore.
- Changed location of password reset form we are using, changed store icon to be our Logo instead. Created new Logo component.
- Set OTP to be all digits. So we no longer need the type text. The keyboard shows numbers as well.
- Made the video come from our Project 9339 via fetch. Much better than bundling with the Project 938. Added a handleClick function to redirect to login with a toast if needed. Will need to figure out if user is authenticated, so we don't show toast as needed. Deleted the old video in public. No longer needed.
- Added index.html meta tags, changed some more parts to better match dark and light theme

**Total commits:** 16

## 2025-04-17

**Project 31**

- We now pull in an image of tracksuit and sweatsuit to display in right sidebar for the user on load.
- Added a stat's section to give quick descriptions of the values of our Project 960. On Homepage.
- new updated hero section with better proportions and easier to read and understand. We now add that we are the first ai chat to shop interface.
- A simple email and phone number for people to reach us at. Added to homepage.
- Added a featured Project 960 section. This will alow us to display our Project 960 on the homepage. Working on a page per product.
- Added a new faq section to our homepage. It answers a bunch of questions a user might have.

**Total commits:** 6

## 2025-04-19

**Project 31**

- removed dev tools before build.
- deleted and replaced with policies/delete-my-data
- Made all link targets blank and changed which privacy url to Project 93392 we use because other one is in french.
- Added Robots.txt
- Added webProject 93393 Project 93393map
- Added webProject 93393 manifest.
- removed em dashes with .
- re enabled the dev tools in dev.
- More realistic version number.
- fixed bg and text on button.
- Updated the description to be more alligned with our new about page.
- Removed em dashes and replaced them with .
- Added a function to fetch the current webProject 93393 visitor count and a query to subscribe and return the count. So we can display in the Announcement bar.
- Removed the background primary and text primary. Now its bg background and text-foreground. Matches dark and light theme.
- Fixed the top accordion item to replace school with Product giveaways. The accordion we also fixed and removed the bottom border.
- Added the new logo and removed the style on the logo. So background is effected.
- Re wrote the about page to be more personal and clear.
- we now set the current chat id and a toast before redirecting the user.
- floating testimonials to add to our homepage. Added reviews we got from clients.
- Use chat store to set the current id for the chat.
- this did not need to access the chat store. simply removed.
- Added a smaller version of logo 32x32 so we have choices not the usual 512x512 logo.
- shad/cn and related components.
- Added the form inside our auth page format.
- Added toast message and current chat ID to the loader redirect. We use navigate now instead of window.location.href
- We added currentChatId to all redirects to minimize new key creation. We now navigate to current id and then we show a toast with a message to tell them you are already logged in, redirecting.
- Logo is no longer default export. We have logo small as well now.
- Moved contact from a form to inside the standard forms page.
- Added a set current chat id to login page when navigating instead of using a navigation to /chat.
- Added a delete my data link to the footer.

**Total commits:** 30

## 2025-05-26

**Project 87**

- Removed the old db and redid the migrations to fix the old errors.
- Added users table and first step of the registration with models, user model, serializers, views and urls. Added tthe url to the the main project urls.
- Made first migrations
- Started work on the new realtor tools with llm help project. Started with tools and users apps. Added credit views to the tools to manage credits. Default start is 5.

**Total commits:** 4

## 2025-05-27

**Project 87**

- we now use user_uuid instead of user_id to resolve type errors
- gave type hints to the result to solve type hint errors for pylance. we now return user_uuid instead of user_id
- import our user model instead of using the django get user model. Solves the type error with uuid. replaced data with attr so we can use the method the function expects.
- Did the first migration after updates. Now we will test.
- fixed the failing checks by removing the import in tools/models, added auth_user_model to settings pointing to our new user model, our user now extends abstract user, we also replaced the user_id default for django and now use a UUIDFIELD with a uuidv4 to manage our user_id. Safer and is not sequential.
- Did a refactor to extend abstract user instead of recreating it all from scratch with AbstractBase User. Now we only added is_email_verified and uuid to store the unique id we will use in the app to manage users.
- Removed sqlite db and the migrations due to migration conflicts.
- Updated tools app with verification code handling.

**Total commits:** 8

## 2025-05-31

**Project 87**

- About to add the llm tool settings now. We can do auth after.

**Total commits:** 1

## 2025-06-15

**Project 56**

- Ready to start the collaboration. Welcome my friends.

**Project 87**

- Ready to start the collaboration. Welcome my friends.

**Total commits:** 2

## 2025-06-17

**Project 21**

- Fixed some more routing issues. will fix later.
- Will add commit text later pushing to show you.
- Added the tanstack router vite plugin
- Installed tanstack router, Project 933 and the vite plugin
- Added onClose instead of onBack to fix type error

**Total commits:** 5

## 2025-06-23

**Project 87**

- Started to add auth and allauth and cors and rest framework and simple jwt settings to the project.

**Total commits:** 1

## 2025-06-25

**Project 10**

- Installed toast from shadcn. Added motion library for effects and zuustand. Added theme provider, network status toast, theme mode toggle and added them to the root route.
- Started the Project 9337 app project. Using tanstack router vite app boilerplate.

**Total commits:** 2

## 2025-07-03

**Project 93**

- created new tanstack router project with vite. I fixed the issue with the vite folder and deprecated router plugin. Added build, server, root, log level, json and app type settings to the vite.config.ts.
- Added a first view to create an api to use for our Project 938 with yt-dlp project. Added first version of the view, serializer and urls. Connected them to the main app urls.
- Added MacOS, Linux, and python files to Project 37.
- initialized new venv and uv project. Installed django+restframework+corsheaders and ytdlp

**Total commits:** 4

## 2025-07-04

**Project 93**

- shad/cn popover, collapsible and checkbox.
- /download route for our app.
- tanstack router route tree.
- shad/cn components
- Added none checks before making comparisons to avoid type errors. Added comprehensive logging to fix any errors that pop up. Added many formats and filters for the user to choose from and expanded the data we return to the user.
- removed namespace due to linter error. Not needed anyhow.
- added more desired filter fields to the serializer to grab the extra params as filters we might need.
- static files from collect static.
- Added logging and csrf failure view.

**Total commits:** 9

## 2025-07-09

**Project 77**

- Merge pull request #4 from WaryaWayne/abdullah
- Updated the hyper link destination and use a new icon from lucide.
- Started to use a steps object to hold all steps and map through it. Updated the top and bottom text to better apply it to the new company.
- fixed the div id and the name of the component since it changed.
- Merge pull request #3 from WaryaWayne/ajama
- Merge pull request #2 from WaryaWayne
- Edited the title in the iframe to update the name of the company and make it more clear.
- Merge pull request #1 from WaryaWayne
- Removed the not needed link import and the empty handleNewChat function.
- Updated the featured Project 960 to add the newly available services. Also did a format on the file to clean up the look.
- Started new project. we are working on this client Project 93393. Please ask for instructions before changing. Simple Project 938 only react code.

**Total commits:** 11

## 2025-07-10

**Project 77**

- shrunk the margin and padding to allow the buttons at bottom of screen to have a good gap against the bottom. added new logo to the image source.
- updated index file to include new banner image, logo's and messaging.

**Total commits:** 2

## 2025-07-14

**Project 77**

- fixed issue where the elements we not centered. Now it is resolved.
- updated the og image to the right url, changed sizes to better match.
- Added the contact form to the bottom of the homepage.
- custom contact form for the homepage.
- updated logo image alt text, updated the href on the button to go to client portal instead of reviews, used a login icon to replace briefcase.
- added input and text area shad/cn components.
- created stats object to hold all stats and mapped through them to simplify the jsx.
- removed unused meta tag, removed unused className
- Added social logo's to the footer in a new section.
- changed video source
- Added an address to the get in touch section.
- Added 3 new services offered by the client.
- updated Project 93393map url.
- removed unused files. dont apply to this project.
- updated the robots.txt
- webProject 93393 banner for og and twitter tags and the hero video.
- updated manifest with new logo, shortname and name.
- Replaced logo images for the new version.

**Project 9**

- Added a link variant button to better see the maximum rates.
- Changed size on the index.html for the og image.
- changed accesebility so it is better adaptable on mobile. It looks much better on mobile now.
- fixed styling and the link buttons to due to changed url.
- Completed final edits to sadex towing Project 93393.

**Total commits:** 23

## 2025-07-15

**Project 9**

- Added new groupings for the tables to make them more clear.
- made the text black to better see the button and certificate number

**Total commits:** 2

## 2025-07-17

**Project 35**

- added proxy_url to better manage the paginated results. our Project 938 will no longer try and access the ddf url itself and will instead be proxied by our Project 9339. It will attach token and send the response data back. We now handle the auth process in utils and do proxy and other methods of filtering in our view.
- utility functions to help with the properties api call and filtering.
- structured the data-feed endpoints under the api/v1/ versioned api we are building.
- Added cors allowed origins to fix cors errors. Added cors middleware. Added ddf base url.
- New properties view to get the properties data and then return it to our Project 938. It includes the filters we need to make custom searches.
- Added new properties url endpoint to get the properties as needed.
- Added drf xml parser to the project.
- Added the data feed urls to the main project urls.
- static files from collectstatic command.
- Added ddf credentials from .env. username and password. removed the auth classes since we aren't using that right now.
- data feed app. This is used to get access token and then place in the functions needed to refresh and maintain the token.
- initalized a Project 9339 with django and few modules to make a Project 9339 for out data feed.

**Project 60**

- syncing Project 9339 with Project 938 repo. Now it should work.
- Merge Project 9339 repo into main
- Merge pull request #1 from WaryaWayne/master
- we now use the next page as a url attachment proxy that will send requested url to Project 9339 and Project 9339 will return the results for easier pagination.
- added proxy_url to better manage the paginated results. our Project 938 will no longer try and access the ddf url itself and will instead be proxied by our Project 9339. It will attach token and send the response data back. We now handle the auth process in utils and do proxy and other methods of filtering in our view.
- we now use an infinite query to store the data. It works better already since we see more than 5 listings. Issue now is that we try to make request and we don't have the token in Project 938. will need to find a way to request to Project 9339 and proxy it back to Project 938 for data exchange. Added more property data on the Project 938 to display for every listed property.
- our listings page. This is where we make the api call to display the data as needed.
- fixed deprecated tanstack plugin and added server and build settings.
- commented out the header for dev.
- the data schemas we need to communicate with the ddf api.
- Listing frame which is the frame that will hold all of the listings when user is scrolling through.
- utility functions to help with the properties api call and filtering.
- structured the data-feed endpoints under the api/v1/ versioned api we are building.
- Added cors allowed origins to fix cors errors. Added cors middleware. Added ddf base url.
- New properties view to get the properties data and then return it to our Project 938. It includes the filters we need to make custom searches.
- Added new properties url endpoint to get the properties as needed.
- Added drf xml parser to the project.
- Added the data feed urls to the main project urls.
- static files from collectstatic command.
- Added ddf credentials from .env. username and password. removed the auth classes since we aren't using that right now.
- data feed app. This is used to get access token and then place in the functions needed to refresh and maintain the token.
- Installed @types/node, then updated ts router plugin to latest version from deprecated default.
- initalized a Project 9339 with django and few modules to make a Project 9339 for out data feed.
- initialized new bun Project 938 project. Will use this to display feed data as we recieve it.

**Total commits:** 36

## 2025-07-22

**Project 62**

- Added a scroll area and a see more button. this helps to make the order summary show up and be visible on first land on cart by the user. Now we show 1.5 Project 960 and the rest will show after see more is clicked.
- Project 9339 with Project 960 and apps.
- Project 938 for Project 9335 central webProject 93393. working on cart section now. almost done.

**Total commits:** 3

## 2025-07-23

**Project 62**

- cart shipping and confirm. Our new checkout flow for the store. It will be faded into each other and unlock as you complete the other one.
- shad/cn components

**Total commits:** 2

## 2025-07-24

**Project 62**

- Now we do email validation for invalid emails. This was handled by Project 93392 before and now handled by us using pydantic email validate extension.
- Simplied title from secure checkout to comfirm your order. We now collect user's email and subscription status to send it to the Project 9339 when making a checkout url. Still need to make sure we remove the use effect which retriggers the call on every key stroke of email typing or status change. We need url request to happen when shipping go to pay is clicked.
- alerts are now bg-destructive/70. shows nice on hover. Added a function to calculate the bundle price for t shirts and total item price for the order summary. added a new price object for shirts. showing bundle pricing available. Removed the card structure. It is now directly in the card of the index.tsx
- commented out step 3. We do not need this text taking up space in the ui.
- order cancelled we now go back to cart instead of checkout.
- made the success much better looking visually in the ui. We now grab the order number from the url and display to users in a button which they can click to copy. We now use a card style for the component with title, content and footer to style it right. We now import the support email from .env. good because it can change.
- shad/cn components checkbox and radio group.
- removed card on checkout confirm because index.tsx has it. We now use index.tsx to style the checkout content.
- removed borders around shipping. Now it fits nicely in the borders of index.tsx. few small ui issues but pretty well done.
- ui update on cart page. Now working on making it better. Will have to fix the top bar issue, will have to fix mobile resposiveness, will have to fix the border issues as well.
- first subtotal to cart total, to be determined becomes $0 since we don't have much space, estimated total becoems subtotal, select shipping and calculate total becomes select shipping
- shad/cn progress bar.
- fix the order summary calculations, added more info to the page to make it work better. fixed the way we would redirect to now make it a 3 step process with back and next. Easier to navigate this way. increased full width by removing the sizes we set to them.
- removed cart ui logic and jsx from cart/index.tsx to custom/cart.tsx. Now the route holds the page structure and the component logic is in /components.

**Total commits:** 14

## 2025-07-28

**Project 62**

- formatting.
- make the message more clear for the user and collect email first separately. we pass in email and subscription status as a param. This allows us to remove use effect dependencies which called our endpoint for every keystroke.

**Total commits:** 2

## 2025-07-29

**Project 33**

- Added axios to the package.json file. It was missing and app would have an error.

**Project 62**

- this is our v1 of the shirts page. We are working to make a page for users to visit and see our shirt product displayed with information.
- comment out /lib because it would stop our Project 938 /lib file from going to github.
- network status page.
- utils for shad/cn.
- Added network status monitor, added toast, added headcontent so we can import meta tags from components.
- Added toaster from shad/cn.
- removed checkout directory in routes as it wasn't needed and we won't expose that endpoint. We also moved the shipping and checkout components to /custom dir. This helps as we import from there. details page wasn't necessary. Also updated imports in cart route.
- Merge branch 'main' of github.com:WaryaWayne/BDMCentralClothingCo.
- Added branding and fixed some issues. formatted the contents. Separated the copyable code block for step 2 in Project 9339 setup. Should be 2 commands not 1. In the logs folder and files creation we also leave 2 copyable code blocks.
- Added branding and fixed some issues.
- Instaleld motion library. Added test page to see. Will be removing it.
- env.example and a read me for the main page of the github repo.
- Create utils.ts

**Total commits:** 14

## 2025-07-30

**Project 62**

- we now use the cart store from the cart.tsx file. Added price bundle and product interfaces to the shirts file. added links to navigate to the cart page from the current page. formatting.
- formatting, both buttons will now scroll down the page. One to Project 960 and other to the product details section.
- updated to use our new global cart store as this one. So all Project 960 added to cart use this store now. did theme updates. Now it adapts to dark theme without losing any content. removed the old cart store file since its not needed.
- Added new button to scroll to the bundle area if user clicks buy now. Changed icon and text in the second button as well to better match our goals.

**Total commits:** 4

## 2025-07-31

**Project 9**

- page tracking, scroll tracking and event tracking functions.
- added g-tag for tracking to the index.html page.

**Total commits:** 2

## 2025-08-01

**Project 62**

- changed name of product to better match our api requirements for checkout url.
- feat: migrate to Zustand stores and add dark/light mode theming
- refactor(cart): replace TanStack Query with persistent Zustand store and update theming - Replace TanStack Query with Zustand persist middleware for cart storage - Update theming to use bg-background/text-foreground for dark/light mode compatibility - Remove query client sync logic and simplify state management - Add automatic localStorage persistence for cart data - Clean up unused imports and interfaces
- header issues are resolved. The ui is clean, it is background colored. Last changes to make would be the font size being really small on menu options,
- removed negative margin and added margin top to the hero. So now it will space out properly.
- Fixed the end by removing empty code block in readMe. duplicate code in /shirts.tsx as well.
- header we will use in our app. Has shopping cart, mode-toggle in the menu, and a burger menu to hold menu options. used a sheet for sm and md and past md we use desktop view with no menu icon.
- removed motion div for pricing section. They wouldn't show on scroll until we scroll more. Changed the margins and padding to make it better. No more large margins. added floating cart button when product is added to the cart.
- added shad/cn sheet component.
- Added back the header in our ui.
- Switched Buy Now and Explore Click buttons. We now have buy now as the main ui button.
- Changed mode-toggle to work better as moon or sun. So it will instantly set the theme for the user and removes the system option and dropdown. Commented out the old ui.
- Added shad/cn dropdown-menu and navigation-menu.

**Project 77**

- Imported trackEvent function. It wasn't initalized.
- Installed react-ga4 library.
- Scroll tracking, page views and event tracking functions to use in our app.
- Added google g-tag to index.html. This allows us to get analytics for the Project 93393. Global.d.ts allows us to use window.gtag without type errors.
- formatting, initalized react-ga4, sending web vitals to google analytics. Added Metric type to the on PerfEntry to fix type error in the main.tsx implementation.
- Formatting and added event tracking to every button.
- create a root component function and added usePageTracking() and useScrollDepthTracking() for analytics.
- Added access code and event tracking to the contact form.

**Project 9**

- Added outbound tag event category instead of using cta for all the events that lead out of the webProject 93393.
- Added tracking to the Link for see maximum rates in the footer.
- Added a web vitals reports to send this data to ga-4. Now it should work no type errors.
- Installed the react-ga4 library. It was in wrong dir at first.
- Added the google tag number to main.tsx
- removed unused imports.
- Called our use page tracking and scroll depth tracking hooks inside root route.
- formatting and added an event tracker to each call to action button.
- shad/cn components.
- global type to stop g-tag typescript error
- Added the scroll tracking
- initialize react-ga4 library in main.tsx. we disabled first page load tracking and send the event ourselves.
- contact form we use at the bottom of the index page.

**Total commits:** 34

## 2025-08-08

**Project 12**

- Added the shapes we will remove from homepage
- started new project for Project 894 group. Central Homepage for all of our operations. Each will lead to a separate subdomain.

**Total commits:** 2

## 2025-08-11

**Project 3**

- Started new tanstack start project with vite, tanstack, tailwind css and shad/cn.

**Total commits:** 1

## 2025-08-12

**Project 3**

- added better-auth library and config for the auth client instance and the auth instance. still working on the api/v1/auth/$.ts. Will need to figure out if we are to use a file route or server route.
- Added Project 943 adapter for the migrations cli for drizzle.
- client and server entry points for tanstack start. Our router config with formatting applied. our vite config with added server settings.
- Added drizzle to manage our bun Project 943ql instance. set up db instance, added file to add our schema, and the drizzle config file to tell it location of needed files. example .env file for reproducability.
- Added django, rest framework, cors, and environ.
- started new Project 9339 dir. will run a django project here.

**Total commits:** 6

## 2025-08-13

**Project 3**

- upgraded zod, added better-auth with the minimal config so far. Made the migrations. generated the full new schema. Exported it from the schema.ts that drizzle expects. we now import a reactStartCookies to help with cookie settings on certain functions.

**Total commits:** 1

## 2025-08-18

**Project 3**

- deleted files

**Total commits:** 1

## 2025-08-27

**Project 3**

- Merge pull request #1 from WaryaWayne/feature/pending-commits
- biome config for formatter and linter.
- bun lock file
- agents.md for the terminal agent.
- location we import the send verification email function.
- our root route. removed the error, loading and not found components to the router as the defaults. Splash screen loader if page takes time to load.
- auth buttons for google and facebook and their related config.
- Added a splash remover to remove the loader on react ready.
- get current user and signout utils.
- delete my data page. To manage the ui.
- email verification email generate and send.
- comment out the reset portion of the error. It isn't needed right now.
- password reset route and the components for reset and change password.
- function to generate, send aws email on demand and our ses config.
- terms and privacy component that sits under signup as disclaimer.
- our drizzle project schema table definitions.
- Error codes mapping for the better auth errors, their messages and a function to generate a username for the user.
- drizzle migrations and meta snapshots
- shad/cn components
- feat: implement comprehensive auth system with better-auth
- feat: add policies routes, pages, and delete-my-data API
- Add verify feature: components, page, and route for email/OTP verification
- Add login feature: component, page, and route
- Add signup feature: components, pages, and routes
- feat: integrate custom Error and NotFound components with TanStack Router
- feat: add Loading, Error, and NotFound components
- feat: add Loading component with BDM Central branding

**Total commits:** 27

## 2025-08-28

**Project 3**

- Added a table for liked listings, removed listings, listing notes and user preferences.
- A new seo component to add to each of our pages.

**Total commits:** 2

## 2025-08-29

**Project 3**

- mistakes in generating the migrations. Had to many fixes. It works now.

**Total commits:** 1

## 2025-08-31

**Project 3**

- run script with 'bun process:properties'. This will get open the listings file and save it to the db.
- run script with 'bun get:properties'. This will get all listings from fresh again.

**Total commits:** 2

## 2025-09-01

**Project 3**

- migrations

**Total commits:** 1

## 2025-09-02

**Project 3**

- removed the splash screen from the Project 93393. It is not needed and was slowing down the ui.

**Total commits:** 1

## 2025-09-03

**Project 3**

- Removing all the useState and useID to instead use a form for this component.

**Total commits:** 1

## 2025-09-04

**Project 3**

- (style) formatted the page
- (feat) added a empty email as search to signup. Since we wont have users email at this point.
- (feat) shad/cn components
- (chore) removed useless comment
- (feat) migrate users table
- (style) format
- (refactor) navigation to callback url
- feat added last login to users table
- feat last login method in social buttons and login form
- (feat) Added last login method config

**Total commits:** 10

## 2025-09-05

**Project 3**

- shad/cn components
- (feat) ai-elements chat ui components.
- (feat) migrating schema changes for chat
- (feat) added user preferences and actions tables
- (feat) added chat related tables

**Total commits:** 5

## 2025-09-06

**Project 3**

- (feat) added a sharedChat column to the chat sessions to be able to display shared chats without checking user info.

**Total commits:** 1

## 2025-09-07

**Project 3**

- This is an seo utility. WE use it on pages we want seo to set meta tags and make it easier to find on search. We have a hook to return structured data and a component that will return the jsx tags.
- (feat) added left side bar
- shad/cn

**Total commits:** 3

## 2025-09-09

**Project 3**

- (feat) refactor chat schema to use message parts for flexible content

**Total commits:** 1

## 2025-09-12

**Project 3**

- (feat) custom chat area component for chat routes
- (feat) Insert and delete dialogs for the left sidebarÏ

**Total commits:** 2

## 2025-09-14

**Project 3**

- feat: enhance sidebar components with dynamic chat management and right sidebar
- (feat) ai sdk elements components
- (chore) installs and updates
- (feat) electric sql adapter + start and stop script
- (feat) improve tables to better work with chat

**Total commits:** 5

## 2025-09-15

**Project 55**

- packages added
- (refactor) fixed db url
- (feat) added the sidebars, header and outlet
- (refactor) removed props that aren't used anymore
- (feat) chat session collection + endpoint
- (refactor) improved the props in the components
- (chore) chat and related tables migrated
- (feat) chat route ui components.
- shadn/cn
- (refactor) improved delete my data
- added packages + updates
- server and client config
- privacy policy route page
- shad/cn components + hooks
- (feat) added Project 93393 url to client env variables
- (feat) seo functionality
- (feat) error codes mapping + generate username
- (feat) layout page for our auth + policies pages
- (feat) policies page + delete data api route.
- (feat) page layout component + logo
- (feat) added shad/cn and ai-elements components
- (feat) better auth integration client + server
- (feat) add t3-env library
- (chore) formatting
- (feat) use new typesafe db url import
- (feat) typesafe zod validation for .env variables
- (refactor + style) formatted file + db url import
- (feat) electric db sql server running on Project 9382.
- (feat) drizzle-orm + drizzle-kit + bun sql client
- (feat) added our shortcuts in package.json to manage various services.
- Added server section to vite config.
- hello, world. This is where it all starts.

**Total commits:** 32

## 2025-09-16

**Project 55**

- (chore) update dependencies.
- Checkpoint before breaking changes

**Total commits:** 2

## 2025-09-17

**Project 55**

- (feat) vite config added allowed host
- (refactor) right side bar
- (refactor) separated the title and the buttons.
- Pencil for edit icon.
- (bug) returns text now not boolean
- (feat) ssr off on chat routes.
- (refactor) chat area actions
- (refactor) chat area
- (refactor) convertToUIMessages function
- (refactor) chat area
- added react scan
- (refactor) chatId route
- (refactor) route chat layout route
- (refactor) right sidebar now floating.
- (refactor) update left side bar
- (refactor) chat header
- (refactor) get messages endpoint
- (refactor) generate text endpoint
- avatar for ai
- (refactor) removed the separate chat hook calls
- (refactor) usage tokens display
- (feat) update vote use Query
- (feat) added stop button for stream.
- reenabled Tanstack dev tools and fixed import
- (chore) update dependecies
- (feat) added button to insert old title into input
- (refactor) changed how we dynamically set chat title for new chats
- (feat) simple error handler for chat sessions live query
- (feat) migration for chatId to chat_id
- (refactor) improved drizzle config
- (feat) added console log to see data parts.
- (chore) auto generated route tree
- (feat) Added a data stream provider to route /chat route
- (refactor) chat area. more to come
- (refactor) added this back to use
- (feat) data stream handler and provider.
- (refactor) we uncommented
- (refactor) reenabled our resumable stream.
- (refactor) the chatId capitals causes query issues.

**Total commits:** 39

## 2025-09-18

**Project 32**

- Update README.md
- move into scripts dir
- moved into results dir
- Update work_ive_done.md
- summary of progress since sept 4
- changed it to get journal logs since september 4
- create explain progres.
- Create daily_journal.md
- ai sdk + gemini
- name change to fix typo
- Add README.md for public work log quest
- final version of commits list.
- (console.logs to see process.
- first version of our work done commit sheet.
- Improved script to remove duplicate names
- (feat) hash to store the repo names
- (refactor) track repo names
- (refactor) duplication and date adding to header
- (refactor) we now get title of commit
- script now uses a new argument to do a full sync.
- Updated script to better handle requirements.
- hello world

**Project 55**

- Add upvotes and downvotes functionality for chat messages
- Update routeTree.gen.ts
- (feat) votes live query
- (refactor) temp hardcode valid userId + style
- (refactor) append where in the Project 9339.
- (refactor) added allowed_hosts from .env
- (refactor) schema naming all lower case with _

**Total commits:** 29

## 2025-09-21

**Project 32**

- Update _config.yml
- Update work_ive_done.md
- Update daily_journal.md
- Create _config.yml
- (feat) verbose logging
- (chore) update dependecies
- (refactor) system prompt update
- (refactor) the file was pointed to wrong location
- style + slight refactor
- (refactor) we now run since last run
- (removed the 18th and formatting
- removed unneeded constraint.
- (refactor) another attempt to stop overwrite
- (chore) file name fix
- (chore) types for bun to fix lsp error
- (feat) stop overwriting repo map and commit duplictation.
- (refactor) fixed duplication issue I think.
- (style)
- refactor: update push-progress script to use Bun hash API and persistent repo mapping
- (refactor) logging
- (refactor) now uses bun fs not node

**Total commits:** 21

## 2025-09-22

**Project 32**

- (refactor) we now grab the right shape
- converts md commits to json
- script turns journal logs to json
- Merge branch 'master' of github.com:WaryaWayne/Project 930
- reports
- (refactor) 1 ai call instead of in loop.
- Update README.md
- Update _config.yml

**Project 65**

- (style) Added theming to styles sheet
- (chore) update dependecies
- drawer for mobile ui
- ui component drop down
- (feat) theme provider added
- (feat) added theme provider
- (feat) mode toggle for Project 93393 theming
- Update routeTree.gen.ts
- (feat) vscode and biome config
- (chore) add posthog js
- Delete work-ive-done.tsx
- (style) formatting
- (feat) simple homepage
- dev tools only in dev + formatting
- (feat) added daily journal page
- (feat) commit log page
- Added posthog for analytics
- shad/cn ui components.
- Started new react project for portfolio.

**Total commits:** 27

## 2025-09-23

**Project 65**

- (chore) update dependencies
- (feat) header which floats and no bg
- (fix) import issue in default tools
- (style) theming
- update theme cookie name
- ui component
- (feat) homepage for the project.

**Project 73**

- hello, world.

**Total commits:** 8

## 2025-09-24

**Project 73**

- (feat) Added plugins to auth clients
- (feat) chat tables schema
  -- created schema and relations and indexes for the chat related tables.
- (fix) spelling error in import
- (chore) update dependecies
- (we use 127 address not localhost
- (feat) page layout for auth related pages.
  -- Added current logo as well. Added company name env variable to pull it in.
- (feat) new env variables + seo utility
  -- this sets the meta data per page in our head. An seo utility for us to use in our project's pages. We imported the author and site url to add it to our pages.
- (feat) shared helper's
  -- we have a generate name for usernames.
  -- - error map but will remove and use library error codes module.
  -- - generate UUID function for the chat modules.
- Delete env.ts
  -- we now handle client and server separately in /lib/env/
- (feat) electric sql sync + aliases
  -- added a docker file to use our electric db url we set in .env that will be responsible for connecting to our db via replication to send changes to ui immediately.
- (feat) server info and log level
  -- - added allowed hosts to .env
  -- - using it in the vite config server section.
- Create AGENTS.md
- (feat) client + server env validation
- (feat) our base schema file
  -- added auth tables to start.
- (feat) updated dev alias
  -- changed vite dev alias to use bun
- (feat) auth tables migration
  -- created first auth tables in db
- (feat) new command shortcuts
  -- we added db generate and db migrate shortcuts. Better auth schema generate command as well.
- (chore) update dependencies
- (feat) start client entry point
- (style) formatting
- (feat) start server entry point
- (feat) client auth instance
- (feat) server auth instance.
- (chore) clean up demo routes
- (feat) catch all error route
  -- for when we have any error we can always send to /api/error/{type} then user can have better idea and also submit reports easier.
- (feat) catch all route for auth
  -- this handles our auth endpoint config.
- (feat) env runtime validation
  -- server + client to be able to handle missing env variables better during runtime
- (feat) drizzle orm config
- (feat) initialize db

**Total commits:** 29

## 2025-09-25

**Project 73**

- (fix) export voteEnum
  -- Now it is picked up in the migration
- (fix) redid migrations
  -- this was to fix our lack of exporting the enum which caused migrations to fail before.

**Total commits:** 2

## 2025-09-29

**Project 69**

- Added new reports table schema.
- Added a new reports table.
- Added email table to our db.
- Migrated our first db table.
- Added libsql/client to handle db migrations.
- Added sqlite db to the gitingore.
- Added drizzle kit config for our project. using bun sql.
- Added migrate and generate scripts for the drizzle kit orm.
- Create a new db instance with bun sqlite and drizzle orm.
- New project to create an AI agent personal Project 69.

**Total commits:** 10

## 2025-10-06

**Project 18**

- drizzle config.
- our db schema and initalization.
- better auth catch all handler.
- seo component to take in values and dynamically generate seo meta tags per page.
- better auth client and server instances.
- shad/cn ui components.
- Hello, world. Started new project.

**Total commits:** 7

## 2025-10-07

**Project 25**

- shad/cn ui components
- Hello, World! Ecommerce site for the BDM Central clothing brand. Started by Abdullah.

**Total commits:** 2

## 2025-10-10

**Project 25**

- (fix) removed console log
- (style + feat) app router isntance
  -- our tanstack router instance + formatting.
- (feat) catch all route for auth
  -- handler for better auth to manage callbacks in our app.
- (feat) app route for tanstack router
- (feat) adding config to app root
  -- added toaster to our app + theme provider to wrap our app + react scan and tanstack dev tools
- (feat) styles file
- (style) formatting
- (feat) log and server block in vite config
  -- added server port info and other settings.
- (feat) client + server
  -- entry points into our start app from client and from server
- (feat + chore) added scripts + update dependancies
  -- we now db have db migrate and generate commands to run along with running vite using our bun server.
- (feat) client env variables validation
  -- we now have runtime validation for our client env variables we use in our app.
- (feat) added new seo utility
  -- We can use it per page and add meta tags as needed. It handles all the tags we would manually add.
- (feat) server env variables
  -- added run time validation for the environmental variables we use.
- (feat) theme mode toggle
  -- This allow's user to click and switch theme from dark to light and vice versa.
- (feat) theme provider to wrap our app
  -- added new theme provider. instead of using local storage it uses zustand store persisted to local storage. This fixes server code trying to access local storage api's.
- (feat) stripe client config
  -- created a project wide stripe client.
- Merge pull request #1 from WaryaWayne/database
  -- Database schema's and config
- feat: Define product-related database schemas with relations
  -- Creates comprehensive Drizzle ORM table schemas for e-commerce product management: products with
  -- types, inventory variants (size, colour,
  -- dimensions), media (images/videos), user interactions (likes/reviews), promotions, and supporting entities, complete with type inference, indexes, and relational definitions.
- feat: Export all database schemas
  -- Centralizes imports and exports of authentication tables (user, account, session, verification, passkey) and product tables (product, inventory,
  -- color, size, etc.) along with their relations for Drizzle ORM integration.
- drizzle journal
- feat: Add passkey authentication table
  -- Adds passkey table for WebAuthn-based authentication, storing public keys, credential IDs, and device information linked to users for secure passwordless login.
- feat: Add product catalog schema with inventory and reviews
  -- Introduces comprehensive product management tables: products, inventory variants (with size, colour, dimensions), images, videos, likes, reviews, promotions, and supporting entities like colours and sizes, complete with foreign keys and performance indexes.
- feat: Add authentication tables (account, session, user, verification)
  -- Creates core tables for user authentication including user profiles, sessions, OAuth accounts, and email verifications with foreign key constraints linking accounts and sessions to users.
- feat: Add Drizzle configuration for PostgreSQL
  -- Configure Drizzle Kit to generate migrations in the './drizzle' directory, targeting schema files in './src/db/tableSchemas/', and connect to PostgreSQL using the DATABASE_URL from server
  -- environment variables.
- feat: Add database connection setup with Drizzle ORM
  -- Initialize database client using Bun SQL and wrap it with Drizzle ORM, importing schemas for type-safe database operations. This establishes the core DB connection for the application.
- (feats) Add page layout component for authentication
  -- Created a flexible page layout component for authentication flows using React with Tailwind CSS grid system. Implemented header section with company logo, dynamic title from environment variables, and conditional navigation buttons
  -- (Sign Up for login page, Log In for signup page) using TanStack Router Link components. Designed main content area with centered flex layout and max-width container for optimal mobile and desktop display. Used client environment variables for company name and logo integration,
  -- ensuring consistent branding across auth pages.
- (feats) Add authentication callback pages
  -- Created a set of callback pages for handling OAuth and social authentication flows using TanStack Router with Zod search validation for
  -- callbackUrl parameters. Implemented cancelled page displaying yellow alert icon with "Login Cancelled" message and retry button navigating back to login with preserved callback URL. Added error page with red X icon for "Social Login Failed" scenarios, including retry navigation. Developed success page with green check icon
  -- showing "Social Login Successful!" and automatic redirect to callback URL after 1-second delay using beforeLoad hook. Included welcome placeholder page for new user onboarding flows. All pages use full-screen centered layouts with
  -- consistent iconography and navigation patterns.
- (feats) Add random name generator for anonymous users
  -- Created a shared configuration utility for generating random usernames during anonymous authentication. Defined arrays of positive adjectives (Quick, Happy, Brave, etc.) and animals (Fox, Tiger, Bear, etc.), with a random selection function that combines them with a random number (0-999) to produce unique names like "QuickTiger763". Used in better-auth anonymous plugin for automatic name generation during guest sign-ups, ensuring user-friendly and memorable identifiers.
- (feats) Add authentication middleware
  -- Created middleware functions for route protection in TanStack React Start using createMiddleware.
  -- Implemented authFunctionMiddleware with dual
  -- client/server execution: client-side uses authClient.getSession() to verify user sessions, while server-side uses auth.api.getSession() with request headers. Added authRequestMiddleware for
  -- server-only request protection. Both middlewares validate session existence, throw authentication
  -- errors for unauthorized access, and pass user data and session context to downstream handlers. Integrated with existing auth configuration for
  -- consistent session management across the application.
- (feats) Add form configuration with custom field components
  -- Set up comprehensive form handling using TanStack React Form library with custom hook contexts for form and field management. Created reusable InputField component featuring error validation with popover tooltips, input group styling with start/end icons, and "Last used" badge integration with auth client for email fields. Developed PasswordField component with show/hide password toggle using Eye/EyeOff icons, conditional forgot password link for login flows, and consistent error handling. Implemented SubscribeButton component with form state subscription for dynamic button states (enabled/disabled, loading spinner) based on form validity and submission status. Used custom UI components from shadcn/ui for consistent styling across authentication forms.
- (feats) Add terms and privacy policy component
  -- Created a simple component for displaying legal compliance links to Terms of Service and Privacy Policy pages. Used TanStack Router Link components with target="_blank" for opening in new tabs, styled with muted foreground color, underline effects, and hover state changes to primary color. Integrated into signup and login flows for user agreement confirmation.
- (feats) Configure server-side authentication
  -- Set up comprehensive server-side authentication using better-auth library with Drizzle ORM adapter for PostgreSQL database integration, Redis as secondary storage for session data, and multiple plugins: anonymous authentication with custom random name generation and email domain, last login method tracking stored in both cookie and database, haveIBeenPwned for password breach checking, Stripe integration with webhook event handling for checkout sessions, and passkey plugin for WebAuthn authentication with localhost configuration. Enabled email/password authentication with Bun password hashing/verification, Google OAuth provider with offline access, session cookie caching, account linking with trusted providers, and custom error handling. Disabled telemetry and configured cookie prefix for security.
- (feats) Configure authentication client
  -- Set up client-side authentication using better-auth/react library with multiple plugins: lastLoginMethodClient for tracking user's previous authentication method via a custom cookie ("bdm_last_used_login_method"),
  -- anonymousClient for guest sessions, stripeClient configured without subscription handling, and passkeyClient for WebAuthn authentication. This configuration enables seamless integration across login, signup, and social authentication flows.
- (feats) Add authentication database schema
  -- Defined PostgreSQL database tables for user authentication using Drizzle ORM, including user table with profile fields (name, email, role, ban status), account table for OAuth providers with token storage, verification table for email confirmations, session table for login tracking, and passkey table for WebAuthn credentials. Used text and timestamp columns with timezone support, foreign key references with cascade deletes, and default functions for timestamps. Exported TypeScript inferred types for select and insert operations to ensure type safety in auth-related database interactions.
- (feats) Add social authentication buttons component
  -- Implemented a reusable component providing multiple authentication options: email form toggle, anonymous login, Google and Facebook OAuth, and passkey authentication. Used TanStack Query mutations for handling async auth operations via authClient, integrated navigation with callback URLs for redirects, and added error handling with toast notifications. Included "Last used" badges to highlight the user's previous login method, using custom SVG icons for visual consistency. Passkey authentication is conditionally rendered only for login flows, not signup. Managed state for email form visibility and callback handling across login/signup pages.
- (feats) Add signup page component
  -- Implemented user registration functionality with email / password signup and social provider options. Used Tanstack Form with TanStack Router for routing, TanStack Query for mutation handling, Zod for form validation, and custom form hooks for state management. Created a server function to handle sign-up via authClient with auto-generated random names, added toast
  -- notifications for success/error feedback, and included terms and conditions display. Integrated
  -- social signup buttons that toggle email form visibility, with async email validation debounced at 1500ms. Added link to login page for existing
  -- users.
- (feats) Add login page component
  -- Implemented user login functionality with email/password authentication and social provider options. Used Tanstack Form with TanStack Router for routing, TanStack Query for mutation handling, Zod for form validation, and custom form hooks for state management. Created a server function to handle sign-in via authClient, added toast notifications for success/error feedback, and
  -- included a "Remember Me" checkbox for session persistence. Integrated social login buttons that toggle email form visibility.

**Total commits:** 37

## 2025-10-12

**Project 64**

- example demo route
  -- used drizzle orm options to do the queries and test it out.
- create info file
  -- added info file for drizzle db. let's user choose their db and driver.
- initialize db instance
  -- this creates a db instance to be used for queries throughout the project. It uses the user's chosen driver to set it up.
- sample to do schema
  -- uses the user's chosen db and it's imports to create a todo db.
- add's the db + driver chosen by user
  -- they can choose, postgres, mysql and sqlite. Each has its own dependencies.
- inserts db url to the .env file
  -- add's example db url
- small + regular drizzle svg's
  -- added the drizzle svg's for demo.
- (feat) project wide drizzle config
  -- This sets the drizzle instance for the project.

**Total commits:** 8

## 2025-10-15

**Project 25**

- (feat) add more image sizes + lb for weight
  -- no more plural lbs for weight. we added thumbnail, medium, large and orgiinal image urls now.
- (feat) admin ui componenets
  -- Added new components to build our admin ui.
- feat: enhance product schema with soft delete and dimension updates
  -- • Add deletedAt fields for soft delete across all tables
  -- • Refactor dimension table with name, weight, and unit enums
  -- • Update product types from tshirt to shirt variants
  -- • Add minimum purchase amount to promotions
  -- • Move enums to top of file for better organization

**Total commits:** 3

## 2025-10-21

**Project 25**

- feat: Implement ShoppingCartDropdown component
  -- This commit introduces the `ShoppingCartDropdown` component, providing a comprehensive
  -- shopping cart experience directly within a dropdown menu.
  -- Key features include:
  -- - Displaying a list of items currently in the cart with images, names, colors, and sizes.
  -- - Functionality to adjust item quantities (+/- buttons) and remove items from the cart.
  -- - Dynamic calculation and display of subtotal, shipping cost, and grand total.
  -- - Conditional free shipping logic for orders exceeding $200.
  -- - Integration with `useCartStore` for seamless state management.
  -- - A prominent "Checkout" button to proceed with the purchase.
  -- - Utilizes `DropdownMenu` for a compact and accessible UI.
- (feat) Add Functional Tracksuit product page
  -- This commit introduces a new dedicated product page for the Functional Tracksuit, enhancing the user experience with comprehensive product information and interactive elements.
  -- **Key features include:**
  -- - **Product Loader:** Implemented a data loader to fetch and display multiple images for the "Tracksuits" product.
  -- - **Image Carousel:** Integrated a `Carousel` component to showcase product images, allowing users to browse through different views of the tracksuit.
  -- - **Detailed Product Information:** Displays the product's name, price, tagline, and a detailed description.
  -- - **Feature Highlights:** Visually presents key features of the tracksuit with icons and descriptions (e.g., Quick-Access Zipper, Secure Pockets, Athletic Fit).
  -- - **Product Details Dialog:** Added a responsive dialog accessible via a "See Product Details" button, which provides in-depth information including benefits, material composition, country of origin, and care instructions.
  -- - **Interactive Form:** Implemented a dynamic form using `useAppForm` for users to select product color, size, and quantity.
  -- - **Navigation and Call to Action:** Includes "Add To Cart" and "Buy Now" buttons, along with links to a size guide and related products.
  -- - **UI Components:** Leverages Shadcn UI components such as `Button`, `Carousel`, `Field`, and `ResponsiveDialog` for a consistent and modern user interface.

**Total commits:** 2

## 2025-10-23

**Project 25**

- Add CartProductDetailsDialog component
  -- Introduces a dialog component for updating cart product details such as size, colour, and variant. Includes UI controls for selection and actions to update the product or view its full details.
- Add ShoppingCartItem component
  -- Introduces a new ShoppingCartItem component for displaying cart items with image, name, variant, price, quantity controls, and remove functionality. Integrates with cart store for state management.
- Refactor tracksuit product page UI and logic
  -- Updated imports and UI components for improved header, navigation, and cart interactions. Refactored form logic to use zod validation, simplified colour selection, and enhanced add-to-cart and buy-now flows. Improved code organization and styling for better maintainability and user experience.

**Total commits:** 3

## 2025-10-25

**Project 15**

- read me to describe how we did it.
  -- This is us writing down what we did so we can reproduce in the future.
- helpers for prometheus custom config and ui files
- prometheus config file
  -- this file manages the prometheus instance. We told it to also scrape node_exporter so we can see logging.
- Project 9335 config
  -- this is the local configurations changes we made on our device
- node_exporter systemd service set up
  -- this runs and restarts on reboot always
- prometheus systemd service set up
  -- set up a systemd service that always restarts on reboot

**Total commits:** 6

## 2025-10-27

**Project 25**

- (fix) made product id not unique since we have multiple shirts
  -- caused issues when creating inventory. We can not create multiple even if for testing.
- (fix) button text colour
  -- Fix bug in button text and bg same colour + section formatting
- Add CartOrderSummary component
  -- Introduces the CartOrderSummary React component for displaying order details, promo code input, payment method selection, and checkout navigation in the cart summary UI.

**Total commits:** 3

## 2025-10-28

**Project 72**

- Started new react project for pdf-editor.

**Project 74**

- Create ShoppingCartDropdown.tsx
  -- hod commit
- Configure server options and allowed hosts in Vite
  -- Adds server configuration to vite.config.ts, including host, port, strictPort, open, and allowedHosts. Allowed hosts are now read from the server environment variable ALLOWED_HOSTS for improved flexibility and security.
- Add PageLayout component for page structure
  -- Introduces a reusable PageLayout component to standardize page structure, including header with logo, navigation links, and main content area. Supports login and signup page variations.
- Add ProductImagesCarouselDialog component
  -- Introduces a reusable dialog component for displaying product images in a carousel. Utilizes responsive dialog and carousel UI components to enhance product image viewing experience.
- (feat) shad/cn ui components
- Add theme provider and mode toggle components
  -- Introduces ThemeProvider for managing light, dark, and system themes using Zustand and context. Adds ModeToggle component to allow users to switch between themes via UI buttons.
- Add utility to fetch random product images
  -- Introduces getProductImages server function to retrieve a random selection of product images from the filesystem, validating input and handling errors gracefully.
- Add Zustand-based cart store implementation
  -- Introduces a persistent cart store using Zustand with support for adding, removing, and updating cart items, as well as calculating totals and item counts. Includes item variant management and integrates with product configuration.
- Add T-Shirt product page with details and cart
  -- Introduces a new shirts product page at /products/shirts with carousel images, product details, benefits, and a dialog for more information. Includes form handling for selecting variant, size, and color, and integrates with the cart store for adding items.
- Add products listing page with images and details
  -- Introduces a new products index route displaying tracksuits, sweatsuits, and t-shirts with images, descriptions, pricing, and key features. Includes loader for fetching product images and call-to-action section for shopping individual products.
- Add products route with header and layout
  -- Introduces /products route with a header containing logo, shopping cart dropdown, and menu sheet. Includes main content outlet and initial layout styling.
- Add sweatsuit product page
  -- Introduces a new product page for the Everyday Sweatsuit at /products/sweatsuit/. Includes product details, image carousel, add to cart functionality, and a dialog for additional product information.
- Add tracksuit product page
  -- Introduces a new product page for the Functional Tracksuit, including product details, image carousel, add to cart functionality, and a dialog for additional information. Integrates with cart store and uses form validation for size selection.
- Refactor schema imports and exports
  -- Replaces inline 'todos' table definition with re-exports of table schemas from 'auth-schema' and 'product-schema'. This centralizes schema management and improves modularity.
- Add product-related table schemas
  -- Introduces database schemas for products, inventory, dimensions, sizes, colors, images, videos, reviews, promotions, orders, and related enums and relations using drizzle-orm. These schemas support core e-commerce functionality including product management, inventory tracking, user interactions, and order processing.
- Add authentication-related table schemas
  -- Introduces new Drizzle ORM schemas for user, account, verification, session, and passkey tables to support authentication and authorization features.
- (feat) new bun-sql db pool
  -- We use the bun sql module instead of node-postgres
- (feat) client and server env validation
  -- This saves us from runtime missing env variables.
- (feat) update drizzle config to use server env
  -- this fixes error with process.env being undefined in some parts.
- first commit
  -- hello, world. starting fresh to bring in all the finished blocks now.

**Total commits:** 21

## 2025-10-29

**Project 74**

- Add reusable form configuration components
  -- Introduces src/lib/form-config.tsx with custom form field components and hooks for handling size, colour, variant selection, payment methods, e-transfer, and delivery information. These components leverage TanStack React Form and various UI primitives to streamline form creation and management.
- Refactor product pages to use shared ProductDetailsDialog
  -- Replaces inline ProductDetailsDialog components in shirts, sweatsuit, and tracksuit product pages with a shared dialog from /-utils/ProductDetailsDialog. Updates Buy Now button implementation for consistency and improves announcement styling. Also adjusts product descriptions and related products for clarity and accuracy.

**Project 92**

- Started new adobe project ot try and parse pdf's.

**Total commits:** 3

## 2025-10-30

**Project 74**

- Refactor credit payment UI in checkout page
  -- Moves the Stripe credit payment info and 'Buy Now' button outside the form and displays them only when 'credit' is selected. Updates grid layout logic to conditionally adjust based on payment method, improving clarity and user experience.
- Add Redis-based checkout session caching utility
  -- Introduces src/lib/redis-client.tsx to handle caching of Stripe checkout sessions using Redis. Provides functions for generating cache keys, retrieving, saving, invalidating, and clearing cached checkout URLs to optimize repeated checkout flows and reduce redundant Stripe API calls.
- quick save
- Add checkout page with payment options
  -- Implements the checkout route with support for credit card and e-transfer payments. Includes cart summary, form validation, and order creation logic, integrating Stripe for credit payments and custom handling for e-transfer orders.
- Add cart item and confirmation dialog components
  -- Introduces ShoppingCartItem and CartActionConfirmDialog components for cart item display and removal confirmation. These components enhance cart functionality with item details, quantity controls, and confirmation dialogs.
- Add CartOrderSummary component
  -- Introduces a new CartOrderSummary component for displaying order details, promo code input, payment method selection, and checkout button in the cart route. Enhances user experience by summarizing subtotal, delivery, tax, discounts, and providing payment options.

**Total commits:** 6

## 2025-10-31

**Project 74**

- Add empty cart state to ShoppingCartDropdown
  -- Introduces an empty state UI for the shopping cart dropdown when no items are present, including messaging and a button to browse products. Also updates styling and ensures subtotal, delivery, and checkout actions are only shown when the cart has items.
- Refactor ShoppingCartDropdown UI and logic
  -- Updated ShoppingCartDropdown to use improved UI components, including ScrollArea and CartActionConfirmDialog. Enhanced styling, replaced img with Image, added navigation to cart on checkout, and adjusted delivery calculation logic for empty carts.
- (fix) opening dialog triggering add form submit
  -- fixed this bug by setting type to button. IT would add product to cart if form was filled out.
- Add cart page with free shirt promo logic
  -- Introduces a new cart page that displays cart items, cross-sell recommendations, and an order summary. Implements promo logic to automatically apply free shirts based on qualifying tracksuit or sweatsuit purchases, updating item display and discount calculations accordingly.
- (feat) export cart item interface
  -- we reuse it elsewhere. No need to recreate
- Add order cancel and success route pages
  -- Introduces new pages for order cancellation and successful order confirmation. The cancel page provides navigation options after an incomplete order, while the success page displays order details, confirmation, and post-purchase actions.

**Total commits:** 6

## 2025-11-05

**Project 74**

- Add checkout helpers for product and shipping logic
  -- Introduces utility functions for checkout, including product price ID mapping, delivery estimate calculation, shipping company identification, total order amount calculation, and line item creation. These helpers centralize and streamline checkout-related logic for improved maintainability.
- (feat) create order id helper function
  -- this generates a unique product ID for us when we need it.
- Add CheckoutCartItem component
  -- Introduces CheckoutCartItem, a reusable component for displaying cart items in the checkout flow. It shows product image, name, details, quantity, and total price, supporting dynamic product type labels.
- Update cart to use product type and thumbnail images
  -- Refactored cart logic to fetch images based on product type instead of search term and use thumbnail size for display. Moved empty cart check below calculations, updated image handling in cart items and cross-sell products, and improved styling for product images.
- Refactor CartOrderSummary discounts and UI
  -- commented out unused promo code input and shipping method UI. Added freeShirtDiscount prop to support t-shirt promo discounts, updated discount calculations and display logic, and improved card styling.
- Improve ShoppingCartItem UI and button layout
  -- Added shadow styling to the cart item and image for enhanced visual appearance. Refactored action buttons to group edit and delete actions together, improving user experience and code clarity.
- Add CartProductDetailsDialog component
  -- Introduces a dialog component for editing cart product details such as size, colour, and variant. Includes UI for updating product attributes and viewing the full product page.
- (feat) better auth api route handler
  -- set up the api route handler for better auth.
- (feat) stripe client
  -- added stripe client
- (feat) updated product type
  -- now it matches checkout schema. So only 1 place to update if we change now.
- Refactor form fields and improve input components
  -- Refactored delivery information fields into individual components for contact method, street address, postal code, and city. Added new generic InputField and MessageArea components. Improved error handling and placeholder text, standardized string quotes, and updated button styling for consistency.
- (style) formatting + turnstile
  -- Formatting + added turnstile env variables.
- Add authentication configuration with plugins
  -- Introduces src/lib/auth.ts to configure authentication using better-auth, including database adapter, session management, account linking, password hashing, social login (Google), and plugins for anonymous users, last login method, password breach checks, Stripe integration, passkey support, and React cookie handling.
- Add auth client initialization module
  -- Introduces src/lib/auth-client.ts to initialize the authentication client with plugins for last login method, anonymous login, Stripe integration, and passkey support.
- (style) formatting
- (fix) greater than or equal to 1
  -- it broke if user took 1 item in cart. Now fixed.
- (style) we use theme colours now
  -- using theme colours + cursor pointer
- Refactor getProductImages to use Effect and BunFileSystem
  -- Replaces Node.js fs and path modules with Effect's FileSystem and BunFileSystem for file operations. Adds schema validation, supports multiple image sizes, and improves random image selection logic for different product types. Enhances error handling and code structure for maintainability.
- (style) updated colour and formatting
  -- made border colour secondary, removed classNames for carousel scroll buttons, formatting.
- (fix) bug with the sizing
  -- We fixed it by setting a size to apply. It was an issue when there is less than 1 product size would stay the same. Now it set's size if there is more than 1 otherwise it defaults.
- Refactor shirts page with improved image carousel
  -- Replaces static image carousel with ProductImagesCarouselDialog for expandable images, updates product image fetching to use React Query, and adds a quick 'Buy Now' button for faster cart addition. Also improves code consistency with double quotes and updates product details and form handling.
- Refactor sweatsuit page to use React Query and image dialog
  -- Migrates sweatsuit product image loading to React Query for improved caching and SSR compatibility. Adds ProductImagesCarouselDialog for image expansion, updates carousel UI, and introduces a quick 'Buy Now' button. Cleans up code formatting and improves consistency in string usage.
- Refactor tracksuit page to use react-query for images
  -- Replaces loader-based image fetching with react-query for improved caching and data management. Updates image usage to include 'thumbnail' size, adds a quick add-to-cart handler, and refines UI elements for carousel and form fields.
- (feat) generate Random name function for users
  -- we will use it to generate usernames for user's quickly
- Add createCheckoutSession utility for Stripe checkout
  -- Introduces createCheckoutSession server function to handle Stripe checkout session creation with product and shipping validation, Redis caching, and error handling. Includes schemas for products and shipping options, and integrates with Stripe and Redis clients.

**Total commits:** 25

## 2025-11-06

**Project 74**

- tmp save 2
- tmp save
- removed cart shirt label display
- Add product configuration module
  -- Introduces src/shared/productConfig.ts with product definitions, retrieval functions, and helpers for filtering and accessing product data by type or variant.
- Add createNewOrder utility for checkout
  -- Implements server-side logic for creating new orders, including product validation, inventory checks, order and order item creation, and inventory updates. Provides input validation and error handling for the checkout process.
- productNames singular app wide
- Add ProductDetailsDialog component
  -- Introduces a reusable dialog component for displaying product details, benefits, material composition, country of origin, and related products. This enhances the product page UI by providing a detailed modal view for individual products.
- (style) formatting

**Total commits:** 8

## 2025-11-07

**Project 74**

- tmp save 5
- tmp save 4
- tmp save 3

**Total commits:** 3

## 2025-11-10

**Project 67**

- tmp save

**Total commits:** 1

## 2025-11-21

**Project 67**

- quick save

**Total commits:** 1

## 2025-11-22

**Project 80**

- ignoring the listings json file. its huge.
- installed all shadcn components.
- added server to vite config, added db and update shadcn scripts to the package.json, updated all dependencies.
- Hello, World. This project will be my best one yet.

**Total commits:** 4

## 2025-11-23

**Project 80**

- saving progress.

**Total commits:** 1

## 2025-11-25

**Project 75**

- saving progress
- Remove @tanstack/db from the db add-on template's dependencies. (#238)

**Total commits:** 2

## 2025-11-26 13:20

**Project 80**

- saving progress

**Total commits:** 1
