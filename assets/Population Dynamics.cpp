//in Population Dynamics solve Euler's Method method code in c++
#include<bits/stdc++.h>
using namespace std;
#define ll              long long

// Function to calculate the derivative of the population
double populationDerivative(double population, double growthRate)
{
    return growthRate * population;
}

// Euler's Method for solving ODE
double eulerMethod(double initialPopulation, double growthRate, double timeStep, double targetTime)
{
    double population = initialPopulation;
    double currentTime = 0.0;

    while (currentTime < targetTime)
    {
        double derivative = populationDerivative(population, growthRate);
        population = population + timeStep * derivative;
        currentTime += timeStep;
    }

    return population;
}

double populationGrowth(double population, double growthRate)
{
    return growthRate * population;
}

// Function to solve Population Dynamics using Heun's Method
double solvePopulationDynamics_Heun_Method(double initialPopulation, double growthRate, double timeStep, double targetTime)
{
    double population = initialPopulation;

    double time = 0.0;
    while (time < targetTime)
    {
        // Calculate the population growth at the current time step
        double k1 = populationGrowth(population, growthRate);

        // Calculate the population growth at the next time step (predicted value)
        double predictedPopulation = population + (k1 * timeStep);
        double k2 = populationGrowth(predictedPopulation, growthRate);

        // Calculate the average of the two growth rates
        double averageK = (k1 + k2) / 2.0;

        // Update the population using the average growth rate
        population = population + (averageK * timeStep);

        // Increment the time by the time step
        time += timeStep;
    }

    return population;
}

// Function to solve Population Dynamics using RK4 Method
double solvePopulationDynamics_RK4(double initialPopulation, double growthRate, double timeStep, double targetTime)
{
    double population = initialPopulation;

    double time = 0.0;
    while (time < targetTime)
    {
        // Calculate the population growth at different time steps
        double k1 = populationGrowth(population, growthRate);
        double k2 = populationGrowth(population + (k1 * (timeStep / 2.0)), growthRate);
        double k3 = populationGrowth(population + (k2 * (timeStep / 2.0)), growthRate);
        double k4 = populationGrowth(population + (k3 * timeStep), growthRate);

        // Update the population using the weighted average of the growth rates
        population = population + ((k1 + 2.0 * k2 + 2.0 * k3 + k4) * (timeStep / 6.0));

        // Increment the time by the time step
        time += timeStep;
    }

    return population;
}
void test_case(){

    double initialPopulation;
    double growthRate;
    double timeStep;
    double targetTime ;
    double RealValue ;

    cout << "initialPopulation :";
    cin >> initialPopulation;
    cout << "growthRate :";
    cin >> growthRate;
    cout << "timeStep :";
    cin >> timeStep;
    cout << "targetTime :";
    cin >> targetTime;
    cout << "RealValue :";
    cin >> RealValue;

//    cin >> initialPopulation >> growthRate >> timeStep >> targetTime;

    double finalPopulation_eulerMethod = eulerMethod(initialPopulation, growthRate, timeStep, targetTime);

    cout << "Final Population Euler's Method: " << finalPopulation_eulerMethod << "\t\t| error : "<< abs((finalPopulation_eulerMethod - RealValue) / RealValue) * 100<< endl;


    // -------------------------------------



    // Solve Population Dynamics using Heun's Method
    double finalPopulation_Heun_Method = solvePopulationDynamics_Heun_Method(initialPopulation, growthRate, timeStep, targetTime);

    // Display the final population value
    cout << "Population Heun Method: " << finalPopulation_Heun_Method  << "\t| error : "<< abs((finalPopulation_Heun_Method - RealValue)/ RealValue) * 100    << endl;


    // -------------------------------------


    // Solve Population Dynamics using RK4 Method
    double finalPopulation_RK4 = solvePopulationDynamics_RK4(initialPopulation, growthRate, timeStep, targetTime);

    // Display the final population value
    cout << "Final Population RK4 Method: " << finalPopulation_RK4 << "\t\t| error : "<< abs((finalPopulation_RK4 - RealValue) / RealValue) * 100 << endl;
    cout << "\n\n\n";
}
int main()
{
    ll t; cin >> t;

    while (t--){
        test_case();
    }
    return 0;
}


https://docs.google.com/presentation/d/1uqWF4fQ_vMAy6QKvTAprXYI0JZGM0cTw/edit?usp=drivesdk&ouid=109340411065539363636&rtpof=true&sd=true

