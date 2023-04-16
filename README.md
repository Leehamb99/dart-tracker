

This project is deployed on netlify. https://dartsscorermoite.netlify.app/ 

It is currently in an MVP state but all features will work given correct inputs. 
A lot of bugs are most likely present. 

Known Bugs : 

  - All Logged in users must be selected for game to start, otherwise crash. (create error boundary)
  - At least 1 user must be clicked for game to start, otherwise crash. (create error boundary)
  - Triple and Double Toggle not implemented. 
  

Created with React.JS, utilizing react-router-dom, axios and tailwindCSS.

Consumes an API built by myself that consists of Python (Django), rest_framework lib and simple_jwt.
