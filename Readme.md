# BigTrip: a travel planning application
by: Egor Pestov <egorpestov2012@yandex.ru>


---

<b>Stack:</b> HTML, CSS, JS, Babel, Webpack

---

<b>BigTrip:</b> a travel planning application. The app serves as an assistant for planning the logic of your trip, whether it's a trip from one city to another, or a flight from one country to another. The laconic interface combined with extensive functionality helps the user to easily plan the sequence of their trip and calculate the total cost, taking into account even small expenses.

The main functionality of the application includes editing and managing route points, applying filters, sorting, and interacting with the server.

* Users can create new route point by clicking "New Event" or edit route points by clicking on the "down arrow" button in the route point card, which opens an editing form. The form allows users to modify the fields of the route point and provides options to save or delete the point. Unsaved changes are discarded if the user closes the form without saving.

* When creating or editing a route point, users have access to a block of additional options specific to the selected point type. These options can vary based on the type of point and may include checkboxes or dropdown menus to select available offers. The behavior of these options remains consistent with the rules defined for creating a new route point.

* When the type of a route point is changed, the additional options block is redrawn if the new selected type has associated offers, or it is hidden if there are no offers available. User-entered data in other fields is preserved during this process.

* The availability of offers can enhance the user experience by providing customization and flexibility in planning their trip. These options allow users to tailor their route points to their preferences and needs, making their journey more personalized and enjoyable.

* The application also features filters that allow users to view specific subsets of route points. The available filters include "Everything" for the complete list, "Future" for planned points, "Present" for current points, and "Past" for past points. Selecting a filter updates the displayed route points accordingly.

* Sorting functionality is provided for arranging the route points. Users can sort the points by price or duration in descending order.

* The application interacts with a server. The server responses are used to update the DOM, and any changes to the route points (such as deletion or updating) are only reflected after successful communication with the server.

* Additionally, the interface provides feedback to the user during server requests and form submissions. Buttons change their titles to indicate the ongoing process, and the interface is temporarily locked until the request completes. If an error occurs, the editing form may shake, and appropriate error messages are displayed.

* The total cost of the trip is automatically recalculated whenever a new route point is created, edited, or deleted, as well as when any offers are added or modified.

* Furthermore, the header of the application dynamically generates the first and last points of the route. This representation of the route allows users to quickly understand the main destinations.

* Users can easily access important details such as the total cost of the trip, considering all the offers, and a summarized view of the itinerary's starting and ending points with the applied offers. These additions contribute to a more comprehensive and informative user experience.
