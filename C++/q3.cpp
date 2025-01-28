#include <iostream>
#include <string>

using namespace std;

int main() {
    int num;
    cout << "Enter any number: ";
    cin >> num;
    string numStr = to_string(num);

    int firstDigit = numStr[0] - '0';                        // Convert first character to integer
    int lastDigit = numStr[numStr.length() - 1] - '0';       // Convert last character to integer

    int sum = firstDigit + lastDigit;
    cout << "Sum of first and last digit: " << sum << endl;
}
