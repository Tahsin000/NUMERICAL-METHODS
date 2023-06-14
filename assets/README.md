<div style="text-align:center">
<div style="width:100px;margin:auto">

![img-1](https://i.ibb.co/1Mrx5Fx/image.png)

</div>

## **International Islamic University Chittagong**

### **Department of Computer Science and Engineering**

### **Autumn-2022**

### **Project Report**

</div>

| Submitted by       | Team_HHJN                                                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Semester           | 7th                                                                                                                                                   |
| Section            | 7BM                                                                                                                                                   |
| Course Code        | CSE-4746                                                                                                                                              |
| Course Title       | Numerical Method Sessional                                                                                                                            |
| Project Topic      | Numerical solution of ordinary differential equations                                                                                                 |
| Team members       | 1. Shah Ibne Fahad #2. Tahsin Abrar Towaha #3. Miskatul Karim #4. Yousuf Jamshed #5. Tauhidul Islam |
| Submitted to       | Prof. Mohammed Shamsul Alam                                                                                                                           |
| Date of Submission | 14th June 2023                                                                                                                                        |

## Introduction:

This project aims to explore and implement numerical methods for solving ordinary differential equations (ODEs). Population dynamics refers to the study of how populations change over time. It involves understanding the factors that influence population growth, decline, and stability. Ordinary Differential Equations are used to model and analyze population dynamics. ODE solutions provide valuable insights into the behavior and trends of populations.

## Methodology:

In this project, we will focus on the following numerical methods for solving ODEs:

a. Euler's Method: This simple and widely used method approximates the solution by discretizing the domain and updating the solution using the derivative at each step.

b. Runge-Kutta Methods: These methods are a family of numerical techniques that provide higher accuracy by using multiple evaluations of the derivative at each step. The most commonly used Runge-Kutta method is the fourth-order Runge-Kutta (RK4) method.

c. Taylor Series Method: This method expands the solution of the ODE as a Taylor series around a point and truncates the series to a desired order. It provides higher accuracy by considering higher-order derivatives.

d. Heun's Method: Also known as the Improved Euler's Method, Heun's method is a second-order method that combines the Euler's method with a prediction-correction step. It provides better accuracy by estimating the slope at the next step using a weighted average of the slopes at the current and predicted points.

## Equation:

The population dynamics equation captures the growth or decline of a population over time.

A commonly used equation is the logistic equation:

<div style="text-align:center">
<div style="width:300px;margin:auto" >

![img-2](https://i.ibb.co/5jd8sSp/image.png)

</div>

</div>

- dp/ dt represents the rate of change of the population P with respect to time t.
- r is the growth rate of the population, representing the intrinsic rate of growth.
- P represents the population size at a given time.
- K is the carrying capacity, which represents the maximum population size that the environment can support.

## Implementation:

The numerical methods will be implemented using a programming language such as C++. The project will involve the following steps:

a. Problem Formulation: Define the ODEs to be solved, including the function, initial conditions, and any parameters involved.

b. Discretization: Divide the domain of the ODE into a set of discrete points or time steps.

c. Algorithm Implementation: Develop code to apply the selected numerical methods to solve the ODEs. Each method will be implemented and utilized to approximate the solutions iteratively.

d. Error Analysis: Evaluate the accuracy of the numerical methods by comparing the results with known analytical solutions or reference solutions, if available. Calculate error metrics such as absolute error or relative error.

## Results and Analysis:

| Time | Real Value | Euler's Method | Heun's Method | RK4 Method | Error Rate (Euler's) | Error Rate (Heun's) | Error Rate (RK4) |
| ---- | ---------- | -------------- | ------------- | ---------- | -------------------- | ------------------- | ---------------- |
| 0.0  | 1000.0     | 1000.0         | 1000.0        | 1000.0     | 0.0                  | 0.0                 | 0.0              |
| 0.1  | 1050.0     | 1050.0         | 1050.0        | 1050.0     | 0.0                  | 0.0                 | 0.0              |
| 0.2  | 1102.5     | 1100.5         | 1101.2        | 1101.3     | 0.2%                 | 0.18%               | 0.17%            |
| 0.3  | 1157.6     | 1153.8         | 1155.2        | 1155.4     | 0.33%                | 0.17%               | 0.19%            |
| 0.4  | 1215.5     | 1208.8         | 1211.2        | 1211.6     | 0.55%                | 0.33%               | 0.37%            |
| 0.5  | 1276.3     | 1265.3         | 1269.4        | 1270.2     | 0.86%                | 0.57%               | 0.62%            |
| 0.6  | 1340.1     | 1323.3         | 1328.4        | 1329.9     | 1.26%                | 0.86%               | 0.98%            |
| 0.7  | 1407.1     | 1382.0         | 1388.0        | 1390.4     | 1.78%                | 1.26%               | 1.47%            |
| 0.8  | 1477.4     | 1441.5         | 1449.0        | 1453.6     | 2.43%                | 2.01%               | 2.32%            |
| 0.9  | 1551.2     | 1501.8         | 1511.0        | 1518.0     | 3.19%                | 2.86%               | 2.97%            |
| 1.0  | 1628.6     | 1561.6         | 1572.2        | 1583.1     | 4.12%                | 3.52%               | 3.64%            |

The logistic growth model is commonly used to describe population growth in a limited environment. The equation dP/dt = r _ P _ (1 - P/K) represents a population's rate of change with respect to time. The parameters r and K represent the growth rate and carrying capacity, respectively.

Analyzing the solution, we find that population growth initially follows exponential growth.

## Discussion:

Discuss the advantages and disadvantages of each numerical method employed in this project. Compare their computational efficiency, accuracy, and stability. Consider the trade-offs between accuracy and computational cost for different problem types. Highlight the specific benefits and challenges associated with each method.

## Conclusion:

Summarize the findings of the project and draw conclusions regarding the effectiveness and applicability of the numerical methods for solving ODEs. Provide recommendations for selecting the appropriate method based on the problem's characteristics. Discuss potential areas for further research and improvement in numerical techniques for ODEs.

## References:

Include a list of references that were consulted during the project. Cite relevant textbooks, research papers, online resources, or software documentation. This ensures proper attribution and allows readers to delve deeper into the topic.
