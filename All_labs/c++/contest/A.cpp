#include <bits/stdc++.h>
#include <vector>
using namespace std;

int main() {
	int n;
	cin>>n;
	vector<int> v(n);
    int a;
	for(int i=0; i<n;i++){
	    cin>>a;
        v[i]=i;
	}
    vector<int> v1(n);
    int i=1;
    int ne=n;
	while(ne>=0){
        if(ne>=2){
            v1[v[0]]=i;
            v1[v[2]]=i;
            i++;
            // cout<<v[0]<<" "<<v[2]<<endl;
            v.erase(v.begin());
            v.erase(v.begin()+1);
            ne-=2;
        }else{
            v1[v[0]]=i;
            // cout<<v[0]<<endl;
            break;
        }
        
    }

    // cout<<endl;
    for (int i = 0; i < n; i++)
    {
        cout<<v1[i]<<endl;
    }
    
	

}