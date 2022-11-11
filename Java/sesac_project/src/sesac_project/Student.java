package sesac_project;

//추상 클래스를 상속 받았을때 추상 메서드를 재정의 해주지 않으면 오류가 남 
public class Student extends Person{

	private String school;
	private int schoolNum;
	
	public void printName() {
		System.out.println(getName());
	};
	public void todo() {
		System.out.println("공부하기");
	}
	
	public Student (int age, String name ) {
		super(age, name); 
		// 생성자를 호출 할 수 있는 키워드.super는 생성자의 첫줄에 반드시 와야함 
//		setAge(age);
//		setName(name); 
		//super키워드를 사용해 주어서 setAge(age),setName(name)을 써주지 않아도 
	}
	
	public String getSchool() {
		return school;
	}
	
	public void setSchool (String school) {
		this.school = school;
	}
	
	public int getSchoolNum() {
		return schoolNum;
	}
	
	public void setSchool (int schoolNum) {
		this.schoolNum = schoolNum;
	}
	
}
