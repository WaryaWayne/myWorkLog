## 2024-08-22

**Remit-App**

- First version of models.py file
- .gitignore created
- Fist commit. created README

**Total commits:** 3

## 2024-08-24

**Remit-App**

- Add User, Transaction, and TransactionStatusHistory models with timestamp management

**Total commits:** 1

## 2024-08-25

**Remit-App**

- updated the .gitignore to add some extra files to not add to repo
- Remove forms.py and models.py
- added the forms.py changes to branch master
- commit the changes to test_models.py
- added the __init__.py and the routes.py to the app directory
- Added the form and model files to the app directory instead of keeping them in main directory
- Merge commit '8ec87c5b94e0526b349d7fc83f138fe4ae7bc84b'
- Implement User and Transaction models with tests
- Merge models.py forms models branch
- Merge forms.py and test_forms.py from forms branch

**Total commits:** 10

## 2024-09-06

**moments/UniqueMoments**

- Set up Ruby and installed project dependencies
- Initial commit

**Total commits:** 2

## 2024-09-09

**ibn-batouta/ibn-batouta**

- Initialize project using Create React App

**react1/warya**

- Initialize project using Create React App

**Total commits:** 2

## 2024-09-10

**bdm**

- Initialize project using Create React App

**bdm1/bdm1**

- Initialize project using Create React App

**Total commits:** 2

## 2024-09-14

**som-archives**

- Merge branch 'forms'
- Add WTForms for simple and detailed recommendation forms This commit introduces two forms using WTForms: * : This form captures the content name with basic validation requirements (data is required and has a maximum length of 255 characters). * : This form captures all fields from a potential  model (content name, type, location URL, and description). Content type and location are optional, while description has a maximum length of 1000 characters. Both forms utilize the  for form submission.
- Added some final changes to the modesl.py. 1: I removed the updated_at column because it was causing issues with the tests not being updated automatically due to environment factors
- Implemented Recommendation model for managing recommendations:

**Total commits:** 4

## 2024-10-04

**Remit-App**

- latest

**Total commits:** 1

## 2024-10-10

**immigridgeRepo**

- First commit: created Django project in backend directory. Configured the .gitignore files. One(1) in root directory and another in /backend directory

**tools_setup/config_scripts/zsh_scripts**

- Initial commit for tester

**Total commits:** 2

## 2024-10-14

**bdm_web**

- installed vite run dev @latest again.
- Changed the user and admin permissions to make the user able to edit own profile and admin able to edit all profiles. Only admin can delete account.
- I tried to implement tests but will leave it for a later point. I am stuck for now. I removed the tests and will restart when fresh.
- Changed the name of the SECRET_KEY variable in settings.py. From DJANGO_SECRET_KEY to SECRET_KEY.
- Added debug.log to .gitignore. profile/views.py Added a default queryset fpr ProfileViewSet DRF uses this query set to handle default behavior. Did a migration and a change to products/models.py. I added a is_featured field to be able to find the featured products easier.
- Added docstrings to both signal handler functions.
- Updated URL configuration to Include ProfileViewSet. Added ProfileViewSet to handle user profiles. Updated the router to include the 'profiles' endpoint. Ensured Swagger and Redoc documentation remain accessible. This update enhances user management capabilities within the API.
- Updated ProductViewSet to restrict create, update, and delete actions to admin users only.  Implemented a featured products endpoint in ProductViewSet for retrieving featured products. Refined OrderViewSet to filter orders based on the logged-in user for non-staff users. Introduced a custom permission class ?IsOwnerOrAdmin? to restrict access to order management based on ownership or admin status.Created a new permissions.py file in the orders directory containing the IsOwnerOrAdmin permission class. Changes ensure better access control for API endpoints and enhance security for order management.
- Installed drf-spectacular for API Documentation. Added Spectacular_Settings to settings.py for OpenAPI Configuration. Updates Urls.py to include endpoints for open API schema, Swagger UI, ReDoc Documentation. Set API version to 0.1.0.
- Set up Pagination with PageNumberPagination and a page size of 10. Enable filtering using DjangoFilterBackend. Configured token authentication as default authentication method.
- Added django_filters to the installed apps in settings.py.
- Migrated the updated models for profiles, orders and products.
- Update email field to use EmailField for better validation. Added validation to phone number using RegexValidator for formatting of a phone number. Other fields stayed the same.
- Modified to include a nested list of images for each product. Updated serializer to include the main image and additional images.
- Create new ImageField 'main_image' in the product models.py. This will store the primary image for each product. Other fields stayed the same.
- Integrated DefaultRouter for RESTful API endpoints for products and orders. Implemented static media file serving in debug mode to facilitate local development.
- Added the media and staticfiles directories in backend directory. These will let Django know where our files are and how to serve them which is why we configured MEDIA_URL and MEDIA_ROOT. We will upload images via admin panel. The /media will be base URL where uploaded files/images go. /static tells Django where to serve media files from in the browser.
- Migrated the models for Orders, Products and Profiles. Installed Pillow to handle images when storing profile pictures and product images in the database. In settings, we had a glitch where I added a comment to .env variable and it disabled the database connection suddenly.
- Added a views.py for profile app. It already had a model.py and serializers but was missing the views. I added it.
- for the settings.py we added Django rest framework configuration at the end of the file to use authentication tokens. Added rest_framework.authtoken to the installed apps in settings.py. Transfered the Secret Key and Debug settings toggle to the .env file to not hardcode values for security sake. also added profiles.apps.ProfilesConfig to installed apps when we did the profiles app.py configuration. For urls.py we added a path to the api token auth to get an auth token for the api. For orders/admin.py we added a list_display, list_filter and search fields. In orders/views.py we added a few ways to filter and search through products. Product/views.py and admin.py have the same changes. Added ways to filter and seach in views and added filter options in admin.py.
- Just basic page styntax to be able to query some of our products from the backend api. Issue is that it is generic and needs further work when we start the visual development.
- installed Django-filter. We used it in the views.py of products and orders apps. We used it to add some more filters to the api data in views.py.
- Added a serializer for the profiles app because we would need it to view api user data.
- Added a pagination.py file to products and orders apps. This is useful to help sort the api contents with views.py and serializer.
- Updated the model for products adding an accessory category choice, added a video_url field to hold the video of the product, added cancelled as a status choice for Orders model, i added a coupon discount field, added a notes field, for Product models, we added a active status, created a new model for product images, gave it foreign key to connect to products model, added image field to store images of products. Updated the admin.py for Products allowing up to 8 images per product, created profiles model to hold user data. holds name, email, phone number, address, verification status and profile picture.
- Added a profiles app to the django project to store user information and accounts on our platform. Added it to installed apps in django settings. Added new fields to the Orders model and made migrations.
- Updated the products model to accept more fields to describe an individual product.
- Did the first migration for my models. The DB should have tables now.
- Added a dev script to package.json to support vite npm run dev. Installed Psycopg3 to connect to my postgres db instance. installed vite as a regular devDependencies. It wasn't installed. for the changes to app.jsx, I will cancel, it was just a test.
- Added corsheaders to installed apps list in django settings.
- We just moved the imports above first comments in views.py for both apps. We removed unnecessary imports as well. We created the first iteration of our product and order models in models.py. We installed Axios to allow React to communicate with our backend.
- This goes with the previous commit. Where we made cors related changes.
- Installed django-cors-headers. This will allow our backend to communicate with our React frontend. We configured the package. We added it to the settings in our django project root. Added it into MIDDLEWARE right before the CommonMiddleware line. At the end of settings file we added a CORS_ALLOW_ALL_ORIGINS = True. This will allow all origins but we must change later for security.
- Configured the urls for the API's. Set up routing for the API endpoints. Which will be /api/products/ and /api/orders/.
- Added API views in both products and orders using the previously created serializers in both the apps. Very basic view now. Will need to be updated as the models are developed for both apps.
- installed DjangoRestFramework, added it to the settings in my django root folder, created a serializers.py for both orders and products apps in django project. they are basic now will need more editing.
- updated pipfile and lock
- Started the react app with vite. Initialized in the Frontend directory.
- Added the database connection (must update to current db connection). Added the apps to the installed apps in django settings.
- created a products and an orders app inside my django program. We will use these to manage the ecommerce website we're building
- Initialized Django in my backend directory
- added basic files for starting structure
- Initial commit to setup bdm_web

**Total commits:** 43

## 2024-10-15

**bdm_web**

- Added 3 cards to the products list. Set to same product for now. Will be edited to be better later.
- Had a package.json in root and in frontend along with package-lock and node_modules folder. I combined them and kept frontend folder only. Added a postcss.config to configure the tailwind set up. Edited the product card to try and add a read more component to shrink description. Not working yet. Added base, componenets and utilities to index.css in /src directory to call tailwind into my project. Tailwind and vite config files were an edit to apply more config to tailwind setup.
- Add image carousel to product listing. Update ProductSerializer to include product images. Create ProductImageSerializer for handling image data. Modify ProductList component to display images in a carousel. Install and integrate react-responsive-carousel. Update fetchProducts function in App.jsx to handle image. Ensure backend serves image files correctly through MEDIA_URL and MEDIA_ROOT settings. This commit enhances the product listing by adding a visual carousel of product images, improving the user experience and product presentation.
- Added throttling to the API to prevent abuse. Simplifying the registration process to only create a User object, not a full Profile. Removing the confirm_password field from the backend (it's still checked in the frontend). Created a Header, Login, Register, ProductCard and ProductList componenets for the react front end to render our products. The /media product images are from a test upload in our django admin adding product. It works. Added the components to render on App.jsx and css styling in App.css.

**Total commits:** 4

## 2024-10-16

**bdm_web**

- Ignore Staging Directory. Old attempt put there for reference. Decided to restart development of my React frontend. Let's go. Hopefully works out more smooth. Using Yarn, which I installed through brew, vite, will install tailwindcss now and get to doing the config.

**Total commits:** 1

## 2024-10-22

**concrete/frontend/concrete**

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
- Initial commit. Initialized React Typescript project using Yarn and Vite. Configured Tailwind css. Created the backed frontend directories.

**Total commits:** 17

## 2024-10-23

**concrete/frontend/concrete**

- Created the first iteration of the 404 not found page.
- Added no wrap on whitespace to desktop nav section because the get quote button was wrapping on itself.
- Changed the burger menu icon to be more on brand. Changed it to primary color purple-500.
- Separated Header from Layout to create a Header.tsx/ It is now a responsive header.

**Total commits:** 4

## 2024-10-24

**devtools**

- Wrote all the scripts in Bash. Had to remove a submodule from another repo and .git inside the scripts folder.
- Updated the Install and Uninstall scripts along with all in the /scripts directory to be written in Bash.
- Changed the scripts to Bash. Added error handlers and more verbose while using.
- Changed tools included to Commands list.
- changed setvsenv to setVsco
- changed the names of the scripts. From imgconvert to conImg. From quickproject to defStart.
- Added execution permissions for install and uninstall scripts.
- Initial Commit. We set up the install and uninstall scripts. Created a LICENCE and a README. Created .gitignore. all the scripts are in the /scripts directory.

**somfm**

- fixed last import issues I was missing.
- Implement user management features in Django app

**Total commits:** 10

## 2024-10-26

**bdmcentral1**

- Updated pipfile to include needed versions. Add comprehensive health checks Configure Prometheus metrics Set up monitoring thresholds Add tracing configuration Implement proper alerting thresholds
- Installed prometheus-client Add comprehensive health checks Configure Prometheus metrics Set up monitoring thresholds Add tracing configuration Implement proper alerting thresholds
- Installed django_health_check and django_promotheus. Add comprehensive health check configuration Configure monitoring metrics and APM Set up alerting thresholds Add health check endpoints Configure Prometheus metrics endpoint
- Add priority levels for different queues Configure specific task routing based on task type Set up maintenance queue for system tasks Organize tasks by priority and function Ensure proper task distribution across queues
- Add more periodic tasks for system maintenance Configure priority queues for different task types Set up proper task routing based on priority and type Add queue arguments for priority support Organize tasks into logical groups
- Add comprehensive periodic tasks for system maintenance Configure task routing with dedicated queues Add database backup and reporting tasks Implement system health monitoring Add inventory synchronization task
- Add task routing with dedicated queues for each app Implement comprehensive task monitoring Add worker shutdown handling Track task revocation events Enhance task logging with more context
- Add task routing for better organization Implement queue-specific task handling Add comprehensive task monitoring Improve error logging for Celery tasks Add task success and retry handlers
- Add missing crontab import to settings.py Add better Celery task handling and reliability settings Configure Redis connection pooling for Celery Add worker concurrency settings Implement proper Celery error logging
- Configure Celery with Redis as broker and backend Set up periodic tasks with Celery Beat Configure Celery for handling emails Add task time limits and worker settings Set up auto-discovery of tasks in Django apps
- Configured the email backend for the app. I added the 2to6x email for now, but we need the @bdmcentral email to work.
- Configure Redis as the cache backend with proper connection pooling Set up cache key patterns for different views Configure cache middleware settings Add cache versioning support Add necessary Redis dependencies
- Configure Redis as the cache backend Add connection pooling for better performance Configure retry mechanisms for Redis Set up proper cache key patterns Add necessary Redis dependencies Installed hiredis
- Add Redis caching configuration Implement caching for list, retrieve, and featured endpoints Add cache invalidation for create/update operations Configure cache timeouts and prefixes Add proper cache dependencies Installed redis and django-redis
- Fix duplicate media handling in urls.py Add proper DRF configuration with authentication, permissions, and rate limiting Add rate limiting to protect API endpoints Add register endpoint to URLs Configure proper static file handling for both development and production
- Remove duplicate middleware entries Properly order middleware for security and performance Add comprehensive API documentation settings Configure Swagger UI with better defaults Add proper API versioning and server configurations
- I did further config on the backend settings.py for the rest framework, cors headers, adding the more detailed logging. Added logging to product and order views and models.
- for pipfile and lock: 	added orginal backend dependencies from other project. for yarn.lock: 	added original frontend dependencies from other project.
- Initial commit to setup bdm_website_project
- Initial commit

**Total commits:** 20

## 2024-10-27

**bdmcentral2**

- Initial commit

**Total commits:** 1

## 2024-10-28

**bdmcentral**

- Installed django rest framework. Added it to installed files. Configured the cors settings in production.py
- I fought the whole day to get this django backend done. This will be my default config for now. I made sure to check every available setting and choose the ones that apply to me. I separated the settings.py into settings dir that has base, development and production.
- Initial commit to setup bdmcentral
- Initial commit

**rest_api**

- This is the point where level 2 in the rest framework tutorial. Starting level 3.
- THis is the point level 1 of restapi django tutorial ends.

**Total commits:** 6

## 2024-10-29

**devtools**

- Updated and added a closing } to defStart. Accidently removed it on last iteration.
- Updated the djangoReact script: 	Removed the pipenv run command and instead we are now using the default python manage.py start app with chosen app names. 	Added a 'Remember to register it' to the apps creation message.
- Updated the defStart program: 	Removed deprecated vscode settings like linting from the settings. 	Removed the create .gitignore because it was too broad. We can create as we start the project. 	Removed the git repo setup because we have a gitSetup command to do the initial commit once project setup is complete. 	removed the 3rd message after succesful operation suggesting to install pytest, black and pylint. We can configure in the future as we go.

**python_logging**

- Initial commit

**rest_api**

- Renamed project folder to rest_framework so i can use graphQL in the same folder.
- Completed level 6 of the rest api tutorial. We saw viewsets to simplify code to write as far as permissions. We also used only project/urls.py for this api and it set the url paths automatically once we connected it to a route. Genius.
- They did a nice thing I never saw before. Bonding viewsets to URLs in our apps/urls.py file.
- We just finished part 5 of the django Rest-api tutorial. I made considerable progress. We now made navigating the API very easy because it is through hyperlinks. WE are having trouble now though. THe highlight portion is not working due to failed imports at the start and me changing the project requirements. We cannot do highlight but otherwise, all is functional.
- Completed part 4 of the Rest-api tutorial. Now we configured our endpoint: 	To have authentication, 	Ability of a user to create a product 	Only that user can delete a product 	We can interface with the api using our url endpoints. 	We set a connection between users and the product they post. Wanted to make it brand but it got away from me.
- About to start part 4 of the tutorial. Turned many lines of code into 3. Crazy.
- This is 3.5 They showed us how to use mixins and we are about to go into using generic class based views.

**Total commits:** 11

## 2024-10-30

**django_tutorial**

- Initial commit to setup django_tutorial

**Total commits:** 1

## 2024-10-31

**electron_practice/electron-vite-react/ImmiGridge**

- Initial commit. Just getting started on ImmiGridge. Hoping for big things here.

**electron_practice/my-electron-app**

- turned part 1 of tutorial into into a version1 folder. copied the index.html, main.js and deleted copy of preload.js.
- Added vscode to gitignore file. Completed first iteration of the tutorial. We created a main.jsx. We added a preload.jsx. This preloads the current path and version of the dependencies and replaces the text in index.html We added index.html with simple versions of node, electron and chromium. Added a <scripts> for preload.js in index.html before body ends.
- Initial commit. Added a basic description of the project in the README Configured a package,json using yarn to start my electron app project. Started a .gitignore with python and node config

**Total commits:** 4

## 2024-11-05

**stripe**

- Initialized our backend. default django project with products app. We will set up a boiler plate to add stripe to our projects in the future.

**Total commits:** 1

## 2024-11-06

**2to6x_1**

- - I deleted the old db and redid the migrations because I got out of order on a migration and I got stuck. - Added django-cors-headers and configured it for now to allow all origins. Will configure to only allow from our site when the time is right for production. - Markdown to help visualize api data in admin. - django-filter. Got it to be able to filter the api data being sent by backend. Will fully configure before this commit. - djangorestframework: Set up simple jwt auth. Configured routes to expose for the react app. Put the routes we made with all auth, now available via api. - djangorestframework-simplejwt: Used this library for the jwt integration. - django-rest-authtoken: Used this library to create an auth token for us on server side to avoid doing it on client.
- Fully configured Django-Allauth. I went through every setting and enabled what we needed. I got google api for log in with google. got a client id and secret to implement the button. I signed up for the facebook developer account. I made the 2to6x ottawa page. There is no credentials just javascript to implement in react. TODO. I added some libraries: django-hashid-field. This is to opfuscate the user id field in our tables, so someone can't use sequential attacks to get data from our api. fido2 for local host development due to lack of https. Added and configured fully the social account and the mfa for django-allauth. All in base.py. Must still move some requirements to to development or production from base.
- - Added a gitignore with python, vscode and mac os ignore settings. - Configured the settings module to be base, dev and prod. Separated the settings. - started apps named accounts and api

**Total commits:** 3

## 2024-11-07

**2to6x_1**

- - Re ran the migrations. Renamed dev database with a dev_ before the name. Left production database name as is. - Configured some of the settings to be dev and prod independant. Will need to go through Django docs and configure more of the settings right now. - Added cors to dev and prod only. - Added the hash_id salt to have a different dev and prod values and load them in separately via .env file. - Added some comments to lines missing comments. - Took the https settings to prod and left dev to http. - Turned account login on email confirmation on. - Set email password reset timeout to half. 5 mins instead of 10. - We forced remember sessions to on. - Redirect urls need to be dashboard for login, welcome route for email confirmation. Logout send users to homepage. - Made min length of usersname 4 instead of 6. - MFA_WEBAUTHN_ALLOW_INSECURE_ORIGIN is removed from base. Added to dev as - Added a secret key for dev and prod in both folders different values. - Added * allowed hosts for dev purposes. Made it empty for prod because only our domain should access. - Made the static and media dirs but will change them now.

**Total commits:** 1

## 2024-11-13

**2to6xdec13/2to6xDjango**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to backend/core to hold static content. - Added a media directory to backend/core to hold media. - Added a staticfiles direcotry to backend/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.
- - I added a little style to the titles of the groups using 2 lines of #. - Added MacOS to the .gitignore

**backend_2to6x/2to6xDjango**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to backend/core to hold static content. - Added a media directory to backend/core to hold media. - Added a staticfiles direcotry to backend/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.
- - I added a little style to the titles of the groups using 2 lines of #. - Added MacOS to the .gitignore

**backend_2to6x/2to6xDjango1**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to backend/core to hold static content. - Added a media directory to backend/core to hold media. - Added a staticfiles direcotry to backend/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.
- - I added a little style to the titles of the groups using 2 lines of #. - Added MacOS to the .gitignore

**frontend_2to6x/2to6xDjango**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to backend/core to hold static content. - Added a media directory to backend/core to hold media. - Added a staticfiles direcotry to backend/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.
- - I added a little style to the titles of the groups using 2 lines of #. - Added MacOS to the .gitignore

**frontend_2to6x_latest/2to6xDjango**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to backend/core to hold static content. - Added a media directory to backend/core to hold media. - Added a staticfiles direcotry to backend/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.
- - I added a little style to the titles of the groups using 2 lines of #. - Added MacOS to the .gitignore

**Total commits:** 15

## 2024-11-14

**2to6xdec13/2to6xDjango**

- - Added site ID beside sitename at the top. Removed some extra comments at the top beside site name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**backend_2to6x/2to6xDjango**

- - Added site ID beside sitename at the top. Removed some extra comments at the top beside site name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**backend_2to6x/2to6xDjango1**

- - Added site ID beside sitename at the top. Removed some extra comments at the top beside site name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**frontend_2to6x/2to6xDjango**

- - Added site ID beside sitename at the top. Removed some extra comments at the top beside site name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**frontend_2to6x_latest/2to6xDjango**

- - Added site ID beside sitename at the top. Removed some extra comments at the top beside site name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
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

**2to6xdec13/2to6xDjango**

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
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our frontend react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from media and static root. Now it is BASE_DIR / media/static - Removed the facebook and google social account providers auth backends. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**backend_2to6x/2to6xDjango**

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
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our frontend react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from media and static root. Now it is BASE_DIR / media/static - Removed the facebook and google social account providers auth backends. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**backend_2to6x/2to6xDjango1**

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
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our frontend react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from media and static root. Now it is BASE_DIR / media/static - Removed the facebook and google social account providers auth backends. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**frontend_2to6x/2to6xDjango**

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
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our frontend react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from media and static root. Now it is BASE_DIR / media/static - Removed the facebook and google social account providers auth backends. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**frontend_2to6x_latest/2to6xDjango**

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
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our frontend react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from media and static root. Now it is BASE_DIR / media/static - Removed the facebook and google social account providers auth backends. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Total commits:** 100

## 2024-11-17

**2to6xdec13/2to6xDjango**

- - Removed a space.

**backend_2to6x/2to6xDjango**

- - Removed a space.

**backend_2to6x/2to6xDjango1**

- - Removed a space.

**devtools**

- - Directory is called dev-tools not devtools. Fixed the speling issue.
- - Improved the install script to allow users to install only chosen scripts. They won't have to install all the scripts at once anymore. They can choose which ones they want.

**frontend_2to6x/2to6xDjango**

- - Removed a space.

**frontend_2to6x_latest/2to6xDjango**

- - Removed a space.

**Total commits:** 7

## 2024-11-18

**2to6xdec13/2to6xDjango**

- - Added stripe settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with stripe. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the stripe Python Library.
- - Added stripe webhook secret, stripe public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react frontend. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from backend to frontend. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**backend_2to6x/2to6xDjango**

- - Added stripe settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with stripe. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the stripe Python Library.
- - Added stripe webhook secret, stripe public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react frontend. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from backend to frontend. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**backend_2to6x/2to6xDjango1**

- - Added stripe settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with stripe. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the stripe Python Library.
- - Added stripe webhook secret, stripe public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react frontend. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from backend to frontend. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**frontend_2to6x/2to6xDjango**

- - Added stripe settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with stripe. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the stripe Python Library.
- - Added stripe webhook secret, stripe public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react frontend. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from backend to frontend. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**frontend_2to6x_latest/2to6xDjango**

- - Added stripe settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with stripe. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the stripe Python Library.
- - Added stripe webhook secret, stripe public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react frontend. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from backend to frontend. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Total commits:** 80

## 2024-11-24

**frontend_2to6x1/2to6xReact**

- - Added the linux, mac, vscode default gitignores to this gitignore.

**Total commits:** 1

## 2024-11-25

**frontend_2to6x1/2to6xReact**

- - Default configuration for a basic yarn, vite react ts project. - Created it with yarn. Added tailwind for styling. It is still in raw format.

**Total commits:** 1

## 2024-11-27

**2to6xdec13/2to6xDjango**

- - Added psycopg2 for django to communicate with postgresql when we switched from sqlite.

**backend_2to6x/2to6xDjango**

- - Temporary comit to revert back to if composer causes issues.

**backend_2to6x/2to6xDjango1**

- - Temporary comit to revert back to if composer causes issues.

**frontend_2to6x/2to6xDjango**

- - Added psycopg2 for django to communicate with postgresql when we switched from sqlite.

**frontend_2to6x_latest/2to6xDjango**

- - Added psycopg2 for django to communicate with postgresql when we switched from sqlite.

**frontend_2to6x_latest/2to6xReact**

- - Created basic starting structure to develop our project. Ran the python file in scripts/.
- - Created python script to generate the project structure in src/. - It will add a {dirName}Notes.md file to each directory to help document it.
- Initial Commit. Set up the base React TS project with Vite, Yarn, and Tailwindcss. About to run the script in /scripts directory to initialize the starting structure.

**millionLint/2to6xReact**

- - Created basic starting structure to develop our project. Ran the python file in scripts/.
- - Created python script to generate the project structure in src/. - It will add a {dirName}Notes.md file to each directory to help document it.
- Initial Commit. Set up the base React TS project with Vite, Yarn, and Tailwindcss. About to run the script in /scripts directory to initialize the starting structure.

**Total commits:** 11

## 2024-12-03

**2to6xdec13/2to6xDjango**

- Enhance service, vehicle, and appointment management with new models and validations
- Update Django settings for production deployment and enhance environment-specific configurations     Site Configuration:         Changed SITE_ID from 1 to 5, to correctly identify the site for authentication.
- - Services app migrations.
- - Favicon to stop that 404 response to the browser. Favicon set by React frontend.
- Enhance payment handling with validation and refund support
- Refactor serializers and add vehicle/address handling to Appointment     Replaced timezone.now() with now() and timezone.make_aware() for consistent timezone handling.     Added VehicleInfo and ServiceAddress to AppointmentWriteSerializer to support vehicle and address fields.     Updated the create() method to handle creation of associated VehicleInfo and ServiceAddress models.     Enhanced validation for service availability and appointment time constraints.     Cleaned up redundant code for date/time handling and serializer fields.
- - Added stripe test secret key. - Added stripe public key, webhook secret and testing webhook secret.
- - Added verbose name to Services and Payments apps.py. This will help us recognize it as we grow.
- - Removed the timezone.now and replaced it with now(). - We import now from django.utils.timezone. - We use now() as the time function and variable to load into our filters.
- - Sample images we used when adding our services to the admin panel. Can be changed anytime.
- - This was never meant to be commited. This is a dump data of our sessions data when we did db migration from sqlite to postgres.
- - Deleted migrations for welcome app. It has been redone.
- - Project static files. From all auth, from our owns apps and from the other apps our project installed and is using.
- feat(vehicle): Add CSV import command - Create Django management command for vehicle data import - Add data cleaning and validation - Handle special purpose vehicles with normalization - Add progress tracking and error reporting - Implement get_or_create logic to avoid duplicates - Added dataset to the commit.
- - Migrations for the services app.
- feat(vehicle): Update admin configuration - Add VehicleCatalogAdmin for managing vehicle catalog entries - Update VehicleInfoAdmin to use new model structure - Add custom display methods for related vehicle fields - Update list filters and search fields for better admin usability
- feat(vehicle): Add vehicle catalog API routes - Add endpoint for retrieving vehicle makes - Add endpoint for retrieving models by make - Add endpoint for retrieving years by make and model - Add endpoint for retrieving trims with vehicle details
- feat(vehicle): Add vehicle catalog API endpoints - Add get_vehicle_makes endpoint for unique manufacturers - Add get_vehicle_models endpoint filtered by make - Add get_vehicle_years endpoint filtered by make and model - Add get_vehicle_trims endpoint with vehicle details
- - Error template files for 500, 502, 503 and 504.
- - Added the password reset api view to the welcome app. We had no other place to put it without mixing up with other apps.
- - Added password reset urls because they were needed for the forgot password flow. - Changed payments to separate the payments and webhooks and simplified it. - Re-added our csrf endpoint so we can get the token to make requestst to backend. - Added app name before the url config because we set an app name in each of the apps urls.
- - Blog configuration. Still not 100% finished. First need to start implementing the frontend blog.

**frontend_2to6x/2to6xDjango**

- Enhance service, vehicle, and appointment management with new models and validations
- Update Django settings for production deployment and enhance environment-specific configurations     Site Configuration:         Changed SITE_ID from 1 to 5, to correctly identify the site for authentication.
- - Services app migrations.
- - Favicon to stop that 404 response to the browser. Favicon set by React frontend.
- Enhance payment handling with validation and refund support
- Refactor serializers and add vehicle/address handling to Appointment     Replaced timezone.now() with now() and timezone.make_aware() for consistent timezone handling.     Added VehicleInfo and ServiceAddress to AppointmentWriteSerializer to support vehicle and address fields.     Updated the create() method to handle creation of associated VehicleInfo and ServiceAddress models.     Enhanced validation for service availability and appointment time constraints.     Cleaned up redundant code for date/time handling and serializer fields.
- - Added stripe test secret key. - Added stripe public key, webhook secret and testing webhook secret.
- - Added verbose name to Services and Payments apps.py. This will help us recognize it as we grow.
- - Removed the timezone.now and replaced it with now(). - We import now from django.utils.timezone. - We use now() as the time function and variable to load into our filters.
- - Sample images we used when adding our services to the admin panel. Can be changed anytime.
- - This was never meant to be commited. This is a dump data of our sessions data when we did db migration from sqlite to postgres.
- - Deleted migrations for welcome app. It has been redone.
- - Project static files. From all auth, from our owns apps and from the other apps our project installed and is using.
- feat(vehicle): Add CSV import command - Create Django management command for vehicle data import - Add data cleaning and validation - Handle special purpose vehicles with normalization - Add progress tracking and error reporting - Implement get_or_create logic to avoid duplicates - Added dataset to the commit.
- - Migrations for the services app.
- feat(vehicle): Update admin configuration - Add VehicleCatalogAdmin for managing vehicle catalog entries - Update VehicleInfoAdmin to use new model structure - Add custom display methods for related vehicle fields - Update list filters and search fields for better admin usability
- feat(vehicle): Add vehicle catalog API routes - Add endpoint for retrieving vehicle makes - Add endpoint for retrieving models by make - Add endpoint for retrieving years by make and model - Add endpoint for retrieving trims with vehicle details
- feat(vehicle): Add vehicle catalog API endpoints - Add get_vehicle_makes endpoint for unique manufacturers - Add get_vehicle_models endpoint filtered by make - Add get_vehicle_years endpoint filtered by make and model - Add get_vehicle_trims endpoint with vehicle details
- - Error template files for 500, 502, 503 and 504.
- - Added the password reset api view to the welcome app. We had no other place to put it without mixing up with other apps.
- - Added password reset urls because they were needed for the forgot password flow. - Changed payments to separate the payments and webhooks and simplified it. - Re-added our csrf endpoint so we can get the token to make requestst to backend. - Added app name before the url config because we set an app name in each of the apps urls.
- - Blog configuration. Still not 100% finished. First need to start implementing the frontend blog.

**frontend_2to6x_latest/2to6xDjango**

- Enhance service, vehicle, and appointment management with new models and validations
- Update Django settings for production deployment and enhance environment-specific configurations     Site Configuration:         Changed SITE_ID from 1 to 5, to correctly identify the site for authentication.
- - Services app migrations.
- - Favicon to stop that 404 response to the browser. Favicon set by React frontend.
- Enhance payment handling with validation and refund support
- Refactor serializers and add vehicle/address handling to Appointment     Replaced timezone.now() with now() and timezone.make_aware() for consistent timezone handling.     Added VehicleInfo and ServiceAddress to AppointmentWriteSerializer to support vehicle and address fields.     Updated the create() method to handle creation of associated VehicleInfo and ServiceAddress models.     Enhanced validation for service availability and appointment time constraints.     Cleaned up redundant code for date/time handling and serializer fields.
- - Added stripe test secret key. - Added stripe public key, webhook secret and testing webhook secret.
- - Added verbose name to Services and Payments apps.py. This will help us recognize it as we grow.
- - Removed the timezone.now and replaced it with now(). - We import now from django.utils.timezone. - We use now() as the time function and variable to load into our filters.
- - Sample images we used when adding our services to the admin panel. Can be changed anytime.
- - This was never meant to be commited. This is a dump data of our sessions data when we did db migration from sqlite to postgres.
- - Deleted migrations for welcome app. It has been redone.
- - Project static files. From all auth, from our owns apps and from the other apps our project installed and is using.
- feat(vehicle): Add CSV import command - Create Django management command for vehicle data import - Add data cleaning and validation - Handle special purpose vehicles with normalization - Add progress tracking and error reporting - Implement get_or_create logic to avoid duplicates - Added dataset to the commit.
- - Migrations for the services app.
- feat(vehicle): Update admin configuration - Add VehicleCatalogAdmin for managing vehicle catalog entries - Update VehicleInfoAdmin to use new model structure - Add custom display methods for related vehicle fields - Update list filters and search fields for better admin usability
- feat(vehicle): Add vehicle catalog API routes - Add endpoint for retrieving vehicle makes - Add endpoint for retrieving models by make - Add endpoint for retrieving years by make and model - Add endpoint for retrieving trims with vehicle details
- feat(vehicle): Add vehicle catalog API endpoints - Add get_vehicle_makes endpoint for unique manufacturers - Add get_vehicle_models endpoint filtered by make - Add get_vehicle_years endpoint filtered by make and model - Add get_vehicle_trims endpoint with vehicle details
- - Error template files for 500, 502, 503 and 504.
- - Added the password reset api view to the welcome app. We had no other place to put it without mixing up with other apps.
- - Added password reset urls because they were needed for the forgot password flow. - Changed payments to separate the payments and webhooks and simplified it. - Re-added our csrf endpoint so we can get the token to make requestst to backend. - Added app name before the url config because we set an app name in each of the apps urls.
- - Blog configuration. Still not 100% finished. First need to start implementing the frontend blog.

**frontend_2to6x_latest/2to6xReact**

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

**millionLint/2to6xReact**

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

**vehicle_dataset**

- - Pipfile and lock. We are using pipenv to manage the virtual environment.

**vehicle_dataset/north-america-cars-dataset**

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

**Total commits:** 129

## 2024-12-05

**frontend_2to6x/2to6xReact**

- - Added eslint and prettier config to the projet. Combined them both together. - Prettier errors will show up as eslint errors.
- - Added shadcn-ui for pre-made components.
- feat(2To6X React Project)   - Just ran the script and it added basic files to our src directory. it is starting off alright.
- feat(2To6X React Project):   Just getting started. Added tailwind, added roboto font, removed default settings.   This is the default config.

**Total commits:** 4

## 2024-12-08

**2to6x/frontend**

- - Started new vite react-ts project with yarn. This is basic config.

**2to6x_18Dec24/frontend**

- - Started new vite react-ts project with yarn. This is basic config.

**2to6xdec13/2to6xReact**

- - Started new vite react-ts project with yarn. This is basic config.

**Total commits:** 3

## 2024-12-09

**2to6x/frontend**

- (feat .env) - Basic env example file to make it easy to add the keys when changing environments.
- - Removed them. We don't need them.
- (feat frontend) - Set up Prettier in project. - Set up Eslint rules and config. - Connected Eslint and Prettier. Prettier errors will show as linting errors. - Installed @tanstack/react-query. This will be used to make our api calls and cache data that has already been searched before. - Upgraded all dependecies to latest. - Upgraded to react, react-dom v19. - Added Mac OS, Linux and Node to gitignore.
- (feat index.html) - Added a link to our new svg for favicon. - Added an import for our Google Roboto Font. - Added a new title to reflect our project. With a description of our services.
- (feat frontend): - Added tailwindcss with animate - Configured and installed Shad/CN components library with lucide icons.

**2to6x_18Dec24/frontend**

- (feat .env) - Basic env example file to make it easy to add the keys when changing environments.
- - Removed them. We don't need them.
- (feat frontend) - Set up Prettier in project. - Set up Eslint rules and config. - Connected Eslint and Prettier. Prettier errors will show as linting errors. - Installed @tanstack/react-query. This will be used to make our api calls and cache data that has already been searched before. - Upgraded all dependecies to latest. - Upgraded to react, react-dom v19. - Added Mac OS, Linux and Node to gitignore.
- (feat index.html) - Added a link to our new svg for favicon. - Added an import for our Google Roboto Font. - Added a new title to reflect our project. With a description of our services.
- (feat frontend): - Added tailwindcss with animate - Configured and installed Shad/CN components library with lucide icons.

**2to6xdec13/2to6xReact**

- (feat .env) - Basic env example file to make it easy to add the keys when changing environments.
- - Removed them. We don't need them.
- (feat frontend) - Set up Prettier in project. - Set up Eslint rules and config. - Connected Eslint and Prettier. Prettier errors will show as linting errors. - Installed @tanstack/react-query. This will be used to make our api calls and cache data that has already been searched before. - Upgraded all dependecies to latest. - Upgraded to react, react-dom v19. - Added Mac OS, Linux and Node to gitignore.
- (feat index.html) - Added a link to our new svg for favicon. - Added an import for our Google Roboto Font. - Added a new title to reflect our project. With a description of our services.
- (feat frontend): - Added tailwindcss with animate - Configured and installed Shad/CN components library with lucide icons.

**Total commits:** 15

## 2024-12-15

**2to6x/frontend**

- feat (vite-env.d.ts): - Added eslint plugin react hooks declaration because ts could not find it.
- feat (tsconfig.*.json): - Removed no emit from both because it was causing issues. - Added emit declaration so only ts files are emited. not js.
- feat (tailwind.config.js): - Issue was center needs to be a boolean. I set it to a string. Fixed.
- feat (ts and vite config): - Configured these files according to project scope.

**2to6x_18Dec24/frontend**

- feat (vite-env.d.ts): - Added eslint plugin react hooks declaration because ts could not find it.
- feat (tsconfig.*.json): - Removed no emit from both because it was causing issues. - Added emit declaration so only ts files are emited. not js.
- feat (tailwind.config.js): - Issue was center needs to be a boolean. I set it to a string. Fixed.
- feat (ts and vite config): - Configured these files according to project scope.

**Total commits:** 8

## 2024-12-16

**2to6x/frontend**

- Installed eslint react plug in hooks.
- - no changes here. - reset app.tsx to default
- feat (eslint.config.js): - Fixed eslint issues. - Set minimum rules. - Removed deprecated rules.

**2to6x_18Dec24/frontend**

- Installed eslint react plug in hooks.
- - no changes here. - reset app.tsx to default
- feat (eslint.config.js): - Fixed eslint issues. - Set minimum rules. - Removed deprecated rules.

**Total commits:** 6

## 2024-12-19

**2to6x/frontend**

- feat (router): - Set up our basic tanstack router. - Using file based routing. We have static pages and dynamic url driven blog pages.
- feat (pages): - These are the pages we are using for rendering routes in our app.
- feat (axios): - Created our first axios instance. - Set a apiBase which holds the base api config with the defaults and apiBlog which is for blog related endpoints. - Added the endpoints we are going for as a comment to page top. - Set up axios defaults so we don't have to type every request. - Added a csrf request. So we can just import it and add to request headers. - Added all blog types from our backend according to our serializers.
- feat (tanstack router): - Set up basic router for the project.

**Total commits:** 4

## 2024-12-22

**2to6x/frontend**

- - Added tanstack dev tools to our project.
- refactor(ui): reorganize pages and components
- refactor(api): restructure API layer
- chore(config): update project configuration
- feat(forms): add form handling and utilities
- feat(query): implement react-query hooks
- feat(router): implement file-based routing with tanstack

**Total commits:** 7

## 2024-12-23

**2to6x/frontend**

- feat (useAuth): - We now store the user data object in session storage - We can use that to personalize user journey in the the app while logged in. - We remove the items from session storage on failed login. - New login replaces old data with fresh data.
- feat (verify-email): - Added card component to style better.
- feat (error handler): - Added network on and off messages for users. - Added an error handler to parse the axios error and then return it to the user. - We added network status to our root route. - Updated message and toast format for all queries and mutations.
- feat (sonner toast): - Removed it from app.tsx and added it to the root page. It works now.
- feat(auth): enhance form validation and autocomplete
- feat (apiBase): - Added with xsrf token to true to auto include the csrf token with requests.
- feat (login & register page): - Used card format to style it. - Added links to our privacy policy and terms of service at bottom.

**Total commits:** 7

## 2024-12-26

**rich_stream/rich**

- feat (electron app vite startup): - The goals here are 3. - Configure ADB. - Configure Scrcpy. - Guide in setting up sound by opening the right panel in settings.

**Total commits:** 1

## 2025-01-01

**codkaaga1/codkaaga**

- feat(project): - Added search and compare pages and routes. - Added eslint and prettier. - We have homepage, search page and compare page. - Added lodash for debouncing api calls and a debounce util in lib/hooks - Set all links to / for now.
- feat(project): - Installed tailwind css - Installed shad/cn - Added .gitignore - Pulled in network and theme mode utils in lib/
- feat(project): - Started new vite project.

**Total commits:** 3

## 2025-01-06

**bdmCo/frontend**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**bdmCo/ignore/frontend**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**bdmCo/ignore/frontend copy**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**bdmCo7jan25/backend**

- feat (Backend BDM Central): - Initialized default Django Project.

**bdmCo7jan25/frontend**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**Total commits:** 5

## 2025-01-07

**bdmCo/bdm_central**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**bdmCo/ignore/bdm_central1**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**clothing-co3mar25/bdm_central**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**mayranAcademy/backend/bdm_central**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**mayranSchool1/backend/bdm_central**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Total commits:** 5

## 2025-01-08

**bdmCo/bdm_central**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added stripe to our products mode. - Added stripe price, product ids to the products and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our products app. - Created a stripe config file and a payments views folder. We will use this to handle our stripe config. - Added some .env imports in base for our stripe keys and product ids for our 3 products. - Added a logger for the products app. - Added better error response and handling for our logging and user messages in frontend toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added stripe to our products mode. - Added stripe price, product ids to the products and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our products app. - Created a stripe config file and a payments views folder. We will use this to handle our stripe config. - Added some .env imports in base for our stripe keys and product ids for our 3 products.
- feat(Products): Implement E-commerce Models and API Endpoints
- feat(products.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store products(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**bdmCo/frontend**

- feat (project): - Added tailwind css. - Added Shad/cn components library. - Added Tanstack Query and Router

**bdmCo/ignore/bdm_central1**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added stripe to our products mode. - Added stripe price, product ids to the products and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our products app. - Created a stripe config file and a payments views folder. We will use this to handle our stripe config. - Added some .env imports in base for our stripe keys and product ids for our 3 products. - Added a logger for the products app. - Added better error response and handling for our logging and user messages in frontend toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added stripe to our products mode. - Added stripe price, product ids to the products and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our products app. - Created a stripe config file and a payments views folder. We will use this to handle our stripe config. - Added some .env imports in base for our stripe keys and product ids for our 3 products.
- feat(Products): Implement E-commerce Models and API Endpoints
- feat(products.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store products(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**bdmCo/ignore/frontend**

- feat (project): - Added tailwind css. - Added Shad/cn components library. - Added Tanstack Query and Router

**bdmCo/ignore/frontend copy**

- feat (project): - Added tailwind css. - Added Shad/cn components library. - Added Tanstack Query and Router

**clothing-co3mar25/bdm_central**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added stripe to our products mode. - Added stripe price, product ids to the products and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our products app. - Created a stripe config file and a payments views folder. We will use this to handle our stripe config. - Added some .env imports in base for our stripe keys and product ids for our 3 products. - Added a logger for the products app. - Added better error response and handling for our logging and user messages in frontend toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added stripe to our products mode. - Added stripe price, product ids to the products and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our products app. - Created a stripe config file and a payments views folder. We will use this to handle our stripe config. - Added some .env imports in base for our stripe keys and product ids for our 3 products.
- feat(Products): Implement E-commerce Models and API Endpoints
- feat(products.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store products(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**mayranAcademy/backend/bdm_central**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added stripe to our products mode. - Added stripe price, product ids to the products and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our products app. - Created a stripe config file and a payments views folder. We will use this to handle our stripe config. - Added some .env imports in base for our stripe keys and product ids for our 3 products. - Added a logger for the products app. - Added better error response and handling for our logging and user messages in frontend toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added stripe to our products mode. - Added stripe price, product ids to the products and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our products app. - Created a stripe config file and a payments views folder. We will use this to handle our stripe config. - Added some .env imports in base for our stripe keys and product ids for our 3 products.
- feat(Products): Implement E-commerce Models and API Endpoints
- feat(products.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store products(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**mayranSchool1/backend/bdm_central**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added stripe to our products mode. - Added stripe price, product ids to the products and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our products app. - Created a stripe config file and a payments views folder. We will use this to handle our stripe config. - Added some .env imports in base for our stripe keys and product ids for our 3 products. - Added a logger for the products app. - Added better error response and handling for our logging and user messages in frontend toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added stripe to our products mode. - Added stripe price, product ids to the products and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our products app. - Created a stripe config file and a payments views folder. We will use this to handle our stripe config. - Added some .env imports in base for our stripe keys and product ids for our 3 products.
- feat(Products): Implement E-commerce Models and API Endpoints
- feat(products.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store products(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Total commits:** 28

## 2025-01-14

**bdmCo/frontend**

- feat (signUpForm): - Terms and conditions disclaimer at bottom of sign up with links to pages. - Removed the export from useRegister because it isn't needed. - Removed the data we saved in Query client and added it to RegisterStore. - Moved the navigation to onSuccess from the mutation.isSuccess. - Create a JustSignedUp cookie and if that cookie isn't there, it won't render verify Page.
- feat (extras): - extra config files and route tree. - Shad/cn components.
- feat (apiInstance): - Removed an extra /api/v1. Already included in .env
- feat (signup + verify-email): - Complete signup + verify page. - Complete signup and verify-email forms. - Implemented sending one time passcode to user email. With resend feature - verify expects a param of username and email that is saved in our query. Without it verify page redirects to signup. - Api call to backend + Query Mutation + parse response and map to form fields and alert to display backend response messages.
- feat(signUp form): - Created the register api call. - Working on the query and form now. - Restarted the form. Will make it myself.
- feat (axios apiInstance): - Created a base axios instance. - Will include csrf tokens in requests automatically.

**bdmCo/ignore/frontend**

- feat (signUpForm): - Terms and conditions disclaimer at bottom of sign up with links to pages. - Removed the export from useRegister because it isn't needed. - Removed the data we saved in Query client and added it to RegisterStore. - Moved the navigation to onSuccess from the mutation.isSuccess. - Create a JustSignedUp cookie and if that cookie isn't there, it won't render verify Page.
- feat (extras): - extra config files and route tree. - Shad/cn components.
- feat (apiInstance): - Removed an extra /api/v1. Already included in .env
- feat (signup + verify-email): - Complete signup + verify page. - Complete signup and verify-email forms. - Implemented sending one time passcode to user email. With resend feature - verify expects a param of username and email that is saved in our query. Without it verify page redirects to signup. - Api call to backend + Query Mutation + parse response and map to form fields and alert to display backend response messages.
- feat(signUp form): - Created the register api call. - Working on the query and form now. - Restarted the form. Will make it myself.
- feat (axios apiInstance): - Created a base axios instance. - Will include csrf tokens in requests automatically.

**bdmCo/ignore/frontend copy**

- feat (signUpForm): - Terms and conditions disclaimer at bottom of sign up with links to pages. - Removed the export from useRegister because it isn't needed. - Removed the data we saved in Query client and added it to RegisterStore. - Moved the navigation to onSuccess from the mutation.isSuccess. - Create a JustSignedUp cookie and if that cookie isn't there, it won't render verify Page.
- feat (extras): - extra config files and route tree. - Shad/cn components.
- feat (apiInstance): - Removed an extra /api/v1. Already included in .env
- feat (signup + verify-email): - Complete signup + verify page. - Complete signup and verify-email forms. - Implemented sending one time passcode to user email. With resend feature - verify expects a param of username and email that is saved in our query. Without it verify page redirects to signup. - Api call to backend + Query Mutation + parse response and map to form fields and alert to display backend response messages.
- feat(signUp form): - Created the register api call. - Working on the query and form now. - Restarted the form. Will make it myself.
- feat (axios apiInstance): - Created a base axios instance. - Will include csrf tokens in requests automatically.

**Total commits:** 18

## 2025-01-15

**bdmCo/frontend**

- - Updated ReadMe
- feat(api + contextStore): - Added a refresh and access token request. - We check if access or refresh cookies are there, if not we return the error. - If cookies found we send to backend to validate them. - Created a zuustand context store. We wil use it to store all simple context we need between components.
- feat (login): - Added login api call and useLogin query to mutate the data. - Created a fieldInfo instance to be able to drop errors beside the field that the backend returns them for. - Create an isAuthenticated cookie, if it is there, we redirect back to page we came from. - onBlur form field validation.
- feat (verify-email): - Moved the navigation to login inside onSuccess mutation. - Added a check for a justSignedUp cookie. If not found, it will redirect to sign in page. - Use the email and username we saved to useRegisterStore instead of query data. params.

**bdmCo/ignore/frontend**

- - Updated ReadMe
- feat(api + contextStore): - Added a refresh and access token request. - We check if access or refresh cookies are there, if not we return the error. - If cookies found we send to backend to validate them. - Created a zuustand context store. We wil use it to store all simple context we need between components.
- feat (login): - Added login api call and useLogin query to mutate the data. - Created a fieldInfo instance to be able to drop errors beside the field that the backend returns them for. - Create an isAuthenticated cookie, if it is there, we redirect back to page we came from. - onBlur form field validation.
- feat (verify-email): - Moved the navigation to login inside onSuccess mutation. - Added a check for a justSignedUp cookie. If not found, it will redirect to sign in page. - Use the email and username we saved to useRegisterStore instead of query data. params.

**bdmCo/ignore/frontend copy**

- - Updated ReadMe
- feat(api + contextStore): - Added a refresh and access token request. - We check if access or refresh cookies are there, if not we return the error. - If cookies found we send to backend to validate them. - Created a zuustand context store. We wil use it to store all simple context we need between components.
- feat (login): - Added login api call and useLogin query to mutate the data. - Created a fieldInfo instance to be able to drop errors beside the field that the backend returns them for. - Create an isAuthenticated cookie, if it is there, we redirect back to page we came from. - onBlur form field validation.
- feat (verify-email): - Moved the navigation to login inside onSuccess mutation. - Added a check for a justSignedUp cookie. If not found, it will redirect to sign in page. - Use the email and username we saved to useRegisterStore instead of query data. params.

**Total commits:** 12

## 2025-01-16

**bdmCo/bdm_central**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**clothing-co3mar25/bdm_central**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**mayranAcademy/backend/bdm_central**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**mayranSchool1/backend/bdm_central**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**Total commits:** 4

## 2025-01-28

**clothing-co3mar25/bdmCentral**

- Added prettier and ran it.
- route tree
- terms and conditions disclaimer.
- shad/cn input otp for verify email form.
- updated eslint config.
- Updated .gitignore
- Added Google brand colors to svg for google login button
- - Added Login, Signup, Verify-Email, Reset-Password request and password reset pages with all needed logic in the file. - Removed Auth, guest and register stores and placed them in shared dir.
- Added baseUserSchema. This is minimum we need from user.
- - SignUp form and page combined with all logic.
- - Network status notification for user if offline or network issues. - Mode toggle to go between dark and light mode theme. - Added theme providers to wrap our root Route and wrapped as needed. - Debounce hook for api calls we need to slow down.
- Added Google and Facebook login buttons.
- - set tailwind v4 theme settings. Theme works now. - Added Roboto font from google as well. - Issue with npx and bunx use, I had to delete package-lock.json.
- Added axios, js-cookie + types. - Added base apiInstance for entire project.
- - Added Tanstack router and query managers. - Installed their devtools. - Added Sonner from shad/cn
- Added shad/cn manually.
- - Added bun path types. - Updated the tsconfig files.
- Added tailwind v4 and the vite plugin.
- Fresh Bun Vite React TS install.

**mayranSchool1/frontend**

- - set tailwind v4 theme settings. Theme works now. - Added Roboto font from google as well. - Issue with npx and bunx use, I had to delete package-lock.json.
- Added axios, js-cookie + types. - Added base apiInstance for entire project.
- - Added Tanstack router and query managers. - Installed their devtools. - Added Sonner from shad/cn
- Added shad/cn manually.
- - Added bun path types. - Updated the tsconfig files.
- Added tailwind v4 and the vite plugin.
- Fresh Bun Vite React TS install.

**Total commits:** 26

## 2025-02-02

**chatapp/backend/media/products**

- images and videos for our products

**Total commits:** 1

## 2025-02-04

**clothing-co3mar25/bdmCentral**

- Product display pages. Index and Detail views. - Index shows all products in a page. Detail shows info and allows add to cart+favortite ability on each product. - Size guide not ready yet. We  will need to measure 1 of each size ourselves. Numbers I got are not reliable. - Images are local to frontend. Instead of sending them via api with every product, we can import in frontend and display that way. - Each Pages has the images that go into detail.
- Password reset + redirect and change password. - Redirecting user with a link sent by email then they change their password by providing 2 new passwords then redirect to login. - System always returns a positive for email sent to avoid people finding users emails. Only sends email if user exists.
- Initiatives. This is our project intitiatives. WE want to commit a part of our revenue to a good cause. - Contact Form to reach out to us. - Grant Application same as contact with grant related flag. - Product giveaway has flag same contact form. - School supplies is an application to apply for support. We might give you school supplies. - We have a contribute route. This one will help us bridge the gap between people who we can help and others who contribute to that.
- Signup, Verify-Email, Login Forms and related logic. - Completed forms with all data and working with connection to backend. We need to add our own image in place of the picsum images. TODO. - We included fully featured OAuth with google and facebook, loggin in user and givng us access and refresh tokens. - We included Guest Login portion of signup where they can only provide email and be logged in. - Password Verify with a 6 digit OTP sent by email on login. Optional.
- - Footer + Layout Footer has company info, quick links, products, policies and map pin from google. - Styled it with good distance from the edges.
- Header for the website. Has mobile view set but need more padding and margin to distance from edges. Match footer. - Added user icon with login and logout button based on auth state - Logout deletes cookies and triggers api call to backend to log user out. - Login leads to /auth/login route. - Added SVG Logo. Might add some colors in the logo we will see. - Cart integration in header as well.

**Total commits:** 6

## 2025-02-07

**clothing-co3mar25/bdmCentral**

- Header + Footer: - Footer adapts to all screen sizes. - Header needs more work

**Total commits:** 1

## 2025-02-15

**mayranAcademy/backend/bdm_central**

- last portion before we commit into vps.
- config (settings): - Set redis to be the cache system. - Set postgres to be database system. - Both on unix socket.
- addition (products app): - We have stripe integration for payments. - we have api to send orders(donations), create payment intents, recieve webhooks and process transactions.
- addition (user Model): - Added Stripe_customer_id, phone_number and use sqid for the pk. - Brought the views for our social auth and csrf into the users app views to avoid cluttering app specific views.

**mayranSchool1/backend/bdm_central**

- last portion before we commit into vps.
- config (settings): - Set redis to be the cache system. - Set postgres to be database system. - Both on unix socket.
- addition (products app): - We have stripe integration for payments. - we have api to send orders(donations), create payment intents, recieve webhooks and process transactions.
- addition (user Model): - Added Stripe_customer_id, phone_number and use sqid for the pk. - Brought the views for our social auth and csrf into the users app views to avoid cluttering app specific views.

**Total commits:** 8

## 2025-02-21

**mayranAcademy/mayranAcademy**

- Added tanstack router+query with devtools. - Added api instance. - Added network check. - Theme mode and toggle. - Added shared stores for the program. - Added Layout with header and children
- Added shad/cn. configured theme to match.
- - Updated index.html to include more meta data and tags. It is no supporting of social media sharing. - Added different sized svgs in case screen size changes. - Added manifest.json, sitemap.xml, robots.txt - Much more detailed index.html than ever before
- Added tailwind css v4.
- first commit. Started new react 19 project.

**Total commits:** 5

## 2025-02-26

**manasikHajj/manasikHajj**

- Added tailwind css v4.
- Started new vite react ts project

**Total commits:** 2

## 2025-02-27

**manasikHajj/backend**

- Backend for sh Aden manasik Hajj 2025 form.

**Total commits:** 1

## 2025-03-03

**clothing-co/backend**

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
- Added dimensions model, serializer and admin for our products. We enter once and reference it there.
- finished products app. Moving on for now.
- git ignore for linux, mac, node and python.
- Added products, color, size, inventory, promotion and likes to the admin panel so we can edit.
- Added urls for products, promotions and inventory
- Added product, promotion and inventory viewsets with custom exceptions.
- Added product, promotion, inventory, reviews, size and color serializers.
- Added color, size, inventory, likes, review, promotion models to store our product and related data.
- Added new user model to expand the abstract user model. This add some fields we need to the user model on top of django's extra.
- installed django

**clothing-co/frontend**

- added shad/cn
- added tailwind css
- created new vite react ts project

**Total commits:** 27

## 2025-03-04

**clothing-co/backend**

- Fixed up the redundancy in the admin panel code.
- added a fedex and canada post url to reach each service separately.
- formatting
- fixed the models to create an abstract base shipping model we expand with for canada post and fedex as needed.
- Made a base serializer class that the canada post and fedex serializers inherit from.
- Optimized imports.
- Removed stripe payout status. Same as status. Shipping address will be stored as a json object from now on. Removed estimated days. Not necessary. Optimized imports.
- Removed the admin registation. This model is a helper to the other Order model in admin.
- removed the get username function. redundant. removed the stripe payment status. its same as our systems status.
- Added admin view so we can see contact form submissions.
- Added contact form model to store our contact form data. Removed translation util from fields in user model.
- A serializer for our contact form data.
- Added contact form viewset. it simply saves the form and we can see in admin.
- Added endpoint to send contact form requests.
- Installed Stripe library
- changed how we import user model in models. changed how we import product views in urls. removed unsused functions from views.
- Function that takes in an order_id from request and will get all information needed to create the checkout session. If session succeeds then our webhook will receive the call and update the order model.
- We have urls to create a new checkout session and and endpoint to receive webhooks.
- our stripe config to import all environment variables.
- Added url for creating checkout session and the stripe webhooks.

**Total commits:** 20

## 2025-03-05

**clothing-co/backend**

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

**clothing-co/backend**

- the canada post integration is finally working!! example api call at bottom.

**Total commits:** 1

## 2025-03-18

**2to6x_1**

- Auto-commit on 2025-03-18 14:01:57

**allauth_test**

- Auto-commit on 2025-03-18 14:02:11

**bdm**

- Auto-commit on 2025-03-18 14:02:12

**bdm_web**

- Auto-commit on 2025-03-18 14:02:13

**bdmcentral**

- Auto-commit on 2025-03-18 14:02:14

**bdmcentral1**

- Auto-commit on 2025-03-18 14:02:17

**bdmcentral2**

- Auto-commit on 2025-03-18 14:02:19

**django_tutorial**

- Auto-commit on 2025-03-18 14:04:03

**docker**

- Auto-commit on 2025-03-18 14:04:04

**download_flipbooks**

- Auto-commit on 2025-03-18 14:04:05

**immigridgeRepo**

- Auto-commit on 2025-03-18 14:04:06

**moments**

- Auto-commit on 2025-03-18 14:04:06

**postgres**

- Auto-commit on 2025-03-18 14:04:12

**python_logging**

- Auto-commit on 2025-03-18 14:04:23

**rest_api**

- Auto-commit on 2025-03-18 14:04:24

**som-archives**

- Auto-commit on 2025-03-18 14:04:25

**somfm**

- Auto-commit on 2025-03-18 14:04:36

**stripe**

- Auto-commit on 2025-03-18 14:04:37

**vehicle_dataset**

- Auto-commit on 2025-03-18 14:04:40

**Total commits:** 19

## 2025-03-20

**chrisBrownBroker/frontend**

- Added shad/cn
- Created new project with vite and added tailwind css

**Total commits:** 2

## 2025-03-22

**realty-LLM-DDF**

- Same ui split into parts. now working on the spacing.
- Its looking very nice for the ui chat. Saving my progress before disaster.

**Total commits:** 2

## 2025-03-24

**chatapp/frontend**

- Added some helper functions to /lib
- New project with vite, tailwind, shadcn.

**Total commits:** 2

## 2025-03-29

**chatUI/frontend**

- Added json renderer for our images
- Added chat topic selector
- Added Chat Message Area Component
- Added chat message component
- Added Chat Input component
- Added shad/cn
- Added tailwind css.
- Started new vite project. Copied over ts config files and vite config file. Added .gitignore and environment variables file as well.

**Total commits:** 8

## 2025-03-30

**chatUI/backend**

- The backend for our chat ui app. Working nice so far. Adding image support now. Will branch of title setting to a different call to the model. It is too liberal with the title now. Changing it multiple times per chat.

**chatUI/frontend**

- Added a chat image carousel. trying to dynamically load in images from the models response.
- Chat ui now uses the use scroll to bottom hook to do the scrolling instead of our own implementation using useEffect
- Chat ui now has the chat message actions sticky in the ui with settings for each chat.
- Chat ui is smooth scrolling and the chats are being loaded into the sidebar. Issue now is tha we must fix the virtualization
- Chat ui is working and streams the content perfectly

**resumeEditor/backend**

- The backend for our chat ui app. Working nice so far. Adding image support now. Will branch of title setting to a different call to the model. It is too liberal with the title now. Changing it multiple times per chat.

**Total commits:** 7

## 2025-03-31

**chatUI/backend**

- Added create express checkout, get canada post shipping rates and get fedex shipping rates. Along with a bunch of models, utils, exceptions. Taken from my old project.
- Changed the system prompt to better help the model response instead of doing function calls.
- Added the images and videos to the stream. separate from the text for model message. this is images and videos. we will render them in jsx renderer.

**chatUI/frontend**

- Chat section is able to return videos and images dynamically.
- Finally got the jsx renderer working on index. I will now work to merge it with the ChatSection.tsx
- Adding a jsx renderer to our chat section. It's causing errors, so adding a save before we impact too hard.

**resumeEditor/backend**

- Added create express checkout, get canada post shipping rates and get fedex shipping rates. Along with a bunch of models, utils, exceptions. Taken from my old project.
- Changed the system prompt to better help the model response instead of doing function calls.
- Added the images and videos to the stream. separate from the text for model message. this is images and videos. we will render them in jsx renderer.

**Total commits:** 9

## 2025-04-01

**chatUI/backend**

- Fixed the name of the values from Rates to rates to better match other function calls responses.
- Got the canada post shipping api to return the shipping rates back to the model when it uses the tool to get rates.

**chatUI/frontend**

- Got the shipping rate selector to send a message and return the right rate. It uses alert dialog to stop user from making too many choices and then sends the message right away to the model for a response.
- The ui now pops in a rates component to display the incoming shipping rates. Will need to further update so we can send a message to the model with the chosen rate and it will return a checkout session url to complete payment.

**resumeEditor/backend**

- Fixed the name of the values from Rates to rates to better match other function calls responses.
- Got the canada post shipping api to return the shipping rates back to the model when it uses the tool to get rates.

**Total commits:** 6

## 2025-04-02

**chatUI/backend**

- Got the stripe create express checkout session working. It now returns a checkout url as needed.

**chatUI/frontend**

- Got the checkoutAlert function working and it renders now buttons to allow the user to continue chatting or checkout.

**resumeEditor/backend**

- Got the stripe create express checkout session working. It now returns a checkout url as needed.

**Total commits:** 3

## 2025-04-03

**chatUI/frontend**

- Added product pages for our 3 products. Will now try to manage the state of each renderer separately so they do not stay static.

**Total commits:** 1

## 2025-04-04

**chatUI/backend**

- Now model function calls are saved along with their results as json so we can send to frontend as needed.

**chatUI/frontend**

- Fixed the state issue. Now we can display multiple components per chat.
- Now we added extra_data that will be sent with each message and will have the results of the function call along with the message so we can have it always on new message load.

**Total commits:** 3

## 2025-04-05

**chatUI/frontend**

- Changed the Api instance to native fetch. handled errors accordingly. Set the query key and invalidate it right before in case someone else was logged in before.

**Total commits:** 1

## 2025-04-09

**chatUI/frontend**

- Added sentry for error catching.
- Major progress. Sidebar messages fixed. Authenticated for chat fixed. Checking auth state on authenticated pages and redirecting if authenticated. We will tackle the chat id situation now.

**Total commits:** 2

## 2025-04-10

**chatUI/frontend**

- Pre vs code agent changes to streamline how we handle chat creation.

**Total commits:** 1

## 2025-04-11

**chatUI/backend**

- I made the send message view max 250 characters. Adding to frontend protection. Now will strip everything paste 250 characters. Re added product descriptions and images+videos. Collected static files to serve in prod. Most important change is that we updated all the allauth emails to now match our new style. and more...

**chatUI/frontend**

- I made the chat input take max 250 characters so user cannot spam. Added size guide table. Started unsubscribe page. and more...

**Total commits:** 2

## 2025-04-13

**chatUI/backend**

- Added feedback and data deletion models, urls, views and serializers. Final commit before prod.

**chatUI/frontend**

- Added the fonts + container to index.css. Will add meta tags to all pages.
- Added feedback and data deletion and the feedback endpoints for our backend.

**Total commits:** 3

## 2025-04-15

**chatUI/frontend**

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
- Made the video come from our backend via fetch. Much better than bundling with the frontend. Added a handleClick function to redirect to login with a toast if needed. Will need to figure out if user is authenticated, so we don't show toast as needed. Deleted the old video in public. No longer needed.
- Added index.html meta tags, changed some more parts to better match dark and light theme

**Total commits:** 16

## 2025-04-17

**chatUI/frontend**

- We now pull in an image of tracksuit and sweatsuit to display in right sidebar for the user on load.
- Added a stat's section to give quick descriptions of the values of our products. On Homepage.
- new updated hero section with better proportions and easier to read and understand. We now add that we are the first ai chat to shop interface.
- A simple email and phone number for people to reach us at. Added to homepage.
- Added a featured products section. This will alow us to display our products on the homepage. Working on a page per product.
- Added a new faq section to our homepage. It answers a bunch of questions a user might have.

**Total commits:** 6

## 2025-04-19

**chatUI/frontend**

- removed dev tools before build.
- deleted and replaced with policies/delete-my-data
- Made all link targets blank and changed which privacy url to stripe we use because other one is in french.
- Added Robots.txt
- Added website sitemap
- Added website manifest.
- removed em dashes with .
- re enabled the dev tools in dev.
- More realistic version number.
- fixed bg and text on button.
- Updated the description to be more alligned with our new about page.
- Removed em dashes and replaced them with .
- Added a function to fetch the current website visitor count and a query to subscribe and return the count. So we can display in the Announcement bar.
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

## 2025-05-08

**deenApp/frontend**

- Started new vite project. Copied over ts config files and vite config file. Added .gitignore.

**Total commits:** 1

## 2025-05-26

**2to6xRealty/backend**

- Removed the old db and redid the migrations to fix the old errors.
- Added users table and first step of the registration with models, user model, serializers, views and urls. Added tthe url to the the main project urls.
- Made first migrations
- Started work on the new realtor tools with llm help project. Started with tools and users apps. Added credit views to the tools to manage credits. Default start is 5.

**Total commits:** 4

## 2025-05-27

**2to6xRealty/backend**

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

**2to6xRealty/backend**

- About to add the llm tool settings now. We can do auth after.

**Total commits:** 1

## 2025-06-15

**2to6xRealty/backend**

- Ready to start the collaboration. Welcome my friends.

**2to6xRealty/frontend**

- Ready to start the collaboration. Welcome my friends.

**Total commits:** 2

## 2025-06-17

**hotelapp**

- Fixed some more routing issues. will fix later.
- Will add commit text later pushing to show you.
- Added the tanstack router vite plugin
- Installed tanstack router, devtools and the vite plugin
- Added onClose instead of onBack to fix type error

**Total commits:** 5

## 2025-06-23

**2to6xRealty/backend**

- Started to add auth and allauth and cors and rest framework and simple jwt settings to the project.

**Total commits:** 1

## 2025-06-25

**codkaagaHQ/frontend**

- Installed toast from shadcn. Added motion library for effects and zuustand. Added theme provider, network status toast, theme mode toggle and added them to the root route.
- Started the codkaaga app project. Using tanstack router vite app boilerplate.

**Total commits:** 2

## 2025-07-03

**videoDownload**

- created new tanstack router project with vite. I fixed the issue with the vite folder and deprecated router plugin. Added build, server, root, log level, json and app type settings to the vite.config.ts.
- moved gitignore to same dir as .git folder.
- Added a first view to create an api to use for our frontend with yt-dlp project. Added first version of the view, serializer and urls. Connected them to the main app urls.
- Added MacOS, Linux, and python files to ignore.
- initialized new venv and uv project. Installed django+restframework+corsheaders and ytdlp

**Total commits:** 5

## 2025-07-04

**videoDownload**

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

**primeCapitalLogistics/frontend**

- Merge pull request #4 from WaryaWayne/abdullah
- Updated the hyper link destination and use a new icon from lucide.
- Started to use a steps object to hold all steps and map through it. Updated the top and bottom text to better apply it to the new company.
- fixed the div id and the name of the component since it changed.
- Merge pull request #3 from WaryaWayne/ajama
- Merge pull request #2 from WaryaWayne
- Edited the title in the iframe to update the name of the company and make it more clear.
- Merge pull request #1 from WaryaWayne
- Removed the not needed link import and the empty handleNewChat function.
- Updated the featured products to add the newly available services. Also did a format on the file to clean up the look.
- Started new project. we are working on this client site. Please ask for instructions before changing. Simple frontend only react code.

**Total commits:** 11

## 2025-07-10

**primeCapitalLogistics/frontend**

- shrunk the margin and padding to allow the buttons at bottom of screen to have a good gap against the bottom. added new logo to the image source.
- updated index file to include new banner image, logo's and messaging.

**Total commits:** 2

## 2025-07-14

**primeCapitalLogistics/frontend**

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
- updated sitemap url.
- removed unused files. dont apply to this project.
- updated the robots.txt
- website banner for og and twitter tags and the hero video.
- updated manifest with new logo, shortname and name.
- Replaced logo images for the new version.

**sadexTowing/frontend**

- Added a link variant button to better see the maximum rates.
- Changed size on the index.html for the og image.
- changed accesebility so it is better adaptable on mobile. It looks much better on mobile now.
- fixed styling and the link buttons to due to changed url.
- Completed final edits to sadex towing site.

**Total commits:** 23

## 2025-07-15

**sadexTowing/frontend**

- Added new groupings for the tables to make them more clear.
- made the text black to better see the button and certificate number

**Total commits:** 2

## 2025-07-17

**ddf_project**

- syncing backend with frontend repo. Now it should work.
- Merge backend repo into main
- Merge pull request #1 from WaryaWayne/master
- we now use the next page as a url attachment proxy that will send requested url to backend and backend will return the results for easier pagination.
- added proxy_url to better manage the paginated results. our frontend will no longer try and access the ddf url itself and will instead be proxied by our backend. It will attach token and send the response data back. We now handle the auth process in utils and do proxy and other methods of filtering in our view.
- we now use an infinite query to store the data. It works better already since we see more than 5 listings. Issue now is that we try to make request and we don't have the token in frontend. will need to find a way to request to backend and proxy it back to frontend for data exchange. Added more property data on the frontend to display for every listed property.
- our listings page. This is where we make the api call to display the data as needed.
- fixed deprecated tanstack plugin and added server and build settings.
- commented out the header for dev.
- the data schemas we need to communicate with the ddf api.
- Listing frame which is the frame that will hold all of the listings when user is scrolling through.
- utility functions to help with the properties api call and filtering.
- structured the data-feed endpoints under the api/v1/ versioned api we are building.
- Added cors allowed origins to fix cors errors. Added cors middleware. Added ddf base url.
- New properties view to get the properties data and then return it to our frontend. It includes the filters we need to make custom searches.
- Added new properties url endpoint to get the properties as needed.
- Added drf xml parser to the project.
- Added the data feed urls to the main project urls.
- static files from collectstatic command.
- Added ddf credentials from .env. username and password. removed the auth classes since we aren't using that right now.
- data feed app. This is used to get access token and then place in the functions needed to refresh and maintain the token.
- added linux, python, node, mac gitignore file. Added hi-redis parser, django-redis library and pillow+requests to help us woth the requests. The projects fresh db before migrations.
- updated gitignore to match environment better with node settings. create new tester route to work with.
- Installed @types/node, then updated ts router plugin to latest version from deprecated default.
- initalized a backend with django and few modules to make a backend for out data feed.
- initialized new bun frontend project. Will use this to display feed data as we recieve it.

**ddf_project/backend_backup**

- added proxy_url to better manage the paginated results. our frontend will no longer try and access the ddf url itself and will instead be proxied by our backend. It will attach token and send the response data back. We now handle the auth process in utils and do proxy and other methods of filtering in our view.
- utility functions to help with the properties api call and filtering.
- structured the data-feed endpoints under the api/v1/ versioned api we are building.
- Added cors allowed origins to fix cors errors. Added cors middleware. Added ddf base url.
- New properties view to get the properties data and then return it to our frontend. It includes the filters we need to make custom searches.
- Added new properties url endpoint to get the properties as needed.
- Added drf xml parser to the project.
- Added the data feed urls to the main project urls.
- static files from collectstatic command.
- Added ddf credentials from .env. username and password. removed the auth classes since we aren't using that right now.
- data feed app. This is used to get access token and then place in the functions needed to refresh and maintain the token.
- added linux, python, node, mac gitignore file. Added hi-redis parser, django-redis library and pillow+requests to help us woth the requests. The projects fresh db before migrations.
- initalized a backend with django and few modules to make a backend for out data feed.

**Total commits:** 39

## 2025-07-22

**bdmcentralLatest**

- Added a scroll area and a see more button. this helps to make the order summary show up and be visible on first land on cart by the user. Now we show 1.5 products and the rest will show after see more is clicked.
- backend with media and apps.
- frontend for bdm central website. working on cart section now. almost done.

**Total commits:** 3

## 2025-07-23

**bdmcentralLatest**

- cart shipping and confirm. Our new checkout flow for the store. It will be faded into each other and unlock as you complete the other one.
- shad/cn components

**Total commits:** 2

## 2025-07-24

**bdmcentralLatest**

- Now we do email validation for invalid emails. This was handled by stripe before and now handled by us using pydantic email validate extension.
- Simplied title from secure checkout to comfirm your order. We now collect user's email and subscription status to send it to the backend when making a checkout url. Still need to make sure we remove the use effect which retriggers the call on every key stroke of email typing or status change. We need url request to happen when shipping go to pay is clicked.
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

**bdmcentralLatest**

- formatting.
- make the message more clear for the user and collect email first separately. we pass in email and subscription status as a param. This allows us to remove use effect dependencies which called our endpoint for every keystroke.

**Total commits:** 2

## 2025-07-29

**bdmcentralLatest**

- this is our v1 of the shirts page. We are working to make a page for users to visit and see our shirt product displayed with information.
- comment out /lib because it would stop our frontend /lib file from going to github.
- network status page.
- utils for shad/cn.
- Added network status monitor, added toast, added headcontent so we can import meta tags from components.
- Added toaster from shad/cn.
- removed checkout directory in routes as it wasn't needed and we won't expose that endpoint. We also moved the shipping and checkout components to /custom dir. This helps as we import from there. details page wasn't necessary. Also updated imports in cart route.
- Merge branch 'main' of github.com:WaryaWayne/BDMCentralClothingCo.
- Added branding and fixed some issues. formatted the contents. Separated the copyable code block for step 2 in backend setup. Should be 2 commands not 1. In the logs folder and files creation we also leave 2 copyable code blocks.
- Added branding and fixed some issues.
- Instaleld motion library. Added test page to see. Will be removing it.
- Merged the frontend repo with the local one. Little change i think is the addition of the /lib files which we have on .gitignore somehow right now.
- env.example and a read me for the main page of the github repo.
- Create utils.ts

**hanad**

- Added axios to the package.json file. It was missing and app would have an error.

**Total commits:** 15

## 2025-07-30

**bdmcentralLatest**

- we now use the cart store from the cart.tsx file. Added price bundle and product interfaces to the shirts file. added links to navigate to the cart page from the current page. formatting.
- formatting, both buttons will now scroll down the page. One to products and other to the product details section.
- updated to use our new global cart store as this one. So all products added to cart use this store now. did theme updates. Now it adapts to dark theme without losing any content. removed the old cart store file since its not needed.
- Added new button to scroll to the bundle area if user clicks buy now. Changed icon and text in the second button as well to better match our goals.

**Total commits:** 4

## 2025-07-31

**sadexTowing/frontend**

- page tracking, scroll tracking and event tracking functions.
- added g-tag for tracking to the index.html page.

**Total commits:** 2

## 2025-08-01

**bdmcentralLatest**

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

**primeCapitalLogistics/frontend**

- Imported trackEvent function. It wasn't initalized.
- Installed react-ga4 library.
- Scroll tracking, page views and event tracking functions to use in our app.
- Added google g-tag to index.html. This allows us to get analytics for the site. Global.d.ts allows us to use window.gtag without type errors.
- formatting, initalized react-ga4, sending web vitals to google analytics. Added Metric type to the on PerfEntry to fix type error in the main.tsx implementation.
- Formatting and added event tracking to every button.
- create a root component function and added usePageTracking() and useScrollDepthTracking() for analytics.
- Added access code and event tracking to the contact form.

**sadexTowing/frontend**

- Added outbound tag event category instead of using cta for all the events that lead out of the website.
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

**2to6xgroup**

- Added the shapes we will remove from homepage
- started new project for 2to6x group. Central Homepage for all of our operations. Each will lead to a separate subdomain.

**Total commits:** 2

## 2025-08-11

**js-backend-test**

- Started new tanstack start project with vite, tanstack, tailwind css and shad/cn.

**Total commits:** 1

## 2025-08-12

**js-backend-test**

- added better-auth library and config for the auth client instance and the auth instance. still working on the api/v1/auth/$.ts. Will need to figure out if we are to use a file route or server route.
- Added postgres adapter for the migrations cli for drizzle.
- client and server entry points for tanstack start. Our router config with formatting applied. our vite config with added server settings.
- Added drizzle to manage our bun postgresql instance. set up db instance, added file to add our schema, and the drizzle config file to tell it location of needed files. example .env file for reproducability.
- Added django, rest framework, cors, and environ.
- started new backend dir. will run a django project here.

**Total commits:** 6

## 2025-08-13

**js-backend-test**

- upgraded zod, added better-auth with the minimal config so far. Made the migrations. generated the full new schema. Exported it from the schema.ts that drizzle expects. we now import a reactStartCookies to help with cookie settings on certain functions.

**Total commits:** 1

## 2025-08-18

**js-backend-test**

- deleted files

**Total commits:** 1

## 2025-08-27

**js-backend-test**

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

**js-backend-test**

- Added a table for liked listings, removed listings, listing notes and user preferences.
- A new seo component to add to each of our pages.

**Total commits:** 2

## 2025-08-29

**js-backend-test**

- mistakes in generating the migrations. Had to many fixes. It works now.

**Total commits:** 1

## 2025-08-31

**js-backend-test**

- run script with 'bun process:properties'. This will get open the listings file and save it to the db.
- run script with 'bun get:properties'. This will get all listings from fresh again.

**Total commits:** 2

## 2025-09-01

**js-backend-test**

- migrations

**Total commits:** 1

## 2025-09-02

**js-backend-test**

- removed the splash screen from the site. It is not needed and was slowing down the ui.

**Total commits:** 1

## 2025-09-03

**js-backend-test**

- Removing all the useState and useID to instead use a form for this component.

**Total commits:** 1

## 2025-09-04

**js-backend-test**

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

**js-backend-test**

- shad/cn components
- (feat) ai-elements chat ui components.
- (feat) migrating schema changes for chat
- (feat) added user preferences and actions tables
- (feat) added chat related tables

**Total commits:** 5

## 2025-09-06

**js-backend-test**

- (feat) added a sharedChat column to the chat sessions to be able to display shared chats without checking user info.

**Total commits:** 1

## 2025-09-07

**js-backend-test**

- This is an seo utility. WE use it on pages we want seo to set meta tags and make it easier to find on search. We have a hook to return structured data and a component that will return the jsx tags.
- (feat) added left side bar
- shad/cn

**Total commits:** 3

## 2025-09-09

**js-backend-test**

- (feat) refactor chat schema to use message parts for flexible content

**Total commits:** 1

## 2025-09-12

**js-backend-test**

- (feat) custom chat area component for chat routes
- (feat) Insert and delete dialogs for the left sidebarÏ

**Total commits:** 2

## 2025-09-14

**js-backend-test**

- feat: enhance sidebar components with dynamic chat management and right sidebar
- (feat) ai sdk elements components
- (chore) installs and updates
- (feat) electric sql adapter + start and stop script
- (feat) improve tables to better work with chat

**Total commits:** 5

## 2025-09-15

**js-backend-test/newProject**

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
- (feat) added site url to client env variables
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
- (feat) electric db sql server running on docker.
- (feat) drizzle-orm + drizzle-kit + bun sql client
- (feat) added our shortcuts in package.json to manage various services.
- Added server section to vite config.
- hello, world. This is where it all starts.

**Total commits:** 32

## 2025-09-16

**js-backend-test/newProject**

- (chore) update dependencies.
- Checkpoint before breaking changes

**Total commits:** 2

## 2025-09-17

**js-backend-test/newProject**

- (feat) vite config added allowed host
- (refactor) right side bar
- (refactor) separated the title and the buttons.
- Pencil for edit icon.
- (bug) returns text now not boolean
- (feat) ssr off on chat routes.
- (refactor) chat area actions
- (refactor) chat area
- (refactor) convertToUIMessages function
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

**Total commits:** 38
