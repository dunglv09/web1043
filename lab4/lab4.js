let person = {
    firsName: "Ha",
    lastName: "Tran",
    cccd: 15452455,
    dob: "4/5/2052",
    getFullName: function(){
        let fullName = this.lastName + " " + this.firsName;
        return fullName;
    }
};


//in ra day du ho ten
console.log(person.getFullName());

//class truy cap doi tuong
class SinhVien {
//tao constructor 
    constructor(masv, ho, ten, namSinh, email) {
        this.masv = masv;
        this.ho = ho;
        this.ten = ten;
        this.namSinh = namSinh;
        this.email = email;
    }
    // tinhtuoi cho sinh vien
    getAge() {
        const date =new Date();
        let currentYear = date.getFullYear();
        let age = currentYear - this.namSinh;
        return age;
    }

    //in ra full name
    getFullName() {
        return this.ho + " " + this.ten;
    }
}

let sv1 = new SinhVien('SV01', 'Le', 'Dung', 2004, 'ledung@gmail.com' );
let sv2 = new SinhVien('SV02', 'Truong', 'Tho', 2003, 'truongtho@gmail.com' );
let sv3 = new SinhVien('SV03', 'Kinh', 'Thanh', 2002, 'kinhthanh@gmail.com' );
let sv4 = new SinhVien('SV04', 'Viet', 'Trieu', 2004, 'viettrieu@gmail.com' );
let sv5 = new SinhVien('SV05', 'Gia', 'Bao', 2004 , 'giabao@gmail.com');
console.log( sv1.getFullName() + ":" + sv1.getAge());
console.log( sv2.getFullName() + ":" + sv2.getAge());
console.log( sv3.getFullName() + ":" + sv3.getAge());
console.log(sv4.getFullName()+ ":" +sv4.getFullName());
console.log(sv5.getAge()+ ":"+ sv5.getFullName());