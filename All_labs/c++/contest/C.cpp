#include <iostream>
#include <vector>
#include <algorithm>
#include <map>
using namespace std;

const int MAXN = 200005;
const int LOG = 20;

int N, Q;
vector<int> adj[MAXN];
int parent[MAXN][LOG], depth[MAXN], subSize[MAXN];
int tin[MAXN], tout[MAXN], timer = 0;

void dfs(int v, int p) {
    parent[v][0] = p;
    depth[v] = (p == 0 ? 0 : depth[p] + 1);
    tin[v] = ++timer;
    subSize[v] = 1;
    for (int i = 1; i < LOG; i++) {
        parent[v][i] = parent[ parent[v][i-1] ][i-1];
    }
    for (int u : adj[v]) {
        if(u == p) continue;
        dfs(u, v);
        subSize[v] += subSize[u];
    }
    tout[v] = ++timer;
}

int lca(int u, int v) {
    if(depth[u] < depth[v]) swap(u,v);
    for (int i = LOG-1; i >= 0; i--)
        if(depth[u] - (1 << i) >= depth[v])
            u = parent[u][i];
    if(u == v) return u;
    for (int i = LOG-1; i >= 0; i--)
        if(parent[u][i] != parent[v][i])
            u = parent[u][i], v = parent[v][i];
    return parent[u][0];
}

// Получить путь между A и B
vector<int> getPath(int A, int B) {
    int L = lca(A, B);
    vector<int> pathA, pathB;
    int cur = A;
    while(cur != L) {
        pathA.push_back(cur);
        cur = parent[cur][0];
    }
    pathA.push_back(L);
    cur = B;
    while(cur != L) {
        pathB.push_back(cur);
        cur = parent[cur][0];
    }
    reverse(pathB.begin(), pathB.end());
    for (int x : pathB)
        pathA.push_back(x);
    return pathA;
}

// Функция, возвращающая true, если x лежит в поддереве v (согласно эйлерову обходу)
bool inSubtree(int v, int x) {
    return tin[v] <= tin[x] && tout[x] <= tout[v];
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int T; 
    cin >> T;
    while(T--){
        cin >> N >> Q;
        // Очистка
        for (int i = 1; i <= N; i++){
            adj[i].clear();
        }
        timer = 0;
        // Чтение дерева
        for (int i = 1; i <= N-1; i++){
            int u, v;
            cin >> u >> v;
            adj[u].push_back(v);
            adj[v].push_back(u);
        }
        // Предобработка (фиксируем корень 1)
        dfs(1, 0);
        
        // Для каждого запроса
        while(Q--){
            int A, B;
            cin >> A >> B;
            // Получим путь монстра от A до B
            vector<int> path = getPath(A, B);
            // Определяем соседнюю вершину X от A на пути к B.
            int X;
            if(path[0] != A) { 
                // в теории не может быть, но на всякий случай
                X = path[0];
            } else {
                if(path.size() >= 2) X = path[1];
                else X = A; // не случится, т.к. A != B
            }
            
            // Определяем компоненту S_A (содержащую A), полученную удалением ребра (A,X).
            // Если A лежит на пути от A до B как LCA, то A = LCA(A,B)
            bool case1 = (lca(A,B) == A);
            int size_SA;
            if(case1){
                // опасное ребро направлено из A к X (X = path[1]).
                // S_A = V \\ (поддерево X) => |S_A| = N - subSize[X]
                size_SA = N - subSize[X];
            } else {
                // Иначе опасное ребро: (A, parent[A]) (где parent[A] = X)
                // S_A = поддерево[A]
                size_SA = subSize[A];
            }
            int size_U = N - size_SA;
            // Для удобства, сформируем булевый массив inU: inU[i] = true, если вершина i лежит в U.
            vector<bool> inU(N+1, false);
            if(case1){
                // U = subtree[X] i.e. все вершины x такие, что inSubtree(X, x) == true.
                for (int i = 1; i <= N; i++){
                    if(inSubtree(X, i)) inU[i] = true;
                }
            } else {
                // U = V \\ (subtree[A])
                for (int i = 1; i <= N; i++){
                    if(!inSubtree(A, i)) inU[i] = true;
                }
            }
            
            // Построим булев массив isOnPath для вершин, лежащих на пути P.
            vector<bool> isOnPath(N+1, false);
            for (int v : path)
                isOnPath[v] = true;
            
            // Для каждой вершины из U (исходя из полного перебора, т.к. N маленькое),
            // вычисляем её проекцию f(v): первый узел на пути от v к A, который лежит на P.
            // Если такой оказывается A, то не считаем вершину (так как u не может быть равным A).
            map<int,int> groupCount;
            for (int i = 1; i <= N; i++){
                if(!inU[i]) continue;
                int cur = i;
                while(cur != A && !isOnPath[cur]) {
                    cur = parent[cur][0];
                }
                if(cur == A) continue; // не считаем, проекция оказалась A
                groupCount[cur]++; // проекция равна cur (она обязательно лежит на P)
            }
            
            long long sumSquares = 0;
            for (auto &pr : groupCount)
                sumSquares += 1LL * pr.second * pr.second;
            long long safe_U = (1LL * size_U * size_U + sumSquares - 2LL * size_U) / 2;
            long long safe_SA = 1LL * (size_SA - 1) * (size_SA - 1);
            long long ans = safe_SA + safe_U;
            cout << ans << "\n";
        }
    }
    return 0;
}
