#include <iostream>
using namespace std;

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;
    while(t--){
        int x, y;
        cin >> x >> y;
        
        bool possible = false;
        if(y == x + 1)
            possible = true; 
        else {
            int diff = x - y + 1;
            if(diff > 0 && diff % 9 == 0)
                possible = true;
        }
        
        cout << (possible ? "YES" : "NO") << "\n";
    }
    return 0;
}
