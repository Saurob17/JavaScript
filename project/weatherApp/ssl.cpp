#include <bits/stdc++.h>
using namespace std;
long long sumOF(long long n)
{

    long long sum = 0;
    for (int i = 1; i < n; i++)
    {

        sum += i;
    }
    return sum;
}
int main()
{
    int n, m;
    cin >> n;
    vector<int> a(n);
    map<int, int> mp;

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        mp[a[i]]++;
    }
    long long ans = 0;
    for (auto it : mp)
    {
        if (it.second > 1)
        {
            ans += sumOF(it.second) * (n - it.second);
        }
    }

    cout << ans << endl;
}