#include <stdio.h>

int main() {
    // 10,001st prime number
    int bigNum = 10001;
    int running = 1;
    int primeCounter = 0;
    int c = 0;

    while (running) {
        c++;

        // Check if c is divisible by 2, 3, or 5
        if (c % 2 == 0 || c % 3 == 0 || c % 5 == 0) {
            printf("Prime No\n");
        } else {
            primeCounter++;
            printf("Prime Yes\n");
            if (primeCounter == bigNum) {
                printf("%d\n", c);
                break; 
            }
        }
    }
}
