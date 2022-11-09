package sesac_project;

public class Rectangle {
	
	private double width;
	private double height;
	
//	private static double pi = 3.14;
	
	private static int COUNT = 0;
	
	public static int getCount() {
		return COUNT;
	}
	

//	public static double getPi() {
////		this.pi = 1; //static변수는 this는 사용이 불가능하다
//		return pi;
//	}
	
	public Rectangle(double num1) {
		COUNT++;
		this.width = num1;
//		this.height = num2;

	}
	
	
//	<getter setter>
//	public double getWidth() {
//		return width;
//	}
//	public double getHeight() {
//		return height;
//	}
//	public void setWidth(double width) {
//		this.width = width;
//	}
//	public void setHeigth(double height) {
//		this.height = height;
//	}
	
	public double getWidth() {
//		getPi();
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

//	public void area() {
//		System.out.println(width*height);
//	}

	public double area() {
		return this.width * this.height;
	}
}