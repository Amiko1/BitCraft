/*

იმისათვის რომ Array.map - ის კლონი შევქმნათ საჭიროა შემდეგი ნაბიჯები:
  1) ვქმნით ახალი მეთოდს Array prototype - ში, როგორც ვიცით Constructor ფუნქციებს გააჩნიათ prototype ობიექტი რომელში არსებული მეთოდების გამოყენებაც მის instance - ებს შეუძლიათ, ჩვენს შემთხვევაში Array instance იქნება  ნებისმიერი Array რომესლაც შევქმნით მაგალითად: let cars = []
  2) map - ის გამოძახების დროს არგუმენტად გადავცემთ ფუნქციას, MyMap - ის შემთხვევაშიც ასე უნდა მოვიქცეთ, გადაცემული ფუნქცის გამოძახება უნდა მოხდეს ყოველი Array item - ის იტერაციისას სამი არგუმენტით: elemeny,index,მთლიანი array
  3) საბოლოოდ ჩვენ დავაბრუნებთ ახალ Array - ის.
  
*/

Array.prototype.mymap = function(callback) {
    const resultArray = [];
    // ვქმნით ახალ მასივს რადგან ვიცით რომ როგორც map - მა შეცვლილი ვერსია უნდა დავაბრუნოთ.
    for (let index = 0; index < this.length; index++) {
        /* 
          ვიყენებთ For ლუპს რათა Array - ის აითემებზე მოვახდინოთ იტერაცია, ამისთვის ვიყენეთ 
          this keyword - ს, ვიცით რომ როცა ფუნქციას ვიძახებთ, ჩველებრივ this უდრის იმ ობიექტს   
          რომლის მეშვეობითაც სრულდება ფუნქციის გამოძახება.
        */
        resultArray.push(callback(this[index], index, this));
        // აქ კი ახალ ერეიში ვინახავთ იმ Value - ს რასაც ჩვენი Callback ფუნქცია დაგვიბრუნებს
    }
    return resultArray;
    // საბოლოოდ კი ვაბრუნებთ ახალ მასივს.
}

const numbers = [1,2,3];
const scaleNumbersWithMap = numbers.map((number, index, array) => {
  return number * 2
})
const scaleNumbersWithMyMap = numbers.mymap ((number, index, array) => {
  return number * 2
})

console.log(scaleNumbersWithMap , scaleNumbersWithMyMap );
// ორივე მნიშვნელობა დააბრუნებს ერთი და იგივეს.
