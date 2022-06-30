// Passing one dimensional array to function
#include <iostream>
using namespace std;
float MyFunction(int arr[], int);
int main(){
    int n;
    cout<<"Enter number of subjects ";
    cin>>n;

    int myarry[n];   // initialising array

    // Taking all marks of the subject
    for(int i=0; i<n; i++){
        cout<<"Enter the marks: ";
        cin>>myarry[i];
    }

    cout<<"The avrage is "<< MyFunction(myarry, n); // Passing array to function
    
    }
float MyFunction(int arr[],int n){
   
    int sum=0;
    float avr;
    for(int i=0; i<n; i++ ){
        sum += arr[i];
    }
    avr = sum/n;
    return avr;
}
