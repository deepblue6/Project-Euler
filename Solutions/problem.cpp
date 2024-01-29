#include <iostream>
int main() {
    int myArr[] = {20, 19, 18, 17, 16, 14, 13, 11};
    for(size_t i=0; i<100000000; i++) {
        for(auto j:myArr) {
            if(i%j==0) {
                std::cout << i ; return 0;
            }
        }
    }
    
    return 0;
}
