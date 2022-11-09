package sesac_project;

import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList; //ArrayList 클래스 크기를 미리 정하지 않아도 되는 배열, 배열에서 많은 조작이 필요할 때 유용

public class Main {
	public static int number() {
		return 5;
	}
	public static String str() {
		return "aaa";
	}
	public static void hello () {
		System.out.println("hello");
	}
	public static double sum(double a, double b) {
		return a + b;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		<ArrayList실습>
		ArrayList<String> arrayList = new ArrayList<>(); 
		while(true) {
			System.out.println("문자를 입력 해 주세요.");
			Scanner scanner = new Scanner(System.in);
			String text = scanner.next();
			arrayList.add(text);
			
			if( text.equals("exit")) break;
			
		}
		
		System.out.println(arrayList);

//------------------------------------------------------------------------------------
//		<배열 실습>
//		//숫자 5개의 정수를 입력 받아, 평균을 구하는 프로그램
//		System.out.println("5개의 정수를 입력하세요.");
//		Scanner scanner = new Scanner(System.in);
//		int num1 = scanner.nextInt();
//		int num2 = scanner.nextInt();
//		int num3 = scanner.nextInt();
//		int num4 = scanner.nextInt();
//		int num5 = scanner.nextInt();
//		int[] numArray = {num1,num2,num3,num4,num5};
//		
//		
//		int sum = (numArray[0] + numArray[1]+ numArray[2]+ numArray[3]+ numArray[4]);
//
//		System.out.print("평균은 ");
//		System.out.print((double)sum/5);
//------------------------------------------------------------------------------------		
//		<9. ArrayList>
//		ArrayList<Integer> arrayList1 = new ArrayList<>(); 
//		ArrayList<Integer> arrayList2 = new ArrayList<>();
//		for ( int i =0; i<10; i++) {
//			arrayList2.add(i);
//		}
//		ArrayList<String> arrayList3 = new ArrayList<>();
//		
//		arrayList1.add(1); // [1]
//		arrayList1.add(2); // [ 1, 2 ]
//		arrayList1.add(0, 3); //인덱스 0번에 숫자 3를 넣겠다
//		//[ 3, 1, 2]
//		
//		arrayList1.addAll(arrayList2); //arrayLit1뒤에 arrayList2 추
//		// [3,1,2,0,1,2,...,9]
//		
//		arrayList1.remove(2); //인덱스2에 위치한 값을 삭제하겠다.
//		// [3,1,0,1,2,....,9]
//		
//		arrayList1.clear();
//		// []
//		
////		for ( int value : arrayList1 ) {
////			System.out.print(value+ " ");
////		}
//		
//		for ( int i =0; i<arrayList1.size(); i++) {
//			System.out.print(arrayList1.get(i) + " ");
//		}
//
//		System.out.println("\n" + arrayList1.size());
//		
//		System.out.println(arrayList1.indexOf(2)); //arrayList1중 가장 앞에있는 숫자 2를 찾아서 인덱스를 출력
//		//없는 수를 ()안에 적으면 -1이 출력
//		
//		
//------------------------------------------------------------------------------------		
//		<8. 배열>
////		int[] intArray; //배열 선언
////		intArray = new int[3]; //배열 생성 
//		
//		int[] intArray = new int [2]; //배열 선언과 생성을 동시에 할 수 있음 
//		intArray[0] = 1; // 배열 초기화 
//		intArray[1] = 2;
//		
//		int[] intArray2 = { 1, 2 }; // 선언과 초기화를 동시에 
//		System.out.println(intArray2); // 배열안에 들어간 값을 보고싶은데 원하는 대로 보여지지 않음 
//		System.out.println(intArray2[0]); // 0번째 인덱스
//		
//		for (int i = 0; i<intArray2.length; i++) {
////			System.out.println(intArray2[i]);
//			
//			//배열처럼 보여지고 싶다면
//			if ( i == 0 ) System.out.print("[");
//			System.out.print(intArray2[i]);
//			if ( i == intArray2.length-1) System.out.print("]");
//			else System.out.print(", ");
//		}
//		
//		
//		
//		for ( int value : intArray2 ) {
//			System.out.println(value);
//		}
//		
//		//Arrays 클래스 사용하여 배열로 보여지게.
//		System.out.println(Arrays.toString(intArray));
//------------------------------------------------------------------------------------				
//		<메소드 실습>
//		System.out.println("숫자 두 개를 입력하세요.");
//		Scanner scanner = new Scanner(System.in);
//		double  num1 = scanner.nextDouble();
//		double  num2 = scanner.nextDouble();
//		
//		System.out.println("덧셈 결과 : " + sum(num1, num2));
//		System.out.println("뺄셈 결과 : " + (num1 - num2));
//		System.out.println("나눗셈 결과 : " +(( double )(num1 / num2)));
//		System.out.println("곱셈 결과 : " + (num1 * num2));
//		
//------------------------------------------------------------------------------------				
//		<반복문 실습>
//		int i;
//		System.out.println("숫자를 입력하세요.");
//		Scanner scanner = new Scanner(System.in);
//		int num = scanner.nextInt();
//		
//		for ( i = 0; i < num; i++ ) {
//			System.out.print(i +" ");
//		}
//------------------------------------------------------------------------------------				
//		<조건문 실습2>
//		System.out.println("이름을 입력하세요.");
//		Scanner scanner = new Scanner(System.in);
//		
//		String name = scanner.next();
//		
//		if ( name.equals("홍길동") ) {
//			System.out.println("남자");
//		} else System.out.println("여자");
		
		
//------------------------------------------------------------------------------------		
//		<조건문 실습1>
//		
//		System.out.println("나이를 입력하세요.");
//		Scanner scanner = new Scanner(System.in);
//		
//		int age = scanner.nextInt();
//		
//		if ( 0 < age && age < 8 ) {
//			System.out.println("유아");
//		}
//		else if ( 8 <= age && age < 14 ) {
//			System.out.println("초등학생");
//		}
//		else if ( 14 <= age && age < 17 ) {
//			System.out.println("중학생");
//		}
//		else if ( 17 <= age && age < 20 ) {
//			System.out.println("고등학생");
//		}
//		else if ( age >= 20 ) {
//			System.out.println("성인");
//		}
//------------------------------------------------------------------------------------			
//		<7. 함수 실행>
		//Main프로젝트 안에있는 main함수는 호출하지 않아도 실행되기 때문에 main을 따로 부르진 않는다.
//		hello();
//		
//		int a = number();
//		System.out.println(a);
		
//------------------------------------------------------------------------------------
//		<6. 반복문>
		//<for>
//		int i ;
//		for ( i = 0; i < 10; i++ ) {
//			System.out.print( i + " ");
//		}
		//<while>
//		int i = 10;
//		while ( i < 10) {
//			System.out.print( i + " ");
//			i++;
//		}
//		
//		int j = 10;
//		do { //조건이 어떻든(참이든 거짓이든) do에서 한번은 실행 시킨다.
//			System.out.print( j +"한번은 무조 실행한다는 do");
//			j++;
//		}
//		while ( j < 10);

//		Scanner scanner = new Scanner(System.in);
//		
//		while(true) {
//			System.out.println("숫자룰 입력 하세요. 0을 입력하면 종료");
//			int number = scanner.nextInt();
//			
//			if( number == 0 ) break;
//			
//		}
//		System.out.println("종료");
//------------------------------------------------------------------------------------
//		<5. switch문법>
//		int number1 = 9;
//		switch (number1 % 3) {
//		case 0 :
//			System.out.println("3의 배수");
//			break;
//		default : 
//			System.out.println("3의 배수 아님");
//		}
		
//------------------------------------------------------------------------------------
//		<4. if문>
//		int number2 = 10;
//		if (number2 % 3 == 0) {
//			System.out.println("3의 배수");
//		}
//		else System.out.println("3의 배수 아님");
		
//		String str = new String("홍길동");
//		if (str == "홍길동") {
////			System.out.println("남자");
////		}
////		else System.out.println("여자");
//		
//		String str2 = "홍길동";
////		if (str.equals (str2)) {
//			System.out.println("남자");
//		}
//		else System.out.println("여자");
//------------------------------------------------------------------------------------
//		<실습> 
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("이름을 입력하세요.");
//		String name = scanner.next();
//		
//		System.out.println("나이를 입력하세요.");
//		int age = scanner.nextInt();
//		
//		System.out.println("안녕하세요!" + name + "님 (" + age +"세)");
//		scanner.close();
//		<3. 연산자 >
//		System.out.println(5.0/2.0);
//		System.out.println(5/2);
//		
//		double a = 5.2;
//		double b = 2.0;
//		System.out.println(a/b);
//		
//		int c = 5;
//		int d = 2;
//		System.out.println(c/d);
//		System.out.println((double)c/d); // 강제 형 변환 

		
//------------------------------------------------------------------------------------	
//		<2. Scanner>
//		System.out.println("이름, 나이, 키, 결혼 여부를 입력 해 주세요.");
//		//문서영 28 157.5 false
//		Scanner scanner = new Scanner(System.in); // 입력받을 준비 
//		
//		String name = scanner.next();
//		int age = scanner.nextInt();
//		double height = scanner.nextDouble();
//		boolean marriage = scanner.nextBoolean();
//		
//		System.out.println(name);
//		System.out.println(age);
//		System.out.println(height);
//		System.out.println(marriage);
//		
//		scanner.close();
//		// 스캐너를 닫아줌. 안써도됨.
//	

//------------------------------------------------------------------------------------		
//		<1. 데이터타입>
//		System.out.println("hello");
//		
//		boolean logic = true;
//		char ch = 'A';
//		int number = 1234;
//		double number2 = 5.6;
//		
//		System.out.println(logic);
//		System.out.println(ch);
//		System.out.println(number);
//		System.out.println(number2);
//		
//		
//		String str = "string1";
//		String str2 = new String("string2");
//		
//		System.out.println(str);
//		System.out.println(str2);
	}

}
