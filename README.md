<p align="center"> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a>  </p>

<h1 align="center">Orderly - Inventory Tracking and Order Automation</h1>

Orderly allows businesses to have orders placed automatically when each product's in stock amount hits it's target point. Once the orders are automatically placed, the user will be notified of order and the expected arrival date of the shipment. What makes Orderly different from other order automation technologies? See features below:
<section align="center">
<a href="https://orderly.pro/" target="_blank" rel="noreferrer">
<img src="https://i.ibb.co/9H01gcr/orderly-Pic.png" alt="orderly picture" width="620" height="400"/>
</a>
  </section>
  
<h2 align="center">Features</h2>

### Inventory tracking:
- Pin inventory items to the top of the list for easy access.
- Filter inventory items by SKU, brand, or quantity in ascending or descending order.
- Add, edit, and delete inventory items.
- Upload and delete inventory items in bulk using a CSV file and a checkbox selection popup.
### Inventory and Orders:
- View active orders from the inventory page.
- Highlight inventory items and their corresponding orders with the same color for easy tracking.
- Edit the "target" and "reorder at" points of each product and the amount to be ordered.
### Order automation:
- Automatically create orders when an item's target point is reached.
- Create additional orders at multiple points below the target point (40% to 70% and 0% to 40% of stock) to maintain inventory levels.
### Manual Orders and Deliveries:
- Create one-time orders with a desired quantity via the "order now" popup.
- Mark orders as delivered to increase the "In Stock" amount and move them to the order history section.

<h2 align="center">Misc</h2>

### Installation
- Clone the repository.
- Add an .env file to the Server and Client folders. Request the file contents from one of the project owners and insert all environment variables.
Run the following commands in separate terminals:
- cd server -> npx prisma generate -> npm install -> npm run dev
- cd client -> npm install -> npm run dev

### License
This work is licensed under a <a href="https://creativecommons.org/licenses/by-nc/4.0/legalcode" target="_blank">Creative Commons Attribution-NonCommercial 4.0 International License</a>.

### Acknowledgments
Special thanks to Danny Thompson and Scott Thompson of Dallas Software Developers for organizing and volunteering for this cohort.<br>They provided the foundation that allowed us to build a successful application.
