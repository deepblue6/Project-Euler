#include <stdio.h>
#include <stdbool.h>

// int myNumbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
int c = 0;
int running = 1;

int main() {
    while (running) {
        c++;
        bool divisible;
        for(int i = 0; i <= 20; i++) {
            if(c % i != 0) {
                divisible = false;
                break;
            }
            else {
                printf("%d\n", c);
                running = 0;
                break;
                }
    }

    return 0; // Add a return statement at the end of the main function
}
}
