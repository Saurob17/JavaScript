#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;
    while (t--) {
        int N;
        string S;
        cin >> N >> S;

        int o = 0;
        for (char c : S) if (c == '1') ++o;
        if (o == 0) {
            cout << "YES\n";
            continue;
        }

        int m = 0, cur = 0;
        for (char c : S) {
            if (c == '1') ++cur;
            else { m = max(m, cur); cur = 0; }
        }
        m = max(m, cur);

        if ((m == 2 || m == 3) && o == m) cout << "NO"<<endl;
        else cout << "YES"<<endl;
    }
    return 0;
}
