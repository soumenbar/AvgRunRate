Average Run Comparison Web App 

•	Information:  It Is a Web App to show and comparison between two different country’s average run rates by horizontal bar graph.

•   Buttons and Fields: 
        oTwo radio buttons
        oTwo input fields

•	 Function of Radio button: Using radio button user can change source of     from Static data to Servers dynamic data.

•	Function of Input fields: In this fields user can type name of the countries if country name is matched with local data or server data of app it will show run rate.

•	Status:  
        o Input fields are not case sensitive for country name with single word.
        o Input fields are case sensitive for country name with more than one word to get accurate result use have to     capitalize the first letter of every word.



Technical Informations
•	Tech stack Used:  HTML, CSS, JavaScript, React JS

•	Process:
     o Made two different components  one is for show result of Test Data another one is for Server Data.
     o Imported two components in App.js component.
     o In Test Data component used a static data in Array of object format and used Reducer method to fetch data according to use case.
     o For Server Data used an api and fetched data from server using Axios.
     o For both components used useState() hook to main states.
•	Links:
     o Github code link: https://github.com/soumenbar/AvgRunRate.git
