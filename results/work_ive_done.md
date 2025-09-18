## 2024-08-22

**Project 51**

- First version of models.py file
- Fist commit. created README

**Total commits:** 2

## 2024-08-24

**Project 51**

- Add User, Transaction, and TransactionStatusHistory models with timestamp management
  -- - Implement User, Transaction, and TransactionStatusHistory models with necessary fields and relationships.
  -- - Add  methods to initialize model instances and  methods for readable string representations.
  -- - Use SQLAlchemy event listeners to automatically set  and  timestamps for User and Transaction models.
  -- - Introduce  property in Transaction model to get the latest transaction status.
  -- - Add  property in TransactionStatusHistory model to calculate time since status change.

**Total commits:** 1

## 2024-08-25

**Project 51**

- Remove forms.py and models.py
- added the forms.py changes to branch master
- commit the changes to test_models.py
- added the __init__.py and the routes.py to the app directory
- Added the form and model files to the app directory instead of keeping them in main directory
- Merge commit '8ec87c5b94e0526b349d7fc83f138fe4ae7bc84b'
- Implement User and Transaction models with tests
  -- - Add User model with fields for name, username, email, password hash, phone number, and agent status
  -- - Add Transaction model with fields for sender and receiver details, amount, and status
  -- - Implement TransactionStatusHistory model to track status changes
  -- - Add relationships between User and Transaction models
  -- - Implement automatic timestamp updates for created_at and updated_at fields
  -- - Add comprehensive unit tests for User and Transaction model creation, constraints, and relationships
  -- - Include tests for unique constraints on username, email, and phone number
  -- - Test representation methods for User and Transaction models
- Merge models.py forms models branch
- Merge forms.py and test_forms.py from forms branch

**Total commits:** 9

## 2024-09-06

**Project 79**

- Set up Ruby and installed project dependencies

**Total commits:** 1

## 2024-09-09

**Project 55**

- Initialize project using Create React App

**Project 67**

- Initialize project using Create React App

**Total commits:** 2

## 2024-09-10

**Project 1**

- Initialize project using Create React App

**Project 38**

- Initialize project using Create React App

**Total commits:** 2

## 2024-09-14

**Project 56**

- Merge branch 'forms'
- Add WTForms for simple and detailed recommendation forms This commit introduces two forms using WTForms: * : This form captures the content name with basic validation requirements (data is required and has a maximum length of 255 characters). * : This form captures all fields from a potential  model (content name, type, location URL, and description). Content type and location are optional, while description has a maximum length of 1000 characters. Both forms utilize the  for form submission.
- Added some final changes to the modesl.py. 1: I removed the updated_at column because it was causing issues with the tests not being updated automatically due to environment factors
- Implemented Recommendation model for managing recommendations:
  -- Created the Recommendation model using SQLAlchemy's declarative base.
  -- Defined columns for recommendation_id, content_name, content_type, location, description, status, created_at, and updated_at.
  -- Added a constructor to initialize Recommendation instances with default values.
  -- Implemented a repr method for debugging and a to_dict method for serialization.

**Total commits:** 4

## 2024-10-04

**Project 51**

- latest

**Total commits:** 1

## 2024-10-10

**Project 21**

- Initial commit for tester

**Total commits:** 1

## 2024-10-14

**Project 10**

- installed vite run dev @latest again.
- Changed the user and admin permissions to make the user able to edit own profile and admin able to edit all profiles. Only admin can delete account.
- I tried to implement tests but will leave it for a later point. I am stuck for now. I removed the tests and will restart when fresh.
- Changed the name of the SECRET_KEY variable in settings.py. From DJANGO_SECRET_KEY to SECRET_KEY.
- Added docstrings to both signal handler functions.
- Updated URL configuration to Include ProfileViewSet. Added ProfileViewSet to handle user profiles. Updated the router to include the 'profiles' endpoint. Ensured Swagger and Redoc documentation remain accessible. This update enhances user management capabilities within the API.
- Updated ProductViewSet to restrict create, update, and delete actions to admin users only.  Implemented a featured Project 36 endpoint in ProductViewSet for retrieving featured Project 36. Refined OrderViewSet to filter orders based on the logged-in user for non-staff users. Introduced a custom permission class ?IsOwnerOrAdmin? to restrict access to order management based on ownership or admin status.Created a new permissions.py file in the orders directory containing the IsOwnerOrAdmin permission class. Changes ensure better access control for API endpoints and enhance security for order management.
- Installed drf-spectacular for API Documentation. Added Spectacular_Settings to settings.py for OpenAPI Configuration. Updates Urls.py to include endpoints for open API schema, Swagger UI, ReDoc Documentation. Set API version to 0.1.0.
- Set up Pagination with PageNumberPagination and a page size of 10. Enable filtering using DjangoFilterBackend. Configured token authentication as default authentication method.
- Added django_filters to the installed apps in settings.py.
- Migrated the updated models for profiles, orders and Project 36.
- Update email field to use EmailField for better validation. Added validation to phone number using RegexValidator for formatting of a phone number. Other fields stayed the same.
- Modified to include a nested list of images for each product. Updated serializer to include the main image and additional images.
- Create new ImageField 'main_image' in the product models.py. This will store the primary image for each product. Other fields stayed the same.
- Integrated DefaultRouter for RESTful API endpoints for Project 36 and orders. Implemented static Project 36 file serving in debug mode to facilitate local development.
- Added the Project 36 and staticfiles directories in Project 2 directory. These will let Django know where our files are and how to serve them which is why we configured MEDIA_URL and MEDIA_ROOT. We will upload images via admin panel. The /Project 36 will be base URL where uploaded files/images go. /static tells Django where to serve Project 36 files from in the browser.
- Migrated the models for Orders, Products and Profiles. Installed Pillow to handle images when storing profile pictures and product images in the database. In settings, we had a glitch where I added a comment to .env variable and it disabled the database connection suddenly.
- Added a views.py for profile app. It already had a model.py and serializers but was missing the views. I added it.
- for the settings.py we added Django rest framework configuration at the end of the file to use authentication tokens. Added rest_framework.authtoken to the installed apps in settings.py. Transfered the Secret Key and Debug settings toggle to the .env file to not hardcode values for security sake. also added profiles.apps.ProfilesConfig to installed apps when we did the profiles app.py configuration. For urls.py we added a path to the api token auth to get an auth token for the api. For orders/admin.py we added a list_display, list_filter and search fields. In orders/views.py we added a few ways to filter and search through Project 36. Product/views.py and admin.py have the same changes. Added ways to filter and seach in views and added filter options in admin.py.
- Just basic page styntax to be able to query some of our Project 36 from the Project 2 api. Issue is that it is generic and needs further work when we start the visual development.
- installed Django-filter. We used it in the views.py of Project 36 and orders apps. We used it to add some more filters to the api data in views.py.
- Added a serializer for the profiles app because we would need it to view api user data.
- Added a pagination.py file to Project 36 and orders apps. This is useful to help sort the api contents with views.py and serializer.
- Updated the model for Project 36 adding an accessory category choice, added a video_url field to hold the video of the product, added cancelled as a status choice for Orders model, i added a coupon discount field, added a notes field, for Product models, we added a active status, created a new model for product images, gave it foreign key to connect to Project 36 model, added image field to store images of Project 36. Updated the admin.py for Products allowing up to 8 images per product, created profiles model to hold user data. holds name, email, phone number, address, verification status and profile picture.
- Added a profiles app to the django project to store user information and accounts on our platform. Added it to installed apps in django settings. Added new fields to the Orders model and made migrations.
- Updated the Project 36 model to accept more fields to describe an individual product.
- Did the first migration for my models. The DB should have tables now.
- Added a dev script to package.json to support vite npm run dev. Installed Psycopg3 to connect to my Project 33 db instance. installed vite as a regular devDependencies. It wasn't installed. for the changes to app.jsx, I will cancel, it was just a test.
- Added corsheaders to installed apps list in django settings.
- We just moved the imports above first comments in views.py for both apps. We removed unnecessary imports as well. We created the first iteration of our product and order models in models.py. We installed Axios to allow React to communicate with our Project 2.
- This goes with the previous commit. Where we made cors related changes.
- Installed django-cors-headers. This will allow our Project 2 to communicate with our React Project 9. We configured the package. We added it to the settings in our django project root. Added it into MIDDLEWARE right before the CommonMiddleware line. At the end of settings file we added a CORS_ALLOW_ALL_ORIGINS = True. This will allow all origins but we must change later for security.
- Configured the urls for the API's. Set up routing for the API endpoints. Which will be /api/Project 36/ and /api/orders/.
- Added API views in both Project 36 and orders using the previously created serializers in both the apps. Very basic view now. Will need to be updated as the models are developed for both apps.
- installed DjangoRestFramework, added it to the settings in my django root folder, created a serializers.py for both orders and Project 36 apps in django project. they are basic now will need more editing.
- updated pipfile and lock
- Started the react app with vite. Initialized in the Frontend directory.
- Added the database connection (must update to current db connection). Added the apps to the installed apps in django settings.
- created a Project 36 and an orders app inside my django program. We will use these to manage the ecommerce website we're building
- Initialized Django in my Project 2 directory
- added basic files for starting structure
- Initial commit to setup Project 1_web

**Total commits:** 42

## 2024-10-15

**Project 10**

- Added 3 cards to the Project 36 list. Set to same product for now. Will be edited to be better later.
- Had a package.json in root and in Project 9 along with package-lock and node_modules folder. I combined them and kept Project 9 folder only. Added a postcss.config to configure the tailwind set up. Edited the product card to try and add a read more component to shrink description. Not working yet. Added base, componenets and utilities to index.css in /src directory to call tailwind into my project. Tailwind and vite config files were an edit to apply more config to tailwind setup.
- Add image carousel to product listing. Update ProductSerializer to include product images. Create ProductImageSerializer for handling image data. Modify ProductList component to display images in a carousel. Install and integrate react-responsive-carousel. Update fetchProducts function in App.jsx to handle image. Ensure Project 2 serves image files correctly through MEDIA_URL and MEDIA_ROOT settings. This commit enhances the product listing by adding a visual carousel of product images, improving the user experience and product presentation.
- Added throttling to the API to prevent abuse. Simplifying the registration process to only create a User object, not a full Profile. Removing the confirm_password field from the Project 2 (it's still checked in the Project 9). Created a Header, Login, Register, ProductCard and ProductList componenets for the react front end to render our Project 36. The /Project 36 product images are from a test upload in our django admin adding product. It works. Added the components to render on App.jsx and css styling in App.css.

**Total commits:** 4

## 2024-10-16

**Project 10**

- Ignore Staging Directory. Old attempt put there for reference. Decided to restart development of my React Project 9. Let's go. Hopefully works out more smooth. Using Yarn, which I installed through brew, vite, will install tailwindcss now and get to doing the config.

**Total commits:** 1

## 2024-10-22

**Project 50**

- fix: update GetQuoteForm component structure and resolve UI component imports
  -- Refactor FormField component for better reusability and maintainability.
  -- Add proper type annotations and error handling throughout the form.
  -- Update component structure to leverage shared UI components effectively.
  -- Fix import paths in GetQuoteForm component by removing @/ alias references.
  -- Create a consistent UI component structure, including basic components like Card and Input.
  -- Ensure file naming consistency across components.
  -- Update component imports in QuotePage to reflect the new structure.
  -- Improve form submission handling for a better user experience.
  -- This change resolves import issues and establishes a proper component structure for the UI elements used in the quote form, enhancing code quality and maintainability.
- changed import path for images.
- style: improve breadcrumb navigation design
  -- - Replace slash separator with chevron icon
  -- - Improve spacing and alignment of breadcrumb items
  -- - Add hover states for interactive elements
  -- - Hide breadcrumbs on home page
  -- - Format page names to be more readable
  -- - Improve accessibility with semantic HTML
  -- This change enhances the breadcrumb navigation to be more
  -- visually appealing and user-friendly while maintaining
  -- accessibility standards.
- style: improve header and navigation design
  -- - Add clickable logo that leads to homepage
  -- - Update header background to white with subtle shadow
  -- - Style navigation items with proper spacing
  -- - Make Calculators button prominent with primary color
  -- - Update footer design to be more subtle
  -- - Improve accessibility with aria attributes
  -- - Add proper hover states and transitions
  -- This change creates a more professional and user-friendly
  -- navigation experience while maintaining the purple theme.
- style: update remaining components with purple theme
  -- - Update ServicesSection with purple accents
  -- - Standardize button colors across all calculators
  -- - Update navigation links with hover effects
  -- - Add consistent border and transition effects
  -- - Implement primary color in interactive elements
  -- This change ensures visual consistency across the application
  -- with the purple, black, and white color scheme.
- style: implement purple, black and white color scheme
  -- - Add custom color configuration in Tailwind
  -- - Update components with new color scheme
  -- - Implement consistent styling across all components
  -- - Add hover states and transitions
  -- - Update form elements and buttons with new colors
  -- This change creates a cohesive visual identity using
  -- purple-500 as primary, black as secondary, and white
  -- as the base color.
- fix: resolve image import issues in gallery
  -- - Added images to the public directory instead of in src/assets/images.
  -- - Update image import method in GallerySection
  -- - Add proper image optimization support
  -- This fixes the image loading issues in the gallery section
  -- and implements proper asset handling in the project.
- improve app structure and error handling
  -- - Add ErrorBoundary component for graceful error handling
  -- - Implement proper CalculatorsPage with navigation links
  -- - Fix Router syntax error in catch-all route
  -- - Add LoadingSpinner component for async operations
  -- - Remove CSS conflicts between Tailwind and App.css
  -- - Update App component with ErrorBoundary wrapper
  -- This commit enhances the application's reliability and user experience
  -- by adding proper error boundaries, loading states, and improving the
  -- calculator section navigation.
- Refactor calculator components for improved structure, reusability, and accessibility
  -- - Created a reusable InputField component to encapsulate common input logic.
  -- - Enhanced error handling by adding validation and user-friendly error messages.
  -- - Ensured consistent styling across all calculator components.
  -- - Improved accessibility with proper labeling and ARIA attributes.
  -- Updated all calculator components (ConcreteCostCalculator, QuotationCalculator, MaterialPreparationCalculator) to utilize the new InputField component and incorporate the latest error handling and accessibility features.
- Implement Contact Us Page with form validation and Google Map embed
  -- - Created reusable ContactForm component with name, email, and message fields
  -- - Added simple client-side validation to ensure all fields are filled
  -- - Developed ContactPage to integrate ContactForm and embed Google Map
  -- - Enhanced accessibility with descriptive labels, ARIA attributes, and error messaging
  -- - Improved screen reader compatibility with detailed error messages and validation status
  -- - Ensured semantic meaning of the form through role attributes and enhanced user feedback
- Enhance Services Page and ServiceItem Component
  -- - Created the ServiceItem component to display individual services, ensuring accessibility with ARIA attributes.
  -- - Developed the ServicesPage to list all services using ServiceItem, structured for responsive design.
  -- - Improved accessibility features including ARIA roles and keyboard navigation considerations.
  -- - Added detailed documentation outlining component functionality and best practices.
- Added a picture for employee images. will need to change.
  -- Update CompanyOverview component to include detailed mission statement and company history.
  -- - Expanded the mission statement with Lorem Ipsum text.
  -- - Added information about the company's founding year and achievements.
  -- - Improved accessibility by adding an ID for the section heading.
  -- Enhance TeamMembers component with descriptive bios and improved accessibility.
  -- - Added Lorem Ipsum text to team member bios for Project 45er descriptions.
  -- - Updated the alt attribute for team member images to include their names for better screen reader support.
  -- - Included an ID for the team section heading for improved navigation.
  -- Improve CompanyHistory component to showcase the company's timeline and achievements.
  -- - Included a detailed timeline with achievements from 2010 onward using Lorem Ipsum text.
  -- - Added placeholder data for awards and recognition.
  -- - Enhanced accessibility with an ID for the history section heading.
  -- Update AboutPage component to integrate all sections with improved accessibility.
  -- - Assembled CompanyOverview, TeamMembers, and CompanyHistory components.
  -- - Ensured all sections are accessible with appropriate IDs and roles.
  -- - Maintained a clean and organized structure for better readability.
- Enhance Accessibility Across Landing Page Components
  -- 1. HeroSection:
  --    - Added role="banner" for screen readers.
  --    - Implemented aria-label on the quote button for improved context.
  --    - Ensured text contrast meets WCAG AA standards.
  -- 2. ServicesSection:
  --    - Added role="region" and aria-labelledby for better screen reader navigation.
  --    - Used <ul> and <li> for listing services to enhance semantic structure.
  -- 3. TestimonialsSection:
  --    - Added role="region" and aria-labelledby for screen reader identification.
  --    - Wrapped testimonials in <blockquote> for better semantics.
  -- 4. GallerySection:
  --    - Implemented role="region" and aria-labelledby for assistive technology.
  --    - Added descriptive alt text for each image for accessibility.
  --    - Used <figure> and <figcaption> to semantically associate images with captions.
  -- 5. LandingPage:
  --    - Ensured consistent aria-labelledby references across all sections.
  -- These changes aim to improve the overall accessibility and usability of the landing page for all users, especially those using assistive technologies.
- for Layout.tsx: I made changes to the style of the page. I added indents to parts of the path because line streched out too far.
  -- For Routers.tsx:
  -- I moved the * for 404 pages to last for style sake incase someone else needs to edit.
- Set default initialization for the pages in src/pages. Need to create them further.
  -- In Router.tsx:
  --  we edited the imports, components was mispelled as a directory and we fixed the imports there. We changed the path also. Earlier we had .pages when it should have been ..pages. Also added a calculators page link to the router.
  -- In Layout.tsx:
  -- We created the baseline layout with breadcrumbs, we added the pages available to the nav.
- Installed React Router and its Typescript type. Also created routes in the app. Pages are LandingPage, AboutPage, ServicesPage, ContactPage, NotFoundPage, CalculatorsPage. Created not found for 404. Created it under a generic route of *.
- Initial commit. Initialized React Typescript project using Yarn and Vite. Configured Tailwind css. Created the backed Project 9 directories.

**Total commits:** 17

## 2024-10-23

**Project 50**

- Created the first iteration of the 404 not found page.
  -- In Header I made the svg size 28.
- Added no wrap on whitespace to desktop nav section because the get quote button was wrapping on itself.
- Changed the burger menu icon to be more on brand. Changed it to primary color purple-500.
- Separated Header from Layout to create a Header.tsx/ It is now a responsive header.
  -- In Layout we removed header tag and imported our new Header from Header.jsx.
  -- In Testimonials, we added a location svg icon to add before the name of city Where job for client was done.
  -- In getQuoteForm we added styling to the form, we removed prvious imports of outside libraries. It is now done all on our own code.

**Total commits:** 4

## 2024-10-24

**Project 47**

- Updated the Install and Uninstall scripts along with all in the /scripts directory to be written in Bash.
- Changed the scripts to Bash. Added error handlers and more verbose while using.
- Changed tools included to Commands list.
- changed setvsenv to setVsco
- changed the names of the scripts. From imgconvert to conImg. From quickproject to defStart.
- Added execution permissions for install and uninstall scripts.

**Project 7**

- fixed last import issues I was missing.
- Implement user management features in Django app
  -- - Created a `users` app for user management.
  -- - Defined models: `User`, `UserProfile`, and `Friendship`.
  -- - Configured custom user model in `settings.py`.
  -- - Implemented user registration and authentication using Django REST Framework.
  -- - Added token authentication using SimpleJWT.
  -- - Implemented password reset functionality via email.
  -- - Set up social authentication for Facebook using django-allauth.
  -- - Updated URLs and views to support new authentication methods.
  -- - Ran migrations to apply database changes.

**Total commits:** 8

## 2024-10-26

**Project 62**

- Updated pipfile to include needed versions. Add comprehensive health checks Configure Prometheus metrics Set up monitoring thresholds Add tracing configuration Implement proper alerting thresholds
- Installed prometheus-client Add comprehensive health checks Configure Prometheus metrics Set up monitoring thresholds Add tracing configuration Implement proper alerting thresholds
- Installed django_health_check and django_promotheus. Add comprehensive health check configuration Configure monitoring metrics and APM Set up alerting thresholds Add health check endpoints Configure Prometheus metrics endpoint
- Add priority levels for different queues Configure specific task routing based on task type Set up maintenance queue for system tasks Organize tasks by priority and function Ensure proper task distribution across queues
- Add more periodic tasks for system maintenance Configure priority queues for different task types Set up proper task routing based on priority and type Add queue arguments for priority support Organize tasks into logical groups
- Add comprehensive periodic tasks for system maintenance Configure task routing with dedicated queues Add database backup and reporting tasks Implement system health monitoring Add inventory synchronization task
- Add task routing with dedicated queues for each app Implement comprehensive task monitoring Add worker shutdown handling Track task revocation events Enhance task logging with more context
- Add task routing for better organization Implement queue-specific task handling Add comprehensive task monitoring Improve error logging for Celery tasks Add task success and retry handlers
- Add missing crontab import to settings.py Add better Celery task handling and reliability settings Configure Redis connection pooling for Celery Add worker concurrency settings Implement proper Celery error logging
- Configure Celery with Redis as broker and Project 2 Set up periodic tasks with Celery Beat Configure Celery for handling emails Add task time limits and worker settings Set up auto-discovery of tasks in Django apps
- Configured the email Project 2 for the app. I added the Project 66 email for now, but we need the @Project 1central email to work.
  -- Configure SMTP email Project 2
  -- Add email template directory setting
  -- Configure rate limiting for emails
  -- Set up admin notification settings
  -- Add necessary environment variables
  -- The email settings will be used for:
  -- User registration confirmation
  -- Password reset
  -- Order confirmations
  -- Admin notifications
  -- System error notifications
- Configure Redis as the cache Project 2 with proper connection pooling Set up cache key patterns for different views Configure cache middleware settings Add cache versioning support Add necessary Redis dependencies
- Configure Redis as the cache Project 2 Add connection pooling for better performance Configure retry mechanisms for Redis Set up proper cache key patterns Add necessary Redis dependencies Installed hiredis
- Add Redis caching configuration Implement caching for list, retrieve, and featured endpoints Add cache invalidation for create/update operations Configure cache timeouts and prefixes Add proper cache dependencies Installed redis and django-redis
- Fix duplicate Project 36 handling in urls.py Add proper DRF configuration with authentication, permissions, and rate limiting Add rate limiting to protect API endpoints Add register endpoint to URLs Configure proper static file handling for both development and production
- Remove duplicate middleware entries Properly order middleware for security and performance Add comprehensive API documentation settings Configure Swagger UI with better defaults Add proper API versioning and server configurations
- I did further config on the Project 2 settings.py for the rest framework, cors headers, adding the more detailed logging. Added logging to product and order views and models.
  -- Enhancements and Security Improvements:
  -- CORS and Security Configuration:
  -- Configure CORS for Project 9 communication.
  -- Add security headers.
  -- Enable HTTPS redirects in production.
  -- Set secure cookie settings.
  -- Add HSTS configuration.
  -- Implement XSS protection.
  -- Media and Static File Handling:
  -- Configure proper Project 36 and static file handling.
  -- Add file size and type validation.
  -- Implement image optimization.
  -- Create necessary directories.
  -- Set up development Project 36 serving.
  -- Environment Variable Management:
  -- Add type checking for environment variables.
  -- Provide better error messages for missing/invalid env vars.
  -- Create a template for required environment variables.
  -- Enhance configuration robustness and type safety.
- for pipfile and lock: 	added orginal Project 2 dependencies from other project. for yarn.lock: 	added original Project 9 dependencies from other project.
  -- for Project 2 we configured the Project 36 API, serializers, permissions, models, views, urls and settings.
  -- 	set up Project 2 to use a sqlite database for this project since it will be simple static site.
  -- for Project 9 we fixed up the configuration files. Haven't started development yet.
- Initial commit to setup Project 1_website_project

**Total commits:** 19

## 2024-10-28

**Project 13**

- This is the point where level 2 in the rest framework tutorial. Starting level 3.
- THis is the point level 1 of restapi django tutorial ends.

**Project 35**

- Installed django rest framework. Added it to installed files. Configured the cors settings in production.py
  -- Added api-auth to my urls path.
  -- Changed all imports for the apps to apps.{app_name}. Had trouble importing them.
  -- Added a debug import to base.py. It was not starting server without it. Debug is positive in development and false is production.
  -- In URLs, changed how we used debug from base and used default settings.
- I fought the whole day to get this django Project 2 done. This will be my default config for now. I made sure to check every available setting and choose the ones that apply to me. I separated the settings.py into settings dir that has base, development and production.
- Initial commit to setup Project 1central

**Total commits:** 5

## 2024-10-29

**Project 13**

- Renamed project folder to rest_framework so i can use graphQL in the same folder.
- Completed level 6 of the rest api tutorial. We saw viewsets to simplify code to write as far as permissions. We also used only project/urls.py for this api and it set the url paths automatically once we connected it to a route. Genius.
- They did a nice thing I never saw before. Bonding viewsets to URLs in our apps/urls.py file.
  -- Then they used a router in project/urls.py where they cancelled all that out and said that we should use routers.
  -- They said using routers and viewsets is quicker than creating our own views but using a viewset is less explicit than building our own API views individually.
  -- I will opt for viewsets and routers.
- We just finished part 5 of the django Rest-api tutorial. I made considerable progress. We now made navigating the API very easy because it is through hyperlinks. WE are having trouble now though. THe highlight portion is not working due to failed imports at the start and me changing the project requirements. We cannot do highlight but otherwise, all is functional.
- Completed part 4 of the Rest-api tutorial. Now we configured our endpoint: 	To have authentication, 	Ability of a user to create a product 	Only that user can delete a product 	We can interface with the api using our url endpoints. 	We set a connection between users and the product they post. Wanted to make it brand but it got away from me.
- About to start part 4 of the tutorial. Turned many lines of code into 3. Crazy.
- This is 3.5 They showed us how to use mixins and we are about to go into using generic class based views.

**Project 47**

- Updated and added a closing } to defStart. Accidently removed it on last iteration.
- Updated the djangoReact script: 	Removed the pipenv run command and instead we are now using the default python manage.py start app with chosen app names. 	Added a 'Remember to register it' to the apps creation message.
  -- These changes make the config better and stop the extra pipenv messages in the terminal during app creation.

**Total commits:** 9

## 2024-10-30

**Project 37**

- Initial commit to setup Project 37

**Total commits:** 1

## 2024-10-31

**Project 17**

- turned part 1 of tutorial into into a version1 folder. copied the index.html, main.js and deleted copy of preload.js.

**Project 25**

- Initial commit. Just getting started on Project 25. Hoping for big things here.
  -- Done so far:
  --             - Project scaffolding with all dependencies
  --             - Basic Electron window displaying React app
  --             - Development environment configuration
  --             - Git repository initialized with .gitProject 18
  --             - README.md with setup instructions

**Total commits:** 2

## 2024-11-05

**Project 40**

- Initialized our Project 2. default django project with Project 36 app. We will set up a boiler plate to add Project 40 to our projects in the future.

**Total commits:** 1

## 2024-11-06

**Project 20**

- - I deleted the old db and redid the migrations because I got out of order on a migration and I got stuck. - Added django-cors-headers and configured it for now to allow all origins. Will configure to only allow from our site when the time is right for production. - Markdown to help visualize api data in admin. - django-filter. Got it to be able to filter the api data being sent by Project 2. Will fully configure before this commit. - djangorestframework: Set up simple jwt auth. Configured routes to expose for the react app. Put the routes we made with all auth, now available via api. - djangorestframework-simplejwt: Used this library for the jwt integration. - django-rest-authtoken: Used this library to create an auth token for us on server side to avoid doing it on client.
  -- - Admin.py: Registered an appointments and services for our company Project 36. These are part of a group of files. THis is final part of registering our models.
  -- - Created a services and appointments filter to filter through some of our services and appointments past, present, and future. It is simple now will update later.
  -- - Created a services and appointments modesl to hold our data about appointments and services we offer.
  -- - We created serializers to parse our api data from the model fields and tables.
  -- - In app/urls.py we added a '' to capture all routes in the app and we imported in in the project/urls.py as /api
  -- - Created the appointment and services views. They have ordering fields, filter_class and permission_classes to access it.
  -- - In urls.py, we removed all the unused imports, we added the new /api endpoint from our django-filter setup.
  -- - In prod.py I set debug = False (lol)
  -- - In base.py (lots of changes):
  -- 	- added django.contrib.sites to installed apps.
  -- 	- configured our cors header. Set it to allow all origins now in base, will move it to dev and prod and set individual settings.
  -- 	- configured rest_framework, dj_rest_auth, dj_rest_auth.registration, django-filters, rest_framework.authtoken, rest_framework_simplejwt. I added this group to installed apps.
  -- 	- allowed all origins from cors for now in development. Commented out the rest of cors headers settings
  -- 	- added cors middleware for cors configuration.
  -- 	- Set a site_id = 1 for base.py because this is our main site.
  -- 	- I set extensive JWT settings:
  -- 		- We set yes to use jwt, add Project 66_ before access and refresh token name
  -- 		- set password reset to not log you out, set old password field to on on change password request.
  -- 	- used jwt for rest framework auth, added ordering filters to default filter class, used json renderer and parser class, and set only authenticated users have permission to interact with api.
  -- 	- Completed set up in base.py for django-filters. We will improve them later as we go.
- Fully configured Django-Allauth. I went through every setting and enabled what we needed. I got google api for log in with google. got a client id and secret to implement the button. I signed up for the facebook developer account. I made the Project 66 ottawa page. There is no credentials just javascript to implement in react. TODO. I added some libraries: django-hashid-field. This is to opfuscate the user id field in our tables, so someone can't use sequential attacks to get data from our api. fido2 for local host development due to lack of https. Added and configured fully the social account and the mfa for django-allauth. All in base.py. Must still move some requirements to to development or production from base.

**Total commits:** 2

## 2024-11-07

**Project 20**

- - Re ran the migrations. Renamed dev database with a dev_ before the name. Left production database name as is. - Configured some of the settings to be dev and prod independant. Will need to go through Django docs and configure more of the settings right now. - Added cors to dev and prod only. - Added the hash_id salt to have a different dev and prod values and load them in separately via .env file. - Added some comments to lines missing comments. - Took the https settings to prod and left dev to http. - Turned account login on email confirmation on. - Set email password reset timeout to half. 5 mins instead of 10. - We forced remember sessions to on. - Redirect urls need to be dashboard for login, welcome route for email confirmation. Logout send users to homepage. - Made min length of usersname 4 instead of 6. - MFA_WEBAUTHN_ALLOW_INSECURE_ORIGIN is removed from base. Added to dev as - Added a secret key for dev and prod in both folders different values. - Added * allowed hosts for dev purposes. Made it empty for prod because only our domain should access. - Made the static and Project 36 dirs but will change them now.

**Total commits:** 1

## 2024-11-13

**Project 32**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to Project 2/core to hold static content. - Added a Project 36 directory to Project 2/core to hold Project 36. - Added a staticfiles direcotry to Project 2/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.

**Project 61**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to Project 2/core to hold static content. - Added a Project 36 directory to Project 2/core to hold Project 36. - Added a staticfiles direcotry to Project 2/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.

**Project 69**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to Project 2/core to hold static content. - Added a Project 36 directory to Project 2/core to hold Project 36. - Added a staticfiles direcotry to Project 2/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.

**Project 78**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to Project 2/core to hold static content. - Added a Project 36 directory to Project 2/core to hold Project 36. - Added a staticfiles direcotry to Project 2/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.

**Project 83**

- - Changed the allowed_hosts and debug variables to be loaded from the environment files instead of hardcoded. - Added a static directory to Project 2/core to hold static content. - Added a Project 36 directory to Project 2/core to hold Project 36. - Added a staticfiles direcotry to Project 2/core when we collect all static files across apps. - Added a static_files_dirs to be look for static content in core/static.
- - Sample environment file to add to the repo when installing it on a new machine. - Doing this so we can keep track of all the environment variables as they change between environments.

**Total commits:** 10

## 2024-11-14

**Project 32**

- - Added site ID beside sitename at the top. Removed some extra comments at the top beside site name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**Project 61**

- - Added site ID beside sitename at the top. Removed some extra comments at the top beside site name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**Project 69**

- - Added site ID beside sitename at the top. Removed some extra comments at the top beside site name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**Project 78**

- - Added site ID beside sitename at the top. Removed some extra comments at the top beside site name. - changed allowed hosts to use os.environ.get because the allowed hosts is a list and we need the environment to parse it. - Added the mapp I used to set up all auth. Added user sessions, mfa, social login, and regular profiles. We configured it for facebook and google now. - Added middleware. 1 for user tracking because we will track session activity and another to log in with username. - Turned app dirs to true and added a route for our templates folder which is in the base directory. - Changed language code from en_us to en_ca. - Changed timezone to America/Toronto because we are in this zone and do not need utc because of global users. - At the bottom is our configuration for all auth. We configured the settings from the documentation we thought we would need.
- - Added the path for our headless all auth urls.
- - Added MFA as an extra for django all auth. We will use it to secure the admin page.
- - Made this because facebook needs a locale to be provided, so that it can configure the login based on users location. - We made a simple view that will first check the session for a language, if not found it will check the header. - It will map fr_CA to French adn en_CA to English. We will be using English and French to start.
- - Added google client id and secret to the app in settings.SOCIAL_PROVIDERS. - Added facebook app id and app secret in the same place. We import them a senviroment values.
- - Added a socialaccount extra to the django-allauth installation.
- example .env file to be a template to fill in with different data on the server. Makes it easier than finding all the references.
- - Added the 'Regular Accounts' part of the all-auth docs into my project settings by looking at their configuration options.
- I installed requests, requests-oauthlib and pyjwt to start the configuration for our django all auth. Also installed django-allauth default for now. We will add the social and mfa portions when we get there.

**Project 83**

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

**Project 32**

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
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our Project 9 react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from Project 36 and static root. Now it is BASE_DIR / Project 36/static - Removed the facebook and google social account providers auth Project 2s. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Project 61**

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
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our Project 9 react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from Project 36 and static root. Now it is BASE_DIR / Project 36/static - Removed the facebook and google social account providers auth Project 2s. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Project 69**

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
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our Project 9 react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from Project 36 and static root. Now it is BASE_DIR / Project 36/static - Removed the facebook and google social account providers auth Project 2s. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Project 78**

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
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our Project 9 react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from Project 36 and static root. Now it is BASE_DIR / Project 36/static - Removed the facebook and google social account providers auth Project 2s. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Project 83**

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
- - Installed django rest auth to expose the all-auth urls path as an api. - Installed rest framework to send data as an api to our Project 9 react project. - installed django-filter to be able to break down the filter categories of our api data before a user makes a call. We won't have to send everything at once, just what they ask for. - Installed markdown, it will help render the markdown on our api routes better.
- - Added static processors in templates. For us to be able to locate static files. - Removed the os.path.join from Project 36 and static root. Now it is BASE_DIR / Project 36/static - Removed the facebook and google social account providers auth Project 2s. It was causing issues and isn't needed. - Configured allauth to be headless only. - Added csrf trusted origins. Not necessary just for local development to sign into the admin page.
- - Added back the default accounts/ path because it is still used for social auth. - Added some comments

**Total commits:** 100

## 2024-11-17

**Project 32**

- - Removed a space.

**Project 47**

- - Directory is called dev-tools not Project 47. Fixed the speling issue.
- - Improved the install script to allow users to install only chosen scripts. They won't have to install all the scripts at once anymore. They can choose which ones they want.

**Project 61**

- - Removed a space.

**Project 69**

- - Removed a space.

**Project 78**

- - Removed a space.

**Project 83**

- - Removed a space.

**Total commits:** 7

## 2024-11-18

**Project 32**

- - Added Project 40 settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with Project 40. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the Project 40 Python Library.
- - Added Project 40 webhook secret, Project 40 public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react Project 9. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from Project 2 to Project 9. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Project 61**

- - Added Project 40 settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with Project 40. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the Project 40 Python Library.
- - Added Project 40 webhook secret, Project 40 public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react Project 9. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from Project 2 to Project 9. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Project 69**

- - Added Project 40 settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with Project 40. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the Project 40 Python Library.
- - Added Project 40 webhook secret, Project 40 public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react Project 9. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from Project 2 to Project 9. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Project 78**

- - Added Project 40 settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with Project 40. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the Project 40 Python Library.
- - Added Project 40 webhook secret, Project 40 public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react Project 9. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from Project 2 to Project 9. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Project 83**

- - Added Project 40 settings on the botton with a debug - MAde cookie settings lax in debug true and strict in debug false. - Added the one webhook secret. - Black formatting.
- - Added the payments urls to the api root. - Added payments path to the main api/v1 path.
- - Created an admin panel for our services app. - It will list all of our services and their subcategories. - It will track the payments connected to the services. - Black formatting.
- - Added custom css for an added admin panel setting. - Moved it to staticfiles directory from static.
- - configured the payments app to integrate with Project 40. - It will track payments, connect it to users and services and appointments. - We will be able to manage payments in the admin console. - Created filters to be able to track payments and varied by day, week or month views. - Black formatting.
- - Installed the Project 40 Python Library.
- - Added Project 40 webhook secret, Project 40 public and secret key to environment.
- - Custom css to go with our admin panel for our payments section of admin panel.
- Key features of this admin setup: PaymentAdmin: 	Custom date range filter 	Status badges with colors 	Links to Stripe dashboard 	Links to related appointments 	Comprehensive search CustomerPaymentProfileAdmin: 	Overview of customer payment history 	Links to detailed payment lists 	Read-only fields for calculated values PaymentAnalyticsAdmin: 	Daily analytics view 	Success rate calculation 	Read-only fields 	No manual creation/deletion
- Key changes and additions: PaymentStatus - Enum for tracking payment statuses CustomerPaymentProfile: 	Tracks total spent per customer 	Updates automatically when payments are made 	Links to the user model PaymentAnalytics: 	Daily analytics tracking 	Will be updated via webhook handlers 	Stores key metrics for admin dashboard
- Key changes and additions: Updated Appointment Model: 	Added payment tracking fields 	Integration with Stripe models (PaymentIntent and Charge) 	Automatic price calculation 	Payment profile update logic
- - Changed the Debug settings because it wasn't responsing to it last time due to true being sent as a string. - Added blog and services apps to INSTALLED_APPS. - Black formatting. - Added Cors allowed origins which locally is our react Project 9. - We allow all cors methods. - We allow all cors headers. - We restrict cors to apply to all urls past /api/. Good for security. - Added a major update where we made an if debug block, certain less secure settings will apply. Else they will go back to secure.
- - Installed Django-cors-headers to secure sending api data from Project 2 to Project 9. - Instaleld Pillow to be able to use ImageField in our database models when storing images for our services. - Installed Black for formatting.
- - All changes are Black formatting. - Included in static files is a bit of custom css we added to upgrade the admin panel.
- - Created our services app. Separated into services, service zones and appointments. - We added custom filters, with a serviceviewset and a appointmentviewset.
- - Created our blogs app. Separated into topics and posts. - We added custom pagination, with a postviewset and a topicviewset.

**Total commits:** 80

## 2024-11-25

**Project 73**

- - Default configuration for a basic yarn, vite react ts project. - Created it with yarn. Added tailwind for styling. It is still in raw format.

**Total commits:** 1

## 2024-11-27

**Project 3**

- - Created basic starting structure to develop our project. Ran the python file in scripts/.
- - Created python script to generate the project structure in src/. - It will add a {dirName}Notes.md file to each directory to help document it.
- Initial Commit. Set up the base React TS project with Vite, Yarn, and Tailwindcss. About to run the script in /scripts directory to initialize the starting structure.

**Project 32**

- - Temporary comit to revert back to if composer causes issues.

**Project 61**

- - Added psycopg2 for django to communicate with Project 33ql when we switched from sqlite.

**Project 65**

- - Created basic starting structure to develop our project. Ran the python file in scripts/.
- - Created python script to generate the project structure in src/. - It will add a {dirName}Notes.md file to each directory to help document it.
- Initial Commit. Set up the base React TS project with Vite, Yarn, and Tailwindcss. About to run the script in /scripts directory to initialize the starting structure.

**Project 69**

- - Added psycopg2 for django to communicate with Project 33ql when we switched from sqlite.

**Project 78**

- - Temporary comit to revert back to if composer causes issues.

**Project 83**

- - Added psycopg2 for django to communicate with Project 33ql when we switched from sqlite.

**Total commits:** 11

## 2024-12-03

**Project 16**

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

**Project 3**

- refactor(auth): improve authentication context organization and fix fast refresh
  -- - Split AuthContext into separate files for better organization:
  --   - AuthContextDefinition.ts: Types and context creation
  --   - AuthContext.tsx: Provider component only
  --   - useAuth.ts: Custom hook for consuming context
  -- - Fix Fast Refresh by moving context definition out of component file
  -- - Update imports in components to use new useAuth location
  -- - Remove duplicate type declarations and unused imports
  -- - Implement cookie-based token storage instead of localStorage
  -- - Add proper TypeScript types and error handling
  -- - Add loading state during initial auth check
  -- Components updated:
  -- - LoginForm
  -- - RegisterForm
  -- - useAuthGuard
  -- This change improves code organization, type safety, and development experience
  -- with working Fast Refresh while maintaining all existing functionality.
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

**Project 61**

- Enhance service, vehicle, and appointment management with new models and validations
  -- Service Enhancements:
  --         Added Project 40_product_id and validation for the service subtypes.
  --         Introduced vehicle_type to ServiceSubtype to categorize services based on vehicle types (Sedan, SUV, etc.).
  --     New Vehicle and Appointment Models:
  --         Vehicle Catalog: Added model to store information about vehicle types (make, model, trim, year).
  --         Vehicle Info: Linked users to specific vehicles, capturing catalog information along with the license plate and color.
  --         Service Address: Linked users to service addresses, including optional geolocation (latitude, longitude) and additional instructions.
  --         Appointment: Enhanced appointment model to include:
  --             Associated vehicle_info and service_address.
  --             payment_status field and final_payment_amount with validation for final payment.
  --             Generated unique sqid for each appointment.
  --             Added validation to ensure appointment times are correctly set and consistent with service zones and subtypes.
  --             Automated appointment end time based on the service duration.
  --             Updated save() method to generate sqid and handle the automatic assignment of scheduled_end.
  --     Validation Enhancements:
  --         Implemented additional validation in Appointment.clean() to check appointment start/end times, availability in service zone, and validity of service subtype.
  --     Stripe Integration:
  --         Incorporated Project 40_product_id for service subtypes to link with Stripe Project 36.
  --     feat(vehicle): Update VehicleCatalog model
  -- 	Increase vehicle_class field max_length to 50 characters
  -- 	Add 'SPECIAL_PURPOSE_VEHICLE' to choices
  -- 	Update field structure to match CSV format (model and trim fields)
  -- 	Add proper Meta class configuration for ordering and uniqueness
  --     Model Meta and __str__ Updates:
  --         Added verbose names and ordering for new models.
  --         Updated __str__ methods to provide more meaningful string representations for VehicleCatalog, VehicleInfo, ServiceAddress, and Appointment.
- Update Django settings for production deployment and enhance environment-specific configurations     Site Configuration:         Changed SITE_ID from 1 to 5, to correctly identify the site for authentication.
  -- Database Configuration:
  --         Switched the database engine from SQLite to PostgreSQL for production.
  --         Added environment variable support for database credentials (DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT).
  --     Installed Apps:
  --         Uncommented the django.contrib.sites app to enable multi-site support.
  --     CORS Settings:
  --         Updated CORS_ALLOWED_ORIGINS to handle both local development (http://192.168.2.40) and production (https://Project 66.com).
  --         Set CORS_ALLOW_METHODS and CORS_ALLOW_CREDENTIALS for more specific CORS control.
  --     JWT Authentication:
  --         Updated SIMPLE_JWT settings to:
  --             Increase ACCESS_TOKEN_LIFETIME to 30 minutes.
  --             Enable token rotation and blacklisting for refresh tokens.
  --             Include audience, algorithm, and token signing keys for JWT.
  --     Stripe Integration:
  --         Added support for separate Stripe test and live modes.
  --         Configured environment variables for Stripe keys (STRIPE_TEST_SECRET_KEY, STRIPE_TEST_PUBLIC_KEY for test; STRIPE_SECRET_KEY, STRIPE_PUBLIC_KEY for live).
  --         Added Stripe webhook secret configuration (STRIPE_TEST_WEBHOOK_SECRET for test, STRIPE_WEBHOOK_SECRET for live).
  --     Email Configuration:
  --         Configured AWS SES for email sending, including SMTP settings and credentials for production (AWS_SES_SMTP_USER, AWS_SES_SMTP_PASSWORD).
  --         Set DEFAULT_FROM_EMAIL and REPLY_TO_EMAIL from SES verified addresses.
  --     Frontend and Password Reset URLs:
  --         Added support for environment-specific Project 9 URLs (http://192.168.2.40 for development and https://Project 66.com for production).
  --         Configured password reset URLs to reflect the correct Project 9 based on the environment.
  --     Security and Session Handling:
  --         Updated CSRF_COOKIE_SECURE, SESSION_COOKIE_SECURE, and CSRF_COOKIE_HTTPONLY for production.
  --         Set SESSION_COOKIE_HTTPONLY and CSRF_USE_SESSIONS to proper values for production deployment.
  --         Added more robust settings for multi-factor authentication (MFA).
- - Services app migrations.
- - Favicon to stop that 404 response to the browser. Favicon set by React Project 9.
- Enhance payment handling with validation and refund support
  -- Refactored the CustomerPaymentProfileSerializer to include user-specific fields like total_spent and last_payment_date.
  --     Added PaymentWriteSerializer with validation logic:
  --         Ensures the appointment is linked to the user making the payment.
  --         Prevents double payments for appointments that are already marked as PAID.
  --         Verifies that the payment amount matches the calculated appointment price.
  --     Introduced PaymentRefundSerializer to handle refunds, with validation to ensure:
  --         Refund amounts cannot exceed the original payment amount.
  --         Refunds are only allowed for payments with PAID status.
  --     Integrated AppointmentReadSerializer in PaymentReadSerializer to include appointment details in payment data.
  --     Removed redundant PaymentAnalyticsSerializer and other unused fields from the serializers.
- Refactor serializers and add vehicle/address handling to Appointment     Replaced timezone.now() with now() and timezone.make_aware() for consistent timezone handling.     Added VehicleInfo and ServiceAddress to AppointmentWriteSerializer to support vehicle and address fields.     Updated the create() method to handle creation of associated VehicleInfo and ServiceAddress models.     Enhanced validation for service availability and appointment time constraints.     Cleaned up redundant code for date/time handling and serializer fields.
- - Added Project 40 test secret key. - Added Project 40 public key, webhook secret and testing webhook secret.
- - Added verbose name to Services and Payments apps.py. This will help us recognize it as we grow.
- - Removed the timezone.now and replaced it with now(). - We import now from django.utils.timezone. - We use now() as the time function and variable to load into our filters.
- - Sample images we used when adding our services to the admin panel. Can be changed anytime.
- - This was never meant to be commited. This is a dump data of our sessions data when we did db migration from sqlite to Project 33.
- - Deleted migrations for welcome app. It has been redone.
- - Project static files. From all auth, from our owns apps and from the other apps our project installed and is using.
- feat(vehicle): Add CSV import command - Create Django management command for vehicle data import - Add data cleaning and validation - Handle special purpose vehicles with normalization - Add progress tracking and error reporting - Implement get_or_create logic to avoid duplicates - Added dataset to the commit.
- - Migrations for the services app.
- feat(vehicle): Update admin configuration - Add VehicleCatalogAdmin for managing vehicle catalog entries - Update VehicleInfoAdmin to use new model structure - Add custom display methods for related vehicle fields - Update list filters and search fields for better admin usability
- feat(vehicle): Add vehicle catalog API routes - Add endpoint for retrieving vehicle makes - Add endpoint for retrieving models by make - Add endpoint for retrieving years by make and model - Add endpoint for retrieving trims with vehicle details
- feat(vehicle): Add vehicle catalog API endpoints - Add get_vehicle_makes endpoint for unique manufacturers - Add get_vehicle_models endpoint filtered by make - Add get_vehicle_years endpoint filtered by make and model - Add get_vehicle_trims endpoint with vehicle details
- - Error template files for 500, 502, 503 and 504.
- - Added the password reset api view to the welcome app. We had no other place to put it without mixing up with other apps.
- - Added password reset urls because they were needed for the forgot password flow. - Changed payments to separate the payments and webhooks and simplified it. - Re-added our csrf endpoint so we can get the token to make requestst to Project 2. - Added app name before the url config because we set an app name in each of the apps urls.
- - Blog configuration. Still not 100% finished. First need to start implementing the Project 9 blog.

**Project 65**

- refactor(auth): improve authentication context organization and fix fast refresh
  -- - Split AuthContext into separate files for better organization:
  --   - AuthContextDefinition.ts: Types and context creation
  --   - AuthContext.tsx: Provider component only
  --   - useAuth.ts: Custom hook for consuming context
  -- - Fix Fast Refresh by moving context definition out of component file
  -- - Update imports in components to use new useAuth location
  -- - Remove duplicate type declarations and unused imports
  -- - Implement cookie-based token storage instead of localStorage
  -- - Add proper TypeScript types and error handling
  -- - Add loading state during initial auth check
  -- Components updated:
  -- - LoginForm
  -- - RegisterForm
  -- - useAuthGuard
  -- This change improves code organization, type safety, and development experience
  -- with working Fast Refresh while maintaining all existing functionality.
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

**Project 69**

- Enhance service, vehicle, and appointment management with new models and validations
  -- Service Enhancements:
  --         Added Project 40_product_id and validation for the service subtypes.
  --         Introduced vehicle_type to ServiceSubtype to categorize services based on vehicle types (Sedan, SUV, etc.).
  --     New Vehicle and Appointment Models:
  --         Vehicle Catalog: Added model to store information about vehicle types (make, model, trim, year).
  --         Vehicle Info: Linked users to specific vehicles, capturing catalog information along with the license plate and color.
  --         Service Address: Linked users to service addresses, including optional geolocation (latitude, longitude) and additional instructions.
  --         Appointment: Enhanced appointment model to include:
  --             Associated vehicle_info and service_address.
  --             payment_status field and final_payment_amount with validation for final payment.
  --             Generated unique sqid for each appointment.
  --             Added validation to ensure appointment times are correctly set and consistent with service zones and subtypes.
  --             Automated appointment end time based on the service duration.
  --             Updated save() method to generate sqid and handle the automatic assignment of scheduled_end.
  --     Validation Enhancements:
  --         Implemented additional validation in Appointment.clean() to check appointment start/end times, availability in service zone, and validity of service subtype.
  --     Stripe Integration:
  --         Incorporated Project 40_product_id for service subtypes to link with Stripe Project 36.
  --     feat(vehicle): Update VehicleCatalog model
  -- 	Increase vehicle_class field max_length to 50 characters
  -- 	Add 'SPECIAL_PURPOSE_VEHICLE' to choices
  -- 	Update field structure to match CSV format (model and trim fields)
  -- 	Add proper Meta class configuration for ordering and uniqueness
  --     Model Meta and __str__ Updates:
  --         Added verbose names and ordering for new models.
  --         Updated __str__ methods to provide more meaningful string representations for VehicleCatalog, VehicleInfo, ServiceAddress, and Appointment.
- Update Django settings for production deployment and enhance environment-specific configurations     Site Configuration:         Changed SITE_ID from 1 to 5, to correctly identify the site for authentication.
  -- Database Configuration:
  --         Switched the database engine from SQLite to PostgreSQL for production.
  --         Added environment variable support for database credentials (DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT).
  --     Installed Apps:
  --         Uncommented the django.contrib.sites app to enable multi-site support.
  --     CORS Settings:
  --         Updated CORS_ALLOWED_ORIGINS to handle both local development (http://192.168.2.40) and production (https://Project 66.com).
  --         Set CORS_ALLOW_METHODS and CORS_ALLOW_CREDENTIALS for more specific CORS control.
  --     JWT Authentication:
  --         Updated SIMPLE_JWT settings to:
  --             Increase ACCESS_TOKEN_LIFETIME to 30 minutes.
  --             Enable token rotation and blacklisting for refresh tokens.
  --             Include audience, algorithm, and token signing keys for JWT.
  --     Stripe Integration:
  --         Added support for separate Stripe test and live modes.
  --         Configured environment variables for Stripe keys (STRIPE_TEST_SECRET_KEY, STRIPE_TEST_PUBLIC_KEY for test; STRIPE_SECRET_KEY, STRIPE_PUBLIC_KEY for live).
  --         Added Stripe webhook secret configuration (STRIPE_TEST_WEBHOOK_SECRET for test, STRIPE_WEBHOOK_SECRET for live).
  --     Email Configuration:
  --         Configured AWS SES for email sending, including SMTP settings and credentials for production (AWS_SES_SMTP_USER, AWS_SES_SMTP_PASSWORD).
  --         Set DEFAULT_FROM_EMAIL and REPLY_TO_EMAIL from SES verified addresses.
  --     Frontend and Password Reset URLs:
  --         Added support for environment-specific Project 9 URLs (http://192.168.2.40 for development and https://Project 66.com for production).
  --         Configured password reset URLs to reflect the correct Project 9 based on the environment.
  --     Security and Session Handling:
  --         Updated CSRF_COOKIE_SECURE, SESSION_COOKIE_SECURE, and CSRF_COOKIE_HTTPONLY for production.
  --         Set SESSION_COOKIE_HTTPONLY and CSRF_USE_SESSIONS to proper values for production deployment.
  --         Added more robust settings for multi-factor authentication (MFA).
- - Services app migrations.
- - Favicon to stop that 404 response to the browser. Favicon set by React Project 9.
- Enhance payment handling with validation and refund support
  -- Refactored the CustomerPaymentProfileSerializer to include user-specific fields like total_spent and last_payment_date.
  --     Added PaymentWriteSerializer with validation logic:
  --         Ensures the appointment is linked to the user making the payment.
  --         Prevents double payments for appointments that are already marked as PAID.
  --         Verifies that the payment amount matches the calculated appointment price.
  --     Introduced PaymentRefundSerializer to handle refunds, with validation to ensure:
  --         Refund amounts cannot exceed the original payment amount.
  --         Refunds are only allowed for payments with PAID status.
  --     Integrated AppointmentReadSerializer in PaymentReadSerializer to include appointment details in payment data.
  --     Removed redundant PaymentAnalyticsSerializer and other unused fields from the serializers.
- Refactor serializers and add vehicle/address handling to Appointment     Replaced timezone.now() with now() and timezone.make_aware() for consistent timezone handling.     Added VehicleInfo and ServiceAddress to AppointmentWriteSerializer to support vehicle and address fields.     Updated the create() method to handle creation of associated VehicleInfo and ServiceAddress models.     Enhanced validation for service availability and appointment time constraints.     Cleaned up redundant code for date/time handling and serializer fields.
- - Added Project 40 test secret key. - Added Project 40 public key, webhook secret and testing webhook secret.
- - Added verbose name to Services and Payments apps.py. This will help us recognize it as we grow.
- - Removed the timezone.now and replaced it with now(). - We import now from django.utils.timezone. - We use now() as the time function and variable to load into our filters.
- - Sample images we used when adding our services to the admin panel. Can be changed anytime.
- - This was never meant to be commited. This is a dump data of our sessions data when we did db migration from sqlite to Project 33.
- - Deleted migrations for welcome app. It has been redone.
- - Project static files. From all auth, from our owns apps and from the other apps our project installed and is using.
- feat(vehicle): Add CSV import command - Create Django management command for vehicle data import - Add data cleaning and validation - Handle special purpose vehicles with normalization - Add progress tracking and error reporting - Implement get_or_create logic to avoid duplicates - Added dataset to the commit.
- - Migrations for the services app.
- feat(vehicle): Update admin configuration - Add VehicleCatalogAdmin for managing vehicle catalog entries - Update VehicleInfoAdmin to use new model structure - Add custom display methods for related vehicle fields - Update list filters and search fields for better admin usability
- feat(vehicle): Add vehicle catalog API routes - Add endpoint for retrieving vehicle makes - Add endpoint for retrieving models by make - Add endpoint for retrieving years by make and model - Add endpoint for retrieving trims with vehicle details
- feat(vehicle): Add vehicle catalog API endpoints - Add get_vehicle_makes endpoint for unique manufacturers - Add get_vehicle_models endpoint filtered by make - Add get_vehicle_years endpoint filtered by make and model - Add get_vehicle_trims endpoint with vehicle details
- - Error template files for 500, 502, 503 and 504.
- - Added the password reset api view to the welcome app. We had no other place to put it without mixing up with other apps.
- - Added password reset urls because they were needed for the forgot password flow. - Changed payments to separate the payments and webhooks and simplified it. - Re-added our csrf endpoint so we can get the token to make requestst to Project 2. - Added app name before the url config because we set an app name in each of the apps urls.
- - Blog configuration. Still not 100% finished. First need to start implementing the Project 9 blog.

**Project 70**

- - Pipfile and lock. We are using pipenv to manage the virtual environment.

**Project 83**

- Enhance service, vehicle, and appointment management with new models and validations
  -- Service Enhancements:
  --         Added Project 40_product_id and validation for the service subtypes.
  --         Introduced vehicle_type to ServiceSubtype to categorize services based on vehicle types (Sedan, SUV, etc.).
  --     New Vehicle and Appointment Models:
  --         Vehicle Catalog: Added model to store information about vehicle types (make, model, trim, year).
  --         Vehicle Info: Linked users to specific vehicles, capturing catalog information along with the license plate and color.
  --         Service Address: Linked users to service addresses, including optional geolocation (latitude, longitude) and additional instructions.
  --         Appointment: Enhanced appointment model to include:
  --             Associated vehicle_info and service_address.
  --             payment_status field and final_payment_amount with validation for final payment.
  --             Generated unique sqid for each appointment.
  --             Added validation to ensure appointment times are correctly set and consistent with service zones and subtypes.
  --             Automated appointment end time based on the service duration.
  --             Updated save() method to generate sqid and handle the automatic assignment of scheduled_end.
  --     Validation Enhancements:
  --         Implemented additional validation in Appointment.clean() to check appointment start/end times, availability in service zone, and validity of service subtype.
  --     Stripe Integration:
  --         Incorporated Project 40_product_id for service subtypes to link with Stripe Project 36.
  --     feat(vehicle): Update VehicleCatalog model
  -- 	Increase vehicle_class field max_length to 50 characters
  -- 	Add 'SPECIAL_PURPOSE_VEHICLE' to choices
  -- 	Update field structure to match CSV format (model and trim fields)
  -- 	Add proper Meta class configuration for ordering and uniqueness
  --     Model Meta and __str__ Updates:
  --         Added verbose names and ordering for new models.
  --         Updated __str__ methods to provide more meaningful string representations for VehicleCatalog, VehicleInfo, ServiceAddress, and Appointment.
- Update Django settings for production deployment and enhance environment-specific configurations     Site Configuration:         Changed SITE_ID from 1 to 5, to correctly identify the site for authentication.
  -- Database Configuration:
  --         Switched the database engine from SQLite to PostgreSQL for production.
  --         Added environment variable support for database credentials (DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT).
  --     Installed Apps:
  --         Uncommented the django.contrib.sites app to enable multi-site support.
  --     CORS Settings:
  --         Updated CORS_ALLOWED_ORIGINS to handle both local development (http://192.168.2.40) and production (https://Project 66.com).
  --         Set CORS_ALLOW_METHODS and CORS_ALLOW_CREDENTIALS for more specific CORS control.
  --     JWT Authentication:
  --         Updated SIMPLE_JWT settings to:
  --             Increase ACCESS_TOKEN_LIFETIME to 30 minutes.
  --             Enable token rotation and blacklisting for refresh tokens.
  --             Include audience, algorithm, and token signing keys for JWT.
  --     Stripe Integration:
  --         Added support for separate Stripe test and live modes.
  --         Configured environment variables for Stripe keys (STRIPE_TEST_SECRET_KEY, STRIPE_TEST_PUBLIC_KEY for test; STRIPE_SECRET_KEY, STRIPE_PUBLIC_KEY for live).
  --         Added Stripe webhook secret configuration (STRIPE_TEST_WEBHOOK_SECRET for test, STRIPE_WEBHOOK_SECRET for live).
  --     Email Configuration:
  --         Configured AWS SES for email sending, including SMTP settings and credentials for production (AWS_SES_SMTP_USER, AWS_SES_SMTP_PASSWORD).
  --         Set DEFAULT_FROM_EMAIL and REPLY_TO_EMAIL from SES verified addresses.
  --     Frontend and Password Reset URLs:
  --         Added support for environment-specific Project 9 URLs (http://192.168.2.40 for development and https://Project 66.com for production).
  --         Configured password reset URLs to reflect the correct Project 9 based on the environment.
  --     Security and Session Handling:
  --         Updated CSRF_COOKIE_SECURE, SESSION_COOKIE_SECURE, and CSRF_COOKIE_HTTPONLY for production.
  --         Set SESSION_COOKIE_HTTPONLY and CSRF_USE_SESSIONS to proper values for production deployment.
  --         Added more robust settings for multi-factor authentication (MFA).
- - Services app migrations.
- - Favicon to stop that 404 response to the browser. Favicon set by React Project 9.
- Enhance payment handling with validation and refund support
  -- Refactored the CustomerPaymentProfileSerializer to include user-specific fields like total_spent and last_payment_date.
  --     Added PaymentWriteSerializer with validation logic:
  --         Ensures the appointment is linked to the user making the payment.
  --         Prevents double payments for appointments that are already marked as PAID.
  --         Verifies that the payment amount matches the calculated appointment price.
  --     Introduced PaymentRefundSerializer to handle refunds, with validation to ensure:
  --         Refund amounts cannot exceed the original payment amount.
  --         Refunds are only allowed for payments with PAID status.
  --     Integrated AppointmentReadSerializer in PaymentReadSerializer to include appointment details in payment data.
  --     Removed redundant PaymentAnalyticsSerializer and other unused fields from the serializers.
- Refactor serializers and add vehicle/address handling to Appointment     Replaced timezone.now() with now() and timezone.make_aware() for consistent timezone handling.     Added VehicleInfo and ServiceAddress to AppointmentWriteSerializer to support vehicle and address fields.     Updated the create() method to handle creation of associated VehicleInfo and ServiceAddress models.     Enhanced validation for service availability and appointment time constraints.     Cleaned up redundant code for date/time handling and serializer fields.
- - Added Project 40 test secret key. - Added Project 40 public key, webhook secret and testing webhook secret.
- - Added verbose name to Services and Payments apps.py. This will help us recognize it as we grow.
- - Removed the timezone.now and replaced it with now(). - We import now from django.utils.timezone. - We use now() as the time function and variable to load into our filters.
- - Sample images we used when adding our services to the admin panel. Can be changed anytime.
- - This was never meant to be commited. This is a dump data of our sessions data when we did db migration from sqlite to Project 33.
- - Deleted migrations for welcome app. It has been redone.
- - Project static files. From all auth, from our owns apps and from the other apps our project installed and is using.
- feat(vehicle): Add CSV import command - Create Django management command for vehicle data import - Add data cleaning and validation - Handle special purpose vehicles with normalization - Add progress tracking and error reporting - Implement get_or_create logic to avoid duplicates - Added dataset to the commit.
- - Migrations for the services app.
- feat(vehicle): Update admin configuration - Add VehicleCatalogAdmin for managing vehicle catalog entries - Update VehicleInfoAdmin to use new model structure - Add custom display methods for related vehicle fields - Update list filters and search fields for better admin usability
- feat(vehicle): Add vehicle catalog API routes - Add endpoint for retrieving vehicle makes - Add endpoint for retrieving models by make - Add endpoint for retrieving years by make and model - Add endpoint for retrieving trims with vehicle details
- feat(vehicle): Add vehicle catalog API endpoints - Add get_vehicle_makes endpoint for unique manufacturers - Add get_vehicle_models endpoint filtered by make - Add get_vehicle_years endpoint filtered by make and model - Add get_vehicle_trims endpoint with vehicle details
- - Error template files for 500, 502, 503 and 504.
- - Added the password reset api view to the welcome app. We had no other place to put it without mixing up with other apps.
- - Added password reset urls because they were needed for the forgot password flow. - Changed payments to separate the payments and webhooks and simplified it. - Re-added our csrf endpoint so we can get the token to make requestst to Project 2. - Added app name before the url config because we set an app name in each of the apps urls.
- - Blog configuration. Still not 100% finished. First need to start implementing the Project 9 blog.

**Total commits:** 128

## 2024-12-05

**Project 12**

- - Added eslint and prettier config to the projet. Combined them both together. - Prettier errors will show up as eslint errors.
- - Added shadcn-ui for pre-made components.
- feat(2To6X React Project)   - Just ran the script and it added basic files to our src directory. it is starting off alright.
- feat(2To6X React Project):   Just getting started. Added tailwind, added roboto font, removed default settings.   This is the default config.

**Total commits:** 4

## 2024-12-08

**Project 43**

- - Started new vite react-ts project with yarn. This is basic config.

**Project 66**

- - Started new vite react-ts project with yarn. This is basic config.

**Project 72**

- - Started new vite react-ts project with yarn. This is basic config.

**Total commits:** 3

## 2024-12-09

**Project 43**

- (feat .env) - Basic env example file to make it easy to add the keys when changing environments.
- - Removed them. We don't need them.
- (feat index.html) - Added a link to our new svg for favicon. - Added an import for our Google Roboto Font. - Added a new title to reflect our project. With a description of our services.
- (feat Project 9): - Added tailwindcss with animate - Configured and installed Shad/CN components library with lucide icons.

**Project 66**

- (feat .env) - Basic env example file to make it easy to add the keys when changing environments.
- - Removed them. We don't need them.
- (feat index.html) - Added a link to our new svg for favicon. - Added an import for our Google Roboto Font. - Added a new title to reflect our project. With a description of our services.
- (feat Project 9): - Added tailwindcss with animate - Configured and installed Shad/CN components library with lucide icons.

**Project 72**

- (feat .env) - Basic env example file to make it easy to add the keys when changing environments.
- - Removed them. We don't need them.
- (feat index.html) - Added a link to our new svg for favicon. - Added an import for our Google Roboto Font. - Added a new title to reflect our project. With a description of our services.
- (feat Project 9): - Added tailwindcss with animate - Configured and installed Shad/CN components library with lucide icons.

**Total commits:** 12

## 2024-12-15

**Project 66**

- feat (vite-env.d.ts): - Added eslint plugin react hooks declaration because ts could not find it.
- feat (tsconfig.*.json): - Removed no emit from both because it was causing issues. - Added emit declaration so only ts files are emited. not js.
- feat (tailwind.config.js): - Issue was center needs to be a boolean. I set it to a string. Fixed.
- feat (ts and vite config): - Configured these files according to project scope.

**Project 72**

- feat (vite-env.d.ts): - Added eslint plugin react hooks declaration because ts could not find it.
- feat (tsconfig.*.json): - Removed no emit from both because it was causing issues. - Added emit declaration so only ts files are emited. not js.
- feat (tailwind.config.js): - Issue was center needs to be a boolean. I set it to a string. Fixed.
- feat (ts and vite config): - Configured these files according to project scope.

**Total commits:** 8

## 2024-12-16

**Project 66**

- Installed eslint react plug in hooks.
- - no changes here. - reset app.tsx to default
- feat (eslint.config.js): - Fixed eslint issues. - Set minimum rules. - Removed deprecated rules.

**Project 72**

- Installed eslint react plug in hooks.
- - no changes here. - reset app.tsx to default
- feat (eslint.config.js): - Fixed eslint issues. - Set minimum rules. - Removed deprecated rules.

**Total commits:** 6

## 2024-12-19

**Project 66**

- feat (router): - Set up our basic tanstack router. - Using file based routing. We have static pages and dynamic url driven blog pages.
- feat (pages): - These are the pages we are using for rendering routes in our app.
- feat (axios): - Created our first axios instance. - Set a apiBase which holds the base api config with the defaults and apiBlog which is for blog related endpoints. - Added the endpoints we are going for as a comment to page top. - Set up axios defaults so we don't have to type every request. - Added a csrf request. So we can just import it and add to request headers. - Added all blog types from our Project 2 according to our serializers.
- feat (tanstack router): - Set up basic router for the project.

**Total commits:** 4

## 2024-12-22

**Project 66**

- - Added tanstack dev tools to our project.
- refactor(ui): reorganize pages and components
  -- - Move auth pages to dedicated directory
  -- - Add shared components with shad/cn ui
  -- - Update blog pages structure
  -- - Remove deprecated page files
- refactor(api): restructure API layer
  -- - Split blog API into modular structure
  -- - Add authentication API endpoints
  -- - Update API base configuration
  -- - Remove deprecated blog API files
- chore(config): update project configuration
  -- - Update TypeScript configuration
  -- - Modify Vite settings
  -- - Update dependencies
  -- - Add path aliases
- feat(forms): add form handling and utilities
  -- - Add form components and validation
  -- - Implement custom hooks
  -- - Add utility functions
- feat(query): implement react-query hooks
  -- - Add authentication query hooks
  -- - Update blog query hooks
  -- - Add form state management hooks
- feat(router): implement file-based routing with tanstack
  -- - Set up static routes (login, register, forgot-password)
  -- - Add dynamic blog routes
  -- - Update root route configuration
  -- - Move HomePage to root level

**Total commits:** 7

## 2024-12-23

**Project 66**

- feat (useAuth): - We now store the user data object in session storage - We can use that to personalize user journey in the the app while logged in. - We remove the items from session storage on failed login. - New login replaces old data with fresh data.
- feat (verify-email): - Added card component to style better.
- feat (error handler): - Added network on and off messages for users. - Added an error handler to parse the axios error and then return it to the user. - We added network status to our root route. - Updated message and toast format for all queries and mutations.
- feat (sonner toast): - Removed it from app.tsx and added it to the root page. It works now.
- feat(auth): enhance form validation and autocomplete
  -- - Add strict Zod validation schema for login and registration
  -- - Implement autocomplete for better UX:
  --   - Login: email and current-password
  --   - Register: email, username, and new-password
  -- - Export ApiErrorResponse type for consistent error handling
  -- This improves form usability and validation across the auth flow.
- feat (apiBase): - Added with xsrf token to true to auto include the csrf token with requests.
- feat (login & register page): - Used card format to style it. - Added links to our privacy policy and terms of service at bottom.

**Total commits:** 7

## 2024-12-26

**Project 45**

- feat (electron app vite startup): - The goals here are 3. - Configure ADB. - Configure Scrcpy. - Guide in setting up sound by opening the right panel in settings.

**Total commits:** 1

## 2025-01-01

**Project 15**

- feat(project): - Added search and compare pages and routes. - Added eslint and prettier. - We have homepage, search page and compare page. - Added lodash for debouncing api calls and a debounce util in lib/hooks - Set all links to / for now.
- feat(project): - Started new vite project.

**Total commits:** 2

## 2025-01-06

**Project 18**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**Project 34**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**Project 48**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**Project 52**

- feat (Frontend BDM Central): - Created default vite reac-ts template.

**Project 76**

- feat (Backend BDM Central): - Initialized default Django Project.

**Total commits:** 5

## 2025-01-07

**Project 59**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Project 60**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Project 71**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Project 81**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Project 82**

- feat(project: BDM Central Backend): - Project setup with Django configuration, user app, and product app

**Total commits:** 5

## 2025-01-08

**Project 18**

- feat (project): - Added tailwind css. - Added Shad/cn components library. - Added Tanstack Query and Router

**Project 34**

- feat (project): - Added tailwind css. - Added Shad/cn components library. - Added Tanstack Query and Router

**Project 48**

- feat (project): - Added tailwind css. - Added Shad/cn components library. - Added Tanstack Query and Router

**Project 59**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added Project 40 to our Project 36 mode. - Added Project 40 price, product ids to the Project 36 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 36 app. - Created a Project 40 config file and a payments views folder. We will use this to handle our Project 40 config. - Added some .env imports in base for our Project 40 keys and product ids for our 3 Project 36. - Added a logger for the Project 36 app. - Added better error response and handling for our logging and user messages in Project 9 toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added Project 40 to our Project 36 mode. - Added Project 40 price, product ids to the Project 36 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 36 app. - Created a Project 40 config file and a payments views folder. We will use this to handle our Project 40 config. - Added some .env imports in base for our Project 40 keys and product ids for our 3 Project 36.
- feat(Products): Implement E-commerce Models and API Endpoints
  -- Models:
  -- - Add Product model with multi-image support and dynamic pricing
  -- - Add Inventory model for stock management
  -- - Add Review model with rating system
  -- - Add Promotion model for discounts
  -- - Add Order and OrderItem models with Stripe integration
  -- - Fix Order-OrderItem relationship to use ForeignKey
  -- Serializers:
  -- - Separate serializers for list and detail views
  -- - Nested serialization for related models
  -- - Validation for inventory availability
  -- - Cart item validation
  -- - Order creation with Stripe integration
  -- Views:
  -- - Product views with filtering and search
  -- - Admin-only access for product updates
  -- - Cart management with session storage
  -- - Order creation with payment processing
  -- - Dedicated search endpoint
  -- Admin:
  -- - Custom admin views for all models
  -- - Inline editing for order items
  -- - Filtering and search capabilities
  -- - Read-only fields for timestamps and payments
  -- URLs:
  -- - RESTful API endpoints for all resources
  -- - Proper namespacing and routing
  -- - Admin-specific endpoints for management
  -- Migrations:
  -- - Initial models setup
  -- - Fix Order-OrderItem relationship
  -- - Clean up null order references
- feat(Project 36.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store Project 36(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Project 60**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added Project 40 to our Project 36 mode. - Added Project 40 price, product ids to the Project 36 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 36 app. - Created a Project 40 config file and a payments views folder. We will use this to handle our Project 40 config. - Added some .env imports in base for our Project 40 keys and product ids for our 3 Project 36. - Added a logger for the Project 36 app. - Added better error response and handling for our logging and user messages in Project 9 toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added Project 40 to our Project 36 mode. - Added Project 40 price, product ids to the Project 36 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 36 app. - Created a Project 40 config file and a payments views folder. We will use this to handle our Project 40 config. - Added some .env imports in base for our Project 40 keys and product ids for our 3 Project 36.
- feat(Products): Implement E-commerce Models and API Endpoints
  -- Models:
  -- - Add Product model with multi-image support and dynamic pricing
  -- - Add Inventory model for stock management
  -- - Add Review model with rating system
  -- - Add Promotion model for discounts
  -- - Add Order and OrderItem models with Stripe integration
  -- - Fix Order-OrderItem relationship to use ForeignKey
  -- Serializers:
  -- - Separate serializers for list and detail views
  -- - Nested serialization for related models
  -- - Validation for inventory availability
  -- - Cart item validation
  -- - Order creation with Stripe integration
  -- Views:
  -- - Product views with filtering and search
  -- - Admin-only access for product updates
  -- - Cart management with session storage
  -- - Order creation with payment processing
  -- - Dedicated search endpoint
  -- Admin:
  -- - Custom admin views for all models
  -- - Inline editing for order items
  -- - Filtering and search capabilities
  -- - Read-only fields for timestamps and payments
  -- URLs:
  -- - RESTful API endpoints for all resources
  -- - Proper namespacing and routing
  -- - Admin-specific endpoints for management
  -- Migrations:
  -- - Initial models setup
  -- - Fix Order-OrderItem relationship
  -- - Clean up null order references
- feat(Project 36.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store Project 36(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Project 71**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added Project 40 to our Project 36 mode. - Added Project 40 price, product ids to the Project 36 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 36 app. - Created a Project 40 config file and a payments views folder. We will use this to handle our Project 40 config. - Added some .env imports in base for our Project 40 keys and product ids for our 3 Project 36. - Added a logger for the Project 36 app. - Added better error response and handling for our logging and user messages in Project 9 toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added Project 40 to our Project 36 mode. - Added Project 40 price, product ids to the Project 36 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 36 app. - Created a Project 40 config file and a payments views folder. We will use this to handle our Project 40 config. - Added some .env imports in base for our Project 40 keys and product ids for our 3 Project 36.
- feat(Products): Implement E-commerce Models and API Endpoints
  -- Models:
  -- - Add Product model with multi-image support and dynamic pricing
  -- - Add Inventory model for stock management
  -- - Add Review model with rating system
  -- - Add Promotion model for discounts
  -- - Add Order and OrderItem models with Stripe integration
  -- - Fix Order-OrderItem relationship to use ForeignKey
  -- Serializers:
  -- - Separate serializers for list and detail views
  -- - Nested serialization for related models
  -- - Validation for inventory availability
  -- - Cart item validation
  -- - Order creation with Stripe integration
  -- Views:
  -- - Product views with filtering and search
  -- - Admin-only access for product updates
  -- - Cart management with session storage
  -- - Order creation with payment processing
  -- - Dedicated search endpoint
  -- Admin:
  -- - Custom admin views for all models
  -- - Inline editing for order items
  -- - Filtering and search capabilities
  -- - Read-only fields for timestamps and payments
  -- URLs:
  -- - RESTful API endpoints for all resources
  -- - Proper namespacing and routing
  -- - Admin-specific endpoints for management
  -- Migrations:
  -- - Initial models setup
  -- - Fix Order-OrderItem relationship
  -- - Clean up null order references
- feat(Project 36.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store Project 36(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Project 81**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added Project 40 to our Project 36 mode. - Added Project 40 price, product ids to the Project 36 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 36 app. - Created a Project 40 config file and a payments views folder. We will use this to handle our Project 40 config. - Added some .env imports in base for our Project 40 keys and product ids for our 3 Project 36. - Added a logger for the Project 36 app. - Added better error response and handling for our logging and user messages in Project 9 toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added Project 40 to our Project 36 mode. - Added Project 40 price, product ids to the Project 36 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 36 app. - Created a Project 40 config file and a payments views folder. We will use this to handle our Project 40 config. - Added some .env imports in base for our Project 40 keys and product ids for our 3 Project 36.
- feat(Products): Implement E-commerce Models and API Endpoints
  -- Models:
  -- - Add Product model with multi-image support and dynamic pricing
  -- - Add Inventory model for stock management
  -- - Add Review model with rating system
  -- - Add Promotion model for discounts
  -- - Add Order and OrderItem models with Stripe integration
  -- - Fix Order-OrderItem relationship to use ForeignKey
  -- Serializers:
  -- - Separate serializers for list and detail views
  -- - Nested serialization for related models
  -- - Validation for inventory availability
  -- - Cart item validation
  -- - Order creation with Stripe integration
  -- Views:
  -- - Product views with filtering and search
  -- - Admin-only access for product updates
  -- - Cart management with session storage
  -- - Order creation with payment processing
  -- - Dedicated search endpoint
  -- Admin:
  -- - Custom admin views for all models
  -- - Inline editing for order items
  -- - Filtering and search capabilities
  -- - Read-only fields for timestamps and payments
  -- URLs:
  -- - RESTful API endpoints for all resources
  -- - Proper namespacing and routing
  -- - Admin-specific endpoints for management
  -- Migrations:
  -- - Initial models setup
  -- - Fix Order-OrderItem relationship
  -- - Clean up null order references
- feat(Project 36.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store Project 36(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Project 82**

- - Model Tests: 	- Product creation and validation 	- Inventory creation and validation 	- Discounted price calculation with and without promotions 	- String representations - API Tests 	- Product listing and detail views 	- Product creation and updates (admin only) 	- Review creation 	- Cart operations (add item, view cart) 	- Order creation and listing 	- Search functionality with filters - Fixed Issues 	- Fixed cart serialization by storing only serializable data in the session 	- Fixed order tests by creating orders directly in the test 	- Fixed search tests by using the correct query parameter name
- feat(Products-Stripe Integration): - Added Project 40 to our Project 36 mode. - Added Project 40 price, product ids to the Project 36 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 36 app. - Created a Project 40 config file and a payments views folder. We will use this to handle our Project 40 config. - Added some .env imports in base for our Project 40 keys and product ids for our 3 Project 36. - Added a logger for the Project 36 app. - Added better error response and handling for our logging and user messages in Project 9 toasts. - Installed black for formatting.
- feat(Products-Stripe Integration): - Added Project 40 to our Project 36 mode. - Added Project 40 price, product ids to the Project 36 and order models. - Added urls to app and then connected them under api/v1/ in our root urls. - Added serializers, views, admin settings in our Project 36 app. - Created a Project 40 config file and a payments views folder. We will use this to handle our Project 40 config. - Added some .env imports in base for our Project 40 keys and product ids for our 3 Project 36.
- feat(Products): Implement E-commerce Models and API Endpoints
  -- Models:
  -- - Add Product model with multi-image support and dynamic pricing
  -- - Add Inventory model for stock management
  -- - Add Review model with rating system
  -- - Add Promotion model for discounts
  -- - Add Order and OrderItem models with Stripe integration
  -- - Fix Order-OrderItem relationship to use ForeignKey
  -- Serializers:
  -- - Separate serializers for list and detail views
  -- - Nested serialization for related models
  -- - Validation for inventory availability
  -- - Cart item validation
  -- - Order creation with Stripe integration
  -- Views:
  -- - Product views with filtering and search
  -- - Admin-only access for product updates
  -- - Cart management with session storage
  -- - Order creation with payment processing
  -- - Dedicated search endpoint
  -- Admin:
  -- - Custom admin views for all models
  -- - Inline editing for order items
  -- - Filtering and search capabilities
  -- - Read-only fields for timestamps and payments
  -- URLs:
  -- - RESTful API endpoints for all resources
  -- - Proper namespacing and routing
  -- - Admin-specific endpoints for management
  -- Migrations:
  -- - Initial models setup
  -- - Fix Order-OrderItem relationship
  -- - Clean up null order references
- feat(Project 36.models): - Created 	- Order model to track all orders. 	- review model to track reviews. 	- product model to store Project 36(with images) 	- inventory model to track inventory 	- promotion model for discounts and promotions we are offering. 	- orderItem model to track individual orders.

**Total commits:** 28

## 2025-01-14

**Project 18**

- feat (signUpForm): - Terms and conditions disclaimer at bottom of sign up with links to pages. - Removed the export from useRegister because it isn't needed. - Removed the data we saved in Query client and added it to RegisterStore. - Moved the navigation to onSuccess from the mutation.isSuccess. - Create a JustSignedUp cookie and if that cookie isn't there, it won't render verify Page.
- feat (extras): - extra config files and route tree. - Shad/cn components.
- feat (apiInstance): - Removed an extra /api/v1. Already included in .env
- feat (signup + verify-email): - Complete signup + verify page. - Complete signup and verify-email forms. - Implemented sending one time passcode to user email. With resend feature - verify expects a param of username and email that is saved in our query. Without it verify page redirects to signup. - Api call to Project 2 + Query Mutation + parse response and map to form fields and alert to display Project 2 response messages.
- feat(signUp form): - Created the register api call. - Working on the query and form now. - Restarted the form. Will make it myself.
- feat (axios apiInstance): - Created a base axios instance. - Will include csrf tokens in requests automatically.

**Project 34**

- feat (signUpForm): - Terms and conditions disclaimer at bottom of sign up with links to pages. - Removed the export from useRegister because it isn't needed. - Removed the data we saved in Query client and added it to RegisterStore. - Moved the navigation to onSuccess from the mutation.isSuccess. - Create a JustSignedUp cookie and if that cookie isn't there, it won't render verify Page.
- feat (extras): - extra config files and route tree. - Shad/cn components.
- feat (apiInstance): - Removed an extra /api/v1. Already included in .env
- feat (signup + verify-email): - Complete signup + verify page. - Complete signup and verify-email forms. - Implemented sending one time passcode to user email. With resend feature - verify expects a param of username and email that is saved in our query. Without it verify page redirects to signup. - Api call to Project 2 + Query Mutation + parse response and map to form fields and alert to display Project 2 response messages.
- feat(signUp form): - Created the register api call. - Working on the query and form now. - Restarted the form. Will make it myself.
- feat (axios apiInstance): - Created a base axios instance. - Will include csrf tokens in requests automatically.

**Project 48**

- feat (signUpForm): - Terms and conditions disclaimer at bottom of sign up with links to pages. - Removed the export from useRegister because it isn't needed. - Removed the data we saved in Query client and added it to RegisterStore. - Moved the navigation to onSuccess from the mutation.isSuccess. - Create a JustSignedUp cookie and if that cookie isn't there, it won't render verify Page.
- feat (extras): - extra config files and route tree. - Shad/cn components.
- feat (apiInstance): - Removed an extra /api/v1. Already included in .env
- feat (signup + verify-email): - Complete signup + verify page. - Complete signup and verify-email forms. - Implemented sending one time passcode to user email. With resend feature - verify expects a param of username and email that is saved in our query. Without it verify page redirects to signup. - Api call to Project 2 + Query Mutation + parse response and map to form fields and alert to display Project 2 response messages.
- feat(signUp form): - Created the register api call. - Working on the query and form now. - Restarted the form. Will make it myself.
- feat (axios apiInstance): - Created a base axios instance. - Will include csrf tokens in requests automatically.

**Total commits:** 18

## 2025-01-15

**Project 18**

- - Updated ReadMe
  -- Signed-off-by: Abdullahi Mohamed <AbdullahiMohamed613@gmail.com>
- feat(api + contextStore): - Added a refresh and access token request. - We check if access or refresh cookies are there, if not we return the error. - If cookies found we send to Project 2 to validate them. - Created a zuustand context store. We wil use it to store all simple context we need between components.
- feat (login): - Added login api call and useLogin query to mutate the data. - Created a fieldInfo instance to be able to drop errors beside the field that the Project 2 returns them for. - Create an isAuthenticated cookie, if it is there, we redirect back to page we came from. - onBlur form field validation.
- feat (verify-email): - Moved the navigation to login inside onSuccess mutation. - Added a check for a justSignedUp cookie. If not found, it will redirect to sign in page. - Use the email and username we saved to useRegisterStore instead of query data. params.

**Project 34**

- - Updated ReadMe
  -- Signed-off-by: Abdullahi Mohamed <AbdullahiMohamed613@gmail.com>
- feat(api + contextStore): - Added a refresh and access token request. - We check if access or refresh cookies are there, if not we return the error. - If cookies found we send to Project 2 to validate them. - Created a zuustand context store. We wil use it to store all simple context we need between components.
- feat (login): - Added login api call and useLogin query to mutate the data. - Created a fieldInfo instance to be able to drop errors beside the field that the Project 2 returns them for. - Create an isAuthenticated cookie, if it is there, we redirect back to page we came from. - onBlur form field validation.
- feat (verify-email): - Moved the navigation to login inside onSuccess mutation. - Added a check for a justSignedUp cookie. If not found, it will redirect to sign in page. - Use the email and username we saved to useRegisterStore instead of query data. params.

**Project 48**

- - Updated ReadMe
  -- Signed-off-by: Abdullahi Mohamed <AbdullahiMohamed613@gmail.com>
- feat(api + contextStore): - Added a refresh and access token request. - We check if access or refresh cookies are there, if not we return the error. - If cookies found we send to Project 2 to validate them. - Created a zuustand context store. We wil use it to store all simple context we need between components.
- feat (login): - Added login api call and useLogin query to mutate the data. - Created a fieldInfo instance to be able to drop errors beside the field that the Project 2 returns them for. - Create an isAuthenticated cookie, if it is there, we redirect back to page we came from. - onBlur form field validation.
- feat (verify-email): - Moved the navigation to login inside onSuccess mutation. - Added a check for a justSignedUp cookie. If not found, it will redirect to sign in page. - Use the email and username we saved to useRegisterStore instead of query data. params.

**Total commits:** 12

## 2025-01-16

**Project 59**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**Project 60**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**Project 81**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**Project 82**

- feat ( delete files): - Templates that needed to be removed. - Redone migrations.

**Total commits:** 4

## 2025-01-28

**Project 26**

- - set tailwind v4 theme settings. Theme works now. - Added Roboto font from google as well. - Issue with npx and bunx use, I had to delete package-lock.json.
- Added axios, js-cookie + types. - Added base apiInstance for entire project.
- - Added Tanstack router and query managers. - Installed their Project 47. - Added Sonner from shad/cn
- Added shad/cn manually.
- - Added bun path types. - Updated the tsconfig files.
- Added tailwind v4 and the vite plugin.
- Fresh Bun Vite React TS install.

**Project 64**

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
- - Added Tanstack router and query managers. - Installed their Project 47. - Added Sonner from shad/cn
- Added shad/cn manually.
- - Added bun path types. - Updated the tsconfig files.
- Added tailwind v4 and the vite plugin.
- Fresh Bun Vite React TS install.

**Total commits:** 25

## 2025-02-02

**Project 36**

- images and videos for our Project 36

**Total commits:** 1

## 2025-02-04

**Project 64**

- Product display pages. Index and Detail views. - Index shows all Project 36 in a page. Detail shows info and allows add to cart+favortite ability on each product. - Size guide not ready yet. We  will need to measure 1 of each size ourselves. Numbers I got are not reliable. - Images are local to Project 9. Instead of sending them via api with every product, we can import in Project 9 and display that way. - Each Pages has the images that go into detail.
- Password reset + redirect and change password. - Redirecting user with a link sent by email then they change their password by providing 2 new passwords then redirect to login. - System always returns a positive for email sent to avoid people finding users emails. Only sends email if user exists.
- Initiatives. This is our project intitiatives. WE want to commit a part of our revenue to a good cause. - Contact Form to reach out to us. - Grant Application same as contact with grant related flag. - Product giveaway has flag same contact form. - School supplies is an application to apply for support. We might give you school supplies. - We have a contribute route. This one will help us bridge the gap between people who we can help and others who contribute to that.
- Signup, Verify-Email, Login Forms and related logic. - Completed forms with all data and working with connection to Project 2. We need to add our own image in place of the picsum images. TODO. - We included fully featured OAuth with google and facebook, loggin in user and givng us access and refresh tokens. - We included Guest Login portion of signup where they can only provide email and be logged in. - Password Verify with a 6 digit OTP sent by email on login. Optional.
- - Footer + Layout Footer has company info, quick links, Project 36, policies and map pin from google. - Styled it with good distance from the edges.
- Header for the website. Has mobile view set but need more padding and margin to distance from edges. Match footer. - Added user icon with login and logout button based on auth state - Logout deletes cookies and triggers api call to Project 2 to log user out. - Login leads to /auth/login route. - Added SVG Logo. Might add some colors in the logo we will see. - Cart integration in header as well.

**Total commits:** 6

## 2025-02-07

**Project 64**

- Header + Footer: - Footer adapts to all screen sizes. - Header needs more work

**Total commits:** 1

## 2025-02-15

**Project 59**

- last portion before we commit into vps.
- config (settings): - Set redis to be the cache system. - Set Project 33 to be database system. - Both on unix socket.
- addition (Project 36 app): - We have Project 40 integration for payments. - we have api to send orders(donations), create payment intents, recieve webhooks and process transactions.
- addition (user Model): - Added Stripe_customer_id, phone_number and use sqid for the pk. - Brought the views for our social auth and csrf into the users app views to avoid cluttering app specific views.

**Project 60**

- last portion before we commit into vps.
- config (settings): - Set redis to be the cache system. - Set Project 33 to be database system. - Both on unix socket.
- addition (Project 36 app): - We have Project 40 integration for payments. - we have api to send orders(donations), create payment intents, recieve webhooks and process transactions.
- addition (user Model): - Added Stripe_customer_id, phone_number and use sqid for the pk. - Brought the views for our social auth and csrf into the users app views to avoid cluttering app specific views.

**Total commits:** 8

## 2025-02-21

**Project 75**

- Added tanstack router+query with Project 47. - Added api instance. - Added network check. - Theme mode and toggle. - Added shared stores for the program. - Added Layout with header and children
- Added shad/cn. configured theme to match.
- - Updated index.html to include more meta data and tags. It is no supporting of social Project 36 sharing. - Added different sized svgs in case screen size changes. - Added manifest.json, sitemap.xml, robots.txt - Much more detailed index.html than ever before
- Added tailwind css v4.
- first commit. Started new react 19 project.

**Total commits:** 5

## 2025-02-26

**Project 28**

- Added tailwind css v4.
- Started new vite react ts project

**Total commits:** 2

## 2025-02-27

**Project 4**

- Backend for sh Aden manasik Hajj 2025 form.

**Total commits:** 1

## 2025-03-03

**Project 54**

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
- Added dimensions model, serializer and admin for our Project 36. We enter once and reference it there.
- finished Project 36 app. Moving on for now.
- git Project 18 for linux, mac, node and python.
- Added Project 36, color, size, inventory, promotion and likes to the admin panel so we can edit.
- Added urls for Project 36, promotions and inventory
- Added product, promotion and inventory viewsets with custom exceptions.
- Added product, promotion, inventory, reviews, size and color serializers.
- Added color, size, inventory, likes, review, promotion models to store our product and related data.
- Added new user model to expand the abstract user model. This add some fields we need to the user model on top of django's extra.
- installed django

**Project 74**

- added shad/cn
- added tailwind css
- created new vite react ts project

**Total commits:** 27

## 2025-03-04

**Project 54**

- Fixed up the redundancy in the admin panel code.
- added a fedex and canada post url to reach each service separately.
- formatting
- fixed the models to create an abstract base shipping model we expand with for canada post and fedex as needed.
- Made a base serializer class that the canada post and fedex serializers inherit from.
- Optimized imports.
- Removed Project 40 payout status. Same as status. Shipping address will be stored as a json object from now on. Removed estimated days. Not necessary. Optimized imports.
- Removed the admin registation. This model is a helper to the other Order model in admin.
- removed the get username function. redundant. removed the Project 40 payment status. its same as our systems status.
- Added admin view so we can see contact form submissions.
- Added contact form model to store our contact form data. Removed translation util from fields in user model.
- A serializer for our contact form data.
- Added contact form viewset. it simply saves the form and we can see in admin.
- Added endpoint to send contact form requests.
- Installed Stripe library
- changed how we import user model in models. changed how we import product views in urls. removed unsused functions from views.
- Function that takes in an order_id from request and will get all information needed to create the checkout session. If session succeeds then our webhook will receive the call and update the order model.
- We have urls to create a new checkout session and and endpoint to receive webhooks.
- our Project 40 config to import all environment variables.
- Added url for creating checkout session and the Project 40 webhooks.

**Total commits:** 20

## 2025-03-05

**Project 54**

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

**Project 54**

- the canada post integration is finally working!! example api call at bottom.

**Total commits:** 1

## 2025-03-18

**Project 1**

- Auto-commit on 2025-03-18 14:02:12

**Project 10**

- Auto-commit on 2025-03-18 14:02:13

**Project 13**

- Auto-commit on 2025-03-18 14:04:24

**Project 19**

- Auto-commit on 2025-03-18 14:02:11

**Project 20**

- Auto-commit on 2025-03-18 14:01:57

**Project 30**

- Auto-commit on 2025-03-18 14:04:06

**Project 33**

- Auto-commit on 2025-03-18 14:04:12

**Project 35**

- Auto-commit on 2025-03-18 14:02:14

**Project 37**

- Auto-commit on 2025-03-18 14:04:03

**Project 40**

- Auto-commit on 2025-03-18 14:04:37

**Project 44**

- Auto-commit on 2025-03-18 14:04:23

**Project 53**

- Auto-commit on 2025-03-18 14:04:06

**Project 56**

- Auto-commit on 2025-03-18 14:04:25

**Project 57**

- Auto-commit on 2025-03-18 14:04:04

**Project 6**

- Auto-commit on 2025-03-18 14:04:05

**Project 62**

- Auto-commit on 2025-03-18 14:02:17

**Project 63**

- Auto-commit on 2025-03-18 14:02:19

**Project 7**

- Auto-commit on 2025-03-18 14:04:36

**Project 70**

- Auto-commit on 2025-03-18 14:04:40

**Total commits:** 19

## 2025-03-20

**Project 27**

- Added shad/cn
- Created new project with vite and added tailwind css

**Total commits:** 2

## 2025-03-22

**Project 58**

- Same ui split into parts. now working on the spacing.
- Its looking very nice for the ui chat. Saving my progress before disaster.

**Total commits:** 2

## 2025-03-24

**Project 46**

- Added some helper functions to /lib
- New project with vite, tailwind, shadcn.

**Total commits:** 2

## 2025-03-29

**Project 68**

- Added json renderer for our images
- Added chat topic selector
- Added Chat Message Area Component
- Added chat message component
- Added Chat Input component
- Added shad/cn
- Added tailwind css.

**Total commits:** 7

## 2025-03-30

**Project 2**

- The Project 2 for our chat ui app. Working nice so far. Adding image support now. Will branch of title setting to a different call to the model. It is too liberal with the title now. Changing it multiple times per chat.

**Project 68**

- Added a chat image carousel. trying to dynamically load in images from the models response.
- Chat ui now uses the use scroll to bottom hook to do the scrolling instead of our own implementation using useEffect
- Chat ui now has the chat message actions sticky in the ui with settings for each chat.
- Chat ui is smooth scrolling and the chats are being loaded into the sidebar. Issue now is tha we must fix the virtualization
- Chat ui is working and streams the content perfectly

**Project 77**

- The Project 2 for our chat ui app. Working nice so far. Adding image support now. Will branch of title setting to a different call to the model. It is too liberal with the title now. Changing it multiple times per chat.

**Total commits:** 7

## 2025-03-31

**Project 2**

- Added create express checkout, get canada post shipping rates and get fedex shipping rates. Along with a bunch of models, utils, exceptions. Taken from my old project.
- Changed the system prompt to better help the model response instead of doing function calls.
- Added the images and videos to the stream. separate from the text for model message. this is images and videos. we will render them in jsx renderer.

**Project 68**

- Chat section is able to return videos and images dynamically.
- Finally got the jsx renderer working on index. I will now work to merge it with the ChatSection.tsx
- Adding a jsx renderer to our chat section. It's causing errors, so adding a save before we impact too hard.

**Project 77**

- Added create express checkout, get canada post shipping rates and get fedex shipping rates. Along with a bunch of models, utils, exceptions. Taken from my old project.
- Changed the system prompt to better help the model response instead of doing function calls.
- Added the images and videos to the stream. separate from the text for model message. this is images and videos. we will render them in jsx renderer.

**Total commits:** 9

## 2025-04-01

**Project 2**

- Fixed the name of the values from Rates to rates to better match other function calls responses.
- Got the canada post shipping api to return the shipping rates back to the model when it uses the tool to get rates.

**Project 68**

- Got the shipping rate selector to send a message and return the right rate. It uses alert dialog to stop user from making too many choices and then sends the message right away to the model for a response.
- The ui now pops in a rates component to display the incoming shipping rates. Will need to further update so we can send a message to the model with the chosen rate and it will return a checkout session url to complete payment.

**Project 77**

- Fixed the name of the values from Rates to rates to better match other function calls responses.
- Got the canada post shipping api to return the shipping rates back to the model when it uses the tool to get rates.

**Total commits:** 6

## 2025-04-02

**Project 2**

- Got the Project 40 create express checkout session working. It now returns a checkout url as needed.

**Project 68**

- Got the checkoutAlert function working and it renders now buttons to allow the user to continue chatting or checkout.

**Project 77**

- Got the Project 40 create express checkout session working. It now returns a checkout url as needed.

**Total commits:** 3

## 2025-04-03

**Project 68**

- Added product pages for our 3 Project 36. Will now try to manage the state of each renderer separately so they do not stay static.

**Total commits:** 1

## 2025-04-04

**Project 2**

- Now model function calls are saved along with their results as json so we can send to Project 9 as needed.

**Project 68**

- Fixed the state issue. Now we can display multiple components per chat.
- Now we added extra_data that will be sent with each message and will have the results of the function call along with the message so we can have it always on new message load.

**Total commits:** 3

## 2025-04-05

**Project 68**

- Changed the Api instance to native fetch. handled errors accordingly. Set the query key and invalidate it right before in case someone else was logged in before.

**Total commits:** 1

## 2025-04-09

**Project 68**

- Added sentry for error catching.
- Major progress. Sidebar messages fixed. Authenticated for chat fixed. Checking auth state on authenticated pages and redirecting if authenticated. We will tackle the chat id situation now.

**Total commits:** 2

## 2025-04-10

**Project 68**

- Pre vs code agent changes to streamline how we handle chat creation.

**Total commits:** 1

## 2025-04-11

**Project 2**

- I made the send message view max 250 characters. Adding to Project 9 protection. Now will strip everything paste 250 characters. Re added product descriptions and images+videos. Collected static files to serve in prod. Most important change is that we updated all the allauth emails to now match our new style. and more...

**Project 68**

- I made the chat input take max 250 characters so user cannot spam. Added size guide table. Started unsubscribe page. and more...

**Total commits:** 2

## 2025-04-13

**Project 2**

- Added feedback and data deletion models, urls, views and serializers. Final commit before prod.

**Project 68**

- Added the fonts + container to index.css. Will add meta tags to all pages.
- Added feedback and data deletion and the feedback endpoints for our Project 2.

**Total commits:** 3

## 2025-04-15

**Project 68**

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
- Made the video come from our Project 2 via fetch. Much better than bundling with the Project 9. Added a handleClick function to redirect to login with a toast if needed. Will need to figure out if user is authenticated, so we don't show toast as needed. Deleted the old video in public. No longer needed.
- Added index.html meta tags, changed some more parts to better match dark and light theme

**Total commits:** 16

## 2025-04-17

**Project 68**

- We now pull in an image of tracksuit and sweatsuit to display in right sidebar for the user on load.
- Added a stat's section to give quick descriptions of the values of our Project 36. On Homepage.
- new updated hero section with better proportions and easier to read and understand. We now add that we are the first ai chat to shop interface.
- A simple email and phone number for people to reach us at. Added to homepage.
- Added a featured Project 36 section. This will alow us to display our Project 36 on the homepage. Working on a page per product.
- Added a new faq section to our homepage. It answers a bunch of questions a user might have.

**Total commits:** 6

## 2025-04-19

**Project 68**

- removed dev tools before build.
- deleted and replaced with policies/delete-my-data
- Made all link targets blank and changed which privacy url to Project 40 we use because other one is in french.
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

## 2025-05-26

**Project 24**

- Removed the old db and redid the migrations to fix the old errors.
- Added users table and first step of the registration with models, user model, serializers, views and urls. Added tthe url to the the main project urls.
- Made first migrations
- Started work on the new realtor tools with llm help project. Started with tools and users apps. Added credit views to the tools to manage credits. Default start is 5.

**Total commits:** 4

## 2025-05-27

**Project 24**

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

**Project 24**

- About to add the llm tool settings now. We can do auth after.

**Total commits:** 1

## 2025-06-15

**Project 24**

- Ready to start the collaboration. Welcome my friends.

**Project 41**

- Ready to start the collaboration. Welcome my friends.

**Total commits:** 2

## 2025-06-17

**Project 11**

- Fixed some more routing issues. will fix later.
- Will add commit text later pushing to show you.
- Added the tanstack router vite plugin
- Installed tanstack router, Project 47 and the vite plugin
- Added onClose instead of onBack to fix type error

**Total commits:** 5

## 2025-06-23

**Project 24**

- Started to add auth and allauth and cors and rest framework and simple jwt settings to the project.

**Total commits:** 1

## 2025-06-25

**Project 29**

- Installed toast from shadcn. Added motion library for effects and zuustand. Added theme provider, network status toast, theme mode toggle and added them to the root route.
- Started the Project 15 app project. Using tanstack router vite app boilerplate.

**Total commits:** 2

## 2025-07-03

**Project 49**

- created new tanstack router project with vite. I fixed the issue with the vite folder and deprecated router plugin. Added build, server, root, log level, json and app type settings to the vite.config.ts.
- Added a first view to create an api to use for our Project 9 with yt-dlp project. Added first version of the view, serializer and urls. Connected them to the main app urls.
- Added MacOS, Linux, and python files to Project 18.
- initialized new venv and uv project. Installed django+restframework+corsheaders and ytdlp

**Total commits:** 4

## 2025-07-04

**Project 49**

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

**Project 80**

- Merge pull request #4 from WaryaWayne/abdullah
  -- Updated the CollisionSteps.tsx, index.tsx route file and hero component.
- Updated the hyper link destination and use a new icon from lucide.
- Started to use a steps object to hold all steps and map through it. Updated the top and bottom text to better apply it to the new company.
- fixed the div id and the name of the component since it changed.
- Merge pull request #3 from WaryaWayne/ajama
  -- fixing the stats and faq sections
- Merge pull request #2 from WaryaWayne
  -- Edited the title in the iframe to update the name of the company and make it more clear.
- Edited the title in the iframe to update the name of the company and make it more clear.
- Merge pull request #1 from WaryaWayne
  -- Finished adding the services.
- Removed the not needed link import and the empty handleNewChat function.
- Updated the featured Project 36 to add the newly available services. Also did a format on the file to clean up the look.
- Started new project. we are working on this client site. Please ask for instructions before changing. Simple Project 9 only react code.

**Total commits:** 11

## 2025-07-10

**Project 80**

- shrunk the margin and padding to allow the buttons at bottom of screen to have a good gap against the bottom. added new logo to the image source.
- updated index file to include new banner image, logo's and messaging.

**Total commits:** 2

## 2025-07-14

**Project 80**

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

**Project 9**

- Added a link variant button to better see the maximum rates.
- Changed size on the index.html for the og image.
- changed accesebility so it is better adaptable on mobile. It looks much better on mobile now.
- fixed styling and the link buttons to due to changed url.
- Completed final edits to sadex towing site.

**Total commits:** 23

## 2025-07-15

**Project 9**

- Added new groupings for the tables to make them more clear.
- made the text black to better see the button and certificate number

**Total commits:** 2

## 2025-07-17

**Project 23**

- syncing Project 2 with Project 9 repo. Now it should work.
- Merge Project 2 repo into main
- Merge pull request #1 from WaryaWayne/master
  -- Master
- we now use the next page as a url attachment proxy that will send requested url to Project 2 and Project 2 will return the results for easier pagination.
- added proxy_url to better manage the paginated results. our Project 9 will no longer try and access the ddf url itself and will instead be proxied by our Project 2. It will attach token and send the response data back. We now handle the auth process in utils and do proxy and other methods of filtering in our view.
- we now use an infinite query to store the data. It works better already since we see more than 5 listings. Issue now is that we try to make request and we don't have the token in Project 9. will need to find a way to request to Project 2 and proxy it back to Project 9 for data exchange. Added more property data on the Project 9 to display for every listed property.
- our listings page. This is where we make the api call to display the data as needed.
- fixed deprecated tanstack plugin and added server and build settings.
- commented out the header for dev.
- the data schemas we need to communicate with the ddf api.
- Listing frame which is the frame that will hold all of the listings when user is scrolling through.
- utility functions to help with the properties api call and filtering.
- structured the data-feed endpoints under the api/v1/ versioned api we are building.
- Added cors allowed origins to fix cors errors. Added cors middleware. Added ddf base url.
- New properties view to get the properties data and then return it to our Project 9. It includes the filters we need to make custom searches.
- Added new properties url endpoint to get the properties as needed.
- Added drf xml parser to the project.
- Added the data feed urls to the main project urls.
- static files from collectstatic command.
- Added ddf credentials from .env. username and password. removed the auth classes since we aren't using that right now.
- data feed app. This is used to get access token and then place in the functions needed to refresh and maintain the token.
- Installed @types/node, then updated ts router plugin to latest version from deprecated default.
- initalized a Project 2 with django and few modules to make a Project 2 for out data feed.
- initialized new bun Project 9 project. Will use this to display feed data as we recieve it.

**Project 31**

- added proxy_url to better manage the paginated results. our Project 9 will no longer try and access the ddf url itself and will instead be proxied by our Project 2. It will attach token and send the response data back. We now handle the auth process in utils and do proxy and other methods of filtering in our view.
- utility functions to help with the properties api call and filtering.
- structured the data-feed endpoints under the api/v1/ versioned api we are building.
- Added cors allowed origins to fix cors errors. Added cors middleware. Added ddf base url.
- New properties view to get the properties data and then return it to our Project 9. It includes the filters we need to make custom searches.
- Added new properties url endpoint to get the properties as needed.
- Added drf xml parser to the project.
- Added the data feed urls to the main project urls.
- static files from collectstatic command.
- Added ddf credentials from .env. username and password. removed the auth classes since we aren't using that right now.
- data feed app. This is used to get access token and then place in the functions needed to refresh and maintain the token.
- initalized a Project 2 with django and few modules to make a Project 2 for out data feed.

**Total commits:** 36

## 2025-07-22

**Project 39**

- Added a scroll area and a see more button. this helps to make the order summary show up and be visible on first land on cart by the user. Now we show 1.5 Project 36 and the rest will show after see more is clicked.
- Project 2 with Project 36 and apps.
- Project 9 for Project 1 central website. working on cart section now. almost done.

**Total commits:** 3

## 2025-07-23

**Project 39**

- cart shipping and confirm. Our new checkout flow for the store. It will be faded into each other and unlock as you complete the other one.
- shad/cn components

**Total commits:** 2

## 2025-07-24

**Project 39**

- Now we do email validation for invalid emails. This was handled by Project 40 before and now handled by us using pydantic email validate extension.
- Simplied title from secure checkout to comfirm your order. We now collect user's email and subscription status to send it to the Project 2 when making a checkout url. Still need to make sure we remove the use effect which retriggers the call on every key stroke of email typing or status change. We need url request to happen when shipping go to pay is clicked.
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

**Project 39**

- formatting.
- make the message more clear for the user and collect email first separately. we pass in email and subscription status as a param. This allows us to remove use effect dependencies which called our endpoint for every keystroke.

**Total commits:** 2

## 2025-07-29

**Project 39**

- this is our v1 of the shirts page. We are working to make a page for users to visit and see our shirt product displayed with information.
- comment out /lib because it would stop our Project 9 /lib file from going to github.
- network status page.
- utils for shad/cn.
- Added network status monitor, added toast, added headcontent so we can import meta tags from components.
- Added toaster from shad/cn.
- removed checkout directory in routes as it wasn't needed and we won't expose that endpoint. We also moved the shipping and checkout components to /custom dir. This helps as we import from there. details page wasn't necessary. Also updated imports in cart route.
- Merge branch 'main' of github.com:WaryaWayne/BDMCentralClothingCo.
- Added branding and fixed some issues. formatted the contents. Separated the copyable code block for step 2 in Project 2 setup. Should be 2 commands not 1. In the logs folder and files creation we also leave 2 copyable code blocks.
- Added branding and fixed some issues.
- Instaleld motion library. Added test page to see. Will be removing it.
- env.example and a read me for the main page of the github repo.
- Create utils.ts
  -- added utils file. was Project 18d by .gitProject 18

**Project 5**

- Added axios to the package.json file. It was missing and app would have an error.

**Total commits:** 14

## 2025-07-30

**Project 39**

- we now use the cart store from the cart.tsx file. Added price bundle and product interfaces to the shirts file. added links to navigate to the cart page from the current page. formatting.
- formatting, both buttons will now scroll down the page. One to Project 36 and other to the product details section.
- updated to use our new global cart store as this one. So all Project 36 added to cart use this store now. did theme updates. Now it adapts to dark theme without losing any content. removed the old cart store file since its not needed.
- Added new button to scroll to the bundle area if user clicks buy now. Changed icon and text in the second button as well to better match our goals.

**Total commits:** 4

## 2025-07-31

**Project 9**

- page tracking, scroll tracking and event tracking functions.
- added g-tag for tracking to the index.html page.

**Total commits:** 2

## 2025-08-01

**Project 39**

- changed name of product to better match our api requirements for checkout url.
- feat: migrate to Zustand stores and add dark/light mode theming
  -- - Replace TanStack Query with persistent Zustand store for shipping selection
  -- - Add bg-background/text-foreground theming for dark/light mode compatibility
  -- - Create dedicated shipping store with persist middleware for chosen rates
  -- - Keep server state (shipping rates response, checkout URL) in TanStack Query
  -- - Update CheckoutComponent to read from cart and shipping Zustand stores
  -- - Maintain existing functionality while improving state management separation
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

**Project 80**

- Imported trackEvent function. It wasn't initalized.
- Installed react-ga4 library.
- Scroll tracking, page views and event tracking functions to use in our app.
- Added google g-tag to index.html. This allows us to get analytics for the site. Global.d.ts allows us to use window.gtag without type errors.
- formatting, initalized react-ga4, sending web vitals to google analytics. Added Metric type to the on PerfEntry to fix type error in the main.tsx implementation.
- Formatting and added event tracking to every button.
- create a root component function and added usePageTracking() and useScrollDepthTracking() for analytics.
- Added access code and event tracking to the contact form.

**Project 9**

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

**Project 14**

- Added the shapes we will remove from homepage
- started new project for Project 66 group. Central Homepage for all of our operations. Each will lead to a separate subdomain.

**Total commits:** 2

## 2025-08-11

**Project 42**

- Started new tanstack start project with vite, tanstack, tailwind css and shad/cn.

**Total commits:** 1

## 2025-08-12

**Project 42**

- added better-auth library and config for the auth client instance and the auth instance. still working on the api/v1/auth/$.ts. Will need to figure out if we are to use a file route or server route.
- Added Project 33 adapter for the migrations cli for drizzle.
- client and server entry points for tanstack start. Our router config with formatting applied. our vite config with added server settings.
- Added drizzle to manage our bun Project 33ql instance. set up db instance, added file to add our schema, and the drizzle config file to tell it location of needed files. example .env file for reproducability.
- Added django, rest framework, cors, and environ.
- started new Project 2 dir. will run a django project here.

**Total commits:** 6

## 2025-08-13

**Project 42**

- upgraded zod, added better-auth with the minimal config so far. Made the migrations. generated the full new schema. Exported it from the schema.ts that drizzle expects. we now import a reactStartCookies to help with cookie settings on certain functions.

**Total commits:** 1

## 2025-08-18

**Project 42**

- deleted files
  -- we no longer need Project 2. All in the Project 9 dir.

**Total commits:** 1

## 2025-08-27

**Project 42**

- Merge pull request #1 from WaryaWayne/feature/pending-commits
  -- Features from pending-commits branch
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
  -- - Update Error component to accept TanStack Router props (error, info, reset)
  -- - Add reset button functionality for error recovery
  -- - Enhance error reporting to include component stack traces
  -- - Update NotFound component to accept TanStack Router data prop
  -- - Display custom not-found messages from router data
  -- - Remove test-specific text and make components production-ready
  -- - Update root route to use inline component wrappers for proper prop mapping
- feat: add Loading, Error, and NotFound components
  -- - Add Loading component with BDM Central branding and compact design
  -- - Add Error component with TanStack Form integration and error reporting
  -- - Add NotFound component with contextual navigation and URL display
  -- - Update error reporting API endpoint with proper logging
  -- - Add test page to showcase all three components
  -- - Add uuid dependency for error ID generation
  -- Components provide consistent UX for loading states, error handling, and 404 pages throughout the application.
- feat: add Loading component with BDM Central branding
  -- - Create reusable Loading component with centered logo and spinner
  -- - Add 'BDM Central' text above logo for brand consistency
  -- - Use compact design suitable for short loading times
  -- - Include customizable loading message with 'Just a sec...' default

**Total commits:** 27

## 2025-08-28

**Project 42**

- Added a table for liked listings, removed listings, listing notes and user preferences.
- A new seo component to add to each of our pages.

**Total commits:** 2

## 2025-08-29

**Project 42**

- mistakes in generating the migrations. Had to many fixes. It works now.

**Total commits:** 1

## 2025-08-31

**Project 42**

- run script with 'bun process:properties'. This will get open the listings file and save it to the db.
- run script with 'bun get:properties'. This will get all listings from fresh again.

**Total commits:** 2

## 2025-09-01

**Project 42**

- migrations

**Total commits:** 1

## 2025-09-02

**Project 42**

- removed the splash screen from the site. It is not needed and was slowing down the ui.

**Total commits:** 1

## 2025-09-03

**Project 42**

- Removing all the useState and useID to instead use a form for this component.

**Total commits:** 1

## 2025-09-04

**Project 42**

- (style) formatted the page
  -- removed unused imports and spacing.
- (feat) added a empty email as search to signup. Since we wont have users email at this point.
- (feat) shad/cn components
  -- new components
- (chore) removed useless comment
- (feat) migrate users table
  -- now adds last login method column and migrates.
- (style) format
- (refactor) navigation to callback url
  -- we now send the current location in a callbackUrl. this will hold the route so we can use navigate instead of hard window.location.href.
- feat added last login to users table
  -- this is to help with analytics and also to track user login over longer time spans than cookie.
- feat last login method in social buttons and login form
  -- Added to help user know last login method.
- (feat) Added last login method config
  -- Added last login method and configured it in the authclient and auth.ts.

**Total commits:** 10

## 2025-09-05

**Project 42**

- shad/cn components
  -- ui components.
- (feat) ai-elements chat ui components.
  -- Ui components to style and create our chat ui.
- (feat) migrating schema changes for chat
  -- migrating chat related tables
- (feat) added user preferences and actions tables
  -- user actions to track user likes, notes and other info related to the listings. User preferences is global user settings like theme, city, language.
- (feat) added chat related tables
  -- Added a table for chat session to track all chats and a chat messages table to hold all messages and link back to each message by user and chat session.

**Total commits:** 5

## 2025-09-06

**Project 42**

- (feat) added a sharedChat column to the chat sessions to be able to display shared chats without checking user info.

**Total commits:** 1

## 2025-09-07

**Project 42**

- This is an seo utility. WE use it on pages we want seo to set meta tags and make it easier to find on search. We have a hook to return structured data and a component that will return the jsx tags.
- (feat) added left side bar
  -- signout out logic to refresh redirect to login, quick links list with emoji's to direct user's to policies, giveaways or home. Avatar display if user has profile image. Created a skeleton for the loader.
- shad/cn
  -- added components to project

**Total commits:** 3

## 2025-09-09

**Project 42**

- (feat) refactor chat schema to use message parts for flexible content

**Total commits:** 1

## 2025-09-12

**Project 42**

- (feat) custom chat area component for chat routes
  -- Creating our own custom chat area. This will replace the logic we have in /chat/chatId. We can now add this area to route and centrally manage all the context as needed.
- (feat) Insert and delete dialogs for the left sidebarÏ
  -- Insert and delete dialogs for the chat's in user's sidebar. User can now instaly update the title or remove the chat with dialog confirmation and optimistic updates

**Total commits:** 2

## 2025-09-14

**Project 42**

- feat: enhance sidebar components with dynamic chat management and right sidebar
- (feat) ai sdk elements components
  -- We use these to help create our chat interface. Added update script to package.json as well.
- (chore) installs and updates
  -- updated and installed a few libraries.
- (feat) electric sql adapter + start and stop script
  -- We have an electric sql server running using Project 57 in the root dir of our project. It mirror's the chosen db tables we set. Package.json now has bun electric-start and electric-stop to do the Project 57 compose commands.
- (feat) improve tables to better work with chat
  -- created and made new message, chat and other tables. Improved the schema.

**Total commits:** 5

## 2025-09-15

**Project 22**

- packages added
- (refactor) fixed db url
  -- moved it from pg bouncer to direct Project 33 url. proxy is 5432 now instead of 6432.
- (feat) added the sidebars, header and outlet
  -- Now this route layout will apply to all chat/ routes and below.
- (refactor) removed props that aren't used anymore
- (feat) chat session collection + endpoint
  -- We created a get, patch and delete methods for the user chat sessions. It now returns the id, title and created date. So perfect for our use.
- (refactor) improved the props in the components
  -- Less data will be coming back from the endpoint and we will be able to do more with it now.
- (chore) chat and related tables migrated
  -- Added schema as well.
- (feat) chat route ui components.
  -- left and right sidebars, a chat header.
- shadn/cn
- (refactor) improved delete my data
  -- Added new fields, improved Project 2 error handling, after submit user now see's an alert that moves them to the homepage. We return a uuid that we add to the request for user's records. created table and migrated.
- added packages + updates
- server and client config
  -- Tanstack Start entry for server and client handlers.
- privacy policy route page
- shad/cn components + hooks
- (feat) added site url to client env variables
- (feat) seo functionality
  -- import per page and set all tags dynamically per page. We have robots set up as well.
- (feat) error codes mapping + generate username
  -- We have function to parse error by code and we have a generate name function for users.
- (feat) layout page for our auth + policies pages
  -- We made it once with pass in props to avoid repeating.
- (feat) policies page + delete data api route.
  -- Thse pages hold our legal policies for the site. With a delete my data page to send email and options to Project 2.
- (feat) page layout component + logo
  -- Added a page component that takes a title, url and a component to wrap it in a page.
- (feat) added shad/cn and ai-elements components
  -- ui component libraries
- (feat) better auth integration client + server
  -- - Integrated better auth into project. created the configuration files. It now works and should be ready to work.
  -- - Created the schema, added libraries as needed.
  -- - Added catch all api route.
  -- - A generate name function to make userNames for users.
  -- - Generated and migrated auth related tables.
- (feat) add t3-env library
  -- use it to manage out env variables at runtime in a typesafe manner
- (chore) formatting
- (feat) use new typesafe db url import
  -- import db url from serverEnv instead of process.env to stop runtime missing values.
- (feat) typesafe zod validation for .env variables
  -- we now import and separated the .env variables in this typesafe format for imports.
- (refactor + style) formatted file + db url import
  -- we now grab the env variables with a zod schema validation to protect us from issues with the env variables.
- (feat) electric db sql server running on Project 57.
  -- Added an electric sql server to allow us the ability to do real time sync in our app. It mirrors our db replication and changes.
- (feat) drizzle-orm + drizzle-kit + bun sql client
  -- installed and conntected drizzle-orm + drizzle-kit configured using bun sql client for Project 33. Schema hasn't been added yet.
- (feat) added our shortcuts in package.json to manage various services.
- Added server section to vite config.
- hello, world. This is where it all starts.

**Total commits:** 32

## 2025-09-16

**Project 22**

- (chore) update dependencies.
- Checkpoint before breaking changes

**Total commits:** 2

## 2025-09-17

**Project 22**

- (feat) vite config added allowed host
- (refactor) right side bar
  -- we now get the env variables using the new library
- (refactor) separated the title and the buttons.
- Pencil for edit icon.
- (bug) returns text now not boolean
- (feat) ssr off on chat routes.
- (refactor) chat area actions
  -- We positioned them in aproximate spot we want them. Maybe a little closer together and less spacing on top. Much better now though.
- (refactor) chat area
  -- added user and model actions under the messages.
- (refactor) convertToUIMessages function
  -- We now check if messages is not an array. if it isn't we return empty list.
- (refactor) chat area
  -- removed all unused imports and hooks. We also pass in the id of the current Chat we get from the route param.
- added react scan
- (refactor) chatId route
  -- we added main chat area here. get chatId from url. Use ensure query data and suspense query to manage the data loading. Added a suspense block to handle the state when data isn't here.
- (refactor) route chat layout route
  -- -We moved the messages query to the chatId route. it is better there and has the chatId param without props.
  -- - reenabled ai dev tools.
  -- - moved the main chat area to the chatId route.
- (refactor) right sidebar now floating.
  -- will fix the trigger closing both soon.
- (refactor) update left side bar
  -- - We now use a message circle instead of calender.
  -- - We now compare the chatId from the route param with the id of current chat to highlight it as active.
- (refactor) chat header
  -- Now it is sticky and on the top of the ui. we also truncate long titles now. We added a settings button with a drop down with options we will implement.
- (refactor) get messages endpoint
  -- Removed the userId check. Will re implement once we have better auth set up.
- (refactor) generate text endpoint
  -- - we return response instead of throwing error if all goes wrong.
  -- - we created 2 dedicated redis instances to handle publishing and subscribing to the data stream.
  -- - we now generate our uuid using a utility function to make a uuid and not use createId generator function from ai sdk.
- avatar for ai
- (refactor) removed the separate chat hook calls
  -- we now use the destructure from usechat and grab them all one time.
- (refactor) usage tokens display
  -- - We now pass it in from the usage state variable.
  -- - We removed the initialLast context variable. not needed anymore.
- (feat) update vote use Query
  -- we only enable the query when it not streaming and we have more than 2 messages. We added 30 sec stale time and we don't refetch on window focus.
- (feat) added stop button for stream.
  -- This helps to stop the messge if user isn't happy with content.
- reenabled Tanstack dev tools and fixed import
- (chore) update dependecies
- (feat) added button to insert old title into input
  -- this makes it easier for a user to edit the chat title in their new input since current one is disbled.
- (refactor) changed how we dynamically set chat title for new chats
  -- (refactor) we now only set the title via LLm when the message is longer than 10 words otherwise it's a waste for 1 or 2 word messages to have api call
- (feat) simple error handler for chat sessions live query
  -- it error's now because of the ssr but we will fix that.
- (feat) migration for chatId to chat_id
  -- we had issues with queries where we always ended up seeing that the queries would break because we did not put it in quotes due to the chatId. fixed now by only using chat_id.
- (refactor) improved drizzle config
  -- had issues with dot env so import and initalize differently
- (feat) added console log to see data parts.
- (chore) auto generated route tree
- (feat) Added a data stream provider to route /chat route
  -- Wrapped with provider to use resumable streams.
- (refactor) chat area. more to come
  -- - Improved location of context with animation to pop it up on mobile when user types a certain amount of character into chat.
  -- - Added back useAutoStream. This will handle resumable streams.
  -- - vote endpoint now has the {id} param for the chat.
  -- - added the data stream handler back.
- (refactor) added this back to use
  -- our resume stream functionality hook.
- (feat) data stream handler and provider.
  -- Still requires us to handle more parts of the handler for our various data types.
- (refactor) we uncommented
  -- we now use this file in our chat stream handling for resumable stream. It is the endpoint that will take the chatId param to return us the pending stream if any.
- (refactor) reenabled our resumable stream.
  -- We are working on making it work 100% still.
- (refactor) the chatId capitals causes query issues.
  -- fixed by using chat_id

**Total commits:** 39

## 2025-09-18 15:09

**Project 22**

- Add upvotes and downvotes functionality for chat messages
- Update routeTree.gen.ts
- (feat) votes live query
  -- we can now get all the user's votes and associate them together in loaders.
- (refactor) temp hardcode valid userId + style
  -- - clean imports from unused imports.
  -- - formatting
- (refactor) append where in the Project 2.
  -- - Helps to not expose where clause in Project 9 ui.
  -- - formatting and clearing up unused imports and schema.
- (refactor) added allowed_hosts from .env
  -- no more exposing our allowed_hosts list
- (refactor) schema naming all lower case with _
  -- we had query issues and migrations issues. But it's done now.

**Project 8**

- create explain progres.
  -- A script that we made to make an ai api call to summarize the latest days commit messages and append it to a journal file.
- Create daily_journal.md
  -- v1 of the journal now. We will improve it.
- ai sdk + gemini
- Update work_ive_done.md
- Update README.md
- name change to fix typo
- Add README.md for public work log quest
- final version of commits list.
- (console.logs to see process.
- first version of our work done commit sheet.
- Improved script to remove duplicate names
- (feat) hash to store the repo names
  -- syncs beyond runs so app can run quicker and less duplicates.
- (refactor) track repo names
  -- we now track repo names so we can insert commits in their project and not a new project.
- (refactor) duplication and date adding to header
  -- -no duplication on today + yesterday commits which was happening when we ran script after original new run.
  -- -Now it knows the commit is there and won't add it. We now add date + time to header and check from then always unless no date then we do since set date.
  -- - Removed the new arg not needed anymore.
- (refactor) we now get title of commit
  -- updated to add messages along with the commit title.
- script now uses a new argument to do a full sync.
- Updated script to better handle requirements.
- hello world

**Total commits:** 25
