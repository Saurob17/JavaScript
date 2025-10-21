#include <bits/stdc++.h>
using namespace std;

int main() {
 
    int t;
    cin >> t;
    while (t--) {
        long long a, b;
        cin >> a >> b;

        vector<long long> o;

        if (a == b) {
            cout << 0 << endl; 
            continue;
        }

        long long diff = a ^ b;

        if (diff <= a) {
            o.push_back(diff);
        } else {
            bool f = false;
            long long x1,x=a&-a,x2;
            for (long long x1 = 0; x1 <= 100; x1++) {
             
           

            }
            if (!f) {
                cout << -1 <<endl;
                continue;
            }
        }
        cout << o.size() << endl;
        for (size_t i = 0; i < o.size(); i++) {
            cout << o[i] << " ";
        }
        cout<<endl;
    }

    return 0;
}//https://codeforces.com/blog/entry/132272
