package second;

public class Kim extends Student {	
	
	// Kim 생성자
	public Kim(String name, String school, int age, int student_Id) { 
		super(name, school, age, student_Id);
	}
	
	public void todo() {
		System.out.println("점심은 김가네 김밥");
	}
}
