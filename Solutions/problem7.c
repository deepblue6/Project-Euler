#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
    if (n <= 1) {
        return false;  // 1 and any negative number are not prime
    }
    if (n <= 3) {
        return true;   // 2 and 3 are prime
    }
    if (n % 2 == 0 || n % 3 == 0) {
        return false;  // Numbers divisible by 2 or 3 are not prime
    }
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;  // Numbers divisible by i or i+2 are not prime
        }
    }
    
    return true;  // If none of the above conditions matched, it's prime
}

int main() {
    int bigNum = 10001;
    int primeCounter = 0;
    int c = 0;

    while (1) {
        c++;
        if (isPrime(c)) {
            primeCounter++;
            if (primeCounter == bigNum) {
                printf("%d\n", c);
                break;
            }
        }
    }

    return 0;
}
