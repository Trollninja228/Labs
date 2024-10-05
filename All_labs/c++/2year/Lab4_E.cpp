#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Node
{
public:

    Node* parent;
    Node* left;
    Node* right;
    int value;

    Node(int data){
        parent = NULL;
        left = NULL;
        right = NULL;
        value = data;
    }
};


class BST
{
private:
    Node* root;
public:
    BST(){
        root = NULL;
    }
    ~BST(){
        clear(root);
    }
    void clear(Node* node){
        if(node){
            clear(node->left);
            clear(node->right);
            delete node;
            //cout<<"You lozer!"<<" ";
        }
    }
    

    void inOrderWalk(Node* node){
        if(node){
            inOrderWalk(node->left);
            cout<<node->value<<" ";
            inOrderWalk(node->right);
        }
    }
    void print(){
        inOrderWalk(root);
    }
    int calc_level(Node *node){
        int i=0;
        while(node->parent!=nullptr){
            i++;
            node=node->parent;
        }
        return i;
    }
    vector<pair<int,int> > inOrderWalk2(Node* node, vector<pair<int,int> > &v){
        if(node){
            inOrderWalk2(node->left, v);
            pair<int,int> p;
            p.first=calc_level(node);
            p.second=node->value;
            //cout<<p.first<<" "<<p.second<<endl;
            v.push_back(p);
            inOrderWalk2(node->right, v);
        }
        return v;
    }
    vector<pair<int,int> > calc_sum(){
        pair<int,int> p;
        vector<pair<int,int> > v;
        Node *node=root;
        v=inOrderWalk2(node,v);
        return v;
    }
    Node *search(Node *node, int n){
        if (!node || node->value == n)
            return node;

        Node* found = search(node->left, n); 
        if (found) 
            return found;

        return search(node->right, n);
    }
    void insert(int n){
        int x,y,z;
        cin>>x>>y>>z;
        root=new Node(x);
        Node *node=root;
        Node *start=root;
        if(z==0){
            Node *temp=node;
            node->left = new Node(y);
            node=node->left;
            node->parent=temp;
        }else{
            Node *temp=node;
            node->right = new Node(y);
            node=node->right;
            node->parent=temp;
        }
        for(int i=0;i<n-2;i++){
            cin>>x>>y>>z;
            node=search(start, x);
            if(z==0){
            Node *temp=node;
                node->left = new Node(y);
                node=node->left;
                node->parent=temp;
            }else{
                Node *temp=node;
                node->right = new Node(y);
                node=node->right;
                node->parent=temp;
            }
        }
    }
};

int main(){

    BST b;
    int n;
    cin>>n;
    b.insert(n);
    //b.print();
    vector<pair<int,int> > v;
    v=b.calc_sum();
    sort(v.begin(),v.end());
    int max=0;
    int num;
    for (int i = 0; i<v.size(); i++){
        num=0;
        //cout<<i<<endl;
            while(v[i].first==v[i+1].first){
                
                num++;
                i++;
            }
        if(max<num){
            max=num;
        }
    }
    cout<<max+1;
}