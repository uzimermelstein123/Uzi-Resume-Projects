#include <iostream>
#include <string>
#include <vector>

using namespace std;

#define ANYPRIMTYPE Any *


class Any {
    public:
        Any() {
            cout << "Default-constructor" << endl;
        }
        ~Any() {
            cout << "Destructor" << endl;
        }
        virtual void showType() {
            cout << "String or int" << endl;
        }
        virtual void showValue() {
            cout << "Any primitive type" << endl;
        }
};
// class Integer : public Any {
//     private:
//         int Int;
//     public:

//         Integer() {}
//         Integer(int inputInt) {
//             Int = inputInt;
//         }
//         ~Integer() {
//             cout << "Integer Destructor" << endl;
//         }
//         int getValue() {
//             return Int;
//         }
//         virtual void showValue() {
//             cout << "It's an integer: " << Integer::getValue() << endl;
//             // return Int;
//         }
// };
// class String : public Any {
//     private:
//         string Str;
//     public:
//         String() {}
//         String(string inputStr) {
//             Str = inputStr;
//         }
//         ~String() {
//             cout << "String Destructor" << endl;
//         }
//         string getValue() {
//             return Str;
//         }
//         virtual void showValue() {
//             cout << "It's a string: " << String::getValue() << endl;

//         }
// };
template<typename S>
class PrimType : public Any {
    private:
        S Val;
    public:
        PrimType() {}
        PrimType(S input) : Val(input) {
            // Val = input;
        }
        ~PrimType() {
            cout << "PrimType Destructor" << endl;
        }
        S getValue() {
            return Val;
        }
        string findType(const string &type) {
            // can't use switch statement on strings
            if (type == "i") {
                return "int";
            } else if (type == "d") {
                return "double";
            } else if (type == "f") {
                return "float";
            } else if (type == "b") {
                return "bool";
            } else if (type == "c") {
                return "char";
            } else if (type == "Pc") {
                return "pointer to char";
            } else if (type == "Pv") {
                return "pointer to void";
            } else if (type.find("string")) {
                return "string";
            }
            else {
                return type;
            }
        }
        virtual void showType() {
            cout << findType(typeid(PrimType::getValue()).name());
        }
        virtual void showValue() {
            // cout << "It's a " << findType(typeid(PrimType::getValue()).name()) << " : " 
            //     << PrimType::getValue() << endl;
            cout << PrimType::getValue();
        }
};




int main() {

    vector<ANYPRIMTYPE> vec;

    vec.push_back(new PrimType<int>(2));
    vec.push_back(new PrimType<string>("test"));
    vec.push_back(new PrimType<char>('e'));
    vec.push_back(new PrimType<int>(2));

    for (int i = 0; i < vec.size(); i++) {
        vec[i]->showValue();
            cout << " ";
        vec[i]->showType();
            cout << '\n';
    }
    
    // deallocate memeory when have an array of pointers
    for (int j = 0; j < vec.size(); j++) {
        delete vec[j];
    }

}