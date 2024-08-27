// console.log("Hello world! :D")

// === TIPE DASAR TYPESCRIPT ===

// 1. primitive types => number, string, boolean

// const age: number = 25;
// const fullName: string = "Naruto";
// const isStudent: boolean = true;

// 2. any dan unknown
// const vAny : any = 10
// const vUnknown : unknown = 10

// const s1: string = vAny
// const s2: string = vUnknown
// const s3: string = vUnknown as string // type assertion

// vAny.apapun()
// vUnknown.apapun()

// 3. union dan intersection types

// union => ATAU => |

// let value : string | number | boolean
// value = "haha"
// value = 42
// value = false

// intersection => DAN => &

// type A = {
//     a: string
// }

// type B = {
//     b: number
// }

// let value : A & B

// let value: { a: string } & { b: number };

// value = { a: "aa", b: 12312 };

// 4. literal types

// type Direction = "left" | "right"
// let direction1: Direction = "left"
// let direction2: Direction = "right"

// 5. enum

// const COLOR = { ❌
//   Red: "Red",
//   Green: "Green",
//   Blue: "Blue",
// };

// const test = COLOR.Red

// enum AppColor {
//   Red = "Red",
//   Gray = "Gray",
// }

// enum BrandColor {
//   Red = "Red",
//   Green = "Green",
//   Blue = "Blue",
// }

// let appColor: AppColor = AppColor.Gray;
// let brandColor: BrandColor = BrandColor.Blue;

// console.log("appColor", appColor);
// console.log("brandColor", brandColor);

// === Interfaces dan Type Aliases ===

// 1. Interface

// interface User {
//   // PascalCase
//   fullName?: string;
//   age: number;
// }

// let user: User = {
//    age: 27
// }

// 2. type aliases
// type User = {
//   fullName?: string;
//   email: string;
//   password: string;
// };

// const user : User = {
//     email: "surya@gmail.com",
//     password: "xxxx"
// }

// Contoh extending interface dan type aliases

// 1. extending interface

// interface User {
//   fullName?: string;
//   email: string;
//   password: string;
// }

// interface Profile {
//   image?: string;
//   age?: number;
//   birtDate?: Date;
//   address: string;
// }

// interface UserProfile extends User, Profile {}

// const userProfile: UserProfile = {};

// 2. extending type aliases

// type User = {
//   fullName?: string;
//   email: string;
//   password: string;
// };

// type Profile = {
//   image?: string;
//   age?: number;
//   birtDate?: Date;
//   address: string;
// };

// type UserProfile = User & Profile

// const userProfile : UserProfile = {
//     address: "asdf",
//     email:"sdfasf",
//     password: "123123",
// }

// === KONFIGURASI DAN KOMPILASI DI TYPESCRIPT ===