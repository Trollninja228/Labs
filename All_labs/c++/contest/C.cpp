#include <bits/stdc++.h>
using namespace std;
 
// Функция has7: проверяет, содержит ли число хотя бы одну цифру 7.
bool has7(long long x) {
    while(x) {
        if(x % 10 == 7)
            return true;
        x /= 10;
    }
    return false;
}
 
// Функция digitSum: вычисляет сумму цифр числа.
int digitSum(long long x) {
    int s = 0;
    while(x) {
        s += x % 10;
        x /= 10;
    }
    return s;
}
 
// Функция fOperations(X)
// Для данного X (где X = m - n, и гарантированно X кратно 9)
// ищет минимальное k (число операций), такое что:
//      k >= digitSum(X + k)
int fOperations(long long X) {
    // перебираем k от 0 до разумного предела (500 – этого более чем достаточно)
    for (int k = 0; k < 500; k++){
        int ds = digitSum(X + k);
        if(k >= ds)
            return k;
    }
    return 1000; // этот случай возникнуть не должен
}
 
// Функция nextCandidate(L, mod)
// Ищет минимальное m >= L такое, что m ≡ mod (mod 9) и m содержит цифру 7.
long long nextCandidate(long long L, int mod) {
    const long long LIMIT = 100000LL; // предел перебора – обычно промежутки небольшие
    for (long long m = L; m < L + LIMIT; m++){
        if(m % 9 == mod && has7(m))
            return m;
    }
    return -1; // если в пределах LIMIT ничего не найдено
}
 
// Основная программа.
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
 
    int t;
    cin >> t;
    while(t--){
        long long n;
        cin >> n;
        // Если n уже содержит цифру 7 – ответ 0.
        if(has7(n)){
            cout << 0 << "\n";
            continue;
        }
        // Итоговое m, достижимое за разрешённые операции, всегда удовлетворяет m ≡ n (mod 9).
        int mod = n % 9;
 
        int best = INT_MAX;
        long long L = n;
        // Будем перебирать несколько кандидатов m (например, 100 штук – обычно оптимальный ответ маленький).
        for (int i = 0; i < 100; i++){
            long long cand = nextCandidate(L, mod);
            if(cand < 0) break; // если в пределах LIMIT не нашли кандидата, выходим
            long long diff = cand - n; // X = m - n
            int ops = fOperations(diff);
            best = min(best, ops);
            // Если уже нашли очень маленький ответ (например, 0 или 1), то дальше искать не надо.
            if(best <= 1)
                break;
            L = cand + 1; // следующий кандидат – после найденного
        }
 
        cout << best << "\n";
    }
    return 0;
}
