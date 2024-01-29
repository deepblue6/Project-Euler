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
    long long int bigNum = 2000000;
    long long int primeCounter = 0;
    long long int c = 0;
    long long int primeSums = 0;

    while (1) {
        if (bigNum <= primeSums) {
            printf("%lld\n", c);   // Use %lld for long long
            printf("%lld\n", primeSums); // Use %lld for long long
                break;
            }
        c++;
        if (isPrime(c)) {
            primeCounter++;
            primeSums = primeSums + c;
        }
    }

    return 0;
}
