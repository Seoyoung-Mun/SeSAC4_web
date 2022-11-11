package second;

public abstract class Student {
	private String name;
	private String school;
	private int age;
	private int student_Id;
	
	public Student ( String name, String school, int age, int student_Id) {
		this.name = name;
		this.school = school;
		this.age = age;
		this.student_Id = student_Id;
	}

	public abstract void todo();
}
