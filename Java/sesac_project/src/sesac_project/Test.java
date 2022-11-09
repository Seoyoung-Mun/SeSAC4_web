package sesac_project;
import second.Second;//패키지가 다를 때 가져오기 

//extends Second 로패키지로 상속할 수 있음 
public class Test extends Second {
//	<필드>
	public int num;
	public String str = "문자열";
	
//	public void test () {
////		void는 반환값 (return)이 없는 함수 
//	}
//	<생성자-클래스와 이름이 같아야하고 리턴타입을 적지 않음>
	public Test(int num) {
		this.num = num; // this키워드를 사용하지 않은 num은 매개변수 num
		// class전역에 있는 num을 부를땐 this키워드 사용  
	}
//	<메서드>
	public void testMethod() {
		System.out.println("test");
		
	}
}
