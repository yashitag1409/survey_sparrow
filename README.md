
# survey_sparrow
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


About the project 

this Calendar is for the demo purpose only , which contains only the static details like event details, event date, start time, end time ,event colour, event title 



Files 

JSON FILES:

1: EventData.json : this file contains all the static data of any random dates with rendom time and details

2: CalenderJSON.json : this file contains all days , months name and also months short form


utils:
  Methods
      1 :Colour themeing: darken.js : inside this there are 2 methods 
              1 : darken : where developer can dark any colour used for the left border of event date
              2: lighen : where developer can light any colour used for the background of event date
      2: formatDates.js : this is for the formating purpose : for eg: 2025-08-25 then --> wednesday , August 25 , 2025 
      3: initials.js : this method is used for creating the initails of any title when user see calander in mobile
      
      


Components:

1: Calender Header
2: Calender Parent
3: Modals
4: Event details
5: table

