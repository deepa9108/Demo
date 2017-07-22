class Student
{
   static count : number = 0;
   public static display()
    {
        var stname='arnav';
        var age=2;
        console.log("hi..." +stname+ "\n age="+age);
        this.count++;
        console.log(this.count);
    }
}
//let s1:Student=new Student();

Student.display();