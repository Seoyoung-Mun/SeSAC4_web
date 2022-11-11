package second;

public class Samsung implements Phone {
	
	@Override
	public void sentCall() {
		System.out.println("뚜루루루");
	}
	@Override
	public  void receiveCall() {
		System.out.println("전화받아");
	}
	
	
}
