//Convert Uppercase to lowercase 
#include <iostream>
#include <string.h>
using namespace std;


int main()
    {
    char word[100] ;
    gets(word);
    
    for(int i=0; word[i] !='\0'; i++){
        word[i]=(word[i]>='A' && word[i]<='Z')?word[i]+32:word[i];
      
    }
    


    }
