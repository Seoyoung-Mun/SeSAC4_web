package sesac_project;

// abstract로 추상클래스 선언
public abstract class Person {
	private int age;
	private String name;
	
	public abstract void printName(); //추상 메소드 
	
//	public abstract void todo() {};
	
	public Person(int age, String name) {
		this.age = age;
		this.name = name;
		
	}
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	
}
