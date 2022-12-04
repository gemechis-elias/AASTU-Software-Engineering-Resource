// Check if number is palindrome (word, number, phrase, or other sequence of characters which reads the same backward as forward)
#include <iostream>
#include <string.h>
using namespace std;


int main()
    {
    char word[100], revWord[100];

    cout<<"Enter the word: ";
    gets(word);
    strcpy(revWord, word);
    strrev(word);

        if(strcmp(word, revWord)==0){
            cout<<" The words is palindrome";
        }
        else{
            cout<<" The words is not palindrome";
        }



    }
