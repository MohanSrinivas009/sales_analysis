# Sales Analytics Dashboard with Power BI, SQL, and Automated Data Pipeline

## Project overview

>This project is an end-to-end sales analytics solution built to transform raw transactional data into actionable business insights. The workflow covers data extraction, cleaning, modeling, dashboard development, and automated refresh.

Project demonstrates analysis of live data from deployed real  time database
+ SQL for querying and transforming data
+ API end-to-end point Building
+ Python/Pandas for cleaning and preprocessing from API's
+ Power BI for dashboarding and business intelligence
+ Automated data pipeline for near real-time reporting

## Business Problems
> A retail business generates sales, customer, and product data daily
+ Which regions generate the highest sales?
+ Which product categories perform best?
+ Which customer segments contribute the most revenue?
+ How do sales trends change over time?

### Datasets
> orders

| orderID | orderdate | shipdate | shipmode |customerID | ProductID | Sales |
|---------| --------- |----------|----------|----------|----------|----------|
|CA-2017-152156|08-11-2017|11-11-2017|Second Class|CG-12520|FUR-BO-10001798|261.96|

> customers

| customerID|	CustomerName|	City|	State|	Region|	Postalcode|	Segment|
|---------|---------|---------|---------|---------|---------|---------|
|CG-12520|	Claire| Gute|	Henderson|	Kentucky|	South|	42420|	Consumer|

> Products

|ProductID|	Category|	SubCategory|	ProductName|
|---------|---------|---------|---------
|FUR-BO-10001798	|Furniture	|Bookcases|	Bush Somerset Collection Bookcase|

## Project Architecture
     Raw Data Files / Database

            ↓

     SQL + Python Cleaning

            ↓
     Structured Data Model

            ↓

     Power BI Dashboard

            ↓

     Automated Refresh Pipeline
![Schema
](images/Schem%20and%20architecture.png)

### Datase and API's

    MySQL Database (Railway / InfinityFree / Render)
            ↓
    Python ETL Script using Pandas
            ↓
    REST API using Flask / FastAPI
            ↓
    Hosted API on Render / Railway
            ↓
    Power BI Connected to API Endpoint
The project database is hosted on a cloud platform called [Railway](https://railway.com/project/056ab463-9ae5-4855-a91d-8ae09eb53e17?) so the dashboard can access updated sales data from anywhere.

Express.js used to build RestFul API's to extract sales data to Power BI.

    GET /api/sales
    GET /api/customers
    GET /api/products
## Tools & Technologies

+ Python: 
Data cleaning and preprocessing
+ Pandas:
Data transformation and feature engineering
+ MySQL:
Data storage and SQL queries
+ Power BI:
Interactive dashboard creation
+ Power Query:
Data import and transformation
+ DAX:
KPI calculations and measures
+ GitHub:
Version control and portfolio hosting

### Data Cleaning and Preparation
The following preprocessing steps were performed before creating the dashboard:

+ Removed duplicate records
+ Handled missing values
+ Standardized date formats
+ Converted sales column to numeric format
+ Created relationships between Orders, Customers, and Products
+ Built a star schema for efficient reporting
+ Added derived columns such as:
    + Year
    + Month
    + Shipping Delay
    + ShipDate - OrderDate

![Datamodel](/images/Data%20Model.png)

__Relationships__

+ Customers[CustomerID] →Orders[CustomerID]
+ Products[ProductID] → Orders[ProductID]
+ Date Table[Date] → Orders[OrderDate]

## Dashboard preview & Visualizations

![Overview](/images//Overview.png), ![product performance](/images/Product%20performance.png), ![Sales](/images/Sales.png), ![Profits & Margin](/images/Profit%20&%20Margin.png)
+ Sales Trend by Month
+ Sales by Region
+ Sales by Customer Segment
+ Sales by Product Category and Products
+ Top 10 Products by Revenue
## Automation
The dashboard is configured for automatic refresh so that new records are loaded without manual intervention.

Pipeline flow:

+ New data enters the database
+ Power BI connects to the updated source
+ Scheduled refresh updates the dashboard automatically
+ Dashboard users always see the latest data

Possible deployment options:

+ Power BI Service scheduled refresh
+ Cloud-hosted database
+ API-based refresh pipeline

## Business Insights Generated



+ The West region contributes the highest sales revenue.
+ Office Supplies generate high order volume but lower average revenue.
+ Technology products produce the highest revenue per order.
+ Corporate customers generate higher average order value than Consumer customers.

## Skills Demonstrated

This project highlights the following skills:

+ Data Cleaning
+ Exploratory Data Analysis
+ SQL Querying
+ Data Modeling
+ Dashboard Design
+ DAX Calculations
+ ETL Pipeline Development
+ Business Intelligence Reporting
+ Problem Solving
+ Communication of Insights

Future Improvements
+ Add forecasting using time-series analysis
+ Integrate live API data
+ Deploy dashboard to a portfolio website
+ Add customer churn and profitability analysis
+ Build advanced KPIs using DAX
