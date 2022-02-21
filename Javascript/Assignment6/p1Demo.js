n = 5
string = ""
cherry = ""
base = ""
tree = ""
for (i = 0; i <= n * n + 1; i++) {
    temp_str = ""
    for (j = -n; j <= n; j++) {
        if (i == 0 || j == 0) {
            if (i == 0 && j == 0) {
                cherry += "o"
            }
            else {
                cherry += "*"
            }
        } else if (i == n * n + 1 || (j == 0 && i <= (n * n) && i >= ((n * n) - (n - 1)))) {
            temp_str += "="
        } else if ((j == -1 || j == 1)  && i >= ((n * n))) {
            temp_str += "|"
        } else if (i == j && i <= n && j <= n) {
            temp_str += "\\"
        } else if (i == -j && i <= n && j <= n) {
            temp_str += "/"
        } else {
            temp_str += "-"
        }
    }
}
console.log(cherry+temp_str);